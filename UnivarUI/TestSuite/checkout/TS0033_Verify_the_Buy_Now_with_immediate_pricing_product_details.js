let homePage = require('../../PageActions/PageAction_Common/HomePage')
let testData = require('../../TestData/TestLevelData/TestCaseData')
let productDetail = require('../../PageActions/PageAction_Common/ProductDetail')
let additionalEssentialPage_Loc = require('../../Locator/Locator_Common/ProdCategories_AdditionalEssentialPage_Locator')

describe('TS0033 Verify Buy Now With Immediate Pricing PDP', function () {
    before(async () => {
        await homePage.navigateToAppHomePage();
        await homePage.verifyHomePage(testData.common.trueStatus);
        await homePage.acceptCookieConsent();
    });

    it('Click a Buy Now Products Category', async () => {
        await homePage.click_product_details_immediate_price_section_US();
    });

    it('Verify Product Name is displayed', async () => {
        await productDetail.verifyTableElements(additionalEssentialPage_Loc.PRODUCT_NAME,'Product Name');
    });

    it('Verify Grade is displayed', async () => {
        await productDetail.verifyTableElements(additionalEssentialPage_Loc.GRADE,'Grade');
    });

    it('Verify Form is displayed', async () => {
        await productDetail.verifyTableElements(additionalEssentialPage_Loc.FORM,'Form');
    });

    it('Verify Package is displayed', async () => {
        await productDetail.verifyTableElements(additionalEssentialPage_Loc.PACKAGE_TYPE,'Package');
    });

    it('Verify Supplier is displayed', async () => {
        await productDetail.verifyTableElements(additionalEssentialPage_Loc.SUPPLIED_BY,'Supplier');
    });

    it('Verify Price UOM is displayed', async () => {
        await productDetail.verifyTableElements(additionalEssentialPage_Loc.PRICE_UOM,'Price UOM');
    });

    it('Verify Price Package is displayed', async () => {
        await productDetail.verifyTableElements(additionalEssentialPage_Loc.PRICE_PACKAGE,'Price Package');
    });
});
