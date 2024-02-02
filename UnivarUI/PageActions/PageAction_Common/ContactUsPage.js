'use strict';
let commonAction = require('../../../Utilities/CommonActions.js');
let contactUs_Loc = require('../../Locator/Locator_Common/ContactUsPage_Locator.js');

class ContactUsPage {
    async verifyContactUsDetails() {
        if (process.env.REGION == 'US') {
            await commonAction.waitForVisible(contactUs_Loc.INFINITY_NUMBER_US, 'Contact Us');
            await commonAction.waitForVisible(contactUs_Loc.INFINITY_NUMBER_LIST, 'Contact Number List');
        } else if (process.env.REGION == 'CA_EN') {
            await commonAction.waitForVisible(contactUs_Loc.MSNORMAL_CONTACTNO, 'Contact Us');
            await commonAction.waitForVisible(contactUs_Loc.CANADA_EN_NUMBER, 'Contact Number List');
        }
        else if (process.env.REGION == 'UK' || process.env.REGION == 'CA_FR') {
            await commonAction.waitForVisible(contactUs_Loc.MSNORMAL_CONTACTNO, 'Contact Us');
            await commonAction.waitForVisible(contactUs_Loc.MSONORMAL_LIST, 'Contact Number List');
        } else {
            await commonAction.waitForVisible(contactUs_Loc.NORDICS_NUMBERS, 'Contact Us');
            await commonAction.waitForVisible(contactUs_Loc.MSONORMAL_LIST, 'Contact Us List');
        }
    }
}

module.exports = new ContactUsPage();
