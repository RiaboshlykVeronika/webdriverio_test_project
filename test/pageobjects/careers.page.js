

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CareersPage extends Page {
    /**
     * define selectors using getter methods
     */
    get careersButton () {
        return $('//*[@href="/about/careers"]');
    }

    get openPositionsButton () {
        return $('//*[@href="#positions"]');
    }

    get openPositionsList () {
        // return $('//*[@class="pb-md-6"]');
        return $('//*[class="js-details-target d-block width-full btn-link text-normal Link--muted"]');
    }

    get openPositionsItem1 () {
        return $('div.pb-md-6 > div:nth-child(1)');
    }

    get openPositionsItem2 () {
        return $('div.pb-md-6 > div:nth-child(2)');
    }

    get openPositionsItem3 () {
        return $('div.pb-md-6 > div:nth-child(3)');
    }

    get openPositionsItem4 () {
        return $('div.pb-md-6 > div:nth-child(4)');
    }

    get openPositionsItem5 () {
        return $('div.pb-md-6 > div:nth-child(5)');
    }

    get openPositionsItem6 () {
        return $('div.pb-md-6 > div:nth-child(6)');
    }

    get openPositionsItem7 () {
        return $('div.pb-md-6 > div:nth-child(7)');
    }

    get openPositionsItem8 () {
        return $('div.pb-md-6 > div:nth-child(8)');
    }

    get openPositionsItem9 () {
        return $('div.pb-md-6 > div:nth-child(9)');
    }

    get openPositionsItem10 () {
        return $('div.pb-md-6 > div:nth-child(10)');
    }

    get openPositionsItem11 () {
        return $('div.pb-md-6 > div:nth-child(11)');
    }

    get openPositionsItem12 () {
        return $('div.pb-md-6 > div:nth-child(12)');
    }

    async showOpenPositions () {
        await this.careersButton.click();
        await browser.pause(3000); 
        await this.openPositionsButton.click();
        await browser.pause(3000); 
        let text1 = await this.openPositionsItem1.getText();
        console.log('Position1: ' + text1);
        let text2 = await this.openPositionsItem2.getText();
        console.log('Position2: ' + text2);
        let text3 = await this.openPositionsItem3.getText();
        console.log('Position3: ' + text3);
        let text4 = await this.openPositionsItem4.getText();
        console.log('Position4: ' + text4);
        let text5 = await this.openPositionsItem5.getText();
        console.log('Position5: ' + text5);
        let text6 = await this.openPositionsItem6.getText();
        console.log('Position6: ' + text6);
        let text7 = await this.openPositionsItem7.getText();
        console.log('Position7: ' + text7);
        let text8 = await this.openPositionsItem8.getText();
        console.log('Position8: ' + text8);
        let text9 = await this.openPositionsItem9.getText();
        console.log('Position9: ' + text9);
        let text10 = await this.openPositionsItem10.getText();
        console.log('Position10: ' + text10);
        let text11 = await this.openPositionsItem11.getText();
        console.log('Position11: ' + text11);
        let text12 = await this.openPositionsItem12.getText();
        console.log('Position12: ' + text12);

    }
}

module.exports = new CareersPage();
