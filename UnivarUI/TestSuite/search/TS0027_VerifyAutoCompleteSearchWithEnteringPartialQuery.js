let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let headerContentAction = require('../../PageActions/PageAction_Common/HeaderContentAction.js');
let commonTestData = require('../../TestData/TestLevelData/TestCaseData.js');
let getLanguageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile');
let countryData = require('../../TestData/TestLevelData/CountryLevelData/GetCountryFile').getCountryFile();

let getLanguage = getLanguageFile.getLanguageFile();

let searchQry;

if(process.env.ENV === 'PROD') {
    searchQry = countryData.searchTerms.searchProd
} else if(process.env.ENV === 'DEV') {
    searchQry = countryData.searchTerms.searchDev
} else {
    searchQry = countryData.searchTerms.searchQA
}

describe('TS0027 Verify Auto Complete Search With Entering Partial Query', function () {
    before(async () => {
        await homePage.navigateToAppHomePage();
        await homePage.verifyHomePage(commonTestData.common.trueStatus);
        await homePage.acceptCookieConsent();
    });
    it.skip('Search with Partial Query',async ()=>{
        await headerContentAction.verifySearchBoxPlaceHolder(getLanguage.searchQuery.placeHolderText);
    });
    it('Verify Popular Searches section',async ()=>{
        await headerContentAction.clickOnSearchBox();
        await headerContentAction.verifyPopularSearchesTitleWithEnteringPartialQuery(searchQry);
        await headerContentAction.verifyPopularSearchesText(commonTestData.common.trueStatus);
        await headerContentAction.verifyPopularSearchListMinLength(1);
    });
    // Skipping this since recent search section is disabled
    it.skip('Verify Recent Searches Section',async ()=>{
        await headerContentAction.verifyRecentSearches(commonTestData.common.trueStatus);
        await headerContentAction.verifyRecentSearchesListLength(4);
    });
    it('verify All Products Section',async ()=>{
        await headerContentAction.verifyAllProductsList(searchQry);
        await headerContentAction.verifyAllProductsListLength(6);
    });
    it('Verify Categories Section',async ()=>{
        await headerContentAction.verifyCategoriesTitle(commonTestData.common.trueStatus);
        await headerContentAction.verifyCategoriesListLength(1);
    });
    it('Verify All products in Auto Complete Window',async ()=>{
        await headerContentAction.verifyAllProductsInAutoCompleteWindow(6);
    });
    it('Search for Privacy and verify',async ()=>{
        await headerContentAction.enterQueryInSearchBox('Privacy');
        await headerContentAction.verifyPagesTitle(commonTestData.common.trueStatus);
        await headerContentAction.verifyPagesList(2);
    });
});
