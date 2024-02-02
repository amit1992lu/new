class AccountInfoCheckoutPage_Locator {
    constructor() {
       this.FIRST_NAME_FIELD=  '.field._required [name="first_name"]';
       this.LAST_NAME_FIELD= '//input[@name="last_name"]';
       this.EMAIL_FIELD= '//input[@name="email"][@class="input-text"]';
       this.CREATE_PASSWORD_FIELD ='//input[@name="create_password"]';
       this.EXISTING_PASSWORD_FIELD ='.input-text.password';
       this.CONFIRM_PASSWORD_FIELD = '//input[@name="confirm_password"]';
       this.NEXT_SHIPPING_BUTTON = '#account-info .button.button--primary.action.continue';
       this.ACCOUNT_INFO_PROGRESS_ACTIVE = '//li[@class="opc-progress-bar-item _active"]';
       this.CHECKOUT_BREADCRUMB ='(//ul[@class="items"]/li)[last()]';
       this.ACCOUNT_INFORMATION_TITLE = '#account-info .step-title';
       this.ORDER_SUMMARY_TITLE = '.opc-block-summary .title';
       this.CONTINUE_BUTTON = '#account-info-form .button.button--primary.action.continue';
    }
}
module.exports = new AccountInfoCheckoutPage_Locator();
