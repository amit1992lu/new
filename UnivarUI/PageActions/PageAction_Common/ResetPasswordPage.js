let resetPasswordLoc = require('../../Locator/Locator_Common/ResetPasswordPage_Locator');
let safeAction = require('../../../Utilities/CommonActions');

class ResetPasswordPage {
    async verifyResetPasswordPage() {
        let resetPasswordText = await safeAction.waitForVisible(resetPasswordLoc.NEW_PASSWORD_FIELD, 'Reset Password Button');
        await safeAction.safeAsserts('true', resetPasswordText, 'Reset Password Text')
        let resetPasswordURL = await safeAction.getUrl()
        await safeAction.safeAsserts('contains', resetPasswordURL, 'Reset Password URL', 'createPassword');
    }

    /**
     * enter new password
     * @param password
     */
    async enterNewPassword(password) {
        await safeAction.setValue(resetPasswordLoc.NEW_PASSWORD_FIELD, password, 'New Password');
    }

    async enterConfirmPassword(password) {
        await safeAction.setValue(resetPasswordLoc.CONFIRM_NEW_PASSWORD, password, 'Confirm Password');
    }

    async clickSetPasswordButton() {
        await safeAction.safeVisibleClick(resetPasswordLoc.SET_PASSWORD_BUTTON, 'Set Password Button');
        await safeAction.elementIsNotDisplayed(resetPasswordLoc.SET_PASSWORD_BUTTON, 'Set Password Button')
    }


}

module.exports = new ResetPasswordPage();
