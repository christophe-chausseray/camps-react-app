/// <reference types="cypress" />

context('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('display the title and the marker on the map', () => {
    cy.findByRole('heading', { name: /Le bon camping/i }).should('exist');

    cy.findByRole('main', { name: /Map/i }).should('exist');

    cy.findAllByRole('listitem', { name: 'CampingMarker' }).should((campingMarkers) => {
      expect(campingMarkers.length).to.equal(2);
    });
  });
});
