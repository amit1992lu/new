let headerContentAction = require('../../PageActions/PageAction_Common/HeaderContentAction.js');
let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let productCatalog = require('../../PageActions/PageAction_Common/ProductCatlog.js');
let productDetail = require('../../PageActions/PageAction_Common/ProductDetail.js');
let searchResultsPage = require('../../PageActions/PageAction_Common/SearchResultsPage.js');
let countryData = require('../../TestData/TestLevelData/CountryLevelData/GetCountryFile').getCountryFile();

let searchQry;
let webPrice;

if(process.env.ENV === 'PROD') {
    searchQry = countryData.searchTerms.searchProd
    webPrice = countryData.searchTerms.webPrice
} else if(process.env.ENV === 'DEV') {
    searchQry = countryData.searchTerms.searchDev
    webPrice = countryData.searchTerms.webPriceDev
} else {
    searchQry = countryData.searchTerms.searchRFQProductQA
    webPrice = countryData.searchTerms.webPrice
}

describe('Guest product detail validation', () => {
    before(async () => {
        await homePage.navigateToAppHomePage();
        await homePage.acceptCookieConsent();
    });

    it('Verify request of quotes is displayed', async () => {
        await headerContentAction.enterQueryInSearchBoxAndClickSearchButton(searchQry);
        await productCatalog.clickTheFirstProduct();
        await productDetail.verifyRequestQuoteIsDisplayed();
    });

    if(process.env.REGION === 'US' || process.env.REGION === 'CA_EN' || process.env.REGION === 'CA_FR') {
        it('Validate Web Price', async () => {
            await headerContentAction.enterQueryInSearchBoxAndClickSearchButton(webPrice);
            await productCatalog.clickTheFirstProduct();
            await productDetail.verifyWebPriceIsDisplayed();
        });
    } else {
        it('Verify no Web Price product return no results', async () => {
            await headerContentAction.enterQueryInSearchBoxAndClickSearchButton(searchQry);
            await productCatalog.clickTheFirstProduct();
            await productDetail.verifyWebPriceIsNotDisplayed();
        });
    }
});
