import { SELECTOR } from '../../src/js/constants/index.js';

describe('Game progress and result test', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get(SELECTOR.CAR_NAME.INPUT).type('EAST,WEST,SOUTH,NORTH');
    cy.get(SELECTOR.CAR_NAME.BUTTON).click();
    cy.get(SELECTOR.GAME_COUNT.INPUT).type('5');
    cy.get(SELECTOR.GAME_COUNT.BUTTON).click();
  });

  it('Can render wait animation', () => {
    cy.get(SELECTOR.GAME_PROGRESS.WAIT_ANIMATION).should('exist');
    cy.tick(200);
    cy.get(SELECTOR.GAME_PROGRESS.WAIT_ANIMATION).should('not.exist');
  });

  it('Can render game progress', () => {
    const expectedNames = 'EAST,WEST,SOUTH,NORTH'.split(',');

    cy.get(SELECTOR.GAME_PROGRESS.CONTAINER).should('exist');
    cy.get(SELECTOR.GAME_PROGRESS.CAR).each((car, index) => {
      cy.wrap(car).should('have.text', expectedNames[index]);
    });
  });

  it('Can render game result', () => {
    cy.get(SELECTOR.GAME_RESULT.CONTAINER).should('not.exist');
    cy.tick(2000);
    cy.get(SELECTOR.GAME_RESULT.CONTAINER).should('exist');
    cy.get(SELECTOR.GAME_RESULT.WINNER).should('exist');
    cy.get(SELECTOR.GAME_RESULT.BUTTON).should('exist');
  });

  it('Can reset game when reset button clicked', () => {
    cy.get(SELECTOR.GAME_RESULT.BUTTON).should('not.exist');
    cy.tick(2000);
    cy.get(SELECTOR.GAME_RESULT.BUTTON).click();
    cy.get(SELECTOR.CAR_NAME.CONTAINER).should('exist');
    cy.get(SELECTOR.GAME_COUNT.CONTAINER).should('not.exist');
    cy.get(SELECTOR.GAME_PROGRESS.CONTAINER).should('not.exist');
    cy.get(SELECTOR.GAME_RESULT.CONTAINER).should('not.exist');
  });
});
