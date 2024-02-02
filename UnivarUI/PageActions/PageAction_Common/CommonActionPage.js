let commonActions = require('../../../Utilities/CommonActions.js');
let invoices_loc = require('../../Locator/Locator_Common/InvoicesPage_Locator.js');
const orderDetails_Loc = require('../../Locator/Locator_Common/OrderDetails_Locator');
let languageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile.js').getLanguageFile();
let commonLoc = require('../../Locator/Locator_Common/Common_Locators.js');

class CommonActionPage {

	async verifyPaymentReminderOptInModal() {
		await commonActions.waitForVisible(commonLoc.PAYMENT_EMAIL_REMINDER_MODAL, 'Payment Email Reminder Modal');
		await commonActions.waitForVisible(commonLoc.GREEN_CHECKMARK_ICON, 'Opt In Green Checkmark');
		let optInTitle = await commonActions.safeGetText(commonLoc.PAYMENT_REMINDER_MODAL_TITLE, 'Opt In reminder title');
		await commonActions.safeAsserts('equal', optInTitle, 'Opt In reminder title', languageFile.commonInfoMessages.EmailOptInModalTitle);
		let optInMessage = await commonActions.safeGetText(commonLoc.PAYMENT_REMINDER_MODAL_MESSAGE, 'Opt In reminder Message');
		await commonActions.safeAsserts('equal', optInMessage, 'Opt In reminder message', languageFile.commonInfoMessages.EmailOptInModalMessage);
		let turnOffEmail = await commonActions.safeGetText(commonLoc.TOGGLE_PAYMENT_EMAIL_CTA, 'Turn off Email Reminder');
		await commonActions.safeAsserts('equal', turnOffEmail, 'Turn off Email Reminder', languageFile.commonInfoMessages.TurnOffEmailReminder);
	}

	async clickOnPaymentReminderToggle() {
		await commonActions.waitForClickable(commonLoc.TOGGLE_PAYMENT_EMAIL_CTA, 'Turn on payment email');
		await commonActions.safeClick(commonLoc.TOGGLE_PAYMENT_EMAIL_CTA, 'Turn on payment email');
	}

	async verifyPaymentReminderOptOutModal() {
		await commonActions.waitForVisible(commonLoc.PAYMENT_EMAIL_REMINDER_MODAL, 'Payment Email Reminder Modal');
		await this.waitForLoadingMask();
		await commonActions.waitForVisible(commonLoc.YELLOW_EXCLAMTION_ICON, 'Opt Out Yellow Icon');
		let optOutTitle = await commonActions.safeGetText(commonLoc.PAYMENT_REMINDER_MODAL_TITLE, 'Opt Out reminder title');
		await commonActions.safeAsserts('equal', optOutTitle, 'Opt Out reminder title', languageFile.commonInfoMessages.EmailOptOutModalTitle);
		let optOutMessage = await commonActions.safeGetText(commonLoc.PAYMENT_REMINDER_MODAL_MESSAGE, 'Opt Out reminder Message');
		await commonActions.safeAsserts('equal', optOutMessage, 'Opt Out reminder message', languageFile.commonInfoMessages.EmailOptOutModalMessage);
		let turnOnEmail = await commonActions.safeGetText(commonLoc.TOGGLE_PAYMENT_EMAIL_CTA, 'Turn on Email Reminder');
		await commonActions.safeAsserts('equal', turnOnEmail, 'Turn on Email Reminder', languageFile.commonInfoMessages.TurnOnEmailReminder);
	}

	async closePaymentReminderModal() {
		await commonActions.safeVisibleClick(commonLoc.EMAIL_REMINDER_MODAL_XCLOSE, 'X out Email Reminder Modal');
		await commonActions.elementIsNotDisplayed(commonLoc.PAYMENT_EMAIL_REMINDER_MODAL, 'Payment Email Reminder Modal');
	}

	async enterDetailsInGatedDocForm(firstName, lastName, email, companyName, countryName, marketName, purchaseRadio) {
		await commonActions.scrollTo(commonLoc.GD_CLOSE_FORUM, 'Close gated docs forum model');
		await commonActions.waitForClickable(commonLoc.GD_CLOSE_FORUM, 'Close gated docs forum model');
		let gdModal = await commonActions.waitForVisible(commonLoc.GD_DOC_DOWNLOAD_MODAL_POPUP, 'Gated doc download form');
		await commonActions.safeAsserts('true', gdModal, 'gated doc modal');
		await commonActions.setValue(commonLoc.GD_FIRST_NAME, firstName, 'First Name');
		await commonActions.setValue(commonLoc.GD_LAST_NAME, lastName, 'LastName');
		await commonActions.setValue(commonLoc.GD_EMAIL, email, 'Email');
		await commonActions.setValue(commonLoc.GD_COMPANY_NAME, companyName, 'Company Name');
		await commonActions.selectByText(commonLoc.GD_COUNTRY_NAME, countryName, 'Country Name');
		await commonActions.selectByIndex(commonLoc.GD_MARKET_NAME, marketName, 'Market Name');
		await commonActions.safeClick((commonLoc.GD_HAVE_YOU_PURCHASED_RADIO).replace('%s', purchaseRadio), 'Have you purchased radio');
	}

