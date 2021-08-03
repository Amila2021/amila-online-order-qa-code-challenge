/// <reference types= "Cypress" />
/* 

    Technical Challenge - WooliesX    
    This file contain the steps implementaion for the online-order-dresses.feature file 

    This file simulate a user journey, where an already registered user 
    place an online order via the test site http://automationpractice.com/index.php

*/


// Import Cucumber steps definition
import {
    Given,
    When,
    Then,
    And,
} from 'cypress-cucumber-preprocessor/steps'


// Import data from page objects
import HomePage from '../PageObjects/Home';
import SummerDressesPage from '../PageObjects/SummerDresses';
import AddToCart from '../PageObjects/AddToCart';
import Checkout from '../PageObjects/Checkout';
import AuthenticationPage from '../PageObjects/Authentication'
import AddressesPage from '../PageObjects/Addresses';
import ShippingPage from '../PageObjects/Shipping';
import PaymentPage from '../PageObjects/Payments'; 
import OrderSummeryPage from '../PageObjects/OrderSummery'; 
import OrderConfirmationPage from '../PageObjects/OrderConfirmation'; 
import MyAccountPage from '../PageObjects/MyAccount'; 


// Declare variables to access elements inside page objects
const homePage = new HomePage();
const summerDressesPage = new SummerDressesPage();
const addToCart = new AddToCart();
const checkOut = new Checkout();
const authentication = new AuthenticationPage();
const addresses = new AddressesPage();
const shipping = new ShippingPage();
const payments = new PaymentPage();
const orderSummery = new OrderSummeryPage();
const orderConfirmation = new OrderConfirmationPage();
const myAccount = new MyAccountPage();


// Global variable to hold cart total price
var cartTotalPrice = '';


beforeEach(function () {
    Cypress.Cookies.preserveOnce('PrestaShop-a30a9934ef476d11b6cc3c983616e364', 'Aa%2BAUgx%2BGGBvRpiQNVQOTFERpSzT5%2BLnnrf%2Bkj72vAokyV86Wu%2BYEaLlmOvLRFCZC8WARepkOaQHZsA%2BNbrltQ%2FXGHzETSsdG51FkY%2BiYG27fj8trmU2aFtiioWfLHlG1GMD1RJQ6%2FaAXx9%2Bl6%2FYccTCvpFdBjADGLujq%2F1YrrXQYH3vIRsACunG%2Bie5dpSTkzzrDpf8cJ7xt7t5yYsGLvaWrji2SPxCQ7HS2SzF7I7OnN2aGn%2F5Xl7DQorLyyS1WXma8ZGzPZybYOPjazRVNCGlZpKsWYXQJkCn3fpVu3exSSDPm4Bb4EVWORYA0az2BJjddyWtM82ib9Uxo0bk7QAJUx6T7Nwfr8yuDrMsaI3VhcyRDgSEiLkLo8jlod5ZQCGC9SZXyQy%2BV2xnxs8ESmwQrZI4Vk%2Fziml%2BT%2BGACK1IYSBs%2BERGfPQ14SMfHoldl3X90CSxGUgwjMxIc5n0a0sSPKQ%2BDTURqWtkKLVANmQ%3D000357')
})


/*
  Step definition implementation
  TC 015 - Scenario: Navigate to summer dresses
*/
Given('I am on the home page', () => {
    homePage.visit();
    cy.clearCookie('lastCookie');
})
When('I click on the menu option {string}', (expected) => {
    // Enforce the hover behaviour 
    homePage.getMenuDresses().should('have.text', expected).rightclick();
})
And ('I select the sub-menu option {string}', (expected) => {
    // Go to Summer dresses sub-menu item
    homePage.getSubMenuSummerDresses().should('have.text', expected).click();
})
Then('I am redirected to the {string} page', (expected) => {
    summerDressesPage.getCategoryName().should('contain.text', expected);
})


