let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let headerContentAction = require('../../PageActions/PageAction_Common/HeaderContentAction.js');
let commonTestData = require('../../TestData/TestLevelData/TestCaseData.js').common;
let getLanguageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile');
let searchResultsPage = require('../../PageActions/PageAction_Common/SearchResultsPage.js');
let commonActionPage = require('../../PageActions/PageAction_Common/CommonActionPage.js');
const productCatalog = require('../../PageActions/PageAction_Common/ProductCatlog');
let pdp = require('../../PageActions/PageAction_Common/ProductDetail.js');
const signInPage = require('../../PageActions/PageAction_Common/SignInPage');
const testData = require('../../TestData/TestLevelData/TestCaseData');
let personalHomepage = require('../../PageActions/PageAction_Common/PersonalizedHomePage.js');
let orderHistory = require('../../PageActions/PageAction_Common/OrderHistoryPage.js');
const personalizedHomePage = require('../../PageActions/PageAction_Common/PersonalizedHomePage');
const { getSecret } = require('../../../aws-secret-manager');
let userEmail;
let userPassword;
let getLanguage = getLanguageFile.getLanguageFile();

describe('TS0064 Verify Missing SDS', function () {
	before(async () => {
		if(process.env.DEVICE_FARM) {
            const secretResponse = await getSecret('digital-qa-automation-test');
            userEmail = await secretResponse['PRODUSER']
            userPassword = await secretResponse['PRODPASSWORD'];
        } else {
            userEmail = process.env.PRODUSER;
            userPassword = process.env.PRODPASSWORD;
        }
		await homePage.navigateToAppHomePage();
		await homePage.verifyHomePage(commonTestData.trueStatus);
		await homePage.acceptCookieConsent();
	});
	it('Verify Missing SDS on Search Results Page', async () => {
		await headerContentAction.clickOnSearchBox();
		await headerContentAction.enterQueryInSearchBoxAndClickSearchButton('16028821');
		await searchResultsPage.clickSDSLinkOnSRP(16028821);
		await searchResultsPage.verifyAndSubmitMissingSDSForm(getLanguageFile.getLanguageFile().title.requestSDSDocument, commonTestData.firstName_Dynamic,
			commonTestData.lastName_Dynamic, commonTestData.mailinatorMail_Dynamic);
		await commonActionPage.verifySuccessToastMessage(getLanguageFile.getLanguageFile().commonSuccessMessage.sdsSuccessMessage);
	});
	it('Verify Missing SDS on PDP', async () => {
		await productCatalog.clickTheFirstProduct();
		await pdp.clickOnViewSdsLinkPdp();
		await searchResultsPage.verifyAndSubmitMissingSDSForm(getLanguageFile.getLanguageFile().title.requestSDSDocument, commonTestData.firstName_Dynamic,
			commonTestData.lastName_Dynamic, commonTestData.mailinatorMail_Dynamic);
		await commonActionPage.verifySuccessToastMessage(getLanguageFile.getLanguageFile().commonSuccessMessage.sdsSuccessMessage);
	});
	it('Enter Credentials and Sign In', async () => {
		await homePage.clickOnSignInLink();
		await signInPage.loginWithValidCredentials(userEmail, userPassword);
	});

	it('Verify SDS on Order History', async () => {
		await personalizedHomePage.verifyAndClickOnOrderHistoryLink();
		await orderHistory.searchOrderUsingSearchBox('13202594');
		await orderHistory.clickProductDocLink();
		await searchResultsPage.verifyAndSubmitMissingSDSForm(getLanguageFile.getLanguageFile().title.requestSDSDocument, commonTestData.firstName_Dynamic,
			commonTestData.lastName_Dynamic, commonTestData.mailinatorMail_Dynamic);
		await commonActionPage.verifySuccessToastMessage(getLanguageFile.getLanguageFile().commonSuccessMessage.sdsSuccessMessage);
	});

	it('Verify SDS on Order Details Page', async () => {
		await orderHistory.closeProductDocModal();
		await orderHistory.clickOnOrderDetailsButton(0);
		await orderHistory.clickProductDocLink();
		await searchResultsPage.verifyAndSubmitMissingSDSForm(getLanguageFile.getLanguageFile().title.requestSDSDocument, commonTestData.firstName_Dynamic,
			commonTestData.lastName_Dynamic, commonTestData.mailinatorMail_Dynamic);
		await commonActionPage.verifySuccessToastMessage(getLanguageFile.getLanguageFile().commonSuccessMessage.sdsSuccessMessage);

	});
});
