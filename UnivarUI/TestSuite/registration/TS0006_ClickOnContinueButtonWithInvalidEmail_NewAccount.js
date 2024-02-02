let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let testData = require('../../TestData/TestLevelData/TestCaseData.js')
let getLanguageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile');
let signUpPage = require('../../PageActions/PageAction_Common/SignUpPage');

let getLanguage = getLanguageFile.getLanguageFile();

describe('TS006 Create account with invalid email', function () {
    before(async () => {
        await homePage.navigateToAppHomePage()
        await homePage.verifyHomePage(testData.common.trueStatus);
        await homePage.acceptCookieConsent();
    })

    it('Navigate to Sing Up Page', async () => {
        await homePage.clickOnSignUpLink();
        await signUpPage.verifySignupPage()
        await signUpPage.clickOnCmpnyNeverPurchased();
    });

    it('Enter a bad email', async () => {
        await signUpPage.enterEmail('test.com');
        await signUpPage.clickOnContinueButton();
        await signUpPage.verifyEmailErrorMsg(getLanguage.commonErrorMessage.enterValidEmail);
    });
});
