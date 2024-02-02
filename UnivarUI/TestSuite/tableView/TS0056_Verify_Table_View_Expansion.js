let testData = require('../../TestData/TestLevelData/TestCaseData.js');
let commonActions = require('../../../Utilities/CommonActions.js');
let countryData = require('../../TestData/TestLevelData/CountryLevelData/GetCountryFile').getCountryFile();
let getLanguageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile').getLanguageFile();
let commonPage = require('../../PageActions/PageAction_Common/CommonActionPage.js');
let tableViewPage = require('../../PageActions/PageAction_Common/TableViewPage.js');
const homePage = require('../../PageActions/PageAction_Common/HomePage');
const productCatalogPage = require('../../PageActions/PageAction_Common/ProductCatlog');
let headerPage = require('../../PageActions/PageAction_Common/HeaderContentAction.js');
const personalHomepage = require('../../PageActions/PageAction_Common/PersonalizedHomePage');
let RFQPage = require('../../PageActions/PageAction_Common/GuestRFQ.js');
const { getSecret } = require('../../../aws-secret-manager');
let userEmail;
let userPassword;

describe('TS0056 Verify Table View', function () {

	before(async () => {
		if(process.env.DEVICE_FARM) {
            const secretResponse = await getSecret('digital-qa-automation-test');
            userEmail = await secretResponse['PRODUSER']
            userPassword = await secretResponse['PRODPASSWORD'];
        } else {
            userEmail = process.env.PRODUSER;
            userPassword = process.env.PRODPASSWORD;
        }
		await homePage.navigateToAppHomePage()
		await homePage.verifyHomePage(testData.common.trueStatus);
		await homePage.acceptCookieConsent();
	});
	it(`Navigate To ${countryData.url.productCategories_potassiumPhospate}`, async () => {
		await homePage.navigateToTargetPageFromHomePage(countryData.url.productCategories_potassiumPhospate);
	});
	it('Verify Guest user RFQ on TableView', async () => {
		await tableViewPage.clickOnRequestPriceCTA();
		await tableViewPage.clickRequestPriceButton();
		await RFQPage.verifyRequestQuoteModal();
		await RFQPage.closeRFQModal();
	});

	it('Click on WebPrice Tool Tip and Sign in', async () => {
		await tableViewPage.clickOnWebPricedProduct();
		await tableViewPage.clickOnWebPriceToolTip();
		await tableViewPage.clickOnToolTipSignInCTA();
		await tableViewPage.validateSignInToSeePricingModal();
		await commonPage.enterUserName(userEmail);
		await commonPage.enterPassword(userPassword);
		await commonPage.clickOnSignInButton();
	})
	it('Add to cart and verify', async () => {
		await personalHomepage.deleteItemsFromMiniCart();
		await headerPage.closeMiniCartTray();
		await tableViewPage.clickOnWebPricedProduct();
		await tableViewPage.clickOnAddToCartCTA();
		await headerPage.verifyMiniCartItemCount(1);
		await personalHomepage.deleteItemsFromMiniCart();
	})
});
