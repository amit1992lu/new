class InstantCheckoutLoginPage_Locator{
    constructor() {
       this.CHECKOUT_AND_CREATE_ACCOUNT_BUTTON=  '//a[contains(text(),"Check Out & Create an Account")]';
       this.RETURNING_CUSTOMER_TEXT = '//h2[contains(text(),"Returning Customer")][@class="form-title"]';
       this.EMAIL_INPUT_FIELD = '//div[@class="control"]/input[@name="login[username]"]';
       this.PASSWORD_INPUT_FIELD = '//div[@class="control"]/input[@name="login[password]"]';
       this.FORGOT_PASSWORD_LINK = '//a[@class="action remind"][contains(text(),"Forgot Your Password?")]';
       this.SIGN_IN_AND_CHECKOUT_BUTTON = '//button[@type="submit"]/span[contains(text(),"Sign In & Checkout")]';
       this.SIGNIN_TO_YOUR_ACCOUNT_TITLE = '//h1[@class="text-center main-title"][contains(text(),"Sign In to Your Account")]';
       this.NEW_CUSTOMER_TEXT = '//h2[@class="form-title"][contains(text(),"New Customer")]';
       this.WE_WILL_SETUP_TEXT = '//p[@class="form-paragraph"][contains(text(),\"We will set you up with an account while you check out. It"s quick and easy!\")]';

    }
}
module.exports = new InstantCheckoutLoginPage_Locator();
