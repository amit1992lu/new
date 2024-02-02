class NotificationCenterPage_Locator {
    constructor() {
        this.NOTIFICATIONCTR_TITLE = 'div.title>h2';
        this.ALL_BUTTON = '.notification-center__filter.desktop-only.tablet-only button:nth-child(1)';
        this.ACCOUNT_BUTTON = '.notification-center__filter.desktop-only.tablet-only button:nth-child(2)';
        this.INVOICES_BUTTON = '.notification-center__filter.desktop-only.tablet-only button:nth-child(3)';
        this.QUOTEDPRODUCTS_BUTTON = '.notification-center__main .button.button--link';
    }
}

module.exports = new NotificationCenterPage_Locator();