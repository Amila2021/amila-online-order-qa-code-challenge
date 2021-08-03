
/*
    This file contain get funtions to return DOM elements for 
    the "Registration" page
*/

class RegistrationPage {
   
    getStepTitle() {
      return cy.get('#noSlide > .page-heading');
    }
  

    getGetFirstName() {
        return cy.get('#customer_firstname');
    }


    getGetLastName() {
        return cy.get('#customer_lastname');
    }

    getEmail() {
        return cy.get('#email');
    }


    getPassword() {
        return cy.get('#passwd');
    }


    getStreetAddress() {
        return cy.get('input[name="address1"]');
    }


    getGetCity() {
        return cy.get('#city');
    }


    getGetState() {
        return cy.get('#id_state');
    }


    getGetPostCode() {
        return cy.get('#postcode');
    }


    getGetCountry() {
        return cy.get('#id_country');
    }
    

    getGetMobile() {
        return cy.get('#phone_mobile');
    }


    getAlias() {
        return cy.get('#alias');
    }

    getSubmitButton() {
        return cy.get('#submitAccount');
    }


    getRegistrationServerErrors() {
        return cy.get('#center_column > .alert.alert-danger');
    }
      
  }
    
  export default RegistrationPage;