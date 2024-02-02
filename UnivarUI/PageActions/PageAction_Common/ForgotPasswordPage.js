let safeAction = require('../../../Utilities/CommonActions');
let forgotPasswordLocator = require('../../Locator/Locator_Common/ForgotPasswordPage_Locator');
let personalizedHomepage =  require('../PageAction_Common/PersonalizedHomePage.js');

class ForgotPasswordPage {
    async enterEmailAddress(email) {
        await safeAction.waitForClickable(forgotPasswordLocator.EMAIL_FIELD,  'Enter email in forgot password page');
        await safeAction.setValue(forgotPasswordLocator.EMAIL_FIELD, email, 'Enter email in forgot password page');
    }

    async clickOnSubmitButton() {
        await safeAction.waitForClickable(forgotPasswordLocator.SUBMIT_BUTTON,  'Submit button');
        await safeAction.safeClick(forgotPasswordLocator.SUBMIT_BUTTON,  'Submit button');
    }

}

module.exports = new ForgotPasswordPage();
