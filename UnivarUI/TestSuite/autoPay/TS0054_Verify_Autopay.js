let homePage = require('../../PageActions/PageAction_Common/HomePage')
let signInPage = require('../../PageActions/PageAction_Common/SignInPage')
let testData = require('../../TestData/TestLevelData/TestCaseData')
const TestCaseData = require('../../TestData/TestLevelData/TestCaseData');
const setUpAutoPay = require('../../PageActions/PageAction_Common/SetUpAutoPay');
const HeaderContentAction = require('../../PageActions/PageAction_Common/HeaderContentAction');
const { getSecret } = require('../../../aws-secret-manager');

let userEmail;
let userPassword;

describe('TS0054 Verify AutoPay Page', function () {
    before(async () => {
        if(process.env.DEVICE_FARM) {
            const secretResponse = await getSecret('digital-qa-automation-test');
            userEmail = await secretResponse['AUTOPAYUSERID']
            userPassword = await secretResponse['AUTOPAYUSERPASSWORD'];
        } else {
            userEmail = process.env.AUTOPAYUSERID;
            userPassword = process.env.AUTOPAYUSERPASSWORD;
        }
        await homePage.navigateToAppHomePage()
        await homePage.acceptCookieConsent();
        await homePage.verifyHomePage(testData.common.trueStatus);
        await homePage.clickOnSignInLink()
        await signInPage.enterEmail(userEmail)
        await signInPage.enterPassword(userPassword);
        await signInPage.clickOnSignInButton()
    })
    it('Click_on_SetUp_AutoPay_Link', async () => {
        await homePage.verifySetUpAutoPayLink();
        await homePage.clickOnAutoPayLink();
    })
    it('Click_on_CheckBox_and_SetUp_AutoPay_Button', async () => {
        await setUpAutoPay.clickOnSetupAutoPay();
    })
    it('Verify Set Up AutoPay Page validation Message', async () => {
        await setUpAutoPay.verifySetupAutoPayPage();
    })
    it('Enter_SetUP_AutoPay_Bank_Routing_No', async () => {
        await setUpAutoPay.enterBankRoutingNo(TestCaseData.common.bank_routing_no);
    })
    it('Enter_SetUP_AutoPay_Bank_Account_No', async () => {
        await setUpAutoPay.enterBankAccountNo(TestCaseData.common.account_no);
    })
    it('Enter_SetUP_AutoPay_Account_Phone_Number', async () => {
        await setUpAutoPay.enterAccountHolderPhone(TestCaseData.common.account_holder_phone);
    })
    it('Enter_SetUP_AutoPay_Bank_Address', async () => {
        await setUpAutoPay.enterBankAddress(TestCaseData.common.bank_address);
    })
    it('Enter_SetUP_AutoPay_City', async () => {
        await setUpAutoPay.enterCity(TestCaseData.common.city);
    })
    it('Enter_SetUP_AutoPay_State', async () => {
        await setUpAutoPay.selectState(TestCaseData.common.state);
    })
    it('Enter_Zip', async () => {
        await setUpAutoPay.enterZip(TestCaseData.common.zip);
    })
    it('Click SetUpAutoPay Checkbox', async () => {
        await setUpAutoPay.clickSetUpAutoPayCheckBox();
    })
    it('Click Terms Checkbox', async () => {
        await setUpAutoPay.clickTermsandConditionsCheckBox();
    })
    it('Click_SetUp_AutoPay_Button', async () => {
        await setUpAutoPay.clickSetUpAutoPayButton();
    })
    it('Verify_Setup_AutoPay_Success_Message', async () => {
        await setUpAutoPay.verifySetUpAutoPaySuccessMessage();
    })
    it('Click Go to personal homepage button', async () => {
        await HeaderContentAction.navigateToPersonalHomepage();
    })
})
