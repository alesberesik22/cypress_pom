export class HomePageData {
  private elements = {
    username: () => cy.get('[data-test="username"]'),
    password: () => cy.get('[data-test="password"]'),
    loginButton: () => cy.get('[data-test="login-button"]'),
    errorMessage: () => cy.get('h3[data-test="error"]'),
  };
  getElements() {
    return this.elements;
  }
}
