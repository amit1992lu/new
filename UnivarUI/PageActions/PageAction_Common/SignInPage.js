'use strict';
let commonActions = require('../../../Utilities/CommonActions.js');
let signInPage_loc = require('../../Locator/Locator_Common/SignInPage_Locator.js');
const ProductCatalog_LOC = require('../../Locator/Locator_Common/ProductCatlogPage_Locator');

class SignInPage {

    //Verify Sign In page
    async verifySignInPage() {
        let currentUrl = await commonActions.getUrl();
        await commonActions.safeAsserts('contains', currentUrl, `${currentUrl} doesn't contains Login`, 'login');
        await commonActions.waitForVisible(signInPage_loc.SIGNINACCOUNT_TEXT,  'Sign In to Your Account text in Sign In page')
        await commonActions.safeIsVisible(signInPage_loc.UNIVARSOLUIONS_IMG, 'Univar Solutions image in Sign in page');
    }

    //Enter email text
    async enterEmail(email) {
        await commonActions.waitForClickable(signInPage_loc.EMAIL_FIELD,  'Enter email in sign in page');
        await commonActions.setValue(signInPage_loc.EMAIL_FIELD, email, 'Enter email in sign in page');
    }

    //Enter password text
    async enterPassword(password) {
        await commonActions.waitForClickable(signInPage_loc.PASSWORD_FIELD,  'Enter Password in sign in page');
        await commonActions.setValue(signInPage_loc.PASSWORD_FIELD, password, 'Enter Password in sign in page');
    }

    //Click on Sign In button
    async clickOnSignInButton() {
        await commonActions.waitForClickable(signInPage_loc.SIGNIN_BUTTON,  'Sign In button in sign in page');
        await commonActions.safeVisibleClick(signInPage_loc.SIGNIN_BUTTON,  'Sign In button in sign in page');
        await commonActions.elementIsNotDisplayed(signInPage_loc.SIGNIN_BUTTON,'Sign In button in sign in page');
    }
    //Create An Account button
    async clickOnCreateAnAccountBtn() {
        await commonActions.scrollTo(signInPage_loc.CREATEACCOUNT_BTN,  'Create An Account button in sign in page');
        await commonActions.waitForClickable(signInPage_loc.CREATEACCOUNT_BTN,  'Create An Account button in sign in page');
        await commonActions.safeVisibleClick(signInPage_loc.CREATEACCOUNT_BTN,  'Create An Account button in sign in page');
    }

    async loginWithValidCredentials(email, password) {
        await this.verifySignInPage();
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickOnSignInButton();
    }

    async clickOnForgotPasswordLinkCTA() {
        commonActions.waitForClickable(signInPage_loc.FORGOTPASSWORD_LINK, 'Forgot Password Link on sign in page');
        await commonActions.safeVisibleClick(signInPage_loc.FORGOTPASSWORD_LINK, 'Forgot Password Link on sign in page');
    }

    async verifySuccessToastMessage(successToastMsg) {
        await commonActions.waitForVisible(signInPage_loc.SUCCESSMESSAGE, 'Success Toast Message')
        let RFQSuccessToast = await commonActions.safeGetText(ProductCatalog_LOC.SUCCESSMESSAGE, successToastMsg)
        await commonActions.safeAsserts('contains', RFQSuccessToast, successToastMsg + ' is not displayed', successToastMsg)
    }
}

module.exports = new SignInPage();
