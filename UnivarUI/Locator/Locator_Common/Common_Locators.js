class Common_Locators {
	constructor() {
		//PAYMENT EMAIL REMINDER MODAL ELEMENTS COMMON FOR OH, OD, PersonalHomepage, Invoices page
		this.PAYMENT_REMINDER_MODAL_TITLE = 'div.modal-inner-wrap div.opt-in-reminder-container.text-center h3.opt-in-reminder__title';
		this.PAYMENT_REMINDER_MODAL_MESSAGE = 'div.modal-inner-wrap div.opt-in-reminder-container.text-center p.opt-in-reminder__message';
		this.TOGGLE_PAYMENT_EMAIL_CTA = 'div.modal-inner-wrap div.opt-in-reminder-container.text-center div.opt-in-reminder__cta.button.button--link';
		this.GREEN_CHECKMARK_ICON = 'i.fas.fa-check-circle';
		this.YELLOW_EXCLAMTION_ICON = '.modal-popup.opt-in-reminder-cta-modal-content.centered-modal.full-mobile._show i.fa-exclamation-triangle';
		this.EMAIL_REMINDER_MODAL_XCLOSE = 'aside.opt-in-reminder-cta-modal-content button.action-close';
		this.PAYMENT_EMAIL_REMINDER_MODAL = 'aside.opt-in-reminder-cta-modal-content>div.modal-inner-wrap';
		this.COMMON_PAYMENT_REMINDER_TEXT = '//div[@class="message__content"]/span'
		this.LOADING_MASK = '.loading-mask';

		// Gated Document Download Request Form Locators
		this.GD_DOC_DOWNLOAD_CTA = '//span[@data-bind=\'text: "Download"\']';
		this.GD_DOC_DOWNLOAD_MODAL_POPUP = '.modal-popup.documents-download-modal-popup.centered-modal._show';
		this.GD_FIRST_NAME = 'input[id="gd_first_name"]';
		this.GD_LAST_NAME = 'input[id="gd_last_name"]';
		this.GD_EMAIL = 'input[id="gd_email"]';
		this.GD_COMPANY_NAME = 'input[id="gd_company"]';
		this.GD_COUNTRY_NAME = '#documents-download-form #country';
		this.GD_MARKET_NAME = '//select[@name="market" and @id="gd_market"]';
		this.GD_HAVE_YOU_PURCHASED_RADIO = 'label[for="gd_%s"]>span'; 'Look at this code'
		this.GD_CHECK_BOX = 'input#gd-terms-of-use';
		this.GD_SUBMIT_BUTTON = '[class*="_show"] .button.button--primary';
		this.SUCCESS_TOAST_MESSAGE = '//div[contains(@class,"ajs-message")]/div[@class="container"]';
		this.GD_CLOSE_FORUM = '.modal-popup.documents-download-modal-popup.centered-modal._show .action-close';

		//Sample Document Request form Locators
		this.REQUEST_A_SAMPLE_BUTTON_CTA = 'div.request-sample span';
		this.REQUEST_A_SAMPLE_FORM = 'div.sample-request-modal';
		this.FIRST_NAME = '//input[@value="Web - Sample"]/..//input[@name="firstname"]';
		this.LAST_NAME = '//input[@value="Web - Sample"]/..//input[@name="lastname"]';
		this.EMAIL = '//input[@value="Web - Sample"]/..//input[@name="email"]';
		this.PHONE = '//input[@value="Web - Sample"]/..//input[@name="phone"]';
		this.JOB_TITLE = '//input[@value="Web - Sample"]/..//input[@name="title"]';
		this.COMPANY_NAME = '//input[@value="Web - Sample"]/..//input[@name="company"]';
		this.COUNTRY_NAME = '.sample-request-modal #country';
		this.MARKET_NAME = '//input[@value="Web - Sample"]/..//select[@name="market"]';
		this.PREVIOUSLY_PURCHASED_RADIO = '//input[@value="Web - Sample"]/..//input[@value="%s"]';
		this.TERMS_CHECKBOX = '//input[@value="Web - Sample"]/..//input[@id="rs-terms-of-use"]';
		this.SUBMIT_BUTTON = '//input[@value="Web - Sample"]/..//button[@type="submit"]';

		// TableView Page WebPrice Product Tool Tip Sign In Modal Locators
		this.TOOL_TIP_MODAL_EMAIL = '.modal-popup.login-modal._show #email';
		this.TOOL_TIP_MODAL_PASSWORD = '.modal-popup.login-modal._show #pass';
		this.TOOL_TIP_MODAL_SIGN_IN = '.modal-popup.login-modal._show #send2';

	}
}

module.exports = new Common_Locators();
