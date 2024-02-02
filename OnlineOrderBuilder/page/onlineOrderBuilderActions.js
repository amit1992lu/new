const onlineOrderLocators = require('../page/onlineOrderBuilderLocators.js')
const commonActions = require('../../Utilities/CommonActions.js');
const url = require('../onlineOrderBuilderUrl.js');
let regionSelector;
let regionTestData;

class onlineOrderBuilder {
    async clickRegion() {
        const region = process.env.REGION;
        switch(region) {
            case 'US':
                regionSelector = onlineOrderLocators.usRegion;
                break;
            case 'CA_EN':
                regionSelector = onlineOrderLocators.caEnRegion;
                break;
            case 'CA_FR':
                regionSelector = onlineOrderLocators.caFrRegion;
                break;
            case 'UK':
                regionSelector = onlineOrderLocators.ukRegion;
                break;
            case 'IE':
                regionSelector = onlineOrderLocators.ieRegion;
                break;
            case 'DK':
                regionSelector = onlineOrderLocators.dkRegion;
                break;
            case 'SW':
                regionSelector = onlineOrderLocators.swRegion;
                break;
            case 'NO':
                regionSelector = onlineOrderLocators.noRegion;
                break;
            case 'FI':
                regionSelector = onlineOrderLocators.fiRegion;
                break;
            case 'FR':
                regionSelector = onlineOrderLocators.frRegion;
                break;
            case 'BE_FR':
                regionSelector = onlineOrderLocators.beFrRegion;
                break;
            case 'BE_NL':
                regionSelector = onlineOrderLocators.beNlRegion;
                break;
            case 'SP':
                regionSelector = onlineOrderLocators.spRegion;
                break;
            case 'IT':
                regionSelector = onlineOrderLocators.itRegion;
                break;
            case 'MX':
                regionSelector = onlineOrderLocators.mxRegion;
                break;
            case 'NL_BE':
                regionSelector = onlineOrderLocators.nl30Region;
                break;
            case 'NL':
                regionSelector = onlineOrderLocators.nl10Region;
                break;
            default:
                console.log('ERROR: Please enter a correct Region to start running a test');
                process.exit();
        }
        return regionSelector;
    }

    async open() {
        const urlTarget = await url.url(process.env.ENV);
        await browser.url(urlTarget);
        await browser.setWindowSize(1920, 1080);
    }

    async selectRegion() {
        await commonActions.waitForClickable(onlineOrderLocators.regionSelector, 'Region Selector');
        await commonActions.safeClick(onlineOrderLocators.regionSelector, 'Region Selector');
        await commonActions.waitForVisible(onlineOrderLocators.regionSelectorFlyout, 'Region Selector')
        await commonActions.safeClick(await this.clickRegion(), 'Select Region');
        await commonActions.elementIsNotDisplayed(onlineOrderLocators.regionSelectorFlyout)
    }

    async enterEmailAddress(email) {
        const emailField = await $(onlineOrderLocators.emailField);
        await emailField.setValue(email);
        await commonActions.waitForClickable(onlineOrderLocators.nextBtn, 'Next Button');
        await commonActions.safeClick(onlineOrderLocators.nextBtn, 'Next Button');
    }

    async selectShipTo(shipTo) {
        await commonActions.waitForClickable(onlineOrderLocators.selectedShipTo, 'Ship To');
        await commonActions.safeClick(onlineOrderLocators.selectedShipTo, 'Ship To');
        const newShipTo = await commonActions.dynamicLocator(onlineOrderLocators.createShipTo, shipTo);
        await commonActions.safeClick(newShipTo, 'Ship to');
    }

    async selectProductByIndex(index) {
        await commonActions.waitForVisible(onlineOrderLocators.createOrderLink, 'Product(s) Radio');
        const productList = await commonActions.findListOfElements(onlineOrderLocators.productRadio);
        await commonActions.safeClick(productList[index], 'Click product');
    }

    async createCartLink() {
        await commonActions.waitForClickable(onlineOrderLocators.createOrderLink, 'Create Cart Link');
        await commonActions.safeClick(onlineOrderLocators.createOrderLink, 'Create Cart Link');
    }

    async verifyCartLink() {
        await commonActions.waitForClickable(onlineOrderLocators.cartLink, 'Cart Link');
        let cartUrl = await commonActions.getAttribute(onlineOrderLocators.cartLink, 'href', 'Cart Link');
        if(process.env.ENV === 'PROD') {
            await commonActions.safeAsserts('notContain', cartUrl, 'cart link', 'shop-')
        } else if(process.env.ENV === 'QA') {
            await commonActions.safeAsserts('contains', cartUrl, 'cart link', 'shop-qa')
        } else {
            await commonActions.safeAsserts('contains', cartUrl, 'cart link', 'shop-dev4')
        }
    }

    async clickCartLink() {
        if(process.env.ENV === 'PROD') {
            await commonActions.waitForClickable(onlineOrderLocators.cartLink, 'Cart Link');
            await commonActions.safeClick(onlineOrderLocators.cartLink, 'Cart Link');
        } else {
            await commonActions.waitForClickable(onlineOrderLocators.cartLink, 'Cart Link');
            let cartUrl = await commonActions.getAttribute(onlineOrderLocators.cartLink, 'href', 'Cart Link');
            const splitCartUrl = cartUrl.split('//');
            let NewUrl = (splitCartUrl[0] + '//' +  process.env.QUSERNAME + ':' + process.env.QPASSWORD + '@' + splitCartUrl[1]);
            await browser.url(NewUrl);

        }
    }

    async enterFirstName(firstName) {
        const firstNameField = await $(onlineOrderLocators.firstName);
        await firstNameField.setValue(firstName);
        await commonActions.waitForVisible(onlineOrderLocators.firstName,  'First name');
        await commonActions.setValue(onlineOrderLocators.firstName, firstName, 'First name')
    }

     async enterLastName(lastName) {
        const lastNameField = await $(onlineOrderLocators.lastName);
        await lastNameField.setValue(lastName);
        await commonActions.waitForVisible(onlineOrderLocators.lastName,  'Last name');
        await commonActions.setValue(onlineOrderLocators.lastName, lastName, 'Last name');
    }

    async enterSoldTo(soldTo) {
        const soldToField = await $(onlineOrderLocators.soldTo);
        await soldToField.setValue(soldTo);
        await commonActions.waitForVisible(onlineOrderLocators.soldTo,  'SoldTo');
        await commonActions.setValue(onlineOrderLocators.soldTo, soldTo, 'SoldTo')
    }

    async verifyErrorMsg() {
        await commonActions.waitForClickable(onlineOrderLocators.closeBtn,  'Error Message pop up is displayed');
        await commonActions.safeJavaScriptClick(onlineOrderLocators.closeBtn,  'Error Message pop up is displayed');
    }

    async enterContactDetails(firstName,lastName,soldTo){
        await this.enterFirstName(firstName);
        await this.enterLastName(lastName);
        await this.enterSoldTo(soldTo);
        await commonActions.waitForClickable(onlineOrderLocators.nextBtn, 'Next Button');
        await commonActions.safeClick(onlineOrderLocators.nextBtn, 'Next Button');
    }

}

module.exports = new onlineOrderBuilder()
