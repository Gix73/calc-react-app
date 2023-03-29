import * as path from "../../src/constants/urls";
import {
  exp,
  logicExp,
  bracketsExp,
  exceptionExp,
  theme,
} from "../testVal/expressions";

describe("Show calcFC page", () => {
  it("Should open '/'", () => {
    cy.visit("/");

    cy.get("h1").should("have.text", "Calculator app");
  });
});

describe("Show calcCC page", () => {
  it("Should open '/calcCC'", () => {
    cy.visit("/calcCC");

    cy.get("h1").should("have.text", "Calculator app");
  });
});

describe("Show Settings page", () => {
  it("Should open '/settings'", () => {
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

describe("Check expressions with exceptions", () => {
  it("Should check result", () => {
    cy.visit("/");

    exceptionExp.forEach((e) => {
      cy.checkExpResult(e);
    });
  });
});

describe("Check keypad buttons", () => {
  it("Check all buttons value", () => {
    cy.visit("/");

    cy.pressExp("(1+2-3*4/5%6.7890)");
    cy.get("#expression").should("have.text", "(1+2-3*4/5%6.7890)");
    cy.get('[data-test="C"]').click();

    cy.pressExp("(1+2-3*4/5%6.7890)=");
    cy.get("#expression").should("have.text", "0.600");
    cy.get('[data-test="C"]').click();

    cy.get("#expression").should("have.text", "0");
    cy.get('[data-test="C"]').click();
  });
});

describe("Check navigation", () => {
  it("Check link of settings", () => {
    cy.visit("/");

    const paths = Object.keys(path);

    paths.forEach((pathName) => {
      cy.get(`a[href="${path[pathName]}"]`).click();
      cy.location("pathname").should("eq", `${path[pathName]}`);
    });
  });
});

describe("Check theme", () => {
  it("Should check theme changer", () => {
    cy.visit("/settings");
    cy.checkTheme(theme);
  });
});
