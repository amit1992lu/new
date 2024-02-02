let testData = require('../../TestData/TestLevelData/TestCaseData.js');
let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let productCatalogPage = require('../../PageActions/PageAction_Common/ProductCatlog')
describe('TS019 Verify Filters On Product Catalog Page',function(){
    before(async () => {
        await homePage.navigateToAppHomePage();
        await homePage.verifyHomePage(testData.common.trueStatus);
        await homePage.acceptCookieConsent();
    });
    it ('Selecting Filter in Product Catalog Page', async () => {
        if(process.env.REGION === 'US' || process.env.REGION === 'CA_EN' || process.env.REGION === 'CA_FR') {
            await homePage.clickOnProductCategories(0);
        } else {
            await homePage.VerifyProductCategoriesTab();
        }
        await productCatalogPage.selectFilterFromProductCatalog();
        await homePage.VerifyRemoveFilter();
    });
})
