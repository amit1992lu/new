class AdminPanel_Locator{
    constructor() {
        this.USERNAME = '#username';
        this.PASSWORD = '#login';
        this.SIGN_IN_BTN = '.action-login.action-primary';
        this.ADMIN_DASHBOARD = '.admin__old';
        this.CUSTOMER_SIDE_NAV = '[data-ui-id="menu-magento-customer-customer"]';
        this.CUSTOMER_FLYOUT = '[aria-labelledby="menu-magento-customer-customer"]';
        this.ALL_CUSTOMERS = '[data-ui-id="menu-magento-customer-customer-manage"]';
        this.CUSTOMER_FILTER = '.admin__current-filters-list';
        this.CUSTOMER_ACTION = '.admin__data-grid-wrap .action-select';
        this.CUSTOMER_COUNTRY = 'tr[class*="data-row"] td:nth-child(8)';
        this.LOADING_MASK = '#container .admin__data-grid-loading-mask';
        this.LOGIN_AS_CUSTOMER = '.action-menu._active [data-repeat-index="1"] a';
        this.ORDERS_LINK_HEADER = '.customer-link.level-top';
    }
}
module.exports = new AdminPanel_Locator();
