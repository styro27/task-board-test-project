import {test as base } from "@playwright/test";
import { MainPage } from "./mainPage";
import { LoginPage } from "./loginPage";

  export const test = base.extend<{ loginPage: LoginPage; mainPage: MainPage }>({
    loginPage: async ({ page }, use) => {
      await use(new LoginPage(page));
    },
    mainPage: async ({ page }, use) => {
      await use(new MainPage(page));
    },
  });





