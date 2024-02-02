class shippingCheckoutPage_Locator {
    constructor() {
        this.SHIPPING_ADDRESS_TITLE = '.checkout-shipping-address .step-title';
        this.ORDER_SUMMARY_TITLE = '.opc-block-summary .title';
        this.SHIPPING_METHOD_TITLE = '.checkout-shipping-method .step-title';
        this.SHIPPING_METHOD_DEFAULT = '//label[@for="standard_shipping"]/input[@checked="true"]/../span[@class="checkmark"]';
        this.CHECKOUT_BREADCRUMB = '.checkout-success';
        this.NEXT_PAYMENT_BUTTON = '.button.button--primary.action.continue';
        this.PAYMENT_METHOD_RADIO  ='//label[@for="univar_account"]/span[@class="checkmark"]';
        this.DATE_PICKER = 'input.input-text._has-datepicker';
        this.SHIPPING_PAGE_STATUS_BAR_ACTIVE = '//li[@class="opc-progress-bar-item _active"]';
        this.ACTUAL_SHIPPING_ADDRESS = '//div[@class="shipping-address-item selected-item"]';
        this.BACK_TO_CART_ON_HEADER = '.back-to-cart-action';
        this.UNIVAR_SOLUTIONS_LOGO_ON_HEADER = '//img[contains(@src,"logo-univar-black.svg")]';
        this.ANOTHER_SHIPPING_ADDRESS = '.shipping-address-item.selected-item .change-address';
        this.ESTIMATED_COST = '.totals.estimated-taxes-wrapper .amount';
        this.SHIPPING_PO_NUMBER = '.field.margin-b-md._required [name="po-number"]';
        //One Time Shipping Address Forum
        this.ONE_TIME_SHIP_ADDRESS = '.one-time-address-link';
        this.ONE_TIME_SHIPPING_ADDRESS_FORUM = '#opc-new-shipping-address';
        this.ONE_TIME_SHIPPING_SUBMIT = '.action.primary.action-save-address';
        this.ONE_SHIP_FIRST_NAME = '#opc-new-shipping-address [name="firstname"]';
        this.ONE_SHIP_LAST_NAME = '#opc-new-shipping-address [name="lastname"]';
        this.ONE_SHIP_ADDRESS = '#opc-new-shipping-address [name="street[0]"]';
        this.ONE_SHIP_CITY = '#opc-new-shipping-address [name="city"]';
        this.ONE_SHIP_ZIP = '#opc-new-shipping-address [name="postcode"]';
        this.ONE_PHONE = '#opc-new-shipping-address [name="telephone"]';
        this.ONE_SHIP_FIRST_NAME_ERROR = '[name="shippingAddress.firstname"] .field-error';
        this.ONE_SHIP_LAST_NAME_ERROR = '[name="shippingAddress.lastname"] .field-error';
        this.ONE_SHIP_ADDRESS_ERROR = '[name="shippingAddress.street.0"] .field-error';
        this.ONE_SHIP_CITY_ERROR = '[name="shippingAddress.city"] .field-error';
        this.ONE_SHIP_ZIPCODE_ERROR = '[name="shippingAddress.postcode"] .field-error';
        //One Time Ship Smarty Streets Validations
        this.SMARTY_STREET_VALIDATION_MODEL = '.smarty-suggestion-wrapper';
        this.ADDRESS_ENTERED_RADIO = '[for="smarty-address-entered"] .checkmark';
        this.ADDRESS_ENTERED_SUBMIT_BTN = '#smarty-address-button-entered';
        this.CONTINUE_WITH_ADDRESS = '.button.button--primary.smarty-address-button';
        //Instant checkout Locators
        this.FIRST_NAME = '//span[text()="First Name"]/../../../div[contains(@name,"shippingAddress")]//input[@name="firstname"]';
        this.LAST_NAME = '//span[text()="Last Name"]/../../../div[contains(@name,"shippingAddress")]//input[@name="lastname"]';
        this.COMPANY_NAME = '//span[text()="Company Name"]/../../../div[contains(@name,"shippingAddress")]//input[@name="company"]';
        this.ADDRESS_FIELD = '//div[@name="shippingAddress.street.0"]/div/input[@name="street[0]"]';
        this.CITY_FIELD = '//div[@name="shippingAddress.city"]/div/input[@name="city"]';
        this.STATE_DROPDOWN = '//div[@name="shippingAddress.region_id"]/div/select[@name="region_id"]';
        this.ZIP_CODE = '//div[@name="shippingAddress.postcode"]/div/input[@name="postcode"]';
        this.DELIVERY_INFORMATION_TITLE = '//div[contains(text(),"Delivery Information")]';
        this.DELIVERY_INFORMATION_CONTAINER = '.field.custom-checkbox-set._required';
        this.LIFT_GATE_RADIO_NO = 'div.custom-radio input[value="0"].admin__control-radio+span.checkmark';
        this.LIFT_GATE_RADIO_YES = 'div.custom-radio input[value="1"].admin__control-radio+span.checkmark';
        this.LIFT_GATE_CHECKBOX = '[name="lift_gate"]';
        this.ADDRESS_TYPE = '//span[contains(text(),"Address Type")]/../..//span[contains(text(),"%s")]/following-sibling::input';
        this.COUNTRY_DROPDOWN = '//*[@name="shippingAddress.country_id"]//select';
        this.PHONE_NUMBER = '//div[@name="shippingAddress.telephone"]/div/input[@name="telephone"]';
        this.PRODUCT_USAGE_TEXT = '//div[@class="product_usage_disclaimer"]/div/p';
        this.PRODUCT_USAGE_CHECKBOX = '//input[@type="checkbox"][@name="product_usage_disclaimer_checkbox"]';
        this.VERIFY_SHIPPING_ADDRESS_MODEL = '#smarty-street-modal';
        this.USER_THIS_ADDRESS_BTN = '.modal-popup.smarty-modal.modal-slide._inner-scroll._show .button.button--primary.smarty-address-button';
        this.LOADING_MASK = '.loading-mask';
        //PO Document
        this.UPLOAD_PO_DOC = '.file-uploader.file-uploader-checkout .button-link';
        this.UPLOAD_PO_TOOLTIP = '.field-control._with-tooltip .field-tooltip-action.action-help';
        this.UPLOAD_PO_CONTENT = '.field-control._with-tooltip .field-tooltip-content';
        //Delivery Schedule
        this.DELIVERY_SCHEDULE_CONTAINER = '.field.checkbox.multiple-deliveries';
        this.MULTIPLE_DELIVERY_NO = '.field.checkbox.multiple-deliveries [name="ko_unique_1"]';
        this.MULTIPLE_DELIVERY_YES = '.field.checkbox.multiple-deliveries [name="ko_unique_2"]';
        this.MULTIPLE_DELIVERY_CONTAINER = '.delivery-component__wrapper';
        this.MULTIPLE_DELIVERY_FORM = '.delivery-component__form';
        this.MULTIPLE_PRODUCT_QTY = '.field._required.quantity-field .input-text';
        this.MULTIPLE_PO_NUMBER = '[id*="order_number-"]';
        this.MULTIPLE_DELIVERY_DATE = '.field._required.margin-b-md.field-sm-width.delivery-date .input-text._has-datepicker';
        this.SELECT_ANOTHER_DELIVERY = 'button[data-bind*="scheduleAnotherDelivery"]';
        this.MULTIPLE_DUPLICATE_MODEL = '[class^="modal-popup"][class*="_show"]';
        this.DUPLICATE_CORRECT_BTN = '[class^="modal-popup"][class*="_show"] .action-primary';
        this.DUPLICATE_FIX_THIS_BTN = '[class^="modal-popup"][class*="_show"] .action-secondary';
    }
}
module.exports = new shippingCheckoutPage_Locator();
