class InvoicePage_Locator {
    constructor() {
        this.INVOICES_BREADCRUMB = '(//ul[@class="items"]/li)[last()]';
        this.INVOICE_SERACHBOX = '//div[@data-bind=\'scope: "invoices_list"\']//input';
        this.SEARCHBOX_PLACEHOLDER_TEXT = '//div[@data-bind=\'scope: "invoices_list"\']//input[@placeholder="Search Invoices No., Order No., or PO No."]'
        this.INVOICES_PAGE_TITLE = 'div.title';
        this.INVOICES_FILTER = 'div[data-bind*="invoices_list"]>ul>li>div';
        this.DATE_RANGE_FROM = 'i.fa-calendar-alt+input[id="date-from"]';
        this.DATE_RANGE_TO = 'i.fa-calendar-alt+input[id="date-to"]';
        this.SHIPPING_ADDRESSES = 'label[data-bind*="Ship To Account"]+div[aria-expanded="false"]';
        this.ALL_ADDRESSES_DROPDOWN = 'strong[data-bind*="All addresses"]';
        this.ALL_INVOICES_LIST = '//tbody[@class="table-view__content"]/tr';
        this.INVOICE_STATUS = 'div[data-sortattr="status_code"]';
        this.INVOICE_NUMBER_HEADER = 'div[data-sortattr="billing_doc"]';
        this.TOTAL_AMOUNT_HEADER = 'div[data-sortattr="total_amt"]';
        this.DATE_DUE_HEADER = 'div[data-sortattr="due_date"]';
        this.STATUS_HEADER = 'div[data-sortattr="status"]';
        this.ORDER_NUMBER_HEADER = 'div[data-sortattr="sales_doc"]'
        this.PO_NUMBER_HEADER = 'div[data-sortattr="purchase_order"]';
        this.SHIP_TO_ACCT_HEADER = 'div[data-sortattr="ship_to"]';
        this.VIEW_INVOICE_HEADER = 'th[data-bind*="ActiveStates"]';
        this.SHIPPING_ADDRESS_DROPDOWN = 'div.shipping-address';
        this.SHIP_TO_SEARCH_BOX = '//ul[@data-filter="ship-to"]//input[@class="search-item-address"]';
        this.SHIP_TO_ADDRESS_LIST = '//ul[@data-filter="ship-to"]//li[@class="item value"]';
        this.EMAIL_REMINDER_RIBBON = '//div[@class="breadcrumbs"]/following-sibling::div[@class="message message--info message-reminder"]';
        this.EMAIL_REMINDER_MESSAGE = 'div.recent-invoices>div.message--info.message-reminder div.opt-in-reminder-cta';
        this.PAY_NOW_LINK = '//span[text()="Pay Now"]';
        this.SUBMIT_BUTTON = 'button.action.submit.button.button--primary';
        this.INVOICE_NUMBER_VAL_MSSG = '//div[@id="invoice-form[invoice_number]-error"]';
        this.INVOICE_HEADER = '//h1[@class="form-title"]';
        this.PAYER_NO_VAL_MSSG = '//div[@id="invoice-form[customer_number]-error"]';
        this.PAYMENT_AMOUNT_VALIDATION_MSSG = '//div[@id="payment[amount]-error"]';
        this.BANK_NAME_VALIDATION_MSSG = '[id$="[name]-error"]';
        this.BANK_ADDRESS_VALIDATION_MSSG = '[id$="[address]-error"]';
        this.CITY_VALIDATION_MSSG = '[id$="[city]-error"]';
        this.STATE_VALIDATION_MSSG = '[id$="[state]-error"]';
        this.ZIP_VALIDATION_MSSG = '[id$="[zip]-error"]';
        this.BANK_ROUTING_NUMBER_VALIDATION_MSSG = '[id$="[routing_number]-error"]';
        this.ACCOUNT_NUMBER_VALIDATION_MSSG = '[id$="[account_number]-error"]';
        this.ACCOUNT_HOLDER_PHONE_VALIDATION_MSSG = '[id$="[account_holder_phone]-error"]';
        this.INVOICE_CHECKBOX_VALIDATION_MSSG = '[id$="[mandate_text]-error"]';
        this.PAYER_NUMBER = '//input[@id="invoice-form[customer_number]"]';
        this.BANK_NAME =  'input[id$="[name]"]';
        this.BANK_ADDRESS = 'input[id$="[address]"]';
        this.CITY = 'input[id$="[city]"]';
        this.STATE_DROPDWN = '[id$="[state]"]';
        this.ZIP = 'input[id$="[zip]"]';
        this.BANK_ROUTING_NO = 'input[id$="[routing_number]"]';
        this.ACCOUNT_NO = 'input[id$="[account_number]"]';
        this.ACCOUNT_HOLDER_PHONE = '//input[@id="payment[worldpay_ach][account_holder_phone]"]';
        this.INVOICE_NO = '//input[@id="invoice-form[invoice_number]"]';
        this.EMAIL_ADDRESS = '//input[@id="invoice-form[email]"]';
        this.PAYMENT_AMOUNT = '//input[@id="payment[amount]"]';
        this.INVOICE_SUCCESS_MESSAGE = '//div[@class="invoice-success__content"]/p';
        this.INVOICE_TERMS_BOX = '.checkbox.custom-checkbox .checkbox';
        this.INVOICE_ORDER_TYPE = '//label[text()="Order Type"]/../div';
        this.INVOICE_CHEMICAL_INGREDIENTS = '//p[text()="Chemical/Ingredients"]';
        this.CHEMICAL_INGREDIENTS_ORDER_NO = 'td:nth-child(5) a';
        this.INVOICE_CHEMCARE = '//p[text()="ChemCare"]';
        this.CHEMCARE_ORDER_NO = 'td:nth-child(5) span';
        this.MANAGE_AUTOPAY_LINK = '//a[@class="action button button--alt"]';
    }
}

module.exports = new InvoicePage_Locator();
