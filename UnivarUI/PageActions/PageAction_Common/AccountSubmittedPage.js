'use strict';
let commonActions = require('../../../Utilities/CommonActions.js');
let accountSubmitted_loc = require('../../Locator/Locator_Common/SignUpSuccessPage_Locator.js');

class AccountSubmittedPage {

    async verifySuccessLineAlert(status) {
        await commonActions.domStatus();
        let successAlert = await commonActions.waitForVisible(accountSubmitted_loc.SUCCESSlINEALERT,  'Success Line Alert in Account Submitted page');
        await commonActions.safeAsserts(status, successAlert, 'Success line alert is not displayed in account submitted page');
    }

    async async(status) {
        await commonActions.domStatus();
        let accountSubmittedTxt = await commonActions.waitForVisible(accountSubmitted_loc.ACCOUNTSUBMITTEDTEXT,  'Account submitted text in account submitted page')
        await commonActions.safeAsserts(status, accountSubmittedTxt, 'Account submitted text in account submitted page');
    }

    async verifyNewAccountRequestSubmittedText(status) {
        await commonActions.domStatus();
        let accountSubmittedTxt = await commonActions.waitForVisible(accountSubmitted_loc.NEWACCOUNTREQUESTSUBMITTEDTEXT,  'New Account submitted text in account submitted page')
        await commonActions.safeAsserts(status, accountSubmittedTxt, 'Account submitted text in account submitted page');
    }
}

module.exports = new AccountSubmittedPage();
