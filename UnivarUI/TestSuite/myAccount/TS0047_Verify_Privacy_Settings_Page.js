let homePage = require('../../PageActions/PageAction_Common/HomePage')
let signInPage = require('../../PageActions/PageAction_Common/SignInPage')
let headerPage = require('../../PageActions/PageAction_Common/HeaderContentAction');
let testData = require('../../TestData/TestLevelData/TestCaseData')
let privacyPage = require('../../PageActions/PageAction_Common/PrivacySettingsPage');
let Privacy_Setting_Locator = require('../../Locator/Locator_Common/Privacy_Setting_Locator');
const { getSecret } = require('../../../aws-secret-manager');
let userEmail;
let userPassword;


describe('TS0047 Verify Privacy Setting Page', function () {
    before(async () => {
        if(process.env.DEVICE_FARM) {
            const secretResponse = await getSecret('digital-qa-automation-test');
            userEmail = await secretResponse['UNIVAR_MY_ACCOUNT_USER']
            userPassword = await secretResponse['UNIVAR_MY_ACCOUNT_PASSWORD'];
        } else {
            userEmail = process.env.UNIVAR_MY_ACCOUNT_USER;
            userPassword = process.env.UNIVAR_MY_ACCOUNT_PASSWORD;
        }
        await homePage.navigateToAppHomePage()
        await homePage.acceptCookieConsent();
        await homePage.verifyHomePage(testData.common.trueStatus);
        await homePage.clickOnSignInLink()
        await signInPage.enterEmail(userEmail)
        await signInPage.enterPassword(userPassword);
        await signInPage.clickOnSignInButton()
    })

    it('Navigate to Privacy Setting Page', async () => {
        await headerPage.clickOnMYAccountDropdown();
        await headerPage.clickPrivacySettings();
    });

    it('Verify Merge into one file radio', async () => {
        await privacyPage.verifyPrivacySettingComponents(Privacy_Setting_Locator.MERGE_INTO_ONE_FILE_RADIO);
    });

    it('Verify Current Password Field', async () => {
        await privacyPage.verifyPrivacySettingComponents(Privacy_Setting_Locator.CURRENT_PASSWORD);
    });

    it('Verify Download Button', async () => {
        await privacyPage.verifyPrivacySettingComponents(Privacy_Setting_Locator.DOWNLOAD_PERSONAL_DATA_BUTTON);
    });

    it('Verify Delete Radio Button', async () => {
        await privacyPage.verifyPrivacySettingComponents(Privacy_Setting_Locator.DELETE_RADIO);
    });

    it('Verify Submit Request Button', async () => {
        await privacyPage.verifyPrivacySettingComponents(Privacy_Setting_Locator.SUBMIT_DELETE_REQUEST_BUTTON);
    });
})
