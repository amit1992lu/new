const fetch = require('node-fetch');
let commonActions = require('../../../Utilities/CommonActions.js');
let homePageLoc = require('../../Locator/Locator_Common/HomePage_Locator.js');
let signUpPage = require('.//SignUpPage.js');
let signInPage = require('.//SignInPage.js')
require('../../../Utilities/log4js.js');
let AddressBook_Locator = require('../../Locator/Locator_Common/AddressBook_Locator.js');
const log4js = require('log4js');
const ProductCatalog_LOC = require('../../Locator/Locator_Common/ProductCatlogPage_Locator');
const logger = log4js.getLogger('univar');
const headerContent_Locator = require('../../Locator/Locator_Common/HeaderContent_Locator.js');
const setUpAutoPay = require('../../PageActions/PageAction_Common/SetUpAutoPay.js');

let getLanguageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile');
const TestCaseData = require('../../TestData/TestLevelData/TestCaseData.js');
let getLanguage = getLanguageFile.getLanguageFile();
const url = require('../../../urls')

class HomePage {

	//Navigate to app page
	async navigateToAppHomePage() {
		const urlTarget = await url.url(process.env.REGION);
		browser.url(urlTarget);
		browser.setWindowSize(1920, 1080);
	}

	//Verify Home page
	async verifyHomePage(status) {
		let logo = await commonActions.waitForVisible(homePageLoc.LOGO_HEADER, 'Univar logo in home page');
		await commonActions.safeAsserts(status, logo, 'Logo is not displayed in Home page');
		// let storeImg = await commonActions.waitForVisible(homePageLoc.COUNTRYSTORE_IMG,  'Country store logo in home page');
		// await commonActions.safeAsserts(status, storeImg, 'Country store logo is not displayed in Home page');
	}

	//Click on Sign up link in homepage
	async clickOnSignUpLink() {
		await commonActions.waitForClickable(homePageLoc.SIGNUP_LINK, 'Sign up link in home page');
		await commonActions.safeVisibleClick(homePageLoc.SIGNUP_LINK, 'Sign up link in home page');
		return signUpPage;
	}

	//Click on Sign In link in homepage
	async clickOnSignInLink() {
		await commonActions.waitForClickable(homePageLoc.SIGN_LINK, 'Sign In link in home page');
		await commonActions.safeVisibleClick(homePageLoc.SIGN_LINK, 'Sign In link in home page');
		return signInPage;
	}

	async clickOnSetUpAutoPayLink() {
		await commonActions.scrollTo(homePageLoc.SETUP_AUTOPAY_LINK, 'Set Up AutoPay link in home page');
		await commonActions.waitForClickable(homePageLoc.SETUP_AUTOPAY_LINK, 'Set Up AutoPay link in home page');
		await commonActions.safeVisibleClick(homePageLoc.SETUP_AUTOPAY_LINK, 'Set Up AutoPay in home page');
	}
	async clickonGotoAccount() {
		await commonActions.waitForClickable(homePageLoc.GO_TO_ACCOUNT, 'Manage AutoPay link in home page');
		await commonActions.safeVisibleClick(homePageLoc.GO_TO_ACCOUNT, 'Click on Manage AutoPay link');
	}

	//Verify the cookie banner exists
	async verifyCookies() {
		let cookieBanner = await commonActions.safeIsVisible(homePageLoc.COOKIE_BANNER, 'Cookie Banner on home Page');
		await commonActions.safeAsserts('true', cookieBanner, 'Cookie banner is not displayed');
		await commonActions.safeAsserts('true', await commonActions.safeIsVisible(homePageLoc.COOKIE_CONSENT_BUTTON, 'Consent To Cookies Button on home page'), 'Assertion on Cookie Consent button');
		await commonActions.safeIsVisible(homePageLoc.COOKIE_CONSENT_BUTTON, 'Consent To Cookies Button on home page');
		await commonActions.waitForClickable(homePageLoc.COOKIE_CONSENT_BUTTON, 'Consent to Cookies Button On home Page');
		await commonActions.waitForClickable(homePageLoc.COOKIE_PREFERENCE_BUTTON, 'Cookie Preference Button on home page');
		await commonActions.waitForVisible(homePageLoc.COOKIE_POLICY_LINK, 'Read our cookie policy link on home page');
	}

