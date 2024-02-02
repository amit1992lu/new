let commonActions = require('../../../Utilities/CommonActions.js');
let shippingPage_Loc = require('../../Locator/Locator_Common/ShippingCheckoutPage_Locator.js');
let paymentPage_Locator = require('../../Locator/Locator_Common/PaymentCheckoutPage_Locator.js');
let getLanguageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile');
let getLanguage = getLanguageFile.getLanguageFile();

class PaymentCheckoutPage {
    async verifyPaymentPage() {
        await commonActions.elementIsNotDisplayed(shippingPage_Loc.NEXT_PAYMENT_BUTTON);
        await commonActions.elementIsNotDisplayed(shippingPage_Loc.LOADING_MASK);
        await commonActions.waitForVisible(paymentPage_Locator.PAYMENT_PAGE_STATUS_BAR_ACTIVE, 'Shipping Page Status Progress bar is active');
        await commonActions.safeClick(paymentPage_Locator.PAYMENT_PAGE_STATUS_BAR_ACTIVE, 'Shipping Page Status Progress bar is active');
        let paymentStatus = await commonActions.safeGetText(paymentPage_Locator.PAYMENT_PAGE_STATUS_BAR_ACTIVE, 'Shipping Page Status Progress bar is active');
        await expect(paymentStatus, 'Payment Progress Indicator').to.be.equal(getLanguage.checkoutPage.paymentProgress);
        let billingAddressTitle = await commonActions.safeIsVisible(paymentPage_Locator.BILLING_ADDRESS_HEADER, 'Billing Address Header');
        await expect(billingAddressTitle, 'Billing Address Header is not visible').to.be.true;
        await commonActions.waitForVisible(paymentPage_Locator.SHIPPING_ADDRESS_TITLE,  'Shipping Address Title On Payment Page');
        let shippingAddressTitle = await commonActions.safeIsVisible(paymentPage_Locator.SHIPPING_ADDRESS_TITLE,  'Shipping Address Title On Payment Page');
        await expect(shippingAddressTitle, 'Shipping Address Title On Payment Page is not visible').to.be.true;
        await commonActions.waitForVisible(shippingPage_Loc.BACK_TO_CART_ON_HEADER, 'Back To Cart On Header');
        let univarLogo = await commonActions.safeIsVisible(shippingPage_Loc.UNIVAR_SOLUTIONS_LOGO_ON_HEADER, 'Univar Solutions Logo On Header');
        await commonActions.safeAsserts('true', univarLogo, 'Univar Logo On Header');
    }

    async enterPONumber(PO_Number) {
        await commonActions.setValue(paymentPage_Locator.PO_NUMBER_INPUT_FIELD, PO_Number, 'PO NUMBER');
    }

    async clickOnTermsAndConditionsCheckBox() {
        await commonActions.scrollTo(paymentPage_Locator.TERMS_AND_CONDITIONS_BOX, 'Clicked on T&C box');
        await commonActions.safeJavaScriptClick(paymentPage_Locator.TERMS_AND_CONDITIONS_BOX, 'Clicked on T&C box');
    }

    async NavigatedToPaymentpage()
    {
        await commonActions.elementIsNotDisplayed(shippingPage_Loc.NEXT_PAYMENT_BUTTON)
        await commonActions.waitForVisible(paymentPage_Locator.PAYMENT_PAGE_STATUS_BAR_ACTIVE, 'Shipping Page Status Progress bar is active');
        let paymentStatus = await commonActions.safeGetText(paymentPage_Locator.PAYMENT_PAGE_STATUS_BAR_ACTIVE, 'Shipping Page Status Progress bar is active');
        await expect(paymentStatus, 'Payment Progress Indicator').to.be.equal(getLanguage.checkoutPage.paymentProgress);
        await commonActions.waitForVisible(paymentPage_Locator.PAYMENT_METHOD_HEADER, 'Billing Address Header');
        let billingAddressTitle = await commonActions.safeIsVisible(paymentPage_Locator.BILLING_ADDRESS_HEADER, 'Billing Address Header');
        await expect(billingAddressTitle, 'Billing Address Header is not visible').to.be.true;
    }

    async clickOnSubmitOrderButton() {
        await commonActions.scrollTo(paymentPage_Locator.SUBMIT_ORDER_BUTTON, 'Place Order Button');
        await commonActions.waitForClickable(paymentPage_Locator.SUBMIT_ORDER_BUTTON, 'Place Order Button');
        await commonActions.scrollTo(paymentPage_Locator.SUBMIT_ORDER_BUTTON, 'Place Order Button');
        await commonActions.safeVisibleClick(paymentPage_Locator.SUBMIT_ORDER_BUTTON, 'Place Order Button');
    }

