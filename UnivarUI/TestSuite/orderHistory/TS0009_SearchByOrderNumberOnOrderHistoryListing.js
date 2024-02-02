let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let testData = require('../../TestData/TestLevelData/TestCaseData.js');
let pageData = require('../../TestData/TestLevelData/PageLevelData.js')
let safeAction = require('../../../Utilities/CommonActions.js');
let signInPage = require('../../PageActions/PageAction_Common/SignInPage');
let personalizedHomePage = require('../../PageActions/PageAction_Common/PersonalizedHomePage');
let orderHistoryLink = require('../../PageActions/PageAction_Common/OrderHistoryPage')
let getLanguageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile');

let getLanguage = getLanguageFile.getLanguageFile();
const { getSecret } = require('../../../aws-secret-manager');
let userEmail;
let userPassword;

describe('TS009 Search By Order Number On Order History Listing', function () {
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
        let commonTestData = await testData.common;
        await homePage.clickOnSignInLink();
        await signInPage.loginWithValidCredentials(userEmail,userPassword);
    });

    it('Validate Search Order Number', async () => {
        await personalizedHomePage.verifyAndClickOnOrderHistoryLink();
        await orderHistoryLink.verifyOrderHistoryPage(getLanguage.orderHistoryPage.orderHistory);
        await orderHistoryLink.verifyOrderHistoryFilters([getLanguage.orderHistoryPage.allOrders,getLanguage.orderHistoryPage.openOrders,getLanguage.orderHistoryPage.completedOrders,getLanguage.orderHistoryPage.cancelledOrders]);
        let orderID = await orderHistoryLink.getOrderIdFromOrderList();
        await orderHistoryLink.searchOrderUsingSearchBox(orderID);
        await orderHistoryLink.verifyOrderDetails(orderID);
    });
});
