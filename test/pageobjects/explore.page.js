

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ExplorePage extends Page {
    /**
     * define selectors using getter methods
     */
     get exploreButton () {
        return $('//*[@class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block"][contains(text(),"Explore")]');
    }

    get exploreGithubButton () {
        return $('//*[contains(text(),"Explore GitHub")]')
    }

    get enterpriseButton () {
        return $('//*[@class="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block"][contains(text(),"Enterprise")]');
     }

     get topicsButton () {
         return $('//*[@class="js-selected-navigation-item d-inline-block py-2 py-md-3 mr-3 mr-md-4 no-underline subnav-link"][contains(text(),"Topics")]');
     }

     get searchInput () {
         return $('//*[@placeholder="Search GitHub"]')
     }

     get typescriptButton () {
         return $('//*[@href="/search?l=TypeScript&q=webdriverio&type=Repositories"]');
     }

     get linkButton () {
         return $('//*[@href="/webdriverio/webdriverio"]');
     }


    async exploreTopic () {
        await this.enterpriseButton.moveTo();
        await this.exploreButton.moveTo();
        await browser.pause(3000);  
        await this.exploreGithubButton.click();
        await browser.pause(3000);  
        await this.topicsButton.click();
        let title = await $('h1');
        let titleValue = await title.getText();
        console.log("Value: " + titleValue);
        await this.searchInput.setValue('webdriverio');
        browser.keys('Enter');
        await browser.pause(3000);  
        await this.typescriptButton.click();
        await browser.pause(3000); 
        await this.linkButton.click();
        let url = await browser.getUrl();
        console.log("Browser url is: " + url);
     }
}

module.exports = new ExplorePage();
