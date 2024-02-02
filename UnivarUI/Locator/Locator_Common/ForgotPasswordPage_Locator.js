class ForgotPasswordPage_Locator{
    constructor() {
        this.WELCOME_TEXT ='//h1[text()="Welcome to Univar Solutions"]';
        this.EMAIL_FIELD = '#email_address';
        this.SUBMIT_BUTTON = '.submit.primary.button';

    }

}

module.exports = new ForgotPasswordPage_Locator()
