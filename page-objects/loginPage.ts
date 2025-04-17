import { Page, Locator } from "@playwright/test";

export class LoginPage { 
    readonly userName: Locator;
    readonly password: Locator;
    readonly signInButton: Locator;
    readonly errorMessage: Locator;

    constructor(public page: Page) { 
        this.page = page;
        this.userName = page.getByRole("textbox", { name: "Username" });
        this.password = page.getByRole("textbox", { name: "Password" });
        this.signInButton = page.getByRole("button", { name: "Sign in" });
        this.errorMessage = page.getByText("Invalid username or password");
    }
    async login(userName: string, password: string) {
        await this.userName.fill(userName);
        await this.password.fill(password);
        await this.signInButton.click();
    }
    async getErrorMessage() {
        return await this.errorMessage.textContent();
    }
}