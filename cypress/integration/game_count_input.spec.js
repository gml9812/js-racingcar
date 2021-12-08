import { SELECTOR, WARNING } from '../../src/js/constants/index.js';

const resetInput = () => {
  cy.get(SELECTOR.GAME_COUNT.INPUT).then((input) => input.val(''));
};

const testCorrectInput = (value) => {
  cy.get(SELECTOR.GAME_COUNT.INPUT).type(value);
  cy.get(SELECTOR.GAME_COUNT.BUTTON).click();
  cy.get(SELECTOR.GAME_COUNT.INPUT).should('have.value', value);
  resetInput();
};
const testIncorrectInput = (value, warning) => {
  const alertStub = cy.stub();
  cy.on('window:alert', alertStub);
  cy.get(SELECTOR.GAME_COUNT.INPUT).type(value);
  cy.get(SELECTOR.GAME_COUNT.BUTTON)
    .click()
    .then(() => {
      expect(alertStub.getCall(0)).to.be.calledWith(warning);
    });
  cy.get(SELECTOR.GAME_COUNT.INPUT).should('have.value', '');
  resetInput();
};

describe('Game count input test', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get(SELECTOR.CAR_NAME.INPUT).type('EAST,WEST,SOUTH,NORTH');
    cy.get(SELECTOR.CAR_NAME.BUTTON).click();
  });

  it('Can check initial state', () => {
    cy.get(SELECTOR.GAME_COUNT.CONTAINER).should('exist');
    cy.get(SELECTOR.GAME_COUNT.DESCRIPTION).should('exist');
    cy.get(SELECTOR.GAME_COUNT.INPUT).should('exist');
    cy.get(SELECTOR.GAME_COUNT.BUTTON).should('exist');
  });

  it('Game count should be natural number', () => {
    testCorrectInput('5');
    testIncorrectInput('number', WARNING.GAME_COUNT.NATURAL_NUMBER);
    testIncorrectInput('1.2234', WARNING.GAME_COUNT.NATURAL_NUMBER);
  });

  it('Can check minimum game count', () => {
    testCorrectInput('4');
    testIncorrectInput('0', WARNING.CAR_NAME.MIN_GAME_NUM);
    testIncorrectInput('1', WARNING.CAR_NAME.MIN_GAME_NUM);
  });

  it('Can check maximum game count', () => {
    testCorrectInput('19');
    testIncorrectInput('21', WARNING.CAR_NAME.MAX_GAME_NUM);
  });

  /*
  it('Can check when correct game count is given', () => {
  });
  */
});