/*
  Step definition implementation
  TC 016 Scenario: Add products to the shopping basket
*/
Given('I am on the {string} page', (expected) => {
    summerDressesPage.getCategoryName().should('contain.text', expected);
})
And ('I add product {string} to the cart', (expected) => {
    summerDressesPage.getProductPrintedSummerDressWithDiscount().should('contain.text', expected);
    summerDressesPage.getProductPrintedSummerDressWithDiscount().trigger('mouseover').invoke('show');
    
    // Adding the first product to the cart
    summerDressesPage.getPrintedSummerDressAddToCartButton().invoke('show').focus().click({force:true});
    
    //Verfing the data in the "Add to cart" pop up is valid
    addToCart.getSuccessString().should('contain.text', 'Product successfully added');
    addToCart.getAddedQuantity().should('contain.text', '1')
    addToCart.getTotalQuantity().should('contain.text', '1');
    addToCart.getContinueShopping().click();
})
And ('I also add product {string} to the cart', (expected) => {
    summerDressesPage.getProductChiffonDress().should('contain.text', expected);
    summerDressesPage.getProductChiffonDress().trigger('mouseover').invoke('show');

    // Adding the second product to the cart
    summerDressesPage.getChiffonDressAddToCartButton().invoke('show').focus().click({force:true});

    //Verfing the data in the "Add to cart" pop up is valid
    addToCart.getSuccessString().should('contain.text', 'Product successfully added');
    addToCart.getAddedQuantity().should('contain.text', '1')

    //Verfing the total number of products in the cart
    addToCart.getTotalQuantity().should('contain.text', '2');
})
When('I click {string} button', (expected) => {
    addToCart.getProceedToCheckout().should('contain.text', expected).click();
})
Then('products will be addded to the shopping basket', () => {
    homePage.getHeaderShoppingCartQuantity().should('contain.text', '2');
})
And('I will be redirected to shorting cart summery page', () => {
    checkOut.getCartSummeryTitle().should('contain.text', 'Shopping-cart summary');

    //Get cart total price and save under the global variable
    cy.get("td#total_price_container span").then(($span) => { 
        cartTotalPrice = $span.text();
    })
})


/*
  Step definition implementation
  TC 017 - Scenario:Proceed to the Authentication step
*/
Given('I am on the shorting cart summery page', () => {
    checkOut.getCartSummeryTitle().should('contain.text', 'Shopping-cart summary');
})
When('I click {string} button the shorting cart summery page', (expected) => {
    checkOut.getProceedToCheckoutButton().should('contain.text', expected).click({ force: true });
})
Then ('I will be redirected to the {string} step', (expected) => {
    authentication.getStepTitle().should('contain.text', expected);
})



/*
  Step definition implementation
  TC 018 - Scenario: Check default values for the Authentication step
  This will validate login field's(email and password) default values
*/
Given('I am on the {string} step', (expected) => {
    authentication.getStepTitle().should('contain.text', expected);
})
Then('the field {string} is empty', (expected) => {
    authentication.getLoginEmail().should('have.value', '').should('have.id', expected);
})
And ('also the field {string} is empty', (expected) => {
    authentication.getLoginPassword().should('have.value','').should('have.id', expected);
})

/*
  Step definition implementation
  TC 019 - Scenario: Check validations for empty fields in the signin step
  This will validate login field's(email and password) mandotory checks
*/
Given('fieds {string} and {string} is empty', (email, password) => {
    authentication.getLoginEmail().should('have.value', '');
    authentication.getLoginPassword().should('have.value','');
})
Then('then I click {string} button', (expected) => {
    authentication.getSignInButton().should('contain.text', expected).click();
})
And ('field should get a validation error for the email', () => {
    authentication.getValidationMessages().should('contain.text','An email address required');
})


/*
  Step definition implementation
  TC 020 - Scenario: Check validations for empty fields in the signin step
  This will validate mandotory checks for email
*/
Given('fied email contain an invalid value {string}', (expected) => {
    authentication.getLoginEmail().clear().type(expected);
})
Then('I click {string} button after entering the email', (expected) => {
    authentication.getSignInButton().should('contain.text', expected).click();
})
And ('invalid email address should get an error message', () => {
    authentication.getValidationMessages().should('contain.text','Invalid email address');
})


