class AddressBook_Locator {
	constructor() {
		this.BILLING_ADDRESS = '.customer-data.customer-data--address.default';
		this.SHIPPINGADDRESS = '(//div[@class="customer-data__content primary"])[2]/h3';
		this.SEARCH = '(//input[@class="input-text filter-input"])[1]';
		this.ADDRESS_RESULT = '(//div[@class="customer-data__content"])[1]';
		this.REQUESTADDRESSBUTTON = 'div.pagebuilder-button-primary span';
		this.ADD_NEW_SHIPPING_AND_BILLING_RADIO = 'div#new-account>.custom-radio .checkmark';
		this.BILLING_ADDRESS_VALIDATION = 'div.custom-radio + div#type-error';
		this.SHIPPING_ADDRESS = '//input[@id="type_shipping"]/following-sibling::span';
		this.FIRST_NAME = 'div.control input#firstname';
		this.FIRST_NAME_VALIDATION = 'div#firstname-error';
		this.LAST_NAME = 'div.control input#lastname';
		this.LAST_NAME_VALIDATION = 'div#lastname-error';
		this.PHONE_NUMBER = 'div.control input#telephone';
		this.PHONE_NUMBER_VALIDATION = 'div#telephone-error';
		this.COMPANY_NAME = 'div.control input#company-name';
		this.COMPANY_NAME_VALIDATION = 'div#company-name-error';
		this.ADDRESS_LINE1 = 'div.control input#address-line-1';
		this.ADDRESS_LINE1_VALIDATION = 'div#address-line-1-error';
		this.ADDRESS_LINE2 = 'div.control input#address-line-2';
		this.CITY = 'div.control input#city';
		this.CITY_VALIDATION = 'div#city-error';
		this.STATE = '//select[@id="region_id"][@class="validate-select region_id required-entry"]';
		this.STATE_VALIDATION = 'div#region_id-error';
		this.ZIP = 'div.control input#zip';
		this.ZIP_VALIDATION = 'div#zip-error';
		this.CANCEL = 'a.action.back.button.button--alt';
		this.SUBMIT = 'button.save';
		this.NEW_ADDRESS_MODEL = '.modal-popup.update-address-modal.update-account-modal.centered-modal._inner-scroll._show';
		this.NEW_ADDRESS_ACCOUNT_REQUEST_TITLE = '.modal-inner-wrap .update-address-modal';
		this.ACCOUNT_NUMBER_FIELD = 'div.control input#account-number';
		this.EXISTING_ACCOUNT_RADIO = 'div#existing-account span';
		this.SHIPPING_ADDRESS_RADIO = 'label[for="type_shipping"]>span';
		this.BILLING_ADDRESS_RADIO = 'div.custom-radio>label[for="type_billing"]';

	}
}

module.exports = new AddressBook_Locator();
