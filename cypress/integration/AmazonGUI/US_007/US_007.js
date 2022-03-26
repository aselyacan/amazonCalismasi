import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { expect } from "chai";
/// <reference types="cypress-xpath" />

Given("user is on {string}", (url) => {
  cy.visit(url);
  cy.get("#sp-cc-accept").click();

  //   cy.get("#sp-cc-a[aria-label='Amazon devices with Alexa']").should(
  //     "include",
  //     "Amazon"
  //   );
});
And("user on main mage of amazon", () => {
  cy.visit("https://www.amazon.de/");
  cy.wait(2000);
  cy.get("div#pageContent div#desktop-grid-1 div h2").should(
    "include.text",
    "Wir haben eine Überraschung für Sie"
  );
});
