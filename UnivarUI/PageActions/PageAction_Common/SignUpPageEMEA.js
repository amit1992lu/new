
let commonActions = require('../../../Utilities/CommonActions.js');
let homePageLoc = require('../../Locator/Locator_Common/HomePage_Locator.js');
let SignUpPageEmea_Locator = require('../../Locator/Locator_Common/SignUpPageEmea_Locator.js');
const TestCaseData = require('../../TestData/TestLevelData/TestCaseData');

class SignUpPageEmea{
    async navigateToNewCreditApplicationPage() {
        switch (`${process.env.ENV}-${process.env.REGION}`) {
            case 'QA-UK':
                browser.url(TestCaseData.common.newCreditApplUrlUK_qa);
                break;
            case 'DEV-UK':
                browser.url(TestCaseData.common.newCreditApplUrlUK_dev);
                break;
            case 'QA-IE':
                browser.url(TestCaseData.common.newCreditApplUrlIE_qa);
                break;
            case 'DEV-IE':
                browser.url(TestCaseData.common.newCreditApplUrlIE_dev);
                break;
            default:
                console.log(`Credit application is not turned on in ${process.env.REGION}`);
                process.exit();
        }
    }
     //Click On My company has purchased from Univar Solutions never radio button
    async clickOnCmpnyNeverPurchased() {
        await commonActions.waitForClickable(SignUpPageEmea_Locator.NEWACCOUNT_RADIOBTN,  'My company has never purchased from Univar Solutions before radio button');
        await commonActions.safeVisibleClick(SignUpPageEmea_Locator.NEWACCOUNT_RADIOBTN,  'My company has never purchased from Univar Solutions before radio button');
        await commonActions.domStatus();
    }
    /* Page 1 Contact Information
    Enter Company Name */
    async enterCompanyName(companyName) {
        await commonActions.waitForVisible(SignUpPageEmea_Locator.COMPANY_FIELD_CREDIT_APPL,  'Company name in sign up page');
        await commonActions.setValue(SignUpPageEmea_Locator.COMPANY_FIELD_CREDIT_APPL, companyName, 'Company name in sign up page');
    }
    //Enter Company Reg. Number TO/DO 'companyBuildingNumber': 'CompanyBuilding' + commonActions.getRandomNumber(4),
    async enterCompanyRegNumber(companyRegNumber) {
        await commonActions.waitForVisible(SignUpPageEmea_Locator.COMPANY_REGISTRATION_NUMBER,  'Company Reg Number in sign up page');
        await commonActions.setValue(SignUpPageEmea_Locator.COMPANY_REGISTRATION_NUMBER, companyRegNumber, 'Company Reg Number in sign up page');
    }
    //Date of registration
    async selectDateFromCalender(noOfDays) {
        await commonActions.waitForClickable(SignUpPageEmea_Locator.DATE_PICKER,  'Calender');
        await commonActions.safeVisibleClick(SignUpPageEmea_Locator.DATE_PICKER,  'Calender');
        await commonActions.browserKeys('Enter', 'Enter key');
       return await commonActions.getAttribute(SignUpPageEmea_Locator.DATE_PICKER, 'value', 'Date picker');
    }
    //Enter VAT Number
    async enterVatNumber(vatNumber) {
        await commonActions.waitForVisible(SignUpPageEmea_Locator.VAT_NUMBER,  'Vat Number in sign up page');
        await commonActions.setValue(SignUpPageEmea_Locator.VAT_NUMBER, vatNumber, 'Vat Number in sign up page');
    }
    //Enter Phone Number
    async enterPhoneNumber(phoneNumber) {
        await commonActions.waitForVisible(SignUpPageEmea_Locator.PHONE_NUMBER_FIELD_CREDIT_APPL,  'Phone Number in sign up page');
        await commonActions.setValue(SignUpPageEmea_Locator.PHONE_NUMBER_FIELD_CREDIT_APPL, phoneNumber, 'Phone Number in sign up page');
    }
    //Enter Email
    async enterEmail(email) {
        await commonActions.waitForVisible(SignUpPageEmea_Locator.EMAIL_INVOICES,  'Email field in sign up page');
        await commonActions.setValue(SignUpPageEmea_Locator.EMAIL_INVOICES, email, 'Email field in sign up page');
    }
    async enterContactInfoDetails(companyName, companyRegNumber, VatNumber, phoneNumber,email) {
        await this.enterCompanyName(companyName);
        await this.enterCompanyRegNumber(companyRegNumber);
        await this.enterVatNumber(VatNumber);
        await this.enterPhoneNumber(phoneNumber);
        await this.enterEmail(email);
    }
    //Continue button
    async clickOnContinueButton() {
        await commonActions.waitForVisible(SignUpPageEmea_Locator.CREDIT_APPL_CONTINUE_BUTTON,  'Continue button in sign up page');
        await commonActions.safeJavaScriptClick(SignUpPageEmea_Locator.CREDIT_APPL_CONTINUE_BUTTON,  'Continue button in sign up page');
        await commonActions.domStatus();
    }
    /* Page 2 Company Addresses
    Enter Company Address */
    async enterRegOfficeAddress(regOfficeAddress) {
        await commonActions.domStatus();
        await commonActions.waitForVisible(SignUpPageEmea_Locator.REG_OFFICE_ADDRESS, regOfficeAddress, 'Registered Office Address in Sign up Page');
        await commonActions.setValue(SignUpPageEmea_Locator.REG_OFFICE_ADDRESS, regOfficeAddress, 'Registered Office Address in Sign up Page');
    }
    //enter City
    async enterCity(city) {
        await commonActions.setValue(SignUpPageEmea_Locator.CITY_FIELD_CREDIT_APPL, city, 'City in Sign up page');
    }
    //enter ZipCode
    async enterZipCode(zipCode) {
        await commonActions.setValue(SignUpPageEmea_Locator.ZIPCODE_CREDIT_APPL, zipCode, 'ZipCode in Sign up page');
    }
    async clickOnInvoiceBillingCheckBox() {
        await commonActions.safeJavaScriptClick(SignUpPageEmea_Locator.INV_BILLING_ADDRESS_CHECKBOX, 'Invoice/Billing Address Check Box');
    }
    async clickOnTradingAddressCheckBox() {
        await commonActions.safeJavaScriptClick(SignUpPageEmea_Locator.TRADING_ADDRESS_CHECKBOX, 'Trading Address Check Box');
    }
    //Continue button
    async clickOnCompanyAddressContinueButton() {
        await commonActions.waitForVisible(SignUpPageEmea_Locator.COMPANYADDRESS_CONTINUE_BUTTON,  'Continue button in sign up page');
        await commonActions.safeJavaScriptClick(SignUpPageEmea_Locator.COMPANYADDRESS_CONTINUE_BUTTON,  'Continue button in sign up page');
        await commonActions.domStatus();
    }
    async enterCompanyAddressDetails(regOfficeAddress,city,zipCode){
        await this.enterRegOfficeAddress(regOfficeAddress);
        await this.enterCity(city);
        await this.enterZipCode(zipCode);
    }
    /*Page 3 Account Contact Details
    Primary Contact */
    //Enter First Name
    async enterFirstName(firstName) {
        await commonActions.domStatus();
        await commonActions.waitForVisible(SignUpPageEmea_Locator.PRIMARY_CONTACT_DETAILS_FIRSTNAME,  'First name in sign up page');
        await commonActions.setValue(SignUpPageEmea_Locator.PRIMARY_CONTACT_DETAILS_FIRSTNAME, firstName, '\'First name in sign up page\'')
    }
    //Enter Last Name
     async enterLastName(lastName) {
        await commonActions.waitForVisible(SignUpPageEmea_Locator.PRIMARY_CONTACT_DETAILS_LASTNAME,  'Last name in sign up page');
        await commonActions.setValue(SignUpPageEmea_Locator.PRIMARY_CONTACT_DETAILS_LASTNAME, lastName, 'Last name in sign up page');
    }
    //Enter Job Title
    async enterJobTitle(jobtitle) {
        await commonActions.waitForVisible(SignUpPageEmea_Locator.PRIMARY_CONTACT_DETAILS_JOB_TITLE,  'Job Title in sign up page');
        await commonActions.setValue(SignUpPageEmea_Locator.PRIMARY_CONTACT_DETAILS_JOB_TITLE, jobtitle, 'Job title in sign up page');
    }
    //Enter Primary Contact Email
    async enterPrimaryContactEmail(email) {
        await commonActions.waitForVisible(SignUpPageEmea_Locator.PRIMARY_CONTACT_DETAILS_EMAIL,  'Email field in sign up page');
        await commonActions.setValue(SignUpPageEmea_Locator.PRIMARY_CONTACT_DETAILS_EMAIL, email, 'Email field in sign up page');
    }
     //Enter Primary Contact Phone Number
     async enterPrimaryContactPhoneNumber(phoneNumber) {
        await commonActions.waitForVisible(SignUpPageEmea_Locator.PRIMARY_CONTACT_DETAILS_PHONE,  'Phone Number in sign up page');
        await commonActions.setValue(SignUpPageEmea_Locator.PRIMARY_CONTACT_DETAILS_PHONE, phoneNumber, 'Phone Number in sign up page');
    }
    async clickOnOrderConfirmationCheckBox() {
        await commonActions.safeJavaScriptClick(SignUpPageEmea_Locator.ORDER_CONFIRMATION_CHECKBOX, 'Order Confirmation Check Box');
    }
    async clickOnPricingContactCheckBox() {
        await commonActions.safeJavaScriptClick(SignUpPageEmea_Locator.PRICING_CONTACT_CHECKBOX, 'Pricing Contact Check Box');
    }
    async clickOnSafetyDataSheetCheckBox() {
        await commonActions.safeJavaScriptClick(SignUpPageEmea_Locator.SAFETY_DATA_SHEET_CHECKBOX, 'Safety Data Sheet Check Box');
    }
    async clickOnProductSpecificationsCheckBox() {
        await commonActions.safeJavaScriptClick(SignUpPageEmea_Locator.PRODUCT_SPECIFICATIONS_CHECKBOX, 'Product Specifications Check Box');
    }
    async clickOnTechnicalCheckBox() {
        await commonActions.safeJavaScriptClick(SignUpPageEmea_Locator.TECHNICAL_CHECKBOX, 'Technical Check Box');
    }
    async clickOnQualityCheckBox() {
        await commonActions.safeJavaScriptClick(SignUpPageEmea_Locator.QUALITY_CHECKBOX, 'Quality Check Box');
    }
    async clickOnDeliveryNotesCheckBox() {
        await commonActions.safeJavaScriptClick(SignUpPageEmea_Locator.DELIVERY_NOTES_CHECKBOX, 'Accounts Payable Check Box');
    }
    async clickOnAccountsPayableCheckBox() {
        await commonActions.safeJavaScriptClick(SignUpPageEmea_Locator.ACCOUNT_PAYABLE_CHECKBOX, 'Accounts Payable Check Box');
    }
    async enterAccountContactDetails(firstName,lastName,jobtitle,email,phoneNumber){
        await this.enterFirstName(firstName);
        await this.enterLastName(lastName);
        await this.enterJobTitle(jobtitle);
        await this.enterPrimaryContactEmail(email);
        await this.enterPrimaryContactPhoneNumber(phoneNumber);
    }
    //Continue button
    async clickOnAccountContactDetailsContinueButton() {
        await commonActions.waitForVisible(SignUpPageEmea_Locator.ACCOUNT_CONTACT_DETAILS_CONTINUE_BUTTON,  'Continue button in sign up page');
        await commonActions.safeJavaScriptClick(SignUpPageEmea_Locator.ACCOUNT_CONTACT_DETAILS_CONTINUE_BUTTON,  'Continue button in sign up page');
        await commonActions.domStatus();
    }
    /* Page 4 Delivery Point
    Enter Ship to Company Name  */
    async enterShipToCompanyName(companyName) {
        await commonActions.waitForVisible(SignUpPageEmea_Locator.DELIVERY_POINT_SHIPTOCOMPANYNAME,  'Ship to Company name in sign up page');
        await commonActions.setValue(SignUpPageEmea_Locator.DELIVERY_POINT_SHIPTOCOMPANYNAME, companyName, 'Ship to Company name in sign up page');
    }
     //enter City
     async enterDeliveryPointCity(city) {
        await commonActions.setValue(SignUpPageEmea_Locator.DELIVERY_POINT_CITY, city, 'City in Sign up page');
    }
     //enter Address
     async enterDeliveryPointAddress(address) {
        await commonActions.setValue(SignUpPageEmea_Locator.DELIVERY_POINT_ADDRESS, address, 'Address in Sign up page');
    }
    //enter ZipCode
    async enterDeliveryPointZipCode(zipCode) {
        await commonActions.setValue(SignUpPageEmea_Locator.DELIVERY_POINT_ZIPCODE, zipCode, 'ZipCode in Sign up page');
    }
    async enterDeliveryPointDetails(companyName,city,zipCode,address,loadcapacity){
        await this.enterShipToCompanyName(companyName);
        await this.enterDeliveryPointAddress(address);
        await this.enterDeliveryPointCity(city);
        await this.enterDeliveryPointZipCode(zipCode);
        await this.selectForkliftradioButton();
        await this.articulatedVehicles();
        await this.enterDeliveryPointloadcapacity(loadcapacity);
    }
    async selectForkliftradioButton(){
        await commonActions.safeJavaScriptClick(SignUpPageEmea_Locator.DELIVERY_POINT_FORKLIFT_YES_RADIO_BTN, 'Forklift option YES Available radion button in sign up page');
    }
    async enterDeliveryPointloadcapacity(){
        await commonActions.setValue(SignUpPageEmea_Locator.DELIVERY_POINT_LOAD_CAPACITY, 'Load capacity if forklift is available in sign up page');
    }
    async articulatedVehicles(){
        await commonActions.safeJavaScriptClick(SignUpPageEmea_Locator.ARTICULATED_VEHICLES_YES_RADIO_BTN, 'Articulated Vehicles Radio Yes button');
    }
    //Continue button
    async clickOnDeliveryPointsContinueButton() {
        await commonActions.waitForVisible(SignUpPageEmea_Locator.DELIVERY_POINT_CONTINUE_BUTTON, 'Continue button in sign up page');
        await commonActions.safeJavaScriptClick(SignUpPageEmea_Locator.DELIVERY_POINT_CONTINUE_BUTTON, 'Continue button in sign up page');
        await commonActions.domStatus();
    }
    /* Page 5 Delivery Point Contact Details
    */
    async clickOnSafetyDataSheetsCheckBox() {
       // await commonActions.waitForVisible(SignUpPageEmea_Locator.DELIVERY_SAFE_DATA_SHEETS_CHECKBOX, 'Safety Data Sheets Check Box');
        await commonActions.safeJavaScriptClick(SignUpPageEmea_Locator.DELIVERY_SAFE_DATA_SHEETS_CHECKBOX, 'Order Confirmation Check Box');
    }
    async clickOnPsTechnicalDataSheetsCheckBox() {
        await commonActions.safeJavaScriptClick(SignUpPageEmea_Locator.PS_TECHNICAL_DATA_SHEETS_CHECKBOX, 'Product Specifications & Technical Data Sheets Check Box');
    }
    async clickOnQualityDepartmentCheckBox() {
        await commonActions.safeJavaScriptClick(SignUpPageEmea_Locator.QUALITY_DEPARTMENT_CHECKBOX, 'Accounts Payable Check Box');
    }
    //Continue button
    async clickOnDpContactDetailsContinueButton() {
        await commonActions.waitForVisible(SignUpPageEmea_Locator.DP_CONTACT_DETAILS_CONTINUE_BUTTON,  'Continue button in sign up page');
        await commonActions.safeJavaScriptClick(SignUpPageEmea_Locator.DP_CONTACT_DETAILS_CONTINUE_BUTTON,  'Continue button in sign up page');
        await commonActions.domStatus();
    }
    /* Page 6 Customer Declaration */
    //Enter First Name
    async enterCustomerDeclarationFirstName(firstName) {
        await commonActions.domStatus();
        await commonActions.waitForVisible(SignUpPageEmea_Locator.CUSTOMER_DECLARATION_FIRSTNAME,  'First name in sign up page');
        await commonActions.setValue(SignUpPageEmea_Locator.CUSTOMER_DECLARATION_FIRSTNAME, firstName, '\'First name in sign up page\'')
    }
    //Enter Last Name
     async enterCustomerDeclarationLastName(lastName) {
        await commonActions.waitForVisible(SignUpPageEmea_Locator.CUSTOMER_DECLARATION_LASTNAME,  'Last name in sign up page');
        await commonActions.setValue(SignUpPageEmea_Locator.CUSTOMER_DECLARATION_LASTNAME, lastName, 'Last name in sign up page');
    }
    //Enter Job Title
    async enterCustomerDeclarationJobTitle(jobtitle) {
        await commonActions.waitForVisible(SignUpPageEmea_Locator.CUSTOMER_DECLARATION_JOB_TITLE,  'Job Title in sign up page');
        await commonActions.setValue(SignUpPageEmea_Locator.CUSTOMER_DECLARATION_JOB_TITLE, jobtitle, 'Job title in sign up page');
    }
    //Enter Phone Number
     async enterCustomerDeclarationPhoneNumber(phoneNumber) {
        await commonActions.waitForVisible(SignUpPageEmea_Locator.CUSTOMER_DECLARATION_PHONE,  'Phone Number in sign up page');
        await commonActions.setValue(SignUpPageEmea_Locator.CUSTOMER_DECLARATION_PHONE, phoneNumber, 'Phone Number in sign up page');
    }
    //Enter Email
    async enterCustomerDeclarationEmail(email) {
        await commonActions.waitForVisible(SignUpPageEmea_Locator.CUSTOMER_DECLARATION_EMAIL,  'Email field in sign up page');
        await commonActions.setValue(SignUpPageEmea_Locator.CUSTOMER_DECLARATION_EMAIL, email, 'Email field in sign up page');
    }
    //Enter Signature
    async enterCustomerDeclarationSignature(signature) {
        await commonActions.waitForVisible(SignUpPageEmea_Locator.CUSTOMER_DECLARATION_SIGNATURE,  'Signature field in sign up page');
        await commonActions.setValue(SignUpPageEmea_Locator.CUSTOMER_DECLARATION_SIGNATURE, signature, 'Signature field in sign up page');
    }

