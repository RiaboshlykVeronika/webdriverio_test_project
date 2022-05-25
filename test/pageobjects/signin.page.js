

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignInPage extends Page {
    /**
     * define selectors using getter methods
     */
     get signInButton () {
        return $('//*[contains(text(),"Sign in")]');
    }

    get emailInput () {
        return $('#login_field');
    }

    get passwordInput () {
        return $('#password');
    }

    get signInButtonSecond () {
        return $('//*[@name="commit"]');
    }

    get detailsButton () {
        return $('//*[@class="details-overlay details-reset js-feature-preview-indicator-container"]');
    }
    
    get profileButton () {
        return $('//*[contains(text(),"Your profile")]');
    }

    get resetButton () {
        return $('//*[@href="/password_reset"]');
    }
    get emailInputSecond () {
        return $('#email_field');
    }

    get verifyElement () {
        return $('//*[@class="sc-bdnxRM fKMtvf sc-kEqXSa hZDbVr"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async signIn (email, password) {
        await this.signInButton.click();
        await browser.pause(3000);
        await this.emailInput.setValue(email);
        await browser.pause(3000);
        await this.passwordInput.setValue(password);
        await browser.pause(3000);
        await this.signInButtonSecond.click();
        await browser.pause(3000);
        await this.detailsButton.click();
        await browser.pause(3000);
        await this.profileButton.click();
        await browser.pause(3000);
        let url = await browser.getUrl();
        console.log("Browser url is: " + url);
    }

async forgetPassword (email) {
    await this.signInButton.click();
    await this.emailInput.waitForDisplayed();
    await browser.pause(5000);
    await this.emailInput.setValue(email);
    await browser.pause(3000);
    await this.resetButton.click();
    await browser.pause(3000);
    await this.emailInputSecond.setValue(email);
    await browser.pause(5000);
 }

 async forgetPasswordEmptyEmail () {
    await this.signInButton.click();
    await this.emailInput.waitForDisplayed();
    await browser.pause(5000);
    await this.resetButton.click();
    await browser.pause(3000);
    await this.emailInput.click();
    await browser.pause(3000);
 }

async forgetPasswordInvalidEmail (email) {
    await this.signInButton.click();
    await this.emailInput.waitForDisplayed();
    await browser.pause(5000);
    await this.resetButton.click();
    await browser.pause(3000);
    await this.emailInputSecond.setValue(email);
    await browser.pause(3000);
 }
}
module.exports = new SignInPage();
