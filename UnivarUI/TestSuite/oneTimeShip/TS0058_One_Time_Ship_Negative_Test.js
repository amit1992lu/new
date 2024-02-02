let testData = require('../../TestData/TestLevelData/TestCaseData.js');
let getLanguageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile').getLanguageFile();;
let homePage = require('../../PageActions/PageAction_Common/HomePage');
let orderConfirmationPage = require('../../PageActions/PageAction_Common/OrderConfirmationPage.js');
let paymentPage = require('../../PageActions/PageAction_Common/PaymentCheckoutPage.js');
let signInPage = require('../../PageActions/PageAction_Common/SignInPage');
let productCatalogPage = require('../../PageActions/PageAction_Common/ProductCatlog.js');
let personalizedHomepage =  require('../../PageActions/PageAction_Common/PersonalizedHomePage.js');
let shippingPage = require('../../PageActions/PageAction_Common/ShippingCheckoutPage.js');
let shippingPage_Loc = require('../../Locator/Locator_Common/ShippingCheckoutPage_Locator.js');
let searchResultsPage = require('../../PageActions/PageAction_Common/SearchResultsPage.js');
const { getSecret } = require('../../../aws-secret-manager');
let userEmail;
let userPassword;
let date;

describe('TS0058 One Time Ship Negative', function () {
	before(async() => {
		if(process.env.DEVICE_FARM) {
            const secretResponse = await getSecret('digital-qa-automation-test');
            userEmail = await secretResponse['ONETIMESHIPUSER']
            userPassword = await secretResponse['ONETIMESHIPPASSWORD'];
        } else {
            userEmail = process.env.ONETIMESHIPUSER;
            userPassword = process.env.ONETIMESHIPPASSWORD;
        }
		await homePage.navigateToAppHomePage()
		await homePage.verifyHomePage(testData.common.trueStatus);
		await homePage.acceptCookieConsent();
		await homePage.clickOnSignInLink();
		await signInPage.enterEmail(userEmail);
		await signInPage.enterPassword(userPassword);
		await signInPage.clickOnSignInButton();
	});

	it('Click on Quote Product and verify Details in MiniCart', async() => {
		await personalizedHomepage.clickOnQuotedProductsCTA();
		await productCatalogPage.clickOnAddToCartButton(1);
	});

	it('Proceed to Checkout', async() => {
		await searchResultsPage.clickOnCheckoutButton();
	});

	it('Click Select another shipping address link', async() => {
		await shippingPage.clickShippingPageActions(shippingPage_Loc.ANOTHER_SHIPPING_ADDRESS, 'Select another shipping address link');
	});

	it('Click Add One Time Ship Address Link', async() => {
		await shippingPage.clickShippingPageActions(shippingPage_Loc.ONE_TIME_SHIP_ADDRESS, 'One Time Shipping Address');
	});

	it('Clear out One Time Ship Forum', async() => {
		await shippingPage.fillOneTimeShippingAddressForum(shippingPage_Loc.ONE_SHIP_FIRST_NAME, '', 'One Time Ship First Name');
		await shippingPage.fillOneTimeShippingAddressForum(shippingPage_Loc.ONE_SHIP_LAST_NAME, '', 'One Time Ship Last Name');
	});

	it('Submit One Time Ship Address Forum', async() => {
		await shippingPage.submitOneTimeShippingAddressForum();
	});

	it('Verify Error Messages', async() => {
		await shippingPage.verifyOneTimeShipError(shippingPage_Loc.ONE_SHIP_FIRST_NAME_ERROR);
		await shippingPage.verifyOneTimeShipError(shippingPage_Loc.ONE_SHIP_LAST_NAME_ERROR);
		await shippingPage.verifyOneTimeShipError(shippingPage_Loc.ONE_SHIP_ADDRESS_ERROR);
		await shippingPage.verifyOneTimeShipError(shippingPage_Loc.ONE_SHIP_CITY_ERROR);
		await shippingPage.verifyOneTimeShipError(shippingPage_Loc.ONE_SHIP_ZIPCODE_ERROR);
	});

});
