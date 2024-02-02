let commonActions = require('../../../Utilities/CommonActions.js');
let productCatalog_Loc = require('../../Locator/Locator_Common/ProductCatlogPage_Locator');
let cartPage = require('../PageAction_Common/CartPage.js')
let getLanguageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile');

let getLanguage = getLanguageFile.getLanguageFile();
class ProductCatalog {
    //Verify Product catalog breadcrumb
    async verifyProductCatalogPage_LoggedIn() {
        await commonActions.waitForVisible(productCatalog_Loc.PRODUCT_CATALOG_BREADCRUMB, 'Product Catalog Breadcrumb for Logged in user on Product Landing Page');
        let productCatalogText = await commonActions.safeGetText(productCatalog_Loc.PRODUCT_CATALOG_BREADCRUMB, 'Product Catalog fro logged in user');
        await commonActions.safeAsserts('equal', productCatalogText, 'Product Catalog Breadcrumb Text for logged in user', 'Product Catalog');
        let quotedProductsTab = await commonActions.safeIsVisible(productCatalog_Loc.QUOTED_PRODUCTS_TAB_ACTIVE, 'Quoted Products Tab');
        await commonActions.safeAsserts('true', quotedProductsTab, 'Quoted Products Tab is not visible');
        let allProductsTab = await commonActions.safeIsVisible(productCatalog_Loc.ALL_PRODUCTS_TAB, 'All Products Tab');
        await commonActions.safeAsserts('true', allProductsTab, 'All Products Tab');
        let currentUrl = await commonActions.getUrl()
        await commonActions.safeAsserts('contains', currentUrl, 'Product Catalog URL', 'product-catalog');
    }

    async VerifyProductCatalogPage_Guest() {
        await commonActions.waitForVisible(productCatalog_Loc.PRODUCT_CATALOG_BREADCRUMB, 'Product Catalog Breadcrumb for Guest on Product Landing Page');
    }

    async clickOnAllProductsTab() {
        await commonActions.waitForClickable(productCatalog_Loc.ALL_PRODUCTS_TAB, 'All Products tab');
        await commonActions.safeVisibleClick(productCatalog_Loc.ALL_PRODUCTS_TAB, 'All Products tab');
    }

    async clickOnRFQButton(index) {
        let requestForQuoteButton_Loc;
        if (EMEA_REGION.includes(process.env.REGION)) {
            await commonActions.waitForVisible(productCatalog_Loc.REQUEST_QUOTE_LOGIN_EMEA);
            requestForQuoteButton_Loc = await commonActions.dynamicLocator(productCatalog_Loc.REQUEST_QUOTE_BUTTON_EMEA, index)
        } else {
            await commonActions.waitForVisible(productCatalog_Loc.REQUEST_QUOTE_LOGIN);
            requestForQuoteButton_Loc = await commonActions.dynamicLocator(productCatalog_Loc.REQUEST_QUOTE_BUTTON, index)
        }
        await commonActions.waitForClickable(requestForQuoteButton_Loc, 'Request For Quote Button')
        await commonActions.safeVisibleClick(requestForQuoteButton_Loc, 'Request For Quote Button')
    }

    async verifySuccessToastMessage(successToastMsg) {
        await commonActions.waitForVisible(productCatalog_Loc.SUCCESSMESSAGE, 'Success Toast Message')
        let RFQSuccessToast = await commonActions.safeGetText(productCatalog_Loc.SUCCESSMESSAGE, successToastMsg)
        await commonActions.safeAsserts('contains', RFQSuccessToast, successToastMsg + ' is not matched', successToastMsg)
        return this;
    }

    async clickOnAddToCartButton(index) {
        let addToCartLoc = (productCatalog_Loc.ADD_TO_CAART_BUTTON).replace('%s', index);
        await commonActions.safeVisibleClick(addToCartLoc, 'Add To Cart Button');
    }

