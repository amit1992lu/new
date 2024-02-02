class SupplierPage_Locator{
    constructor() {
        this.FEATURED_SUPPLIER_PREVIOUSBUTTON = '//button[starts-with(@class,"slick-prev slick-arrow")]';
        this.FEATURED_SUPPLIER_NEXTBUTTON = '//button[@class="slick-next slick-arrow"]';
        this.SUPPLIER_LOGO = '//img[@class="header-logo"]';
        this.SUPPLIER_LEARNMORE = '(//div[@class="trend-card__wrapper"]/a/span)[4]';
        this.SUPPLIER_SUPPLIERINFO = '//a[text()="Supplier Info"]';
        this.SUPPLIER_AGC = '//*[text()="AGC"]';
        this.SUPPLIER_ADM = '//*[text()="ADM"]';
        this.SUPPLIER_ABITEC = '//*[text()="Abitec"]';
        this.SUPPLIER_LIST = '.suppliers-list__item';
        this.SUPPLIER_TEXT = '.suppliers-list__item .description';
    }
}
module.exports = new SupplierPage_Locator();