	async verifySuccessToastMessage(successToastMsg) {
		await commonActions.waitForVisible(ProductCatalog_LOC.SUCCESSMESSAGE, 10000, 'Success Toast Message')
		let RFQSuccessToast = await commonActions.safeGetText(ProductCatalog_LOC.SUCCESSMESSAGE, 10000, 'Request quote success message')
		await commonActions.safeAsserts('contains', RFQSuccessToast, 'Request quote success message', successToastMsg)
	}

	async clickOnProductCategories(index) {
		await commonActions.waitForVisible(homePageLoc.PRODUCT_CATEGORIESLINK, 'Product Categories Link on Header');
		await commonActions.hoverTo(homePageLoc.PRODUCT_CATEGORIESLINK, 'Product Categories Link on Header');
		let categoriesList = await commonActions.findListOfElements(homePageLoc.CATEGORIES_LIST);
		await commonActions.hoverTo(categoriesList[index], 'Product Categories Link hover');
		await commonActions.safeVisibleClick(categoriesList[index], 'Product Categories clicked')
		await commonActions.elementIsNotDisplayed(homePageLoc.CATEGORIES_LIST);
	}

	async acceptCookieConsent() {
		await commonActions.safeVisibleClick(homePageLoc.COOKIE_CONSENT_BUTTON, 'Accept Cookies');
		await commonActions.elementIsNotDisplayed(homePageLoc.COOKIE_CONSENT_BUTTON);

	}

	async VerifyProductCatalogTab() {
		await commonActions.hoverTo(homePageLoc.PRODUCT_CATALOG_LOGIN, 'Product Catalog link')
		await commonActions.waitForClickable(homePageLoc.PRODUCT_CATALOG_LOGIN, 'Product Catalog link');
		await commonActions.safeVisibleClick(homePageLoc.PRODUCT_CATALOG_LOGIN, 'Product Catalog link');
		let title = await commonActions.getTitle();
		await commonActions.safeAsserts('contains', title.toLowerCase(), 'Product Catalog', getLanguage.headers.productCatalog.toLowerCase());
	}

	async VerifyProductCategoriesTab() {
		await commonActions.waitForClickable(homePageLoc.PRODUCT_CATEGORIESLINK, 'Product Categories link');
		await commonActions.safeVisibleClick(homePageLoc.PRODUCT_CATEGORIESLINK, 'Product Categories link');
	}

	async VerifyDiscoverProductSection() {
		await commonActions.scrollTo(homePageLoc.DISCOVERPRODUCT_SECTION, 'Discover Product Section');
		await commonActions.safeVisibleClick(homePageLoc.DISCOVERPRODUCT_SECTION, 'Discover Product Section');
		await commonActions.elementIsNotDisplayed(homePageLoc.DISCOVERPRODUCT_SECTION, 'Discover Product Section');
	}

	async VerifyProductCatagoriesTab() {
		await commonActions.scrollTo(homePageLoc.PRODUCT_CATEGORIESLINK, 'Product Categories link');
		await commonActions.waitForClickable(homePageLoc.PRODUCT_CATEGORIESLINK, 'Product Categories link');
		await commonActions.safeVisibleClick(homePageLoc.PRODUCT_CATEGORIESLINK, 'Product Categories link');
		let title = await commonActions.getTitle();
		await commonActions.safeAsserts('contains', title.toLowerCase(), 'Product Catalog', getLanguage.headers.productCategories.toLowerCase());
	}

	async VerifyIndustriesTab() {
		if (process.env.REGION === 'US') {
			await commonActions.waitForClickable(homePageLoc.INDUSTRIES_LINK, 'Industries link');
			await commonActions.safeVisibleClick(homePageLoc.INDUSTRIES_LINK, 'Industries link');
			await commonActions.getLatestWindow();
			let url1 = await commonActions.getUrl();
			await commonActions.safeAsserts('contains', url1, 'User is navigated to the Industries page', 'industries');
		} else if (process.env.REGION === 'CA_EN' || process.env.REGION === 'CA_FR') {
			await commonActions.waitForClickable(homePageLoc.INDUSTRIES_LINK, 'Industries link');
			await commonActions.safeVisibleClick(homePageLoc.INDUSTRIES_LINK, 'Industries link');
			await commonActions.getLatestWindow();
			let url1 = await commonActions.getUrl();
			await commonActions.switchToParentWindow();
			await commonActions.safeAsserts('contains', url1, 'User is navigated to the Industries page', 'markets');
		} else if ((process.env.REGION === 'FR' || process.env.REGION === 'BE_NL' ||
			process.env.REGION === 'DK' || process.env.REGION === 'FI' || process.env.REGION === 'SE' ||
			process.env.REGION === 'NO' || process.env.REGION === 'UK' || process.env.REGION === 'IE')) {
			await commonActions.waitForClickable(homePageLoc.INDUSTRIES_LINK_EMEA, 'Industries link');
			await commonActions.safeVisibleClick(homePageLoc.INDUSTRIES_LINK_EMEA, 'Industries link');
			await commonActions.getLatestWindow();
			let url1 = await commonActions.getUrl();
		} else {
			await commonActions.elementIsNotDisplayed(homePageLoc.INDUSTRIES_LINK);
		}
	}

