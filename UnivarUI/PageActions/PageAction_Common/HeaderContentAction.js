let commonActions = require('../../../Utilities/CommonActions.js');
const headerContent_Locator = require('../../Locator/Locator_Common/HeaderContent_Locator.js');
let languageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile.js').getLanguageFile();
let contactUsPage = require('../PageAction_Common/ContactUsPage.js');
let invoicesPage = require('../PageAction_Common/InvoicesPage.js');
let ordersPage = require('../PageAction_Common/OrderHistoryPage.js');
let setUpAutoPayLoc = require('../../Locator/Locator_Common/SetupAutoPay_Locators');
let safeAction = require('../../../Utilities/CommonActions');

class HeaderContentAction {
	async enterQueryInSearchBoxAndClickSearchButton(query) {
		await commonActions.setValue(headerContent_Locator.SEARCH_BOX, query, 'Entered query in search box');
		await commonActions.browserKeys('Enter', 'Clicked enter key');
	}

	async clickOnCartIcon() {
		await commonActions.safeVisibleClick(headerContent_Locator.CART_ICON, 'Cart Icon');
	}

	async verifyMiniCartItemCount(qty) {
		qty = parseInt(qty);
		await commonActions.waitForVisible(headerContent_Locator.CART_QUANTITY, 'Quantity in mini cart');
		let miniCartQty = await commonActions.safeGetText(headerContent_Locator.CART_QUANTITY, 'Quantity in Mini cart');
		await expect(qty, 'qty in mini cart').to.be.equal(parseInt(miniCartQty));
		await this.closeMiniCartTray();
	}

	async verifyMiniCartLineItems(qty) {
		await commonActions.waitForVisible(headerContent_Locator.MINICART_LINE_ITEMS, 'Mini cart line items');
		let miniCartQty = await commonActions.findElements(headerContent_Locator.MINICART_LINE_ITEMS, 'Mini cart line items');
		await expect(qty, 'MiniCart Line Items').to.be.equal(miniCartQty.length);
		await this.closeMiniCartTray();
	}

	async verifyActiveRegionAndLanguage(region) {
		let countryName;
		let language;
		let selectedRegion = await commonActions.safeGetText(headerContent_Locator.SELECTED_REGION, 'Selected Region');
		let selectedLanguage = await commonActions.safeGetText(headerContent_Locator.SELECTED_LANGUAGE, 'Selected Language');
		switch (region) {
			case 'US':
				countryName = 'United States';
				language = 'English';
				break;
			case 'CA_EN':
				countryName = 'Canada';
				language = 'English'
				break;
			case 'CA_FR':
				countryName = 'Canada';
				language = 'Français';
				break;
			case 'UK':
				countryName = 'United Kingdom';
				language = 'English';
				break;
			case 'IE':
				countryName = 'IE/NI';
				language = 'English';
				break;
			case 'DK':
				countryName = 'Denmark';
				language = 'English';
				break;
			case 'FI':
				countryName = 'Finland';
				language = 'English';
				break;
			case 'FR':
				countryName = 'France';
				language = 'Français';
				break;
			case 'NO':
				countryName = 'Norway';
				language = 'English';
				break;
			case 'SE':
				countryName = 'Sweden';
				language = 'English';
				break;
			case 'BE_NL':
				countryName = 'België';
				language = 'Nederlands';
				break;
			case 'BE_FR':
				countryName = 'Belgique';
				language = 'Français';
				break;
			case 'IT':
				countryName = 'Italy';
				language = 'Italiano';
				break;
			case 'ES':
				countryName = 'Spain';
				language = 'Español';
				break;

			case 'MX':
				countryName = 'Mexico';
				language = 'Español';
				break;

			case 'NL':
				countryName = 'Nederland (CO)';
				language = 'Nederlands';
				break;

			case 'NL_BE':
				countryName = 'Nederland (SP)';
				language = 'Nederlands';
				break;

			default:
				console.log('Please select a Region to be validate. Also verify region is a possible case')
		}
		await expect(countryName, ' Selected Region').to.be.equals(selectedRegion);
		await expect(language, 'Selected Language').to.be.equals(selectedLanguage);

	}

