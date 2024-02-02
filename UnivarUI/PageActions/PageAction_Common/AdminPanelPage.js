let commonActions = require('../../../Utilities/CommonActions.js');
let adminPanelLocator = require ('../../Locator/Locator_Common/AdminPanel_Locator.js');


class AdminPanelPage {
    navigateToAdminPanel() {
        browser.url('');
    }

    async adminLogin(username, password) {
        await commonActions.waitForVisible(adminPanelLocator.USERNAME, 'Username');
        await commonActions.waitForVisible(adminPanelLocator.PASSWORD, 'Username');
        await commonActions.setValue(adminPanelLocator.USERNAME, username, 'Username');
        await commonActions.setValue(adminPanelLocator.PASSWORD, password, 'Password');
    };

    async clickSignIn() {
        await commonActions.scrollTo(adminPanelLocator.SIGN_IN_BTN, 'Sign In Button');
        await commonActions.waitForClickable(adminPanelLocator.SIGN_IN_BTN, 'Sign In Button');
        await commonActions.safeClick(adminPanelLocator.SIGN_IN_BTN, 'Sign In Button');
        await commonActions.elementIsNotDisplayed(adminPanelLocator.SIGN_IN_BTN);
    }

    async clickAdminSideNav(sideNavOption, sideNavMenu) {
        await commonActions.scrollTo(sideNavOption, 'Side Nav');
        await commonActions.waitForClickable(sideNavOption, 'Side Nav');
        await commonActions.safeClick(sideNavOption, 'Side Nav');
        await commonActions.waitForVisible(sideNavMenu, 'Side Nav Menu');
    }

    async clickMenuOption(menuOption) {
        await commonActions.scrollTo(menuOption, 'Menu Option');
        await commonActions.waitForClickable(menuOption, 'Menu Option');
        await commonActions.safeClick(menuOption, 'Menu Option');
        await commonActions.elementIsNotDisplayed(menuOption);
    }

    async verifyCustomerDashboard() {
        await commonActions.waitForVisible(adminPanelLocator.CUSTOMER_FILTER, 'Customer Filter');
        const filterText = await commonActions.safeGetText(adminPanelLocator.CUSTOMER_FILTER, 'Filter');
        await commonActions.safeAsserts('contains', filterText, 'Filter', 'univar.automation@gmail.com');
    }

    async loginAsCustomer(region) {
        await commonActions.elementIsNotDisplayed(adminPanelLocator.LOADING_MASK);
        let listOfUsers = await commonActions.findListOfElements(adminPanelLocator.CUSTOMER_COUNTRY);
        let usersActions = await commonActions.findListOfElements(adminPanelLocator.CUSTOMER_ACTION);
        for (let countryName of listOfUsers) {
            let countryNameText = await commonActions.safeGetText(countryName, 'Country Name');
            if(countryNameText == region) {
                await commonActions.safeJavaScriptClick(usersActions[listOfUsers.indexOf(countryName)]);
                await commonActions.safeJavaScriptClick(adminPanelLocator.LOGIN_AS_CUSTOMER);
                let window = await browser.getWindowHandles();
                await browser.switchToWindow(window[window.length - 1]);
                if(process.env.ENV === 'QA_ADMIN') {
                    const url = await commonActions.getUrl();
                    const updateUrl = await this.addBasicAuthToURL(url)
                    await browser.url(updateUrl);
                }
                if(await commonActions.waitForVisible(adminPanelLocator.ORDERS_LINK_HEADER)) {
                    break;
                }
            }
        }
        await commonActions.elementIsNotDisplayed(adminPanelLocator.CUSTOMER_FILTER);
    }

    async addBasicAuthToURL(url) {
        const newUrl = String(url).split('://');
        return newUrl[0] + '://' + process.env.QUSERNAME + ':' + process.env.QPASSWORD + '@' + newUrl[1];
    }
}

module.exports = new AdminPanelPage()
