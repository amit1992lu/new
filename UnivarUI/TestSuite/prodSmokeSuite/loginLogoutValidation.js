let homePage = require('../../PageActions/PageAction_Common/HomePage')
let signInPage = require('../../PageActions/PageAction_Common/SignInPage')
let testData = require('../../TestData/TestLevelData/TestCaseData.js');
let headerPage = require('../../PageActions/PageAction_Common/HeaderContentAction');
const { getSecret } = require('../../../aws-secret-manager');

let userEmail;
let userPassword;


describe('Login Logout Script', function () {
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

    it('Logout of user', async () => {
        await headerPage.clickOnMYAccountDropdown();
        await headerPage.clickLogout();
    });
});
