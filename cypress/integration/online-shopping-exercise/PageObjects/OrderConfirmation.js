
/*
    This file contain get funtions to return DOM elements for 
    the "Order confirmation" step during the checkout process
*/

class OrderConfirmationPage {
   
    getStepTitle() {
      return cy.get('#center_column > .page-heading');
    }
  
    getContentDescription() {
        return cy.get('#center_column > .box');
    }
  
    getTotalPrice() {
        return cy.get('.price > strong');
    }

    getOrderReferenceText() {
      return cy.get('.box br:nth-child(10)');
    }
 
  }
    
  export default OrderConfirmationPage;