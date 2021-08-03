/// <reference types= "Cypress" />
/* 

    Technical Challenge - WooliesX    
    This file contain the steps implementaion for the registration.feature file 

    This file simulate a user journey, where a new user registered 
    to the websit http://automationpractice.com/index.php

*/

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
import RegistrationPage from '../PageObjects/Registration';

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
const registration = new RegistrationPage();

// variable to hold the random email address
var randomEmail = '';


// Calling this method to automatically preserve the session id
beforeEach(function () {
        Cypress.Cookies.preserveOnce('PrestaShop-a30a9934ef476d11b6cc3c983616e364', 'Aa%2BAUgx%2BGGBvRpiQNVQOTFERpSzT5%2BLnnrf%2Bkj72vAokyV86Wu%2BYEaLlmOvLRFCZC8WARepkOaQHZsA%2BNbrltQ%2FXGHzETSsdG51FkY%2BiYG27fj8trmU2aFtiioWfLHlG1GMD1RJQ6%2FaAXx9%2Bl6%2FYccTCvpFdBjADGLujq%2F1YrrXQYH3vIRsACunG%2Bie5dpSTkzzrDpf8cJ7xt7t5yYsGLvaWrji2SPxCQ7HS2SzF7I7OnN2aGn%2F5Xl7DQorLyyS1WXma8ZGzPZybYOPjazRVNCGlZpKsWYXQJkCn3fpVu3exSSDPm4Bb4EVWORYA0az2BJjddyWtM82ib9Uxo0bk7QAJUx6T7Nwfr8yuDrMsaI3VhcyRDgSEiLkLo8jlod5ZQCGC9SZXyQy%2BV2xnxs8ESmwQrZI4Vk%2Fziml%2BT%2BGACK1IYSBs%2BERGfPQ14SMfHoldl3X90CSxGUgwjMxIc5n0a0sSPKQ%2BDTURqWtkKLVANmQ%3D000357')
})

/*
  Step definition implementation
  TC 001 - Scenario: User starts the registration process by loading Authentication page
*/
Given('I am a new user and I am in the home page', () => {
    homePage.visit();
    cy.clearCookie('lastCookie');
})
When('I click button {string}', (expected) => {
    homePage.getHeaderSignInLink().should('contain.text',expected).click();
})
And('I should be redirected to the {string} page', (expected) => {
    authentication.getStepTitle().should('contain.text', expected);
})


/*
  Step definition implementation
  TC 002 - Scenario: Check validations for mandotory checks to the email field
*/
Given('I am in the {string} page', (expected) => {
    authentication.getStepTitle().should('contain.text', expected);
})
And('I dont enter any value to the {string}', (expected) => {
    authentication.getCreateEmail().should('have.value', '').should('have.id', expected);
})
When('I click submit button {string}', (expected) => {
    authentication.getCreateAccountButton().should('contain.text', expected).click();
})
Then('an error message should pop up {string}', (expected) => {
    authentication.getValidationMessagesRegistration().should('contain.text', expected);
})


/*
  Step definition implementation
  TC 003 - Scenario: Check validations for mandotory checks to the email field
*/
When('I enter an invalid email addess {string} to the email field', (expected) => {
    authentication.getCreateEmail().clear().type(expected);
})
And('click button {string}', (expected) => {
    authentication.getCreateAccountButton().should('contain.text', expected).click();
})
Then('I should get an error message {string}', (expected) => {
    authentication.getValidationMessagesRegistration().should('contain.text', expected);
})


/*
  Step definition implementation
  TC 004 - Scenario: Check validations for invalid email address
*/
When('I enter an already registered email addess {string}', (expected) => {
    authentication.getCreateEmail().clear().type(expected);
})
And('then I click button {string}', (expected) => {
    authentication.getCreateAccountButton().should('contain.text', expected).click();
})
Then('I should see an error message {string}', (expected) => {
    authentication.getValidationMessagesRegistration().should('contain.text', expected);
})

/*
  Step definition implementation
  TC 005 - Scenario: Check validations for already registered email address
*/
When('I enter an already registered email addess {string}', (expected) => {
    authentication.getCreateEmail().clear().type(expected);
})
And('then I click button {string}', (expected) => {
    authentication.getCreateAccountButton().should('contain.text', expected).click();
})
Then('I should see an error message {string}', (expected) => {
    authentication.getValidationMessagesRegistration().should('contain.text', expected);
})



/*
  Step definition implementation
  TC 006 - Scenario: Enter a valid and non-registered email address
*/
When('I enter a valid email addess to the email field', () => {
    var text = '';
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    authentication.getCreateEmail().clear().type(text + "@mailinator.com");
    randomEmail = text + "@mailinator.com";
})
And('then click button {string}', (expected) => {
    authentication.getCreateAccountButton().should('contain.text', expected).click({timeout: 10000});
})
Then('I should be redirected to the {string} form', (expected) => {
    registration.getStepTitle().should('contain.text', expected);
})


    
/*
  Step definition implementation
  TC 007 - Scenario: Submit the form without entering any values to check mandotory rules
*/
When('I dont enter values to any fields', () => {
    registration.getGetFirstName().should('have.value', '');
    registration.getGetLastName().should('have.value', '');
    registration.getPassword().should('have.value', '');
    registration.getStreetAddress().should('have.value', '');
    registration.getGetCity().should('have.value', '');
    registration.getGetPostCode().should('have.value', '');
    registration.getGetState().should('have.value', '');
})
And('email address should be pre-filled', () => {
    registration.getEmail().should('have.value', randomEmail);
})
And('I submit the form', () => {
    registration.getSubmitButton().click();
})
Then('I should get errors for all mandotory fields', () => {
    registration.getRegistrationServerErrors()
                .should('contain.text', "You must register at least one phone number")
                .should('contain.text', "lastname is required")
                .should('contain.text', "firstname is required")
                .should('contain.text', "passwd is required")
                .should('contain.text', "address1 is required")
                .should('contain.text', "city is required")
                .should('contain.text', "This country requires you to choose a State");
    
})



