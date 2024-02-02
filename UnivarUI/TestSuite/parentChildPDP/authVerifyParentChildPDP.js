let headerContentAction = require('../../PageActions/PageAction_Common/HeaderContentAction.js');
let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let productCatalog = require('../../PageActions/PageAction_Common/ProductCatlog.js');
let productDetail = require('../../PageActions/PageAction_Common/ProductDetail.js');
let searchResultsPage = require('../../PageActions/PageAction_Common/SearchResultsPage.js');
let signInPage = require('../../PageActions/PageAction_Common/SignInPage')
const { getSecret } = require('../../../aws-secret-manager');
let userEmail;
let userPassword;

describe('Auth ParentChild PDP validation', () => {
    before(async () => {
        if(process.env.DEVICE_FARM) {
            const secretResponse = await getSecret('digital-qa-automation-test');
            userEmail = await secretResponse['PARENTCHILDUSESR']
            userPassword = await secretResponse['PARENTCHILDPASSWORD'];
        } else {
            userEmail = process.env.PARENTCHILDUSESR;
            userPassword = process.env.PARENTCHILDPASSWORD;
        }
        await homePage.navigateToAppHomePage();
        await homePage.acceptCookieConsent();
        await homePage.clickOnSignInLink();
        await signInPage.enterEmail(userEmail);
        await signInPage.enterPassword(userPassword);
        await signInPage.clickOnSignInButton();
    });

    it('Navigate to ParentChild PDP', async () => {
        await headerContentAction.enterQueryInSearchBoxAndClickSearchButton('72424');
        await productCatalog.clickTheFirstProduct();
    });

    it('Validate ParentChild has Web Price', async () => {
        await productDetail.clickPackageType('Drum');
        await productDetail.parentChildWebPriceDisplayed();
    });

    it('Validate ParentChild has CSP', async () => {
        await productDetail.clickPackageType('IBC');
        await productDetail.parentChildWebPriceNotDisplayed();
    });
});
