let testData = require('../../TestData/TestLevelData/TestCaseData.js').common;
let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let addressBookPage = require('../../PageActions/PageAction_Common/AddressBookPage.js');
let signInPage = require('../../PageActions/PageAction_Common/SignInPage')
const commonActionPage = require('../../PageActions/PageAction_Common/CommonActionPage');
const async = require('async');
const getLanguageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile').getLanguageFile();
const { getSecret } = require('../../../aws-secret-manager');
let userEmail;
let userPassword;

describe('TS0075 Update Shipping And Billing Address', function () {
	before(async () => {
		if(process.env.DEVICE_FARM) {
            const secretResponse = await getSecret('digital-qa-automation-test');
            userEmail = await secretResponse['UNIVAR_MY_ACCOUNT_USER']
            userPassword = await secretResponse['UNIVAR_MY_ACCOUNT_PASSWORD'];
        } else {
            userEmail = process.env.UNIVAR_MY_ACCOUNT_USER;
            userPassword = process.env.UNIVAR_MY_ACCOUNT_PASSWORD;
        }
		await homePage.navigateToAppHomePage();
		await homePage.verifyHomePage(testData.trueStatus);
		await homePage.acceptCookieConsent();
		await homePage.clickOnSignInLink();
		await signInPage.enterEmail(userEmail);
		await signInPage.enterPassword(userPassword);
		await signInPage.clickOnSignInButton();
	});

	it('Verify AddressBookPage', async () => {
		await homePage.navigateAndVerifyAddressBookPage();
	});
	it('Verify Shipping Address Update', async () => {
		await addressBookPage.clickOnRequestAddressAccountButton();
		await addressBookPage.clickOnShippingAndBillingRadio();
		await addressBookPage.clickOnShippingAddressRadio()
		await addressBookPage.enterAddressDetails(testData.firstName_Dynamic, testData.lastName_Dynamic, testData.phoneNumber_Dynamic, testData.companyName_Dynamic, testData.companyAddress, testData.cityName_Dynamic, testData.zipCode);
		await addressBookPage.clickOnSubmitButton();
		await commonActionPage.verifySuccessToastMessage(getLanguageFile.commonSuccessMessage.accountUpdateSuccessMessage);

	})

	it('Verify Billing Address Update', async () => {
		await browser.refresh();
		await addressBookPage.clickOnRequestAddressAccountButton();
		await addressBookPage.clickOnShippingAndBillingRadio();
		await addressBookPage.clickOnBillingAddressRadio()
		await addressBookPage.enterAddressDetails(testData.firstName_Dynamic, testData.lastName_Dynamic, testData.phoneNumber_Dynamic, testData.companyName_Dynamic, testData.companyAddress, testData.cityName_Dynamic, testData.zipCode);
		await addressBookPage.clickOnSubmitButton();
		await commonActionPage.verifySuccessToastMessage(getLanguageFile.commonSuccessMessage.accountUpdateSuccessMessage);
	})
})
