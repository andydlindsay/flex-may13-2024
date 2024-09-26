describe('tests for the checkboxes', () => {

  beforeEach(() => {
    cy.visit('/');
  })

  it('can toggle the Explicit checkbox', () => {
    cy.get('.filters__form-group')
      .first()
      .find('input')
      .uncheck()
      .should('not.be.checked')
  });

  it('can toggle a checkbox value by clicking on the label', () => {
    cy.contains('EP')
      .click()

    cy.get('#EP')
      .should('be.checked');
  });


});