let homePage = require('../../PageActions/PageAction_Common/HomePage')
let headerContentAction = require('../../PageActions/PageAction_Common/HeaderContentAction.js');
let testData = require('../../TestData/TestLevelData/TestCaseData.js');
let countryData = require('../../TestData/TestLevelData/CountryLevelData/GetCountryFile').getCountryFile();
let productCatalogPage = require('../../PageActions/PageAction_Common/ProductCatlog.js');
let productDetail = require('../../PageActions/PageAction_Common/ProductDetail.js');

let searchQry;

if(process.env.ENV === 'PROD') {
    searchQry = countryData.searchTerms.webPrice
} else if(process.env.ENV === 'DEV') {
    searchQry = countryData.searchTerms.webPriceDev
} else {
    searchQry = countryData.searchTerms.webPrice
}

describe('Validate Guest Web Price', function () {
    before(async () => {
        await homePage.navigateToAppHomePage();
        await homePage.verifyHomePage(testData.common.trueStatus);
        await homePage.acceptCookieConsent();
    });

    it('Search Web Price Product', async () => {
        await headerContentAction.enterQueryInSearchBoxAndClickSearchButton(searchQry);
    });

    it('Validate Web Price on SRS', async () => {
        await productCatalogPage.verifyWebPriceTag();
    });

    it('Validate Web Price on PDP', async () => {
        await productCatalogPage.clickTheFirstProduct();
        await productDetail.verifyWebPriceOnPDP();
    });
});
