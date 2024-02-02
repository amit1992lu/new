let homePage = require('../../PageActions/PageAction_Common/HomePage')
let signInPage = require('../../PageActions/PageAction_Common/SignInPage')
let testData = require('../../TestData/TestLevelData/TestCaseData')
let forgotPasswordPage = require('../../PageActions/PageAction_Common/ForgotPasswordPage')
let personalizedHomepage = require('../../PageActions/PageAction_Common/PersonalizedHomePage')
let commonSuccessMsg = require('../../TestData/TestLevelData/CommonMessage')
let mailinatorPage = require('../../PageActions/PageAction_Common/MailinatorPage.js')
let resetPasswordPage = require('../../PageActions/PageAction_Common/ResetPasswordPage.js')
describe('TS012 Verify Reset Password From', function () {
    before(async () => {
        await homePage.navigateToAppHomePage();
        await homePage.verifyHomePage(testData.common.trueStatus);
        await homePage.acceptCookieConsent();
    });
    it('Click on forgot password and enter email address ',async ()=>{
        await homePage.clickOnSignInLink()
        await signInPage.clickOnForgotPasswordLinkCTA();
        await forgotPasswordPage.enterEmailAddress(testData.common.mailinatorEmailId);
    });
    it('Submit and Verify Success Text for Reset Password',async ()=>{
        await forgotPasswordPage.clickOnSubmitButton();
        await homePage.verifyHomePage(testData.common.trueStatus);
        await homePage.verifySuccessToastMessage(testData.common.mailinatorEmailId)

    });
    it.skip('Click on first received reset mail link in mailinator ',async ()=>{
        await mailinatorPage.navigateToMailinatorInboxPageAndVerify()
        await mailinatorPage.enterEmailInSearchBoxAndClickGo(testData.common.mailinatorEmailId)
        await mailinatorPage.clickOnFirstResetPasswordEmailLink();
        await mailinatorPage.verifyToEmailInMailinatorInbox(testData.common.mailinatorEmailId)
        await mailinatorPage.clickOnResetPasswordAndNavigate()
    });
    it.skip('verify Reset password page and enter password',async ()=>{
        await resetPasswordPage.verifyResetPasswordPage()
        await resetPasswordPage.enterNewPassword(testData.common.password_Dynamic)
        await resetPasswordPage.enterConfirmPassword(testData.common.password_Dynamic)
        await resetPasswordPage.clickSetPasswordButton()
    });
    it.skip('Verify SignIn Page and Enter Credentials',async ()=>{
        await signInPage.verifySignInPage(commonSuccessMsg.commonSuccessMessage.ResetPasswordSuccessMsg)
        await signInPage.enterEmail(testData.common.mailinatorEmailId)
        await signInPage.enterPassword(testData.common.password_Dynamic)
        await signInPage.clickOnSignInButton();
    });
})
