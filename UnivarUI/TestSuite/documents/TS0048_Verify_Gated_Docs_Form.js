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

describe('TS0048 Verify Gated Docs Form Guest User', function () {
    it('navigate to app page and accept cookies', async () => {
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
    it('Click on About Us Link in the Footer and navigate to Gated doc for Guest users', async () => {
        await homePage.navigateToFormulationKitPage();
    });

    it('Click on a Random Gated Doc from the list', async () => {
        await aboutUsPage.clickOnRandomGatedDocument();
    });

    it('Enter Required Fields in the form and click submit', async () => {
        await commonPage.enterDetailsInGatedDocForm(testData.common.firstName_Dynamic, testData.common.lastName_Dynamic, testData.common.mailinatorMail_Dynamic, testData.common.companyName_Dynamic, countryData.docsForm.country, 1, 'yes');
        await commonPage.clickOnGDTermsOfUse();
        await commonPage.clickGdFormSubmitButton();
    });
});
describe('TS0048 Verify Gated Docs Form Logged In', function () {
    it('navigate to app page and accept cookies', async () => {
        await homePage.navigateToAppHomePage()
        await homePage.verifyHomePage(testData.common.trueStatus);
    });

    it('Enter Credentials and Sign In', async () => {
        await homePage.clickOnSignInLink();
        await signInPage.enterEmail(userEmail);
        await signInPage.enterPassword(userPassword);
        await signInPage.clickOnSignInButton();
    });

    it('Verify Gated Doc form submission for Auth users', async () => {

        await homePage.clickOnUnivarLogo();
        await homePage.navigateToFormulationKitPage();
        await aboutUsPage.clickOnRandomGatedDocument();
        await commonPage.enterDetailsInGatedDocForm(testData.common.firstName_Dynamic, testData.common.lastName_Dynamic, testData.common.mailinatorMail_Dynamic, testData.common.companyName_Dynamic, countryData.docsForm.country, 1, 'yes');
        await commonPage.clickOnGDTermsOfUse();
        await commonPage.clickGdFormSubmitButton();
    });
});
