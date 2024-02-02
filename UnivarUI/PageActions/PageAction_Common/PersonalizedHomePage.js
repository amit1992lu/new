let commonActions = require('../../../Utilities/CommonActions.js');
let personalizedHomePage_loc = require('../../Locator/Locator_Common/PersonalizedHomePage_Locator.js');
let commonPage_loc = require('../../Locator/Locator_Common/Common_Locators.js')

let orderHistoryPage = require('.//OrderHistoryPage.js');
const orderHistory_Loc = require('../../Locator/Locator_Common/OrderHistory_Locator');
const TestCaseData = require('../../TestData/TestLevelData/TestCaseData.js');
let langFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile.js').getLanguageFile();

class PersonalizedHomePage {

	//Verify Personalized page gets loaded
	async verifyPersonalizedHomePage() {
		await commonActions.domStatus();
		await commonActions.waitForVisible(personalizedHomePage_loc.ORDERS_LINK, 'Orders Link in personalized home page');
		await commonActions.waitForVisible(personalizedHomePage_loc.MYACCOUNT_BTN, 'My Account in personalized home page');
		await commonActions.waitForVisible(personalizedHomePage_loc.ACCOUNT_USERNAME, 'Username in Personalized home page');

	}

	//Verify And Click on Order history link
	async verifyAndClickOnOrderHistoryLink() {
		await commonActions.waitForVisible(personalizedHomePage_loc.ORDERHISTORY_LINK, 'Order history link');
		let rightArrow = await commonActions.safeIsVisible(personalizedHomePage_loc.ORDERHISTORY_RIGHTARROW, 'Right arrow in order history tab');
		await commonActions.safeAsserts('true', rightArrow, 'Right arrow in personalized home screen is not displayed');
		await commonActions.waitForClickable(personalizedHomePage_loc.ORDERHISTORY_LINK, 'Order History Link');
		await commonActions.safeVisibleClick(personalizedHomePage_loc.ORDERHISTORY_LINK, 'Order History link in personalized home page');
		return orderHistoryPage;
	}

	//Verify Product Catalog Link is Clickable from personalized Homepage
	async clickOnProductCatalogLink() {
		await commonActions.scrollTo(personalizedHomePage_loc.PRODUCT_CATALOG, 'Product Catalog Link On Personalized Homepage');
		await commonActions.waitForClickable(personalizedHomePage_loc.PRODUCT_CATALOG, 'Product Catalog Link On Personalized Homepage');
		await commonActions.safeVisibleClick(personalizedHomePage_loc.PRODUCT_CATALOG, 'Product Catalog Link On Personalized Homepage ');
	}
	async clickOnCategoryLink(category, subcategory) {
		await commonActions.hoverTo(personalizedHomePage_loc.PRODUCT_CATEGORIES, 'Product Categories Link On Personalized Homepage ')
		let category_locator = await commonActions.dynamicLocator(personalizedHomePage_loc.CATEGORY_LINK, category)
		await commonActions.hoverTo(category_locator, 'Category link in Product category Dropdown');
		let subcategory_locator = await commonActions.dynamicLocator(personalizedHomePage_loc.SUB_CATEGORY_LINK, subcategory)
		await commonActions.hoverTo(subcategory_locator, 'Sub Category link in Product category Dropdown');
		await commonActions.safeVisibleClick(subcategory_locator, 'Sub Category link in Product category Dropdown');
	}

