let homePage = require('../../PageActions/PageAction_Common/HomePage')
let signInPage = require('../../PageActions/PageAction_Common/SignInPage')
let testData = require('../../TestData/TestLevelData/TestCaseData.js');
let personalizedHomepage = require('../../PageActions/PageAction_Common/PersonalizedHomePage')
let commonActions = require('../../../Utilities/CommonActions.js');
let productCatalogPage = require('../../PageActions/PageAction_Common/ProductCatlog')
let getLanguageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile');
let getLanguage = getLanguageFile.getLanguageFile();

let userEmail;
let userPassword;

if(process.env.DEVICE_FARM) {
    const secretResponse = await getSecret('digital-qa-automation-test');
    userEmail = await secretResponse['CHEMCAREUSERID']
    userPassword = await secretResponse['CHEMCAREPASSWORD'];
} else {
    userEmail = process.env.CHEMCAREUSERID;
    userPassword = process.env.CHEMCAREPASSWORD;
}

describe('TS0052 Verify RFQ Form ChemCare User', function () {
    before(async () => {
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
    it('Click on Product dropdown and Click on View Price or Request Quote Button',async ()=>{
        await personalizedHomepage.clickOnProductCatalogLink()
        await productCatalogPage.clickOnAllProductsTab();
        await productCatalogPage.clickOnViewPriceOrRequestQuoteButton_Guest();
    });
    it ('Enter Details in RFQ Form and Click Submit Quote Button', async () => {
        await productCatalogPage.enterBasicDetails(testData.common.firstName_Dynamic, testData.common.lastName_Dynamic, testData.common.phoneNumber_Dynamic, testData.common.mailinatorEmailId, testData.common.companyName_Dynamic, '100');
        await productCatalogPage.selectRandomMarketName();
        await productCatalogPage.verifyDefaultCountryAndSelect(process.env.REGION);
        await productCatalogPage.SelectNoRadioButton_chemcareuser();
        await productCatalogPage.acceptTermsAndConditions();
        await productCatalogPage.clickOnSubmitQuoteRequestButton();
    });
    it('Verify Success Message after submitting the RFQ form',async ()=>{
        await productCatalogPage.verifySuccessToastMessage(getLanguage.commonSuccessMessage.ChemcareuserRFQSuccessToast);
    });
});
