/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("Landing page", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("https://example.cypress.io/");
  });

  it("redirects to explore page when logged in", () => {
    // user = {}
    // url pathname shuold be 'explore'
  });
  it("selects an instrument category", () => {
    // c;ick on a selection
    // the selection should have active styles
    // the selections shows a list of relevant instruments for selection
  });
});
