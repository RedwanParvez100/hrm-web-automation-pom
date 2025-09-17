const { stat } = require("fs");

class LoginPage {
    constructor(page) {
        this.page = page;
        this.EmailField = page.locator("//input[@placeholder='Username']");
        this.PasswordField = page.locator("//input[@placeholder='Password']");
        this.LoginBtn = page.locator("//button[@type='submit']");
        this.successPopup = page.locator(
            "//button[normalize-space()='Upgrade']"
        );
    }

    async login(email, password) {
        await this.EmailField.fill(email);
        await this.PasswordField.fill(password);
        await this.LoginBtn.click();
    }
    async getSuccessPopupText() {
        await this.successPopup.waitFor({ state: "visible" });
        return await this.successPopup.textContent();
    }
}

module.exports = LoginPage;
