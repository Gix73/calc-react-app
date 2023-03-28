import {
  exp,
  logicExp,
  bracketsExp,
  exceptionExp,
} from "../testVal/expressions";

describe("Show calcFC page", () => {
  it("should open '/calcCC'", () => {
    cy.visit("/calcCC");

    cy.get("h1").should("have.text", "Calculator app");
  });
});

describe("Show calcCC page", () => {
  it("should open '/calcCC'", () => {
    cy.visit("/calcCC");

    cy.get("h1").should("have.text", "Calculator app");
  });
});

describe("Show Settings page", () => {
  it("should open '/settings'", () => {
    cy.visit("/settings");

    cy.get("h1").should("have.text", "Calculator app");
  });
});

describe("Check easy expressions", () => {
  it("Should check result", () => {
    cy.visit("/calcCC");

    exp.forEach((e) => {
      cy.checkExpResult(e);
    });
  });
});

describe("Check expressions with logic", () => {
  it("Should check result", () => {
    cy.visit("/calcCC");

    logicExp.forEach((e) => {
      cy.checkExpResult(e);
    });
  });
});

describe("Check expressions with logic and brackets", () => {
  it("Should check result", () => {
    cy.visit("/calcCC");

    bracketsExp.forEach((e) => {
      cy.checkExpResult(e);
    });
  });
});

describe("Check expressions with exceptions", () => {
  it("Should check result", () => {
    cy.visit("/calcCC");

    exceptionExp.forEach((e) => {
      cy.checkExpResult(e);
    });
  });
});
