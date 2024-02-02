class HeaderContent_Locator {
	constructor() {
		this.CART_ICON = '//a[@class="action showcart"]';
		this.CART_QUANTITY = '.block-title .qty';
		this.SEARCH_BOX = '.amsearch-input';
		this.SEARCH_BUTTON = '//div[@class="actions"]/button[@type="submit"]';
		this.REGION_SELECTOR = '.header.content  a[href="#store-modal"]';
		this.SELECTED_REGION = '//div[@class="pb-region active"]/div[@data-element= "region"]';
		this.SELECTED_LANGUAGE = '//div[@class="pb-region active"]/div[@data-element= "language"]'
		this.ALL_REGIONS = '//div[contains(@class,"pb-region")]/div[@data-element= "region"]';
		this.ALL_LANGUAGES = '//div[contains(@class,"pb-region")]/div[@data-element= "language"]'
		this.REGION_SELECTOR_HEADING = '.modal-popup.store-switcher-modal-popup.centered-modal.full-modal._show h2';
		this.CLOSE_REGION_SELECTOR_MODAL = '//aside[contains(@class,"store-switcher-modal-popup")]//button[@class="action-close"]';
		this.POPULAR_SEARCHES = 'section.-popular_searches';
		this.RECENT_SEARCHES = '[id="search_autocomplete"] [class*="recent_searches"] [class="amasty-xsearch-block-header"]';
		this.POPULAR_SEARCES_LIST = 'section.-popular_searches li.amsearch-item';
		this.RECENT_SEARCHES_LIST = '//div[@class="amsearch-leftside"]//div[contains(text(),"Recent Searches")]/following-sibling::div/a';
		this.CLOSE_BUTTON = '//div[@class="amsearch-close"]';
		this.HEADER_BAR = '//div[@class="header content"]';
		this.ALL_PRODUCTS_LIST = '//div[contains(text(),"%s")]/../following-sibling::div/div[@data-amsearch-js="product-item"]';
		this.PRODUCT_NUMBER_EMPTY = '.amsearch-products.-columns .product.sku.product-item-sku';
		this.CATEGORIES_TITLE = 'section.-category span.amsearch-title';
		this.CATEGORIES_LIST = 'section.-category li.amsearch-item';
		this.QUOTED_PRODUCTS = '//div[@class="amasty-header-title"][contains(text(),"%s")]';
		this.QUOTED_PRODUCTS_LIST = '//div[@class="amasty-header-title"][contains(text(),"%s")]/../following-sibling::div[1]/div//a';
		this.PAGES_TITLE = 'section.-page span.amsearch-title';
		this.PAGES_LIST = 'section.-page a.item-name';
		this.PRODUCT_LIST = '(//div[@class="amasty-header-title"][contains(text(),"%s")]/../following-sibling::div[1]/div)[%t]';
		this.ADDTOCART_AUTO = '//div[contains(@class,"addtocart")]//form';
		this.PRICE_AUTO = '//span[@class="price"]';
		this.SUB_MENU_TEXT = '//ul[contains(@class," ui-widget-content ")]/li[contains(@class,"title")]/span[text()="%s"]/../following-sibling::li/a/span';
		this.MENU_TEXT = '//ul[contains(@class," ui-widget-content")]/li[contains(@class,"title")]/span[text()="%s"]/../following-sibling::li/a/span[2]';
		this.MENU_LINK = '//ul[contains(@class," ui-widget-content")]/li[contains(@class,"title")]/span[text()="%s"]/../following-sibling::li/a/span[2]/parent::a';
		this.productCategory = '//span[@class="ui-menu-icon ui-icon ui-icon-carat-1-e"]/following-sibling::span[contains(text(),"Product Categories")]';
		this.NO_RESULTS_FOUND = '.amsearch-message-block .no-results';
		this.SEARCH_ICON = '.amsearch-button.-loupe.-clear.-icon';
		this.MY_ACCOUNT_DROPDOWN = '(//button[@class="action switch"])[1]';
		this.ADDRESS_BOOK_DROPDOWN = '//a[contains(@href,"customer/address")]';
		this.NOTIFICATION_CTR_DROPDOWN = '.customer-welcome.active a[href*="/notification/center"]';
		this.MY_ACCOUNT_DROPDOWN_VALUES_LIST = '(//div[@class="customer-menu"])[1]//li/a';
		this.CONTACT_US_CTA_HEADER = '.contact-link.contact-modal-trigger'
		this.MY_ACCOUNT_OPTIONS = '//li[@class="customer-welcome active"]//li/a[contains(text(),"%s")] ';
		this.INOVICES_CTA = 'li.invoice-link';
		this.ORDERS_CTA = 'li.order-link>a';
		this.MINICART_CLOSE_X = 'button.action.close';
		this.REMOVE_BUTTON_MINICART = '//ol[@class="minicart-items"]/li[@data-role="product-item"]//span[@data-bind=\'i18n: "Delete"\']';
		this.MINICART_LINE_ITEMS = '//div[@class="minicart-items-wrapper"]//li[@data-role="product-item"]';
		this.INVOICES_CTA = 'a[href*="/invoices/"]';
		this.REGION_STORE_URLS = '.pb-regions-container .pb-region__link';
		this.PRIVACY_SETTINGS_CTA = 'a[href*="/settings/"]';
		this.SEARCH_LOADING_ICON = '.amasty-xsearch-loader';
		this.SIGN_OUT = '.customer-welcome.active .authorization-link';
		this.ACCOUNT_OVERVIEW = '.customer-welcome.active a[href*="/personal-home/"]';
		//Notification Center
		this.NOTIFICATION_BELL_ICOON = '.notification-bell__trigger.action.toggle';
		this.GO_TO_NOTIFICATION_CENTER_BTN = '.notification-bell-list-wrapper.dropdown-options.visible [href*="/notification"]';
		this.MARK_AS_READ = '.notification-bell-list-wrapper.dropdown-options.visible .notification-bell-buttons .button.button--link';
		this.NOTIFICATION_LIST = '.notification-bell-list__messages';
	}
}

module.exports = new HeaderContent_Locator();
