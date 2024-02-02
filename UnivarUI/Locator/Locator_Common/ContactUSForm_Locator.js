class ContactUSForm_Locator{
    constructor() {
        this.CONTACT_US_FORM = '//aside[contains(@class,"contact-modal-popup")]/div[@class="modal-inner-wrap"]';
        this.CONTACT_US_FORM_HEADER_TEXT= '[class*="_show"] .modal-title';
        this.FIRST_NAME = '//input[@id="cu_first_name"]';
        this.LAST_NAME = 'input#cu_last_name';
        this.EMAIL = 'input#cu_email';
        this.PHONE_NUMBER = '//input[@name="phone"][@id="cu_phone"]';
        this.COMPANY_NAME = '//input[@id="cu_company"]';
        this.JOB_TITLE = 'input#cu_title';
        this.COUNTRY_NAME = '//label[@for="cu_title"]/../../div/select[@id="country"]';
        this.MARKET = '//select[@id="cu_market"]';
        this.NO_RADIO = '//label[@for="cu_no"]/span[@class="checkmark"]';
        this.TERMS_OF_USE_CHECKBOX = '//div[@class="custom-checkbox"]/label[@for="contact-terms-of-use"]';
        this.PRIVACY_POLICY_CHECKBOX = '//div[@class="custom-checkbox"]/label[@for="contact-privacy"]';
        this.TERMS_AND_CONDITIONS_BOX= '.modal-popup.contact-modal-popup.centered-modal.quote-request-modal-popup._show .custom-checkbox'
        this.SUBMIT_BUTTON= '.modal-popup.contact-modal-popup.centered-modal.quote-request-modal-popup._show .button.button--primary';
        this.REQUEST_FORM = '.modal-popup.contact-modal-popup.centered-modal.quote-request-modal-popup._show .request-form';
        this.MODAL_HEADER = '.modal-popup.contact-modal-popup.centered-modal.quote-request-modal-popup._show .modal-title';
        this.CLOSE_MODEL_BTN = '.modal-popup.contact-modal-popup.centered-modal.quote-request-modal-popup._show .action-close';
    }
}
module.exports = new ContactUSForm_Locator();
