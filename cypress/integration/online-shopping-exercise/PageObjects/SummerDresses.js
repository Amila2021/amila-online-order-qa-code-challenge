
/*
    This file contain get funtions to return DOM elements for 
    the "Summer Dresses" page
*/

class SummerDressesPage {
      
    getCategoryName(){
      return cy.get('.category-name', { timeout: 5000 }).should('be.visible');

    }

    getProductPrintedSummerDressWithDiscount() {
        return cy.get('.first-item-of-mobile-line.first-item-of-tablet-line.last-line.last-mobile-line');
    }

    getProductChiffonDress() {
        return cy.get('.product-container  h5 > a[title="Printed Chiffon Dress"]');
    }

    getPrintedSummerDressAddToCartButton() {
      return cy.get('.first-item-of-mobile-line.first-item-of-tablet-line.last-line.last-mobile-line > .product-container a[title="Add to cart"]');
    }

    getChiffonDressAddToCartButton() {
      return cy.get('.first-item-of-tablet-line.last-in-line.last-item-of-mobile-line.last-line.last-mobile-line > .product-container a[title="Add to cart"]');
    }

  }
  

  export default SummerDressesPage;