Feature: US_05 Item search Functionality



    Feature Description
    Scenario: Tc_001_C ,when user is searching for an item , all the listed item should include the text of the item

        Given User is on his account
        And user types nutella on the search input
        Then verify all the listed items include nutella