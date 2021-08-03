Feature: Register a new user
    As a new user 
    I want to register to the website
    So that I can complete an online order   

# TC 001
Scenario: User starts the registration process by loading Authentication page
    Given I am a new user and I am in the home page
    When I click button "Sign in"
    Then I should be redirected to the "Authentication" page


# TC 002
Scenario: Check validations for mandotory checks to the email field
    Given I am in the "Authentication" page
    And I dont enter any value to the "email_create"
    When I click submit button "Create an account"
    Then an error message should pop up "Invalid email address"


# TC 003
Scenario: Check validations for mandotory checks to the email field
    Given I am in the "Authentication" page
    And I dont enter any value to the "email_create"
    When click button "Create an account"
    Then an error message should pop up "Invalid email address"


# TC 004
Scenario: Check validations for invalid email address
    When I enter an invalid email addess 'test@123' to the email field
    And click button "Create an account"
    Then I should get an error message "Invalid email address"


# TC 005
Scenario: Check validations for already registered email address
    When I enter an already registered email addess 'summerdress-user01@mailinator.com'
    And then I click button "Create an account"
    Then I should see an error message "An account using this email address has already been registered"


# TC 006
Scenario: Enter a valid and non-registered email address 
    When I enter a valid email addess to the email field
    And then click button "Create an account"
    Then I should be redirected to the "Create an account" form


# TC 007
Scenario: Submit the form without entering any values to check mandotory rules
    When I dont enter values to any fields
    And email address should be pre-filled
    And I submit the form
    Then I should get errors for all mandotory fields


# TC 008
Scenario: Validate invalid password - Password should contain minimum of 5 characters
    When I enter "123" as the password
    And I then if I press enter key
    Then I should get an error for the password "passwd is invalid"



# TC 009
Scenario: Validate password after enerting a valid password 
    When I enter a valid entry "test1234" as the password
    And then if I press enter key
    Then I should get not have the error message "passwd is invalid"


# TC 010
Scenario: Invalid post code 
    When I enter an invalid post code "123"
    And then I click the submit button 
    Then I should get an error for the post code "The Zip/Postal code you've entered is invalid"



# TC 011
Scenario: Valid post code 
    When I enter a valid post code "098101"
    And when I click the submit button
    Then I should not get an error for the post code "The Zip/Postal code you've entered is invalid"



# TC 012
Scenario: Invalid mobile number 
    When I enter an invalid mobile number "123asd"
    And if I click enter button
    Then I should get an error for the mobile "phone_mobile is invalid"



# TC 013
Scenario: Valid mobile number 
    When I enter a valid mobile number "0435896958"
    And I press enter key
    Then I should not get an error for the mobile "phone_mobile is invalid"



# TC 014
Scenario: Submit the form after filling all mandotory fields
    When I enter a valid values to first name, last name, password
    And when I enter valid address information 
    And I enter my mobile number
    And I submit the form by pressing submit button
    Then the form should be submitted and redirected to the "My account" page
    And Under "My personal information" section first name, last name and email should be prefilled 