	async verifyMandatoryFieldsOnPersonalizedHomepage() {
		await commonActions.waitForVisible(personalizedHomePage_loc.PRODUCT_CATEGORIES, 'Product Categories link');
		await commonActions.waitForVisible(personalizedHomePage_loc.PRODUCT_CATALOG, 'Product Catalog Link');
		if ((process.env.REGION === 'US' || process.env.REGION === 'CA_EN' || process.env.REGION === 'CA_FR') && process.env.ENV !== 'QA') {
			await commonActions.waitForVisible(personalizedHomePage_loc.INNOVATION_LINK, 'Innovation Link');
			await commonActions.waitForVisible(personalizedHomePage_loc.SERVICES_LINK, 'Services Link');
		} else {
			await commonActions.elementIsNotDisplayed(personalizedHomePage_loc.INNOVATION_LINK, 'Innovation Link');
			await commonActions.elementIsNotDisplayed(personalizedHomePage_loc.SERVICES_LINK, 'Services Link');
		}
		await commonActions.waitForVisible(personalizedHomePage_loc.SUPPLIERS_LINK, 'Suppliers Link');
		await commonActions.waitForVisible(personalizedHomePage_loc.CONTACT_US_CTA, 'Contact Us CTA');
		await commonActions.waitForVisible(personalizedHomePage_loc.ORDERHISTORY_LINK, 'Contact Us CTA');
		await commonActions.waitForVisible(personalizedHomePage_loc.QUOTED_PRODUCTS_LINK, 'Quoted Products CTA');
		await commonActions.waitForVisible(personalizedHomePage_loc.DISCOVER_PRODUCTS_LINK, 'Discover Products CTA');
		await commonActions.waitForVisible(personalizedHomePage_loc.ACCOUNT_INFORMATION_TEXT, 'Account Information');
		await commonActions.waitForVisible(personalizedHomePage_loc.CONTACT_INFORAMTION_EMAIL, 'Contact Information');
		await commonActions.waitForVisible(personalizedHomePage_loc.CONTACT_A_REPRESENTATIVE_TEXT, 'Contact a Representative');
		await commonActions.waitForVisible(personalizedHomePage_loc.RECENT_ORDERS_TEXT, 'Recent Orders');
		await commonActions.waitForVisible(personalizedHomePage_loc.RECENTLY_VIEWED_PRODUCTS, 'Recently Viewed Products');
		await commonActions.waitForVisible(personalizedHomePage_loc.FOOTER_ORDER_HISTORY_LINK, 'Order History link on the footer');
		await commonActions.waitForVisible(personalizedHomePage_loc.FOOTER_QUOTED_PRODUCTS_LINK, 'Footer Quoted Products link');
	}

	async clickOnContactUsButton() {
		await commonActions.scrollTo(personalizedHomePage_loc.CONTACT_US_FORM, 'Contact Us Form')
		await commonActions.safeVisibleClick(personalizedHomePage_loc.CONTACT_US_FORM, 'Contact us Form');
	}

	async verifySuccessToastMessage(successToastMsg) {
		await commonActions.waitForVisible(personalizedHomePage_loc.SUCCESSMESSAGE, 'Success Toast Message')
		let ContactUsFormSuccessToast = await commonActions.safeGetText(personalizedHomePage_loc.SUCCESSMESSAGE, successToastMsg)
		await commonActions.safeAsserts('contains', ContactUsFormSuccessToast, successToastMsg + ' is not displayed', successToastMsg)
	}

	async clickOnQuotedProductsCTA() {
		await commonActions.waitForClickable(personalizedHomePage_loc.QUOTED_PRODUCTS_LINK, 'Quoted Products CTA');
		await commonActions.safeJavaScriptClick(personalizedHomePage_loc.QUOTED_PRODUCTS_LINK, 'Quoted Products CTA');
		await commonActions.elementIsNotDisplayed(personalizedHomePage_loc.QUOTED_PRODUCTS_LINK, 'Quoted Products CTA');
	}