    async getShippingAddress() {
        let shippingAddress = await commonActions.safeGetText(shippingPage_Loc.ACTUAL_SHIPPING_ADDRESS, 'Shipping Address on Payment Page');
        return shippingAddress;
    }

    async verifyDisclaimerMessage(actualDisclaimerMessage) {
        let disclaimerMessage = await commonActions.safeGetText(paymentPage_Locator.DISCLAIMER_MESSAGE, 'Disclaimer Message on Payment Page');
        await expect(disclaimerMessage, 'Disclaimer Message on Payment Page').to.be.equal(actualDisclaimerMessage);
    }

    async verifyActualBillingAddress(actualBillingAddress) {
        let billingAddress = await commonActions.safeGetText(paymentPage_Locator.ACTUAL_BILLING_ADDRESS, 'Actual billing address of the customer');
        billingAddress = billingAddress.replace('billing', 'shipping');
        await expect(billingAddress, `Expected Billing address- ${actualBillingAddress}, Actual billing address- ${billingAddress}`).to.be.equal(actualBillingAddress);
    }

    async verifyDefaultPaymentMethod(paymentRadio) {
        let defaultPaymentRadio = await commonActions.dynamicLocator(paymentPage_Locator.ACTIVE_PAYMENT_METHOD, paymentRadio)
        let defaultPaymentRadio1 = await commonActions.safeIsVisible(defaultPaymentRadio, 'default payment method radio');
        await commonActions.safeAsserts('true', defaultPaymentRadio1, 'Default Payment Method');
    }

    async selectCreditCardRadio() {
        await commonActions.safeVisibleClick(paymentPage_Locator.CREDIT_CARD_RADIO, 'CC Radio');
    }

    async enterCreditCardNumber(ccNumber) {
        await commonActions.setValue(paymentPage_Locator.CREDIT_CARD_INPUT_FIELD, ccNumber, 'credit card number');
        await commonActions.waitForVisible(paymentPage_Locator.CREDIT_CARD_VALID_FIELD, 'credit card number');
    }

    async enterExpirationMonth(expMonth) {
        await commonActions.setValue(paymentPage_Locator.EXPIRATION_MONTH, expMonth, 'Expiration Month');
        await commonActions.waitForVisible(paymentPage_Locator.EXPIRATION_VALID, 'Expiration Month');
    }

    async enterExpirationYear(expYear) {
        await commonActions.setValue(paymentPage_Locator.EXPIRATION_YEAR, expYear, 'Expiration Year');
    }

    async enterCVVNumber(cvv) {
        await commonActions.setValue(paymentPage_Locator.CARD_VERIFICATION_NUMBER, cvv, 'CVV Number');
        await commonActions.waitForVisible(paymentPage_Locator.CVV_VALID, 'CVV Number');
    }

    async enterCCDetails(ccNumber, expMonth, expYear, cvv) {
        await commonActions.scrollTo(paymentPage_Locator.PAYMENT_FRAME, 'Braintree frame');
        await commonActions.safeFrameSwitch(paymentPage_Locator.PAYMENT_FRAME, 'Braintree frame');
        await this.enterCreditCardNumber(ccNumber);
        await commonActions.switchToParentFrame();
        await commonActions.safeFrameSwitch('braintree-hosted-field-expirationDate', 'Braintree Exp date');
        await this.enterExpirationMonth(expMonth + expYear);
        await commonActions.switchToParentFrame();
        await commonActions.safeFrameSwitch('braintree-hosted-field-cvv', 'braintree-hosted-field-cvv');
        await this.enterCVVNumber(cvv);
        await commonActions.switchToParentFrame();

    }

    async clickOnInstantCheckoutSubmitButton() {
        await commonActions.scrollTo(paymentPage_Locator.IC_SUBMIT_BUTTON, 'Instant Checkout Submit Button');
        await commonActions.waitForClickable(paymentPage_Locator.IC_SUBMIT_BUTTON, 'Instant Checkout Submit Button');
        await commonActions.safeVisibleClick(paymentPage_Locator.IC_SUBMIT_BUTTON, 'Instant Checkout Submit Button');
    }

    async clickOnInstantCheckoutTermsAndConditionsBox(paymentMethodName) {
        let checkBox = (paymentPage_Locator.CC_TERMS_AND_CONDITIONS_CHECKBOX).replace('%s', paymentMethodName);
        await commonActions.safeJavaScriptClick(checkBox, 'Terms and Conditions Check Box');
    }
    async UpdateAddressButton() {
        await commonActions.safeJavaScriptClick(paymentPage_Locator.UPDATE_ADDRESS, 'Update Address Button');
    }
    async clickOnTermsandconditionCheckBox() {
        await commonActions.safeJavaScriptClick(paymentPage_Locator.TERMS_AND_CONDITIONS_CHECKBOX, 'Terms and Conditions Check Box');
    }

