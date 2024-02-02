class TableView_Locators {
	constructor() {

		// New TableView Expansion locators
		this.REQUEST_PRICE_CTA = '(//span[@class="request-quote-label"])[1]';
		this.REQUEST_PRICE_BUTTON = '(//button[@name="guest_quote"])[1]';
		this.ADD_TO_CART = '(//button[@title="Add to Cart"])[1]';
		this.SIGN_IN_FOR_PRICING_MODAL = '.modal-popup.login-modal._show .home-banner-user-login.login-container';
		this.REQUEST_QUOTE_WITHOUT_SIGNIN_BUTTON = 'aside.login-modal.guest-modal._show button[data-role="action"]';
		this.PRICED_PRODUCT_CTA = '(//span[@class="price"]/../../td)[1]';
		this.WEBPRICE_TOOLTIP = '.table-view-extra-info._active .field-tooltip.toggle';
		this.TOOLTIP_SIGNIN_CTA = '.field-tooltip.toggle._active .tooltip-login-modal';
		this.TOOLTIP_SIGNIN_MODAL = 'aside.modal-popup.login-modal._show';
		this.PRODUCT_IN_CART = '.product-item-details';
		this.REQUEST_QUOTE_TITLE = 'h2[data-bind*=\'"Request Quote"\']';
		this.QUOTE_DETAILS_TITLE = 'h3[data-bind*=\'"Quote Details"\']';
		this.PRODUCT_DETAILS_TITLE = 'h4[data-bind*=\'"Product Detail"\']';


		// Tiered Pricing and Minimum Order Qty Locators
		this.TIERED_PRICING_SKU = '//tr[@id="%s"]//i[@class="fas fa-chevron-down"]';
		this.TIERED_PRICING_LINES = '(//tr[@id="%s-extra"]//ul[@class="prices-tier items"]/li)';
		this.TIERED_PRICING_QTY = 'data-qty';
		this.QTY_BOX_PRODUCT_NO = '//tr[@id="%s-extra"]//input[@name="qty"]';
		this.ADD_TO_CART_PRODUCT_NO = '//tr[@id="%s-extra"]//button[@title="Add to Cart"]';
		this.PRICE_PRODUCT_NO = '//tr[@id="%s-extra"]//div[@class="package-price"]/span';
		this.TIERED_PRICE_ACTIVE = '(//tr[@id="%s-extra"]//li[contains(@class,"item")]/strong)';
		this.ORDER_QTY_ERROR_MESSAGE = '//tr[@id="%s-extra"]//div[@id="qty-error"]';

		//MOQ Locators
		this.MOQ_ADD_TO_CART = '//tr[@id="%s-extra"]//button[@title="Add to Cart"]'
	}
}

module.exports = new TableView_Locators();
