Feature: new customers add

Scenario: customer adding functionality test
Given user on homepage
When user enter email in the email box
And user enter password
And user clicks on login
And user clicks on customers
And user clicks on customers radio button
And user clicks new user button
And user enters email
And user enters password
And user enters first name
And user enters last Name
And user clicks gender make radio button
And user choose date of birth
And user enter company name
And user clicks on tax exempt
And user chooses newsletter
And user chooses customers roles
And user clicks active check box
And user adds comments on admin comment box
And user clciks on save button
Then user adds new customer successfully