/// <reference types='cypress'/>

context('Home Page', () => {
  it('User Can See Cart', () => {
    cy.get('body').then(body => {
      //check if there is a link with text login
      if (
        body.find('ul').find('link', {
          name: /login/i,
        })
      ) {
        // goes to login page
        cy.visit('http://localhost:3000/login');
        // write some text to login
        cy.findByRole('textbox').type('email@email.com');
        cy.findByPlaceholderText(/password/i).type('123456789');
        cy.findByRole('button', { name: /login/i }).click();
        // goes to products page by clicking on its link
        cy.get('ul > :nth-child(1) > a').click();
        // goes to single product page by clicking on its link
        cy.get(':nth-child(1) > footer > .link').click();
        // click on add to cart
        cy.get('.css-17lxpr6').click();
        // goes to cart page
        cy.get('.css-1e63d2v > a').click();
        // increase quantity by 1
        cy.get('.plus_minus > :nth-child(1) > svg > path').click();
        // decrease quantity by 1
        cy.get('.plus_minus > :nth-child(2) > svg > path').click();
        // goes to checkout page
        cy.get('.btn_container > :nth-child(1) > a').click();
        // fill the inputs for checkout
        cy.get('[placeholder="Your Name"]').type('user');
        cy.get('[placeholder="Your Email"]').type('user@email.com');
        cy.get('[type="number"]').type('0123456789');
        cy.get('textarea').type("user's address");
        cy.get('.css-17lxpr6').click();
        // checkout
      }
    });
  });
});
