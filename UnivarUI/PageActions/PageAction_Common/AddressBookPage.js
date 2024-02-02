'use strict';
let commonActions = require('../../../Utilities/CommonActions.js');
let AddressBook_Locator = require('../../Locator/Locator_Common/AddressBook_Locator.js');

class AddressBookPage {
	async VerifyDefaultAddresses() {
		await commonActions.safeAsserts(true, commonActions.safeIsVisible(AddressBook_Locator.BILLING_ADDRESS, 'Billing Address'), 'Assertion on Billing Address');
		await commonActions.safeAsserts(true, commonActions.safeIsVisible(AddressBook_Locator.SHIPPINGADDRESS, 'Shipping Address'), 'Assertion on Shipping Address');
	}

	async VerifySearchFeature() {
		await commonActions.scrollTo(AddressBook_Locator.SEARCH, 'Search box');
		await commonActions.safeAsserts(true, commonActions.safeIsVisible(AddressBook_Locator.SHIPPINGADDRESS, 'Shipping Address'), 'Assertion for Shipping Address');
	}

	async VerifyNewAddress_OrAccountAddressFields() {
		await commonActions.waitForVisible(AddressBook_Locator.REQUESTADDRESSBUTTON, 'Shipping Address radio button');
		await commonActions.waitForClickable(AddressBook_Locator.REQUESTADDRESSBUTTON, 'Request Address Button');
		await commonActions.safeVisibleClick(AddressBook_Locator.REQUESTADDRESSBUTTON, 'Request Address Button');
		await commonActions.waitForVisible(AddressBook_Locator.NEW_ADDRESS_MODEL, 'New Shipping Address Model');
		await commonActions.waitForVisible(AddressBook_Locator.ADD_NEW_SHIPPING_AND_BILLING_RADIO, 'Shipping Request Address button');
		await commonActions.waitForClickable(AddressBook_Locator.ADD_NEW_SHIPPING_AND_BILLING_RADIO, 'Shipping Address radio button');
		await commonActions.safeVisibleClick(AddressBook_Locator.ADD_NEW_SHIPPING_AND_BILLING_RADIO, 'Shipping Address radio button');
		let billingAddress = await commonActions.safeIsVisible(AddressBook_Locator.BILLING_ADDRESS, 'Billing Address Radio Button');
		await commonActions.safeAsserts('true', billingAddress, 'Billing Address');
		await commonActions.safeAsserts('true', await commonActions.safeIsVisible(AddressBook_Locator.SHIPPING_ADDRESS, 'Shipping Address Radio Button'), 'Assertion on the Shipping Address radio button');
		await commonActions.safeAsserts('true', await commonActions.safeIsVisible(AddressBook_Locator.FIRST_NAME, 'First Name Field'), 'Assertion on the First Name Field');
		await commonActions.safeAsserts('true', await commonActions.safeIsVisible(AddressBook_Locator.LAST_NAME, 'Last Name Field'), 'Assertion on the Last Name Field');
		await commonActions.safeAsserts('true', await commonActions.safeIsVisible(AddressBook_Locator.PHONE_NUMBER, 'Phone Number Field'), 'Assertion on the Phone Number Field ');
		await commonActions.safeAsserts('true', await commonActions.safeIsVisible(AddressBook_Locator.COMPANY_NAME, 'Company name Field'), 'Assertion on the Comapny name Field');
		await commonActions.safeAsserts('true', await commonActions.safeIsVisible(AddressBook_Locator.ADDRESS_LINE1, 'Address Line 1 Field'), 'Assertion on the Address Line 1 Field');
		await commonActions.safeAsserts('true', await commonActions.safeIsVisible(AddressBook_Locator.ADDRESS_LINE2, 'Address Line 2 Field'), 'Assertion on the Address Line 2 Field');
		await commonActions.safeAsserts('true', await commonActions.safeIsVisible(AddressBook_Locator.CITY, 'City Field'), 'Assertion on the City Field');
		if (process.env.REGION === 'US' || process.env.REGION === 'CA_EN' || process.env.REGION === 'CA_FR') {
			await commonActions.safeAsserts('true', await commonActions.safeIsVisible(AddressBook_Locator.STATE, 'State Field'), 'Assertion on the State Field');
		} else {
			await commonActions.elementIsNotDisplayed(AddressBook_Locator.STATE);
		}
		await commonActions.safeAsserts('true', await commonActions.safeIsVisible(AddressBook_Locator.ZIP, 'Zip Field'), 'Assertion on the Zip Field');
		await commonActions.safeAsserts('true', await commonActions.safeIsVisible(AddressBook_Locator.SUBMIT, 'Submit Field'), 'Assertion on the Submit Field');
		await commonActions.safeAsserts('true', await commonActions.safeIsVisible(AddressBook_Locator.CANCEL, 'Cancel Field'), 'Assertion on the Cancel Field');
	}

