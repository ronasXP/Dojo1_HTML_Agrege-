import { faker } from "@faker-js/faker";

describe("Dojo2", () => {
  beforeEach("Visite URL", () => {
    cy.visit("https://www.demoblaze.com/");
  });

  it("create user", () => {
    cy.get("#signin2").click();
    cy.get("#sign-username").type(`test2`);
    cy.get("#sign-password").type("Motdepasse");
    cy.get(
      "#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
    ).click();
  });

  //Connexion au compte crée
  it("login user", () => {
    cy.get("#login2").click();
    cy.get("#loginusername", { timeout: 6000 }).type("test2");
    cy.get("#loginpassword").type("Motdepasse");
    cy.get(".btn-primary").contains("Log in").click();
  });

  //Ajouter un produit au panier
  // it("ajouter un produit", () => {
  //   cy.get('');
  // });
});
