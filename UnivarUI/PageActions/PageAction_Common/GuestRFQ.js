let safeAction = require('../../../Utilities/CommonActions');

class GuestRFQ {
	get GUEST_RFQ_EMAIL() {
		return $('#request-for-quote-content #email')
	}

	get RFQ_PRODUCT_CONTINUE_BTN() {
		return $('#product-needs-form .action-primary')
	}

	get RFQ_EMAIL_CONTINUE_BTN() {
		return $('.action-primary.single-button');
	}

	get RFQ_LOGIN() {
		return $('.buttons-wrapper button[type="submit"]');
	}

	get RFQ_CONTACT_CONTINUE_BTN() {
		return $('#account-form .action-primary');
	}

	get RFQ_ADDRESS_CONTINUE_BTN() {
		return $('#shipping-form .action-primary');
	}

	get GUEST_CONTINUE_AS_GUEST() {
		return $('.action-secondary')
	}

	get GUEST_FIRST_NAME() {
		return $('#account-form #firstname')
	}

	get GUEST_LAST_NAME() {
		return $('#account-form #lastname')
	}

	get GUEST_PHONE() {
		return $('#account-form #phone')
	}

	get GUEST_JOB_TITLE() {
		return $('#account-form #title')
	}

	get GUEST_COMPANY_NAME() {
		return $('#account-form #company')
	}

	get GUEST_CONTACT_COUNTRY() {
		return $('#account-form #rfq-country')
	}

	get GUEST_MARKET_YOU_SERVE() {
		return $('#account-form #rfq-market')
	}

	get PREVIOUS_PURCHASE_NO() {
		return $('.input.radio-input [value="no"]')
	}

	get PREVIOUS_PURCHASE_YES() {
		return $('.input.radio-input [value="yes"]')
	}

	get GUEST_BACK() {
		return $('.button-link')
	}

	get GUEST_SHIPPING() {
		return $('#shipping-street')
	}

	get GUEST_APT() {
		return $('#shipping-apt')
	}

	get GUEST_ZIPCODE() {
		return $('#shipping-zipcode')
	}

	get GUEST_CITY() {
		return $('#shipping-city')
	}

	get GUEST_STATE() {
		return $('#shipping-state')
	}

	get GUEST_SHIPPING_COUNTRY() {
		return $('#shipping-country')
	}

	get IS_COMMERCIAL_ADDRESS() {
		return $('#shipping-as-commercial-cbox')
	}

	get SAME_BILLING_ADDRESS_CHECKBOX() {
		return $('#billing-as-shipping-cbox')
	}

	get GUEST_ANTICIPATED_VOLUME() {
		return $('#volume-first-order')
	}

	get ANNUAL_VOLUME() {
		return $('#annual-volume')
	}

	get PRODUCE_USE() {
		return $('#product-end-use')
	}

	get ORDER_DATE() {
		return $('#order-date')
	}

	get PRIVACY_POLICY() {
		return $('#privacy-policy')
	}

	get RESEND_CODE_LINK() {
		return $('#post-submit-code-form .button-link')
	}

	get ACCESS_CODE_INPUT() {
		return $('#post-submit-code-form #private_code')
	}

	get PASSWORD() {
		return $('#password')
	}

	get REQUEST_RECEIVE() {
		return $('.request-review-content')
	}

	get SET_PASSWORD_BTN() {
		return $('.set-my-password button')
	}

	get CLOSE_RFQ_MODAL() {
		return $('div#request-for-quote-content>button')
	}

	get PRODUCT_DETAIL() {
		return $('.rfq__sidebar [class="step-sidebar-item"]');
	}

	get SHIPPING_ADDRESS() {
		return $('#anticipated_shipping_address');
	}

	get LIST_OF_SHIP_TO() {
		return $$('.custom-dropdown-wrapper li');
	}
	get ADD_NEW_ADDRESS() {
		return $('.button-link');
	}
    get RFQ_LOGIN_CODE_RADIO_BTN() {
		return $('.login-step input[value="code-opt"]');
	}
	get RFQ_LOGIN_PASSWORD_RADIO_BTN() {
		return $('.login-step input[value="password-opt"]');
	}
	async fillRequiredContactInfo(email, firstName, lastName, companyName, country, market, continueAsGuest) {
		await this.RFQ_EMAIL_CONTINUE_BTN.waitForClickable();
		await this.GUEST_RFQ_EMAIL.waitForDisplayed();
		await this.GUEST_RFQ_EMAIL.setValue(email);
		await this.RFQ_EMAIL_CONTINUE_BTN.click();
		if (continueAsGuest) {
			await this.GUEST_CONTINUE_AS_GUEST.click();
			await this.GUEST_CONTINUE_AS_GUEST.click();
		}
		await this.GUEST_FIRST_NAME.waitForDisplayed();
		await this.GUEST_FIRST_NAME.setValue(firstName);
		await this.GUEST_LAST_NAME.setValue(lastName);
		await this.GUEST_COMPANY_NAME.setValue(companyName);
		await this.GUEST_CONTACT_COUNTRY.selectByAttribute('value', country);
		await this.GUEST_MARKET_YOU_SERVE.selectByIndex(market);
		await this.PREVIOUS_PURCHASE_YES.click();
		await this.RFQ_CONTACT_CONTINUE_BTN.click();
	}