	async deleteItemsFromMiniCart() {
		await commonActions.waitForClickable(personalizedHomePage_loc.MINICART_ICON_ON_HEADER, 'Mini cart on the header');
		await commonActions.safeVisibleClick(personalizedHomePage_loc.MINICART_ICON_ON_HEADER, 'Mini cart on Personalized Homepage');
		await commonActions.waitForVisible(personalizedHomePage_loc.MINI_CART_CHANGE_SHIPPING_ADDRESS, 'Mini cart change address');
		let emptyMsg = await commonActions.safeIsVisible(personalizedHomePage_loc.EMPTY_CART_MESSAGE, 'Empty cart message');

		while (!emptyMsg) {
			await commonActions.waitForClickable(personalizedHomePage_loc.DELETE_ON_MINICART, 'Delete on mini cart');
			await commonActions.safeClick(personalizedHomePage_loc.DELETE_ON_MINICART, 'Delete Product from MiniCart');
			await commonActions.waitForClickable(personalizedHomePage_loc.OK_IN_MINICART, 'OK on Mini Cart');
			await commonActions.safeClick(personalizedHomePage_loc.OK_IN_MINICART, 'OK on Mini Cart');
			await commonActions.elementIsNotDisplayed(personalizedHomePage_loc.OK_IN_MINICART, 'Ok on Mini Cart');
			emptyMsg = await commonActions.safeIsVisible(personalizedHomePage_loc.REMOVE_PRODUCT, 'Empty cart message');

		}
		await commonActions.waitForVisible(personalizedHomePage_loc.EMPTY_CART_MESSAGE, 'Empty cart Messages');
	}

	async verifyRecentInvoicesBlock() {
		if (process.env.REGION === 'MX') {
			await commonActions.elementIsNotDisplayed(personalizedHomePage_loc.RECENT_INVOICES_HEADER, 'Recent Invoices Header');
		} else {
			await commonActions.waitForVisible(personalizedHomePage_loc.INVOICE_INVOICE_ROWS, 'Invoice rows');
			await commonActions.elementIsNotDisplayed(personalizedHomePage_loc.INVOICE_LOADING_PLACEHOLDER);
			await commonActions.waitForVisible(personalizedHomePage_loc.RECENT_INVOICES_HEADER, 'Recent Invoices Header');
			await commonActions.waitForVisible(personalizedHomePage_loc.RECENT_INVOICES_HEADER, 'Recent Invoices Header');
			await commonActions.waitForVisible(personalizedHomePage_loc.VIEW_ALL_INVOICES, 'View All Invoices link');
			await commonActions.waitForVisible(personalizedHomePage_loc.VIEW_PAST_DUE, 'View Past Dues link');
			let invoiceHeaders = await commonActions.findElements(personalizedHomePage_loc.RECENT_INOVICES_COLUMN_HEADERS, 'Recent Invoices column headers');
			await commonActions.safeAsserts('equal', invoiceHeaders.length, 'Invoices Header length', langFile.recentInvoicesOnPersonalHomepage.recentInvoicesColumnHeader.length);
			for (let col = 0; col < invoiceHeaders.length; col++) {
				let colHeaders = await commonActions.safeGetText(invoiceHeaders[col], 'Recent Invoices Column Headers');
				await commonActions.safeAsserts('equal', colHeaders, 'Invoice Col Headers', langFile.recentInvoicesOnPersonalHomepage.recentInvoicesColumnHeader[col]);
			}
		}
	}

	async verifyInfoMessageReminderRibbon() {
		await commonActions.waitForVisible(commonPage_loc.COMMON_PAYMENT_REMINDER_TEXT, 'Email reminder info message on Personalized homepage');
		let infoMessageText = await commonActions.safeGetText(commonPage_loc.COMMON_PAYMENT_REMINDER_TEXT, 'Email reminder info message on Personalized homepage')
		await commonActions.safeAsserts('contains', infoMessageText, 'Email reminder info message on Personalized homepage', langFile.commonInfoMessages.PaymentReminderInfoMessage);
	}

	async clickOnTurnOnEmailRemindersCTA() {
		await commonActions.waitForVisible(personalizedHomePage_loc.EMAIL_REMINDER_MESSAGE, 'Turn on email reminders');
		await commonActions.waitForClickable(personalizedHomePage_loc.EMAIL_REMINDER_MESSAGE, 'Turn on email reminders');
	}
}

module.exports = new PersonalizedHomePage();