	async clickOnRegionalFlagOnHeader() {
		await commonActions.safeVisibleClick(headerContent_Locator.REGION_SELECTOR, 'Region Selector');
		let headerText = await commonActions.waitForVisible(headerContent_Locator.REGION_SELECTOR_HEADING, 'Regional Selector Heading');
		await expect(headerText, 'Header Text').to.be.true;

	}

	async verifyCountryAndLanguage(allRegionArray) {
		let allRegionList = await commonActions.findElements(headerContent_Locator.ALL_REGIONS, 'All Regions');
		let allLanguageList = await commonActions.findElements(headerContent_Locator.ALL_LANGUAGES, 'All Languages');

		if (allRegionList.length === allRegionArray.length) {
			for (let i = 0; i < allRegionArray.length; i++) {
				let regionName = await commonActions.safeGetText(allRegionList[i], 'Region name at index ' + i);
				await expect(allRegionArray[i][0], 'Region name is not matched at index ' + i + ' Expected ' + allRegionArray[i][0] + ' Actual ' + regionName).to.be.equals(regionName);
				let language = await commonActions.safeGetText(allLanguageList[i], 'Language Name at index ' + i);
				await expect(allRegionArray[i][1], 'Language name is not matched at index ' + i + ' Expected ' + allRegionArray[i][0] + ' Actual ' + language).to.be.equals(language)
			}
		} else {
			await assert.fail(`Please mention all country name Expected length- ${allRegionArray.length}  Actual length- ${allRegionList.length}`)
		}
	}

	async clickOnSearchBox() {
		await commonActions.safeVisibleClick(headerContent_Locator.SEARCH_BOX, 'Search Box');
	}

	async verifyPopularSearchesText(verification) {
		let popularSearch = await commonActions.waitForVisible(headerContent_Locator.POPULAR_SEARCHES, 'Popular Searches Title');
		await commonActions.safeAsserts(verification, popularSearch, 'Popular Searches Title');
	}

	async verifyPopularSearchListLength(length) {
		length = parseInt(length);
		let popularSearchList = await commonActions.findListOfElements(headerContent_Locator.POPULAR_SEARCES_LIST, 'Popular Searches List');
		await commonActions.safeAsserts('lessthanorequal', popularSearchList.length, 'Popular Searches List', length);
	}

	async verifyRecentSearches(verification) {
		let recentSearch = await commonActions.safeIsVisible(headerContent_Locator.RECENT_SEARCHES, 'Recent Searches');
		await commonActions.safeAsserts(verification, recentSearch, 'Recent Searches Title');
	}

	async verifyRecentSearchesListLength(length) {
		length = parseInt(length)
		let recentSearchList = await commonActions.findElements(headerContent_Locator.RECENT_SEARCHES_LIST, 'Recent Searches List');
		await commonActions.safeAsserts('equal', recentSearchList.length, 'Recent Searches List', length);
	}

	async clickOnCloseIconSearchBar() {
		await commonActions.safeVisibleClick(headerContent_Locator.CLOSE_BUTTON, 'X button on search bar');
	}

	async verifySearchBoxPlaceHolder(placeHolderText_) {
		let placeHolderText = await commonActions.getAttribute(headerContent_Locator.SEARCH_BOX, 'placeholder', 'Search Product Name, Material No. or Keyword placeholder');
		await commonActions.safeAsserts('equal', placeHolderText, 'Place Holder text', placeHolderText_);
	}

	async clickOnHeaderContentBar() {
		await commonActions.safeJavaScriptClick(headerContent_Locator.HEADER_BAR, 'header content bar');
	}

	async enterQueryInSearchBox(query) {
		this.clickOnSearchBox()
		await commonActions.setValue(headerContent_Locator.SEARCH_BOX, query, 'Entered query in search box');
		await commonActions.elementIsNotDisplayed(headerContent_Locator.SEARCH_LOADING_ICON, 'Loading Icon');
	}