	async Verify_MandatoryFields_AddressbookPage() {
		await commonActions.waitForVisible(AddressBook_Locator.SUBMIT, 'Submit Button');
		await commonActions.safeVisibleClick(AddressBook_Locator.SUBMIT, 'Submit Button');
		await commonActions.safeAsserts('true', await commonActions.safeIsVisible(AddressBook_Locator.BILLING_ADDRESS_VALIDATION, 'Billing Address Radio Button validation message'), 'Assertion on the Billing Address radio button validation message');
		await commonActions.safeAsserts('true', await commonActions.safeIsVisible(AddressBook_Locator.FIRST_NAME_VALIDATION, 'First Name Field validation message'), 'Assertion on First Name Field validation message');
		await commonActions.safeAsserts('true', await commonActions.safeIsVisible(AddressBook_Locator.LAST_NAME_VALIDATION, 'Last Name Field validation message'), 'Assertion on the Last Name Field validation message');
		await commonActions.safeAsserts('true', await commonActions.safeIsVisible(AddressBook_Locator.PHONE_NUMBER_VALIDATION, 'Phone Number Field validation message'), 'Assertion on the Phone Number Field validation message');
		await commonActions.safeAsserts('true', await commonActions.safeIsVisible(AddressBook_Locator.COMPANY_NAME_VALIDATION, 'Company name Field validation message'), 'Assertion on the Comapany name Field Validation message');
		await commonActions.safeAsserts('true', await commonActions.safeIsVisible(AddressBook_Locator.ADDRESS_LINE1_VALIDATION, 'Address Line 1 Field validation message'), 'Assertion on the Address Line 1 Field validation message');
		await commonActions.safeAsserts('true', await commonActions.safeIsVisible(AddressBook_Locator.CITY_VALIDATION, 'City Field validation message'), 'Assertion on the city Field validation message');
		if (process.env.REGION === 'US' || process.env.REGION === 'CA_EN' || process.env.REGION === 'CA_FR') {
			await commonActions.safeAsserts('true', await commonActions.safeIsVisible(AddressBook_Locator.STATE_VALIDATION, 'State Field validation message'), 'Assertion on the State Field vaalidation message');
		} else {
			await commonActions.elementIsNotDisplayed(AddressBook_Locator.STATE_VALIDATION);
		}
		await commonActions.safeAsserts('true', await commonActions.safeIsVisible(AddressBook_Locator.ZIP_VALIDATION, 'Zip Field validation message'), 'Assertion on the Zip Field validdation message');
	}

	async enterAccountNumber(accNo) {
		await commonActions.setValue(AddressBook_Locator.ACCOUNT_NUMBER_FIELD, accNo, 'Account Number');
	}

	async clickOnRequestAddressAccountButton() {
		await commonActions.waitForClickable(AddressBook_Locator.REQUESTADDRESSBUTTON, 'Request Address Button');
		await commonActions.safeClick(AddressBook_Locator.REQUESTADDRESSBUTTON, 'Request Address Button');
		await commonActions.waitForVisible(AddressBook_Locator.NEW_ADDRESS_ACCOUNT_REQUEST_TITLE, 'New Address or Account Request');
	}

	async clickOnSubmitButton() {
		await commonActions.safeVisibleClick(AddressBook_Locator.SUBMIT, 'Submit Button');
	}

	async clickOnExistingAccountRadio() {
		await commonActions.waitForClickable(AddressBook_Locator.EXISTING_ACCOUNT_RADIO, 'Existing Account Radio');
		await commonActions.safeVisibleClick(AddressBook_Locator.EXISTING_ACCOUNT_RADIO, 'Existing Account Radio');
	}

	async clickOnShippingAddressRadio() {
		await commonActions.waitForClickable(AddressBook_Locator.SHIPPING_ADDRESS_RADIO, 'Shipping Address Radio');
		await commonActions.safeClick(AddressBook_Locator.SHIPPING_ADDRESS_RADIO, 'Shipping Address Radio');
	}

	async clickOnBillingAddressRadio() {
		await commonActions.waitForClickable(AddressBook_Locator.BILLING_ADDRESS_RADIO, 'Billing Address Radio');
		await commonActions.safeClick(AddressBook_Locator.BILLING_ADDRESS_RADIO, 'Billing Address Radio');
	}

	async enterAddressDetails(firstName, lastName, phoneNo, companyName, address1, city, zip) {
		await commonActions.setValue(AddressBook_Locator.FIRST_NAME, firstName, 'First Name');
		await commonActions.setValue(AddressBook_Locator.LAST_NAME, lastName, 'Last Name');
		await commonActions.setValue(AddressBook_Locator.PHONE_NUMBER, phoneNo, 'Phone Number');
		await commonActions.setValue(AddressBook_Locator.COMPANY_NAME, companyName, 'Company Name');
		await commonActions.setValue(AddressBook_Locator.ADDRESS_LINE1, address1, 'Address Line 1');
		await commonActions.setValue(AddressBook_Locator.CITY, city, 'City');
		await commonActions.setValue(AddressBook_Locator.ZIP, zip, 'Zip');
		if (await commonActions.safeIsVisible(AddressBook_Locator.STATE, 'State')) {
			await commonActions.selectByIndex(AddressBook_Locator.STATE, 1, 'State');
		}
	}

	async clickOnShippingAndBillingRadio() {
		await commonActions.waitForClickable(AddressBook_Locator.ADD_NEW_SHIPPING_AND_BILLING_RADIO, 'Add a new shipping or billing address to my account');
		await commonActions.safeClick(AddressBook_Locator.ADD_NEW_SHIPPING_AND_BILLING_RADIO, 'Add a new shipping or billing address to my account');
	}

}

module.exports = new AddressBookPage();
