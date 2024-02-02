let commonActions = require('../../../Utilities/CommonActions.js');
let shippingPage_Loc = require('../../Locator/Locator_Common/ShippingCheckoutPage_Locator.js');
let getLanguageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile');
let getLanguage = getLanguageFile.getLanguageFile();

class ShippingCheckoutPage {
    async verifyShippingPage() {
        await commonActions.waitForVisible(shippingPage_Loc.SHIPPING_PAGE_STATUS_BAR_ACTIVE, 'Shipping Page Status Progress bar is active');
        let shippingStatus = await commonActions.safeGetText(shippingPage_Loc.SHIPPING_PAGE_STATUS_BAR_ACTIVE, 'Shipping Page Status Progress bar is active');
        await expect(shippingStatus, 'Shipping progress indicator').to.be.equal(getLanguage.headers.checkoutShipping);
        let shippingAddressTitle = await commonActions.safeIsVisible(shippingPage_Loc.SHIPPING_ADDRESS_TITLE, 'Shipping Page Header');
        await expect(shippingAddressTitle, 'Shipping Page Header is not visible').to.be.true;
        await commonActions.waitForVisible(shippingPage_Loc.ORDER_SUMMARY_TITLE,  'Order Summary header');
        let orderSummaryHeader = await commonActions.safeIsVisible(shippingPage_Loc.ORDER_SUMMARY_TITLE, 'Order Summary Header');
        await expect(orderSummaryHeader, 'Order Summary Header is not visible').to.be.true;
        await commonActions.waitForVisible(shippingPage_Loc.BACK_TO_CART_ON_HEADER, 'Back To Cart On Header');
        let univarLogo = await commonActions.safeIsVisible(shippingPage_Loc.UNIVAR_SOLUTIONS_LOGO_ON_HEADER, 'Univar Solutions Logo On Header');
        await commonActions.safeAsserts('true', univarLogo, 'Univar Logo On Header');


    }

    async selectDateFromCalender(noOfDays) {
        await commonActions.waitForClickable(shippingPage_Loc.DATE_PICKER,  'Calender');
        await commonActions.safeVisibleClick(shippingPage_Loc.DATE_PICKER,  'Calender');
        await commonActions.browserKeys('Enter', 'Enter key');
       return await commonActions.getAttribute(shippingPage_Loc.DATE_PICKER, 'value', 'Date picker');
    }

    async clickOnNextPaymentButton() {
        await commonActions.scrollTo(shippingPage_Loc.NEXT_PAYMENT_BUTTON,  'Next: Payment Button');
        await commonActions.safeVisibleClick(shippingPage_Loc.NEXT_PAYMENT_BUTTON,  'Next: Payment Button');
    }

    async getShippingAddress() {
        let shippingAddress = await commonActions.safeGetText(shippingPage_Loc.ACTUAL_SHIPPING_ADDRESS,  'Actual Shipping Address of the Customer');
        return shippingAddress;
    }

    async selectAddressType(addressType) {
        let addressType_loc = (shippingPage_Loc.ADDRESS_TYPE).replace('%s', addressType);
        await commonActions.safeJavaScriptClick(addressType_loc, 'Address Type Radio Button');
    }

    async enterFirstName(firstName) {
        await commonActions.setValue(shippingPage_Loc.FIRST_NAME, firstName, 'First Name');
    }

    async enterLastName(lastName) {
        await commonActions.setValue(shippingPage_Loc.FIRST_NAME, lastName, 'First Name');
    }

    async enterAddress(address) {
        await commonActions.setValue(shippingPage_Loc.ADDRESS_FIELD, address, 'Address');
    }

    async enterCity(city) {
        await commonActions.setValue(shippingPage_Loc.CITY_FIELD, city, 'City Name');
    }

    async enterZipCode(zipCode) {
        await commonActions.setValue(shippingPage_Loc.ZIP_CODE, zipCode, 'Zip Code')
    }

    async selectStateFromDropDown(stateName) {
        await commonActions.selectByValue(shippingPage_Loc.STATE_DROPDOWN, 'data-title', stateName)
    }

    async selectCountryFromDropDown(countryName) {
        let countryLength = await (await commonActions.findElements((shippingPage_Loc.COUNTRY_DROPDOWN) + '/option[not (@disabled)]')).length;
        await commonActions.safeAsserts('equal', countryLength, 'Country List', 1);
        await commonActions.selectByValue(shippingPage_Loc.COUNTRY_DROPDOWN, countryName, 'Country Name on Shipping Address Page');
    }

    async enterPhoneNumber(phoneNumber) {
        await commonActions.setValue(shippingPage_Loc.PHONE_NUMBER, phoneNumber, 'Phone Number');
    }

