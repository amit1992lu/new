let homePage = require('../../PageActions/PageAction_Common/HomePage')
let signInPage = require('../../PageActions/PageAction_Common/SignInPage')
let testData = require('../../TestData/TestLevelData/TestCaseData')

describe('TS0032_Verify_Homepage_of_US_Region', function () {
    before(async () => {
        await homePage.navigateToAppHomePage();
        await homePage.verifyHomePage(testData.common.trueStatus);
        await homePage.acceptCookieConsent();
    });
    it('Verify the Buy now with immediate Price Section',async ()=>{
        await homePage.immediate_price_section_US();
    });

    it('Verify the Adding value across diverse industries section',async ()=>{
        await homePage.diverse_industries_section_US();
    });
});
