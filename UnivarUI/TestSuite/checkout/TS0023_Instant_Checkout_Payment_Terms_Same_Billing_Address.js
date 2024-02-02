let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
const testData = require('../../TestData/TestLevelData/TestCaseData.js');
let headerContentAction = require('../../PageActions/PageAction_Common/HeaderContentAction.js');
let searchResultsPage = require('../../PageActions/PageAction_Common/SearchResultsPage.js');
let instantCheckoutLoginPage = require('../../PageActions/PageAction_Common/InstantCheckoutLoginPage.js');
let accountInfoPage = require('../../PageActions/PageAction_Common/AccountInfoPage.js');
let commonTestData = require('../../TestData/TestLevelData/TestCaseData.js');
let shippingPage = require('../../PageActions/PageAction_Common/ShippingCheckoutPage.js');
let paymentPage = require('../../PageActions/PageAction_Common/PaymentCheckoutPage.js');
let orderConfPage = require('../../PageActions/PageAction_Common/OrderConfirmationPage.js');
let countryData = require('../../TestData/TestLevelData/CountryLevelData/GetCountryFile').getCountryFile();
const { getSecret } = require('../../../aws-secret-manager');

let userEmail;
let userPassword;

describe('TS0023 Instant Checkout Payment Terms Same Billing Address', function () {
    let productPrice; let productName; let selectedState; let shippingAddress;
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
    it('Enter Search Query and Verify Details', async () => {
        await headerContentAction.enterQueryInSearchBoxAndClickSearchButton(countryData.searchTerms.ICProduct);
        await searchResultsPage.verifyProductQty(1);
        await searchResultsPage.verifyItemCount(1);
        productName = await searchResultsPage.getProductNameWithNumber(countryData.searchTerms.ICProduct);
        productPrice = await searchResultsPage.getProductPrice(countryData.searchTerms.ICProduct);
    });
    it('Click on Add to Cart button and Verify Details', async () => {
        await searchResultsPage.clickAddToCartButton(countryData.searchTerms.ICProduct);
        await searchResultsPage.verifyProductDetailsMiniCart(productName, productPrice, 1);
        await searchResultsPage.clickOnCheckoutButton();
    });
    it('Enter New Email for Account Information Step', async () => {
        await accountInfoPage.verifyAccountInfoPage();
        await accountInfoPage.enterAccInfoAndClickShippingButton(commonTestData.common.firstName_Dynamic, commonTestData.common.lastName_Dynamic, commonTestData.common.mailinatorMail_Dynamic, userPassword, userPassword);
        await accountInfoPage.clickOnNextShippingButton();
    });
    it('Enter Details in Shipping page and Verify Details', async () => {
        await shippingPage.verifyShippingPage();
        await shippingPage.enterUserDetails(countryData.shippingAddress.validShipAddress, countryData.shippingAddress.validState, countryData.shippingAddress.validCity,  commonTestData.common.phoneNumber_Dynamic, countryData.shippingAddress.validZipcode);
        await shippingPage.selectDeliveryInfoRadio(commonTestData.common.no);
        await shippingPage.verifyDisclaimerMessage();
        await shippingPage.fillOutShippingPONumber('12345');
        await shippingPage.clickProductUsageCheckBox();
        await shippingPage.selectDateFromCalender('3');
        await shippingPage.clickOnNextPaymentButton();
    });
    // it('Validate Smarty Streets Model', async () => {
    //     await shippingPage.verifyShippingAddress();
    // })
    it('Verify Details in Payment page and Proceed', async () => {
        await paymentPage.verifyPaymentPage();
        await paymentPage.selectPaymentTermsRadio();
        await paymentPage.clickOnInstantCheckoutTermsAndConditionsBox('request_terms');
        await paymentPage.clickOnInstantCheckoutSubmitButton();
    });
    it('Verify Details in Order Confirmation Page', async () => {
        await orderConfPage.verifyOrderConfirmationPage();
        await orderConfPage.verifyPaymentMethod();
        await orderConfPage.verifyLiftGateValue();
        await orderConfPage.verifyShippingAddress();
        await orderConfPage.verifyBillingAddress();
        await orderConfPage.verifyOrderSummary(productName, 1, productPrice);
    });
});
