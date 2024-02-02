class MiniCartPage_Locator{
    constructor() {
        this.PROCEED_TO_CHECKOUT_BTN = '#top-cart-btn-checkout';
        this.PACKAGE_TYPE = '.sales-unit';
        this.CLOSE_MINI_CART = '#btn-minicart-close';
        this.MINI_CART_SKELTON_LOADER = '.minicart-skelton-loading-wrapper';
        this.MINI_CART_UOM = '.uom-detail';
        this.REVIEW_CART_BTN = '.action.viewcart.button.button--alt';
    }
}
module.exports = new MiniCartPage_Locator();
