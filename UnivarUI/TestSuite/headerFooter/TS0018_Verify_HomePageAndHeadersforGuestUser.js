let testData = require('../../TestData/TestLevelData/TestCaseData.js');
let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let contactUSForm = require('../../PageActions/PageAction_Common/ContactUSForm.js');
describe('TS018 Verify Home Page For Guest User',function(){
    before(async () => {
        await homePage.navigateToAppHomePage();
        await homePage.verifyHomePage(testData.common.trueStatus);
        await homePage.acceptCookieConsent();
    });
    it ('Navigating to Product Categories Page', async () => {
        await homePage.VerifyProductCategoriesTab();
    });
    it ('Navigating to Suppliers Page', async () => {
        await homePage.VerifySuppliersTab();
    });
    it ('Navigating to Industry Page', async () => {
        await homePage.VerifyIndustriesTab();
    });

    it ('Navigating to Innovation Page', async () => {
        await homePage.VerifyInnovationTab();
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
    it ('Navigating to Contact us Page', async () => {
        await homePage.VerifyContactUsButton_Header();
        await contactUSForm.verifyContactUSForm();
        await contactUSForm.closeContactUsForm();
    });

    //Steps were on EMEA and Nordics but no longer there due to Home Page change
    // it.skip('Navigating to Quoted Products section', async () => {
    //     await homePage.VerifyQuotedProducts_Section();
    // });
    // it('Navigating to Order History section', async () => {
    //     await homePage.VerifyOrderHistory_Section();
    // });
    // it('Navigating to Discover Products', async () => {
    //     await homePage.VerifyDiscoverProductSection();
    // });


    //Testing only on US, Canada EN/FR
    it ('Navigating to Services Page', async () => {
        await homePage.VerifyServicesTab();
    });
})
