let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let accountSubmittedPage = require('../../PageActions/PageAction_Common/AccountSubmittedPage.js');
let testData = require('../../TestData/TestLevelData/TestCaseData.js');
let signUpPage = require('../../PageActions/PageAction_Common/SignUpPage.js');
let SignUpPageEMEA = require('../../PageActions/PageAction_Common/SignUpPageEMEA.js');

describe('TS0079 Create a Never Purchased Before account EMEA', function () {
    before(async () => {
        await homePage.navigateToAppHomePage();
        await  homePage.acceptCookieConsent();
        await SignUpPageEMEA.navigateToNewCreditApplicationPage();
    });

    it('Enter New Customer Contact Info Page 1', async () => {
        await SignUpPageEMEA.enterContactInfoDetails(testData.common.companyName_Dynamic, testData.common.companyBuildingNumber,testData.common.vatNumber,testData.common.phoneNumber_Dynamic,testData.common.mailinatorMail_Dynamic);
        await SignUpPageEMEA.selectDateFromCalender('3');
        await SignUpPageEMEA.clickOnContinueButton();
    });

    it('Enter New Company Addresses Info Page 2', async () => {
        await SignUpPageEMEA.enterCompanyAddressDetails(testData.common.companyAddress,testData.common.city,testData.common.zipCode);
        await SignUpPageEMEA.clickOnInvoiceBillingCheckBox();
        await SignUpPageEMEA.clickOnTradingAddressCheckBox();
        await SignUpPageEMEA.clickOnCompanyAddressContinueButton();
    });

    it('Enter New Account Contact Details Info Page 3', async () => {
        await SignUpPageEMEA.enterAccountContactDetails(testData.common.firstName_Dynamic,testData.common.lastName_Dynamic,testData.common.jobTitle_Dynamic,testData.common.mailinatorMail_Dynamic,testData.common.phoneNumber_Dynamic);
        await SignUpPageEMEA.clickOnOrderConfirmationCheckBox();
        await SignUpPageEMEA.clickOnPricingContactCheckBox();
        await SignUpPageEMEA.clickOnSafetyDataSheetCheckBox();
        await SignUpPageEMEA.clickOnProductSpecificationsCheckBox();
        await SignUpPageEMEA.clickOnTechnicalCheckBox();
        await SignUpPageEMEA.clickOnQualityCheckBox();
        await SignUpPageEMEA.clickOnDeliveryNotesCheckBox();
        await SignUpPageEMEA.clickOnAccountsPayableCheckBox();
        await SignUpPageEMEA.clickOnAccountContactDetailsContinueButton();
    });

    it('Enter New Delivery Point Info Page 4', async () => {
        await SignUpPageEMEA.enterDeliveryPointDetails(testData.common.companyAddress,testData.common.city,testData.common.zipCode,testData.common.deliverypointaddress, 10);
        await SignUpPageEMEA.clickOnDeliveryPointsContinueButton();
    });

    it('Enter New Delivery Point Contact Info Page 5', async () => {
        await SignUpPageEMEA.clickOnSafetyDataSheetsCheckBox();
        await SignUpPageEMEA.clickOnPsTechnicalDataSheetsCheckBox();
        await SignUpPageEMEA.clickOnQualityDepartmentCheckBox();
        await SignUpPageEMEA.clickOnDpContactDetailsContinueButton();
    });

    it('Enter New Customer Declaration Info Page 6', async () => {
        await SignUpPageEMEA.enterCustomerDeclarationDetails(testData.common.firstName_Dynamic,testData.common.lastName_Dynamic,testData.common.jobTitle_Dynamic,testData.common.phoneNumber_Dynamic,testData.common.mailinatorMail_Dynamic,testData.common.lastName_Dynamic);
        await SignUpPageEMEA.verifyCustomerDeclarationDatesIsDisplayed();
        await SignUpPageEMEA.clickOnTermsAndConditionsCheckBox();
        await SignUpPageEMEA.clickOnPrivacyPolicyCheckBox();
    });

    it('Submit Form', async () => {
        await SignUpPageEMEA.clickOnSubmitButton();
        await accountSubmittedPage.verifySuccessLineAlert(testData.common.trueStatus);
        await accountSubmittedPage.verifyNewAccountRequestSubmittedText();
    });
});
