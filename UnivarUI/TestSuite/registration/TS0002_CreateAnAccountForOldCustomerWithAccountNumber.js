let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let signUpPage = require('../../PageActions/PageAction_Common/SignUpPage.js');
let accountSubmittedPage = require('../../PageActions/PageAction_Common/AccountSubmittedPage');
let testData = require('../../TestData/TestLevelData/TestCaseData.js')
describe('TS002 Create a Purchased Before Account with existing account number', function () {
    before(async () => {
        await homePage.navigateToAppHomePage()
        await homePage.verifyHomePage(testData.common.trueStatus);
        await homePage.acceptCookieConsent();
    });

    it('Enter existing user info', async () => {
        await homePage.clickOnSignUpLink();
        await signUpPage.verifySignupPage()
        await signUpPage.clickOnCmpnyPurchasedBefore();
        await signUpPage.enterUserDetails(testData.common.firstName_Dynamic, testData.common.lastName_Dynamic, testData.common.phoneNumber_Dynamic, testData.common.companyName_Dynamic, testData.common.mailinatorMail_Dynamic);
        await signUpPage.enterAccountNumber(testData.common.accountNumber);
    });

    xit('Submit Sign Up Form', async () => {
        await signUpPage.clickOnContinueButton();
        await accountSubmittedPage.verifySuccessLineAlert(testData.common.trueStatus);
        await accountSubmittedPage.verifyNewAccountRequestSubmittedText();
    });
});
