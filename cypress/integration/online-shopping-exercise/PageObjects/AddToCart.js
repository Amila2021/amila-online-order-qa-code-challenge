
/*
    This file contain get funtions to return DOM elements for 
    the "Add to cart" dialog box
*/


class AddToCart {
    
    getContinueShopping() {
      return cy.get('span[title="Continue shopping"]');
    }

    getProceedToCheckout() {
        return cy.get('a[title="Proceed to checkout"]');
    }

    getSuccessString() {
        return cy.get('[class="layer_cart_product col-xs-12 col-md-6"] h2');
    }

    getAddedQuantity() {
        return cy.get('#layer_cart_product_quantity');
    }

    getTotalQuantity() {
        return cy.get('.ajax_cart_product_txt_s.unvisible > .ajax_cart_quantity');
    }

    getModalBox() {
        return cy.get('div#layer_cart > .clearfix');
    }
        
    
  }
  
  export default AddToCart;