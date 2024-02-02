class Profile_Page_Locator {
	constructor() {
		this.REQUEST_PROFILE_UPDATE_BUTTON = 'div.request-update-button';
		this.PROFILE_UPDATE_TITLE = '#modal-title-0';
		this.UPDATE_TEXT_AREA = 'textarea[name="update_info"]';
		this.SUBMIT_BUTTON = 'div.update-account-modal button.save';
	}
}

module.exports = new Profile_Page_Locator();
