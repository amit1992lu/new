let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let signUpPage = require('../../PageActions/PageAction_Common/SignUpPage');
let testData = require('../../TestData/TestLevelData/TestCaseData.js')
describe('TS004 Click cancel button after entering user and shipping details', function () {
    before(async () => {
        await homePage.navigateToAppHomePage()
        await homePage.verifyHomePage(testData.common.trueStatus);
        await homePage.acceptCookieConsent();
    });

    it('Navigate to Sign up Page', async () => {
        await homePage.clickOnSignUpLink();
        await signUpPage.verifySignupPage()
        await signUpPage.clickOnCmpnyPurchasedBefore();
    });

    it('Enter users detail', async () => {
        await signUpPage.enterUserDetails(testData.common.firstName_Dynamic, testData.common.lastName_Dynamic, testData.common.phoneNumber_Dynamic, testData.common.companyName_Dynamic, testData.common.mailinatorMail_Dynamic);
        await signUpPage.clickOnProvideShippingAddressRadioButton();
        await signUpPage.enterShippingAddressDetailsWithOutEndMarket(testData.common.companyAddress, testData.common.companyBuildingNumber, testData.common.cityName_Dynamic, testData.common.zipCode);
    });

    it('Click Cancel on Form and verify Navigate to Sign In Page', async () => {
        await signUpPage.clickOnCancelButton();
        await signUpPage.verifySignupPage();
        await signUpPage.verifyIfCancelButtonIsDisplayed(testData.common.falseStatus);
        await signUpPage.verifyIfContinueButtonIsDisplayed(testData.common.falseStatus)
    });
});
