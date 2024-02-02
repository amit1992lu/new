let homePage = require('../../PageActions/PageAction_Common/HomePage')
let testData = require('../../TestData/TestLevelData/TestCaseData')
let contactUsPage = require('../../PageActions/PageAction_Common/ContactUsPage.js');

describe('TS0043 Verify Contact Us Page', function () {
    before(async () => {
        await homePage.navigateToAppHomePage()
        await homePage.verifyHomePage(testData.common.trueStatus);
        await homePage.acceptCookieConsent();
    })
    it('TS0043_VerifyContactUsPage', async () => {
        await homePage.clickContactUsFooterLink();
        await contactUsPage.verifyContactUsDetails();

    })
})
