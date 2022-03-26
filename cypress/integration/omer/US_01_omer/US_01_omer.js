import { expect } from "chai";
import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import { Hook } from "mocha";
import { createYield } from "typescript";
import { randomSelect_css, randomSelect_xpath } from "../../../support/util";
/// <reference types="cypress-xpath" />

const user = require("../../../fixtures/user.json");
const amazon = require("../../../fixtures/amazon.json");
const allpages = require("../../../fixtures/allpages.json");

Given("user is on {string}", (url) => {
  cy.visit(url);
  cy.get("#sp-cc-accept").click();
});

And("verify you are on correct page", () => {
  cy.url().should("equal", "https://www.amazon.co.uk/");
});