	async loginAsRegisteredUser(email, password) {
		await this.RFQ_EMAIL_CONTINUE_BTN.waitForClickable();
		await this.GUEST_RFQ_EMAIL.waitForDisplayed();
		await this.GUEST_RFQ_EMAIL.setValue(email);
		await this.RFQ_EMAIL_CONTINUE_BTN.click();
		await this.RFQ_LOGIN_PASSWORD_RADIO_BTN.waitForDisplayed();
		await this.RFQ_LOGIN_PASSWORD_RADIO_BTN.click();
		await this.PASSWORD.setValue(password);
		await this.RFQ_LOGIN.click();
	}

	async fillRequiredShippingInfo(address, zipCode, city, state, country) {
		await this.RFQ_ADDRESS_CONTINUE_BTN.waitForClickable();
		await this.GUEST_SHIPPING.setValue(address);
		await this.GUEST_ZIPCODE.setValue(zipCode);
		await this.GUEST_CITY.setValue(city);
		await this.GUEST_STATE.selectByAttribute('value', state);
		await this.GUEST_SHIPPING_COUNTRY.selectByAttribute('value', country);
		if(await this.IS_COMMERCIAL_ADDRESS.isDisplayed()) {
			await this.IS_COMMERCIAL_ADDRESS.click();
		}
		await this.RFQ_ADDRESS_CONTINUE_BTN.click();
	}

	async fillRequiredProductNeeds(date, firstVolume, annualVolume, productUse) {
		await this.RFQ_PRODUCT_CONTINUE_BTN.waitForClickable();
		await this.ORDER_DATE.setValue(date);
		await this.GUEST_ANTICIPATED_VOLUME.setValue(firstVolume);
		await this.ANNUAL_VOLUME.setValue(annualVolume);
		await this.PRODUCE_USE.setValue(productUse);
		if(await this.PRIVACY_POLICY.isDisplayed()) {
			await this.PRIVACY_POLICY.click();
		}
		await this.RFQ_PRODUCT_CONTINUE_BTN.click();
		await this.RFQ_PRODUCT_CONTINUE_BTN.waitForDisplayed({reverse:true});
	}

	async confirmRequestReceive(isGuest) {
		await this.REQUEST_RECEIVE.waitForDisplayed();
		if (isGuest) {
			await this.SET_PASSWORD_BTN.waitForDisplayed();
			await this.SET_PASSWORD_BTN.waitForClickable();
		}
	}

	async verifyRequestQuoteModal() {
		await this.GUEST_RFQ_EMAIL.waitForDisplayed();
		await this.RFQ_EMAIL_CONTINUE_BTN.waitForDisplayed();
		await this.PRODUCT_DETAIL.waitForDisplayed();
	}

	async closeRFQModal() {
		await this.CLOSE_RFQ_MODAL.waitForClickable()
		await this.CLOSE_RFQ_MODAL.click()
	}

	async selectShippingAddress(index) {
		await this.SHIPPING_ADDRESS.waitForClickable();
		await this.SHIPPING_ADDRESS.click();
		await this.LIST_OF_SHIP_TO[index].click();
	}

	async selectAddNewAddress(address, zipCode, city, state, country) {
		await this.SHIPPING_ADDRESS.waitForClickable();
		await this.SHIPPING_ADDRESS.click();
		await this.ADD_NEW_ADDRESS.waitForClickable();
		await this.ADD_NEW_ADDRESS.click();
		await this.GUEST_SHIPPING.setValue(address);
		await this.GUEST_ZIPCODE.setValue(zipCode);
		await this.GUEST_CITY.setValue(city);
		await this.GUEST_STATE.selectByAttribute('value', state);
		await this.GUEST_SHIPPING_COUNTRY.selectByAttribute('value', country);
		
	}
}

module.exports = new GuestRFQ();
