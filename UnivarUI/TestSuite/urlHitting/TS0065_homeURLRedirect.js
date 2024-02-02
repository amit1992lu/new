let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let testData = require('../../TestData/TestLevelData/TestCaseData.js');

describe('TS0065 home URL redirect', function () {
    before(async () => {
        await homePage.navigateToAppHomePage();
        await homePage.verifyHomePage(testData.common.trueStatus);
        await homePage.acceptCookieConsent();
    });

    it('Redirect has a 301 response', async () => {
        await homePage.verifyUrlRedirect();
    });
});
