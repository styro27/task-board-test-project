import { Page } from "@playwright/test";
import { MainPage } from "./mainPage";
import { LoginPage } from "./loginPage";

export class PageManager {
  private readonly page: Page;
  private readonly mainPage: MainPage;
  private readonly loginPage: LoginPage;

  constructor(page: Page) {
    this.page = page;
    this.mainPage = new MainPage(this.page);
    this.loginPage = new LoginPage(this.page);
  }
  getMainPage() {
    return this.mainPage;
  }
  getLoginPage() {
    return this.loginPage;
  }
}
