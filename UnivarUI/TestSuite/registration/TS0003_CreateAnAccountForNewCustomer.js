let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let signUpPage = require('../../PageActions/PageAction_Common/SignUpPage.js');
let accountSubmittedPage = require('../../PageActions/PageAction_Common/AccountSubmittedPage');
let testData = require('../../TestData/TestLevelData/TestCaseData.js')
describe('TS003 Create a Never Purchased Before account', function () {
    before(async () => {
        await homePage.navigateToAppHomePage()
        await homePage.verifyHomePage(testData.common.trueStatus);
        await  homePage.acceptCookieConsent();
    });

    it('Navigate to Sign Up Page', async () => {
        await homePage.clickOnSignUpLink();
        await signUpPage.verifySignupPage()
        await signUpPage.clickOnCmpnyNeverPurchased();
    });

    it('Enter New Customer Info', async () => {
        await signUpPage.enterUserDetails(testData.common.firstName_Dynamic, testData.common.lastName_Dynamic,testData.common.phoneNumber_Dynamic,testData.common.companyName_Dynamic,testData.common.mailinatorMail_Dynamic);
        await signUpPage.enterShippingAddressDetailsWithoutBuildingNum(testData.common.companyAddress,testData.common.cityName_Dynamic,testData.common.zipCode);
    });

    xit('Submit Form', async () => {
        await signUpPage.clickOnContinueButton();
        await accountSubmittedPage.verifySuccessLineAlert(testData.common.trueStatus);
        await accountSubmittedPage.verifyNewAccountRequestSubmittedText();
    });
});
