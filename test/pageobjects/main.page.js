

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get productButton () {
        return $('//*[@class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block"][contains(text(),"Product")]');
    }

    get exploreButton () {
        return $('//*[@class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block"][contains(text(),"Explore")]');
    }

    get pricingButton () {
        return $('//*[@class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block"][contains(text(),"Pricing")]');
    }

    get dropDown () {
        return $('//*[@class="dropdown-menu flex-auto rounded px-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4"]')
    }

    async showProductDropdown () {
        await this.productButton.moveTo();
        await this.productButton.click();
        await this.productButton.click();
        let isDisplayed = await this.dropDown.isDisplayed();
        console.log('Is displayed? ' + isDisplayed);
     }

     async showExploreDropdown () {
        await this.exploreButton.moveTo();
       let isDisplayed = await this.dropDown.isDisplayed();
        console.log('Is displayed? ' + isDisplayed);
     }

     async showPricingDropdown () {
        await this.pricingButton.moveTo();
        let isDisplayed = await this.dropDown.isDisplayed();
        console.log('Is displayed? ' + isDisplayed);
     }
}

module.exports = new SecurePage();