	async VerifySuppliersTab() {
		await commonActions.waitForClickable(homePageLoc.SUPPLIERS_LINK, 'Suppliers link');
		await commonActions.safeVisibleClick(homePageLoc.SUPPLIERS_LINK, 'Suppliers link');
		let title = await commonActions.getTitle();
		await commonActions.safeAsserts('Contains', title, 'Navigating to supplier page', 'Suppliers');
	}

	async VerifyContactUsButton_Header() {
		await commonActions.waitForClickable(homePageLoc.CONTACTUS_HEADER, 'Contact Us button in header');
		await commonActions.safeVisibleClick(homePageLoc.CONTACTUS_HEADER, 'Contact Us button in header');
		// await commonActions.getLatestWindow();
		// let title = await commonActions.getTitle();
		// await commonActions.safeAsserts('contains', title, 'Product Catalog', getLanguage.headers.contactUs);
		// await commonActions.switchToParentWindow();
	}

	async VerifySearchBox_Header() {
		await commonActions.safeAsserts('true', await commonActions.safeIsVisible(homePageLoc.SEARCHBOX, 'SearchBox in header'), 'Assertion on SearchBox in header');
	}

	async VerifyServicesTab() {
		if (process.env.REGION === 'CA_EN' || process.env.REGION === 'CA_FR' || process.env.REGION === 'US' || (process.env.REGION === 'UK')) {
			await commonActions.waitForClickable(homePageLoc.SERVICES_LINK, 'Services link');
			await commonActions.safeVisibleClick(homePageLoc.SERVICES_LINK, 'Services link');
			await commonActions.getLatestWindow();
			let url1 = await commonActions.getUrl();
			await commonActions.switchToParentWindow();
			await commonActions.safeAsserts('contains', url1, 'User is navigated to the Services page', 'services');
		} else if ((process.env.REGION === 'UK' || process.env.REGION === 'IE' || process.env.REGION === 'SE')) {
			await commonActions.waitForClickable(homePageLoc.SERVICES_LINK, 'Services link');
			await commonActions.safeVisibleClick(homePageLoc.SERVICES_LINK, 'Services link');
			let url1 = await commonActions.getUrl();
			if(process.env.REGION === 'IE') {
				await commonActions.safeAsserts('contains', url1, 'User is navigated to the Services page', 'solutions');
			} else {
				await commonActions.safeAsserts('contains', url1, 'User is navigated to the Services page', 'services');
			}
		} else {
			await commonActions.elementIsNotDisplayed(homePageLoc.SERVICES_LINK);
		}
	}


	async VerifyInnovationTab() {
		if ((process.env.REGION === 'CA_EN' || process.env.REGION === 'CA_FR' || process.env.REGION === 'US' ||
		process.env.REGION === 'BE_NL' || process.env.REGION === 'DK' ||
		process.env.REGION === 'SE' || process.env.REGION === 'UK' || process.env.REGION === 'IE')) {
			await commonActions.waitForClickable(homePageLoc.INNOVATION_LINK, 'Innovation link');
			await commonActions.safeVisibleClick(homePageLoc.INNOVATION_LINK, 'Innovation link');
			await commonActions.getLatestWindow();
			let url1 = await commonActions.getUrl();
			await commonActions.switchToParentWindow();
			if (process.env.REGION === 'US' || process.env.REGION === 'BE_NL' ||
			process.env.REGION === 'DK' || process.env.REGION === 'SE' || process.env.REGION === 'NO' || process.env.REGION === 'UK' || process.env.REGION === 'IE') {
				await commonActions.safeAsserts('contains', url1, 'User is navigated to the Innovation page', 'solution-center');
			} else {
				await commonActions.safeAsserts('contains', url1, 'User is navigated to the Innovation page', 'innovation');
			}
		} else {
			await commonActions.elementIsNotDisplayed(homePageLoc.INNOVATION_LINK);
		}
	}

