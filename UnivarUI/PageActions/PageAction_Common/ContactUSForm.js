let commonAction = require('../../../Utilities/CommonActions.js');
let contactUsForm_Loc = require('../../Locator/Locator_Common/ContactUSForm_Locator.js');
let languageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile.js').getLanguageFile();

class ContactUSForm {
    async verifyContactUSForm() {
        await commonAction.waitForVisible(contactUsForm_Loc.CONTACT_US_FORM, 'Contact Us form');
        await commonAction.scrollTo(contactUsForm_Loc.CLOSE_MODEL_BTN, 'Close Button');
        await commonAction.waitForClickable(contactUsForm_Loc.CLOSE_MODEL_BTN, 'Close Button');
        let contactUsFormText = await commonAction.safeGetText(contactUsForm_Loc.CONTACT_US_FORM_HEADER_TEXT, 'Contact Us form Header text');
        await commonAction.safeAsserts('contains', contactUsFormText, 'Contact Us Form Header', languageFile.contactUs.contactUsHeaderText);
    }

    async enterFirstName(firstName) {
        await commonAction.safeVisibleClick(contactUsForm_Loc.FIRST_NAME, 'First Name');
        await commonAction.setValue(contactUsForm_Loc.FIRST_NAME, firstName, 'First Name');
    }

    async enterLastName(lastName) {
        await commonAction.setValue(contactUsForm_Loc.LAST_NAME, lastName, 'Last Name');
    }

    async enterEmail(email) {
        await commonAction.setValue(contactUsForm_Loc.EMAIL, email, 'Email');
    }

    async enterPhoneNumber(phoneNumber) {
        await commonAction.setValue(contactUsForm_Loc.PHONE_NUMBER, phoneNumber, 'Phone Number');
    }

    async enterCompanyName(companyName) {
        await commonAction.setValue(contactUsForm_Loc.COMPANY_NAME, companyName, 'Company Name');
    }

    async enterJobTitle(jobTitle) {
        await commonAction.setValue(contactUsForm_Loc.JOB_TITLE, jobTitle, 'Job Title');
    }

    async selectCountry(countryName) {
        await commonAction.selectByText(contactUsForm_Loc.COUNTRY_NAME, countryName, 'Country Name');
    }

    async selectMarket(marketName) {
        await commonAction.selectByIndex(contactUsForm_Loc.MARKET, marketName, 'Market Name');
    }

    async selectNoRadio() {
        await commonAction.safeVisibleClick(contactUsForm_Loc.NO_RADIO, 'No Radio');
    }

    async clickTermsAndConditionsCheckBox() {
        let termsOfUse_loc = await commonAction.dynamicLocator(contactUsForm_Loc.TERMS_AND_CONDITIONS_BOX, languageFile.contactUs.termsOfUseText);
        await commonAction.safeVisibleClick(termsOfUse_loc, 'Terms and conditions checkbox');
    }

    async clickOnSubmitButton() {
        await commonAction.safeIsVisible(contactUsForm_Loc.SUBMIT_BUTTON, 'Submit Button');
        await commonAction.scrollTo(contactUsForm_Loc.SUBMIT_BUTTON, 'Submit Button on Contact Us For');
        await commonAction.waitForClickable(contactUsForm_Loc.SUBMIT_BUTTON, 'Submit Button on Contact Us For');
        await commonAction.scrollTo(contactUsForm_Loc.SUBMIT_BUTTON, 'Submit Button');
        await commonAction.safeClick(contactUsForm_Loc.SUBMIT_BUTTON, 'Submit Button on Contact Us Form');
        await commonAction.elementIsNotDisplayed(contactUsForm_Loc.SUBMIT_BUTTON, 'Submit button');
    }

    async clickTermsofUseCheckBox() {
        await commonAction.waitForClickable(contactUsForm_Loc.TERMS_OF_USE_CHECKBOX, 'Terms of use checkbox');
        await commonAction.safeVisibleClick(contactUsForm_Loc.TERMS_OF_USE_CHECKBOX, 'Terms of use checkbox');
    }

    async clickPrivacyPolicyCheckBox() {
        await commonAction.waitForClickable(contactUsForm_Loc.PRIVACY_POLICY_CHECKBOX, 'Privacy Policy checkbox');
        await commonAction.safeVisibleClick(contactUsForm_Loc.PRIVACY_POLICY_CHECKBOX, 'Privacy Policy checkbox');
    }

    async enterDetailsInContactUsForm(firstName, lastName, email, phoneNumber, companyName, jobTitle, countryName, marketName) {
        await this.enterFirstName(firstName);
        await this.enterLastName(lastName);
        await this.enterEmail(email);
        await this.enterPhoneNumber(phoneNumber);
        await this.enterCompanyName(companyName);
        await this.enterJobTitle(jobTitle);
        await this.selectCountry(countryName);
        await this.selectMarket(marketName);
        await this.selectNoRadio();
        if (EMEA_REGION.includes(process.env.REGION)) {
            await this.clickTermsofUseCheckBox();
            await this.clickPrivacyPolicyCheckBox();
        } else {
            await this.clickTermsAndConditionsCheckBox();
        }
        await this.clickOnSubmitButton()
    }

    async closeContactUsForm() {
        await commonAction.waitForClickable(contactUsForm_Loc.CLOSE_MODEL_BTN, 'Close button');
        await commonAction.safeClick(contactUsForm_Loc.CLOSE_MODEL_BTN, 'Close button');
    }
}

module.exports = new ContactUSForm();
