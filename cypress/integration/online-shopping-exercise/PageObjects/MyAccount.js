
/*
    This file contain get funtions to return DOM elements for 
    the my account page
*/

class MyAccountPage {
   
    getStepTitle() {
      return cy.get('#center_column > .page-heading');
    }
  
    getOrderHistoryButton() {
        return cy.get('a[title="Orders"]');
    }
  
    getOrderHistoryTable() {
        return cy.get('table#order-list > tbody');
    }

    getMyAccountInformationButton() {
        return cy.get('a[title="Information"]');
    }

    getMyAccountGetFirstName() {
        return cy.get('#firstname');
    }

    getMyAccountGetLastName() {
        return cy.get('#lastname');
    }

    getMyAccountEmail() {
        return cy.get('#email');
    }
 
  }
    
  export default MyAccountPage;