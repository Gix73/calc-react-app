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
