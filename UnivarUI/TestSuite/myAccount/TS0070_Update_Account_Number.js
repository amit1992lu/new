let testData = require('../../TestData/TestLevelData/TestCaseData.js');
let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let addressBookPage = require('../../PageActions/PageAction_Common/AddressBookPage.js');
let signInPage = require('../../PageActions/PageAction_Common/SignInPage')
const commonActionPage = require('../../PageActions/PageAction_Common/CommonActionPage');
const getLanguageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile').getLanguageFile();
const { getSecret } = require('../../../aws-secret-manager');
let userEmail;
let userPassword;

describe('TS0070 Update Account Number', function () {
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
		await homePage.verifyHomePage(testData.common.trueStatus);
		await homePage.acceptCookieConsent();
		await homePage.clickOnSignInLink();
		await signInPage.enterEmail(userEmail);
		await signInPage.enterPassword(userPassword);
		await signInPage.clickOnSignInButton();
	});

	it('Verify AddressBookPage', async () => {
		await homePage.navigateAndVerifyAddressBookPage();
	});

	it('Request And Update Account Number', async () => {
		await addressBookPage.clickOnRequestAddressAccountButton();
		await addressBookPage.clickOnExistingAccountRadio();
		await addressBookPage.enterAccountNumber(12345);
		await addressBookPage.clickOnSubmitButton();
		await commonActionPage.verifySuccessToastMessage(getLanguageFile.commonSuccessMessage.accountUpdateSuccessMessage);
	})
})
