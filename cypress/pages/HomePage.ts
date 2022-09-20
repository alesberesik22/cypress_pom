import { HomePageData } from "../data/HomePageData";
const data = new HomePageData().getElements();
export class HomePage {
  typeUserName(username: string) {
    data.username().type(username);
  }
  typePassword(password: string) {
    data.password().type(password);
  }
  clickLogin() {
    data.loginButton().click();
  }
  login(username: string, password: string) {
    this.typeUserName(username);
    this.typePassword(password);
    this.clickLogin();
  }
  loginError(username: string, password: string) {
    this.typeUserName(username);
    this.typePassword(password);
    this.clickLogin();
    data
      .errorMessage()
      .should(
        "have.text",
        "Epic sadface: Sorry, this user has been locked out."
      );
  }
}
