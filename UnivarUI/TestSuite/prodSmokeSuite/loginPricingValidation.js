let homePage = require('../../PageActions/PageAction_Common/HomePage')
let signInPage = require('../../PageActions/PageAction_Common/SignInPage')
let testData = require('../../TestData/TestLevelData/TestCaseData.js');
let personalizedHomepage =  require('../../PageActions/PageAction_Common/PersonalizedHomePage.js');
let productCatalogPage = require('../../PageActions/PageAction_Common/ProductCatlog.js');
let productDetail = require('../../PageActions/PageAction_Common/ProductDetail.js');
const { getSecret } = require('../../../aws-secret-manager');
let userEmail;
let userPassword;

describe('Validate Login Quoted Price', function () {
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
        await homePage.verifyHomePage(testData.common.trueStatus);
        await homePage.acceptCookieConsent();
    });

    it('Enter Credentials and Sign In', async () => {
        await homePage.clickOnSignInLink();
        await signInPage.enterEmail(userEmail);
        await signInPage.enterPassword(userPassword);
        await signInPage.clickOnSignInButton();
    });

    it('Click quoted products on Personalized Home Page', async () => {
        await personalizedHomepage.clickOnQuotedProductsCTA();
    });

    it('Validate Web Price on PLP', async () => {
        await productCatalogPage.validateQuotedPrice();
    });

    it('Validate Web Price on PDP', async () => {
        if(process.env.REGION === 'SE' && process.env.ENV === 'PROD') {
            await productCatalogPage.clickProductByIndex(3);
        } else {
            await productCatalogPage.clickTheFirstProduct();
        }
        await productDetail.verifyPriceOnPDP();
    });
});
