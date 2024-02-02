class ContactUsPage_Locator {
    constructor() {
        this.CONTACT_US_BREADCRUMB = '(//ul[@class="items"]/li)[last()]';
        this.INFINITY_NUMBER_US = '.pb-header__description .InfinityNumber';
        this.MSNORMAL_CONTACTNO = '.pb-header__description';
        this.MSONORMAL_LIST = '.x_MsoNormal';
        this.INFINITY_NUMBER_LIST = '.pb-header__description';
        this.NORDICS_NUMBERS = '.x_MsoNormal';
        this.CANADA_EN_NUMBER = '.pb-header__description [title]';
    }
}

module.exports = new ContactUsPage_Locator();
