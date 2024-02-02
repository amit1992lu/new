let homePage = require('../../PageActions/PageAction_Common/HomePage')
let signInPage = require('../../PageActions/PageAction_Common/SignInPage')
let testData = require('../../TestData/TestLevelData/TestCaseData')
let personalizedHomepage = require('../../PageActions/PageAction_Common/PersonalizedHomePage')
let commonSuccessMsg = require('../../TestData/TestLevelData/CommonMessage')
let headerPage = require('../../PageActions/PageAction_Common/HeaderContentAction.js');
let getLanguageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile.js');
let forgotPwdPage = require('../../PageActions/PageAction_Common/ForgotPasswordPage.js');
let invoicePage = require('../../PageActions/PageAction_Common/InvoicesPage.js');
let ordersPage = require('../../PageActions/PageAction_Common/OrderHistoryPage.js');
let languageFile = getLanguageFile.getLanguageFile();
const { getSecret } = require('../../../aws-secret-manager');
let userEmail;
let userPassword;
let myAccountList;

describe('TS0042 Verify Header Links', function () {
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
        await homePage.acceptCookieConsent();
        await homePage.verifyHomePage(testData.common.trueStatus);
        await homePage.clickOnSignInLink()
        await signInPage.enterEmail(userEmail)
        await signInPage.enterPassword(userPassword);
        await signInPage.clickOnSignInButton();
    })
    if (process.env.REGION == 'US') {
        it('TS0042_Verify_InvoicesLink_On_Header', async () => {
            await headerPage.clickOnInvoicesCTA();
            await invoicePage.verifyAllInvoiceList();
            await invoicePage.verifyShipToDropdown();
        })
    }

    it('TS0042_Verify_Orders_Link_On_Header', async () => {
        await headerPage.clickOnOrdersCTA();
        await ordersPage.verifyOrderHistoryPage(languageFile.orderHistoryPage.orderHistory);
    })

})
