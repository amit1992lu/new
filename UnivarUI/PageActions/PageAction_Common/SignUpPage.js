let commonActions = require('../../../Utilities/CommonActions.js');
let homePageLoc = require('../../Locator/Locator_Common/HomePage_Locator.js');
let signUpPage_loc = require('../../Locator/Locator_Common/SignUpPage_Locator.js');
let accountSubmittedPage = require('.//AccountSubmittedPage.js')

class SignUpPage {

    //Verify Sign up page
    async verifySignupPage() {
        let currentUrl = await commonActions.getUrl();
        await commonActions.safeAsserts('contains', currentUrl, `${currentUrl} doesn't contains create`, 'create');
        let createAccountText = await commonActions.safeIsVisible(signUpPage_loc.CREATE_ACCOUNT_TEXT, 'Create account text in Sign up page')
        await commonActions.safeAsserts('true', createAccountText, 'Create account text is not visible in sign up page');
    }

    //Click On My company has purchased from Univar Solutions before radio button
    async clickOnCmpnyPurchasedBefore() {
        await commonActions.waitForClickable(signUpPage_loc.EXISTING_ACCOUNT_RADIOBTN,  'My company has purchased from Univar Solutions before radio button');
        await commonActions.safeVisibleClick(signUpPage_loc.EXISTING_ACCOUNT_RADIOBTN,  'My company has purchased from Univar Solutions before radio button');
    }

    //Enter First Name
    async enterFirstName(firstName) {
        await commonActions.domStatus();
        await commonActions.waitForVisible(signUpPage_loc.FIRSTNAME_FIELD,  'First name in sign up page');
        await commonActions.setValue(signUpPage_loc.FIRSTNAME_FIELD, firstName, '\'First name in sign up page\'')
    }

    //Enter First Name
    async enterLastName(lastName) {
        await commonActions.waitForVisible(signUpPage_loc.LASTNAME_FIELD,  'Last name in sign up page');
        await commonActions.setValue(signUpPage_loc.LASTNAME_FIELD, lastName, 'Last name in sign up page');
    }

    //Enter First Name
    async enterEmail(email) {
        await commonActions.waitForVisible(signUpPage_loc.EMAILADDRESS_FIELD,  'Email field in sign up page');
        await commonActions.setValue(signUpPage_loc.EMAILADDRESS_FIELD, email, 'Email field in sign up page');
    }

    //Enter First Name
    async enterCompanyName(companyName) {
        await commonActions.waitForVisible(signUpPage_loc.COMPANY_FIELD,  'Company name in sign up page');
        await commonActions.setValue(signUpPage_loc.COMPANY_FIELD, companyName, 'Company name in sign up page');
    }

    //Enter First Name
    async enterPhoneNumber(phoneNumber) {
        await commonActions.waitForVisible(signUpPage_loc.PHONE_NUMBER_FIELD,  'Phone Number in sign up page');
        await commonActions.setValue(signUpPage_loc.PHONE_NUMBER_FIELD, phoneNumber, 'Phone Number in sign up page');
    }

    async enterUserDetails(firstName, lastName, phoneNum, companyName, email) {
        await this.enterFirstName(firstName);
        await this.enterLastName(lastName);
        await this.enterEmail(email);
        await this.enterCompanyName(companyName)
        let phone = phoneNum.slice(0, 3) + '-' + phoneNum.slice(3, 6) + '-' + phoneNum.slice(6)
        await this.enterPhoneNumber(phone)
    }

    //Click on Provide Shipping address radio btn
    async clickOnProvideShippingAddressRadioButton() {
        await commonActions.waitForClickable(signUpPage_loc.PROVIDE_SHIPPINGADDRESS_RADIOBTN,  'Provide Account Number Radio Button');
        await commonActions.safeVisibleClick(signUpPage_loc.PROVIDE_SHIPPINGADDRESS_RADIOBTN,  'Provide Account Number Radio Button');
    }

    //Enter Company Address
    async enterCompanyAddress(cmpnyAdress) {
        await commonActions.setValue(signUpPage_loc.COMPANY_ADDRESS_FIELD, cmpnyAdress, 'Company Address in Sign up Page')
    }

    //enter Unit, Suite and Building
    async enterBuildingAndUnitNumber(buildAndUnitNumber) {
        await commonActions.setValue(signUpPage_loc.UNIT_FIELD, buildAndUnitNumber, 'Unit, Suite, Building, etc. in Sign up page');
    }

    //enter City
    async enterCity(city) {
        await commonActions.setValue(signUpPage_loc.CITY_FIELD, city, 'City in Sign up page');
    }

    //enter ZipCode
    async enterZipCode(zipCode) {
        await commonActions.setValue(signUpPage_loc.ZIPCODE, zipCode, 'ZipCode in Sign up page');
    }

    //Select Country
    async selectCountry(country) {
        await commonActions.waitForVisible(signUpPage_loc.COUNTRYDROPDOWN,  'Country Drop down in Sign up page');
        await commonActions.selectByText(signUpPage_loc.COUNTRYDROPDOWN, country, 'Country Drop down in Sign up page');
    }

