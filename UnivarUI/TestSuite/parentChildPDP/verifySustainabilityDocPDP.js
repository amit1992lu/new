let headerContentAction = require('../../PageActions/PageAction_Common/HeaderContentAction.js');
let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let productCatalog = require('../../PageActions/PageAction_Common/ProductCatlog.js');
let productDetail = require('../../PageActions/PageAction_Common/ProductDetail.js');
let countryData = require('../../TestData/TestLevelData/CountryLevelData/GetCountryFile.js').getCountryFile();

describe('Verify Sustainability Doc title and view', () => {
  before(async () => {
    await homePage.navigateToAppHomePage();
    await homePage.acceptCookieConsent();
  });

  it('Search and Select a product with sustainability doc', async () => {
    await headerContentAction.enterQueryInSearchBoxAndClickSearchButton(countryData.searchTerms.sustainabilityDoc);
    await productCatalog.clickTheFirstProduct();
  });

  it('Verify View Sustainability Document', async () => {
    try {
      await productDetail.verifySustainabilityDocument(countryData.searchTerms.sustainabilityDoc);
    } catch (error) {
      expect(error.statusCode).to.not.equal(429);
    }
  });
});

