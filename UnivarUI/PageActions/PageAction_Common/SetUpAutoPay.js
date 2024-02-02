let setUpAutoPayLoc = require('../../Locator/Locator_Common/SetupAutoPay_Locators');
let commonActions = require('../../../Utilities/CommonActions.js');
let safeAction = require('../../../Utilities/CommonActions');
const TestCaseData = require('../../TestData/TestLevelData/TestCaseData.js');
let invoices_loc = require('../../Locator/Locator_Common/InvoicesPage_Locator.js');
let homePageLoc = require('../../Locator/Locator_Common/HomePage_Locator.js');

class SetupAutoPay {
    async clickOnSetupAutoPay() {
        await commonActions.waitForVisible(setUpAutoPayLoc.TERMS_AND_CONDITIONS, 'Terms and conditions checkbox');
        await commonActions.safeVisibleClick(setUpAutoPayLoc.TERMS_AND_CONDITIONS, 'Terms and conditions checkbox');
        await commonActions.safeVisibleClick(setUpAutoPayLoc.SET_UP_AUTO_PAY, 'Terms and conditions checkbox');
    }
    async verifySetupAutoPayPage() {
        await commonActions.scrollTo(setUpAutoPayLoc.SET_UP_AUTOPAY_BUTTON, 'Scroll to Set Up AutoPay button ');
        await commonActions.safeVisibleClick(setUpAutoPayLoc.SET_UP_AUTOPAY_BUTTON, 'Click on Set Up AutoPay button');
        await commonActions.waitForVisible(setUpAutoPayLoc.BANK_ROUTING_NUMBER_VALIDATION_MSSG, 'Bank routing Number Validation Message');
        await commonActions.waitForVisible(setUpAutoPayLoc.ACCOUNT_NUMBER_VALIDATION_MSSG, 'Account Number Validation Message');
        await commonActions.waitForVisible(setUpAutoPayLoc.ACCOUNT_HOLDER_PHONE_VALIDATION_MSSG, 'Account Number Validation Message');
        await commonActions.waitForVisible(setUpAutoPayLoc.BANK_ADDRESS_VALIDATION_MSSG, 'Bank Address Validation Message');
        await commonActions.waitForVisible(setUpAutoPayLoc.CITY_VALIDATION_MSSG, 'City Field Validation Message');
        await commonActions.waitForVisible(setUpAutoPayLoc.STATE_VALIDATION_MSSG, 'State Field Validation Message');
        await commonActions.waitForVisible(setUpAutoPayLoc.SETUPAUTOPAY_CHECKBOX_VALIDATION_MSSG, 'Setup AutoPay Checkbox Validation Message');
        await commonActions.waitForVisible(setUpAutoPayLoc.TERMS_AND_CONDITIONS_CHECKBOX_VALIDATION_MSSG, 'Terms and conditions checkbox Validation Message');
    }
    async enterBankRoutingNo(bankRoutingNumber) {
        await commonActions.setValue(setUpAutoPayLoc.BANK_ROUTING_NUMBER_FIELD, bankRoutingNumber, 'Bank Routing No. in Set Up Auto Pay page');
    }
    async enterBankAccountNo(bankAccountNumber) {
        await commonActions.setValue(setUpAutoPayLoc.ACCOUNT_NUMBER_FIELD, bankAccountNumber, 'Bank Account in Set Up Auto Pay page');
    }
    async enterAccountHolderPhone(accountHolderPhone) {
        await commonActions.setValue(setUpAutoPayLoc.ACCOUNT_HOLDER_PHONE_FIELD, accountHolderPhone, 'Account Holder Phone in Set Up Auto Pay page');
    }
    async enterBankAddress(bankAddress) {
        await commonActions.setValue(setUpAutoPayLoc.BANK_ADDRESS_FIELD, bankAddress, 'Bank Address in Set Up Auto Pay page');
    }
    async enterCity(city) {
        await commonActions.setValue(setUpAutoPayLoc.CITY_FIELD, city, 'City Field in Set Up Auto Pay page');
    }
    async selectState(state) {
        await commonActions.selectByText(setUpAutoPayLoc.STATE_FIELD, state, 'State Name Dropdown in Set up Auto Pay page');
    }
    async enterZip(zip) {
        await commonActions.setValue(setUpAutoPayLoc.ZIP_FIELD, zip, 'Zip Field in Set Up Auo Pay page');
    }
    async clickSetUpAutoPayCheckBox() {
        await commonActions.safeJavaScriptClick(setUpAutoPayLoc.SETUPAUTOPAY_CHECKBOX_FIELD, 'Click Set Up Auto Pay Checkbox')
    }
    async clickTermsandConditionsCheckBox() {
        await commonActions.safeJavaScriptClick(setUpAutoPayLoc.TERMS_AND_CONDITIONS_CHECKBOX, 'Click Terms and conditions Checkbox')
    }
    async clickOnGoToPersonalHomepage() {
        await commonActions.safeJavaScriptClick(setUpAutoPayLoc.GO_TO_PERSONAL_HOMEPAGE_BUTTON, 'Click Go to personal homepage button')
    }
    async clickSetUpAutoPayButton() {
        await commonActions.safeVisibleClick(setUpAutoPayLoc.SET_UP_AUTOPAY_BUTTON, 'Click on Set Up AutoPay button');
    }
    async verifySetUpAutoPaySuccessMessage() {
        let autopaySuccessToastMsg = await safeAction.waitForVisible(setUpAutoPayLoc.SUCCESS_MESSAGE_AUTOPAY, 'Fetching SetUp Auto Pay Success message');
        await safeAction.safeAsserts('true', autopaySuccessToastMsg, 'SetUp Auto Pay Success message' + autopaySuccessToastMsg);
    }
    async clickCancelAutoPay() {
        await commonActions.waitForClickable(setUpAutoPayLoc.CANCEL_AUTOPAY, 'Click on Cancel AutoPay Link');
        await commonActions.safeVisibleClick(setUpAutoPayLoc.CANCEL_AUTOPAY, 'Click on Cancel AutoPay Link');
        await commonActions.waitForClickable(setUpAutoPayLoc.YES_CANCEL_BUTTON, 'Click on Yes Cancel AutoPay Link');
        await commonActions.safeVisibleClick(setUpAutoPayLoc.YES_CANCEL_BUTTON, 'Click on Yes Cancel AutoPay Link');
    }
    async verifyAutoPayCancelSuccessMessage() {
        let autopayCancelMsg = await safeAction.waitForVisible(setUpAutoPayLoc.AUTOPAY_CANCEL_MESSAGE, 'Fetching Cancel Auto Pay Success message');
        await safeAction.safeAsserts('true', autopayCancelMsg, 'Cancel Auto Pay Success message' + autopayCancelMsg);
    }
    async clickonAutomaticPayment() {
        await commonActions.waitForClickable(setUpAutoPayLoc.AUTOMATIC_PAYMENT, 'Click on Automatic Payment in Manage Autopay page');
        await commonActions.safeVisibleClick(setUpAutoPayLoc.AUTOMATIC_PAYMENT, 'Click on Automatic Payment in Manage Autopay page');
    }
    async clickonPaymentMethod() {
        await commonActions.waitForClickable(setUpAutoPayLoc.PAYMENT_METHOD, 'Click on Payment Method in Manage Autopay page');
        await commonActions.safeVisibleClick(setUpAutoPayLoc.PAYMENT_METHOD, 'Click on Payment Method in Manage Autopay page');
    }
    async clickonAutoPaySchedule() {
        await commonActions.waitForClickable(setUpAutoPayLoc.AUTOPAY_SCHEDULE, 'AutoPay Schedule in Manage Autopay page');
        await commonActions.safeVisibleClick(setUpAutoPayLoc.AUTOPAY_SCHEDULE, 'Click on AutoPay Schedule in Manage Autopay page');
    }
    async clickonAutoPayNotifications() {
        await commonActions.waitForClickable(setUpAutoPayLoc.AUTOPAY_NOTIFICATIONS, 'AutoPay Notifications in Manage Autopay page');
        await commonActions.safeVisibleClick(setUpAutoPayLoc.AUTOPAY_NOTIFICATIONS, 'Click on AutoPay Notifications in Manage Autopay page');
    }
    async clickonChangePaymentButton() {
        await commonActions.waitForClickable(setUpAutoPayLoc.CHANGE_PAYMENT_BUTTON, 'Change Payment Button in Manage Autopay page');
        await commonActions.safeVisibleClick(setUpAutoPayLoc.CHANGE_PAYMENT_BUTTON, 'Click on Change Payment Button in Manage Autopay page');
    }
    async clickManageAutoPayHomepage() {
        await commonActions.safeVisibleClick(homePageLoc.MANAGE_AUTOPAY_BUTTON, 'Click on Manage AutoPay Button in Home Page');
    }
    async clickOnInvoicesManageAutoPay() {
        await commonActions.safeVisibleClick(homePageLoc.INVOICES_LINK, 'Click on Invoices link in Manage Autopay page');
        await commonActions.waitForVisible(invoices_loc.MANAGE_AUTOPAY_LINK, 'Click on Manage AutoPay Link in Invoice Page');
        await commonActions.safeVisibleClick(invoices_loc.MANAGE_AUTOPAY_LINK, 'Click on Manage AutoPay Link in Invoice Page');
    }
    async verifyAutoPayNotifications(emailId) {
        if (commonActions.elementIsNotDisplayed(setUpAutoPayLoc.CLOSE_ICON.replace('%s', emailId), 'close')) {
            await commonActions.setValue(setUpAutoPayLoc.INPUT_EMAIL_NOTIFICATIONS, emailId, 'Email Id in Manage AutoPay page');
            await commonActions.browserKeys('Enter', 'Pressed Enter');
            await commonActions.safeVisibleClick(setUpAutoPayLoc.AUTOPAY_NOTIFICATIONS_SAVE_BUTTON, 'Click on Save button in AutoPay Schedule');
            await safeAction.waitForVisible(setUpAutoPayLoc.SUCCESS_MESSAGE_MANAGE_AUTOPAY, 'Manage Auto Pay Success message');
        }
        await commonActions.safeVisibleClick(setUpAutoPayLoc.CLOSE_ICON.replace('%s', emailId), 'close icon in email');
        await commonActions.safeVisibleClick(setUpAutoPayLoc.AUTOPAY_NOTIFICATIONS_SAVE_BUTTON, 'Click on Save button in AutoPay Schedule');
        await safeAction.waitForVisible(setUpAutoPayLoc.SUCCESS_MESSAGE_MANAGE_AUTOPAY, 'Manage Auto Pay Success message');
    }
    async verifyChangeAutoPayment() {
        await this.enterBankRoutingNo(TestCaseData.common.bank_routing_no);
        await this.enterBankAccountNo(TestCaseData.common.manage_autopay_account_no);
        await this.enterBankAddress(TestCaseData.common.bank_address);
        await this.enterAccountHolderPhone(TestCaseData.common.account_holder_phone);
        await this.enterCity(TestCaseData.common.city);
        await this.selectState(TestCaseData.common.state);
        await this.enterZip(TestCaseData.common.zip);
        await this.clickSetUpAutoPayCheckBox();
        await this.clickTermsandConditionsCheckBox();
        await this.clickSetUpAutoPayButton();
        await safeAction.waitForVisible(setUpAutoPayLoc.SUCCESS_MESSAGE_MANAGE_AUTOPAY, 'Manage Auto Pay Success message');
    }
    async selectAutoPaySchedule(message) {
        await commonActions.waitForVisible(setUpAutoPayLoc.AUTOPAY_SCHEDULE_STATUS, 'Autopay Schedule Status');
        let status = await safeAction.safeGetText(setUpAutoPayLoc.AUTOPAY_SCHEDULE_STATUS, 'Autopay Schedule Status');
        if ((status.includes(message))) {
            await commonActions.safeVisibleClick(setUpAutoPayLoc.AUTOPAY_SCHEDULE_BEFORE_DUE_DATE, 'Click on Invoice Due Date on AutoPay Schedule');
            await commonActions.safeVisibleClick(setUpAutoPayLoc.AUTOPAY_SCHEDULE_SAVE_BUTTON, 'Click on Save button in AutoPay Schedule');
            await safeAction.waitForVisible(setUpAutoPayLoc.SUCCESS_MESSAGE_MANAGE_AUTOPAY, 'Manage Auto Pay Success message');
            await commonActions.safeVisibleClick(setUpAutoPayLoc.AUTOPAY_SCHEDULE_AFTER_CREATION, 'Click on Invoice Creation Date AutoPay Schedule');
            await commonActions.safeVisibleClick(setUpAutoPayLoc.AUTOPAY_SCHEDULE_SAVE_BUTTON, 'Click on Save button in AutoPay Schedule');
            await safeAction.waitForVisible(setUpAutoPayLoc.SUCCESS_MESSAGE_MANAGE_AUTOPAY, 'Manage Auto Pay Success message');
        }
        else {
            await commonActions.safeVisibleClick(setUpAutoPayLoc.AUTOPAY_SCHEDULE_AFTER_CREATION, 'Click on Invoice Creation Date AutoPay Schedule');
            await commonActions.safeVisibleClick(setUpAutoPayLoc.AUTOPAY_SCHEDULE_SAVE_BUTTON, 'Click on Save button in AutoPay Schedule');
            await safeAction.waitForVisible(setUpAutoPayLoc.SUCCESS_MESSAGE_MANAGE_AUTOPAY, 'Manage Auto Pay Success message');
            await commonActions.safeVisibleClick(setUpAutoPayLoc.AUTOPAY_SCHEDULE_BEFORE_DUE_DATE, 'Click on Invoice Due Date on AutoPay Schedule');
            await commonActions.safeVisibleClick(setUpAutoPayLoc.AUTOPAY_SCHEDULE_SAVE_BUTTON, 'Click on Save button in AutoPay Schedule');
            await safeAction.waitForVisible(setUpAutoPayLoc.SUCCESS_MESSAGE_MANAGE_AUTOPAY, 'Manage Auto Pay Success message');
        }
    }
    async selectAutomaticPayment(message) {
        await commonActions.waitForVisible(setUpAutoPayLoc.AUTOMATIC_PAYMENT_STATUS, 'Autopay Status');
        let status = await safeAction.safeGetText(setUpAutoPayLoc.AUTOMATIC_PAYMENT_STATUS, 'Autopay Status');
        if (status.includes(message)) {
            await commonActions.safeVisibleClick(setUpAutoPayLoc.AUTO_PAYMENT_PAUSE, 'Click on pause radio Automatic Payment');
            await commonActions.safeVisibleClick(setUpAutoPayLoc.AUTO_PAYMENT_SAVE_BUTTON, 'Click on Save button in Automatic Payment');
            await safeAction.waitForVisible(setUpAutoPayLoc.SUCCESS_MESSAGE_MANAGE_AUTOPAY, 'Manage Auto Pay Success message');
            await commonActions.safeVisibleClick(setUpAutoPayLoc.AUTO_PAYMENT_TURN_ON, 'Click on Turn on Automatic Payment');
            await commonActions.safeVisibleClick(setUpAutoPayLoc.AUTO_PAYMENT_SAVE_BUTTON, 'Click on Save button in Automatic Payment');
            await safeAction.waitForVisible(setUpAutoPayLoc.SUCCESS_MESSAGE_MANAGE_AUTOPAY, 'Manage Auto Pay Success message');
        }
        else {
            await commonActions.safeVisibleClick(setUpAutoPayLoc.AUTO_PAYMENT_TURN_ON, 'Click on Turn on Automatic Payment');
            await commonActions.safeVisibleClick(setUpAutoPayLoc.AUTO_PAYMENT_SAVE_BUTTON, 'Click on Save button in Automatic Payment');
            await safeAction.waitForVisible(setUpAutoPayLoc.SUCCESS_MESSAGE_MANAGE_AUTOPAY, 'Manage Auto Pay Success message');
            await commonActions.safeVisibleClick(setUpAutoPayLoc.AUTO_PAYMENT_PAUSE, 'Click on pause radio Automatic Payment');
            await commonActions.safeVisibleClick(setUpAutoPayLoc.AUTO_PAYMENT_SAVE_BUTTON, 'Click on Save button in Automatic Payment');
            await safeAction.waitForVisible(setUpAutoPayLoc.SUCCESS_MESSAGE_MANAGE_AUTOPAY, 'Manage Auto Pay Success message');
        }
    }
}
module.exports = new SetupAutoPay();
