var argv = require('minimist').argv;
let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let signUpPage = require('../../PageActions/PageAction_Common/SignUpPage');
let accountSubmittedPage = require('../../PageActions/PageAction_Common/AccountSubmittedPage');
let testData = require('../../TestData/TestLevelData/TestCaseData.js')
describe('TS001 Create a Purchased Before Account with existing shipping address', function () {
    before(async () => {
        await homePage.navigateToAppHomePage();
        await homePage.verifyHomePage(testData.common.trueStatus);
        await homePage.acceptCookieConsent();
    });

    it('Fill out Company Info', async () => {
        await homePage.clickOnSignUpLink();
        await signUpPage.verifySignupPage()
        await signUpPage.clickOnCmpnyPurchasedBefore();
        await signUpPage.enterUserDetails(testData.common.firstName_Dynamic, testData.common.lastName_Dynamic, testData.common.phoneNumber_Dynamic, testData.common.companyName_Dynamic, testData.common.mailinatorMail_Dynamic);
        await signUpPage.clickOnProvideShippingAddressRadioButton();
        await signUpPage.enterShippingAddressDetailsWithOutEndMarket(testData.common.companyAddress, testData.common.cityName_Dynamic, testData.common.zipCode);
    });

    xit('Submit Sign Up Page', async () => {
        await signUpPage.clickOnContinueButton();
        await accountSubmittedPage.verifySuccessLineAlert(testData.common.trueStatus);
        await accountSubmittedPage.verifyNewAccountRequestSubmittedText(testData.common.trueStatus);
    });
});
