import {
  exp,
  logicExp,
  bracketsExp,
  exeptionExp,
} from "../testVal/expressions";

describe("Show calcFC page", () => {
  it("should open '/'", () => {
    cy.visit("/");

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
    cy.visit("/");

    exp.forEach((e) => {
      cy.checkExpResult(e);
    });
  });
});

describe("Check expressions with logic", () => {
  it("Should check result", () => {
    cy.visit("/");

    logicExp.forEach((e) => {
      cy.checkExpResult(e);
    });
  });
});

describe("Check expressions with logic and brackets", () => {
  it("Should check result", () => {
    cy.visit("/");

    bracketsExp.forEach((e) => {
      cy.checkExpResult(e);
    });
  });
});

describe("Check expressions with exeptions", () => {
  it("Should check result", () => {
    cy.visit("/");

    exeptionExp.forEach((e) => {
      cy.checkExpResult(e);
    });
  });
});
