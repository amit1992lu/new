'use strict';
let commonAction = require('../../../Utilities/CommonActions.js');
let testCaseData = require('../../TestData/TestLevelData/TestCaseData.js');
let mailinatorPage_loc = require('../../Locator/Locator_Common/MailinatorPage_Locator.js');
const safeAction = require('../../../Utilities/CommonActions');
const languageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile.js').getLanguageFile();
class MailinatorPage {

    //Verify Mailinator page
    async navigateToMailinatorInboxPageAndVerify() {
        await commonAction.navigate(testCaseData.common.mailinatorInboxURL);
        let publicText = await commonAction.safeIsVisible(mailinatorPage_loc.PUBLIC_MESSAGE_TEXT, 'Public Messages Text on Mailinator Inbox page');
        await commonAction.safeAsserts('true', publicText, 'Public Messages Text is not displayed on Mailinator Inbox page');
    }

    //Enter Email In Search Box
    async enterEmailInSearchBoxAndClickGo(email) {
        await commonAction.scrollTo(mailinatorPage_loc.SEARCH_BOX,  'Search box in Mailinator inbox page');
        await commonAction.waitForClickable(mailinatorPage_loc.SEARCH_BOX,  'Search box in Mailinator inbox page');
        await commonAction.setValue(mailinatorPage_loc.SEARCH_BOX, email, 'Univar Mailinator Email');
        await commonAction.safeVisibleClick(mailinatorPage_loc.GO_BUTTON,  'Go Button');
    }

    //Verify To Email
    async verifyToEmailInMailinatorInbox(email) {
        let email1 = (email.split('@'))[0]
        await commonAction.domStatus()
        await browser.pause(1000)
        let ToEmail = await commonAction.safeGetText(mailinatorPage_loc.TO_EMAIL,  'To Email in Mailinator Inbox')
        await commonAction.safeAsserts('equal', ToEmail, 'To Email is not matched in Mailinator Inbox', email1.toLowerCase())
    }

    //Click on the first reset password email
    async clickOnFirstResetPasswordEmailLink() {
        await commonAction.waitForVisible(mailinatorPage_loc.JUST_NOW_EMAIL, 'First email');
        await commonAction.safeVisibleClick(mailinatorPage_loc.JUST_NOW_EMAIL, 'First reset password email')
        await commonAction.elementIsNotDisplayed(mailinatorPage_loc.JUST_NOW_EMAIL);
    }

    //Click on the rest password button
    async clickOnResetPasswordButton() {
        let resetPasswordBtn = await commonAction.dynamicLocator(mailinatorPage_loc.RESET_PASSWORD_BUTTTON, languageFile.resetPasswordEmail.resetPasswordButton)
        let resetPasswordURL = await commonAction.getAttribute(resetPasswordBtn, 'href', 'Reset Password Button Link')
        await commonAction.safeVisibleClick(resetPasswordBtn, 'Reset Password Button')
        return resetPasswordURL;
    }

    async clickOnResetPasswordAndNavigate() {
        await this.switchToEmailMessageBodyFrame()
        let resetPasswordURL = await this.clickOnResetPasswordButton();
        await safeAction.getLatestWindow();
        //safeAction.switchWindow('Set a New Password','Set a new password tab')
        await safeAction.domStatus();
    }

    async switchToEmailMessageBodyFrame() {
        await commonAction.safeFrameSwitch('html_msg_body', 'html_msg_body frame in mailinator page')
    }
}

module.exports = new MailinatorPage();
