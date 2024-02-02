let testData = require('../../TestData/TestLevelData/TestCaseData.js');
let productCatalogPage = require('../../PageActions/PageAction_Common/ProductCatlog.js');
let paymentPage = require('../../PageActions/PageAction_Common/PaymentCheckoutPage.js');
let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let orderConfirmationPage = require('../../PageActions/PageAction_Common/OrderConfirmationPage.js');
let personalizedHomepage =  require('../../PageActions/PageAction_Common/PersonalizedHomePage.js');
let shippingPage = require('../../PageActions/PageAction_Common/ShippingCheckoutPage.js');
let signInPage = require('../../PageActions/PageAction_Common/SignInPage');
let searchResultsPage = require('../../PageActions/PageAction_Common/SearchResultsPage.js');
const { getSecret } = require('../../../aws-secret-manager');
let userEmail;
let userPassword;

describe('TS015 Order Submission From PLP', function () {
    let date;
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
    it('Enter Credentials and Sign In',async ()=>{
        await homePage.clickOnSignInLink();
        await signInPage.loginWithValidCredentials(userEmail, userPassword);
    });
    it('Delete Items from Mini Cart',async ()=>{
        await personalizedHomepage.deleteItemsFromMiniCart();
    });
    it('Click on Quote Product and verify Details in MiniCart',async ()=>{
        await personalizedHomepage.clickOnQuotedProductsCTA();
        await productCatalogPage.clickOnAddToCartButton(1);
    });
    it('Enter Details in shipping page and proceed',async ()=>{
        await searchResultsPage.clickOnCheckoutButton();
        await shippingPage.verifyShippingPage();
        date = await shippingPage.selectDateFromCalender('3');
        await shippingPage.fillOutShippingPONumber('12345');
        await shippingPage.clickOnNextPaymentButton();
    });
    it('Enter Details on payment page and proceed',async ()=>{
        await paymentPage.verifyPaymentPage();
        await paymentPage.verifyShippingAddressBlock(date);
        await paymentPage.clickOnTermsAndConditionsCheckBox();
        await paymentPage.clickOnSubmitOrderButton();
    });
    it('Verify details in order confirmation page',async ()=>{
        await orderConfirmationPage.verifyOrderConfirmationPage();
    });
});
