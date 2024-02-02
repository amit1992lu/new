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
let countryData = require('../../TestData/TestLevelData/CountryLevelData/GetCountryFile').getCountryFile();
const { getSecret } = require('../../../aws-secret-manager');
let userEmail;
let userPassword;
let date;

describe('TS0057 One Time Ship', function () {
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

	it('Fill out One Time Ship Forum', async() => {
		await shippingPage.fillOneTimeShippingAddressForum(shippingPage_Loc.ONE_SHIP_ADDRESS, countryData.address.shippingAddress, 'One Time Ship Address');
		await shippingPage.fillOneTimeShippingAddressForum(shippingPage_Loc.ONE_SHIP_CITY, countryData.address.city, 'One Time Ship City');
		await shippingPage.fillOneTimeShippingAddressForum(shippingPage_Loc.ONE_SHIP_ZIP, countryData.address.zipCode, 'One Time Ship Zip');
		await shippingPage.fillOneTimeShippingAddressForum(shippingPage_Loc.ONE_PHONE, '224-224-2222', 'One Time Ship Zip');
	});

	it('Submit One Time Ship Address Forum', async() => {
		await shippingPage.submitOneTimeShippingAddressForum();
	});

	it.skip('Verify Smarty Streets Model', async() => {
		await shippingPage.verifyOneTimeShipAddressModelAction(shippingPage_Loc.ADDRESS_ENTERED_RADIO, 'Address Entered Radio');
		if(process.env.REGION === 'SE'|| process.env.REGION === 'NO') {
			await shippingPage.verifyOneTimeShipAddressModelAction(shippingPage_Loc.ADDRESS_ENTERED_SUBMIT_BTN, 'Address Entered Submit Button');
		} else {
			await shippingPage.verifyOneTimeShipAddressModelAction(shippingPage_Loc.CONTINUE_WITH_ADDRESS, 'Continue with address button');
		}
	});

	it('Enter Details in shipping page and proceed', async() =>{
		date = await shippingPage.selectDateFromCalender('3');
		await shippingPage.fillOutShippingPONumber('12345');
		await shippingPage.clickOnNextPaymentButton();
	});

	it('Enter Details on payment page and proceed', async() =>{
		await paymentPage.verifyPaymentPage();
		await paymentPage.verifyShippingAddressBlock(date);
		await paymentPage.clickOnTermsAndConditionsCheckBox();
		await paymentPage.clickOnSubmitOrderButton();
	});

	it('Verify details in order confirmation page', async() => {
		await orderConfirmationPage.verifyOrderConfirmationPage();
	});
});
