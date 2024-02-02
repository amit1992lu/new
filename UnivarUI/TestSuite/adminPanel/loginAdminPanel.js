let adminPanel = require('../../../UnivarUI/PageActions/PageAction_Common/AdminPanelPage.js');
let adminPanelElements = require('../../../UnivarUI/Locator/Locator_Common/AdminPanel_Locator.js');
let headerPage = require('../../PageActions/PageAction_Common/HeaderContentAction.js');
let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let orderHistory = require('../../PageActions/PageAction_Common/OrderHistoryPage');
let orderHistory_Loc = require('../../../UnivarUI/Locator/Locator_Common/OrderHistory_Locator.js');
let getLanguageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile');
let getLanguage = getLanguageFile.getLanguageFile();

describe('Admin Login', function () {
    before(async () => {
        await adminPanel.navigateToAdminPanel();
    });

    it('Login with Valid Credentials', async () => {
        await adminPanel.adminLogin(process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD);
        await adminPanel.clickSignIn()
    });

    it('Click Customer on Side Nav', async () => {
        await adminPanel.clickAdminSideNav(adminPanelElements.CUSTOMER_SIDE_NAV, adminPanelElements.CUSTOMER_SIDE_NAV);
        await adminPanel.clickMenuOption(adminPanelElements.ALL_CUSTOMERS);
        await adminPanel.verifyCustomerDashboard();
    });

    it('Login as a Customer from the region ' + getLanguageFile.getCountryFullName(), async () => {
        await adminPanel.loginAsCustomer(getLanguageFile.getCountryFullName());
        await homePage.acceptCookieConsent();
    });

    it('Navigate to Order History Page and Search for an order', async () => {
        await headerPage.clickOnOrdersCTA();
        await orderHistory.clickOrderHistoryTabs(orderHistory_Loc.COMPLETED_ORDER_TAB);
        let orderID = await orderHistory.getOrderIdFromOrderList();
        await orderHistory.searchOrderUsingSearchBox(''); //Need to find order number for each region in each env
    });

    it('Open Shipping Document model', async () => {
        await orderHistory.clickShippingDocumentsLink();
    });

    it('Open Invoice PDF and take screenshot', async () => {
        await orderHistory.clickDocumentLink();
    });

});
