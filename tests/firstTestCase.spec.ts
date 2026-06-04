import { test, expect, Page } from "@playwright/test";
class LoginPage {
  private page: Page;
  private usernameInput = "#user-name";
  private passwordInput = "#password";
  private loginButton = "#login-button";
  constructor(page: Page) {
    this.page = page;
  }
  async login(username: string, password: string): Promise<void> {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
}

test("valid login", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto("https://www.saucedemo.com/");
  await loginPage.login("standard_user", "secret_sauce");
  await expect(page).toHaveURL(/inventory/);
});
