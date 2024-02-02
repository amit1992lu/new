let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let testData = require('../../TestData/TestLevelData/TestCaseData.js');
let getLanguageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile');
let signUpPage = require('../../PageActions/PageAction_Common/SignUpPage');

let getLanguage = getLanguageFile.getLanguageFile();

describe('TS008 Validate error messages on Purchase Before form', function () {
    before(async () => {
        await homePage.navigateToAppHomePage()
        await homePage.verifyHomePage(testData.common.trueStatus);
        await homePage.acceptCookieConsent();
    });

    it('Navigate to Sign Up page', async () => {
        await homePage.clickOnSignUpLink();
        await signUpPage.verifySignupPage()
        await signUpPage.clickOnCmpnyPurchasedBefore();
    });

    it('Validate old account', async () => {
        await signUpPage.clickOnContinueButton();
        await signUpPage.verifyFirstNameErrorMsg(getLanguage.commonErrorMessage.thisFieldRequired);
        await signUpPage.verifyLastNameErrorMsg(getLanguage.commonErrorMessage.thisFieldRequired);
        await signUpPage.verifyEmailErrorMsg(getLanguage.commonErrorMessage.thisFieldRequired);
        await signUpPage.verifyCompanyErrorMsg(getLanguage.commonErrorMessage.thisFieldRequired);
        await signUpPage.verifyPhoneErrorMsg(getLanguage.commonErrorMessage.thisFieldRequired);
        await signUpPage.verifyAccountErrorMsg(getLanguage.commonErrorMessage.thisFieldRequired);
    });
});
