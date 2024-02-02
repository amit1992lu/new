'use strict';
let commonActions = require('../../../Utilities/CommonActions.js');
let orderDetails_Loc = require('../../Locator/Locator_Common/OrderDetails_Locator');
let getLanguageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile');
let personalHomepage = require('../PageAction_Common/PersonalizedHomePage.js');
let headerPage = require('../PageAction_Common/HeaderContentAction.js');
const commonPage_loc = require('../../Locator/Locator_Common/Common_Locators');

let getLanguage = getLanguageFile.getLanguageFile();

class orderDetailsPage {

    async verifyOrderDetailsPage() {
        await commonActions.waitForVisible()
    }

    async verifyLineOrderLength(lineOrderLength) {
        await commonActions.waitForVisible(orderDetails_Loc.ORDER_LINE_ITEM, 'Order item list')
        let orderLengthDynamic = await commonActions.findListOfElements(orderDetails_Loc.ORDER_LINE_ITEM);
        await commonActions.safeAsserts('equal', orderLengthDynamic.length, 'Order Line Items on Order Details Page', lineOrderLength);
    }

    async verifyPONumber(PONumber) {
        await commonActions.waitForVisible(orderDetails_Loc.PO_NUMBER_OD, 'PO Number on Order Details Page');
    }

    async verifyEstimatedTotal(estTotal_) {
        let estTotal = await commonActions.safeGetText(orderDetails_Loc.ORDER_DETAILS_ESTIMATED_TOTAL, 'Estimated total on Order Details page');
        await commonActions.safeAsserts('contains', estTotal, 'Estimated total on OD page', estTotal_);
    }

    async verifyOrderDetailsBreadCrumb() {
        await commonActions.waitForVisible(orderDetails_Loc.ORDER_DETAILS_BREADCRUMB, 'Order Details Breadcrumb');
    }

    async clickOnReorderAllItemsButton() {
        await commonActions.waitForClickable(orderDetails_Loc.REORDER_ALL_BUTTON, 'Reorder All Items Button');
        await commonActions.safeClick(orderDetails_Loc.REORDER_ALL_BUTTON, 'Clicked on ReOrder All Items Button on OD page');
    }

    async clickOnBuyNowButtonAndVerify() {
        await commonActions.waitForClickable(orderDetails_Loc.BUY_AGAIN_BUTTON, 'Buy Now button');
        await commonActions.waitForVisible(orderDetails_Loc.BUY_AGAIN_BUTTON, 'Buy Now button');
        await commonActions.safeClick(orderDetails_Loc.BUY_AGAIN_BUTTON, 'Clicked on Buy again button at index');
        await headerPage.verifyMiniCartLineItems(parseInt(1));
        await personalHomepage.deleteItemsFromMiniCart();
        await headerPage.closeMiniCartTray();
    }

    async verifyInfoMessageReminderRibbon() {
        let blueRibbon = await commonActions.waitForVisible(commonPage_loc.COMMON_PAYMENT_REMINDER_TEXT, 'Email reminder info message on Order Details Page');
        await commonActions.safeAsserts('true', blueRibbon, 'Email info reminder on Order Details Page');
        let infoMessageText = await commonActions.safeGetText(commonPage_loc.COMMON_PAYMENT_REMINDER_TEXT, 'Email reminder info message on Order Details Page')
        await commonActions.safeAsserts('contains', infoMessageText, 'Email info text on Order Details Page', getLanguage.commonInfoMessages.PaymentReminderInfoMessage);
    }

    async clickOnTurnOnEmailRemindersCTA() {
        await commonActions.waitForVisible(orderDetails_Loc.EMAIL_REMINDER_MESSAGE,'Turn on email reminders')
        await commonActions.waitForClickable(orderDetails_Loc.EMAIL_REMINDER_MESSAGE, 'Turn on email reminders');
    }
}

module.exports = new orderDetailsPage();
