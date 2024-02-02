let commonActions = require('../../../Utilities/CommonActions.js');
let searchResultsPage_Locator = require('../../Locator/Locator_Common/SearchResultsPage_Locator.js');
let getLanguageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile');
const signInPage_loc = require('../../Locator/Locator_Common/SignInPage_Locator');
const ProductCatalog_LOC = require('../../Locator/Locator_Common/ProductCatlogPage_Locator');

let getLanguage = getLanguageFile.getLanguageFile();

class SearchResultsPage {
	/**
	 * Verify Search Results Page
	 */
	async verifyProductNumber(productNumber) {
		let productNum_loc = (searchResultsPage_Locator.PRODUCT_NUMBER_DYNAMIC).replace('%s', productNumber);
		let productVis = await commonActions.safeIsVisible(productNum_loc, 'Product Number on SERP');
		await expect(productVis, 'Product number on SERP').to.be.true;
	}

	/*
	Verify webPrice
	 */
	async verifyWebPriceTag() {
		let webPriceTag = await commonActions.safeIsVisible(searchResultsPage_Locator.WEB_PRICE_TAG, 'Web Price Bubble');
		await expect(webPriceTag, 'Web Price Bubble').to.be.true;
	}

	async verifyProductQty(actualQty) {
		let defaultQty = await commonActions.getAttribute(searchResultsPage_Locator.QUANTITY_BOX, 'value', 'Default qty');
		await expect(defaultQty, 'default Qty').to.be.equal(String(actualQty));
	}

	async verifyItemCount(totalItemCount) {
		let itemCount = await commonActions.safeGetText(searchResultsPage_Locator.ITEM_COUNT, 'Total Items on the page');
		await expect(itemCount, 'Total Items on the Page').to.be.contains(String(totalItemCount));
	}

	async clickAddToCartButton(productNumber) {
		let addToCartButton_Locator = (searchResultsPage_Locator.ADD_TO_CART_DYNAMIC).replace('%s', productNumber);
		await commonActions.safeVisibleClick(addToCartButton_Locator, 'Add To Cart Button');
	}

	async getProductNameWithNumber(productNumber) {
		let productName_Locator = (searchResultsPage_Locator.PRODUCT_NAME_WITH_NUMBER).replace('%s', productNumber);
		let productName = await commonActions.safeGetText(productName_Locator, 'Product Name with Number');
		return productName
	}

	async getProductPrice(productNumber) {
		let productPrice_Locator = (searchResultsPage_Locator.PRODUCT_PRICE_DYNAMIC).replace('%s', productNumber);
		let productPrice = await commonActions.safeGetText(productPrice_Locator, 'Product Price');
		return productPrice
	}

	async verifyProductDetailsMiniCart(miniCartProductName, completeProductPrice, quantity) {
		let productAmt;
		let productName = await commonActions.safeGetText(searchResultsPage_Locator.PRODUCT_NAME_IN_MINICART, 'Product Name in Mini Cart');
		await expect(productName, 'Product Name in Minicart').to.be.equal(miniCartProductName);
		completeProductPrice = completeProductPrice.replace(/,/g, '');
		if(process.env.REGION === 'CA_FR') {
			productAmt = parseFloat(((((completeProductPrice.split(getLanguage.productInfo.productPrice))[0]).split(' '))[0]));
		} else {
			productAmt = parseFloat(((((completeProductPrice.split(getLanguage.productInfo.productPrice))[1]).split(' '))[0])).toFixed(2);
		}
		let miniCartPrice = await commonActions.safeGetText(searchResultsPage_Locator.PRODUCT_PRICE_IN_MINICART, 'Product price in mini cart');
		miniCartPrice = miniCartPrice.replace(/,/g, '');
		await expect(miniCartPrice, 'mini cart price').to.be.contains(productAmt)
		let subTotal = productAmt * parseInt(quantity);
		let miniCartSubtotal = await commonActions.safeGetText(searchResultsPage_Locator.MINICART_SUBTOTAL, 'Mini Cart Sub Total');
		miniCartSubtotal = miniCartSubtotal.replace(/,/g, '');
		await expect(miniCartSubtotal, ' mini cart sub total').to.contains(subTotal);
	}

	async clickOnCheckoutButton() {
		await commonActions.waitForVisible(searchResultsPage_Locator.CHECKOUT_BUTTON_MINICART, 'Check Out Button');
		await commonActions.safeVisibleClick(searchResultsPage_Locator.CHECKOUT_BUTTON_MINICART, 'Check Out Button');
		await commonActions.elementIsNotDisplayed(searchResultsPage_Locator.CHECKOUT_BUTTON_MINICART, 'Check Out Button');
	}

	async verifyNoSearchResults() {
		await commonActions.elementIsNotDisplayed(searchResultsPage_Locator.SEARCH_RESULTS);
	}