	async VerifyOrderHistoryFooter() {
		await commonActions.scrollTo(homePageLoc.ORDERHISTORY_FOTTER, 'OrderHistorys');
		await browser.refresh();
		await commonActions.safeVisibleClick(homePageLoc.ORDERHISTORY_FOTTER, 'OrderHistorys');
		await commonActions.waitForVisible(homePageLoc.LOGIN_MODAL, 'Sign In Modal');
		await commonActions.waitForClickable(homePageLoc.LOGIN_MODAL_CLOSE, 'Login Modal Close');
		await commonActions.safeVisibleClick(homePageLoc.LOGIN_MODAL_CLOSE, 'Login Modal Close');
	}

	async VerifyQuotedProductsFooter() {
		await commonActions.scrollTo(homePageLoc.QUOTEDPRODUCTS_FOTTER, 'Quoted Products');
		await commonActions.safeVisibleClick(homePageLoc.QUOTEDPRODUCTS_FOTTER, 'Quoted Products');
		await commonActions.waitForVisible(homePageLoc.LOGIN_MODAL, 'Sign In Modal');
		await commonActions.waitForClickable(homePageLoc.LOGIN_MODAL_CLOSE, 'Login Modal Close');
		await commonActions.safeVisibleClick(homePageLoc.LOGIN_MODAL_CLOSE, 'Login Modal Close');
	}

	async VerifyWeAreHiringFooter() {
		await commonActions.scrollTo(homePageLoc.CAREER_FOTTER, 'We Are hiring Page');
		await commonActions.safeVisibleClick(homePageLoc.CAREER_FOTTER, 'We are Hiring');
		let title = await commonActions.getTitle();
		await commonActions.safeAsserts('contains', title, 'Career', getLanguage.headers.career);
	}

	async verifyAllLinks(elementTarget) {
		let response;
		let hrefArray = [];
		await commonActions.scrollTo(elementTarget, '');
		const footerlinks = await commonActions.findListOfElements(elementTarget);
		for (const linkUrl of footerlinks) {
			const attributeValue = await linkUrl.getAttribute('href');
			hrefArray.push(attributeValue);
		}
		for (let i = 0; i < hrefArray.length; i++) {
			if(process.env.ENV === 'QA' || process.env.ENV === 'DEV') {
				response = await fetch(hrefArray[i], {
					headers: {
						'Content-Type': 'text/plain',
						'Authorization': 'Basic ' + btoa(process.env.QUSERNAME + ':' + process.env.QPASSWORD),
					},
				});
			} else {
				response = await fetch(hrefArray[i]);
			}
			if (response.status === 404) {
				expect(response.status).to.not.be.equal(404)
			}
		}
		expect(response.status).to.be.below(404)
	}

	async verifyCookiePreference() {
		const cookiePreferenceIsDisplayed = await commonActions.safeIsVisible(homePageLoc.COOKIE_PREFERENCE_FOOTER, 'Cookie Preference');
		if (cookiePreferenceIsDisplayed) {
			await commonActions.safeClick(homePageLoc.COOKIE_PREFERENCE_FOOTER, 'Cookie Preference');
			await commonActions.waitForClickable(homePageLoc.COOKIE_PREFERENCE_CLOSE_BTN, 'Cookie Preference close');
			await commonActions.waitForVisible(homePageLoc.COOKIE_PREFERENCE_MODEL, 'Cookie Model');
			await commonActions.safeClick(homePageLoc.COOKIE_PREFERENCE_CLOSE_BTN, 'Cookie Preference close');
		}
	}

	async VerifyOrderHistory_Section() {
		await commonActions.scrollTo(homePageLoc.ORDERHISTORY_SECTION, 'Order History section');
		await commonActions.safeVisibleClick(homePageLoc.ORDERHISTORY_SECTION, 'Order History Section');
		await commonActions.elementIsNotDisplayed(homePageLoc.ORDERHISTORY_SECTION, 'Order History Section');
	}

	async VerifyQuotedProducts_Section() {
		await commonActions.scrollTo(homePageLoc.QUOTEDPRODUCT_SECTION, 'Quoted Products');
		await commonActions.safeVisibleClick(homePageLoc.QUOTEDPRODUCT_SECTION, 'Quoted Products');
		await commonActions.elementIsNotDisplayed(homePageLoc.QUOTEDPRODUCT_SECTION, 'Quoted Products');
	}

