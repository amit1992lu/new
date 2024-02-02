let commonActions = require('../../../Utilities/CommonActions.js');
let invoices_loc = require('../../Locator/Locator_Common/InvoicesPage_Locator.js');
const orderDetails_Loc = require('../../Locator/Locator_Common/OrderDetails_Locator');
const personalizedHomePage_loc = require('../../Locator/Locator_Common/PersonalizedHomePage_Locator');
const commonPage_loc = require('../../Locator/Locator_Common/Common_Locators');
const CommonActions = require('../../../Utilities/CommonActions.js');
const TestCaseData = require('../../TestData/TestLevelData/TestCaseData');
let getLanguageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile.js').getLanguageFile();

class InvoicesPage {
    async verifyAllInvoiceList() {
        await commonActions.waitForVisible(invoices_loc.ALL_INVOICES_LIST, 'All Invoices');
        let invoiceList = await commonActions.findElements(invoices_loc.ALL_INVOICES_LIST, 'All Invoices List');
        await expect(invoiceList.length).to.be.least(1, 'Invoices list');
        let invoiceStatus = await commonActions.findElements(invoices_loc.INVOICE_STATUS, 'Invoice Status');
        for (let status_ = 0; status_ < invoiceStatus.length; status_++) {
            let invoiceStatusName = await commonActions.safeGetText(invoiceStatus[status_], 'Invoice Status');
            await commonActions.safeAsserts('contains', getLanguageFile.invoices.status, 'Invoice Status', invoiceStatusName);
        }
        //Verify Headers
        let invoiceHeader = await commonActions.safeIsVisible(invoices_loc.INVOICE_NUMBER_HEADER, 'Invoice Number Header');
        await commonActions.safeAsserts('true', invoiceHeader, 'Invoice header');
        let totalAmountHeader = await commonActions.safeIsVisible(invoices_loc.TOTAL_AMOUNT_HEADER, 'Total Amount Header');
        await commonActions.safeAsserts('true', totalAmountHeader, 'Total Amount Header');
        let dateDueHeader = await commonActions.safeIsVisible(invoices_loc.DATE_DUE_HEADER, 'Date Due Header');
        await commonActions.safeAsserts('true', dateDueHeader, 'Date Due Header');
        let invoiceStatusHeader = await commonActions.safeIsVisible(invoices_loc.INVOICE_STATUS, 'Invoice Status Header');
        await commonActions.safeAsserts('true', invoiceStatusHeader, 'Invoice Status Header');
        let orderNumberHeader = await commonActions.safeIsVisible(invoices_loc.ORDER_NUMBER_HEADER, 'Order Number Header');
        await commonActions.safeAsserts('true', orderNumberHeader, 'Order Number Header');
        let poNumberHeader = await commonActions.safeIsVisible(invoices_loc.PO_NUMBER_HEADER, 'PO Number Header');
        await commonActions.safeAsserts('true', poNumberHeader, 'PO Number Header');
        let shipToAcctHeader = await commonActions.safeIsVisible(invoices_loc.SHIP_TO_ACCT_HEADER, 'Ship To Acct  Header');
        await commonActions.safeAsserts('true', shipToAcctHeader, 'Ship to acct header');
        let viewInvoiceHeader = await commonActions.safeIsVisible(invoices_loc.VIEW_INVOICE_HEADER, 'View Invoice Header');
        await commonActions.safeAsserts('true', viewInvoiceHeader, 'View Invoice Header');
    }
    async navigatetoInvoicePage() {
        if (process.env.ENV === 'QA') {
            browser.url(TestCaseData.common.invoiceurl_qa);
        } else if (process.env.ENV === 'DEV'){
            browser.url(TestCaseData.common.invoiceurl_dev);
        }
    }
    async verifyShipToDropdown() {
        await commonActions.waitForClickable(invoices_loc.SHIPPING_ADDRESS_DROPDOWN, 'Ship To Drop down');
        await commonActions.safeVisibleClick(invoices_loc.SHIPPING_ADDRESS_DROPDOWN, 'Ship To Drop down');
        let shipToSearchBox = await commonActions.findElements(invoices_loc.SHIP_TO_SEARCH_BOX, 'Ship To Search box');
        await commonActions.safeAsserts('equal', shipToSearchBox.length, 'Shipt to search box length', 1);
        let shipToAddressList = await commonActions.findElements(invoices_loc.SHIP_TO_ADDRESS_LIST, 'Ship To Addresses List');
        await commonActions.safeAsserts('greaterThanOrEqual', shipToAddressList.length, 'Ship To Addesses Length', 1);
    }

