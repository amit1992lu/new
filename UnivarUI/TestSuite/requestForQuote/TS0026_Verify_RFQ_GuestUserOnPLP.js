let homePage = require('../../PageActions/PageAction_Common/HomePage')
let testData = require('../../TestData/TestLevelData/TestCaseData')
let productCatalogPage = require('../../PageActions/PageAction_Common/ProductCatlog')
let commonActions = require('../../../Utilities/CommonActions.js');
let productCatalog_Loc = require('../../Locator/Locator_Common/ProductCatlogPage_Locator');
let getLanguageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile');
let getLanguage = getLanguageFile.getLanguageFile();

describe('TS0026 Verify RFQ On PLP With Guest User', function () {
    let totalCount;
    before(async () => {
        await homePage.navigateToAppHomePage();
        await homePage.verifyHomePage(testData.common.trueStatus);
        await homePage.acceptCookieConsent();
    });
    it('Click on Product catalog link and verify',async () => {
        await homePage.clickOnProductCategories(0);
        await productCatalogPage.VerifyProductCatalogPage_Guest();
    });
    it('Enter Basic Details after clicking on RFQ button',async () => {
        await productCatalogPage.clickOnViewPriceOrRequestQuoteButton_Guest();
        await productCatalogPage.clickOnRequestQuoteWithoutSigningInButton();
        if(process.env.REGION === 'MX') {
            await productCatalogPage.enterBasicDetails(testData.common.firstName_Dynamic, testData.common.lastName_Dynamic, testData.common.phoneNumber_Dynamic, testData.common.mailinatorEmailId, testData.common.companyName_Dynamic, '100');
        } else {
            await productCatalogPage.enterRFQDetailsForEMEA(testData.common.firstName_Dynamic, testData.common.lastName_Dynamic, testData.common.phoneNumber_Dynamic, testData.common.mailinatorEmailId, testData.common.companyName_Dynamic, '100', '100', '100', 'test');
            await productCatalogPage.radioRFQFormAnswer(productCatalog_Loc.ALREADY_YES);
            await productCatalogPage.radioRFQFormAnswer(productCatalog_Loc.TECH_YES);
        }
        await productCatalogPage.selectRandomMarketName();
        await productCatalogPage.verifyDefaultCountryAndSelect(process.env.REGION);
        await productCatalogPage.selectCompanyPurchasedRadioButton(testData.common.no, '12345');
        await productCatalogPage.acceptTermsAndConditions();
        if(process.env.REGION === 'MX') {
            await commonActions.elementIsNotDisplayed(productCatalog_Loc.PRIVACY_POLICY_CHECKBOX, 'Privacy Policy CheckBox');
        } else{
            await productCatalogPage.acceptPrivacyPolicy();
        }
    });
    it('Submit and verify Submit text', async () => {
        await productCatalogPage.clickOnSubmitQuoteRequestButton();
        await productCatalogPage.verifySuccessToastMessage(getLanguage.commonSuccessMessage.GuestRFQSuccessToast);
    });
});
