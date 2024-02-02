class ResetPasswordPage_Locator {
    constructor() {
        this.RESET_PASSWORD_FORUM = '.form.password.reset'
        this.RESET_PASSWORD_TEXT = '//span[text()="Reset Password"]';
        this.NEW_PASSWORD_FIELD = '//input[@id="password"]';
        this.CONFIRM_NEW_PASSWORD = '//input[@id="password-confirmation"]';
        this.SET_PASSWORD_BUTTON = 'button.submit';
    }

}

module.exports = new ResetPasswordPage_Locator()
