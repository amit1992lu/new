let testData = require('../../TestData/TestLevelData/TestCaseData.js');
let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let supplierPage = require('../../PageActions/PageAction_Common/SuppliersPage.js');
describe('TS0035 Verify Supplier Links',function(){

    before(async () => {
        await homePage.navigateToAppHomePage();
        await homePage.verifyHomePage(testData.common.trueStatus);
        await homePage.acceptCookieConsent();
    });

    it ('Navigating to Suppliers Page', async () => {
        await homePage.VerifySuppliersTab();
    });

    it ('Validating Featured Supplier Page ', async () => {
        await homePage.VerifySuppliersTab();
        await supplierPage.verifyNextPreviousButtons_FeaturedSuppliers();
        await supplierPage.FeaturedSuppliers();
    });
})
