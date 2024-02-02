let defaults
if(process.env.DEVICE_FARM) {
	defaults = require('./wdio.conf_device_farm.js').config;
} else {
	defaults = require('./wdio.conf.js').config;
}
let _ = require('lodash');

let overrides = {
	// ==================
	// Specify Test Files
	// ==================
	// Define which test specs should run. The pattern is relative to the directory
	// from which `wdio` was called.
	//
	// The specs are defined as an array of spec files (optionally using wildcards
	// that will be expanded). The test for each spec file will be run in a separate
	// worker process. In order to have a group of spec files run in the same worker
	// process simply enclose them in an array within the specs array.
	//
	// If you are calling `wdio` from an NPM script (see https://docs.npmjs.com/cli/run-script),
	// then the current working directory is where your `package.json` resides, so `wdio`
	// will be called from there.
	//

	suites: {
		smoke: [
			'./UnivarUI/TestSuite/prodSmokeSuite/*.js',
			'./UnivarUI/TestSuite/parentChildPDP/*.js',
			'./UnivarUI/TestSuite/checkout/Instant_*.js',
			'./UnivarUI/TestSuite/**/TS00*.js',
		],
		smoke_admin: [
			'./UnivarUI/TestSuite/adminPanel/loginAdminPanel.js',
		],
		smoke_url: [
			'./UnivarUI/TestSuite/urlHitting/urlNavigationCopy/*.js',
		],
		//A service smoke test to run in QA and Dev after each deployment
		service_smoke_test: [
			'./UnivarUI/TestSuite/prodSmokeSuite/guestSearchSRPValidation.js',
			'./UnivarUI/TestSuite/prodSmokeSuite/guestNoResultsValidation.js',
			'./UnivarUI/TestSuite/prodSmokeSuite/guestProductDetailValidation.js',
			'./UnivarUI/TestSuite/**/TS0019_Verify_FiltersinProductCatalogPage.js',
			'./UnivarUI/TestSuite/**/TS0025_VerifyAutoCompleteSearchWithoutEnteringQuery.js',
			'./UnivarUI/TestSuite/**/TS0027_VerifyAutoCompleteSearchWithEnteringPartialQuery.js',
			'./UnivarUI/TestSuite/prodSmokeSuite/guestRegulatoryDocValidation.js',
			'./UnivarUI/TestSuite/prodSmokeSuite/loginLogoutValidation.js',
			'./UnivarUI/TestSuite/prodSmokeSuite/loginPricingValidation.js',
			'./UnivarUI/TestSuite/prodSmokeSuite/guestTaxAndFreightValidation.js',
			'./UnivarUI/TestSuite/**/TS0038_Verify_AddressBook_UpdatePassword.js',
			'./UnivarUI/TestSuite/prodSmokeSuite/guestWebPriceValidation.js',
			'./UnivarUI/TestSuite/prodSmokeSuite/verifyOrderHistoryPage.js',
			'./UnivarUI/TestSuite/**/TS0045_Verify_Invoices_Page.js',
			'./UnivarUI/TestSuite/**/TS0014_Verify_Contact_Us_Form.js',
			'./UnivarUI/TestSuite/**/TS0015_PlaceOrder_PLP.js',
			'./UnivarUI/TestSuite/**/TS0013_Verify_Personalized_Homepage.js',
			'./UnivarUI/TestSuite/**/TS0044_Order_Details_Page.js',
			'./UnivarUI/TestSuite/**/TS0062_verifySwitchingPackageTypesOnPDP.js',
			'./UnivarUI/TestSuite/**/TS0067_loginRFQ.js',
			'./UnivarUI/TestSuite/**/TS0068_loginRFQGuestFlow.js',
			'./UnivarUI/TestSuite/checkout/Instant_Checkout_World_Pay_Same_Billing_Address.js'
		],
		critical_smoke: [
			'./UnivarUI/TestSuite/prodSmokeSuite/guestSearchSRPValidation.js',
			'./UnivarUI/TestSuite/prodSmokeSuite/guestNoResultsValidation.js',
			'./UnivarUI/TestSuite/prodSmokeSuite/guestProductDetailValidation.js',
			'./UnivarUI/TestSuite/**/TS0017_Verify_FooterLinksForGuestUser.js',
			'./UnivarUI/TestSuite/**/TS0018_Verify_HomePageAndHeadersforGuestUser.js',
			'./UnivarUI/TestSuite/**/TS0019_Verify_FiltersinProductCatalogPage.js',
			// './UnivarUI/TestSuite/**/TS0025_VerifyAutoCompleteSearchWithoutEnteringQuery.js',
			// './UnivarUI/TestSuite/**/TS0027_VerifyAutoCompleteSearchWithEnteringPartialQuery.js',
			'./UnivarUI/TestSuite/prodSmokeSuite/guestRegulatoryDocValidation.js',
			'./UnivarUI/TestSuite/prodSmokeSuite/loginLogoutValidation.js',
			'./UnivarUI/TestSuite/prodSmokeSuite/loginPricingValidation.js',
			'./UnivarUI/TestSuite/prodSmokeSuite/guestTaxAndFreightValidation.js',
			'./UnivarUI/TestSuite/**/TS0038_Verify_AddressBook_UpdatePassword.js',
			'./UnivarUI/TestSuite/prodSmokeSuite/guestWebPriceValidation.js',
			// US user doesn't have order history or invoice data
			// './UnivarUI/TestSuite/prodSmokeSuite/verifyOrderHistoryPage.js',
			// './UnivarUI/TestSuite/**/TS0045_Verify_Invoices_Page.js'
		],
	},
	// Patterns to exclude.
	exclude: [
		'./UnivarUI/TestSuite/**/TS0033*.js',
		'./UnivarUI/TestSuite/**/TS0047*.js',
		'./UnivarUI/TestSuite/**/TS0057*.js',
		'./UnivarUI/TestSuite/**/TS0058*.js',
		'./UnivarUI/TestSuite/**/TS0065*.js',
		'./UnivarUI/TestSuite/creditApplication/*.js',
		//OLD RFQ SCRIPTS
		'./UnivarUI/TestSuite/**/TS0011*.js',
		'./UnivarUI/TestSuite/**/TS0026*.js',
		'./UnivarUI/TestSuite/**/TS0052*.js',
		'./UnivarUI/TestSuite/zephyrUpload/*.js'
	],
}

exports.config = _.defaultsDeep(overrides, defaults);
