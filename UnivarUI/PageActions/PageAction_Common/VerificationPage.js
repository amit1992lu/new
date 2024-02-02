let commonActions = require('../../../Utilities/CommonActions.js');
let verify_Loc = require('../../Locator/Locator_Common/VerificationPage_Locators.js');

class VerificationPage {
    async verifyVerificationCodePage() {
        await commonActions.waitForVisible(verify_Loc.VERIFY_CODE, 'Verify Code');
        await commonActions.waitForVisible(verify_Loc.VERIFY_ACCESS_BTN, 'Verify Access Button');
        await commonActions.waitForVisible(verify_Loc.RESEND_CODE, 'Verify Resend Code');
    }

    async isVerificationPageDisplayed() {
        return await commonActions.safeIsVisible(verify_Loc.VERIFY_CODE, 'Verify Code');
    }
}

module.exports = new VerificationPage();
