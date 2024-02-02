'use strict';
let commonActions = require('../../../Utilities/CommonActions.js');
let orderHistory_Loc = require('../../Locator/Locator_Common/OrderHistory_Locator.js');
let getLanguageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile');
const commonPage_loc = require('../../Locator/Locator_Common/Common_Locators.js');
const OrderHistory_Locator = require('../../Locator/Locator_Common/OrderHistory_Locator.js');
let getLanguage = getLanguageFile.getLanguageFile();

class orderHistoryPage {

	//Verify Order History Page
	async verifyOrderHistoryPage(orderHistoryTitle) {
		await commonActions.elementIsNotDisplayed(orderHistory_Loc.LOADING_MASK, 'Loading mask');
		await commonActions.waitForVisible(orderHistory_Loc.ORDERHISTORY_TITLE, 'Order History title in Order History Page');
		let orderHistoryText = await commonActions.safeGetText(orderHistory_Loc.ORDERHISTORY_TITLE, 'Order History title in Order History Page');
		await commonActions.safeAsserts('equal', orderHistoryText, 'Order history didn\'t matched', orderHistoryTitle);
		let orderHistoryHome = await commonActions.safeGetText(orderHistory_Loc.ITEMS_HOME, 'Order History home in Order History Page');
		await commonActions.safeAsserts('equal', orderHistoryHome, 'Order history home didn\'t matched', orderHistoryTitle);
		await commonActions.setValue(orderHistory_Loc.ORDER_SEARCHBOX, '', 'Order Search box');
		await commonActions.browserKeys('Enter', 'Pressed Enter');
	}

	//Verify Tabs in Order History page
	async verifyOrderHistoryFilters(filterList) {
		let filtersTab = await commonActions.findListOfElements(orderHistory_Loc.ORDERHISTORY_FILTERS, 'Order history filters tab in order history page')
		if (filterList.length === filtersTab.length) {
			for (let i = 0; i < filtersTab.length; i++) {
				await commonActions.safeAsserts('contains', await commonActions.safeGetText(filtersTab[i], `${filterList[i]} tab in order history page`), `${filterList[i]} tab is not displayed in order history page`, filterList[i])
			}
		} else {
			await commonActions.safeAsserts('equal', filterList.length, 'Tabs length is not equal', filtersTab.length)
		}
	}

	//get Order id from list
	async getOrderIdFromOrderList() {
		await commonActions.waitForVisible(orderHistory_Loc.ORDERHEADER_LIST, 'Order ID lists')
		let orderID_Vis = await commonActions.safeIsVisible(orderHistory_Loc.ORDERHEADER_LIST, 'Order ID lists');
		if (orderID_Vis) {
			let orderID_Text = await commonActions.safeGetText(orderHistory_Loc.ORDERHEADER_LIST, 'Order Id from order history list at position');
			let orderID = (orderID_Text.split(getLanguage.orderHistoryPage.orderNumber))[1];
			return orderID.trim();
		} else {
			await commonActions.safeAsserts('true', orderID_Vis, 'Order is not displayed in the list in order history page');
		}
	}

	//Search Order using order search box
	async searchOrderUsingSearchBox(orderID) {
		await commonActions.waitForClickable(orderHistory_Loc.ORDER_SEARCHBOX, 'Order Search box');
		await commonActions.setValue(orderHistory_Loc.ORDER_SEARCHBOX, orderID, 'Order Search box');
		await commonActions.elementIsNotDisplayed(orderHistory_Loc.LOADING_MASK, 'Loading mask');
	}

	async verifyOrderMatchingText(orderID) {
		let orderMatchingText = await commonActions.safeGetText(orderHistory_Loc.SEARCHTERM_TEXT, '1 Order Matching text in order history page');
		await commonActions.safeAsserts('contains', orderMatchingText, 'Order matching text didn\'t matched', orderID.trim())
	}

	async verifyTheToolbarNumberAfterSorting(count) {
		let num = await commonActions.safeGetText(orderHistory_Loc.TOOLBAR_NUMBER, 'Toolbar number after searching in order history page');
		await commonActions.safeAsserts('equal', num, 'Toolbar number is not matched', `${count} Item`)
	}

	async verifyOrderDetails(orderID) {
		let totalOrder_loc = await commonActions.dynamicLocator(orderHistory_Loc.ORDERTOTAL, orderID)
		await commonActions.safeIsVisible(totalOrder_loc, 'Order Total for order in order history page')

		let po_loc = await commonActions.dynamicLocator(orderHistory_Loc.ORDER_PO, orderID)
		await commonActions.safeIsVisible(po_loc, 'PO for order in order history page')

		let ordered_loc = await browser.$(orderHistory_Loc.ORDER_ORDERED);
		const getText = await ordered_loc.getText();
		await expect(getText).to.contains(getLanguage.orderHistoryPage.ordered);

		let address_loc = await commonActions.dynamicLocator(orderHistory_Loc.ORDER_SHIPPINGADDRESS, orderID)
		let addressText = await commonActions.safeGetText(address_loc, 'Shipping address for order in order history page')
		await commonActions.safeAsserts('notNull', addressText, 'Shipping address of order is null');
	}