	async verifyPopularSearchesTitleWithEnteringPartialQuery(query) {
		this.enterQueryInSearchBox(query);
		await commonActions.elementIsNotDisplayed(headerContent_Locator.SEARCH_LOADING_ICON, 'Loading Icon');
		await commonActions.waitForVisible(headerContent_Locator.POPULAR_SEARCES_LIST, 'Popular Search List')
		let popularSearchList = await commonActions.waitForVisible(headerContent_Locator.POPULAR_SEARCES_LIST, 'Popular Searches List');
		for (let i = 0; i < popularSearchList.length; i++) {
			let popularSearchRec = await commonActions.safeGetText(popularSearchList[i], 'Popular Searches based on Partial Query');
			await commonActions.safeAsserts('contains', popularSearchRec.toLowerCase(), 'Popular Searches based on Partial Query', query.toLowerCase());
		}
	}

	async verifyAllProductsList(query) {
		await commonActions.elementIsNotDisplayed(headerContent_Locator.SEARCH_LOADING_ICON, 'Loading Icon');
		let caps = query.toUpperCase();
		let small = query.toLowerCase();
		let camelCase = (small.substring(0, 1)).toUpperCase() + (small.substring(1));
		let allProductsList = await commonActions.findListOfElements(headerContent_Locator.ALL_PRODUCTS_LIST, 'All Products List');
		//Getting product number list
		let numberlist = await commonActions.findListOfElements(headerContent_Locator.PRODUCT_NUMBER_EMPTY, 'Product Number under all products');
		for (let i = 0; i < allProductsList.length; i++) {
			let productNumber_vis = await commonActions.safeIsVisible(numberlist[i], '');
			await commonActions.safeAsserts('true', productNumber_vis, `${numberlist[i]} is not found  at index ${i}`)
			let allProducts = await commonActions.safeGetText(allProductsList[i], 'All Products based on Partial Query');

			if (allProducts.includes(caps)) {
				await commonActions.safeAsserts('contains', allProducts, 'All Products based on Partial Query', caps);
			} else if (allProducts.includes(camelCase)) {
				await commonActions.safeAsserts('contains', allProducts, 'All Products based on Partial Query', camelCase);
			} else if (allProducts.includes(small)) {
				await commonActions.safeAsserts('contains', allProducts, 'All Products based on Partial Query', small);
			} else {
				await assert.fail(`${query} is not found in ${allProducts} at index ${i}`)
			}
		}
	}

	async verifyAllProductsListLength(length) {
		length = parseInt(length);
		let allProductsList = await commonActions.findListOfElements(headerContent_Locator.ALL_PRODUCTS_LIST, 'All Products List');
		await commonActions.safeAsserts('lessthanorequal', allProductsList.length, 'All Products List', length);
	}

	async verifyCategoriesTitle(verification) {
		let categoryTitle = await commonActions.waitForVisible(headerContent_Locator.CATEGORIES_TITLE, 'Categories Title in autocomplete window');
		await commonActions.safeAsserts(verification, categoryTitle, 'Categories Title in autocomplete window');
	}

	async verifyCategoriesListLength(length) {
		length = parseInt(length);
		let categoriesList = await commonActions.findListOfElements(headerContent_Locator.CATEGORIES_LIST, 'Categories list in autocomplete window');
		await expect(categoriesList.length).to.be.least(length);
	}


