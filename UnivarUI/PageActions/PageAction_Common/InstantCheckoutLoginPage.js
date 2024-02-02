'use strict';
let commonActions = require('../../../Utilities/CommonActions.js');
let instantCheckoutLoginPage_Locator = require('../../Locator/Locator_Common/InstantCheckoutLoginPage_Locator.js');

class InstantCheckoutLoginPage {

    async clickOnCheckoutAndCreateAccountButton() {
        await commonActions.safeVisibleClick(instantCheckoutLoginPage_Locator.CHECKOUT_AND_CREATE_ACCOUNT_BUTTON,  'Checkout And Create Account Button');
        await commonActions.elementIsNotDisplayed(instantCheckoutLoginPage_Locator.CHECKOUT_AND_CREATE_ACCOUNT_BUTTON);
    }

    async verifyInstantCheckoutLoginPage() {
        let signInTitle = await commonActions.safeIsVisible(instantCheckoutLoginPage_Locator.SIGNIN_TO_YOUR_ACCOUNT_TITLE, 'Sign In to Your Account Title');
        await commonActions.safeAsserts('true', signInTitle, 'Sign In to Your Account Title')
        let returningCustomerText = await commonActions.safeIsVisible(instantCheckoutLoginPage_Locator.RETURNING_CUSTOMER_TEXT, 'Returning Customer Text');
        await commonActions.safeAsserts('true', returningCustomerText, 'Returning Customer Text');
        let forgotPassLink = await commonActions.safeIsVisible(instantCheckoutLoginPage_Locator.FORGOT_PASSWORD_LINK, 'Forgot Password Link');
        await commonActions.safeAsserts('true', forgotPassLink, 'Forgot Password Link');
        let newCustomerText = await commonActions.safeIsVisible(instantCheckoutLoginPage_Locator.NEW_CUSTOMER_TEXT, 'New Customer title');
        await commonActions.safeAsserts('true', newCustomerText, 'New Customer title');
        let setUpText = await commonActions.safeIsVisible(instantCheckoutLoginPage_Locator.WE_WILL_SETUP_TEXT, 'We will Setup your account text');
        await commonActions.safeAsserts('true', setUpText, 'We will Setup your account text');
    }

    async signInAsExistingCustomer(email, password) {
        await commonActions.setValue(instantCheckoutLoginPage_Locator.EMAIL_INPUT_FIELD, email, 'Email ID of existing customer');
        await commonActions.setValue(instantCheckoutLoginPage_Locator.PASSWORD_INPUT_FIELD, password, 'Password of existing customer')
        await commonActions.safeVisibleClick(instantCheckoutLoginPage_Locator.SIGN_IN_AND_CHECKOUT_BUTTON,  'Sign in and Checkout Button');
    }


}

module.exports = new InstantCheckoutLoginPage();
