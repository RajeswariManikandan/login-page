import { faker } from '@faker-js/faker'


describe('Magento CreateAccount LoginPage', () => {
  
  const password = 'Test@123455423';
  it('Account Creation', () => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');
      // Fill out the registration form

      cy.fixture('logindetails').then( (data)=> {
      cy.get('#firstname').type(data.fname);
      cy.get('#lastname').type(data.lname);
      cy.get('#email_address').type(faker.internet.email()); 
      cy.get('#password').type(password);
      cy.get('#password-confirmation').type(password);
      // Submit the form
      cy.get('button.submit').click();
      // Verify success message
      cy.contains('Thank you for registering with Main Website Store.').should('be.visible');
      // user is redirected to My Account page
      cy.url().should('include', '/customer/account/');
      })
  });

});