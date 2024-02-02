let testData = require('../../TestData/TestLevelData/TestCaseData.js')
let homePage = require('../../PageActions/PageAction_Common/HomePage.js')
let header  = require('../../PageActions/PageAction_Common/HeaderContentAction.js');

describe('TS010 Verify Cookies And Region Selector',function(){
    it('verify cookie', async () => {
        await homePage.navigateToAppHomePage();
        await homePage.verifyCookies();
        await homePage.acceptCookieConsent();
    });

    it('Verify Selected Region', async () => {
        await header.clickOnRegionalFlagOnHeader();
        await header.verifyActiveRegionAndLanguage(await process.env.REGION);
    });

    it.skip('Verify Region selector content', async () => {
        await header.verifyCountryAndLanguage(await testData.common.allCountries)
    });

    it('Verify Region Store URLs are pointed to the correct env', async () => {
        await header.validateRegionsURL();
    })

})
