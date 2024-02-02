let homePage = require('../../PageActions/PageAction_Common/HomePage')
let signInPage = require('../../PageActions/PageAction_Common/SignInPage')
let testData = require('../../TestData/TestLevelData/TestCaseData')
const setUpAutoPay = require('../../PageActions/PageAction_Common/SetUpAutoPay');
const HeaderContentAction = require('../../PageActions/PageAction_Common/HeaderContentAction');
const { getSecret } = require('../../../aws-secret-manager');

let userEmail;
let userPassword;

describe('TS0074_Verify_AutoPay_Page_Payment_method', function () {
    before('Launch and Login as user', async () => {
        if(process.env.DEVICE_FARM) {
            const secretResponse = await getSecret('digital-qa-automation-test');
            userEmail = await secretResponse['AUTOPAYUSERID']
            userPassword = await secretResponse['AUTOPAYUSERPASSWORD'];
        } else {
            userEmail = process.env.AUTOPAYUSERID;
            userPassword = process.env.AUTOPAYUSERPASSWORD;
        }
        await homePage.navigateToAppHomePage()
        await homePage.acceptCookieConsent();
        await homePage.verifyHomePage(testData.common.trueStatus);
        await homePage.clickOnSignInLink()
        await signInPage.enterEmail(userEmail)
        await signInPage.enterPassword(userPassword);
        await signInPage.clickOnSignInButton();
    })
    it('Verify Manage Auto Pay Link in HomePage', async () => {
        await homePage.verifyManageAutoPayLink();
    })
    it('Click on Manage Auto Pay link', async () => {
        await homePage.clickOnAutoPayLink();
    })
    it('Click on  Payment Method in Manage AutoPay page', async () => {
        await setUpAutoPay.clickonPaymentMethod();
    })
    it('Click on  Change Payment button in Manage AutoPay page', async () => {
        await setUpAutoPay.clickonChangePaymentButton();
    })
    it('Verify Change AutoPay Payment method in Manage AutoPay page', async () => {
        await setUpAutoPay.verifyChangeAutoPayment();
    })
    it('Click Go to personal homepage button', async () => {
        await HeaderContentAction.navigateToPersonalHomepage();
    })
    it('Verify Manage AutoPay in Home page', async () => {
        await setUpAutoPay.clickManageAutoPayHomepage();
    })
    it('Verify Manage AutoPay in Invoices page', async () => {
        await setUpAutoPay.clickOnInvoicesManageAutoPay();
    })
})