    //Continue button in Sign up page
    async clickOnContinueButton() {
        await commonActions.safeVisibleClick(signUpPage_loc.CONTINUE_BUTTON,  'Continue button in sign up page');
        await commonActions.domStatus();
        return accountSubmittedPage;
    }

    //Cancel Button
    async clickOnCancelButton() {
        await commonActions.safeVisibleClick(signUpPage_loc.CANCEL_BUTTON,  'Cancel Button in Sign up page');
    }

    //Select state using random index
    async selectRandomStateFromDropDown() {
        if(process.env.REGION === 'US' || process.env.REGION === 'CA_EN' || process.env.REGION === 'CA_FR') {
            await commonActions.waitForClickable(signUpPage_loc.STATE_DROPDOWN,  'State drop down in sign up page');
            let stateList = await commonActions.findElements(signUpPage_loc.STATE_DROPDOWN + '/option', 'State dropdown on sign up page');
            let index = await commonActions.randomNumberWithinRange(1, stateList.length);
            await commonActions.selectByIndex(signUpPage_loc.STATE_DROPDOWN, index, 'State drop down in sign up page');
        } else {
            await commonActions.waitForVisible(signUpPage_loc.COMPANY_FIELD,  'State field down in sign up page');
        }

    }

    //Enter Shipping address details
    async enterShippingAddressDetails(cmpnyAddress, buildingNumber, city, zipCode, country) {
        await this.enterCompanyAddress(cmpnyAddress);
        await this.enterBuildingAndUnitNumber(buildingNumber);
        await this.enterCity(city);
        await this.enterZipCode(zipCode);
        await this.selectRandomStateFromDropDown();
        await this.selectCountry(country);
        await this.selectRandomEndMarketFromDropDown();
    }

    //Enter Shipping address details without End market
    async enterShippingAddressDetailsWithOutEndMarket(cmpnyAddress, city, zipCode) {
        await this.enterCompanyAddress(cmpnyAddress);
        //this.enterBuildingAndUnitNumber(buildingNumber);
        await this.enterCity(city);
        await this.enterZipCode(zipCode);
        await this.selectRandomStateFromDropDown();
    }

    //Click On My company has purchased from Univar Solutions never radio button
    async clickOnCmpnyNeverPurchased() {
        await commonActions.waitForClickable(signUpPage_loc.NEWACCOUNT_RADIOBTN,  'My company has never purchased from Univar Solutions before radio button');
        await commonActions.safeVisibleClick(signUpPage_loc.NEWACCOUNT_RADIOBTN,  'My company has never purchased from Univar Solutions before radio button');
        await commonActions.domStatus();
    }

    //Enter Account number in sign up page
    async enterAccountNumber(accountNumber) {
        await commonActions.waitForVisible(signUpPage_loc.ACCOUNT_NUMBER_TEXTBOX,  'Account Number in Sign up page');
        await commonActions.setValue(signUpPage_loc.ACCOUNT_NUMBER_TEXTBOX, accountNumber, 'Account Number in Sign up page');
    }

    //Verify if Cancel button is displayed in sign up page
    async verifyIfCancelButtonIsDisplayed(status) {
        await commonActions.domStatus();
        let cancelButton = await commonActions.safeIsVisible(signUpPage_loc.CANCEL_BUTTON, 'Cancel Button in Sign up page');
        await commonActions.safeAsserts(status, cancelButton, 'Cancel Button in Sign up page is not displayed')
    }

    //Verify if Continue button is displayed in sign up page
    async verifyIfContinueButtonIsDisplayed(status) {
        await commonActions.domStatus();
        let cancelButton = await commonActions.safeIsVisible(signUpPage_loc.CONTINUE_BUTTON, 'Continue Button in Sign up page');
        await commonActions.safeAsserts(status, cancelButton, 'Continue Button in Sign up page is not displayed')
    }

    // Verify First Name error message
    async verifyFirstNameErrorMsg(errorMessage) {
        await commonActions.waitForVisible(signUpPage_loc.FIRSTNAME_FIELD,  'First name in Sign up page');
        let errorMsg = await commonActions.safeGetText(signUpPage_loc.FIRSTNAME_ERROR,  'Error message in First name field');
        await commonActions.safeAsserts('equal', errorMsg, `${errorMsg} is not matched with ${errorMessage}`, errorMessage);
    }

    // Verify Last Name error message
    async verifyLastNameErrorMsg(errorMessage) {
        await commonActions.waitForVisible(signUpPage_loc.LASTNAME_FIELD,  'Last name in Sign up page');
        let errorMsg = await commonActions.safeGetText(signUpPage_loc.LASTNAME_ERROR,  'Error message in Last name field');
        await commonActions.safeAsserts('equal', errorMsg, `${errorMsg} is not matched with ${errorMessage}`, errorMessage);
    }

