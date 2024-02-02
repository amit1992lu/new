let headerContentAction = require('../../PageActions/PageAction_Common/HeaderContentAction.js');
let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let productCatalog = require('../../PageActions/PageAction_Common/ProductCatlog.js');
let productDetail = require('../../PageActions/PageAction_Common/ProductDetail.js');
let miniCart = require('../../PageActions/PageAction_Common/MiniCartPage.js');

describe('Guest ParentChild PDP Multiple Products Validation', () => {
    before(async () => {
        await homePage.navigateToAppHomePage();
        await homePage.acceptCookieConsent();
    });

    it('Navigate to ParentChild PDP', async () => {
        await headerContentAction.enterQueryInSearchBoxAndClickSearchButton('719088');
        await productCatalog.clickTheFirstProduct();
    });

    it('Add IBC product to cart', async () => {
        await productDetail.clickPackageType('IBC');
        await productDetail.addProductToCart();
    });

    it('Verify IBC added to cart', async () => {
        await miniCart.verifyProductPackageInCart('IBC');
        await miniCart.closeMiniCart();
    });

    it('Add Drum to cart', async () => {
        await productDetail.clickPackageType('Drum');
        await productDetail.addProductToCart();
    });

    it('Verify Drum added to cart', async () => {
        await miniCart.verifyProductPackageInCart('DR');
        await miniCart.closeMiniCart();
    });
});
