let homePage = require('../../PageActions/PageAction_Common/HomePage')
let signInPage = require('../../PageActions/PageAction_Common/SignInPage')
let testData = require('../../TestData/TestLevelData/TestCaseData.js');
let personalizedHomepage = require('../../PageActions/PageAction_Common/PersonalizedHomePage')
let productCatalogPage = require('../../PageActions/PageAction_Common/ProductCatlog')
let productCatalog_Loc = require('../../Locator/Locator_Common/ProductCatlogPage_Locator');
let getLanguageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile');
let getLanguage = getLanguageFile.getLanguageFile();
const { getSecret } = require('../../../aws-secret-manager');
let userEmail;
let userPassword;

describe('TS011 RFQ Logged In User On PLP', function () {
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
    it ('Enter Credentials and Sign In', async () => {
        await homePage.clickOnSignInLink();
        await signInPage.enterEmail(userEmail);
        await signInPage.enterPassword(userPassword);
        await signInPage.clickOnSignInButton();
    }) ;
    it ('Verify Success Message after submitting the RFQ form', async () => {
        await homePage.VerifyProductCatalogTab();
        await productCatalogPage.clickOnAllProductsTab();
        await productCatalogPage.clickOnRFQButton(1);
        if(process.env.REGION === 'MX') {
            await productCatalogPage.enterBasicDetails(testData.common.firstName_Dynamic, testData.common.lastName_Dynamic, testData.common.phoneNumber_Dynamic, userEmail, testData.common.companyName_Dynamic, '100')
            await productCatalogPage.selectRandomMarketName();
            await productCatalogPage.selectCompanyPurchasedRadioButton(testData.common.no, '12345');
            await productCatalogPage.acceptTermsAndConditions();
            await productCatalogPage.clickOnSubmitQuoteRequestButton();
            await productCatalogPage.verifySuccessToastMessage(getLanguage.commonSuccessMessage.PLPRFQSuccessMsg)
        } else {
            await productCatalogPage.enterRFQDetailsForEMEA(testData.common.firstName_Dynamic, testData.common.lastName_Dynamic, testData.common.phoneNumber_Dynamic, userEmail, testData.common.companyName_Dynamic, '100', '100', '100', 'test');
            await productCatalogPage.radioRFQFormAnswer(productCatalog_Loc.ALREADY_YES);
            await productCatalogPage.radioRFQFormAnswer(productCatalog_Loc.TECH_YES);
            await productCatalogPage.selectRandomMarketName();
            await productCatalogPage.verifyDefaultCountryAndSelect(process.env.REGION);
            await productCatalogPage.selectCompanyPurchasedRadioButton(testData.common.no, '12345');
            await productCatalogPage.acceptTermsAndConditions();
            await productCatalogPage.acceptPrivacyPolicy();
            await productCatalogPage.clickOnSubmitQuoteRequestButton();
            await productCatalogPage.verifySuccessToastMessage(getLanguage.commonSuccessMessage.PLPRFQSuccessMsg)
        }
    });
});
