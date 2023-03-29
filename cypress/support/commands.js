// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("pressExp", (exp) => {
  console.log(exp);
  exp.split("").forEach((data) => {
    cy.get(`[data-test="${data}"]`).click();
  });
});

Cypress.Commands.add("checkExpResult", (exp) => {
  console.log(exp);
  console.log(exp.expression);
  cy.pressExp(exp.expression);
  cy.get("#expression").should("have.text", exp.result);
  cy.get('[data-test="C"]').click();
});

Cypress.Commands.add("checkTheme", (theme) => {
  theme.forEach((data) => {
    cy.get("select").select(`${data.select}`);
    cy.get("#mainWrapper")
      .should("have.css", "background-color", `${data.bgColor}`)
      .should("have.css", "color", `${data.color}`);
  });
});

Cypress.Commands.add("checkHistory", (data) => {
  data.forEach((exp) => {
    cy.pressExp(exp.expression);
    cy.get("#histRes").children().last().should("have.text", exp.result);
  });
});
