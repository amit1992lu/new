let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let testData = require('../../TestData/TestLevelData/TestCaseData.js');
let commonActions = require('../../../Utilities/CommonActions.js');
let signInPage = require('../../PageActions/PageAction_Common/SignInPage');
let headerPage = require('../../PageActions/PageAction_Common/HeaderContentAction.js');
let personalHomepage = require('../../PageActions/PageAction_Common/PersonalizedHomePage.js');
let countryData = require('../../TestData/TestLevelData/CountryLevelData/GetCountryFile').getCountryFile();
let getLanguageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile').getLanguageFile();
let commonPage = require('../../PageActions/PageAction_Common/CommonActionPage.js');
let aboutUsPage = require('../../PageActions/PageAction_Common/AboutUsPage.js');
const { getSecret } = require('../../../aws-secret-manager');
let userEmail;
let userPassword;

describe('TS0049 Verify Sample Doc Form', function () {
    it('navigate to app page and accept cookies', async () => {
        await homePage.navigateToAppHomePage()
        await homePage.verifyHomePage(testData.common.trueStatus);
        await homePage.acceptCookieConsent();
    });
    it('Navigate to Sample Doc Form for Guest users', async () => {
        await homePage.navigateToSampleDocPage();
    });

    it('Click on Request a Sample button, Enter details and Submit the form', async () => {
        await commonPage.enterSampleDocFormDetailsAndSubmit(testData.common.firstName_Dynamic, testData.common.lastName_Dynamic, testData.common.mailinatorMail_Dynamic, testData.common.phoneNumber_Dynamic, testData.common.jobTitle_Dynamic,testData.common.companyName_Dynamic, testData.common.country_USA, 1, 'yes');
    });

    it ('Verify the success toast message Sample Doc Form', async () => {
        await commonPage.verifySuccessToastMessage(getLanguageFile.commonSuccessMessage.ThanksForContactingRepresentativeWillReachSoonMsg);
    })
});

describe('TS0049 Verify Sample Docs Form Logged In', function () {
    it('navigate to app page', async () => {
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
    });

    it('Enter Credentials and Sign In', async () => {
        await homePage.clickOnSignInLink();
        await signInPage.enterEmail(userEmail);
        await signInPage.enterPassword(userPassword);
        await signInPage.clickOnSignInButton();
    });

    it('Verify Sample Doc form submission for Auth users', async () => {

        await homePage.clickOnUnivarLogo();
        await homePage.navigateToSampleDocPage();
        await commonPage.enterSampleDocFormDetailsAndSubmit(testData.common.firstName_Dynamic, testData.common.lastName_Dynamic, testData.common.email, testData.common.phoneNumber_Dynamic, testData.common.jobTitle_Dynamic,testData.common.companyName_Dynamic, testData.common.country_USA, 1, 'yes');
    });
    it ('Verify the success toast message Sample Doc Form', async () => {
        await commonPage.verifySuccessToastMessage(getLanguageFile.commonSuccessMessage.ThanksForContactingRepresentativeWillReachSoonMsg);
    })
});
