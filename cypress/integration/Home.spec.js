/// <reference types='cypress'/>

context('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('data received', () => {
    cy.get('img', { name: /free shirt/i });
  });
});