    async getProductPrice(index) {
        let productPrice = (productCatalog_Loc.PRODUCT_PRICE).replace('%s', index);
        let ProductPrice_dynamic = await commonActions.safeGetText(productPrice, 'Product Price');
        let ProductPrice_dynamic2 = (ProductPrice_dynamic.split(getLanguage.productInfo.productPrice))[1]; //Need split to handle euros and other
        let ProductPrice_dynamic3 = (ProductPrice_dynamic2.split(' '));
        return [ProductPrice_dynamic, ProductPrice_dynamic3[0], ProductPrice_dynamic3[1], ProductPrice_dynamic]
    }

    async clickOnViewCartButtonInSuccessToast() {
        await commonActions.safeVisibleClick(productCatalog_Loc.VIEW_CART_BUTTON_ON_TOAST_MESSAGE, 'View Cart Button on Success Toast');
        return cartPage
    }

    async getProductCount() {
        let startCount = await commonActions.safeGetText(productCatalog_Loc.STARTING_COUNT_PRODUCTS, 'Starting Count of the Products');
        let endCount = await commonActions.safeGetText(productCatalog_Loc.ENDING_COUNT_PRODUCTS, 'End Count of the Products');
        return { 'startCount': startCount, 'endCount': endCount }
    }

    async verifyTotalProductCountInGridView(count) {
        let allProductList = await commonActions.findElements(productCatalog_Loc.ALL_PRODUCT_GRID, 'Total Product Count On Grid View');
        await expect(allProductList.length).to.be.equal(Number(count));
    }

    async clickOnViewPriceOrRequestQuoteButton_Guest() {
        let requestQuoteLink = await commonActions.safeIsVisible(productCatalog_Loc.REQUEST_QUOTE_LINK, 'Request quote link');
        if (requestQuoteLink) {
            await commonActions.safeJavaScriptClick(productCatalog_Loc.REQUEST_QUOTE_LINK, 'Request quote link');
        }
        await commonActions.scrollTo(productCatalog_Loc.VIEW_PRICE_OR_REQUEST_QUOTE_BUTTON, 'View Price or Request Quote Button');
        await commonActions.waitForClickable(productCatalog_Loc.VIEW_PRICE_OR_REQUEST_QUOTE_BUTTON, 'View Price or Request Quote Button');
        await commonActions.safeJavaScriptClick(productCatalog_Loc.VIEW_PRICE_OR_REQUEST_QUOTE_BUTTON, 'View Price or Request Quote Button');
    }

    async clickOnRequestQuoteWithoutSigningInButton() {
        await commonActions.safeJavaScriptClick(productCatalog_Loc.REQUEST_QUOTE_WITHOUT_SIGNIN_BUTTON, 'Request Quote Without Signing In Button')
    }

    async enterBasicDetails(firstName, lastName, phoneNumber, emailId, companyName, volume) {
        await commonActions.waitForClickable(productCatalog_Loc.RFQ_FORM_LAST_NAME, 'First Name field');
        await commonActions.setValue(productCatalog_Loc.RFQ_FORM_FIRST_NAME, firstName, 'First Name');
        await commonActions.setValue(productCatalog_Loc.RFQ_FORM_LAST_NAME, lastName, 'Last Name');
        await commonActions.setValue(productCatalog_Loc.RFQ_PHONE_NUMBER, phoneNumber, 'Phone Number');
        await commonActions.setValue(productCatalog_Loc.RFQ_EMAIL_ID, emailId, 'Email');
        await commonActions.setValue(productCatalog_Loc.RFQ_COMPANY_NAME, companyName, 'Company Name');
        if (process.env.REGION == 'MX') {
            await commonActions.setValue(productCatalog_Loc.RFQ_VOLUME_NEEDED, volume, 'Volume Needed')
        } else {
            await commonActions.elementIsNotDisplayed(productCatalog_Loc.RFQ_VOLUME_NEEDED);
        }
    }