	async SelectTechnical_GradeFilter(filtertype, filtername) {
		if (process.env.REGION === 'US' || process.env.REGION === 'CA_EN' || process.env.REGION === 'CA_FR') {
			let filter_loc;
			switch (filtertype) {
				case 'grade':
					await commonActions.scrollTo(ProductCatalog_LOC.GRADEFILTER, 'Grade Filter');
					await commonActions.waitForClickable(ProductCatalog_LOC.GRADEFILTER, 'Grade Filter');
					await commonActions.safeVisibleClick(ProductCatalog_LOC.GRADEFILTER, 'Grade Filter');
					filter_loc = await commonActions.Generate_FilterLocator(filtername);
					await commonActions.safeVisibleClick(filter_loc, filtername);
					let productname = await commonActions.safeGetText(ProductCatalog_LOC.FILTERRESULT_PRODUCTNAME, 'productname')
					await commonActions.safeAsserts('contains', productname, 'product name', filtername);
					await commonActions.safeAsserts('true', await commonActions.safeIsVisible('true', ProductCatalog_LOC.SELECTEDFILTER, 'applied Filter'), 'Assertion on Visible Selected Filter', '');
					break;

				case 'certification':
					await commonActions.scrollTo(ProductCatalog_LOC.CERTIFICATIONFILTER, 'Certification Filter');
					await commonActions.waitForClickable(ProductCatalog_LOC.CERTIFICATIONFILTER, 'Certification Filter');
					await commonActions.safeVisibleClick(ProductCatalog_LOC.CERTIFICATIONFILTER, 'Certification Filter');
					filter_loc = await commonActions.Generate_FilterLocator(filtername);
					await commonActions.safeVisibleClick(filter_loc, filtername);
					await commonActions.safeAsserts('true', await commonActions.safeIsVisible('true', ProductCatalog_LOC.SELECTEDFILTER, 'applied Filter'), 'Assertion on Visible Selected Filter', '');
					break;

				case 'Supplied by':
					await commonActions.scrollTo(ProductCatalog_LOC.SUPPLIEDBYFILTER, 'Supplied By Filter');
					await commonActions.waitForClickable(ProductCatalog_LOC.SUPPLIEDBYFILTER, 'Supplied By Filter');
					await commonActions.safeVisibleClick(ProductCatalog_LOC.SUPPLIEDBYFILTER, 'Supplied By Filter');
					filter_loc = await commonActions.Generate_FilterLocator(filtername);
					break;

				case 'Package Type':
					await commonActions.scrollTo(ProductCatalog_LOC.PACKAGETYPEFILTER, 'PACKAGE TYPE FILTER');
					await commonActions.waitForClickable(ProductCatalog_LOC.PACKAGETYPEFILTER, 'PACKAGE TYPE FILTER');
					await commonActions.safeVisibleClick(ProductCatalog_LOC.PACKAGETYPEFILTER, 'PACKAGE TYPE FILTER');
					filter_loc = await commonActions.Generate_FilterLocator(filtername);
					break;

				default:
					logger.info(filtername + ' Filter is not Present on the page');
					break;
			}
		} else {
			await commonActions.elementIsNotDisplayed(ProductCatalog_LOC.GRADEFILTER);
		}
	}

	async VerifySelectedFilterResults(filtername) {
		await commonActions.scrollTo(ProductCatalog_LOC.REMOVEFILTER_SELECTED, 'Technical');
		await commonActions.waitForClickable(ProductCatalog_LOC.REMOVEFILTER_SELECTED, 'Technical');
		let productname = await commonActions.safeGetText(ProductCatalog_LOC.FILTERRESULT_PRODUCTNAME, 'undefined', 'productname');
		await commonActions.safeAsserts('contains', productname, 'product name', filtername);
	}

	async VerifyRemoveFilter() {
		await commonActions.waitForClickable(ProductCatalog_LOC.REMOVEFILTER_SELECTED, 'Technical');
		await commonActions.safeVisibleClick(ProductCatalog_LOC.REMOVEFILTER_SELECTED, 'Technical');
		await commonActions.safeAsserts('true', await commonActions.safeIsVisible(ProductCatalog_LOC.FILTERRESULT_PRODUCTNAME, 'applied Filter'), 'Assertion on Visible Selected Filter', '');
	}