/*
  Step definition implementation
  TC 021 - Scenario: Check validations for empty password
  This will validate mandotory checks for password
*/
Given('fied email contain a valid value {string}', (expected) => {
    authentication.getLoginEmail().clear().type(expected);
        //authentication.getLoginEmail().contains(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
})
And('also the field {string} is null', (expected) => {
    authentication.getLoginPassword().should('have.value','').should('have.id', expected);
})
When('I click {string} button after entering the email and with empty password', (expected) => {
    authentication.getSignInButton().should('contain.text', expected).click();
})
And ('I should get a validation message for field password', () => {
    authentication.getValidationMessages().should('contain.text','Password is required');
})


/*
  Step definition implementation
  TC 022 - Scenario: Incorrect username and password combinations
*/
When('I type {string} under field {string}', (input, email) => {
    authentication.getLoginEmail().should('have.id', email).clear().type(input);
})
And('I type an invalid password {string} under field {string}', (input, password) => {
    authentication.getLoginPassword().should('have.id',password).clear().type(input);
})
When('when I click the {string} button', (expected) => {
    authentication.getSignInButton().should('contain.text', expected).click();
})
And ('I should get a validation message for the invalid credentials', () => {
    authentication.getValidationMessages().should('contain.text','Authentication failed');
})


/*
  Step definition implementation
  TC 023 - Scenario: Succesfull login
*/
When('I type an already registered value {string} under field {string}', (input, email) => {
    authentication.getLoginEmail().should('have.id', email).clear().type(input);
})
And('also I type {string} under field {string}', (input, password) => {
    authentication.getLoginPassword().should('have.id',password).clear().type(input);
})
And('I click the {string} button to proceed to the next step', (expected) => {
    authentication.getSignInButton().should('contain.text', expected).click();
})
Then ('I should be redirected to the {string} step', (expected) => {
    addresses.getStepTitle().should('contain.text',expected);
})


/*
  Step definition implementation
  TC 024 - Scenario: Select delivery and billing address
*/
Given('I am in the {string} step', (expected) => {
    addresses.getStepTitle().should('contain.text',expected);
})
When('I select an address from the dowp-down box', () => {
    //Select the first address from the drop-down
    addresses.getAddressDropDown().select("My address", {forse:true}).focus().should('not.be.empty');
})
And('I select to have my delivery address same as the billing address', () => {
    addresses.getCheckbox().check().should('be.checked');
})
Then('{string} should be filled automatically', (expected) => {
    addresses.getDeliveryAddresSubHeading().should('contain.text', expected);
})
And('all delivery address fields should not be empty', () => {
    //Checking if the delivery address fields and mobile is not empty
    addresses.getDeliveryAddresFirstName().should('not.be.empty');
    addresses.getDeliveryAddresStreetAddress().should('not.be.empty');
    addresses.getDeliveryAddresState().should('not.be.empty');
    addresses.getDeliveryAddresCountry().should('not.be.empty');
    addresses.getDeliveryAddresMobile().should('not.be.empty');
})
And('{string} should also be filled automatically', (expected) => {
    addresses.getInvoiceAddresSubHeading().should('contain.text', expected);
})
And('all billing address fields should not be empty', () => {
    //Checking if the invoice address fields and mobile is not empty
    addresses.getInvoiceAddresFirstName().should('not.be.empty');
    addresses.getInvoiceAddresStreetAddress().should('not.be.empty');
    addresses.getInvoiceAddresState().should('not.be.empty');
    addresses.getInvoiceAddresCountry().should('not.be.empty');
    addresses.getInvoiceAddresMobile().should('not.be.empty');
})
And('I click {string} button to go to the {string} step', (button, nextstep) => {
    addresses.getProceedToCheckoutButton().should('contain.text',button).click();
    shipping.getStepTitle().should('contain.text',nextstep).click();
})


