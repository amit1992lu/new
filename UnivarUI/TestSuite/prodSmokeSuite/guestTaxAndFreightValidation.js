let accountInfoPage = require('../../PageActions/PageAction_Common/AccountInfoPage.js');
let commonTestData = require('../../TestData/TestLevelData/TestCaseData.js');
let countryData = require('../../TestData/TestLevelData/CountryLevelData/GetCountryFile.js').getCountryFile();
let headerContentAction = require('../../PageActions/PageAction_Common/HeaderContentAction.js');
let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let paymentPage = require('../../PageActions/PageAction_Common/PaymentCheckoutPage.js');
let productCatalog = require('../../PageActions/PageAction_Common/ProductCatlog.js');
let productDetail = require('../../PageActions/PageAction_Common/ProductDetail.js');
let searchResultsPage = require('../../PageActions/PageAction_Common/SearchResultsPage.js');
let shippingPage = require('../../PageActions/PageAction_Common/ShippingCheckoutPage.js');
const { getSecret } = require('../../../aws-secret-manager');
let searchQry;
let userPassword;
if(process.env.ENV === 'PROD') {
    searchQry = countryData.searchTerms.webPrice
} else if(process.env.ENV === 'DEV') {
    searchQry = countryData.searchTerms.webPriceDev
} else {
    searchQry = countryData.searchTerms.webPrice
}


describe('Guest Tax and Freight Validation', () => {
    before(async () => {
        if(process.env.DEVICE_FARM) {
            const secretResponse = await getSecret('digital-qa-automation-test');
            userPassword = await secretResponse['PRODPASSWORD'];
        } else {
            userPassword = process.env.PRODPASSWORD;
        }
        await homePage.navigateToAppHomePage();
        await homePage.acceptCookieConsent();
    });

    it('Search product, add product to cart and navigate to checkout', async () => {
        await headerContentAction.enterQueryInSearchBoxAndClickSearchButton(searchQry);
        await searchResultsPage.clickAddToCartButton(searchQry);
        await searchResultsPage.clickOnCheckoutButton();
    });

    it('Enter New Email for Account Information Step', async () =>{
        await accountInfoPage.verifyAccountInfoPage();
        await accountInfoPage.enterAccInfoAndClickShippingButton(commonTestData.common.firstName_Dynamic, commonTestData.common.lastName_Dynamic, commonTestData.common.mailinatorMail_Dynamic, userPassword, userPassword);
        await accountInfoPage.clickOnNextShippingButton();
    });

    it('Enter Details in Shipping page', async () =>{
        await shippingPage.verifyShippingPage();
        await shippingPage.enterUserDetails(countryData.shippingAddress.validShipAddress, countryData.shippingAddress.validState, countryData.shippingAddress.validCity,  commonTestData.common.phoneNumber_Dynamic, countryData.shippingAddress.validZipcode);
        await shippingPage.clickProductUsageCheckBox();
        await shippingPage.selectDateFromCalender('3');
        await shippingPage.fillOutShippingPONumber('12345');
    });

    it('Validate Freight is appearing', async ()=>{
        await shippingPage.verifyEstimatedCostIsNonZero(0);
    });

    it('Validate Tax is appearing', async () =>{
        await shippingPage.verifyEstimatedCostIsNonZero(1);
    });

    it('Navigate to Payment page', async () => {
        await shippingPage.clickOnNextPaymentButton();
    });

    it('Validate Freight is appearing', async ()=>{
        await shippingPage.verifyEstimatedCostIsNonZero(0);
    });

    it('Validate Tax is appearing', async () =>{
        await shippingPage.verifyEstimatedCostIsNonZero(1);
    });
});
