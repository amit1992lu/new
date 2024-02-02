class PaymentCheckoutPage_Locator {
    constructor(){
        this.BILLING_ADDRESS_HEADER = '.checkout-billing-address .step-title';
        this.PAYMENT_METHOD_HEADER = '.payment-group .step-title';
        this.PO_NUMBER_INPUT_FIELD ='//input[@id="po_number"]';
        this.TERMS_AND_CONDITIONS_BOX = '//label[contains(@for,"agreement_univar_account")]/../input';
        this.SUBMIT_ORDER_BUTTON = '.action.primary.checkout.button.button--primary'
        this.PAYMENT_PAGE_STATUS_BAR_ACTIVE = '//li[@class="opc-progress-bar-item _active"]';
        this.DISCLAIMER_MESSAGE = '//div[@class="cms-block-content"]//span[contains(text(),"Please note")]';
        this.ACTUAL_BILLING_ADDRESS = '//div[@class="billing-address-details"]';
        this.CREDIT_CARD_WORLDPAY = '.payment-method-title.field.choice [for="worldpay_cc"]';

        //shipping Address section
        this.SHIPPING_ADDRESS_TITLE = '.shipping-information .shipping-information-title';
        this.SHIPPING_INFO_BLOCK = 'div.shipping-information-content';
        this.SHIPPING_METHOD = 'span[data-bind*="Shipping Method"] + span[data-bind*="getShippingMethodTitle()"]';
        this.PREFERRED_DELIVERY_DATE = 'span[data-bind*="Preferred Delivery Date"]+span[data-bind*="getPreferredDate()"]';
        this.EDIT = 'button.action-edit>span';
        this.PDD_TEXT = 'span[data-bind*="Preferred Delivery Date"]';
        this.SHIPPING_METHOD_TEXT = 'span[data-bind*="Shipping Method"]';


        //Instant Checkout Locators
        this.CREDIT_CARD_RADIO = '//div[@class="payment-method payment-method-braintree"]/div/input';
        this.REQUEST_PAYMENT_TERMS = '//label[@for="request_terms"]/span[@class="checkmark"]';
        this.SAME_SHIP_CONTAINER = '.checkout-billing-address .custom-checkbox';
        this.SAME_AS_SHIPPING_ADDRESS_CHECKBOX = '//input[@name="billing-address-same-as-shipping"]';
        this.FIRST_NAME = '//div[@name="billingAddressshared.firstname"]//input[@name="firstname"]';
        this.LAST_NAME = '//div[@name="billingAddressshared.lastname"]//input[@name="lastname"]';
        this.ADDRESS = '//div[@name="billingAddressshared.street.0"]//input[@name="street[0]"]';
        this.CITY = '//div[@name="billingAddressshared.city"]//input[@name="city"]';
        this.ZIP_CODE = '//div[@name="billingAddressshared.postcode"]//input[@name="postcode"]';
        this.STATE_DROPDOWN = '[name="billingAddressshared.region_id"] .select';
        this.COUNTRY_DROPDOWN = '//div[@name="billingAddressshared.country_id"]//select[@name="country_id"]';
        this.CC_TERMS_AND_CONDITIONS_CHECKBOX ='//input[contains(@id,"agreement_%s")]';
        this.TERMS_AND_CONDITIONS_CHECKBOX ='input#agreement_braintree_2';
        this.PAYMENT_TERMS_AND_CONDITIONS_CHECKBOX = '//input[@id="agreement_request_terms_2"]';
        this.IC_SUBMIT_BUTTON = '.payment-method._active .action.primary.checkout';
        this.CREDIT_CARD_INPUT_FIELD ='//input[@id="credit-card-number"]';
        this.CREDIT_CARD_VALID_FIELD = '.number.valid';
        this.EXPIRATION_MONTH ='#expiration';
        this.EXPIRATION_VALID = '.expirationDate.valid';
        this.EXPIRATION_YEAR = '//input[@id="expiration-year"]';
        this.CARD_VERIFICATION_NUMBER = '//input[@id="cvv"]';
        this.CVV_VALID = '.cvv.valid';
        this.BILLING_ADDRESS_DETAILS_FORM = '//div[@class="billing-address-details"]';
        this.ACTIVE_PAYMENT_METHOD = '.payment-method._active label[for="%s"]';
        this.PHONE_NUMBER = '//div[@name="billingAddressshared.telephone"]//input[@name="telephone"]';
        this.UPDATE_ADDRESS = '.action.action-update.button.button--primary';
        this.PAYMENT_FRAME = '//iframe[@name="braintree-hosted-field-number"]';

        //Worldpay
        this.WORLDPAY_CONTAINER = '#worldpay_cc-form';
        this.CC_NUM_WORLDPAY = '.input-text.payment_cc_number';
        this.HOLDER_NAME_WORLDPAY = '.field.name.required .input-text';
        this.CVV_WORLDPAY = '.input-text.cvv';
        this.EXP_MONTH_WORLDPAY = '.select.select-month';
        this.EXP_YEAR_WORLDPAY = '.select.select-year';

    }
}
module.exports = new PaymentCheckoutPage_Locator()
