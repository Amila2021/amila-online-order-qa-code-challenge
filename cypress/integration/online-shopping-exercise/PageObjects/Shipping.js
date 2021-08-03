
/*
    This file contain get funtions to return DOM elements for 
    the "Shipping" step during the checkout process
*/


class ShippingPage {
   
  getStepTitle() {
    return cy.get('#carrier_area > .page-heading');
  }

  getHeaderSignInLink() {
      return cy.get('.header_user_info > a[title="Log in to your customer account"]');
    }

    getShippingOption() {
        return cy.get('input[type="radio"]'); 
    }

    getCheckBox() {
        return cy.get('#cgv');
    }

    getShippingPrice() {
      return cy.get('.delivery_option_price:nth-of-type(4) .delivery_option_price');
    }

    getProceedToCheckout() {
      return cy.get('button[name="processCarrier"]');
    }

    getTAndCMissingAlert() {
      return cy.get('.fancybox-error');
    }

    getTAndCMissingAlertCloseButton() {
      return cy.get('a[title="Close"]');
    }
    
}
  
export default ShippingPage;