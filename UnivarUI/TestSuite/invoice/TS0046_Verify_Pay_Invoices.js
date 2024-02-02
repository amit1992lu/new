'use strict';
let homePage = require('../../PageActions/PageAction_Common/HomePage')
let signInPage = require('../../PageActions/PageAction_Common/SignInPage')
let testData = require('../../TestData/TestLevelData/TestCaseData')
let headerPage = require('../../PageActions/PageAction_Common/HeaderContentAction.js');
let invoicePage = require('../../PageActions/PageAction_Common/InvoicesPage.js');
const TestCaseData = require('../../TestData/TestLevelData/TestCaseData');
const { navigate } = require('../../../Utilities/CommonActions');
const CommonActions = require('../../../Utilities/CommonActions');
const { getSecret } = require('../../../aws-secret-manager');
let userEmail;
let userPassword;

describe('TS0046 Verify Payment Functionality', function () {
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
        await homePage.acceptCookieConsent();
        await homePage.verifyHomePage(testData.common.trueStatus);
        await homePage.clickOnSignInLink()
        await signInPage.enterEmail(userEmail)
        await signInPage.enterPassword(userPassword);
        await signInPage.clickOnSignInButton()
    })
    it('Verify_Error_Message_Invoice_PaymentPage', async () => {
        await invoicePage.navigatetoInvoicePage();
        await invoicePage.VerifyInvoicePaymentPage();
    })
    it('Enter_Payment_Details_Invoice_No', async () => {
        await invoicePage.enterInvoiceNo(TestCaseData.common.invoice_no);
    })
    it('Enter_Payment_Details_Payment_Amount', async () => {
        await invoicePage.enterPaymentAmount(TestCaseData.common.paymentamount);
    })
    it('Enter_Payment_Details_Bank_Name', async () => {
        await invoicePage.enterBankName(TestCaseData.common.bank_name);
    })
    it('Enter_Payment_Details_Bank_Address', async () => {
        await invoicePage.enterBankAddress(TestCaseData.common.bank_address);
    })
    it('Enter_Payment_Details_City', async () => {
        await invoicePage.enterCity(TestCaseData.common.city);
    })
    it('Enter_Payment_Details_State', async () => {
        await invoicePage.selectState(TestCaseData.common.state);
    })
    it('Enter_Payment_Details_Zip', async () => {
        await invoicePage.enterZip(TestCaseData.common.zip);
    })
    it('Enter_Payment_Details_Bank_Routing_No', async () => {
        await invoicePage.enterBankRoutingNo(TestCaseData.common.bank_routing_no);
    })
    it('Enter_Payment_Details_Bank_Account_No', async () => {
        await invoicePage.enterBankAccountNo(TestCaseData.common.account_no);
    })
    it('Enter_Payment_Details_Bank_Account_Holder_Phone', async () => {
        await invoicePage.enterBankAccountHolderPhone(TestCaseData.common.account_holder_phone);
    })
    it('Click Terms Checkbox', async () => {
        await invoicePage.clickTermsCheckBox();
    })
    it('Click_Submit_Payment_Button', async () => {
        await invoicePage.clickSubmitButton();
    })
    it('Verify_Invoice_Payment_Success_Message', async () => {
        await invoicePage.verifyinvoiceSuccessMessage(TestCaseData.common.invoicesuccessmssg);
    })
})
