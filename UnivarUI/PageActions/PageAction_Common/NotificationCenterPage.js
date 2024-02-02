let commonActions = require('../../../Utilities/CommonActions.js');
let notificationCtr_Loc = require('../../Locator/Locator_Common/NotificationCenterPage_Locator.js');
let getLanguageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile');
const commonPage_loc = require('../../Locator/Locator_Common/Common_Locators.js');
let getLanguage = getLanguageFile.getLanguageFile();

class NotificationCenterPage {
    // Verify Notification Center Page
    async verifyNotificationCenterPage() {
        await commonActions.waitForVisible(notificationCtr_Loc.NOTIFICATIONCTR_TITLE, 'Notification Center title in Notification Center Page');
        await commonActions.waitForClickable(notificationCtr_Loc.QUOTEDPRODUCTS_BUTTON, 'Quoted Products');
        await commonActions.waitForClickable(notificationCtr_Loc.ACCOUNT_BUTTON, 'Account filter button');
        await commonActions.safeJavaScriptClick(notificationCtr_Loc.ACCOUNT_BUTTON, 'Account filter');
        await commonActions.waitForClickable(notificationCtr_Loc.INVOICES_BUTTON, 'Invoices Notifications filter');
        await commonActions.safeJavaScriptClick(notificationCtr_Loc.INVOICES_BUTTON,'Invoices Notification Filter');
        await commonActions.waitForClickable(notificationCtr_Loc.ALL_BUTTON, 'All Notifications Button');
        await commonActions.safeJavaScriptClick(notificationCtr_Loc.ALL_BUTTON, 'All Notifications Button');
    }
}

module.exports = new NotificationCenterPage();