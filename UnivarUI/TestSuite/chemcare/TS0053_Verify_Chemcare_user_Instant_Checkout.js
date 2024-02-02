let homePage = require('../../PageActions/PageAction_Common/HomePage')
let signInPage = require('../../PageActions/PageAction_Common/SignInPage')
let testData = require('../../TestData/TestLevelData/TestCaseData.js');
let personalizedHomepage = require('../../PageActions/PageAction_Common/PersonalizedHomePage')
let tableViewPage = require('../../PageActions/PageAction_Common/TableViewPage.js');
let searchResultsPage = require('../../PageActions/PageAction_Common/SearchResultsPage.js');
let shippingPage = require('../../PageActions/PageAction_Common/ShippingCheckoutPage.js');
let orderConfPage = require('../../PageActions/PageAction_Common/OrderConfirmationPage.js');
let paymentPage = require('../../PageActions/PageAction_Common/PaymentCheckoutPage.js');
let commonTestData = require('../../TestData/TestLevelData/TestCaseData.js');
const { getSecret } = require('../../../aws-secret-manager');
let userEmail;
let userPassword;

describe('TS0053 Verify ChemCare User Instant Checkout', function () {
    before(async () => {
        if(process.env.DEVICE_FARM) {
            const secretResponse = await getSecret('digital-qa-automation-test');
            userEmail = await secretResponse['CHEMCAREUSER']
            userPassword = await secretResponse['CHEMCAREUSERPWD'];
        } else {
            userEmail = process.env.CHEMCAREUSER;
            userPassword = process.env.CHEMCAREUSERPWD;
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
    it ('Click on Category from Product Categories Dropdown', async () => {
        await personalizedHomepage.clickOnCategoryLink(testData.common.categorylink,testData.common.subcategorylink);
        await tableViewPage.clickOnWebPricedProduct();
    });
    it ('Click on Add to Cart button', async () => {
        await tableViewPage.clickOnAddToCartCTA();
        await searchResultsPage.clickOnCheckoutButton();
    });
    it('Enter Details in Shipping page',async ()=>{
        await shippingPage.NavigatedToShippingpage();
        await shippingPage.selectDateFromCalender('3');
        await shippingPage.fillOutShippingPONumber('12345');
        await shippingPage.clickOnNextPaymentButton();
    });
    it('Enter Details in Payment Page',async ()=>{
        await paymentPage.NavigatedToPaymentpage();
        await paymentPage.selectWorldPay();
        await paymentPage.verifyDefaultPaymentMethod('worldpay_cc');
        await paymentPage.enterWorldPayCardInfo(commonTestData.common.ccNumber, 'Automation Tester', commonTestData.common.expMonth, '2025', commonTestData.common.CVV);
        await paymentPage.clickOnInstantCheckoutTermsAndConditionsBox('worldpay');
        await paymentPage.UpdateAddressButton();
        await paymentPage.clickOnInstantCheckoutSubmitButton();
    });
    it('Verify Details in Order Confirmation page',async ()=>{
        await orderConfPage.verifyOrderConfirmationPage();
    });
});
