class SetUpAutoPay_Locators {
    constructor() {
        this.TERMS_AND_CONDITIONS = '//label[@for="terms_conditions"]';
        this.SET_UP_AUTO_PAY = '//button[@class="button button--primary button-continue"]';
        this.SET_UP_AUTOPAY_BUTTON = '//button[@class="action submit button button--primary"]/span';
        this.BANK_ADDRESS_VALIDATION_MSSG = '//div[@id="payment[worldpay_ach][address]-error"]';
        this.CITY_VALIDATION_MSSG = '//div[@id="payment[worldpay_ach][city]-error"]';
        this.STATE_VALIDATION_MSSG = '//div[@id="payment[worldpay_ach][state]-error"]';
        this.ZIP_VALIDATION_MSSG = '//div[@id="payment[worldpay_ach][zip]-error"]';
        this.BANK_ROUTING_NUMBER_VALIDATION_MSSG = '//div[@id="payment[worldpay_ach][routing_number]-error"]';
        this.ACCOUNT_NUMBER_VALIDATION_MSSG = '//div[@id="payment[worldpay_ach][account_number]-error"]';
        this.ACCOUNT_HOLDER_PHONE_VALIDATION_MSSG = '//div[@id="payment[worldpay_ach][account_holder_phone]-error"]';
        this.SETUPAUTOPAY_CHECKBOX_VALIDATION_MSSG = '//div[@id="payment[worldpay_ach][mandate_text]-error"]';
        this.TERMS_AND_CONDITIONS_CHECKBOX_VALIDATION_MSSG = '//div[@id="payment[worldpay_ach][terms_conditions]-error"]';
        this.BANK_ROUTING_NUMBER_FIELD = '//input[@id="payment[worldpay_ach][routing_number]"]';
        this.ACCOUNT_NUMBER_FIELD = '//input[@id="payment[worldpay_ach][account_number]"]';
        this.ACCOUNT_HOLDER_PHONE_FIELD = '//input[@id="payment[worldpay_ach][account_holder_phone]"]';
        this.BANK_ADDRESS_FIELD = '//input[@id="payment[worldpay_ach][address]"]';
        this.CITY_FIELD = '//input[@id="payment[worldpay_ach][city]"]';
        this.STATE_FIELD = '//select[@id="payment[worldpay_ach][state]"]';
        this.ZIP_FIELD = '//input[@id="payment[worldpay_ach][zip]"]';
        this.SETUPAUTOPAY_CHECKBOX_FIELD = '//label[@for="payment[worldpay_ach][mandate_text]"]';
        this.TERMS_AND_CONDITIONS_CHECKBOX = '//label[@for="payment[worldpay_ach][terms_conditions]"]';
        this.SUCCESS_MESSAGE_AUTOPAY = 'div.invoice-success__content p';
        this.CANCEL_AUTOPAY = '//span[@class="button button--link cancel-autopay"]';
        this.YES_CANCEL_BUTTON = 'aside.modal-popup.cancel-modal.modal-slide._show footer button.button.button--primary span';
        this.AUTOPAY_CANCEL_MESSAGE = 'div#canceled-autopay-modal p';
        this.AUTOMATIC_PAYMENT = 'div#settings div.autopay-manage__title';
        this.AUTOMATIC_PAYMENT_STATUS = '//div[@class="autopay-manage__title"]/span';
        this.AUTOPAY_SCHEDULE_STATUS = 'div#schedule div.autopay-manage__title p';
        this.AUTOPAY_SCHEDULE_AFTER_CREATION = '//label[@for="after-creation"]';
        this.AUTOPAY_SCHEDULE_BEFORE_DUE_DATE = '//label[@for="after-due"]';
        this.INPUT_EMAIL_NOTIFICATIONS = '//span[@class="tagify__input"]';
        this.CLOSE_ICON = '//*[@title="%s"]/x';
        this.INPUT_EMAIL_PRESENT = '(//span[@class="tagify__tag-text"])[2]';
        this.PAYMENT_METHOD = 'div#payment div.autopay-manage__title';
        this.AUTOPAY_SCHEDULE = 'div#schedule div.autopay-manage__title';
        this.AUTOPAY_NOTIFICATIONS = 'div#notifications div.autopay-manage__title';
        this.SUCCESS_MESSAGE_MANAGE_AUTOPAY = '//div[@class="ajs-message ajs-success ajs-visible"]';
        this.AUTO_PAYMENT_PAUSE = '//label[@for="autopay-disabled"]';
        this.AUTO_PAYMENT_TURN_ON = '//label[@for="autopay-enabled"]';
        this.AUTO_PAYMENT_SAVE_BUTTON = 'form#autopay_status-form div.form-actions button.button.button--primary';
        this.AUTOPAY_SCHEDULE_SAVE_BUTTON = 'form#schedule-form button.button.button--primary';
        this.AUTOPAY_NOTIFICATIONS_SAVE_BUTTON = 'form#notifications-form button.button.button--primary';
        this.CHANGE_PAYMENT_BUTTON = '//button[@class="change-payment-cta button button--primary"]';
        this.GO_TO_PERSONAL_HOMEPAGE_BUTTON = '.invoice-success__cta a.button.button--cta';
        this.UNIVAR_LOGO = 'a.logo.centered img';
        this.GO_TO_ACCOUNT = 'aside.modal-popup.canceled-modal.modal-slide._show footer button.button.button--primary';
    }
}

module.exports = new SetUpAutoPay_Locators();
