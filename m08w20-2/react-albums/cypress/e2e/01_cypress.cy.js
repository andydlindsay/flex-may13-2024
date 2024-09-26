describe('tests for Cypress', () => {

  it('can check if true is true', () => {
    expect(true).to.equal(true);
  });

  it('can visit the home page', () => {

    cy.visit('http://localhost:8765/')

  });


})