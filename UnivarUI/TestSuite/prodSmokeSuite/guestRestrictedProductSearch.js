let headerContentAction = require('../../PageActions/PageAction_Common/HeaderContentAction.js');
let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let searchResultsPage = require('../../PageActions/PageAction_Common/SearchResultsPage.js');
let countryData = require('../../TestData/TestLevelData/CountryLevelData/GetCountryFile').getCountryFile();

describe('Guest Restricted Product Search', () => {
    before(async () => {
        await homePage.navigateToAppHomePage();
        await homePage.acceptCookieConsent();
    });

    it('Search for a restricted product', async () => {
        await headerContentAction.enterQueryInSearchBox(countryData.searchTerms.restrictedProduct);
    });

    it('No results in auto complete window', async () => {
        await headerContentAction.verifyNoResultsFound();
    });

    it('Verify No results were found', async () => {
        await headerContentAction.clickSearchIcon();
        await searchResultsPage.verifyNoSearchResults();
    });
});
