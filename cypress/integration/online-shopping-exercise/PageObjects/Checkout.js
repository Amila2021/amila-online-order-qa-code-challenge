
/*
    This file contain get funtions to return DOM elements for 
    the "Checkout/Cart summary" step during the checkout process
*/
class Checkout {
    
    getCartSummeryTitle() {
      return cy.get('h1#cart_title');
    }

    getCartSummeryTab() {
        return cy.get('ul#order_step > .first.step_current');
    }

    getProceedToCheckoutButton() {
      return cy.get('#center_column  a[title="Proceed to checkout"]');
    }

    getTotalPrice() {
      return cy.get('span#total_price');
    }
}
  
export default Checkout;