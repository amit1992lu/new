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
			'./UnivarUI/TestSuite/**/TS00*.js',
			//'./UnivarUI/TestSuite/parentChildPDP/verifySustainabilityDocPDP.js',

		],
		smoke_uk_ie: [
			'./UnivarUI/TestSuite/prodSmokeSuite/*.js',
			'./UnivarUI/TestSuite/**/TS00*.js',
			'./UnivarUI/TestSuite/creditApplication/TS00*.js',
			//'./UnivarUI/TestSuite/parentChildPDP/verifySustainabilityDocPDP.js',

		],
		//A service smoke test to run in QA and Dev after each deployment
		service_smoke_test: [
			'./UnivarUI/TestSuite/prodSmokeSuite/guestSearchSRPValidation.js',
			'./UnivarUI/TestSuite/prodSmokeSuite/guestNoResultsValidation.js',
			'./UnivarUI/TestSuite/prodSmokeSuite/guestProductDetailValidation.js',
			'./UnivarUI/TestSuite/**/TS0019_Verify_FiltersinProductCatalogPage.js',
			'./UnivarUI/TestSuite/**/TS0025_VerifyAutoCompleteSearchWithoutEnteringQuery.js',
			'./UnivarUI/TestSuite/**/TS0027_VerifyAutoCompleteSearchWithEnteringPartialQuery.js',
			'./UnivarUI/TestSuite/prodSmokeSuite/loginLogoutValidation.js',
			'./UnivarUI/TestSuite/prodSmokeSuite/loginPricingValidation.js',
			'./UnivarUI/TestSuite/**/TS0038_Verify_AddressBook_UpdatePassword.js',
			'./UnivarUI/TestSuite/prodSmokeSuite/guestWebPriceValidation.js',
			'./UnivarUI/TestSuite/prodSmokeSuite/verifyOrderHistoryPage.js',
			'./UnivarUI/TestSuite/**/TS0045_Verify_Invoices_Page.js',
			'./UnivarUI/TestSuite/**/TS0014_Verify_Contact_Us_Form.js',
			'./UnivarUI/TestSuite/**/TS0015_PlaceOrder_PLP.js',
			'./UnivarUI/TestSuite/**/TS0013_Verify_Personalized_Homepage.js',
			'./UnivarUI/TestSuite/**/TS0044_Order_Details_Page.js',
			'./UnivarUI/TestSuite/**/TS0011_Verify_RFQ_LoggedInUserOnPLP.js',
			'./UnivarUI/TestSuite/**/TS0026_Verify_RFQ_GuestUserOnPLP.js',
		],
		critical_smoke: [
			'./UnivarUI/TestSuite/prodSmokeSuite/guestSearchSRPValidation.js',
			'./UnivarUI/TestSuite/prodSmokeSuite/guestNoResultsValidation.js',
			'./UnivarUI/TestSuite/prodSmokeSuite/guestProductDetailValidation.js',
			'./UnivarUI/TestSuite/**/TS0017_Verify_FooterLinksForGuestUser.js',
			'./UnivarUI/TestSuite/**/TS0018_Verify_HomePageAndHeadersforGuestUser.js',
			'./UnivarUI/TestSuite/**/TS0019_Verify_FiltersinProductCatalogPage.js',
			'./UnivarUI/TestSuite/**/TS0065_homeURLRedirect.js',
			'./UnivarUI/TestSuite/**/TS0025_VerifyAutoCompleteSearchWithoutEnteringQuery.js',
			'./UnivarUI/TestSuite/**/TS0027_VerifyAutoCompleteSearchWithEnteringPartialQuery.js',
			'./UnivarUI/TestSuite/prodSmokeSuite/verifyOrderHistoryPage.js',
			'./UnivarUI/TestSuite/prodSmokeSuite/loginLogoutValidation.js',
			'./UnivarUI/TestSuite/**/TS0038_Verify_AddressBook_UpdatePassword.js',
			'./UnivarUI/TestSuite/**/TS0045_Verify_Invoices_Page.js'
		],
		critical_smoke_uk: [
			'./UnivarUI/TestSuite/prodSmokeSuite/guestSearchSRPValidation.js',
			'./UnivarUI/TestSuite/prodSmokeSuite/guestNoResultsValidation.js',
			'./UnivarUI/TestSuite/prodSmokeSuite/guestProductDetailValidation.js',
			'./UnivarUI/TestSuite/**/TS0017_Verify_FooterLinksForGuestUser.js',
			'./UnivarUI/TestSuite/**/TS0018_Verify_HomePageAndHeadersforGuestUser.js',
			'./UnivarUI/TestSuite/**/TS0019_Verify_FiltersinProductCatalogPage.js',
			'./UnivarUI/TestSuite/**/TS0065_homeURLRedirect.js',
			'./UnivarUI/TestSuite/prodSmokeSuite/verifyOrderHistoryPage.js',
			'./UnivarUI/TestSuite/prodSmokeSuite/loginLogoutValidation.js',
			'./UnivarUI/TestSuite/**/TS0038_Verify_AddressBook_UpdatePassword.js',
		],
		critical_smoke_nl: [
			'./UnivarUI/TestSuite/prodSmokeSuite/guestSearchSRPValidation.js',
			'./UnivarUI/TestSuite/prodSmokeSuite/guestNoResultsValidation.js',
			'./UnivarUI/TestSuite/prodSmokeSuite/guestProductDetailValidation.js',
			'./UnivarUI/TestSuite/**/TS0017_Verify_FooterLinksForGuestUser.js',
			'./UnivarUI/TestSuite/**/TS0018_Verify_HomePageAndHeadersforGuestUser.js',
			'./UnivarUI/TestSuite/**/TS0019_Verify_FiltersinProductCatalogPage.js',
			'./UnivarUI/TestSuite/**/TS0065_homeURLRedirect.js',
			// './UnivarUI/TestSuite/**/TS0025_VerifyAutoCompleteSearchWithoutEnteringQuery.js',
			// './UnivarUI/TestSuite/**/TS0027_VerifyAutoCompleteSearchWithEnteringPartialQuery.js',
		],
	},
	// Patterns to exclude.
	exclude: [
		'./UnivarUI/TestSuite/**/TS0003*.js',
		'./UnivarUI/TestSuite/**/TS0005*.js',
		'./UnivarUI/TestSuite/**/TS0006*.js',
		'./UnivarUI/TestSuite/**/TS0007*.js',
		'./UnivarUI/TestSuite/**/TS0022*.js',
		'./UnivarUI/TestSuite/**/TS0023*.js',
		'./UnivarUI/TestSuite/**/TS0024*.js',
		'./UnivarUI/TestSuite/**/TS0033*.js',
		'./UnivarUI/TestSuite/**/TS0046*.js',
		'./UnivarUI/TestSuite/**/TS0048*.js',
		'./UnivarUI/TestSuite/**/TS0049*.js',
		'./UnivarUI/TestSuite/**/TS0050*.js',
		'./UnivarUI/TestSuite/**/TS0051*.js',
		'./UnivarUI/TestSuite/**/TS0052*.js',
		'./UnivarUI/TestSuite/**/TS0053*.js',
		'./UnivarUI/TestSuite/**/TS0054*.js',
		'./UnivarUI/TestSuite/**/TS0055*.js',
		'./UnivarUI/TestSuite/**/TS0056*.js',
		'./UnivarUI/TestSuite/**/TS0057*.js',
		'./UnivarUI/TestSuite/**/TS0058*.js',
		'./UnivarUI/TestSuite/**/TS0059*.js',
		'./UnivarUI/TestSuite/**/TS0060*.js',
		'./UnivarUI/TestSuite/**/TS0061*.js',
		'./UnivarUI/TestSuite/**/TS0062*.js',
		'./UnivarUI/TestSuite/**/TS0063*.js',
		'./UnivarUI/TestSuite/**/TS0064*.js',
		'./UnivarUI/TestSuite/**/TS0066*.js',
		'./UnivarUI/TestSuite/**/TS0067*.js',
		'./UnivarUI/TestSuite/**/TS0068*.js',
		'./UnivarUI/TestSuite/**/TS0069*.js',
		'./UnivarUI/TestSuite/**/TS0072*.js',
		'./UnivarUI/TestSuite/**/TS0073*.js',
		'./UnivarUI/TestSuite/**/TS0074*.js',
		'./UnivarUI/TestSuite/**/TS0080*.js',
		'./UnivarUI/TestSuite/**/TS0083*.js',
		'./UnivarUI/TestSuite/prodSmokeSuite/guestRegulatoryDocValidation.js',
		'./UnivarUI/TestSuite/prodSmokeSuite/guestWebPriceValidation.js',
		'./UnivarUI/TestSuite/prodSmokeSuite/guestTaxAndFreightValidation.js',
		'./UnivarUI/TestSuite/blanketPO/*.js',
		'./UnivarUI/TestSuite/zephyrUpload/*.js',
		'./UnivarUI/TestSuite/UOM/*.js',
	],
}
exports.config = _.defaultsDeep(overrides, defaults);
