let testData = require('../../TestData/TestLevelData/TestCaseData.js');
let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let signInPage = require('../../PageActions/PageAction_Common/SignInPage');
let homePageLoc = require('../../Locator/Locator_Common/HomePage_Locator.js');
const { async } = require('../../PageActions/PageAction_Common/AccountSubmittedPage.js');
describe('TS017 Verify Footer Links Guest User', function () {
    before(async () => {
        await homePage.navigateToAppHomePage();
        await homePage.verifyHomePage(testData.common.trueStatus);
        await homePage.acceptCookieConsent();
    });
    it('Navigating to Order History Page in Footer section', async () => {
        await homePage.VerifyOrderHistoryFooter();
    });
    it('Navigating to Quoted Products Page in Footer section', async () => {
        await homePage.VerifyQuotedProductsFooter();
    });

    it('Navigating to We Are Hiring Page in Footer section', async () => {
        await homePage.VerifyWeAreHiringFooter();
    });

    it('Verify Serious About Safety footer', async () => {
        await homePage.verifyAllLinks(homePageLoc.FOOTER_SAFETY);
    });

    it('Verify About Us footer', async () => {
        await homePage.verifyAllLinks(homePageLoc.FOOTER_ABOUT_US);
    });

    it('Verify Get in Touch footer', async () => {
        await homePage.verifyAllLinks(homePageLoc.FOOTER_GET_IN_TOUCH);
    });

    it('Verify footer copy right sections', async () => {
        await homePage.verifyAllLinks(homePageLoc.FOOTER_COPYRIGHT);
    });

    it('Verify Cookie Preference', async () => {
        await homePage.verifyCookiePreference();
    })

    it('Verify Product Categories footer links', async () => {
        await homePage.verifyAllLinks(homePageLoc.FOOTER_PRODUCT_CATEGORIES);
    });
})
