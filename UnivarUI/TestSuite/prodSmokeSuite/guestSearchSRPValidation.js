let headerContentAction = require('../../PageActions/PageAction_Common/HeaderContentAction.js');
let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let searchResultsPage = require('../../PageActions/PageAction_Common/SearchResultsPage.js');
let countryData = require('../../TestData/TestLevelData/CountryLevelData/GetCountryFile').getCountryFile();

let searchQry;

if(process.env.ENV === 'PROD') {
    searchQry = countryData.searchTerms.searchProd
} else if(process.env.ENV === 'DEV') {
    searchQry = countryData.searchTerms.searchDev
} else {
    searchQry = countryData.searchTerms.searchQA
}

describe('Guest Search SPR validation', () => {
    before(async () => {
        await homePage.navigateToAppHomePage();
        await homePage.acceptCookieConsent();
        if(process.env.REGION === 'US' && process.env.ENV === 'PROD') {
            await headerContentAction.enterQueryInSearchBoxAndClickSearchButton('acid acetic');
        } else {
            await headerContentAction.enterQueryInSearchBoxAndClickSearchButton(searchQry);
        }
    });

    it('Verify Search Results Page', async () => {
        await searchResultsPage.verifySearchResultsTabsIsDisplayed();
        await searchResultsPage.verifyFilterIsDisplayed();
        await searchResultsPage.verifyRelatedSearchTermIsDisplayed();
    });

    it('Validate Related Search Term has content', async () => {
        await searchResultsPage.verifyRelatedSearchTermLink();
    });

    it('Select filters', async () => {
        await searchResultsPage.selectTheFirstFilter();
        await searchResultsPage.verifySelectFilterIsDisplayed();
    });

    it('Reset filters', async () => {
        await searchResultsPage.resetFilters();
    });

    it('Click Categories Tab and Validate Content', async () => {
        await searchResultsPage.clickCategoriesTab();
        await searchResultsPage.verifyCategoriesContent();
    });

    it('Filter is not displayed under Categories tab', async () => {
        await searchResultsPage.filtersIsNotDisplayed();
    })

    it('Validate Related Search Term under Categories Tab', async () => {
        await searchResultsPage.verifyRelatedSearchTermIsDisplayed();
        await searchResultsPage.verifyRelatedSearchTermLink();
    });
});
