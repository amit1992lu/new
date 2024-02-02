let headerContentAction = require('../../PageActions/PageAction_Common/HeaderContentAction.js');
let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let productCatalog = require('../../PageActions/PageAction_Common/ProductCatlog.js');
let productDetail = require('../../PageActions/PageAction_Common/ProductDetail.js');
let searchResultsPage = require('../../PageActions/PageAction_Common/SearchResultsPage.js');

describe('Guest ParentChild PDP package type validation', () => {
    before(async () => {
        await homePage.navigateToAppHomePage();
        await homePage.acceptCookieConsent();
    });

    it('Navigate to ParentChild PDP', async () => {
        await headerContentAction.enterQueryInSearchBoxAndClickSearchButton('703064');
        await productCatalog.clickTheFirstProduct();
    });

    it('Validate ParentChild PDP', async () => {
        await productDetail.clickPackageType('Bulk');
        await productDetail.clickPackageType('Drum');
        await productDetail.clickPackageType('IBC');
        await productDetail.clickPackageType('Pail');
    })
});
