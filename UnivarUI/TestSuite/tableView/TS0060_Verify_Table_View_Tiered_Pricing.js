let testData = require('../../TestData/TestLevelData/TestCaseData.js');
let countryData = require('../../TestData/TestLevelData/CountryLevelData/GetCountryFile').getCountryFile();
let getLanguageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile');
let tableViewPage = require('../../PageActions/PageAction_Common/TableViewPage.js');
const homePage = require('../../PageActions/PageAction_Common/HomePage');
const signInPage = require('../../PageActions/PageAction_Common/SignInPage');
const { getSecret } = require('../../../aws-secret-manager');
let userEmail;
let userPassword;
let orderQty

describe('TS0060 Verify Table View Tiered Pricing', function () {

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
	it('Enter Credentials and Sign In', async () => {
		await homePage.clickOnSignInLink();
		await signInPage.loginWithValidCredentials(userEmail, userPassword);
	});
	it(`Navigate To ${countryData.url.productCategories_potassiumPhospate}`, async () => {
		await homePage.clickOnUnivarLogo();
		await homePage.navigateToTargetPageFromHomePage(countryData.url.productCategories_potassiumPhospate);
	});
	it('Verify Tiered Pricing on TableView Page', async () => {
		await tableViewPage.expandTableViewProductLine(89059);
		await tableViewPage.getTieredProductInfo(89059);
	})
});