	async verifySearchResultsTabsIsDisplayed() {
		await commonActions.waitForVisible(searchResultsPage_Locator.ALL_PRODUCTS_TAB, 'All Products Tab');
		await commonActions.waitForVisible(searchResultsPage_Locator.CATEGORIES_TAB, 'Categories Tab');
	}

	async verifyFilterIsDisplayed() {
		await commonActions.waitForVisible(searchResultsPage_Locator.FILTERS, 'Filters');
	}

	async verifyRelatedSearchTermIsDisplayed() {
		await commonActions.waitForVisible(searchResultsPage_Locator.RELATED_SEARCH_TERMS, 'Related Search Terms');
	}

	async verifyRelatedSearchTermLink() {
		await commonActions.waitForVisible(searchResultsPage_Locator.SEARCH_TERM_LINK, 'Related Search Terms Link');
	}

	async selectTheFirstFilter() {
		let listOfFilterTabs = await commonActions.findListOfElements(searchResultsPage_Locator.FILTER_TABS);
		await commonActions.waitForClickable(listOfFilterTabs[0], 'First Filter Tab');
		await commonActions.safeVisibleClick(listOfFilterTabs[0], 'First Filter Tab');
		await commonActions.waitForClickable(searchResultsPage_Locator.FILTER_CHECKBOX, 'First Filter Tab');
		await commonActions.safeVisibleClick(searchResultsPage_Locator.FILTER_CHECKBOX, 'Filter Checkbox');
	}

	async verifySelectFilterIsDisplayed() {
		await commonActions.waitForVisible(searchResultsPage_Locator.SELECTED_FILTER, 'Selected Filter');
	}

	async resetFilters() {
		await commonActions.safeVisibleClick(searchResultsPage_Locator.RESET_FILTERS, 'Reset Filter');
		await commonActions.elementIsNotDisplayed(searchResultsPage_Locator.SELECTED_FILTER);
	}

	async clickCategoriesTab() {
		await commonActions.safeVisibleClick(searchResultsPage_Locator.CATEGORIES_TAB, 'Categories Tab');
		await commonActions.waitForVisible(searchResultsPage_Locator.CATEGORIES_CONTAINER, 'Categories Container');
	}

	async verifyCategoriesContent() {
		await commonActions.waitForVisible(searchResultsPage_Locator.CATEGORIES_CONTENT, 'Categories Content');
	}

	async filtersIsNotDisplayed() {
		await commonActions.elementIsNotDisplayed(searchResultsPage_Locator.FILTERS);
	}

	async verifyNoResultsMessage(message) {
		let noResultsText = await commonActions.safeGetText(searchResultsPage_Locator.NO_RESULTS_TITLE, 'No Results');
		await commonActions.safeAsserts('contains', noResultsText, 'No Results', message);
	}

	async verifyEmptyResultsContent() {
		await commonActions.waitForVisible(searchResultsPage_Locator.EMPTY_RESULTS_CONTENT, 'Empty Search Results Content');
	}

	async verifyContactUsEmail() {
		let emailLink = await commonActions.getAttribute(searchResultsPage_Locator.EMAIL_CONTACT_LINK, 'href', 'Email Link');
		if (process.env.ENV === 'PROD') {
			await commonActions.safeAsserts('equal', emailLink, 'Email Link', 'digitalcs@univarsolutions.com');
		} else {
			await commonActions.safeAsserts('equal', emailLink, 'Email Link', 'mailto:test_env_shared@univarsolutions.com');
		}
	}

	async clickSDSLinkOnSRP(productNo) {
		let SDS_loc = await commonActions.dynamicLocator(searchResultsPage_Locator.SDS_LINK, productNo)
		await commonActions.safeVisibleClick(SDS_loc, 'SDS Link');
	}

	async verifyAndSubmitMissingSDSForm(missingSDSTitle, fName, lName, email) {
		await commonActions.waitForVisible(searchResultsPage_Locator.SUBMIT, 'SDS Modal');
		await commonActions.waitForClickable(searchResultsPage_Locator.SDS_MODAL, 'Submit Button')
		let titleText = await commonActions.safeGetText(searchResultsPage_Locator.MISSING_SDS_TITLE, 'Missing SDS Title')
		await commonActions.safeAsserts('equal', titleText.trim(), 'Missing SDS title', missingSDSTitle);
		await commonActions.setValue(searchResultsPage_Locator.FIRST_NAME, fName, 'First Name');
		await commonActions.setValue(searchResultsPage_Locator.LAST_NAME, lName, 'Last Name');
		await commonActions.setValue(searchResultsPage_Locator.EMAIL, email, 'Email');
		await commonActions.safeVisibleClick(searchResultsPage_Locator.SUBMIT, 'Submit Form');
	}

	async verifyUOMonSRP(){
		await commonActions.waitForVisible(searchResultsPage_Locator.PRICE_UOM, 'UOM for Web Price item');
	}


}

module.exports = new SearchResultsPage();
