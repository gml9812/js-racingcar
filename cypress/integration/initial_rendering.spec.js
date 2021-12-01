import { SELECTOR } from '../../src/js/constants/index.js';

describe('Initial rendering test', () => {
  before(() => {
    cy.visit('/');
  });

  it('Can render initial display', () => {
    cy.get(SELECTOR.TITLE.CONTAINER).should('exist');
    cy.get(SELECTOR.CAR_NAME.DESCRIPTION).should('exist');
    cy.get(SELECTOR.CAR_NAME.INPUT).should('exist');
    cy.get(SELECTOR.CAR_NAME.BUTTON).should('exist');
  });
});
