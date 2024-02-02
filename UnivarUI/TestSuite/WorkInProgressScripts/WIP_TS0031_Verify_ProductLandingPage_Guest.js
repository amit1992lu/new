let testData = require('../../TestData/TestLevelData/TestCaseData.js');
let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let productCatalogPage = require('../../PageActions/PageAction_Common/ProductCatlog')
describe('TS0031_Verify_ProductLandingPage_Guest',function(){

        before(async () => {
            await homePage.navigateToAppHomePage();
            await homePage.verifyHomePage(testData.common.trueStatus);
            await homePage.acceptCookieConsent();
        });

        it ('Verify Products for Guest User', async () => {
            await homePage.VerifyProductCatalogTab();
            await productCatalogPage.clickOnRandomProduct();
        });
})
