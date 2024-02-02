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
let orderNumber_ = countryData.orderHistoryPage.orderNumber;
let invoicesPage = require('../../PageActions/PageAction_Common/InvoicesPage.js')
let commonPage = require('../../PageActions/PageAction_Common/CommonActionPage.js');
const { getSecret } = require('../../../aws-secret-manager');
let userEmail;
let userPassword;

describe('TS0055 Email Reminder', function () {
    let orderNumber_ = countryData.orderHistoryPage.orderNumber;
    before(async () => {
        if(process.env.DEVICE_FARM) {
            const secretResponse = await getSecret('digital-qa-automation-test');
            userEmail = await secretResponse['UNIVAR_MY_ACCOUNT_USER']
            userPassword = await secretResponse['UNIVAR_MY_ACCOUNT_PASSWORD'];
        } else {
            userEmail = process.env.UNIVAR_MY_ACCOUNT_USER;
            userPassword = process.env.UNIVAR_MY_ACCOUNT_PASSWORD;
        }
        await homePage.navigateToAppHomePage()
        await homePage.verifyHomePage(testData.common.trueStatus);
        await homePage.acceptCookieConsent();
    });

    it('Enter Credentials and Sign In', async () => {
        let commonTestData = await testData.common;
        await homePage.clickOnSignInLink();
        await signInPage.loginWithValidCredentials(userEmail, userPassword);
    });

    it('Verify Email Reminder Info message on Personalized Homepage', async () => {
        await personalHomepage.clickOnTurnOnEmailRemindersCTA();
    });

    it('Verify Email Reminder Info in Order History Page', async () => {
        await headerPage.clickOnOrdersCTA();
        await orderHistory.clickOnTurnOnEmailRemindersCTA();
    });

    it('Verify Email Reminder Info in Order Details Page', async () => {
        let orderID = await orderHistory.getOrderIdFromOrderList();
        await orderHistory.searchOrderUsingSearchBox(orderID)
        await orderHistory.clickOnOrderDetailsButton(0);
        await orderDetails.clickOnTurnOnEmailRemindersCTA();
    });

    it('Verify Email Reminder Info on Invoices Page', async () => {
        await headerPage.clickOnInvoicesCTA();
        await invoicesPage.clickOnTurnOnEmailRemindersCTA();
        await commonPage.verifyPaymentReminderOptInModal();
        await commonPage.clickOnPaymentReminderToggle();
        await commonPage.verifyPaymentReminderOptOutModal();
        await commonPage.closePaymentReminderModal();
        await invoicesPage.verifyInfoMessageReminderRibbon();
    });
});
