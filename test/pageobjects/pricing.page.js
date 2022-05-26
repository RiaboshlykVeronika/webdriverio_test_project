

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PricingPage extends Page {
    /**
     * define selectors using getter methods
     */
    get pricingButton () {
        return $('//*[@class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block"][contains(text(),"Pricing")]');
    }

    get plansButton () {
        return $('//*[@href="/pricing"][contains(text(),"Plans")]')
    }

    get enterpriseButton () {
        return $('//*[@class="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block"][contains(text(),"Enterprise")]');
     }

     get joinForFreeButton () {
         return $('//*[@class="btn-mktg d-block btn-muted-mktg"]');
     }

     get userLoginInput () {
         return $('#user_login');
     }

     get emailInput () {
         return $('#user_email');
     }

     get passwordInput () {
         return $('#user_password');
     }

     get emailCheckbox () {
         return $('#all_emails');
     }

   
    async joinForFree () {
        await this.enterpriseButton.moveTo();
        await this.pricingButton.moveTo();
        await browser.pause(3000); 
        await this.plansButton.click();
        await browser.pause(3000);  
        await this.joinForFreeButton.click();
        await browser.pause(3000);
        await this.userLoginInput.setValue(Date.now() + 'abc');
        await browser.pause(3000);
        await this.emailInput.setValue(Date.now() + '@gmail.com');
        await browser.pause(3000);
        await this.passwordInput.setValue(Date.now() + 'abc');
        await browser.pause(3000);
        await this.emailCheckbox.click();
        await browser.pause(3000);
    }
}

module.exports = new PricingPage();