let commonActions = require('../../../Utilities/CommonActions.js');
let supplierPage_Loc = require('../../Locator/Locator_Common/SupplierPage_Locator');

class SuppliersPage {

    async verifyNextPreviousButtons_FeaturedSuppliers() {
        if(process.env.REGION ==='US')
        {
            await commonActions.scrollTo(supplierPage_Loc.FEATURED_SUPPLIER_NEXTBUTTON,'Next button');
            let attribute_value = await commonActions.getAttribute(supplierPage_Loc.FEATURED_SUPPLIER_PREVIOUSBUTTON,'aria-disabled','getting aria-disabled attribute');
            await commonActions.safeAsserts(true, attribute_value, 'Attribute value');
            await commonActions.safeVisibleClick(supplierPage_Loc.FEATURED_SUPPLIER_NEXTBUTTON, 'Click on Next button');
            attribute_value = await commonActions.getAttribute(supplierPage_Loc.FEATURED_SUPPLIER_PREVIOUSBUTTON,'aria-disabled','getting aria-disabled attribute');
            await commonActions.safeAsserts(false, attribute_value, 'Attribute value');
        }
        else
        {
            await commonActions.elementIsNotDisplayed(supplierPage_Loc.FEATURED_SUPPLIER_NEXTBUTTON);
        }
    }

    async FeaturedSuppliers() {
        if(process.env.REGION === 'US') {
            await commonActions.scrollTo(supplierPage_Loc.SUPPLIER_LEARNMORE,'Learn More Link');
            await commonActions.safeVisibleClick(supplierPage_Loc.SUPPLIER_LEARNMORE, 'Learn More Link');
            await commonActions.safeAsserts('true',await commonActions.safeIsVisible(supplierPage_Loc.SUPPLIER_LOGO,'Supplier Logo'),'Assertion on Supplier Logo');
            await commonActions.safeAsserts('true',await commonActions.safeIsVisible(supplierPage_Loc.SUPPLIER_SUPPLIERINFO,'Supplier Info Tab'),'Assertion on Supplier Info Tab');
        }
        else {
            await commonActions.waitForVisible(supplierPage_Loc.SUPPLIER_LIST, 'Supplier List');
            await commonActions.waitForVisible(supplierPage_Loc.SUPPLIER_TEXT, 'Supplier Text');
        }
    }
}

module.exports = new SuppliersPage()