    async enterCustomerDeclarationDetails(firstName,lastName,jobtitle,phoneNumber,email,signature){
        await this.enterCustomerDeclarationFirstName(firstName);
        await this.enterCustomerDeclarationLastName(lastName);
        await this.enterCustomerDeclarationJobTitle(jobtitle);
        await this.enterCustomerDeclarationEmail(email);
        await this.enterCustomerDeclarationPhoneNumber(phoneNumber);
        await this.enterCustomerDeclarationSignature(signature);
    }

    async verifyCustomerDeclarationDatesIsDisplayed() {
        await commonActions.waitForVisible(SignUpPageEmea_Locator.CUSTOMER_DECLARATION_DATE,  'Signature field in sign up page');
    }
    async clickOnTermsAndConditionsCheckBox() {
        await commonActions.safeJavaScriptClick(SignUpPageEmea_Locator.CUSTOMER_DECLARATION_AGREE_CHECKBOX, 'Clicked on T&C box');
    }
    async clickOnPrivacyPolicyCheckBox() {
        await commonActions.safeJavaScriptClick(SignUpPageEmea_Locator.CUSTOMER_DECLARATION_READ_CHECKBOX, 'Clicked on Privacy Policy box');
    }
    //Submit button
    async clickOnSubmitButton() {
        await commonActions.waitForVisible(SignUpPageEmea_Locator.CUSTOMER_DECLARATION_SUBMIT_BUTTON,  'Submit button in sign up page');
        await commonActions.safeJavaScriptClick(SignUpPageEmea_Locator.CUSTOMER_DECLARATION_SUBMIT_BUTTON,  'Submit button in sign up page');
        await commonActions.domStatus();
    }
}
module.exports = new SignUpPageEmea();
