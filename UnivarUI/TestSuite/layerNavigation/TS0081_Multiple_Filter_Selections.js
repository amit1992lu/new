let testData = require('../../TestData/TestLevelData/TestCaseData.js');
let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let productCatalogPage = require('../../PageActions/PageAction_Common/ProductCatlog.js');

describe('TS0081 Multiple Filter Selections',function(){
    before(async () => {
        await homePage.navigateToAppHomePage();
        await homePage.verifyHomePage(testData.common.trueStatus);
        await homePage.acceptCookieConsent();
    });

    it('Navigate to Categories Page', async () => {
        if(process.env.REGION === 'US' || process.env.REGION === 'CA_EN' || process.env.REGION === 'CA_FR') {
            await homePage.clickOnProductCategories(0);
        } else {
            await homePage.VerifyProductCategoriesTab();
        }
        await productCatalogPage.selectFilterFromProductCatalog();
    });

    it('Open a Filter option', async () => {
        await productCatalogPage.openFilterOptionAndSelectOption(0, 0);
    })

    it('Verify two filter is selected', async () => {
        await productCatalogPage.verifySelectedFilterCount();
    })
    it ('Clear All Filters and Verify', async() => {
        await productCatalogPage.clearAllFilters();
        await productCatalogPage.verifySelectedFilterCount(0);
    })
})
