/// <reference types="cypress" />

context('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('display the title and the map on the homepage', () => {
      cy.findByRole('heading', {name: /Le bon camping/i}).should('exist');

      cy.findByRole('img', {name: /Map/i}).should('exist');
  });
});
