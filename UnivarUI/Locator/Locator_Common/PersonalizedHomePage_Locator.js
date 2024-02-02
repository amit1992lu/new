class PersonalizedHomePage_Locator {
	constructor() {
		this.LOGO_HEADER = '//div[@class="header content"]//a[@class="logo"]';
		this.PRODUCT_CATALOG = '.level0.nav-1.category-item.first.level-top.ui-menu-item';
		this.PRODUCT_CATEGORIES = '[class*="level0 nav-2"]';
		this.CATEGORY_LINK = '//a/span[contains(text(),"%s")]';
		this.SUB_CATEGORY_LINK = '//a/span[contains(text(),"%s")]';
		this.INNOVATION_LINK = '//a/span[contains(text(),"Innovation")]';
		this.SERVICES_LINK = '//a/span[contains(text(),"Services")]';
		this.SUPPLIERS_LINK = '[href*="our-suppliers"]';
		this.CONTACT_US_CTA = '.contact-link.contact-modal-trigger';
		this.SIGNUP_LINK = '(//ul[@class="header links"]//a[contains(text(),"Sign Up")])[1]';
		this.COUNTRYSTORE_IMG = 'div#switcher-store-trigger';
		this.SIGN_LINK = '//li[@class="authorization-link"]/a[contains(text(),"Sign In")]';
		this.ORDERS_LINK = '//li[@class="order-link"]/a';
		this.MYACCOUNT_BTN = '(//p[@class="logged-in"])[1]';
		this.SHOWCART_LINK = '//a[@class="action showcart"]';
		this.ACCOUNT_USERNAME = '.account_user_name';
		this.ACCOUNT_INFO = '//p[@class="contact-info"][contains(text(),"%s")]';
		this.ORDERHISTORY_LINK = '.ph-links a[href*="/order/history/"]';
		this.ORDERHISTROY_TRUCKIMG = '.link img[alt="Truck image"]';
		this.ORDERHISTORY_RIGHTARROW = '[href$="/order/history/"]  .fas.fa-arrow-right';
		this.QUOTED_PRODUCTS_LINK = '.ph-links [href$="?hasprice=yes"]';
		this.DISCOVER_PRODUCTS_LINK = '.ph-links [href*="?hasprice=yesno"]';
		this.ACCOUNT_INFORMATION_TEXT = '.account-information__title';
		this.CONTACT_INFORAMTION_EMAIL = '//p[@class="contact-info"][1]';
		this.CONTACT_A_REPRESENTATIVE_TEXT = '.csr-information__title'
		this.RECENT_ORDERS_TEXT = '.recent-orders__title';
		this.RECENTLY_VIEWED_PRODUCTS = '.block.widget.block-viewed-products-grid .block-title';
		this.FOOTER_ORDER_HISTORY_LINK = '.links__history';
		this.FOOTER_QUOTED_PRODUCTS_LINK = '.links__quotes';
		this.CONTACT_US_FORM = '.pagebuilder-button-primary';
		this.SUCCESSMESSAGE = '//div[contains(@class,"ajs-message")]/div[@class="container"]';
		this.MINICART_ICON_ON_HEADER = '.action.showcart';
		this.MINICART_SLIDER_MODAL = '//div[@class="block block-minicart ui-dialog-content ui-widget-content"]';
		this.DELETE_ON_MINICART = '(//a[@class="action delete"])[1]';
		this.OK_IN_MINICART = '//button[@class="action-primary action-accept"]/span'; //button/span[contains(text(),'OK')]
		this.EMPTY_CART_MESSAGE = '.subtitle.empty';
		this.RECENT_INVOICES_HEADER = 'h2.recent-invoice-title';
		this.VIEW_ALL_INVOICES = 'h2.recent-invoice-title+a[href*="invoices"]';
		this.VIEW_PAST_DUE = 'h2.recent-invoice-title+a+a[href*="pastdue"]';
		this.RECENT_INOVICES_COLUMN_HEADERS = '//thead[@class="table-view__header"]/tr[@class="tb-sort"]/th/div[contains(@data-bind,"i18n:")]';
		this.CLOSE_MINI_CART = '#btn-minicart-close';
		this.EMAIL_REMINDER_RIBBON = 'div.recent-invoices>div.message--info.message-reminder';
		this.EMAIL_REMINDER_MESSAGE = 'div.message__content>div.opt-in-reminder-cta';
		this.EMAIL_REMINDER_XCLOSE = 'div.recent-invoices>div.message--info.message-reminder button.message--close';
		this.MINICART_QTY_COUNT = 'span.qty[title="Items in Cart"]';
		this.MINICART_CONTENT_WRAPPER = '#minicart-content-wrapper';
		this.BREADCRUMBS = '.breadcrumbs';
		this.INVOICE_LOADING_PLACEHOLDER = '.invoices-placeholders';
		this.MINI_CART_CHANGE_SHIPPING_ADDRESS = '.block-shipping-address .change-address';
		this.REMOVE_PRODUCT = '.action.delete';
		this.INVOICE_INVOICE_ROWS = '#invoices-history-container a.text-link.documents-invoice';

	}
}

module.exports = new PersonalizedHomePage_Locator();
