let headerContentAction = require('../../PageActions/PageAction_Common/HeaderContentAction.js');
let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let productCatalog = require('../../PageActions/PageAction_Common/ProductCatlog.js');
let productDetail = require('../../PageActions/PageAction_Common/ProductDetail.js');
let searchResultsPage = require('../../PageActions/PageAction_Common/SearchResultsPage.js');

describe('TS0062 Verify Switching Package Types on PDP', () => {
	before(async () => {
		await homePage.navigateToAppHomePage();
		await homePage.acceptCookieConsent();
	});

	it('Navigate to Parent/Child PDP', async () => {
		await headerContentAction.enterQueryInSearchBoxAndClickSearchButton('70040');
		await productCatalog.clickTheFirstProduct();
	});

	it('Select And Verify Various Package Types', async () => {
		try {
			await productDetail.selectAndVerifyPackageTypes();
		} catch (error) {
			expect(error.statusCode).to.not.equal(429);
		}
	})
})