	async verifyAllProductsInAutoCompleteWindow(lengthOfList) {
		let quotedProductsText = languageFile.autoCompletWindow.QuotedProducts;
		let allProductsText = languageFile.autoCompletWindow.AllProducts;
		await commonActions.waitForVisible((headerContent_Locator.ALL_PRODUCTS_LIST).replace('%s', allProductsText), 'All Products List')
		let quotedProductList;
		let quotedProductSec;
		let quotedproductlength = 0;
		let allProductList = await commonActions.findListOfElements((headerContent_Locator.ALL_PRODUCTS_LIST).replace('%s', allProductsText));
		let allProductLength = await allProductList.length;
		let quotedProductSec_loc = (headerContent_Locator.PRODUCT_LIST).replace('%s', quotedProductsText);

		let quotedProduct_Vis = await commonActions.safeIsVisible((headerContent_Locator.QUOTED_PRODUCTS).replace('%s', quotedProductsText));
		if (quotedProduct_Vis) {
			quotedProductList = await commonActions.findElements((headerContent_Locator.QUOTED_PRODUCTS_LIST).replace('%s', quotedProductsText));
			quotedproductlength = await quotedProductList.length;
			lengthOfList = parseInt(lengthOfList) - 1;
		}

		let total = (allProductLength) + quotedproductlength;
		await commonActions.safeAsserts('greaterThanOrEqual', total, 'Atleast One Product Is displayed', 1)
		if (total <= parseInt(lengthOfList)) {
			if (quotedProduct_Vis) {
				for (let i = 1; i <= quotedproductlength; i++) {
					quotedProductSec = quotedProductSec_loc.replace('%t', i);
					let addToCart_Loc = `${quotedProductSec}${headerContent_Locator.ADDTOCART_AUTO}`
					let addToCartVis = await commonActions.safeIsVisible(addToCart_Loc, `Add To Cart button in Quoted Products at index ${i}`);
					await commonActions.safeAsserts('true', addToCartVis, `Add To Cart button in Quoted Products at index ${i}`)
					//Price
					let price_Loc = `${quotedProductSec}${headerContent_Locator.PRICE_AUTO}`
					await commonActions.safeAsserts('true', await commonActions.safeIsVisible(price_Loc, `Price in Quoted Products at index ${i}`), `Price in Quoted Products at index ${i}`)
				}
			} else {
			}

			//All products
			let allProductSec;
			let count = 0;
			let allProduct_Loc = (headerContent_Locator.PRODUCT_LIST).replace('%s', 'All Products');
			for (let j = 1; j <= allProductLength; j++) {
				allProductSec = allProduct_Loc.replace('%t', j);
				let addToCart_All_Loc = `${allProductSec}${headerContent_Locator.ADDTOCART_AUTO}`;
				let addToCart_All_Vis = await commonActions.safeIsVisible(addToCart_All_Loc, `Add to Cart at index ${j} in Auto Complete Window`)
				let price_All_Loc = `${allProductSec}${headerContent_Locator.PRICE_AUTO}`;
				let price_All_Vis = await commonActions.safeIsVisible(price_All_Loc, `Price at index ${j} in Auto Complete Window`)

				if (addToCart_All_Vis || price_All_Vis) {
					await commonActions.safeAsserts('true', addToCart_All_Vis, `Add to Cart at index ${j} in Auto Complete Window`);
					await commonActions.safeAsserts('true', price_All_Vis, `Price at index ${j} in Auto Complete Window`);
					count++;
				}
			}
		} else {
			await commonActions.safeAsserts('false', true, `total length is not matched ${total}`)
		}
	}

	async verifyNoResultsFound() {
		await commonActions.waitForVisible(headerContent_Locator.NO_RESULTS_FOUND, 'No Results Found');
	}
	async navigateToPersonalHomepage() {
		await safeAction.safeVisibleClick(setUpAutoPayLoc.UNIVAR_LOGO, 'Click on Univar Logo in Manage Autopay Page');
		await safeAction.safeVisibleClick(headerContent_Locator.MY_ACCOUNT_DROPDOWN, 'Click on My Account dropdown in Manage Autopay Page');
		await safeAction.waitForVisible(headerContent_Locator.ACCOUNT_OVERVIEW, 'Account Overview on My Account Dropdown');
		await safeAction.safeVisibleClick(headerContent_Locator.ACCOUNT_OVERVIEW, 'Click on Account Overview on My Account Dropdown');
	}
	async clickSearchIcon() {
		await commonActions.safeVisibleClick(headerContent_Locator.SEARCH_ICON, 'Search Icon');
	}

	//Pages
	async verifyPagesTitle(verification) {
		await commonActions.elementIsNotDisplayed(headerContent_Locator.SEARCH_LOADING_ICON, 'Loading Icon');
		let pagesTitle = await commonActions.waitForVisible(headerContent_Locator.PAGES_TITLE, 'Pages Title in Auto Complete Window');
		await commonActions.safeAsserts(verification, pagesTitle, 'Pages Title In Autocomplete Window');
	}