    // Verify Email error message
    async verifyEmailErrorMsg(errorMessage) {
        await commonActions.waitForVisible(signUpPage_loc.EMAILADDRESS_FIELD,  'Email in Sign up page');
        let errorMsg = await commonActions.safeGetText(signUpPage_loc.EMAIL_ERROR,  'Error message in Email field');
        await commonActions.safeAsserts('equal', errorMsg, `${errorMsg} is not matched with ${errorMessage}`, errorMessage);
    }

    // Verify Company Address error message
    async verifyCompanyErrorMsg(errorMessage) {
        await commonActions.waitForVisible(signUpPage_loc.COMPANY_FIELD,  'Company field in Sign up page');
        let errorMsg = await commonActions.safeGetText(signUpPage_loc.COMPANY_ERROR,  'Error message in Company field');
        await commonActions.safeAsserts('equal', errorMsg, `${errorMsg} is not matched with ${errorMessage}`, errorMessage);
    }

    // Verify City error message
    async verifyCityErrorMsg(errorMessage) {
        await commonActions.waitForVisible(signUpPage_loc.CITY_FIELD,  'City field in Sign up page');
        let errorMsg = await commonActions.safeGetText(signUpPage_loc.CITY_ERROR,  'Error message in City field');
        await commonActions.safeAsserts('equal', errorMsg, `${errorMsg} is not matched with ${errorMessage}`, errorMessage);
    }

    // Verify State error message
    async verifyStateErrorMsg(errorMessage) {
        if(process.env.REGION === 'US' || process.env.REGION === 'CA_EN' || process.env.REGION === 'CA_FR') {
            await commonActions.waitForVisible(signUpPage_loc.STATE_DROPDOWN,  'State/Province in Sign up page');
            let errorMsg = await commonActions.safeGetText(signUpPage_loc.STATE_ERROR,  'Error message in State/Province field');
            await commonActions.safeAsserts('equal', errorMsg, `${errorMsg} is not matched with ${errorMessage}`, errorMessage);
        } else {
            let element = await browser.$(signUpPage_loc.STATE_ERROR);
            await element.waitForDisplayed({reverse: true});
        }

    }

    // Verify ZipCode error message
    async verifyZipCodeErrorMsg(errorMessage) {
        await commonActions.waitForVisible(signUpPage_loc.ZIPCODE,  'ZipCode in Sign up page');
        let errorMsg = await commonActions.safeGetText(signUpPage_loc.ZIPCODE_ERROR,  'Error message in ZipCode field');
        await commonActions.safeAsserts('equal', errorMsg, `${errorMsg} is not matched with ${errorMessage}`, errorMessage);
    }

    // Verify Account error message
    async verifyAccountErrorMsg(errorMessage) {
        await commonActions.waitForVisible(signUpPage_loc.ACCOUNT_NUMBER_TEXTBOX,  'Account text box in Sign up page');
        let errorMsg = await commonActions.safeGetText(signUpPage_loc.ACCOUNT_ERROR,  'Error message in Account text box');
        await commonActions.safeAsserts('equal', errorMsg, `${errorMsg} is not matched with ${errorMessage}`, errorMessage);
    }

    // Verify Phone error message
    async verifyPhoneErrorMsg(errorMessage) {
        await commonActions.waitForVisible(signUpPage_loc.PHONE_NUMBER_FIELD,  'Phone number in Sign up page');
        let errorMsg = await commonActions.safeGetText(signUpPage_loc.PHONE_ERORR,  'Error message in Phone number text box');
        await commonActions.safeAsserts('equal', errorMsg, `${errorMsg} is not matched with ${errorMessage}`, errorMessage);
    }

    // Verify Copmany Address error message
    async verifyCompanyAddressErrorMsg(errorMessage) {
        await commonActions.waitForVisible(signUpPage_loc.COMPANY_ADDRESS_FIELD,  'Company Address in Sign up page');
        let errorMsg = await commonActions.safeGetText(signUpPage_loc.COMPANY_ERROR,  'Error message in Company Address text box');
        await commonActions.safeAsserts('equal', errorMsg, `${errorMsg} is not matched with ${errorMessage}`, errorMessage);
    }

    async selectRandomEndMarketFromDropDown() {
        let marketList = await commonActions.findElements((signUpPage_loc.END_MARKET) + '/option', 'End Market Dropdown')
        let index = await commonActions.randomNumberWithinRange(1, marketList.length);
        await commonActions.selectByIndex(signUpPage_loc.END_MARKET, index, 'End Market Dropdown');
    }

    //Enter Shipping address details
    async enterShippingAddressDetailsWithoutBuildingNum(cmpnyAddress, city, zipCode, country) {
        await this.enterCompanyAddress(cmpnyAddress);
        await this.enterCity(city);
        await this.enterZipCode(zipCode);
        await this.selectRandomStateFromDropDown();
        await this.selectCountry(country);
        await commonActions.selectByIndex(signUpPage_loc.END_MARKET, 1, 'End Market Dropdown');
    }
}

module.exports = new SignUpPage();
