let cartPage = require('../../PageActions/PageAction_Common/CartPage.js');
let countryData = require('../../TestData/TestLevelData/CountryLevelData/GetCountryFile.js').getCountryFile();
let headerContentAction = require('../../PageActions/PageAction_Common/HeaderContentAction.js');
let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let miniCartPage = require('../../PageActions/PageAction_Common/MiniCartPage.js');
let searchResultsPage = require('../../PageActions/PageAction_Common/SearchResultsPage.js');

let searchQry;

if(process.env.ENV === 'DEV') {
    searchQry = countryData.searchTerms.webPriceDev
} else {
    searchQry = countryData.searchTerms.webPrice
}

describe('TS0081 Guest UOM Validation', () => {
    before(async () => {
        await homePage.navigateToAppHomePage();
        await homePage.acceptCookieConsent();
        await headerContentAction.enterQueryInSearchBoxAndClickSearchButton(searchQry);
    });

    it('Verify UOM on Search Results Page', async () => {
        await searchResultsPage.verifyUOMonSRP();
    });

    it('Verify UOM on Mini Cart', async () => {
        await searchResultsPage.clickAddToCartButton(searchQry);
        await miniCartPage.verifyMiniCartUOM();
        await miniCartPage.clickReviewCart();
    });

    it('Verify UOM on Cart Page', async () => {
        await cartPage.verifyUOMonCartPage();
        await cartPage.removeProductFromCartPage();
    });
});
