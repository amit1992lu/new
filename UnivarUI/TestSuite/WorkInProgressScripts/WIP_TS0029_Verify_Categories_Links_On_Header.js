let homePage = require('../../PageActions/PageAction_Common/HomePage')
let signInPage = require('../../PageActions/PageAction_Common/SignInPage')
let testData = require('../../TestData/TestLevelData/TestCaseData')
let personalizedHomepage = require('../../PageActions/PageAction_Common/PersonalizedHomePage')
let productCatalogPage = require('../../PageActions/PageAction_Common/ProductCatlog')
let commonSuccessMsg = require('../../TestData/TestLevelData/CommonMessage')
let headerContent = require('../../PageActions/PageAction_Common/HeaderContentAction.js');
describe('TS0029_Verify_Categories_Links_On_Header', function () {
    before(async () => {
        await homePage.navigateToAppHomePage();
        await homePage.verifyHomePage(testData.common.trueStatus);
        await homePage.acceptCookieConsent();
    });
    it('Mouse over Product Categories link',async ()=>{
        await headerContent.mouseHoverProductCategoriesLink();
        await headerContent.verifyProductCategories();
    });
});
