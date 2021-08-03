
Feature: Place an online shopping order
  As a visitor of an ecommerce website
  I want to add products to the shopping basket
  So that I can complete an online order

# TC 015
Scenario: Navigate to summer dresses page
    Given I am on the home page
    When I click on the menu option "Dresses"
    And I select the sub-menu option "Summer Dresses"
    Then I am redirected to the "Summer Dresses" page 


# TC 016
Scenario: Add products to the shopping basket
    Given I am on the "Summer Dresses" page 
    And I add product "Printed Summer Dress" to the cart
    And I also add product "Printed Chiffon Dress" to the cart
    When I click "Proceed to checkout" button
    Then products will be addded to the shopping basket
    And I will be redirected to shorting cart summery page


# TC 017
Scenario: Proceed to the Authentication step
    Given I am on the shorting cart summery page
    When I click "Proceed to checkout" button the shorting cart summery page
    Then I will be redirected to the "Authentication" step


# TC 018
Scenario: Check default values for the Authentication step
    Given I am on the "Authentication" step
    Then the field "email" is empty
    And also the field "passwd" is empty

# TC 019
Scenario: Check validations for empty fields in the signin step
    Given fieds 'email' and 'passwd' is empty
    When then I click "Sign in" button
    Then field should get a validation error for the email
    

# TC 020
Scenario: Check validations for invalid email address
    Given fied email contain an invalid value "abc@com"
    When I click "Sign in" button after entering the email
    Then invalid email address should get an error message


# TC 021
Scenario: Check validations for empty password
    Given fied email contain a valid value "user@gmail.com"
    And also the field 'passwd' is null
    When I click "Sign in" button after entering the email and with empty password
    Then I should get a validation message for field password


# TC 022
Scenario: Incorrect username and password combinations
    When I type "summerdress-user01@mailinator.com" under field 'email'
    And I type an invalid password "test1234" under field 'passwd'
    And when I click the "Sign in" button
    Then I should get a validation message for the invalid credentials


# TC 023
Scenario: Succesfull login
    When I type an already registered value "onlineordertest-user02@mailinator.com" under field 'email'
    And also I type "Test1234" under field 'passwd'
    And I click the "Sign in" button to proceed to the next step
    Then I should be redirected to the "Addresses" step


# TC 024
Scenario: Select delivery and billing address
    Given I am in the "Addresses" step
    When I select an address from the dowp-down box
    And I select to have my delivery address same as the billing address
    Then "delivery address" should be filled automatically
    And all delivery address fields should not be empty
    And "billing address" should also be filled automatically
    And all billing address fields should not be empty
    And I click "Proceed to checkout" button to go to the "Shipping" step


# TC 025
Scenario: Select the shipping method without accepting T&C
    Given that I am in the "Shipping" step
    When I dont select the T&C checkbox
    And the shipping method should be selected automatically
    And shipping deliver price should be appering 
    And I click button "Proceed to checkout" to go to the next step
    Then I should get an error message to accept T&C


# TC 026
Scenario: Select the shipping method with accepting T&C
    When I select the T&C checkbox
    And also the shipping method should be selected automatically
    And shipping price should display
    And I click the button "Proceed to checkout" to go to the final step
    Then I should be rediected to the "payment" step


# TC 027
Scenario: Select the payment option
    Given that I am on last step which is "payment" page
    And "Printed Chiffon Dress" product should be visible in the cart
    And also the next product "Printed Summer Dress" should be in the cart
    And I should see the shipping cost
    And I should see the total cost
    And I should see two payment options "Pay by bank wire" and "Pay by check"
    When I select payment option "Pay by bank wire"
    Then should be rediected to the "Order summary" step
    And I should see the payment method as "Bank-wire payment"
    And I should see the order total price


# TC 028
Scenario: Place the order confirming the payment option
    When I click the "confirm my order" button
    Then I will be redirected to the "Order confirmation" page
    And I can see a message saying "Your order on My Store is complete"
    And I can see the correct total amount
    And I can also the "order reference" number
