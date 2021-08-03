
/*
    This file contain get funtions to return DOM elements for 
    the "Login" step during the checkout process
*/

class AuthenticationPage {
    
    getStepTitle() {
        return cy.get('.page-heading');
    }

    getLoginEmail() {
        return cy.get('#email');
    }

    getLoginPassword() {
        return cy.get('#passwd');
    }

    getSignInButton() {
        return cy.get('button#SubmitLogin');
    }

    getCreateEmail() {
        return cy.get('#email_create');
    }

    getCreateAccountButton() {
        return cy.get('#SubmitCreate');
    }

    getValidationMessages() {
        return cy.get('div#center_column > .alert.alert-danger');
    }

    getValidationMessagesRegistration() {
        return cy.get('#create_account_error li');
    }
    
  }
  
  export default AuthenticationPage;