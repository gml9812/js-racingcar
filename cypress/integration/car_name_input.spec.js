import { SELECTOR, WARNING } from '../../src/js/constants/index.js';

const resetInput = () => {
  cy.get(SELECTOR.CAR_NAME.INPUT).then((input) => input.val(''));
};

const testCorrectInput = (value) => {
  cy.get(SELECTOR.CAR_NAME.INPUT).type(value);
  cy.get(SELECTOR.CAR_NAME.BUTTON).click();
  cy.get(SELECTOR.CAR_NAME.INPUT).should('have.value', value);
  resetInput();
};
const testIncorrectInput = (value, warning) => {
  const alertStub = cy.stub();
  cy.on('window:alert', alertStub);
  cy.get(SELECTOR.CAR_NAME.INPUT).type(value);
  cy.get(SELECTOR.CAR_NAME.BUTTON)
    .click()
    .then(() => {
      expect(alertStub.getCall(0)).to.be.calledWith(warning);
    });
  cy.get(SELECTOR.CAR_NAME.INPUT).should('have.value', '');
  resetInput();
};

describe('Car name input test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Can check initial state', () => {
    cy.get(SELECTOR.TITLE.CONTAINER).should('exist');
    cy.get(SELECTOR.CAR_NAME.DESCRIPTION).should('exist');
    cy.get(SELECTOR.CAR_NAME.INPUT).should('exist');
    cy.get(SELECTOR.CAR_NAME.BUTTON).should('exist');
  });

  it('Can check car name length', () => {
    testCorrectInput('CORR,ECT,CAR,NAME');
    testIncorrectInput('INCORR,ECTCAR', WARNING.CAR_NAME.MAX_LENGTH);
  });

  it('Can check if car names overlap', () => {
    testCorrectInput('NO,OVERLAP');
    testIncorrectInput('OVERLAP,OVERLAP', WARNING.CAR_NAME.DUPLICATION);
  });

  it('Can check number of cars', () => {
    testCorrectInput('MORE,THAN,TWO,CARS');
    testIncorrectInput('ONE', WARNING.CAR_NAME.MIN_NUMBER);
  });
  /*
  it('Can check when correct car names are given', () => {
  });
  */
});
