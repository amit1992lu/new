class ShoppingCartPage_Locator {
    constructor(){
        this.CART_PAGE_TITLE_TEXT = '//span[@data-ui-id="page-title-wrapper"]';
        this.PRODUCT_NAME = '//span[@class="product-item-name"]/a';
        this.PRODUCT_PRICE = '//div[@class="price-wrapper"]/span[@class="price"]';
        this.AMOUNT = '//span[@class="cart-price"]/span';
        this.CART_SUBTOTAL = '//th[contains(text(),"Cart subtotal")]/../td/span';
        this.PROCEED_TO_CHECKOUT_BUTTON = '//button[@data-role="proceed-to-checkout"]';
        this.CART_BREADCRUMB = '(//ul[@class="items"]/li)[last()]';
        this.CART_SUMMARY_TEXT = '//strong[@class="summary title"][text()="Order Summary"]';
        this.REMOVE_PRODUCT = '.action.action-delete';
        this.CART_PAGE_UOM = '.price-uom';


}
}
module.exports= new ShoppingCartPage_Locator();
