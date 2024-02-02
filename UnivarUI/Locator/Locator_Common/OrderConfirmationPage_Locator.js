class OrderConfirmationPage_Locator{
    constructor() {
       this.ORDER_CONFRIMATION_STATUS_BAR_ACTIVE= '//li[@class="opc-progress-bar-item _active"]';
       this.ORDER_CONFRIMATION_STATUS_BAR_ACTIVE_TEXT= '//li[@class="opc-progress-bar-item _active"]/h4';
       this.ORDER_NUMBER= '//h2[@class="order-info__number"]';
        this.SHIPPING_INFORMATION= '//h3[contains(text(),"Shipping Information")]';
        this.SHIPPING_ADDRESS_TITLE= '//p[contains(text(),"Shipping Address")]';
        this.SHIPPING_METHOD_TITLE= '//p[contains(text(),"Shipping Method")]';
        this.PREFERRED_DELIVERY_DATE= '//p[contains(text(),"Preferred Delivery Date")]';
        this.PAYMENT_INFORMATION= '//h3[contains(text(),"Payment Information")]';
        this.BILLING_ADDRESS_TITLE= '//p[contains(text(),"Billing Address")]';
        this.PO_NUMBER= '//p[contains(text(),"PO Number")]';
        this.ORDER_SUMMARY= '//h3[contains(text(),"Order Summary")]';
        this.SHIPPING_ADDRESS_TEXT= '(//p[@class="title"]//following-sibling::p)[1]';
        this.BILLING_ADDRESS_TEXT = '(//p[@class="title"]//following-sibling::p)[8]';
        //Instant Checkout Locators
        this.CREDIT_CARD_NUMBER = '//div[@class="info-block__details"]/p[contains(text(),"Credit Card Number")]/following-sibling::p[1]';
        this.PAYMENT_METHOD = 'div[class="info-block address columns"]:nth-child(2) div[class="column"]:nth-child(3) p:nth-child(2)';
        this.CC_EXPIRATION_DATE = '//div[@class="info-block__details"]/p[contains(text(),"Expiration Date")]/following-sibling::p[1]';
        this.LIFT_GATE_VALUE = 'div[class="info-block address columns"]:nth-child(1)  div[class="column"]:nth-child(3) p:nth-child(4)';
        this.PRODUCT_NAME = '//div[@class="product-item-name"]';
        this.QUANTITY = 'tr td.col.qty.table-desktop-only';
        this.PRICE = 'td.col.subtotal.table-desktop-only span.price';
    }
}
module.exports= new OrderConfirmationPage_Locator();