	async clickOnOrderDetailsButton(orderIndex) {
		await commonActions.waitForVisible(orderHistory_Loc.ORDER_DETAILS, 'Order Details Button');
		let orderDetailsButtonLocator = await commonActions.findListOfElements(orderHistory_Loc.ORDER_DETAILS, 'Order Detail Button');
		await commonActions.waitForVisible(orderDetailsButtonLocator[orderIndex], 'Order Details Button');
		await commonActions.safeJavaScriptClick(orderDetailsButtonLocator[orderIndex], 'Order Details Button');
		await commonActions.elementIsNotDisplayed(orderHistory_Loc.ORDER_DETAILS, 'Order Details button')
	}

	async clickReorderButton(orderIndex) {
		let reorderButton = await commonActions.dynamicLocator(orderHistory_Loc.OH_REORDER_BUTTON, orderIndex);
		await commonActions.safeClick(reorderButton, 'Reorder Button');
	}

	async getOrderTotal(orderNumber) {
		await commonActions.elementIsNotDisplayed(orderHistory_Loc.LOADING_MASK, 'Loading mask');
		await commonActions.waitForVisible(orderHistory_Loc.ORDER_TOTAL, 'Order total');
		let orderTotalDynamic = await commonActions.findListOfElements(orderHistory_Loc.ORDER_TOTAL, 'Order total');
		return await commonActions.safeGetText(orderTotalDynamic[orderNumber], 'Order Total');

	}

	async SearchBykeyword(search_keyword, locator) {
		let searchvalue = await commonActions.safeGetText(locator, search_keyword);
		let splittedvalue;
		switch (search_keyword) {
			case 'Order Number':
			case 'PO number':
				splittedvalue = (searchvalue.split('#'))[1];
				break;

			case 'SKU number':
				splittedvalue = (searchvalue.split(':'))[1];
				break;

			case 'Product Name':
				splittedvalue = searchvalue;
				break;
		}
		await commonActions.scrollTo(orderHistory_Loc.ORDER_SEARCHBOX, 'Order Search box');
		await commonActions.waitForClickable(orderHistory_Loc.ORDER_SEARCHBOX, 'Order Search box');
		await commonActions.setValue(orderHistory_Loc.ORDER_SEARCHBOX, splittedvalue.trim(), 'Order Search box');
		await commonActions.elementIsNotDisplayed(orderHistory_Loc.LOADING_MASK, 'Loading mask');
		let searchresult = await commonActions.safeGetText(locator, search_keyword);
		await commonActions.safeAsserts('contains', searchresult, search_keyword + ' is not matched', splittedvalue);
	}

	async ClickOnChemcare(chemcare_links) {
		await commonActions.elementIsNotDisplayed(orderHistory_Loc.LOADING_MASK, 'Loading mask');
		await commonActions.safeVisibleClick(orderHistory_Loc.OH_ORDER_TYPE, 'Order Type Dropdown ');
		await commonActions.safeVisibleClick(orderHistory_Loc.OH_CHEMCARE, 'Chem Care in Order Type Dropdown ');
		await commonActions.waitForVisible(orderHistory_Loc.OH_CHEMCARE_LINKS, 'Chemcare orders in Order history');
		let chemcareLink = await commonActions.safeGetText(orderHistory_Loc.OH_CHEMCARE_LINKS, 'Chemcare orders in Order History page');
		await commonActions.safeAsserts('contains', chemcareLink, 'Chemcare link is not matched', chemcare_links)
		await commonActions.safeAsserts('true', await commonActions.safeIsVisible(orderHistory_Loc.OH_CHEMCARE_LINKS, 'Chemcare orders in Order history page'), 'Assertion on Chemcare orders in order History page');
	}

	async ResetFilter() {
		await commonActions.safeVisibleClick(orderHistory_Loc.RESET_FILTER, 'Reset Filter');
	}


	async ClickOnChemicalIngredients(chemical_ingredients_links) {
		await commonActions.elementIsNotDisplayed(orderHistory_Loc.LOADING_MASK, 'Loading mask');
		await commonActions.safeVisibleClick(orderHistory_Loc.OH_ORDER_TYPE, 'Order Type Dropdown ');
		await commonActions.safeVisibleClick(orderHistory_Loc.OH_CHEMICAL_INGREDIENTS, 'Chemical Ingredients Order Type');
		await commonActions.waitForVisible(orderHistory_Loc.OH_CHEMICAL_INGREDIENTS_LINKS, 'Chemical Ingredients Orders in Order history');
		let chemicalIngredientsLink = await commonActions.safeGetText(orderHistory_Loc.OH_CHEMICAL_INGREDIENTS_LINKS, 'Chemical Ingredients order in Order History page');
		await commonActions.safeAsserts('contains', chemicalIngredientsLink, 'Chemical Ingredients link is not matched', chemical_ingredients_links);
		await commonActions.safeAsserts('true', await commonActions.safeIsVisible(orderHistory_Loc.OH_CHEMICAL_INGREDIENTS_LINKS, 'Chemical Ingredients orders in Order history'), 'Assertion on Chemical Inrgedients orders in order History page');
	}