	async verifyPagesList(length) {
		length = parseInt(length);
		let pagesList = await commonActions.safeIsVisible(headerContent_Locator.PAGES_LIST, 'Pages List in Auto Complete Window');
		await commonActions.safeAsserts('Actual', pagesList, 'Pages List in Auto Complete Window', length);
	}

	//copy
	async verifyPopularSearchListMinLength(length) {
		length = parseInt(length);
		let popularSearchList = await commonActions.findListOfElements(headerContent_Locator.POPULAR_SEARCES_LIST, 'Popular Searches List');
		await commonActions.safeAsserts('greaterThanOrEqual', popularSearchList.length, 'Popular Searches List', length);
	}

	async verifyProductCategories() {
		let categoriesLink = await commonActions.dynamicLocator(headerContent_Locator.MENU_LINK, 'Product Categories');
		let allCategories = await commonActions.findElements(categoriesLink, 'Product Categories link');
	}

	async mouseHoverProductCategoriesLink() {
		// browser.elementHover('//span[@class='ui-menu-icon ui-icon ui-icon-carat-1-e']/following-sibling::span[contains(text(),'Product Categories')]')
		await commonActions.hoverTo(headerContent_Locator.productCategory, '')

	}

	async verifyMyAccountDropdown(myAccountList_) {
		await commonActions.waitForClickable(headerContent_Locator.MY_ACCOUNT_DROPDOWN, 'My Account Dropdown');
		await commonActions.safeVisibleClick(headerContent_Locator.MY_ACCOUNT_DROPDOWN, 'My Account Dropdown');
		let myAccList = await commonActions.findElements(headerContent_Locator.MY_ACCOUNT_DROPDOWN_VALUES_LIST, 'My Account Dropdown');
		await commonActions.safeAsserts('equal', myAccList.length, 'My Account List', myAccountList_.length);
		let listName = [];
		for (let i = 0; i < myAccList.length; i++) {
			let myAccValues = await commonActions.safeGetText(myAccList[i], 'My Account Dropdown at index' + i);
			listName.push(myAccValues);
		}
		await commonActions.safeAsserts('deepEqual', myAccountList_.sort(), 'my Account List', listName.sort())
	}

	async getMyAccountList() {
		let myAccountList;
		switch (process.env.REGION) {
			case 'US':
			case 'CA_FR':
			case 'CA_EN': {
				myAccountList = [languageFile.myAccount.accountOverview, languageFile.myAccount.orders, languageFile.myAccount.invoices, languageFile.myAccount.notifications, languageFile.myAccount.addressBook, languageFile.myAccount.profile, languageFile.myAccount.signOut];
				break;
			}
			case 'UK':
			case 'FI':
			case 'IE':
			case 'DK':
			case 'SE':
			case 'NO': {
				myAccountList = [languageFile.myAccount.accountOverview, languageFile.myAccount.orders, languageFile.myAccount.invoices, languageFile.myAccount.notifications, languageFile.myAccount.addressBook, languageFile.myAccount.profile, languageFile.myAccount.privacySettings, languageFile.myAccount.signOut];
				break;
			}
			case 'MX': {
				myAccountList = [languageFile.myAccount.accountOverview, languageFile.myAccount.orders, languageFile.myAccount.addressBook, languageFile.myAccount.profile, languageFile.myAccount.signOut];
				break;
			}

			default: {
				myAccountList = [languageFile.myAccount.accountOverview, languageFile.myAccount.orders, languageFile.myAccount.invoices, languageFile.myAccount.addressBook, languageFile.myAccount.profile, languageFile.myAccount.privacySettings, languageFile.myAccount.signOut];
				break;
			}
		}
		return myAccountList;
	}

	async clickOnMYAccountDropdown() {
		await commonActions.safeVisibleClick(headerContent_Locator.MY_ACCOUNT_DROPDOWN, 'My Account Dropdown');
		return this;

	}

	async clickOnInvoicesLink() {
		let invoice_loc = await commonActions.dynamicLocator(headerContent_Locator.MY_ACCOUNT_OPTIONS, languageFile.myAccount.invoices);
		await commonActions.safeVisibleClick(invoice_loc, 'My Account Dropdown options');
	}

