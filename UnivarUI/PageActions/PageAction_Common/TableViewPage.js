let commonActions = require('../../../Utilities/CommonActions.js');
let tableViewLoc = require('../../Locator/Locator_Common/TableView_Locators.js');

class TableViewPage {

	async verifyRequestQuoteModal() {
		await commonActions.waitForVisible(tableViewLoc.REQUEST_QUOTE_TITLE, 'RFQ title');
		await commonActions.waitForVisible(tableViewLoc.QUOTE_DETAILS_TITLE, 'Quote Details');
		await commonActions.waitForVisible(tableViewLoc.PRODUCT_DETAILS_TITLE, 'Product Details Title');
	}

	async clickOnRequestPriceCTA() {
		await commonActions.safeClick(tableViewLoc.REQUEST_PRICE_CTA, 'Request for pricing CTA');
	}

	async clickRequestPriceButton() {
		await commonActions.safeClick(tableViewLoc.REQUEST_PRICE_BUTTON, 'Request Price Button');
		return this;
	}

	async clickOnAddToCartCTA() {
		await commonActions.safeVisibleClick(tableViewLoc.ADD_TO_CART, 'Add to cart CTA');
		await commonActions.waitForVisible(tableViewLoc.PRODUCT_IN_CART, 'Product in Cart');
	}

	async validateSignInToSeePricingModal() {
		await commonActions.waitForVisible(tableViewLoc.SIGN_IN_FOR_PRICING_MODAL, 'Sign in to see prices for guest users');
	}

	async clickOnRequestQuoteWithoutLogin() {
		await commonActions.safeJavaScriptClick(tableViewLoc.REQUEST_QUOTE_WITHOUT_SIGNIN_BUTTON, 'Click on request for quote without sign in')
	}

	async clickOnWebPricedProduct() {
		await commonActions.scrollTo(tableViewLoc.PRICED_PRODUCT_CTA, 'Product with pricing');
		await commonActions.safeClick(tableViewLoc.PRICED_PRODUCT_CTA, 'Product with pricing');
		return this
	}

	async clickOnWebPriceToolTip() {
		await commonActions.waitForVisible(tableViewLoc.WEBPRICE_TOOLTIP, 'WebAuthn Pricing Tool Tip Widget');
		await commonActions.safeClick(tableViewLoc.WEBPRICE_TOOLTIP, 'WebAuthn Pricing Tool Tip Widget');
		return this
	}

	async clickOnToolTipSignInCTA() {
		await commonActions.waitForClickable(tableViewLoc.TOOLTIP_SIGNIN_CTA, 'Tool Tip Sign IN CTA');
		await commonActions.safeClick(tableViewLoc.TOOLTIP_SIGNIN_CTA, 'Tool Tip Sign In CTA');
		await commonActions.elementIsNotDisplayed(tableViewLoc.TOOLTIP_SIGNIN_CTA);
	}

	async expandTableViewProductLine(product_no) {
		let tiered_pricing_loc = await commonActions.dynamicLocator(tableViewLoc.TIERED_PRICING_SKU, product_no);
		await commonActions.safeClick(tiered_pricing_loc);
	}

	async getTieredProductInfo(product_no) {
		let data_qty;
		let qty;
		let tiered_pricing_loc = await commonActions.dynamicLocator(tableViewLoc.TIERED_PRICING_LINES, product_no);
		let tieredPricingList = await commonActions.findElements(tiered_pricing_loc, 'Tiered Pricing Lines');
		for (let i = 1; i <= tieredPricingList.length; i++) {
			let pricing_data_qty = await commonActions.getAttribute(`${tiered_pricing_loc}[${i}]`, tableViewLoc.TIERED_PRICING_QTY, `Tiered Pricing text at index ${i}`)
			if (pricing_data_qty.includes('-')) {
				data_qty = pricing_data_qty.split('-')
			} else {
				data_qty = pricing_data_qty.split('+')
				data_qty[1] = 99
			}
			qty = await commonActions.randomNumberWithinRange(parseInt(data_qty[0]), parseInt(data_qty[1]));
			let tieredProductPrice = await commonActions.dynamicLocator(tableViewLoc.TIERED_PRICE_ACTIVE, product_no);
			let expectedPrice = await commonActions.safeGetText(`${tieredProductPrice}[${i}]`)
			await this.enterQty_usingProductNo(product_no, qty)
			await this.verifyPackagePrice(product_no, expectedPrice)
		}
	}

	async enterQty_usingProductNo(product_no, qty) {
		let qty_box_loc = await commonActions.dynamicLocator(tableViewLoc.QTY_BOX_PRODUCT_NO, product_no);
		await commonActions.setValue(qty_box_loc, qty, 'Quantity');
	}

	async verifyPackagePrice(product_no, expectedPackagePrice) {
		let packagePrice_loc = await commonActions.dynamicLocator(tableViewLoc.PRICE_PRODUCT_NO, product_no);
		let package_price = await commonActions.safeGetText(packagePrice_loc, 'Price of the package');
		await commonActions.safeAsserts('contains', expectedPackagePrice, 'Package Price', package_price);
	}

	async verifyOrderQtyErrorMessages(product_no, expected_error_msg) {
		let productQtyErrorLoc = await commonActions.dynamicLocator(tableViewLoc.ORDER_QTY_ERROR_MESSAGE, product_no);
		let actualErrorMessage = await commonActions.safeGetText(productQtyErrorLoc, 'Order Qty Error Message');
		await commonActions.safeAsserts('equal', actualErrorMessage, 'Order Qty Error Message', expected_error_msg);
	}

	async getMinMaxOrderQty(product_no) {
		let qtyBoxNo = await commonActions.dynamicLocator(tableViewLoc.QTY_BOX_PRODUCT_NO, product_no);
		await commonActions.safeClick(qtyBoxNo, 'Qty box')
		let minOrderQty = await commonActions.getAttribute(qtyBoxNo, 'min', 'Minimum Order Qty');
		let maxOrderQty = await commonActions.getAttribute(qtyBoxNo, 'max', 'Maximum Order Qty');
		return [minOrderQty, maxOrderQty]
	}

	async moqAddToCart(product_no) {
		let moqAddToCartButton = await commonActions.dynamicLocator(tableViewLoc.MOQ_ADD_TO_CART, product_no);
		await commonActions.safeVisibleClick(moqAddToCartButton, 'MOQ Add to cart');
	}


}


module.exports = new TableViewPage()