	async career_link_header() {
		await commonActions.scrollTo(homePageLoc.CAREER_LINK_HEADER, 'Career');
		await commonActions.waitForClickable(homePageLoc.CAREER_LINK_HEADER, 'Career');
		await commonActions.safeVisibleClick(homePageLoc.CAREER_LINK_HEADER, 'Career');
		let title = await commonActions.getTitle();
		await commonActions.safeAsserts('contains', title, 'Navigating to Career Page', 'Careers at Univar Solutions');
		await commonActions.scrollTo(homePageLoc.LOGO_HEADER, 'Home Logo');
		await commonActions.waitForClickable(homePageLoc.LOGO_HEADER, 'Home Logo');
		await commonActions.safeVisibleClick(homePageLoc.LOGO_HEADER, 'Home Logo');
	}

	async verifyProfilePage() {
		await commonActions.safeVisibleClick(headerContent_Locator.MY_ACCOUNT_DROPDOWN, 'My Account Dropdown');
		await commonActions.scrollTo(homePageLoc.PROFILE, 'Profile');
		await commonActions.waitForClickable(homePageLoc.PROFILE, 'Profile');
		await commonActions.safeVisibleClick(homePageLoc.PROFILE, 'Profile');
		await commonActions.waitForVisible(homePageLoc.FIRSTNAME, 'First Name');
	}

	async navigateAndVerifyNotificationCtrPage() {
		await commonActions.waitForClickable(headerContent_Locator.MY_ACCOUNT_DROPDOWN, 'Notification Center');
		await commonActions.safeVisibleClick(headerContent_Locator.MY_ACCOUNT_DROPDOWN, 'My Account Dropdown');
		await commonActions.waitForClickable(headerContent_Locator.NOTIFICATION_CTR_DROPDOWN, 'Notification Center Dropdown');
		await commonActions.safeClick(headerContent_Locator.NOTIFICATION_CTR_DROPDOWN, 'Notification Center Dropdown');
	}

	async navigateAndVerifyAddressBookPage() {
		await commonActions.waitForClickable(headerContent_Locator.MY_ACCOUNT_DROPDOWN, 'Address Book Dropdown');
		await commonActions.safeVisibleClick(headerContent_Locator.MY_ACCOUNT_DROPDOWN, 'My Account Dropdown');
		await commonActions.safeClick(headerContent_Locator.ADDRESS_BOOK_DROPDOWN, 'Address Book dropdown');
		let billingAddress = await commonActions.safeIsVisible(AddressBook_Locator.BILLING_ADDRESS, 'Billing Address');
		await commonActions.safeAsserts('true', billingAddress, 'Billing Address on Addresses page', '');
	}

	async VerifyProfilePersonalInformation() {
		await commonActions.safeAsserts('true', await commonActions.safeIsVisible(homePageLoc.FIRSTNAME, 'First Name value'), 'Assertion on First Name value');
		await commonActions.safeAsserts('true', await commonActions.safeIsVisible(homePageLoc.LASTNAME, 'Last Name value'), 'Assertion on Last name value');
		await commonActions.safeAsserts('true', await commonActions.safeIsVisible(homePageLoc.PHONE, 'Phone value'), 'Assertion on Phone value');
		await commonActions.safeAsserts('true', await commonActions.safeIsVisible(homePageLoc.EMAIL, 'Email value'), 'Assertion on Email value');
		await commonActions.safeAsserts('true', await commonActions.safeIsVisible(homePageLoc.FIRSTNAME_LABEL, 'First Name Label'), 'Assertion on First Name Label');
		await commonActions.safeAsserts('true', await commonActions.safeIsVisible(homePageLoc.LASTNAME_LABEL, 'Last Name Label'), 'Assertion on Last Name Label');
		await commonActions.safeAsserts('true', await commonActions.safeIsVisible(homePageLoc.PHONE_LABEL, 'Phone Label'), 'Assertion on Phone Label');
		await commonActions.safeAsserts('true', await commonActions.safeIsVisible(homePageLoc.EMAIL_LABEL, 'Email Label'), 'Assertion on Email Label');
	}

