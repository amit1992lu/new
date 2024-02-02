let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
const formulationFinderPage = require('../../PageActions/PageAction_Common/FormulationFinderPages.js');
let commonTestData = require('../../TestData/TestLevelData/TestCaseData.js').common;
let languageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile.js').getLanguageFile();
let industry;
let application = 'Skin Care: Shower';

describe('TS0066 Verify Formulation Finder', function () {
	before(async () => {
		await homePage.navigateToAppHomePage();
		await homePage.verifyHomePage(commonTestData.trueStatus);
		await homePage.acceptCookieConsent();
	});
	it('Navigate to Formulation Finder Page', async () => {
		await homePage.navigateToTargetPageFromHomePage('/formulation/finder');
	});
	it('Navigate to Select Industry Page and verify', async () => {
		await formulationFinderPage.clickOnGetStartedButton();
		await formulationFinderPage.verifyPageTitle(languageFile.title.industry);
		await formulationFinderPage.verifyActiveProgressBar('New product'.toUpperCase())
		industry = await formulationFinderPage.clickIndustryByName('Beauty & Personal Care');
	});

	it('Navigate to Select Product Page and verify', async () => {
		await formulationFinderPage.clickOnNextButton();
		await formulationFinderPage.verifyPageTitle(languageFile.title.application);
		await formulationFinderPage.verifyActiveProgressBar(industry.toUpperCase())
		await formulationFinderPage.searchAndSelectApplication(application);
	});

	it('Navigate to What Qualities Page and verify', async () => {
		await formulationFinderPage.clickOnNextButton();
		await formulationFinderPage.verifyActiveProgressBar(application.toUpperCase())
		await formulationFinderPage.selectQualities();
	});

	it('Navigate to Formulations Page and verify', async () => {
		await formulationFinderPage.clickOnNextButton();
		await formulationFinderPage.verifyNormalPageTitle(languageFile.title.hereAreYourResults);
		await formulationFinderPage.verifyActiveProgressBar('Your results'.toUpperCase())
		await formulationFinderPage.verifySelectedClaims();
	})

});
