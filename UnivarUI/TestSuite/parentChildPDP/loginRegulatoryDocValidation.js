let headerContentAction = require('../../PageActions/PageAction_Common/HeaderContentAction.js');
let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let productCatalog = require('../../PageActions/PageAction_Common/ProductCatlog.js');
let productDetail = require('../../PageActions/PageAction_Common/ProductDetail.js');
let signInPage = require('../../PageActions/PageAction_Common/SignInPage')
const { getSecret } = require('../../../aws-secret-manager');
let userEmail;
let userPassword;


describe('Login user Regulatory Documents Validation', () => {
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

    it('Verify View All Documents scrolls to document section of PDP', async () => {
        await headerContentAction.enterQueryInSearchBoxAndClickSearchButton('72424');
        await productCatalog.clickTheFirstProduct();
    });

    it('Verify View All Document opens the Login Model', async () => {
        await productDetail.verifyRegulatorDocSections();
    })
});