	async Validate_Reset_Password(password) {
		await commonActions.waitForClickable(homePageLoc.PASSWORD_RESET, 'Password Reset');
		await commonActions.safeVisibleClick(homePageLoc.PASSWORD_RESET, 'Password Reset');
		await commonActions.safeAsserts('true', await commonActions.safeIsVisible(homePageLoc.CURRENT_PASSWORD, 'Current Password'), 'Assertion on Current Password');
		await commonActions.waitForClickable(homePageLoc.PASSWORD_SAVE, 'Save Password Button');
		await commonActions.setValue(homePageLoc.CURRENT_PASSWORD, password, 'Current Password');
		await commonActions.setValue(homePageLoc.NEW_PASSWORD, password, 'New Password');
		await commonActions.setValue(homePageLoc.PASSWORD_CONF, password, 'Confirm Password');
		await commonActions.safeVisibleClick(homePageLoc.PASSWORD_SAVE, 'Save Password Button');
		await commonActions.waitForVisible(homePageLoc.PASSWORD_CONFIRMATION_MESSAGE, 'Password Confirmation Message');
		await commonActions.safeAsserts('true', await commonActions.safeIsVisible(homePageLoc.PASSWORD_CONFIRMATION_MESSAGE, 'Password Confirmation Message'), 'Assertion on Password Confirmation Message');
	}


	async click_product_details_immediate_price_section_US() {
		await commonActions.scrollTo(homePageLoc.IMMEDIATE_PRICING_SECTION_PRODUCT, 'Products are visible');
		let product_name = await commonActions.safeGetText(homePageLoc.IMMEDIATE_PRICING_SECTION_PRODUCT_NAME, 'Selected Product name');
		await commonActions.safeVisibleClick(homePageLoc.IMMEDIATE_PRICING_SECTION_PRODUCT, 'Click on Product ' + product_name);
	}


	async immediate_price_section_US() {
		if (process.env.REGION === 'US') {
			await commonActions.scrollTo(homePageLoc.IMMEDIATE_PRICING_SECTION_PREVIOUSBUTTON, 'Previous button is visible');
			await commonActions.safeAsserts('true', await commonActions.safeIsVisible(homePageLoc.IMMEDIATE_PRICING_SECTION_PREVIOUSBUTTON, 'Previous button is visible'));
			let attribute_value = await commonActions.getAttribute(homePageLoc.IMMEDIATE_PRICING_SECTION_PREVIOUSBUTTON, 'aria-disabled', 'getting aria-disabled attribute');
			await commonActions.safeAsserts(true, attribute_value, 'Attribute value');
			await commonActions.safeVisibleClick(homePageLoc.IMMEDIATE_PRICING_SECTION_NEXTBUTTON, 'Click on Next button');
			attribute_value = await commonActions.getAttribute(homePageLoc.IMMEDIATE_PRICING_SECTION_PREVIOUSBUTTON, 'aria-disabled', 'getting aria-disabled attribute');
			await commonActions.safeAsserts(false, attribute_value, 'Attribute value');
		} else {
			await commonActions.elementIsNotDisplayed(homePageLoc.IMMEDIATE_PRICING_SECTION_PREVIOUSBUTTON);
		}
	}

	async diverse_industries_section_US() {
		if (process.env.REGION === 'US') {
			await commonActions.scrollTo(homePageLoc.DIVERSE_INDUSTRIES_SECTION_PREVIOUSBUTTON, 'Previous button is visible');
			await commonActions.safeAsserts('true', await commonActions.safeIsVisible(homePageLoc.DIVERSE_INDUSTRIES_SECTION_PREVIOUSBUTTON, 'Previous button is visible'), 'Assertion on Previous button is visible');
			let attribute_value = await commonActions.getAttribute(homePageLoc.DIVERSE_INDUSTRIES_SECTION_PREVIOUSBUTTON, 'aria-disabled', 'getting aria-disabled attribute');
			await commonActions.safeAsserts(true, attribute_value, 'Attribute value');
			await commonActions.safeVisibleClick(homePageLoc.DIVERSE_INDUSTRIES_SECTION_NEXTBUTTON, 'Click on Next button');
			attribute_value = await commonActions.getAttribute(homePageLoc.DIVERSE_INDUSTRIES_SECTION_PREVIOUSBUTTON, 'aria-disabled', 'getting aria-disabled attribute');
			await commonActions.safeAsserts(false, attribute_value, 'Attribute value');
		} else {
			await commonActions.elementIsNotDisplayed(homePageLoc.DIVERSE_INDUSTRIES_SECTION_PREVIOUSBUTTON);
		}
	}

