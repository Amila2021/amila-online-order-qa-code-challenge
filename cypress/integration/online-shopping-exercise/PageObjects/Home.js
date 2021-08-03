
/*
    This file contain get funtions to return DOM elements for 
    the home page
*/

class HomePage {
    visit() {
      cy.visit('http://automationpractice.com/index.php');
    }
  
    getMenuDresses() {
      return cy.get('#block_top_menu > ul:nth-child(2) > li:nth-of-type(2) .sf-with-ul');
    }

    getSubMenuSummerDresses() {
      return cy.get('#block_top_menu > ul > li:nth-of-type(2) > ul > li:nth-of-type(3) > a');
    }

    getHeaderShoppingCart() {
      return cy.get('.shopping_cart');
    }

    getHeaderShoppingCartFirstProduct() {
      return cy.get('.shopping_cart');
    }

    getHeaderShoppingCartQuantity() {
      return cy.get('a[title="View my shopping cart"] > .ajax_cart_quantity');
    }

    getHeaderSignInLink() {
      return cy.get('.header_user_info > a[title="Log in to your customer account"]');
    }

    getProfileLink() {
      return cy.get('a[title="View my customer account"]');
    }

  }
  
  export default HomePage;