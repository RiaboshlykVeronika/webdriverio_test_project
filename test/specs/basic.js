const SignUpPage = require('../pageobjects/signup.page');
const SignInPage = require('../pageobjects/signin.page');
const MainPage = require('../pageobjects/main.page');
const PricingPage = require('../pageobjects/pricing.page');
const ExplorePage = require('../pageobjects/explore.page');
const EnterprisePage = require('../pageobjects/enterprise.page');
const CareersPage = require('../pageobjects/careers.page');


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

describe('Main page', () => {
    it('show dropdown', async () => {
        browser.url('https://github.com/');
		await browser.pause(3000);
        await MainPage.showProductDropdown();
        await MainPage.showExploreDropdown();
        await MainPage.showPricingDropdown();
    });
});

describe('Pricing', () => {
    it('join for free plan', async () => {
        browser.url('https://github.com/');
		await browser.pause(3000);
        await PricingPage.joinForFree();
    });
});

describe('Explore', () => {
    it('explore topics', async () => {
        browser.url('https://github.com/');
		await browser.pause(3000);
        await ExplorePage.exploreTopic();
    });
});

describe('Enterprise', () => {
    it('start trial', async () => {
        browser.url('https://github.com/');
		await browser.pause(3000);
        await EnterprisePage.startTrial();
    });
});

describe.only('Careers', () => {
    it('show open positions', async () => {
        browser.url('https://github.com/');
		await browser.pause(3000);
        await CareersPage.showOpenPositions();
    });
});