	async clickOnGDTermsOfUse() {
		await commonActions.safeJavaScriptClick(commonLoc.GD_CHECK_BOX, 'Terms of use checkbox')
	}

	async clickGdFormSubmitButton() {
		await commonActions.waitForClickable(commonLoc.GD_SUBMIT_BUTTON, 'Gated Doc Submit Button');
		await commonActions.safeClick(commonLoc.GD_SUBMIT_BUTTON, 'Gated Doc Submit Button');
		await browser.pause(3000);
		await commonActions.getLatestWindow();
		await commonActions.switchToParentWindow();
		await commonActions.elementIsNotDisplayed(commonLoc.GD_SUBMIT_BUTTON, 'Submit button');
	}

	async verifySuccessToastMessage(successToastMsg) {
		await commonActions.waitForVisible(commonLoc.SUCCESS_TOAST_MESSAGE, 'Success Toast Message')
		let RFQSuccessToast = await commonActions.safeGetText(commonLoc.SUCCESS_TOAST_MESSAGE, successToastMsg)
		await commonActions.safeAsserts('equal', RFQSuccessToast, successToastMsg + ' is not matched', successToastMsg)
		return this;
	}

	async enterSampleDocFormDetailsAndSubmit(firstName, lastName, email, phone, jobTitle, companyName, countryName, marketName, previouslyPurchased) {
		await commonActions.safeClick(commonLoc.REQUEST_A_SAMPLE_BUTTON_CTA, 'Request a Sample Button');
		await commonActions.waitForVisible(commonLoc.REQUEST_A_SAMPLE_FORM, 'Sample doc form');
		if (firstName !== undefined) {
			await commonActions.scrollTo(commonLoc.FIRST_NAME, 'First Name');
			await commonActions.waitForClickable(commonLoc.FIRST_NAME, 'First Name');
			await commonActions.setValue(commonLoc.FIRST_NAME, firstName, 'First Name');
		}
		if (lastName !== undefined) {
			await commonActions.setValue(commonLoc.LAST_NAME, lastName, 'Last Name');
		}
		if (email !== undefined) {
			await commonActions.setValue(commonLoc.EMAIL, email, 'Email');
		}
		await commonActions.setValue(commonLoc.PHONE, phone, 'Phone');
		await commonActions.setValue(commonLoc.JOB_TITLE, jobTitle, 'Job Title');
		await commonActions.setValue(commonLoc.COMPANY_NAME, companyName, 'Company Name');
		await commonActions.selectByText(commonLoc.COUNTRY_NAME, countryName, 'Country Name');
		await commonActions.selectByIndex(commonLoc.MARKET_NAME, marketName, 'Market Name');
		let previouslyPurchasedRadio = await commonActions.dynamicLocator(commonLoc.PREVIOUSLY_PURCHASED_RADIO, previouslyPurchased);
		await commonActions.safeClick(previouslyPurchasedRadio, 'Radio Button')
		await commonActions.safeJavaScriptClick(commonLoc.TERMS_CHECKBOX, 'Terms of use checkbox');
		await commonActions.safeClick(commonLoc.SUBMIT_BUTTON, 'Submit Button');
	}

	async waitForLoadingMask() {
		await commonActions.elementIsNotDisplayed(commonLoc.LOADING_MASK, 'Loading Mask')
	}

	//TableView Page Action Methods

	async enterUserName(username) {
		await commonActions.scrollTo(commonLoc.TOOL_TIP_MODAL_SIGN_IN, 'SignIn Button');
		await commonActions.waitForClickable(commonLoc.TOOL_TIP_MODAL_SIGN_IN, 'SignIn Button');
		await commonActions.waitForVisible(commonLoc.TOOL_TIP_MODAL_EMAIL, 'User Name');
		await commonActions.setValue(commonLoc.TOOL_TIP_MODAL_EMAIL, username, 'User Name');
	}

	async enterPassword(password) {
		await commonActions.setValue(commonLoc.TOOL_TIP_MODAL_PASSWORD, password, 'Password');
	}

	async clickOnSignInButton() {
		await commonActions.safeClick(commonLoc.TOOL_TIP_MODAL_SIGN_IN, 'SignIn Button');
		await commonActions.elementIsNotDisplayed(commonLoc.TOOL_TIP_MODAL_SIGN_IN, 'SignIn Button');
	}
}

module.exports = new CommonActionPage()
