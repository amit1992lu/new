'use strict';
let headerContentAction = require('../../PageActions/PageAction_Common/HeaderContentAction.js');
let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let searchResultsPage = require('../../PageActions/PageAction_Common/SearchResultsPage.js');

let getLanguageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile');

let getLanguage = getLanguageFile.getLanguageFile();

describe('Guest Search no results validation', () => {
    before(async () => {
        await homePage.navigateToAppHomePage();
        await homePage.acceptCookieConsent();
    });

    it('Search for a restricted product', async () => {
        await headerContentAction.enterQueryInSearchBox('asdfgh');
    });

    it('No results in auto complete window', async () => {
        await headerContentAction.verifyNoResultsFound();
    });

    it('Verify No Results Message', async () => {
        await headerContentAction.clickSearchIcon();
        await searchResultsPage.verifyNoSearchResults();
        await searchResultsPage.verifyNoResultsMessage(getLanguage.searchPage.noResults);
    });

    it('Verify Empty Search Results Content', async () => {
        await searchResultsPage.verifyEmptyResultsContent();
    });
});