    async NavigatedToShippingpage()
    {
        await commonActions.waitForVisible(shippingPage_Loc.SHIPPING_PAGE_STATUS_BAR_ACTIVE, 'Shipping Page Status Progress bar is active');
        let shippingStatus = await commonActions.safeGetText(shippingPage_Loc.SHIPPING_PAGE_STATUS_BAR_ACTIVE, 'Shipping Page Status Progress bar is active');
        await expect(shippingStatus, 'Shipping progress indicator').to.be.equal(getLanguage.headers.checkoutShipping);
        let shippingAddressTitle = await commonActions.safeIsVisible(shippingPage_Loc.SHIPPING_ADDRESS_TITLE, 'Shipping Page Header');
        await expect(shippingAddressTitle, 'Shipping Page Header is not visible').to.be.true;
        await commonActions.waitForVisible(shippingPage_Loc.ORDER_SUMMARY_TITLE,  'Order Summary header');
    }

    async enterUserDetails(address, state, city, phoneNumber, zipCode) {
        await this.enterAddress(address);
        await this.enterCity(city);
        let selectedState = this.selectStateFromDropDown(state);
        await this.enterZipCode(zipCode);
        await this.enterPhoneNumber(phoneNumber);
        return selectedState;
    }

    async selectDeliveryInfoRadio(liftGateValue) {
        await commonActions.scrollTo(shippingPage_Loc.DELIVERY_INFORMATION_CONTAINER, 'Lift Gate Container');
        if(liftGateValue === 'No') {
            let liftGateRadio = shippingPage_Loc.LIFT_GATE_CHECKBOX;
            await commonActions.safeJavaScriptClick(liftGateRadio, 'Lift Gate Radio');
        } else {
            await commonActions.waitForVisible(shippingPage_Loc.LIFT_GATE_CHECKBOX, 'Lift Gate Radio')
        }
    }

    async verifyDisclaimerMessage(productUsageDisclaimer) {
        let productUsageText = await commonActions.safeGetText(shippingPage_Loc.PRODUCT_USAGE_TEXT,  'Product Usage Disclaimer Text');
        await commonActions.safeAsserts('equal', productUsageText, 'Product Usage Text', getLanguage.checkoutPage.productUsage);
    }

    async clickProductUsageCheckBox() {
        await commonActions.safeJavaScriptClick(shippingPage_Loc.PRODUCT_USAGE_CHECKBOX, 'Product Usage text Box');
    }

    async verifyShippingAddress() {
        await commonActions.waitForVisible(shippingPage_Loc.VERIFY_SHIPPING_ADDRESS_MODEL,  'Verify Shipping Address Model');
        await commonActions.scrollTo(shippingPage_Loc.USER_THIS_ADDRESS_BTN,  'Use this address button');
        await commonActions.waitForClickable(shippingPage_Loc.USER_THIS_ADDRESS_BTN,  'Use this address button');
        await commonActions.safeVisibleClick(shippingPage_Loc.USER_THIS_ADDRESS_BTN,  'Use this address button');
        await commonActions.elementIsNotDisplayed(shippingPage_Loc.USER_THIS_ADDRESS_BTN);
    }

    async clickShippingPageActions(shippingLinkElement, shippingFriendlyText) {
        await commonActions.waitForVisible(shippingLinkElement, shippingFriendlyText);
        await commonActions.safeIsClickable(shippingLinkElement, shippingFriendlyText);
        await commonActions.safeVisibleClick(shippingLinkElement, shippingFriendlyText);
    }

    async fillOneTimeShippingAddressForum(shipElement, shipValue, shipFriendlyText) {
        await commonActions.scrollTo(shippingPage_Loc.ONE_TIME_SHIPPING_SUBMIT, 'Submit One Time Shipping Address');
        await commonActions.waitForClickable(shippingPage_Loc.ONE_TIME_SHIPPING_SUBMIT, 'Submit One Time Shipping Address');
        await commonActions.waitForVisible(shippingPage_Loc.ONE_TIME_SHIPPING_ADDRESS_FORUM, 'One Time Shipping Forum');
        await commonActions.setValue(shipElement, shipValue, shipFriendlyText);
    }

    async submitOneTimeShippingAddressForum() {
        await commonActions.scrollTo(shippingPage_Loc.ONE_TIME_SHIPPING_SUBMIT, 'Submit One Time Shipping Address');
        await commonActions.waitForClickable(shippingPage_Loc.ONE_TIME_SHIPPING_SUBMIT, 'Submit One Time Shipping Address');
        await commonActions.safeClick(shippingPage_Loc.ONE_TIME_SHIPPING_SUBMIT, 'Submit One Time Shipping Address');
    }

    async verifyOneTimeShipAddressModelAction(elementToClick, friendlyText) {
        await commonActions.waitForVisible(shippingPage_Loc.SMARTY_STREET_VALIDATION_MODEL, 'One Time Shipping Validation');
        await commonActions.scrollTo(elementToClick, friendlyText);
        await commonActions.waitForClickable(elementToClick, friendlyText);
        await commonActions.safeClick(elementToClick, friendlyText);
    }

    async verifyOneTimeShipError(elementTarget, friendlyText) {
        await commonActions.waitForVisible(shippingPage_Loc.ONE_SHIP_ADDRESS_ERROR, 'Error fields is visible');
        let getErrorMsg = await commonActions.safeGetText(elementTarget, friendlyText);
        await commonActions.safeAsserts('equals', getErrorMsg, friendlyText, 'This is a required field.')
    }

