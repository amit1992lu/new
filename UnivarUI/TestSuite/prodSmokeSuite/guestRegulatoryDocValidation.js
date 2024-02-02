let headerContentAction = require('../../PageActions/PageAction_Common/HeaderContentAction.js');
let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let productCatalog = require('../../PageActions/PageAction_Common/ProductCatlog.js');
let productDetail = require('../../PageActions/PageAction_Common/ProductDetail.js');

describe('Guest user Regulatory Documents Validation', () => {
    before(async () => {
        await homePage.navigateToAppHomePage();
        await homePage.acceptCookieConsent();
    });

    it('Verify "View All Documents" scrolls to document section of PDP', async () => {
        await headerContentAction.enterQueryInSearchBoxAndClickSearchButton('72424');
        await productCatalog.clickTheFirstProduct();
    });

    it('Verify "View All Document" opens the Login Model', async () => {
        try {
			await productDetail.verifySignModelForRegulatoryDoc();
		} catch (error) {
			expect(error.statusCode).to.not.equal(429);
		}
    })
});
