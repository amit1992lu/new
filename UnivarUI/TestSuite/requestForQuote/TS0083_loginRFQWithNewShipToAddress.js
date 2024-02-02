let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let productCatalogPage = require('../../PageActions/PageAction_Common/ProductCatlog.js');
let countryData = require('../../TestData/TestLevelData/CountryLevelData/GetCountryFile').getCountryFile();
let guestRFQ = require('../../PageActions/PageAction_Common/GuestRFQ.js');
let getLanguageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile');
let getLanguage = getLanguageFile.getLanguageFile();
const { getSecret } = require('../../../aws-secret-manager');
let userEmail;
let userPassword;

describe('TS0083_loginRFQWithNewShipToAddress', () => {
    before(async () => {
        if(process.env.DEVICE_FARM) {
            const secretResponse = await getSecret('digital-qa-automation-test');
            userEmail = await secretResponse['PRODUSER']
            userPassword = await secretResponse['PRODPASSWORD'];
        } else {
            userEmail = process.env.PRODUSER;
            userPassword = process.env.PRODPASSWORD;
        }
        await homePage.navigateToAppHomePage();
        await homePage.acceptCookieConsent();
        await homePage.clickOnProductCategories(0);
        await productCatalogPage.clickOnViewPriceOrRequestQuoteButton_Guest();
    });

    it('Enter User Contact Info', async () => {
        await guestRFQ.loginAsRegisteredUser(userEmail, userPassword)
    });

    it('Enter New ShipTo Address and Product Needs', async () => {
        await productCatalogPage.verifySuccessToastMessage(getLanguage.commonSuccessMessage.loginSuccessMessage);
        await guestRFQ.selectAddNewAddress('12345 Main St', '12345', 'City', countryData.shippingAddress.validState, countryData.docsForm.country);
        await guestRFQ.fillRequiredProductNeeds('01/01/2025', '1000', '1001', 'TEST');
        await productCatalogPage.verifySuccessToastMessage(getLanguage.commonSuccessMessage.PLPRFQSuccessMsg);
    })

});
