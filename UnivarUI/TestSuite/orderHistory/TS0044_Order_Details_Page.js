let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let testData = require('../../TestData/TestLevelData/TestCaseData.js');
let commonActions = require('../../../Utilities/CommonActions.js');
let signInPage = require('../../PageActions/PageAction_Common/SignInPage');
let orderDetails = require('../../PageActions/PageAction_Common/OrderDetailsPage.js');
let orderHistory = require('../../PageActions/PageAction_Common/OrderHistoryPage.js');
let headerPage = require('../../PageActions/PageAction_Common/HeaderContentAction.js');
let personalHomepage = require('../../PageActions/PageAction_Common/PersonalizedHomePage.js');
let countryData = require('../../TestData/TestLevelData/CountryLevelData/GetCountryFile').getCountryFile();

let getLanguageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile').getLanguageFile();
const { getSecret } = require('../../../aws-secret-manager');
let userEmail;
let userPassword;


describe('TS044 Verify Order Details Page', function () {
    let poNumber;
    let orderTotal;
    let orderLength;
    before(async () => {
        if(process.env.DEVICE_FARM) {
            const secretResponse = await getSecret('digital-qa-automation-test');
            userEmail = await secretResponse['PRODUSER']
            userPassword = await secretResponse['PRODPASSWORD'];
        } else {
            userEmail = process.env.PRODUSER;
            userPassword = process.env.PRODPASSWORD;
        }
        await homePage.navigateToAppHomePage()
        await homePage.verifyHomePage(testData.common.trueStatus);
        await homePage.acceptCookieConsent();
    });

    it('Enter Credentials and Sign In', async () => {
        await homePage.clickOnSignInLink();
        await signInPage.loginWithValidCredentials(userEmail, userPassword);
    });

    it('Get Order Details from OH page', async () => {
        await headerPage.clickOnOrdersCTA();
        orderTotal = await orderHistory.getOrderTotal(1);
        poNumber = await orderHistory.getPONumber_OH(1);
        orderLength = await orderHistory.getLengthOfOrders(1);
        await orderHistory.clickOnOrderDetailsButton(1);
    })
    it('Verify Order in Order Details Page', async () => {
        await orderDetails.verifyPONumber(poNumber);
        await orderDetails.verifyLineOrderLength(orderLength);
        await orderDetails.verifyEstimatedTotal(orderTotal);
        await orderDetails.verifyOrderDetailsBreadCrumb();
        await personalHomepage.deleteItemsFromMiniCart();
        await headerPage.closeMiniCartTray();
        if (process.env.REGION=='US' || process.env.REGION=='CA_EN' || process.env.REGION=='CA_FR'){
            await orderDetails.clickOnReorderAllItemsButton();
            await headerPage.verifyMiniCartLineItems(parseInt(orderLength));
            await personalHomepage.deleteItemsFromMiniCart();
            await headerPage.closeMiniCartTray();
            await orderDetails.clickOnBuyNowButtonAndVerify()
        }
    });
});
