class onlineOrderBuilderLocators {
    constructor() {
    this.emailField ='[data-auto-tag="search-email-address"] [type="email"]';
    this.regionSelector ='[data-auto-tag="search-selected-region-1"]';
    this.regionSelectorFlyout ='.v-overlay__content.v-select__content';
    this.nextBtn ='[data-auto-tag="next"]';
    this.createOrderLink ='[data-auto-tag*="create-cart-link-for-order"]';
    this.productRadio = '.v-data-table__tr [id*="input-"]';
    this.cartLink ='[data-auto-tag="cart-link"]';
    this.selectedShipTo = '[data-auto-tag*="create-selected-ship-to-"] .v-field__field';
    this.createShipTo ='[data-auto-tag*="create-ship-to-%s"]';
    //Region
    this.usRegion = '[data-auto-tag="search-region-1"]';
    this.caEnRegion = '[data-auto-tag="search-region-2"]';
    this.caFrRegion = '[data-auto-tag="search-region-3"]';
    this.ukRegion = '[data-auto-tag="search-region-4"]';
    this.ieRegion = '[data-auto-tag="search-region-5"]';
    this.dkRegion = '[data-auto-tag="search-region-6"]';
    this.swRegion = '[data-auto-tag="search-region-7"]';
    this.noRegion = '[data-auto-tag="search-region-8"]';
    this.fiRegion = '[data-auto-tag="search-region-9"]';
    this.frRegion = '[data-auto-tag="search-region-10"]';
    this.beFrRegion = '[data-auto-tag="search-region-11"]';
    this.beNlRegion = '[data-auto-tag="search-region-12"]';
    this.spRegion = '[data-auto-tag="search-region-14"]';
    this.itRegion = '[data-auto-tag="search-region-15"]';
    this.mxRegion = '[data-auto-tag="search-region-16"]';
    this.nl10Region = '[data-auto-tag="search-region-19"]';
    this.nl30Region = '[data-auto-tag="search-region-18"]';
    this.firstName = '[data-auto-tag="first-name"] [ type="text"]';
    this.lastName = '[data-auto-tag="last-name"] [type="text"]';
    this.soldTo = '[data-auto-tag="sold-to"] [type="text"]';
    this.closeBtn = '[data-auto-tag="error-close"]';
   }
}

module.exports = new onlineOrderBuilderLocators()
