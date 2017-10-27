Feature: Mock API (V1) Tests

    Scenario: Get Books - Success

        When I GET /books
        Then response code should be 200
        And response body should be valid json
        And response body path $. should be of type array

    Scenario: Get Authors - Success

        When I GET /authors
        Then response code should be 200
        And response body should be valid json
        And response body path $. should be of type array
