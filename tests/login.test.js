const { test, expect } = require("@playwright/test");
const BasePage = require("../utils/basePage");
const LoginPage = require("../pages/loginPage");
const testData = require("../utils/testData");

test.describe("Login Test", () => {
    let loginPage;
    let basePage;

    test.beforeEach(async ({ page }) => {
        basePage = new BasePage(page);
        loginPage = new LoginPage(page);
        await basePage.navigateTo();
    });

    test("Login with valid user", async ({ page }) => {
        const { email, password } = testData.validUser;
        await loginPage.login(email, password);

        //validaton
        const successPopupText = await loginPage.getSuccessPopupText();
        expect(successPopupText.trim()).toBe(testData.loginsuccessPopup);
        // await page.waitForTimeout(3000);
    });
});
