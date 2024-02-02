'use strict';
let homePage = require('../../PageActions/PageAction_Common/HomePage');
let signInPage = require('../../PageActions/PageAction_Common/SignInPage');
let testData = require('../../TestData/TestLevelData/TestCaseData');
let invoicePage = require('../../PageActions/PageAction_Common/InvoicesPage.js');
const TestCaseData = require('../../TestData/TestLevelData/TestCaseData.js');
let invoices_loc = require('../../Locator/Locator_Common/InvoicesPage_Locator.js');
const { getSecret } = require('../../../aws-secret-manager');
let userEmail;
let userPassword;

describe('TS0051 Verify Invoice As Per Order Type', function () {
    before(async () => {
        if(process.env.DEVICE_FARM) {
            const secretResponse = await getSecret('digital-qa-automation-test');
            userEmail = await secretResponse['CHEMCARE_MULTIUSER']
            userPassword = await secretResponse['CHEMCARE_MULTIUSRPASSWORD'];
        } else {
            userEmail = process.env.CHEMCARE_MULTIUSER;
            userPassword = process.env.CHEMCARE_MULTIUSRPASSWORD;
        }
        await homePage.navigateToAppHomePage();
        await homePage.acceptCookieConsent();
        await homePage.verifyHomePage(testData.common.trueStatus);
    })
    it('Login with valid credentials',async ()=>{
        await homePage.clickOnSignInLink();
        await signInPage.loginWithValidCredentials(userEmail, userPassword);
    })
    it('Click on Invoice Link tab',async ()=>{
        await homePage.clickOnInvoicesLink();
    })
    it('Click on Chemical/Ingredients from Order Type Dropdown', async () => {
        await invoicePage.SelectOrderType_Invoice(invoices_loc.INVOICE_CHEMICAL_INGREDIENTS, 'Chemical Ingredients Order Type in Invoices Page');
    })
    it('Click on Chemcare from Order Type Dropdown', async () => {
        await invoicePage.SelectOrderType_Invoice(invoices_loc.INVOICE_CHEMCARE, 'Chemcare Order Type in Invoices Page');
    });
})
