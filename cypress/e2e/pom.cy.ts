import { HomePage } from "../pages/HomePage";
import { InventoryPage } from "../pages/InventoryPage";
const home = new HomePage();
const inventory = new InventoryPage();
describe("Pom test", () => {
  beforeEach(() => {
    cy.fixture("data").then((data) => {
      cy.visit(data.site);
    });
  });
  it("Login to page", () => {
    home.login("standard_user", "secret_sauce");
  });
  it("Lockout message", () => {
    home.loginError("locked_out_user", "secret_sauce");
  });
  it("Get title after login", () => {
    home.login("standard_user", "secret_sauce");
    inventory.getTitle();
    cy.url().should("contain", "inventory");
  });
});
