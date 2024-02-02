let testData = require('../../TestData/TestLevelData/TestCaseData.js');
let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let signInPage = require('../../PageActions/PageAction_Common/SignInPage.js');
let headerPage = require('../../PageActions/PageAction_Common/HeaderContentAction');
const { getSecret } = require('../../../aws-secret-manager');
let userEmail;
let userPassword;

describe('TS0077 Notification Flyout Validation', function () {
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
        await signInPage.loginWithValidCredentials(userEmail, userPassword);
    });

    it('Open Notification Flyout', async () => {
        await headerPage.clickNotificationIcon();
    });

    it('Validate Notification Flyout', async () => {
        await headerPage.validateNotificationFlyout();
    });
});
