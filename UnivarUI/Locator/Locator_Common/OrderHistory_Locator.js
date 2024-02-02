class OrderHistory_Locator {
	constructor() {
		this.ORDERHISTORY_TITLE = 'div.title>h2';
		this.ITEMS_HOME = '(//ul[@class="items"]/li/strong)[last()]';
		this.ORDERHISTORY_FILTERS = '.orders-status.nav-toolbar button';
		this.ORDERHEADER_RANDOM = '(//div[@class="order-item__header"]/h3)[%s]'
		this.ORDER_SEARCHBOX = '//input[@id="search-order"]';
		this.SEARCHTERM_TEXT = '//div[@class="search-term"]';
		this.ORDERHEADER_LIST = '(//div[@class="order-item__header"]/h3)';
		this.TOOLBAR_NUMBER = '//p[@class="toolbar-amount"]/span';
		this.ORDERTOTAL = '.order-item__details .info p:nth-child(1)';
		this.ORDER_PO = '.order-item__header p:nth-child(2)';
		this.ORDER_ORDERED = '.info';
		this.ORDER_SHIPPINGADDRESS = '//h3[contains(text(),"%s")]/..//i[@class="fal fa-calendar-alt"]/..'
		this.ORDER_CALENDERLOGO = '//h3[contains(text(),"%s")]/..//i[@class="fal fa-calendar-alt"]';
		this.ORDER_TRUCKLOGO = '//h3[contains(text(),"%s")]/..//i[@class="fal fa-truck"]';
		this.ORDER_DETAILS_ORDER_NO = '(//div[@class="order-item__header"]/h3)[%s]';
		this.ORDER_DETAILS_BUTTON = '//h3[contains(text(),"%s")]/following-sibling::div//a[contains(@href,order_id)]';
		this.ORDER_TOTAL = '.order-item__header .price';
		this.PO_NUMBER_TEXT = '(//div[@class="order-item__details"]//p[2])[%s]';
		this.ORDERS_LIST = '//div[@class="order-item"]';
		this.ORDER_DETAILS = '.order-item__details [class="button button--alt"]';
		this.ORDER_LINE_ITEM = '//h3[contains(text(),"%s")]/../..//div[@class="order-shipment"]//div[@class="product-item"]';
		this.ORDER_LINE_ITEM_NUMBER = '.product-item__details';
		this.OH_REORDER_BUTTON = '(//button[@class="button button--alt productToCart"])[%s]'
		this.PAYMENT_REMINDER_RIBBON = '//div[@class="breadcrumbs"]/following-sibling::div[@class="message message--info message-reminder"]';
		this.EMAIL_REMINDER_MESSAGE = 'div.message__content>div.opt-in-reminder-cta';
		this.OH_ORDER_HEADING = 'div.order-item__header h3';
		this.PO_NUMBER = '//p[contains(text(),"PO #")]';
		this.PRODUCT_NAME = 'div.product-item__details p:nth-child(1)';
		this.SKU_NUMBER = 'div.product-item__details p:nth-child(2)';
		this.OH_ORDER_TYPE = '//label[text()="Order Type"]/../div';
		this.OH_CHEMCARE = '.order-type-dropdown.addresses__dropdown-widget.dropdown-widget.active li:nth-child(3)';
		this.OH_CHEMICAL_INGREDIENTS = '.order-type-dropdown.addresses__dropdown-widget.dropdown-widget.active li:nth-child(2)';
		this.OH_CHEMCARE_LINKS = '//div[@class="product-links"]/a';
		this.OH_CHEMICAL_INGREDIENTS_LINKS = '//div[@class="product-item__details"]/a';
		this.LOADING_MASK = '.loading-mask';
		this.RESET_FILTER = 'div.active-filters-container div.filter-reset span';
		this.ORDER_ITEM_SHIPMENT = '.order-item__shipments';
		this.SHIPPING_DOCS_LINK = '.documents-link';
		this.SHIPPING_DOCS_MODEL = '.modal-popup.product-documents-modal.centered-modal.full-mobile._inner-scroll._show';
		this.INVOICE_PDF_LINK = '.document__name.name.documents-invoice';
		this.CLOUDFLARE_LOADING_ICON = '#challenge-spinner';
		this.COMPLETED_ORDER_TAB = '.orders-status.nav-toolbar [data-status="completed"]';
		this.PRODUCT_DOCS_LINK = 'a[data-source="product"]';
		this.VIEW_SDS_LINK_IN_MODAL = 'a.view';
		this.CLOSE_DOC_MODAL = 'aside.product-documents-modal button.action-close';

	}
}

module.exports = new OrderHistory_Locator();
