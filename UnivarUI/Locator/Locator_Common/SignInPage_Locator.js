class SignInPage_Locator {
	constructor() {
		this.SIGNINACCOUNT_TEXT = '#block-customer-login-heading';
		this.UNIVARSOLUIONS_IMG = '//img[@alt="Univar Solutions"]';
		this.SIGNIN_BUTTON = '.actions-toolbar .action.login.button.button--primary';
		this.PASSWORD_FIELD = '.control input[name="password"]';
		this.EMAIL_FIELD = 'div.control input#email';
		this.CREATEACCOUNT_BTN = '.create-account>a';
		this.FORGOTPASSWORD_LINK = 'a.action.remind';
		this.SUCCESS_MESSAGE = '//div[@class="container"]'


	}
}

module.exports = new SignInPage_Locator();
