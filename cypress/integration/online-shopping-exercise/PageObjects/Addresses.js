/*
    This file contain get funtions to return DOM elements for 
    the "Address Selection" step during the checkout process
*/

class AddressesPage {
    
    getStepTitle() {
        return cy.get('div#center_column > .page-heading');
    }

    getAddressDropDown() {
        return cy.get('select#id_address_delivery');
    }

    getAddressDropDownFirstValue() {
        return cy.get('select#id_address_delivery > option:nth-of-type(1)');
    }

    getCheckbox() {
        return cy.get('#addressesAreEquals');
    }

    getDeliveryAddresSubHeading() {
        return cy.get('#address_delivery .page-subheading');
    }

    getDeliveryAddresFirstName() {
        return cy.get('#address_delivery .address_firstname');
    }

    getDeliveryAddresStreetAddress() {
        return cy.get('#address_delivery .address_address2');
    }

    getDeliveryAddresState() {
        return cy.get('#address_delivery .address_state_name');
    }

    getDeliveryAddresCountry() {
        return cy.get('#address_delivery .address_country_name');
    }

    getDeliveryAddresMobile() {
        return cy.get('#address_delivery .address_phone_mobile');
    }

    getInvoiceAddresSubHeading() {
        return cy.get('#address_invoice .page-subheading');
    }

    getInvoiceAddresFirstName() {
        return cy.get('#address_invoice .address_firstname');
    }

    getInvoiceAddresStreetAddress() {
        return cy.get('#address_invoice .address_address2');
    }

    getInvoiceAddresState() {
        return cy.get('#address_invoice .address_state_name');
    }

    getInvoiceAddresCountry() {
        return cy.get('#address_invoice .address_country_name');
    }

    getInvoiceAddresMobile() {
        return cy.get('#address_invoice .address_phone_mobile');
    }

    getProceedToCheckoutButton() {
        return cy.get('button[name="processAddress"');
    }
    
  }
  
  export default AddressesPage;