	async getPONumber_OH(orderNumber) {
		let poNumberDynamic = await commonActions.dynamicLocator(orderHistory_Loc.ORDER_PO, orderNumber);
		return await commonActions.safeGetText(poNumberDynamic, 'PO Number');
	}

	async getOrderNumber(orderIndex) {
		let orderNumberDynamic = await commonActions.dynamicLocator(orderHistory_Loc.ORDER_DETAILS_ORDER_NO, orderIndex);
		return await commonActions.safeGetText(orderNumberDynamic, 'Order Number');
	}

	async getLengthOfOrders(orderNumber) {
		await commonActions.waitForVisible(orderHistory_Loc.ORDER_ITEM_SHIPMENT, 'Order Shipment Card')
		let listOfOrders = await commonActions.findListOfElements(orderHistory_Loc.ORDER_ITEM_SHIPMENT, 'Order Shipment Card');
		let listOfProducts = await listOfOrders[orderNumber].$$(orderHistory_Loc.ORDER_LINE_ITEM_NUMBER);
		return await listOfProducts.length;
	}

	async verifyInfoMessageReminderRibbon() {
		let blueRibbon = await commonActions.safeIsVisible(commonPage_loc.COMMON_PAYMENT_REMINDER_TEXT, 'Email reminder info message in Order history page');
		await commonActions.safeAsserts('true', blueRibbon, 'Email info reminder in Order history page');
		let infoMessageText = await commonActions.safeGetText(commonPage_loc.COMMON_PAYMENT_REMINDER_TEXT, 'Email reminder info message in Order history page')
		await commonActions.safeAsserts('contains', infoMessageText, 'Email info text in Order history page', getLanguage.commonInfoMessages.PaymentReminderInfoMessage);
	}

	async clickOnTurnOnEmailRemindersCTA() {
		await commonActions.waitForVisible(orderHistory_Loc.EMAIL_REMINDER_MESSAGE, 'Turn on email reminders')
		await commonActions.waitForClickable(orderHistory_Loc.EMAIL_REMINDER_MESSAGE, 'Turn on email reminders');
	}

	async clickShippingDocumentsLink() {
		await commonActions.safeVisibleClick(orderHistory_Loc.SHIPPING_DOCS_LINK, 'Invoice Link');
		await commonActions.waitForVisible(orderHistory_Loc.SHIPPING_DOCS_MODEL, 'Invoice Model');
	}

	async clickDocumentLink() {
		await commonActions.safeVisibleClick(orderHistory_Loc.INVOICE_PDF_LINK, 'Shipping Docs');
		await commonActions.getLatestWindow();
		await browser.pause(2000);
		await commonActions.elementIsNotDisplayed(orderHistory_Loc.CLOUDFLARE_LOADING_ICON, 'Cloudflare loading icon');
		await browser.saveScreenshot('./screenshot/invoice/' + process.env.REGION + '-' + `${new Date().getTime()}.png`);
	}

	async clickOrderHistoryTabs(orderTab) {
		await commonActions.scrollTo(orderTab, 'Clicking history tab');
		await commonActions.waitForClickable(orderTab, 'Clicking history tab');
		await commonActions.safeVisibleClick(orderTab, 'Clicking history tab');
		await commonActions.elementIsNotDisplayed(OrderHistory_Locator.LOADING_MASK, 'Loading mask');
	}

	async clickProductDocLink() {
		await commonActions.safeVisibleClick(orderHistory_Loc.PRODUCT_DOCS_LINK, 'Product Docs Link');
		await commonActions.safeVisibleClick(orderHistory_Loc.VIEW_SDS_LINK_IN_MODAL, 'SDS Link in Modal');
	}

	async closeProductDocModal() {
		await commonActions.safeVisibleClick(orderHistory_Loc.CLOSE_DOC_MODAL, 'Close Product Doc Modal');
		await commonActions.elementIsNotDisplayed(orderHistory_Loc.LOADING_MASK, 'Loading mask');

	}

	async verifyAtLeastOneOrderIsAppearing() {
		await commonActions.elementIsNotDisplayed(orderHistory_Loc.LOADING_MASK, 'Loading mask');
		await commonActions.waitForVisible(orderHistory_Loc.ORDER_ITEM_SHIPMENT, 'Product Ordered');
	}

}

module.exports = new orderHistoryPage();
