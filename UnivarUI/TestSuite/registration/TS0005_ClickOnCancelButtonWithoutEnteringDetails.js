let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let testData = require('../../TestData/TestLevelData/TestCaseData.js')
describe('TS005 Click On Cancel Button Without Entering Details', function () {
    before(async () => {
        await homePage.navigateToAppHomePage()
        await homePage.verifyHomePage(testData.common.trueStatus);
        await homePage.acceptCookieConsent();
    });

    it('Click Cancel on Form and Navigate back to Sign In Page', async () => {
        let signUpPage = await homePage.clickOnSignUpLink();
        await signUpPage.verifySignupPage()
        await signUpPage.clickOnCmpnyNeverPurchased();
        await signUpPage.clickOnCancelButton();
        await signUpPage.verifySignupPage();
        await signUpPage.verifyIfCancelButtonIsDisplayed(testData.common.falseStatus);
        await signUpPage.verifyIfContinueButtonIsDisplayed(testData.common.falseStatus)
    });
});