/*
  Step definition implementation
  TC 008 - Scenario: Validate invalid password - Password should contain minimum of 5 characters
*/
When('I enter {string} as the password', (expected) => {
    registration.getGetFirstName().clear().type("Anthony");
    registration.getGetLastName().clear().type('Smith');
    registration.getPassword().clear().type(expected);
})
And('I then if I press enter key', () => {
    registration.getSubmitButton().click();
})
Then('I should get an error for the password {string}', (expected) => {
    registration.getRegistrationServerErrors().should('contain.text', expected);
})



/*
  Step definition implementation
  TC 009 - Scenario: Validate password after enerting a valid password
*/
When('I enter a valid entry {string} as the password', (expected) => {
    registration.getGetFirstName().clear().type("Anthony");
    registration.getGetLastName().clear().type('Smith');
    registration.getPassword().clear().type(expected);
})
And('then if I press enter key', () => {
    registration.getSubmitButton().click();
})
Then('I should get not have the error message {string}', (expected) => {
    registration.getRegistrationServerErrors().should('not.have.value', expected);
})



/*
  Step definition implementation
  TC 010 - Scenario: Invalid post code
*/
When('I enter an invalid post code {string}', (expected) => {
    registration.getGetFirstName().clear().type("Anthony");
    registration.getGetLastName().clear().type('Smith');
    registration.getGetPostCode().clear().type(expected);
})
And('then I click the submit button', () => {
    registration.getSubmitButton().click();
})
Then('I should get an error for the post code {string}', (expected) => {
    registration.getRegistrationServerErrors().should('contain.text', expected);
})



/*
  Step definition implementation
  TC 011 - Scenario: Valid post code
*/
When('I enter a valid post code {string}', (expected) => {
    registration.getGetFirstName().clear().type("Anthony");
    registration.getGetLastName().clear().type('Smith');
    registration.getGetPostCode().clear().type(expected);
})
And('when I click the submit button', () => {
    registration.getSubmitButton().click();
})
Then('I should not get an error for the post code {string}', (expected) => {
    registration.getRegistrationServerErrors().should('not.have.value', expected);
})



/*
  Step definition implementation
  TC 012 - Scenario: Invalid mobile number 
*/
When('I enter an invalid mobile number {string}', (expected) => {
    registration.getGetFirstName().clear().type("Anthony");
    registration.getGetLastName().clear().type('Smith');
    registration.getGetMobile().clear().type(expected);
})
And('if I click enter button', () => {
    registration.getSubmitButton().click();
})
Then('I should get an error for the mobile {string}', (expected) => {
    registration.getRegistrationServerErrors().should('contain.text', expected);
})



/*
  Step definition implementation
  TC 013 - Scenario: Valid mobile number 
*/
When('I enter a valid mobile number {string}', (expected) => {
    registration.getGetFirstName().clear().type("Anthony");
    registration.getGetLastName().clear().type('Smith');
    registration.getGetMobile().clear().type(expected);
})
And('I press enter key', () => {
    registration.getSubmitButton().click();
})
Then('I should not get an error for the mobile {string}', (expected) => {
    registration.getRegistrationServerErrors().should('not.have.value', expected);
})



/*
  Step definition implementation
  TC 014 - Scenario: Submit the form after filling all mandotory fields
*/
When('I enter a valid values to first name, last name, password', () => {
    registration.getGetFirstName().clear().type("Anthony");
    registration.getGetLastName().clear().type('Smith');
    registration.getPassword().clear().type("Test1234");
})
And('when I enter valid address information', () => {
    registration.getStreetAddress().clear().type("12 King st");
    registration.getGetCity().clear().type("Washington");
    registration.getGetState().select("Washington", {forse:true}).focus().should('not.be.empty');
    registration.getGetPostCode().clear().type("98101");
})
And('I enter my mobile number', () => {
    registration.getGetMobile().clear().type("0435896958");
})
And('I submit the form by pressing submit button', () => {
    registration.getSubmitButton().click();
})
Then('the form should be submitted and redirected to the {string} page', (expected) => {
    // Once the form submitted, should redirected to the my account page
    myAccount.getStepTitle().should('contain.text', expected);
})
And('Under {string} section first name, last name and email should be prefilled', (expected) => {
    myAccount.getMyAccountInformationButton().click();

    // Check the registered user details are showing under My account
    myAccount.getMyAccountGetFirstName().should('have.value', "Anthony");
    myAccount.getMyAccountGetLastName().should('have.value', "Smith");
    myAccount.getMyAccountEmail().should('have.value', randomEmail);
})

