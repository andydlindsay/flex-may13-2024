it('can display the results of an api call', () => {

  // visit the home page
  cy.visit('/');

  // set up a fake endpoint that always responds with hardcoded data
  cy.intercept('GET', '**/search*', { fixture: 'eminem' })
    .as('getEminemData');

  // find the input field and type "Eminem"
  cy.get('.search__form')
    .find('input')
    .type('Eminem');

  // wait for the AJAX request to resolve successfully
  cy.wait('@getEminemData');

  // try to find a specific album
  cy.contains('The Marshall Mathers LP')

  // uncheck the explicit checkbox
  cy.get('#Explicit')
    .uncheck();

  // assert that one of the explicit albums no longer appears
  cy.should('not.contain', 'Curtain Call 2');

});