    async enterRFQDetailsForEMEA(firstName, lastName, phoneNumber, emailId, companyName, packageWeight, quantity, potentialVolume, application) {
        await commonActions.waitForClickable(productCatalog_Loc.RFQ_FORM_LAST_NAME, 'First Name field');
        await commonActions.setValue(productCatalog_Loc.RFQ_FORM_FIRST_NAME, firstName, 'First Name');
        await commonActions.setValue(productCatalog_Loc.RFQ_FORM_LAST_NAME, lastName, 'Last Name');
        await commonActions.setValue(productCatalog_Loc.RFQ_PHONE_NUMBER, phoneNumber, 'Phone Number');
        await commonActions.setValue(productCatalog_Loc.RFQ_EMAIL_ID, emailId, 'Email');
        await commonActions.setValue(productCatalog_Loc.RFQ_COMPANY_NAME, companyName, 'Company Name');
        await commonActions.setValue(productCatalog_Loc.PACKAGE_WEIGHT, packageWeight, 'Company Name');
        await commonActions.setValue(productCatalog_Loc.QUANTITY, quantity, 'Company Name');
        await commonActions.setValue(productCatalog_Loc.POTENTIAL_VOLUME, potentialVolume, 'Company Name');
        await commonActions.setValue(productCatalog_Loc.APPLICATION, application, 'Company Name');
    }

    async radioRFQFormAnswer(elementToClick) {
        await commonActions.safeClick(elementToClick, 'radio button was clicked');
    }

    async selectRandomMarketName() {
        let marketList = await commonActions.findElements((productCatalog_Loc.RFQ_END_MARKET) + '/option', 'Market Name in RFQ')
        let index = await commonActions.randomNumberWithinRange(1, marketList.length);
        await commonActions.selectByIndex(productCatalog_Loc.RFQ_END_MARKET, index, 'End Market');
    }

    async selectRandomRegionName() {
        let regionList = await commonActions.findElements(productCatalog_Loc.RFQ_REGION + '/option', 'Region Name from dropdown');
        let randomIndex = await commonActions.randomNumberWithinRange(1, regionList.length)
        await commonActions.selectByIndex(productCatalog_Loc.RFQ_REGION, randomIndex, 'Random region from drop down');
    }

    async verifyDefaultCountryAndSelect(countryName_) {
        let countryName = await commonActions.safeGetText(productCatalog_Loc.RFQ_COUNTRY, 'Country name');
        if (countryName_.includes('CA')) {
            countryName_ = 'Canada';
        }
        else if (countryName_ === 'US') {
            countryName_ === 'United States'
        } else if (countryName === 'UK') {
            countryName_ === 'United Kingdom'
        }
        await commonActions.safeAsserts('contains', countryName_, 'Country name in RFQ Expected' + countryName_ + ' Actual ' + countryName, countryName_);
        await commonActions.safeVisibleClick(productCatalog_Loc.RFQ_COUNTRY, 'Country Name in RFQ');
    }

    async selectCompanyPurchasedRadioButton(option, accountNumber) {
        option = option.toLowerCase();
        let radioOption = (productCatalog_Loc.RFQ_RADIO_BUTTON).replace('%s', option);
        await commonActions.safeVisibleClick(radioOption, 'Radio Button');
        if (option == 'yes')
            await this.enterAccountNumber(accountNumber)
    }

    async SelectNoRadioButton_chemcareuser() {
        await commonActions.safeVisibleClick(productCatalog_Loc.CHEMCARE_RFQ_NO_BUTTON, 'No radio button in RFQ Form')
    }

    async enterAccountNumber(accountNumber) {
        await commonActions.setValue(productCatalog_Loc.RFQ_ACCOUNT_NUMBER, accountNumber, 'Account Number');
    }

    async acceptTermsAndConditions() {
        await commonActions.safeVisibleClick(productCatalog_Loc.TERMS_OF_USE_CHECKBOX, 'Terms and Conditions CheckBox');
    }

    async acceptPrivacyPolicy() {
        await commonActions.safeVisibleClick(productCatalog_Loc.PRIVACY_POLICY_CHECKBOX, 'Privacy Policy CheckBox');
    }

    async clickOnSubmitQuoteRequestButton() {
        await commonActions.safeVisibleClick(productCatalog_Loc.SUBMIT_QUOTE_REQUEST, 'Submit RFQ Button');
        await commonActions.elementIsNotDisplayed(productCatalog_Loc.SUBMIT_QUOTE_REQUEST, 'Submit RFQ Button');
    }

