class ProductDetailPage_Locator {
	constructor() {
		this.PRODUCT_WEB_PRICE = '.product.product-actions .pricing-box.pricing-box__web-price';
		this.REQUEST_FOR_QUOTE_BTN = '.action.guest-request-quote.button.button--primary';
		this.SIGN_IN_MODEL = '.home-banner-user-login.login-container.login-popup';
		this.VIEW_REGULATORY_DOC = '.document.guest-user a';
		this.PACKAGE_TYPE = '.variant__option_label';
		this.SELECTED_PACKAGE_TYPE = '.selected-package';
		this.PRODUCT_DESCRIPTION = '.product.product-detail-info';
		this.PARENT_CHILD_WEBPRICE = '.package-type-item.selected [data-bind*="[\'price\']"]';
		this.ADD_TO_CART_BTN = '#product-addtocart-button';
		this.REGULATORY_VIEW_LINK = '.view.documents-regulatory';
		this.REGULATORY_DOWNLOAD_LINK = '.download.documents-regulatory';
        this.PACKAGE_TYPES = '//li[contains(@class,"package-type-item")]';
		this.PRODUCT_DETAIL_PRICE = '.product-info-price'
		this.PRODUCT_WEB_PRICE_TAG = '.pricing-box.pricing-box__web-price';
		this.SIGN_IN_BUTTON_MODEL = '#login-form .action.login.button.button--primary.form__submit';


        //Missing SDS
		this.VIEW_SDS_LINK = 'a.view';


	}
}
module.exports = new ProductDetailPage_Locator();
