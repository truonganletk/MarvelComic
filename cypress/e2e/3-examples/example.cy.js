/// <reference types="cypress" />

describe("example testing", () => {
  // beforeEach(() => {
  //   cy.visit("/");
  // });

  it("display h1 title", () => {
    cy.visit("/");
    cy.get(".h1-tilte").should("have.text", "HOME PAGE");
  });

  it("type into a search bar", () => {
    cy.visit("/search");

    const inputValue = "daredevil";

    cy.get(".search-input")
      .type(`${inputValue}{enter}`, { delay: 100 })
      .should("have.value", inputValue);
  });

  it("test network request", () => {
    cy.request("/character/1009150").should((response) => {
      expect(response.status).to.eq(200);
      expect(response).to.have.property("headers");
    });
  });

  it.only("test network response", () => {
    cy.intercept("GET", "/character/1009150").as("getRequest");
    cy.visit("/character/1009150");

    cy.wait("@getRequest", { timeout: 300 }).then((interception) => {
      const response = interception.response;
      expect(response.statusCode).to.eq(200);
    });
  });
});
