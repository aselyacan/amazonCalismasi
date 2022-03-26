Feature:US_007 Verification of links in main page footer

    Scenario:TC_007  User should be able to visit with valid footer links
        Given user is on 'https://www.amazon.de/'
        And user on main mage of amazon
        When user scroll down to footer
        Then user sees the links
        And verify user successfully the footer links