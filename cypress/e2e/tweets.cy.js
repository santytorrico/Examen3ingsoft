describe("Tweetea", () => {
    it("deberia interactuar con el input field", () => {
    cy.visit('http://localhost:1234');
     cy.get("#tweetText").type("hola mundo");
     cy.get("#tweetButton").click();
    });
    it("deberia intentar introducir nada", () => {
        cy.visit('http://localhost:1234');
         cy.get("#tweetButton").click();
        });
});