    async clickOnRandomProduct() {
        let productindex = await commonActions.getRandomNumber(1);
        let productName = (productCatalog_Loc.PRODUCT_NAME).replace('%p', productindex);
        let elementName = await commonActions.safeGetText(productName, 'Product Name');
        await commonActions.safeVisibleClick(productName, 'Clicked on Product ' + elementName);
    }

    async clickTheFirstProduct() {
        await commonActions.waitForClickable(productCatalog_Loc.FIRST_PRODUCT_NAME, 'Clicked the First Product');
        await commonActions.safeVisibleClick(productCatalog_Loc.FIRST_PRODUCT_NAME, 'Clicked the First Product');
        await commonActions.elementIsNotDisplayed(productCatalog_Loc.FIRST_PRODUCT_NAME, 'First Product Card')
    }

    async selectFilterFromProductCatalog() {
        await commonActions.waitForVisible(productCatalog_Loc.OPEN_FILTER, 'first Filter');
        await commonActions.waitForClickable(productCatalog_Loc.FIRST_FILTERTYPE, 'first Filter Type');
        let filterName = await commonActions.safeGetText(productCatalog_Loc.FIRST_FILTERTYPE, 'Filter name');
        await commonActions.safeVisibleClick(productCatalog_Loc.FIRST_FILTERTYPE, 'first Filter Type');
        let selectedFilter = await commonActions.waitForVisible((productCatalog_Loc.SELECTED_FILTER_NAME).replace('%s', filterName), 'Selected Filter');
        await commonActions.safeAsserts('true', selectedFilter, 'Selected Filter')
    }

    async validateQuotedPrice() {
        const productCard = await commonActions.findListOfElements(productCatalog_Loc.PRODUCT_CARD);
        for (const loopElement of productCard) {
            const productPrice = await commonActions.findListOfElements(productCatalog_Loc.PRODUCT_CARD_PRICE);
            await commonActions.waitForVisible(productPrice[loopElement.index], 'Quoted Web Price')
        }
    }

    async verifyWebPriceTag() {
        await commonActions.waitForVisible(productCatalog_Loc.WEB_PRICE_TAG, 'Web Price')
    }

    async clickProductByIndex(index) {
        const productList = await commonActions.findListOfElements(productCatalog_Loc.FIRST_PRODUCT_NAME, 'Clicked the First Product');
        await commonActions.safeClick(productList[index], 'First Product Card')
        await commonActions.elementIsNotDisplayed(productCatalog_Loc.FIRST_PRODUCT_NAME, 'First Product Card')
    }

    async openFilterOptionAndSelectOption(optionIndex, index) {
        const filterOptions = await commonActions.findListOfElements(productCatalog_Loc.FILTER_OPTIONS, 'Filter Options');
        await commonActions.safeClick(filterOptions[optionIndex], 'Filter Option');
        const filterTypeOptions = await filterOptions[optionIndex].$$(productCatalog_Loc.FILTER_TYPE_CHECKBOX);
        const filter_text1 = await commonActions.safeGetText(filterTypeOptions[index], 'Filter Text Options');
        await commonActions.safeClick(filterTypeOptions[index], 'Filter Type Option');
        let selectedFilter = await commonActions.safeIsVisible((productCatalog_Loc.SELECTED_FILTER_NAME).replace('%s', filter_text1), 'Selected Filter');
        await commonActions.safeAsserts('true', selectedFilter, 'Selected Filter')
    }

    async verifySelectedFilterCount(count = 2) {
        const selectedFilters = await commonActions.findListOfElements(productCatalog_Loc.SELECTED_FILTERS, 'Selected Filters');
        await commonActions.safeAsserts('equal', selectedFilters.length, 'Selected Filter Count', count);
    }

    async clearAllFilters() {
        await commonActions.safeVisibleClick(productCatalog_Loc.CLEAR_ALL_FILTERS, 'Clear All Filters');
        await commonActions.safeAsserts('false', await commonActions.safeIsVisible(productCatalog_Loc.CLEAR_ALL_FILTERS, 'Clear All Filters'));
    }
}
module.exports = new ProductCatalog()
