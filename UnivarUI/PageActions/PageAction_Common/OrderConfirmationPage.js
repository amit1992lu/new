let commonActions = require('../../../Utilities/CommonActions.js');
let orderConfPage_Locator = require('../../Locator/Locator_Common/OrderConfirmationPage_Locator.js');
let shippingPage_Loc = require('../../Locator/Locator_Common/ShippingCheckoutPage_Locator.js');
let getLanguageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile');
let getLanguage = getLanguageFile.getLanguageFile();

class OrderConfirmationPage {
    async verifyOrderConfirmationPage() {
        await commonActions.waitForVisible(shippingPage_Loc.CHECKOUT_BREADCRUMB, 'Checkout Breadcrumb on Success Page');
        return this.getOrderNumber();
    }

    async verifyBillingAddress() {
        await commonActions.waitForVisible(orderConfPage_Locator.BILLING_ADDRESS_TEXT, 'Billing Address on Order Conf Page')
    }

    async verifyPaymentMethod() {
        await commonActions.waitForVisible(orderConfPage_Locator.PAYMENT_METHOD, 'Payment Method');
    }

    async verifyCreditCardNumber(ccNumber_) {
        let lastFourCC = ccNumber_.substring(ccNumber_.length - 4)
        let ccNumber = await commonActions.safeGetText(orderConfPage_Locator.CREDIT_CARD_NUMBER,  'Credit Card Number on Order Conf Page');
        await commonActions.safeAsserts('contains', ccNumber, 'CC Number on success page', lastFourCC);
    }

    async verifyExpirationDate(expDate_, expYear_) {
        let newExpDate = `${expDate_}/${expYear_}`
        let expDate = await commonActions.safeGetText(orderConfPage_Locator.CC_EXPIRATION_DATE,  'CC Expiration Date on Success Page');
        await commonActions.safeAsserts('equal', expDate, 'CC Expiration date on success page', newExpDate);
    }

    async verifyLiftGateValue() {
        let liftGate = await commonActions.safeGetText(orderConfPage_Locator.LIFT_GATE_VALUE,  'Is a lift gate required for delivery?');
        await commonActions.safeAsserts('equal', liftGate, 'Lift Gate Value On Success Page', getLanguage.checkoutPage.liftGate);
    }

    async getOrderNumber() {
        let orderConfNumber = await commonActions.safeGetText(orderConfPage_Locator.ORDER_NUMBER,  'Order Confirmation Number');
        return orderConfNumber;
    }

    async verifyShippingAddress() {
        await commonActions.waitForVisible(orderConfPage_Locator.SHIPPING_ADDRESS_TEXT, 'Shipping Address');
    }

    async verifyOrderSummary(productName_, qty_, price_) {
        let productName = await commonActions.safeGetText(orderConfPage_Locator.PRODUCT_NAME,  'Product Name');
        await commonActions.safeAsserts('equal', productName, 'Product Name', productName_);
        let qty = await commonActions.safeGetText(orderConfPage_Locator.QUANTITY,  'Product Quantity');
        await commonActions.safeAsserts('contains', qty, 'Product Quantity', qty_);
        let price = await commonActions.safeGetText(orderConfPage_Locator.PRICE,  'Product Price');
        await commonActions.safeAsserts('contains', price_, 'Product Price', price);
    }


}

module.exports = new OrderConfirmationPage();
