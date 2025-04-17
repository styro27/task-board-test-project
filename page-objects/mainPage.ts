import { Page, Locator, expect } from "@playwright/test";
import { LoginPage } from "./loginPage";

export class MainPage {
  readonly page: Page;
  readonly logOutButton: Locator;
  static PROJECT_BUTTONS = {
    webAppButton: "Web Application Main web",
    mobileAppButton: "Mobile Application Native",
  };
  constructor(page: Page, projectButtons = {}) {
    this.page = page;
    this.logOutButton = page.getByRole("button", { name: "Logout" });
  }
  async navigateToProject(buttonName: string) {
    const projectText = MainPage.PROJECT_BUTTONS[buttonName];
    await this.page.getByRole("button", { name: projectText }).click();
  }
  getColumn(column: string): Locator {
    return this.page.getByRole("heading", { name: column }).locator("..");
  }
  getTaskCards(column: string): Locator {
    return this.getColumn(column).locator(
      ".bg-white.p-4.rounded-lg.shadow-sm.border"
    );
  }
  getTaskCard(column: string, task: string): Locator {
    return this.getTaskCards(column).filter({
      has: this.page.locator("h3", { hasText: task }),
    });
  }
  getTaskTags(taskCard: Locator): Locator {
    return taskCard.locator("div.flex.flex-wrap.gap-2");
  }

  async logOut() {
    await this.logOutButton.click();
    expect(new LoginPage(this.page).signInButton).toBeVisible();
  }
}