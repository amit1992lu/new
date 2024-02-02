class OrderDetails_Locator{
    constructor() {
        this.ORDER_DETAILS_BREADCRUMB = '(//ul[@class="items"]/li)[last()]';
        this.ORDER_NUMBER_TITLE = 'h2.order-details-view-header-invoice';
        this.ORDER_DETAILS_VIEW_HEADER = 'div.order-details-view-header-amt';
        this.ORDER_DETAILS_ESTIMATED_TOTAL = '.cost-details tfoot .price';
        this.REORDER_ALL_BUTTON = '.button.button--primary.productToCart.reorder-auth';
        this.ORDER_LINE_ITEM = '.tracking-details .product';
        this.PO_NUMBER_OD = '.col-3.col-m-12 .details';
        this.PAY_INVOIUCE_BUTTON ='//div[@class=\'item-total large-only\']/a[@class="button button--alt"]';
        this.BUY_AGAIN_BUTTON = '.button.button--alt.productToCart';
        this.SHIPPING_STATUS_BAR = '//ul[@class="toolbar-state-bar"]//a[@class="active"]/span';
        this.PAYMENT_REMINDER_RIBBON = '//div[@class="breadcrumbs"]/following-sibling::div[@class="message message--info message-reminder"]';
        this.EMAIL_REMINDER_MESSAGE = 'div.message__content>div.opt-in-reminder-cta';

    }

}
module.exports = new OrderDetails_Locator();
