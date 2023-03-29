import {
  exp,
  logicExp,
  bracketsExp,
  exceptionExp,
  history,
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

describe("Check history", () => {
  it("Check history data", () => {
    cy.visit("/calcCC");
    cy.checkHistory(history);
  });
});

describe("Check CE button", () => {
  it("Should clear expression and history", () => {
    cy.visit("/calcCC");
    cy.checkHistory(history);
    cy.get('[data-test="CE"]').click();
    cy.get("#expression").should("have.text", "0");
    cy.get("#histRes").children().should("have.length", 0);
  });
});

describe("Check history clear button", () => {
  it("Should clear only history or all data", () => {
    cy.visit("/calcCC");
    cy.checkHistory(history);
    cy.contains("Clear history").click();
    cy.get("#histRes").children().should("have.length", 0);
    cy.get("#expression").should("have.text", "1");

    cy.checkHistory(history);
    cy.visit("/settings");
    cy.contains("Clear All History").click();
    cy.visit("/calcCC");
    cy.get("#histRes").children().should("have.length", 0);
    cy.get("#expression").should("have.text", "0");
  });
});
