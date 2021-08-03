
/*
    This file contain get funtions to return DOM elements for 
    the "Payment" step during the checkout process
*/

class PaymentPage {
   
    getStepTitle() {
      return cy.get('#center_column > .page-heading');
    }
  
    getPayByBankWire() {
        return cy.get('a[title="Pay by bank wire"');
    }
  
    getPayByCheque() {
        return cy.get('a[title="Pay by check."');
    }

    getTotalShipping() {
        return cy.get('td#total_shipping');
    }
 
    getTotalPrice() {
        return cy.get('span#total_price');
    }

    getCartTable() {
        return cy.get('table#cart_summary > tbody');
    }

    getTotalPrice() {
        return cy.get('span#total_price');
    }

  }
    
  export default PaymentPage;