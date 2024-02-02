class SearchResultsPage_Locator {
	constructor() {
		this.PRODUCT_NUMBER_DYNAMIC = '//div[contains(text(),"Product No.:")]/../div[text()="%s"]';
		this.WEB_PRICE_TAG = '//div[@class="pricing-box pricing-box__web-price"][contains(text(),"Web Price")]';
		this.QUANTITY_BOX = '//input[@class="input-text qty input_qty"]';
		this.ITEM_COUNT = '(//p[@id="toolbar-amount"])[last()]';
		this.ADD_TO_CART_DYNAMIC = '.add-to-cart [data-sku="%s"]';
		this.PRODUCT_NAME_WITH_NUMBER = '//div[text()="%s"]/../../li[@class="product name product-item-name"]/a';
		this.PRODUCT_PRICE_DYNAMIC = '//div[text()="%s"]/../../li[@class="product-item-details-attr"]//div/span[@class="price"]';
		this.PRODUCT_NAME_IN_MINICART = '//strong[@class="product-item-name"]/a';
		this.PRODUCT_PRICE_IN_MINICART = '//span[@class="minicart-price"]/span';
		this.UOM_IN_MINICART = '//div[@class="sales-unit"]/span';
		this.MINICART_SUBTOTAL = '//span[contains(@data-bind,"subtotal")]/span';
		this.CHECKOUT_BUTTON_MINICART = '//button[@id="top-cart-btn-checkout"]';
		this.SEARCH_RESULTS = '.search.results';
		this.ALL_PRODUCTS_TAB = 'a[href*="products_tab"]';
		this.CATEGORIES_TAB = 'a[href*="category-tab"]';
		this.FILTERS = '#layered-filter-block';
		this.RELATED_SEARCH_TERMS = '.amsearch-related-terms';
		this.SEARCH_TERM_LINK = '.amsearch-content-li .amsearch-item';
		this.FILTER_TABS = '.filter-options .filter-options-title';
		this.FILTER_CHECKBOX = '[class="filter-options-item allow active"] .custom-checkbox';
		this.SELECTED_FILTER = '.amshopby-filter-current.filter-current .amshopby-items.items .amshopby-filter-value';
		this.RESET_FILTERS = '.amshopby-filter-current.filter-current .amshopby-remove';
		this.CATEGORIES_CONTAINER = '#tabs-amsearch-category-tab';
		this.CATEGORIES_CONTENT = '.amsearch-item.amsearch-item-category';
		this.NO_RESULTS_TITLE = '.page-title';
		this.EMPTY_RESULTS_CONTENT = '.empty-search-content-block';
		this.EMAIL_CONTACT_LINK = '.links__contact_mail';
		this.PRICE_UOM = '.uom-price';
		//Missing SDS
		this.SDS_MODAL = 'aside.sds-missing-document-request-modal-popup'
		this.SDS_LINK = '//span[@data-sku="%s"]/a';
		this.MISSING_SDS_TITLE = '//div[@class="modal-inner-wrap"]/header/h2[contains(text(),"Request a document")]';
		this.DOCUMENT_DESCRIPTION = 'div.document-description';
		this.FIRST_NAME = 'input#dr_first_name';
		this.LAST_NAME = 'input#dr_last_name';
		this.EMAIL = 'input#dr_email';
		this.SUBMIT = 'aside.sds-missing-document-request-modal-popup button[type="submit"]';

	}
}

module.exports = new SearchResultsPage_Locator();
