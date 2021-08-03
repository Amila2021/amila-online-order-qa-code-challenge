
/*
    This file contain get funtions to return DOM elements for 
    the "Order summery" step during the checkout process
*/

class OrderSummeryPage {
   
    getStepTitle() {
      return cy.get('#center_column > .page-heading');
    }
  
    getSubTitle() {
        return cy.get('.page-subheading');
    }
  
    getTotalPrice() {
        return cy.get('#amount');
    }

    getSubmitButton() {
        return cy.get('#cart_navigation > .btn.btn-default.button.button-medium');
    }

    getTotalPrice() {
        return cy.get('span#amount');
      }
 
  }
    
  export default OrderSummeryPage;