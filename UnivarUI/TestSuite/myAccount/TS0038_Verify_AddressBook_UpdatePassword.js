let testData = require('../../TestData/TestLevelData/TestCaseData.js');
let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let addressBookPage = require('../../PageActions/PageAction_Common/AddressBookPage.js');
let signInPage = require('../../PageActions/PageAction_Common/SignInPage');
const { getSecret } = require('../../../aws-secret-manager');
let userEmail;
let userPassword;

describe('TS0038 Verify Address Book Page', function () {
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

	it('Verify Default Address is Selected', async () => {
		await addressBookPage.VerifyDefaultAddresses();
	})
})
