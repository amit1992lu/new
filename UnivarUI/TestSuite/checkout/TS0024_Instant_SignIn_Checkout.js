let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
const testData = require('../../TestData/TestLevelData/TestCaseData.js');
let headerContentAction = require('../../PageActions/PageAction_Common/HeaderContentAction.js');
let accountInfoPage = require('../../PageActions/PageAction_Common/AccountInfoPage.js');
let searchResultsPage = require('../../PageActions/PageAction_Common/SearchResultsPage.js');
let commonTestData = require('../../TestData/TestLevelData/TestCaseData.js');
let shippingPage = require('../../PageActions/PageAction_Common/ShippingCheckoutPage.js');
let personalHomepage = require('../../PageActions/PageAction_Common/PersonalizedHomePage.js');
let cartPage = require('../../PageActions/PageAction_Common/CartPage.js');
const { getSecret } = require('../../../aws-secret-manager');

let userEmail;
let userPassword;

describe('TS0024 Instant Sign In Checkout', function () {
    let productPrice; let productName;
    before(async ()=>{
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
    it('Enter Search Query and Verify Details',async ()=>{
        await headerContentAction.enterQueryInSearchBoxAndClickSearchButton(commonTestData.common.webPriceSku);
        await searchResultsPage.verifyProductNumber(commonTestData.common.webPriceSku);
        await searchResultsPage.verifyWebPriceTag();
        await searchResultsPage.verifyProductQty(1);
        await searchResultsPage.verifyItemCount(1);
        productName = await searchResultsPage.getProductNameWithNumber(commonTestData.common.webPriceSku);
        productPrice = await searchResultsPage.getProductPrice(commonTestData.common.webPriceSku);
    });
    it('Click on Add to Cart button and Verify Details',async ()=>{
        await searchResultsPage.clickAddToCartButton(commonTestData.common.webPriceSku);
        await searchResultsPage.verifyProductDetailsMiniCart(productName, productPrice, 1);
        await searchResultsPage.clickOnCheckoutButton();
    });
    it('Verify Instant Checkout and Verify Cart page',async ()=>{
        await accountInfoPage.verifyAccountInfoPage();
        await accountInfoPage.enterExistingUserAndLogin(userEmail, userPassword);
        await accountInfoPage.clickOnNextShippingButton();
        await shippingPage.verifyShippingPage();
    });
    it('Removes product from cart', async () => {
        await accountInfoPage.returnToCart();
        await cartPage.removeProductFromCartPage();
    })
});
