let commonActions = require('../../../Utilities/CommonActions.js');

class FormulationFinder {
	get getStartedButton() {
		return 'button.first-step'
	}

	get nextButton() {
		return '.action.action-primary'
	}

	get BPC() {
		return 'input#BPC+label'
	}

	get pageTitle() {
		return '//div[@class="step-title"]//strong[text()="%s"]';
	}

	get selectFirstProduct() {
		return '//form[@id="products-form"]/div[1]';
	}

	get QUALITIES_FORM() {
		return '(//form[@id=\'qualities-form\']//label)';
	}

	get NORMAL_TITLE() {
		return '//div[@class="step-title"]/*[text()="%s"]';
	}

	get ACTIVE_PROGRESS_BAR() {
		return '(//li[@class=\'ff-progress-bar-item _active\'])[last()]';
	}

	get SELECTED_CLAIMS() {
		return '.seleted-claim-info';
	}

	get SEARCH_BOX() {
		return 'input.search-input';
	}

	get industries() {
		return '.item-label'
	}

	async clickOnGetStartedButton() {
		await commonActions.safeClick(this.getStartedButton, 'Get Started');
	}

	async clickOnNextButton() {
		await commonActions.safeClick(this.nextButton, 'Next Button');
	}

	async verifyPageTitle(text) {
		await commonActions.waitForVisible(this.pageTitle.replace('%s', text), 'Select an Industry');
	}

	async clickOnBPC() {
		await commonActions.safeVisibleClick(this.BPC, 'BPC Industry');
	}

	async searchAndSelectApplication(name) {
		await commonActions.setValue(this.SEARCH_BOX, name);
		await commonActions.safeVisibleClick(this.selectFirstProduct, name);
	}

	async selectQualities() {
		await commonActions.safeClick(`${this.QUALITIES_FORM}[1]`, 'Quality 1');
		await commonActions.safeClick(`${this.QUALITIES_FORM}[2]`, 'Quality 2')

	}

	async verifyNormalPageTitle(text) {
		await commonActions.waitForVisible(this.NORMAL_TITLE.replace('%s', text), 'Page title' + text);

	}

	async verifyActiveProgressBar(text) {
		let progressBarText = await commonActions.safeGetText(this.ACTIVE_PROGRESS_BAR, 'active progress bar');
		await commonActions.safeAsserts('equal', progressBarText, 'Progress Bar Text', text);
	}

	async verifySelectedClaims() {
		await commonActions.waitForVisible(this.SELECTED_CLAIMS, 'Selected Claims');
	}

	async clickIndustryByName(name) {
		const industriesList = await commonActions.findListOfElements(this.industries, 'List of Industries');
		for(const industries of industriesList) {
			const industryText = await commonActions.safeGetText(industries, 'Industry name');
			if(industryText === name) {
				await commonActions.safeJavaScriptClick(industries, 'Industry name');
				return industryText;
			}
		}
	}
}

module.exports = new FormulationFinder()
