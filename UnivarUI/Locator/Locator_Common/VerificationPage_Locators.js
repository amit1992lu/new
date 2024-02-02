class VerificationPage_Locators {
	constructor() {
        this.VERIFY_CODE = '.block.block-customer-login.mfa-login-step.offers-verification-code.active #code';
        this.RESEND_CODE = '.block.block-customer-login.mfa-login-step.offers-verification-code.active .button.button--link.verification-code__resend';
        this.VERIFY_ACCESS_BTN = '.block.block-customer-login.mfa-login-step.offers-verification-code.active .action.login.button.button--primary.form__submit';
	}
}

module.exports = new VerificationPage_Locators();