	async clickOnAboutUsLink_footer() {
		await commonActions.safeClick(homePageLoc.FOOTER_ABOUT_US_LINK, 'About Us Footer Link');
	}

	async navigateToFormulationKitPage() {
		let baseUrl = await commonActions.getUrl();
		await commonActions.navigate(`${baseUrl}formulation-kit-template`);
	}

	async navigateToSampleDocPage() {
		let baseUrl = await commonActions.getUrl();
		await commonActions.navigate(`${baseUrl}article-template`)
	}

	async clickOnUnivarLogo() {
		await commonActions.safeVisibleClick(homePageLoc.LOGO_HEADER, 'univar solution logo');
	}

	async navigateToTargetPageFromHomePage(targetUrl) {
		const urlTarget = await url.url(process.env.REGION);
		browser.url(urlTarget+'/'+`${targetUrl}`)
	}

	async verifySetUpAutoPayLink() {
		await commonActions.waitForVisible(homePageLoc.AUTOPAY_LINK, 'Manage AutoPay Link');
		let AutoPay_link = await commonActions.safeGetText(homePageLoc.AUTOPAY_LINK, 'Manage AutoPay Link');
		if (!(AutoPay_link == 'Set up AutoPay')) {
			await this.proceedtoCancelAutoPay()
		}
	}
	async verifyManageAutoPayLink() {
		await commonActions.waitForVisible(homePageLoc.AUTOPAY_LINK, 'Manage AutoPay Link');
		let AutoPay_link = await commonActions.safeGetText(homePageLoc.AUTOPAY_LINK, 'Manage AutoPay Link');
		if (!(AutoPay_link == 'Manage AutoPay')) {
			await this.proceedSetUpAutoPay()
		}
	}

	async proceedtoCancelAutoPay() {
		await this.clickOnAutoPayLink();
		await setUpAutoPay.clickCancelAutoPay();
		await setUpAutoPay.verifyAutoPayCancelSuccessMessage();
		await this.clickonGotoAccount();
	}
	async clickOnAutoPayLink() {
		await commonActions.waitForClickable(homePageLoc.AUTOPAY_LINK, 'AutoPay link in home page');
		await commonActions.safeVisibleClick(homePageLoc.AUTOPAY_LINK, ' Click on AutoPay link in home page');
	}
	async proceedSetUpAutoPay() {
		await this.clickOnAutoPayLink();
		await setUpAutoPay.clickOnSetupAutoPay();
		await setUpAutoPay.verifySetupAutoPayPage();
		await setUpAutoPay.enterBankRoutingNo(TestCaseData.common.bank_routing_no);
		await setUpAutoPay.enterBankAccountNo(TestCaseData.common.account_no);
		await setUpAutoPay.enterAccountHolderPhone(TestCaseData.common.account_holder_phone);
		await setUpAutoPay.enterBankAddress(TestCaseData.common.bank_address);
		await setUpAutoPay.enterCity(TestCaseData.common.city);
		await setUpAutoPay.selectState(TestCaseData.common.state);
		await setUpAutoPay.enterZip(TestCaseData.common.zip);
		await setUpAutoPay.clickSetUpAutoPayCheckBox();
		await setUpAutoPay.clickTermsandConditionsCheckBox();
		await setUpAutoPay.clickSetUpAutoPayButton();
		await setUpAutoPay.verifySetUpAutoPaySuccessMessage();
		await setUpAutoPay.clickOnGoToPersonalHomepage();
	}
	async clickOnInvoicesLink() {
		await commonActions.waitForClickable(homePageLoc.INVOICES_LINK, 'Invoices link in home page');
		await commonActions.safeVisibleClick(homePageLoc.INVOICES_LINK, 'Invoices link in home page');
	}

	async verifyUrlRedirect() {
		const url = await commonActions.getUrl() + 'home'
		const response = await fetch(url);
		if (response.redirected) {
			expect(response.redirected).to.be.equal(true)
		} else {
			expect(response.redirected).to.be.equal(true)
		}
	}

	async clickContactUsFooterLink() {
		await commonActions.scrollTo(homePageLoc.CONTACT_US_FOOTER, 'Contact Us footer link');
		await commonActions.waitForClickable(homePageLoc.CONTACT_US_FOOTER, 'Contact Us footer link');
		await commonActions.safeClick(homePageLoc.CONTACT_US_FOOTER, 'Contact Us footer link');
	}


}


module.exports = new HomePage();
