let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let productCatalogPage = require('../../PageActions/PageAction_Common/ProductCatlog.js');
let countryData = require('../../TestData/TestLevelData/CountryLevelData/GetCountryFile').getCountryFile();
let guestRFQ = require('../../PageActions/PageAction_Common/GuestRFQ.js');
let testData = require('../../TestData/TestLevelData/TestCaseData.js')

describe('TS0069 Guest RFQ Unique Email', () => {
    before(async () => {
        await homePage.navigateToAppHomePage();
        await homePage.acceptCookieConsent();
        await homePage.clickOnProductCategories(0);
        await productCatalogPage.clickOnViewPriceOrRequestQuoteButton_Guest();
    });

    it('Enter User Contact Info', async () => {
        await guestRFQ.fillRequiredContactInfo(testData.common.gmailDynamic, 'TEST', 'TEST', 'TEST', countryData.docsForm.country, 1, false);
    });

    it('Enter User Shipping Address', async () => {
        await guestRFQ.fillRequiredShippingInfo('12345 Main St', '12345', 'City', countryData.shippingAddress.validState, countryData.docsForm.country);
    });

    it('Enter Product Needs', async () => {
        await guestRFQ.fillRequiredProductNeeds('01/01/2025', '1000', '1001', 'TEST');
    });

    it('Request Receive Forum', async () => {
        await guestRFQ.confirmRequestReceive(true);
    });

});
