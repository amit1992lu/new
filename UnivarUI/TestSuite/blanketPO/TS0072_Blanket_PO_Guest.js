let testData = require('../../TestData/TestLevelData/TestCaseData.js');
let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let headerContentAction = require('../../PageActions/PageAction_Common/HeaderContentAction.js');
let searchResultsPage = require('../../PageActions/PageAction_Common/SearchResultsPage.js');
let accountInfoPage = require('../../PageActions/PageAction_Common/AccountInfoPage.js');
let commonTestData = require('../../TestData/TestLevelData/TestCaseData.js');
let shippingPage = require('../../PageActions/PageAction_Common/ShippingCheckoutPage.js');
let countryData = require('../../TestData/TestLevelData/CountryLevelData/GetCountryFile').getCountryFile();
const { getSecret } = require('../../../aws-secret-manager');

let userPassword;

describe('TS0072 Blanket PO Guest', function () {
    before(async () => {
        if(process.env.DEVICE_FARM) {
            const secretResponse = await getSecret('digital-qa-automation-test');
            userPassword = await secretResponse['PRODPASSWORD'];
        } else {
            userPassword = process.env.PRODPASSWORD;
        }
        await homePage.navigateToAppHomePage();
        await homePage.verifyHomePage(testData.common.trueStatus);
        await homePage.acceptCookieConsent();
    });

    it('Verify Product Details',async ()=>{
        await headerContentAction.enterQueryInSearchBoxAndClickSearchButton(countryData.searchTerms.ICProduct);
        await searchResultsPage.verifyProductQty(1);
        await searchResultsPage.verifyItemCount(1);
        await searchResultsPage.getProductNameWithNumber(countryData.searchTerms.ICProduct);
        await searchResultsPage.getProductPrice(countryData.searchTerms.ICProduct);
    });

    it('Add to Cart and verify Details', async () => {
        await searchResultsPage.clickAddToCartButton(countryData.searchTerms.ICProduct);
        await searchResultsPage.clickOnCheckoutButton();
    });

    it('Enter New Email for Account Information Step', async () => {
        await accountInfoPage.verifyAccountInfoPage();
        await accountInfoPage.enterAccInfoAndClickShippingButton(commonTestData.common.firstName_Dynamic, commonTestData.common.lastName_Dynamic, commonTestData.common.mailinatorMail_Dynamic, userPassword, userPassword);
        await accountInfoPage.clickOnNextShippingButton();
    });

    it('Verify Blanket PO Upload', async () => {
        await shippingPage.verifyShippingPage();
        await shippingPage.verifyUploadPODoc();
    });
})
