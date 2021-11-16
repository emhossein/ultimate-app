/// <reference types='cypress'/>

context('Home Page', () => {
  it('User Can Login', () => {
    cy.visit('http://localhost:3000/login');
    cy.findByRole('textbox').type('email@email.com');
    cy.findByPlaceholderText(/password/i).type('123456789');
    cy.findByRole('button', { name: /login/i }).click();
  });
  it('User Can Logout', () => {
    cy.visit('http://localhost:3000/login');
    cy.findByRole('textbox').type('email@email.com');
    cy.findByPlaceholderText(/password/i).type('123456789');
    cy.findByRole('button', { name: /login/i }).click();
    cy.findByText(/logout/i).click();
  });
});