/*
  Step definition implementation
  TC 025 - Scenario: Select the shipping method without accepting T&C
*/
Given('that I am in the {string} step', (expected) => {
    shipping.getStepTitle().should('contain.text',expected).click();
})
When('I dont select the T&C checkbox', () => {
    shipping.getCheckBox().should('not.be.checked');
})
And('the shipping method should be selected automatically', () => {
    shipping.getShippingOption().check().should('be.checked');
})
And('shipping deliver price should be appering', () => {
    shipping.getShippingPrice().should('contain.text','$');
})
And('I click button {string} to go to the next step', (expected) => {
    shipping.getProceedToCheckout().should('contain.text',expected).click();
})
And('I should get an error message to accept T&C', () => {
    shipping.getTAndCMissingAlert().should('contain.text','You must agree to the terms of service before continuing');
    shipping.getTAndCMissingAlertCloseButton().click();
})


/*
  Step definition implementation
  TC 026 - Scenario: Select the shipping method with accepting T&C
*/
When('I select the T&C checkbox', () => {
    shipping.getCheckBox().check().should('be.checked');
})
And('also the shipping method should be selected automatically', () => {
    shipping.getShippingOption().check().should('be.checked');
})
And('shipping price should display', () => {
    shipping.getShippingPrice().should('contain.text','$');
})
And('I click the button {string} to go to the final step', (expected) => {
    shipping.getProceedToCheckout().should('contain.text',expected).click();
})
And('I should be rediected to the {string} step', (expected) => {
    payments.getStepTitle().should('contain.text',expected);
})



/*
  Step definition implementation
  TC 027 - Scenario: Select the payment option
*/
When('that I am on last step which is {string} page', (expected) => {
    payments.getStepTitle().should('contain.text',expected);
})
And('{string} product should be visible in the cart', (expected) => {
    //Check if the added products are showin in the payment page
    payments.getCartTable().contains('td', expected);
})
And('also the next product {string} should be in the cart', (expected) => {
    //Check if the added products are showin in the payment page
    payments.getCartTable().contains('td', expected);
})
And('I should see the shipping cost', () => {
    payments.getTotalShipping().should('contain.text','$').should('not.be.empty');
})
And('I should see the total cost', () => {
    payments.getTotalPrice().should('contain.text','$').should('not.be.empty');
})
And('I should see two payment options {string} and {string}', (paymethod1, paymethod2) => {
    // Check if I can see two payment options
    payments.getPayByBankWire().should('contain.text',paymethod1);
    payments.getPayByCheque().should('contain.text',paymethod2);
})
When('I select payment option {string}', (expected) => {
    payments.getPayByBankWire().should('contain.text',expected).click();
})
Then('should be rediected to the {string} step', (expected) => {
    orderSummery.getStepTitle().should('contain.text',expected);
})
And('I should see the payment method as {string}', (expected) => {
    orderSummery.getSubTitle().should('contain.text',expected);
})
And('I should see the order total price', () => {
    orderSummery.getTotalPrice().should('contain.text','$').should('not.be.empty');

    // Check if the total price in the summery page is 
    // same as the total price in the checkout page
    orderSummery.getTotalPrice().should('contain.text',cartTotalPrice);
})


/*
  Step definition implementation
  TC 028 - Scenario: Place the order confirming the payment option
*/
When('I click the {string} button', (expected) => {
    // Confirm payments and submit the order
    orderSummery.getSubmitButton().should('contain.text',expected).click();
})
Then('I will be redirected to the {string} page', (expected) => {
    orderConfirmation.getStepTitle().should('contain.text',expected);
})
And('I can see a message saying {string}', (expected) => {
    orderConfirmation.getContentDescription().should('contain.text',expected);
})
And('I can see the correct total amount', () => {
    orderConfirmation.getTotalPrice().should('contain.text','$').should('not.be.empty');
    // Check if the total price in the order confirmation page is 
    // same as the total price in the checkout page
    orderConfirmation.getTotalPrice().should('contain.text',cartTotalPrice);
})
And('I can also the {string} number', (expected) => {
    orderConfirmation.getContentDescription().should('contain.text',expected);

})