	async clickOnContactUsCTA() {
		await commonActions.safeVisibleClick(headerContent_Locator.CONTACT_US_CTA_HEADER, 'Contact Us CTA');
		return contactUsPage;
	}

	async clickOnInvoicesCTA() {
		await commonActions.safeVisibleClick(headerContent_Locator.INVOICES_CTA, 'Invoices Link on the Header');
		return invoicesPage;
	}

	async clickOnOrdersCTA() {
		await commonActions.safeVisibleClick(headerContent_Locator.ORDERS_CTA, 'Orders Link on the Header');
		return ordersPage;
	}

	async closeMiniCartTray() {
		await commonActions.waitForClickable(headerContent_Locator.MINICART_CLOSE_X, 'Close mini cart tray');
		await commonActions.safeClick(headerContent_Locator.MINICART_CLOSE_X, 'X out mini cart tray');
		await commonActions.elementIsNotDisplayed(headerContent_Locator.MINICART_CLOSE_X, 'X out mini cart tray');
	}

	async getMiniCartLineItems() {
		await commonActions.pause(10000)
		let miniCartQty = await commonActions.findElements(headerContent_Locator.MINICART_LINE_ITEMS, 'Mini cart line items');
		return miniCartQty.length;
	}

	async validateRegionsURL() {
		const listOfURLS = await commonActions.findListOfElements(headerContent_Locator.REGION_STORE_URLS);
		for (const regionUrl of listOfURLS) {
			const href = await regionUrl.getAttribute('href');
			if ((process.env.ENV === 'QA' || process.env.ENV === 'DEV') && !href.includes('discover')) {
				await commonActions.safeAsserts('notContain', href, 'Contact Us Form Header', 'https://www.univarsolutions');
			} else {
				await commonActions.safeAsserts('notContain', href, 'Contact Us Form Header', 'shop-');
			}
		}
	}

	async clickPrivacySettings() {
		await commonActions.safeClick(headerContent_Locator.PRIVACY_SETTINGS_CTA, 'Privacy Settings');
		await commonActions.elementIsNotDisplayed(headerContent_Locator.PRIVACY_SETTINGS_CTA);
	}

	async clickLogout() {
		await commonActions.safeClick(headerContent_Locator.SIGN_OUT, 'Logout');
		await commonActions.elementIsNotDisplayed(headerContent_Locator.SIGN_OUT);
	}

	async clickAccountOverview() {
		await commonActions.safeClick(headerContent_Locator.ACCOUNT_OVERVIEW, 'Account Overviews');
		await commonActions.elementIsNotDisplayed(headerContent_Locator.ACCOUNT_OVERVIEW);
	}

	async clickOnAddressBookDropDown() {
		await commonActions.safeClick(headerContent_Locator.ADDRESS_BOOK_DROPDOWN, 'Address Book');
	}

	async clickNotificationIcon() {
		if (process.env.REGION === 'US' || process.env.REGION === 'CA_EN' || process.env.REGION === 'CA_FR' || process.env.REGION === 'UK' || process.env.REGION === 'SE' || process.env.REGION === 'IE' || process.env.REGION === 'DK' || process.env.REGION === 'NO' || process.env.REGION === 'FI'){
		await commonActions.waitForClickable(headerContent_Locator.NOTIFICATION_BELL_ICOON, 'Notification Icon');
		await commonActions.safeClick(headerContent_Locator.NOTIFICATION_BELL_ICOON, 'Notification Icon');
		} else {
			await commonActions.elementIsNotDisplayed(headerContent_Locator.NOTIFICATION_BELL_ICOON);
		}
	}

	async validateNotificationFlyout() {
		if (process.env.REGION === 'US' || process.env.REGION === 'CA_EN' || process.env.REGION === 'CA_FR') {
			await commonActions.waitForVisible(headerContent_Locator.NOTIFICATION_LIST, 'List of notification');
			await commonActions.waitForClickable(headerContent_Locator.GO_TO_NOTIFICATION_CENTER_BTN, 'Go to Notification Center Button');
			await commonActions.waitForClickable(headerContent_Locator.MARK_AS_READ, 'Mark a Read');
		}
	}

}
module.exports = new HeaderContentAction();