    async selectPaymentTermsRadio() {
        await commonActions.scrollTo(paymentPage_Locator.REQUEST_PAYMENT_TERMS, 'Request Payment Terms');
        await commonActions.waitForClickable(paymentPage_Locator.REQUEST_PAYMENT_TERMS, 'Request Payment Terms');
        await commonActions.safeVisibleClick(paymentPage_Locator.REQUEST_PAYMENT_TERMS, 'Request Payment Terms');
    }

    async uncheckSameAsShippingAddressCheckBox() {
        await commonActions.waitForClickable(paymentPage_Locator.SAME_SHIP_CONTAINER, 'Same as Shipping Address Checkbox');
        await commonActions.waitForVisible(paymentPage_Locator.SAME_SHIP_CONTAINER, 'Same as Shipping Address Checkbox');
        await commonActions.safeJavaScriptClick(paymentPage_Locator.SAME_AS_SHIPPING_ADDRESS_CHECKBOX, 'Unchecking Same as Shipping Address CheckBox');

    }

    async enterBillingDetails(firstName, lastName, address, state, cityName, zipCode, phoneNumber) {
        await commonActions.waitForClickable(paymentPage_Locator.FIRST_NAME, 'First Name')
        await commonActions.setValue(paymentPage_Locator.FIRST_NAME, firstName, 'First Name');
        await commonActions.setValue(paymentPage_Locator.LAST_NAME, lastName, 'Last Name');
        await commonActions.setValue(paymentPage_Locator.ADDRESS, address, 'Address');
        await commonActions.setValue(paymentPage_Locator.CITY, cityName, 'City Name');
        //Verifying and Selecting Country from dropdown
        let countryLength = await (await commonActions.findElements((paymentPage_Locator.COUNTRY_DROPDOWN) + '/option[not (@disabled)]')).length;
        await commonActions.safeAsserts('equal', countryLength, 'Country List', 1);
        //Selecting Random State From Dropdown
        await commonActions.selectByValue(paymentPage_Locator.STATE_DROPDOWN, 'data-title', state);
        //Enter ZipCode
        await commonActions.setValue(paymentPage_Locator.ZIP_CODE, zipCode, 'Zip Code on Payment Page');
        //Enter Phone Number
        await commonActions.setValue(paymentPage_Locator.PHONE_NUMBER, phoneNumber, 'Phone Number');
        const updateAddressBtn = await $(paymentPage_Locator.UPDATE_ADDRESS);
        await updateAddressBtn.click();
    }

    async verifyShippingAddressBlock(date) {
        let shippingTitle = await commonActions.safeGetText(paymentPage_Locator.SHIPPING_ADDRESS_TITLE, 'Shipping Address Title On Payment Page');
        await commonActions.safeAsserts('contains', shippingTitle, 'Shipping Address Title', getLanguage.shippingAddress.shippingAddress);
        let shippingInformation = await commonActions.safeIsVisible(paymentPage_Locator.SHIPPING_INFO_BLOCK, 'Shipping Information');
        await commonActions.safeAsserts('true', shippingInformation, 'Shipping information');
        let editCTA = await commonActions.safeIsVisible(paymentPage_Locator.EDIT, 'Edit Cart CTA');
        await commonActions.safeAsserts('true', editCTA, 'Edit CTA');
    }

    async selectWorldPay() {
        await commonActions.waitForClickable(paymentPage_Locator.CREDIT_CARD_WORLDPAY, 'WorldPay');
        await commonActions.safeVisibleClick(paymentPage_Locator.CREDIT_CARD_WORLDPAY, 'WorldPay');
    }

    async enterWorldPayCardInfo(ccNumber, holderName, expMonth, expYear, cvv) {
        await commonActions.setValue(paymentPage_Locator.CC_NUM_WORLDPAY, ccNumber, 'credit card number');
        await commonActions.setValue(paymentPage_Locator.HOLDER_NAME_WORLDPAY, holderName, 'credit card number');
        await commonActions.selectByValue(paymentPage_Locator.EXP_MONTH_WORLDPAY, 'value', expMonth);
        await commonActions.selectByValue(paymentPage_Locator.EXP_YEAR_WORLDPAY, 'value', expYear);
        await commonActions.setValue(paymentPage_Locator.CVV_WORLDPAY, cvv, 'credit card number');
    }
}

module.exports = new PaymentCheckoutPage();
