let cartPage = require('../../PageActions/PageAction_Common/CartPage.js');
let countryData = require('../../TestData/TestLevelData/CountryLevelData/GetCountryFile.js').getCountryFile();
let headerContentAction = require('../../PageActions/PageAction_Common/HeaderContentAction.js');
let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let testData = require('../../TestData/TestLevelData/TestCaseData.js');
let miniCartPage = require('../../PageActions/PageAction_Common/MiniCartPage.js');
let personalizedHomepage =  require('../../PageActions/PageAction_Common/PersonalizedHomePage.js');
let productCatalogPage = require('../../PageActions/PageAction_Common/ProductCatlog.js');
let signInPage = require('../../PageActions/PageAction_Common/SignInPage')
let searchResultsPage = require('../../PageActions/PageAction_Common/SearchResultsPage.js');
const { getSecret } = require('../../../aws-secret-manager');
let userEmail;
let userPassword;

describe('TS0082 Login UOM Validation', () => {
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
        await homePage.acceptCookieConsent();
        await homePage.clickOnSignInLink();
        await signInPage.enterEmail(userEmail);
        await signInPage.enterPassword(userPassword);
        await signInPage.clickOnSignInButton();
    });

    it('Verify UOM on Quoted Products Page', async () => {
        await personalizedHomepage.clickOnQuotedProductsCTA();
        await searchResultsPage.verifyUOMonSRP();
    });

    it('Verify UOM on Mini Cart', async () => {
        await productCatalogPage.clickOnAddToCartButton(1);
        await miniCartPage.verifyMiniCartUOM();
        await miniCartPage.clickReviewCart();
    });

    it('Verify UOM on Cart Page', async () => {
        await cartPage.verifyUOMonCartPage();
        await cartPage.removeProductFromCartPage();
    });
});
