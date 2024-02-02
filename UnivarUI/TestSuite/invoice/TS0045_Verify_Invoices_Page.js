'use strict';
let homePage = require('../../PageActions/PageAction_Common/HomePage')
let signInPage = require('../../PageActions/PageAction_Common/SignInPage')
let testData = require('../../TestData/TestLevelData/TestCaseData')
let headerPage = require('../../PageActions/PageAction_Common/HeaderContentAction.js');
let invoicePage = require('../../PageActions/PageAction_Common/InvoicesPage.js');
const { getSecret } = require('../../../aws-secret-manager');
let userEmail;
let userPassword;

describe('TS0045 Verify Invoices Page', function () {
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
        await signInPage.clickOnSignInButton()
    });

    it('Verify Invoice Page', async () => {
        await headerPage.clickOnMYAccountDropdown();
        await headerPage.clickOnInvoicesLink();
        await invoicePage.verifyAllInvoiceList();
        await invoicePage.verifyShipToDropdown();
    })
})
