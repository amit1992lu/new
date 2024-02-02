let personalizedHomepage = require('../../PageActions/PageAction_Common/PersonalizedHomePage.js');
let testData = require('../../TestData/TestLevelData/TestCaseData.js');
let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let signInPage = require('../../PageActions/PageAction_Common/SignInPage');
let headerPage = require('../../PageActions/PageAction_Common/HeaderContentAction');
const { getSecret } = require('../../../aws-secret-manager');
let userEmail;
let userPassword;

describe('TS013 Verify Personalized Homepage', function () {
    before(async () => {
        if(process.env.DEVICE_FARM) {
            const secretResponse = await getSecret('digital-qa-automation-test');
            userEmail = await secretResponse['UNIVAR_MY_ACCOUNT_USER']
            userPassword = await secretResponse['UNIVAR_MY_ACCOUNT_PASSWORD'];
        } else {
            userEmail = process.env.UNIVAR_MY_ACCOUNT_USER;
            userPassword = process.env.UNIVAR_MY_ACCOUNT_PASSWORD;
        }
        await homePage.navigateToAppHomePage();
        await homePage.verifyHomePage(testData.common.trueStatus);
        await homePage.acceptCookieConsent();
    });
    it('Enter Credentials and Sign In',async ()=>{
        await homePage.clickOnSignInLink();
        await signInPage.loginWithValidCredentials(userEmail, userPassword);
    });
    it('Verify Mandatory fields on Personalized Homepage',async ()=>{
        await personalizedHomepage.verifyPersonalizedHomePage();
        await personalizedHomepage.verifyMandatoryFieldsOnPersonalizedHomepage();
        await personalizedHomepage.verifyRecentInvoicesBlock();
    });
    it('Verify Product Catalog is appearing for login user', async () => {
        await homePage.VerifyProductCatalogTab();
    });

    it('Navigating to Quoted Products section', async () => {
        await headerPage.clickOnMYAccountDropdown();
        await headerPage.clickAccountOverview();
        await homePage.VerifyQuotedProducts_Section();
    });
    it('Navigating to Order History section', async () => {
        await headerPage.clickOnMYAccountDropdown();
        await headerPage.clickAccountOverview();
        await homePage.VerifyOrderHistory_Section();
    });
    it('Navigating to Discover Products', async () => {
        await headerPage.clickOnMYAccountDropdown();
        await headerPage.clickAccountOverview();
        await homePage.VerifyDiscoverProductSection();
    });
});
