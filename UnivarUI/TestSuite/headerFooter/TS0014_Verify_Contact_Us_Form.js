let testData = require('../../TestData/TestLevelData/TestCaseData.js');
let contactUSForm = require('../../PageActions/PageAction_Common/ContactUSForm.js');
let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let signInPage = require('../../PageActions/PageAction_Common/SignInPage');
let personalizedHomepage = require('../../PageActions/PageAction_Common/PersonalizedHomePage');

let getLanguageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile');
let getLanguage = getLanguageFile.getLanguageFile();
const { getSecret } = require('../../../aws-secret-manager');
let userEmail;
let userPassword;

describe('TS014 Verify Contact Us Form Submit', function () {
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
		await homePage.verifyHomePage(testData.common.trueStatus);
		await homePage.acceptCookieConsent();
	});

	it('Enter Credentials and Sign In', async () => {
		await homePage.clickOnSignInLink();
		await signInPage.loginWithValidCredentials(userEmail, userPassword);
	});

	it('Enter Details in Contact US form and verify Success text', async () => {
		await personalizedHomepage.clickOnQuotedProductsCTA();
		await personalizedHomepage.clickOnContactUsButton();
		await contactUSForm.verifyContactUSForm();
		await contactUSForm.enterDetailsInContactUsForm(testData.common.firstName_Dynamic, testData.common.lastName_Dynamic,
			testData.common.mailinatorMail_Dynamic, testData.common.phoneNumber_Dynamic, testData.common.companyName_Dynamic,
			testData.common.jobTitle_Dynamic, getLanguageFile.getCountryFullName(), '1');
		await personalizedHomepage.verifySuccessToastMessage(getLanguage.commonSuccessMessage.ThanksForContactingRepresentativeWillReachSoonMsg);
	});
});
