let commonActions = require('../../../Utilities/CommonActions.js');
let accountInfoPage_Locator = require('../../Locator/Locator_Common/AccountInfoCheckoutPage_Locator.js');
const shippingPage_Loc = require('../../Locator/Locator_Common/ShippingCheckoutPage_Locator.js');

class AccountInfoPage {
    async verifyAccountInfoPage() {
        let progressBar = await commonActions.waitForVisible(accountInfoPage_Locator.ACCOUNT_INFO_PROGRESS_ACTIVE,  'progressBar');
        let accInfoTitle = await commonActions.waitForVisible(accountInfoPage_Locator.ACCOUNT_INFORMATION_TITLE, 'Account Info Title');
        let orderSummaryTitle = await commonActions.waitForVisible(accountInfoPage_Locator.ORDER_SUMMARY_TITLE, 'Order Summary title');
        await commonActions.waitForVisible(shippingPage_Loc.BACK_TO_CART_ON_HEADER,  'Back To Cart On Header');
        let univarLogo = await commonActions.waitForVisible(shippingPage_Loc.UNIVAR_SOLUTIONS_LOGO_ON_HEADER, 'Univar Solutions Logo On Header');
    }

    async enterEmailId(email) {
        await commonActions.setValue(accountInfoPage_Locator.EMAIL_FIELD, email, 'Email Id');
        await commonActions.waitForClickable(accountInfoPage_Locator.CONTINUE_BUTTON, 'Continue Button');
        await commonActions.safeClick(accountInfoPage_Locator.CONTINUE_BUTTON, 'Continue Button');
    }

    async enterFirstName(firstName) {
        await commonActions.waitForVisible(accountInfoPage_Locator.FIRST_NAME_FIELD, firstName, 'Enter First Name');
        await commonActions.setValue(accountInfoPage_Locator.FIRST_NAME_FIELD, firstName, 'Enter First Name');
    }

    async enterLastName(lastName) {
        await commonActions.waitForVisible(accountInfoPage_Locator.LAST_NAME_FIELD, lastName, 'Enter Last Name');
        await commonActions.setValue(accountInfoPage_Locator.LAST_NAME_FIELD, lastName, 'Enter Last Name');
    }

    async enterPassword(password) {
        await commonActions.waitForVisible(accountInfoPage_Locator.CREATE_PASSWORD_FIELD, password, 'Enter Password');
        await commonActions.setValue(accountInfoPage_Locator.CREATE_PASSWORD_FIELD, password, 'Enter Password');
    }

    async enterExistingPassword(password) {
        await commonActions.waitForVisible(accountInfoPage_Locator.EXISTING_PASSWORD_FIELD, password, 'Enter Password');
        await commonActions.setValue(accountInfoPage_Locator.EXISTING_PASSWORD_FIELD, password, 'Enter Password');
    }

    async clickOnNextShippingButton() {
        await commonActions.waitForClickable(accountInfoPage_Locator.NEXT_SHIPPING_BUTTON,  'Click on Next: Shipping Button');
        await commonActions.safeVisibleClick(accountInfoPage_Locator.NEXT_SHIPPING_BUTTON,  'Click on Next: Shipping Button');
        await commonActions.elementIsNotDisplayed(accountInfoPage_Locator.NEXT_SHIPPING_BUTTON);
    }

    async enterAccInfoAndClickShippingButton(firstName, lastName, email, password) {
        await  this.enterEmailId(email)
        await this.enterFirstName(firstName)
        await this.enterLastName(lastName)
        await  this.enterPassword(password)
    }

    async enterExistingUserAndLogin(email, password) {
        await this.enterEmailId(email);
        await this.enterExistingPassword(password);
    }

    async returnToCart() {
        await commonActions.waitForClickable(shippingPage_Loc.BACK_TO_CART_ON_HEADER, 'Back to cart');
        await commonActions.safeClick(shippingPage_Loc.BACK_TO_CART_ON_HEADER, 'Back to cart');
    }

}

module.exports = new AccountInfoPage();
