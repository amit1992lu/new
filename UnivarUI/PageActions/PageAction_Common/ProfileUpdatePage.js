'use strict';
let commonActions = require('../../../Utilities/CommonActions.js');
let profileUpdateLocator = require('../../Locator/Locator_Common/Profile_Page_Locator.js');

class ProfileUpdatePage {

	async clickOnRequestProfileUpdateAndVerifyTitle() {
		await commonActions.safeVisibleClick(profileUpdateLocator.REQUEST_PROFILE_UPDATE_BUTTON, 'Request Profile Update Button');
		await commonActions.waitForVisible(profileUpdateLocator.PROFILE_UPDATE_TITLE, 'Profile Update Request');
	}

	async updateProfileTextAndSubmitRequest(profileUpdateText) {
		await commonActions.waitForClickable(profileUpdateLocator.UPDATE_TEXT_AREA, profileUpdateText, 'text box');
		await commonActions.setValue(profileUpdateLocator.UPDATE_TEXT_AREA, profileUpdateText, 'text box');
		await commonActions.waitForClickable(profileUpdateLocator.SUBMIT_BUTTON, 'Submit Button');
		await commonActions.safeClick(profileUpdateLocator.SUBMIT_BUTTON, 'Submit Button');
	}

}

module.exports = new ProfileUpdatePage();