    async verifyEstimatedCostIsNonZero(index) {
        await commonActions.waitForVisible(shippingPage_Loc.ESTIMATED_COST, 'Estimated Cost');
        const estimatedCostElementList = await commonActions.findListOfElements(shippingPage_Loc.ESTIMATED_COST)
        let shippingCost = await commonActions.safeGetText(estimatedCostElementList[index], 'Estimated Cost');
        while(shippingCost.includes('--')) {
            await commonActions.elementIsNotDisplayed(shippingPage_Loc.LOADING_MASK, 'Loading Mask');
            shippingCost = await commonActions.safeGetText(estimatedCostElementList[index], 'Estimated Cost');
        }
        await expect(shippingCost).to.not.contain('$0.00');
    }

    async fillOutShippingPONumber(poNumber) {
        await commonActions.setValue(shippingPage_Loc.SHIPPING_PO_NUMBER, poNumber, 'PO Number');
    }

    async verifyUploadPODoc() {
        await commonActions.scrollTo(shippingPage_Loc.UPLOAD_PO_DOC, 'Upload PO Document');
        await commonActions.waitForVisible(shippingPage_Loc.UPLOAD_PO_DOC, 'Upload PO Document');
        await commonActions.waitForVisible(shippingPage_Loc.UPLOAD_PO_TOOLTIP, 'Upload PO Document');
        await commonActions.safeClick(shippingPage_Loc.UPLOAD_PO_TOOLTIP, 'Upload PO Document');
        await commonActions.waitForVisible(shippingPage_Loc.UPLOAD_PO_CONTENT, 'Upload PO Document');
    }

    async selectMultipleDeliveries() {
        await commonActions.scrollTo(shippingPage_Loc.DELIVERY_SCHEDULE_CONTAINER,'Delivery Schedule');
        await commonActions.waitForVisible(shippingPage_Loc.DELIVERY_SCHEDULE_CONTAINER,'Delivery Schedule');
        await commonActions.safeClick(shippingPage_Loc.MULTIPLE_DELIVERY_YES, 'Multiple Delivery selected')
    }

    async selectDeliveryDate() {
        const listOfDates = await commonActions.findListOfElements(shippingPage_Loc.MULTIPLE_DELIVERY_DATE);
        for(const dates of listOfDates) {
            const isDisplayed = await commonActions.safeIsVisible(dates, 'Date field');
            if(isDisplayed) {
                await commonActions.waitForClickable(dates, 'Calender');
                await commonActions.safeVisibleClick(dates, 'Calender');
                await commonActions.browserKeys('Enter', 'Enter key');
            }
        }
    }

    async enterPONumber(poNum) {
        const listOfPONumber = await commonActions.findListOfElements(shippingPage_Loc.MULTIPLE_PO_NUMBER);
        for(const poField of listOfPONumber) {
            const isDisplayed = await commonActions.safeIsVisible(poField, 'Date field');
            if(isDisplayed) {
                await commonActions.setValue(poField, poNum, 'PO Number');
            }
        }
    }

    async enterProductQty(qty) {
        const listOfQtyFields = await commonActions.findListOfElements(shippingPage_Loc.MULTIPLE_PRODUCT_QTY);
        for(const qtyField of listOfQtyFields) {
            const isDisplayed = await commonActions.safeIsVisible(qtyField, 'Qty Field');
            if(isDisplayed) {
                await commonActions.setValue(qtyField, qty, 'PO Number');
            }
        }
    }

    async selectAnotherDelivery() {
        await commonActions.waitForVisible(shippingPage_Loc.SELECT_ANOTHER_DELIVERY, 'Select Another Delivery');
        await commonActions.safeClick(shippingPage_Loc.SELECT_ANOTHER_DELIVERY, 'Select Another Delivery');
        await commonActions.elementIsNotDisplayed(shippingPage_Loc.LOADING_MASK, 'Loading Mask');
    }

    async duplicateModelAction(action) {
        await commonActions.waitForVisible(shippingPage_Loc.MULTIPLE_DUPLICATE_MODEL, 'Duplicate Found Model');
        if(action === 'yes') {
            await commonActions.waitForClickable(shippingPage_Loc.DUPLICATE_CORRECT_BTN, 'Correct Button');
            await commonActions.safeClick(shippingPage_Loc.DUPLICATE_CORRECT_BTN, 'Correct Button');
            await commonActions.elementIsNotDisplayed(shippingPage_Loc.MULTIPLE_DUPLICATE_MODEL, 'Duplicate Found Model')
        } else {
            await commonActions.waitForClickable(shippingPage_Loc.DUPLICATE_FIX_THIS_BTN, 'Correct Button');
            await commonActions.safeClick(shippingPage_Loc.DUPLICATE_FIX_THIS_BTN, 'Correct Button');
            await commonActions.elementIsNotDisplayed(shippingPage_Loc.MULTIPLE_DUPLICATE_MODEL, 'Duplicate Found Model')
        }
    }
}

module.exports = new ShippingCheckoutPage();
