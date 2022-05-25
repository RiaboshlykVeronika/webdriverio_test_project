const SignUpPage = require('../pageobjects/signup.page');
const SignInPage = require('../pageobjects/signin.page');
const MainPage = require('../pageobjects/main.page');

describe('My SignUp application', () => {
    it('should login with valid credentials', async () => {
        browser.url('https://github.com/');
		await browser.pause(5000);
        await SignUpPage.signUpFirst();
    });
});


describe('My SignIn application', () => {
    it('should login with valid credentials', async () => {
        browser.url('https://github.com/');
		await browser.pause(5000);
        await SignInPage.signIn('180101test@gmail.com', '1801testpassword');
    });
});

describe('My SignIn application', () => {
    it('restore password with valid credentionals', async () => {
        browser.url('https://github.com/');
		await browser.pause(5000);
        await SignInPage.forgetPassword('180101test@gmail.com');
    });
});

describe('My SignIn application', () => {
    it('restore password with empty email', async () => {
        browser.url('https://github.com/');
		await browser.pause(5000);
        await SignInPage.forgetPasswordEmptyEmail();
    });
});

describe('My SignIn application', () => {
    it('restore password with invalid email', async () => {
        browser.url('https://github.com/');
		await browser.pause(5000);
        await SignInPage.forgetPasswordInvalidEmail('abc');
    });
});

describe.only('Main page', () => {
    it('show Product dropdown', async () => {
        browser.url('https://github.com/');
		await browser.pause(5000);
        await MainPage.showProductDropdown();
        await MainPage.showExploreDropdown();
        await MainPage.showPricingDropdown();
    });
});




