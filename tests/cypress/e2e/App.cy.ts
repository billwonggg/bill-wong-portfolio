describe("App rendering", () => {
  it("should render without console errors", () => {
    cy.visit("http://localhost:3000");

    cy.window().then((win) => {
      cy.stub(win.console, "error").as("consoleError");
    });

    cy.get("@consoleError").should("not.have.been.called");
  });
});
