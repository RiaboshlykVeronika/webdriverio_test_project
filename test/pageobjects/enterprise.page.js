

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class EnterprisePage extends Page {
    /**
     * define selectors using getter methods
     */
     get enterpriseButton () {
        return $('//*[@class="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block"][contains(text(),"Enterprise")]');
     }

     get startTrialButton () {
         return $('//*[@href="/organizations/enterprise_plan?ref_cta=Start+a+free+trial&ref_loc=hero&ref_page=%2Fenterprise"]');
     }

     get cloudCard () {
         return $('//*[@class="rounded-3 px-2 pt-5 pb-2 pricing-recommended-plan"]');
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

    get serverCard () {
        return $('//*[@href="https://enterprise.github.com/trial?ref_cta=Start+a+free+trial&ref_loc=hero&ref_page=%2Fenterprise&source=pricing-card-enterprise"]')
    }

    get nameInput () {
        return $('#contact_request_name');
    }

    get companyInput () {
        return $('#contact_request_organization_name');
    }

    get workEmailInput () {
        return $('#contact_request_email');
    }

    get proneInput () {
        return $('#contact_request_phone');
    }

    get typeCheckbox () {
        return $('#contact_request_instance_type_gcp');
    }

    get yesCheckbox () {
        return $('//*[@class="form-checkbox-details-trigger"]');
    }

    get questionList () {
        return $('#questions-list');
    }

    get termsCheckbox () {
        return $('//*[@class="js-tou-checkbox tou-checkbox"]')
    }

    async startTrial () {
        await this.enterpriseButton.click();
        await browser.pause(3000);  
        await this.startTrialButton.click();
        await browser.pause(3000);  
        await this.cloudCard.click();
        await browser.pause(3000);
        await this.userLoginInput.setValue(Date.now() + 'abc');
        await browser.pause(3000);
        await this.emailInput.setValue(Date.now() + '@gmail.com');
        await browser.pause(3000);
        await this.passwordInput.setValue(Date.now() + 'abc');
        await browser.pause(3000);
        await this.emailCheckbox.click();
        await browser.pause(3000);
        browser.back()
        await browser.pause(3000);
        await this.serverCard.click();
        await browser.pause(3000);
        await this.nameInput.setValue(Date.now() + 'abc');
        await browser.pause(3000);
        await this.companyInput.setValue(Date.now() + 'abc');
        await browser.pause(3000);
        await this.workEmailInput.setValue(Date.now() + 'gmail.com');
        await browser.pause(3000);
        await this.proneInput.setValue(Date.now());
        await browser.pause(3000);
        await this.typeCheckbox.click();
        await browser.pause(3000);
        await this.yesCheckbox.click();
        await browser.pause(3000);
        await this.questionList.setValue('test is done');
        await browser.pause(3000);
        await this.termsCheckbox.click();
        await browser.pause(3000);
     }
}

module.exports = new EnterprisePage();
