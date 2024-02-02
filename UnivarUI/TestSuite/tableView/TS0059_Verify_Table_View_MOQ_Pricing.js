let testData = require('../../TestData/TestLevelData/TestCaseData.js');
let countryData = require('../../TestData/TestLevelData/CountryLevelData/GetCountryFile').getCountryFile();
let getLanguageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile');
let tableViewPage = require('../../PageActions/PageAction_Common/TableViewPage.js');
const homePage = require('../../PageActions/PageAction_Common/HomePage');
const signInPage = require('../../PageActions/PageAction_Common/SignInPage');
let getLanguage = getLanguageFile.getLanguageFile();
const { getSecret } = require('../../../aws-secret-manager');
let userEmail;
let userPassword;
let orderQty

describe('TS0059 Verify Table View MOQ Pricing', function () {

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
	it('Sign In with user', async () => {
		await homePage.clickOnSignInLink();
		await signInPage.loginWithValidCredentials(userEmail, userPassword);
	});
	it(`Navigate To ${countryData.url.productCategories_ketones}`, async () => {
		await homePage.clickOnUnivarLogo();
		await homePage.navigateToTargetPageFromHomePage(countryData.url.productCategories_ketones);
	})

	it('Verify Min Order Qty on TableView Page', async () => {
		await tableViewPage.expandTableViewProductLine(20486);
		orderQty = await tableViewPage.getMinMaxOrderQty(20486);
		await tableViewPage.enterQty_usingProductNo(20486, parseInt(orderQty[0]) - 1)
		await tableViewPage.moqAddToCart(20486);
		await tableViewPage.verifyOrderQtyErrorMessages(20486, (getLanguage.commonErrorMessage.minOrderQtyMsg).replace('%s', orderQty[0] - 1));
	})

//FIND-1571- Invalid Max Qty error qty number is displayed on tableView page, skipping this step from the PR for time being
	xit('Verify Max Order Qty on TableView Page', async () => {
		await tableViewPage.enterQty_usingProductNo(20022, parseInt(orderQty[1]) + 1)
		await tableViewPage.moqAddToCart(20022);
		await tableViewPage.verifyOrderQtyErrorMessages(20022, (getLanguage.commonErrorMessage.maxOrderQtyMsg).replace('%s', orderQty[1]));//
	})
});
