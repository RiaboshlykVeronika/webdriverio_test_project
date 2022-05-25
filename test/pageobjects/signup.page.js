

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignUpPage extends Page {
    /**
     * define selectors using getter methods
     */
    get signUpButton () {
        return $('//a[@class="HeaderMenu-link flex-shrink-0 d-inline-block no-underline border color-border-default rounded px-2 py-1"]');
    }

    get emailInput () {
        return $('#email');
    }

    get passwordInput () {
        return $('#password');
    }
    
    get firstContinueButton () {
        return $('//*[@data-continue-to="password-container"]');
    }

    get secondContinueButton () {
        return $('//*[@data-continue-to="username-container"]');
    }
   
    get thirdContinueButton () {
        return $('//*[@data-continue-to="opt-in-container"]');
    }

    get fourthContinueButton () {
        return $('//*[@data-continue-to="captcha-and-submit-container"]')
    }

    get usernameInput () {
        return $('#login');
    }

    get optInput () {
        return $('#opt_in');
    }
    get verifyElement () {
    return $('//*[contains(text(),"Verify your account")]');
}

    get secondUserEmailInput () {
        return $('#user_email');
    }

    get secondSignUpButton () {
        return $('//*[@class="btn-mktg width-full width-sm-auto btn-signup-mktg"]');
    }


    /**
     * a method to encapsule automation code to interact with the page
     */

    async signUpFirst () {
         await this.signUpButton.click();
         await this.emailInput.waitForDisplayed();
         await browser.pause(5000);
         await this.emailInput.setValue(Date.now() + '@gmail.com');
         await browser.pause(5000);
         await this.firstContinueButton.click();
         await this.passwordInput.setValue(Date.now() + 'abc');
         await browser.pause(5000);
         await this.secondContinueButton.click();
         await this.usernameInput.setValue(Date.now() + 'abc');
         await browser.pause(3000);
         await this.thirdContinueButton.click();
         await this.optInput.setValue('n');
         await browser.pause(3000);
         await this.fourthContinueButton.click();
        await browser.pause(3000);
         let isElementDisplayed = await this.verifyElement.isDisplayed();
        console.log('Is displayed: ' + isElementDisplayed);
    }

    async signUpSecond () {
       await this.secondUserEmailInput.setValue(Date.now() + '@gmail.com');
       await this.secondSignUpButton.click();
       await browser.pause(3000);
       await this.firstContinueButton.click();
        await this.passwordInput.setValue(Date.now() + 'abc');
        await browser.pause(5000);
        await this.secondContinueButton.click();
        await this.usernameInput.setValue(Date.now() + 'abc');
        await browser.pause(3000);
        await this.thirdContinueButton.click();
        await this.optInput.setValue('n');
        await browser.pause(3000);
        await this.fourthContinueButton.click();
        await browser.pause(3000);
        let isElementDisplayed = await this.verifyElement.isDisplayed();
        console.log('Is displayed: ' + isElementDisplayed);
    }
}

module.exports = new SignUpPage();