    async verifyInfoMessageReminderRibbon() {
        await commonActions.waitForVisible(commonPage_loc.COMMON_PAYMENT_REMINDER_TEXT, 'Email reminder info message on Invoices Page');
        let infoMessageText = await commonActions.safeGetText(commonPage_loc.COMMON_PAYMENT_REMINDER_TEXT, 'Email reminder info message on Invoices Page')
        await commonActions.safeAsserts('contains', infoMessageText, 'Email info text on Invoices Page', getLanguageFile.commonInfoMessages.PaymentReminderInfoMessage);
    }
    async clickOnTurnOnEmailRemindersCTA() {
       await commonActions.waitForVisible(personalizedHomePage_loc.EMAIL_REMINDER_MESSAGE, 'Turn on email reminders')
        await commonActions.safeClick(personalizedHomePage_loc.EMAIL_REMINDER_MESSAGE, 'Turn on email reminders');
    }
    async VerifyInvoicePaymentPage() {
        await commonActions.scrollTo(invoices_loc.SUBMIT_BUTTON, 'Submit Payment button scroll ');
        await commonActions.safeVisibleClick(invoices_loc.SUBMIT_BUTTON, 'Submit Payment button');
        await commonActions.waitForVisible(invoices_loc.INVOICE_HEADER, 'Invoice Payment Header');
        await commonActions.waitForVisible(invoices_loc.INVOICE_NUMBER_VAL_MSSG, 'Invoice Number validation Message');
        await commonActions.waitForVisible(invoices_loc.PAYMENT_AMOUNT_VALIDATION_MSSG, 'Payment Amount Validation Message');
        await commonActions.scrollTo(invoices_loc.BANK_NAME_VALIDATION_MSSG, 'Bank Name Validation Message');
        await commonActions.waitForVisible(invoices_loc.BANK_NAME_VALIDATION_MSSG, 'Bank Name Validation Message');
        await commonActions.waitForVisible(invoices_loc.BANK_ADDRESS_VALIDATION_MSSG, 'Bank Address Validation Message');
        await commonActions.waitForVisible(invoices_loc.CITY_VALIDATION_MSSG, 'City field Validation Message');
        await commonActions.waitForVisible(invoices_loc.STATE_VALIDATION_MSSG, 'State field Validation Message');
        await commonActions.waitForVisible(invoices_loc.ZIP_VALIDATION_MSSG, 'Zip field Validation Message');
        await commonActions.waitForVisible(invoices_loc.BANK_ROUTING_NUMBER_VALIDATION_MSSG, 'Bank routing Validation Message');
        await commonActions.waitForVisible(invoices_loc.ACCOUNT_NUMBER_VALIDATION_MSSG, 'Account Number Validation Message');
        await commonActions.waitForVisible(invoices_loc.ACCOUNT_HOLDER_PHONE_VALIDATION_MSSG, 'Account Holder Phone Validation Message');
        await commonActions.waitForVisible(invoices_loc.INVOICE_CHECKBOX_VALIDATION_MSSG, 'Submit Payment Checkbox Validation Message');
    }
    async enterInvoiceNo(invoiceNumber){
        await commonActions.safeVisibleClick(invoices_loc.INVOICE_NO,  'Invoice Number');
        await commonActions.setValue(invoices_loc.INVOICE_NO, invoiceNumber, 'Invoice Number');
    }
    async enterPayerNo(payernumber){
        await commonActions.safeVisibleClick(invoices_loc.PAYER_NUMBER,  'Payer Number');
        await commonActions.setValue(invoices_loc.PAYER_NUMBER, payernumber, 'Payer Number');
    }
    async enterEmailAddress(emailAddress){
        await commonActions.safeVisibleClick(invoices_loc.EMAIL_ADDRESS,  'Email Address');
        await commonActions.setValue(invoices_loc.EMAIL_ADDRESS, emailAddress, 'Email Address');
    }
    async enterPaymentAmount(paymentAmount){
        await commonActions.safeVisibleClick(invoices_loc.PAYMENT_AMOUNT,  'Payment Amount');
        await commonActions.setValue(invoices_loc.PAYMENT_AMOUNT, paymentAmount, 'Payment Amount');
    }
    async enterBankName(bankname){
        await commonActions.setValue(invoices_loc.BANK_NAME, bankname, 'Bank Name');
    }
    async enterBankAddress(bankAddress){
        await commonActions.setValue(invoices_loc.BANK_ADDRESS, bankAddress, 'Bank Address');
    }
    async enterCity(city){
        await commonActions.setValue(invoices_loc.CITY, city, 'City Field');
    }
    async selectState(state){
        await commonActions.selectByText(invoices_loc.STATE_DROPDWN, state, 'State Name Dropdown');
    }
    async enterZip(zip){
        await commonActions.setValue(invoices_loc.ZIP, zip, 'Zip Code Field');
    }
    async enterBankRoutingNo(bankRoutingNumber){
        await commonActions.setValue(invoices_loc.BANK_ROUTING_NO, bankRoutingNumber, 'Bank Routing No. Field');
    }
    async enterBankAccountNo(accountNumber){
        await commonActions.setValue(invoices_loc.ACCOUNT_NO, accountNumber, 'Bank Account No. Field');
    }
    async enterBankAccountHolderPhone(accountHolderPhone){
            await commonActions.setValue(invoices_loc.ACCOUNT_HOLDER_PHONE, accountHolderPhone, 'Bank Account Holder Phone. Field');
    }
    async clickTermsCheckBox() {
        await commonActions.safeJavaScriptClick(invoices_loc.INVOICE_TERMS_BOX, 'Click Terms box')
    }
    async clickSubmitButton(){
        await commonActions.safeVisibleClick(invoices_loc.SUBMIT_BUTTON,  'Submit Payment button');
    }
    async verifyinvoiceSuccessMessage(expinvoicesuccessMsg) {
        let invoiceSuccessToastMssg = await commonActions.safeGetText(invoices_loc.INVOICE_SUCCESS_MESSAGE, expinvoicesuccessMsg)
        await commonActions.safeAsserts('contains', invoiceSuccessToastMssg,  'this is the actual message => '+invoiceSuccessToastMssg+ ' and expected message is =>'+expinvoicesuccessMsg, expinvoicesuccessMsg)
    }
    async SelectOrderType_Invoice(locator, message) {
        await commonActions.elementIsNotDisplayed(commonPage_loc.LOADING_MASK);
        await commonActions.waitForClickable(invoices_loc.INVOICE_ORDER_TYPE, 'Order Type Dropdown in Invoices Page');
        await commonActions.safeVisibleClick(invoices_loc.INVOICE_ORDER_TYPE, 'Order Type Dropdown in Invoices Page');
        await commonActions.elementIsNotDisplayed(commonPage_loc.LOADING_MASK);
        await commonActions.safeVisibleClick(locator, message);
        if (message.includes('Chemical')) {
            await commonActions.safeAsserts('true', await commonActions.safeIsVisible(invoices_loc.CHEMICAL_INGREDIENTS_ORDER_NO, 'Chemical Ingredients Order number in Invoices page'), 'Assertion on Chemical Ingredients Order no in Invoices page');
        }
        else {
            await commonActions.waitForVisible(invoices_loc.CHEMCARE_ORDER_NO, 'Chemcare Order number in Invoices page');
            await commonActions.safeAsserts('true', await commonActions.safeIsVisible(invoices_loc.CHEMCARE_ORDER_NO, 'Chemcare Order number in Invoices page'), 'Assertion on Chemcare order no in Invoices page');
            await commonActions.safeAsserts('false', await commonActions.safeIsVisible(invoices_loc.CHEMICAL_INGREDIENTS_ORDER_NO, 'Chemical Ingredients Order number in Invoices page'), 'Assertion on Chemical Ingredients Order no in Invoices page');
        }
    }
}

module.exports = new InvoicesPage();
