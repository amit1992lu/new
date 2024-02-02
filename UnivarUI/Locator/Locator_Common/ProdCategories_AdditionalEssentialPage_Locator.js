class ProdCategories_AdditionalEssentialPage_Locator{
    constructor() {
        this.PRODUCT_NAME = '.table-view__content .table-view__name';
        this.GRADE = 'td.table-view__grade.col-data';
        this.FORM = 'td.table-view__form.col-data';
        this.PACKAGE_TYPE = 'td.table-view__package_type.col-data';
        this.SUPPLIED_BY = 'td.table-view__supplier1.col-data';
        this.PRICE_UOM = 'td[data-th="Price (UOM)"] .price';
        this.PRICE_PACKAGE = '.table-view__content [class$="package-price"]';
        this.ADD_TO_CART = 'button.action.tocart.add-to-cart.guest.ignore';
        this.RESULTS = 'p#toolbar-amount';
    }
}
module.exports = new ProdCategories_AdditionalEssentialPage_Locator();
