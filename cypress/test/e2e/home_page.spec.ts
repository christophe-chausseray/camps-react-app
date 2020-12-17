/// <reference types="cypress" />

context('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('display the title and the marker on the map', () => {
      cy.findByRole('heading', {name: /Le bon camping/i}).should('exist');

      cy.findByRole('img', {name: /Map/i}).should('exist');

      cy.findAllByTestId('camping-marker').should(campingMarkers => {
        expect(campingMarkers.length).to.equal(2);
      });
  });
});
