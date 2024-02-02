let cartPage = require('../../UnivarUI/PageActions/PageAction_Common/CartPage.js');
let headerPage = require('../../UnivarUI/PageActions/PageAction_Common/HeaderContentAction.js');
let verifyPage = require('../../UnivarUI/PageActions/PageAction_Common/VerificationPage.js');
let onlineOrderBuilder = require('../page/onlineOrderBuilderActions.js');
let regionTestData = require('../../OnlineOrderBuilder/page/regionTestData/regionTestDataSelector.js');
let regionData;
let isVerifyCodeDisplayed;


describe('Online Order Builder Get URL', function () {
    before(async () => {
        await onlineOrderBuilder.open();
        regionData = await regionTestData.regionData();
    });

    it('Select Region', async () => {
        await onlineOrderBuilder.selectRegion();
    });

    it('Enter Email', async () => {
        await onlineOrderBuilder.enterEmailAddress(regionData.EMAIL);
    });

    it('Select Ship To', async () => {
        await onlineOrderBuilder.selectShipTo(regionData.shipTo);
    });

    it('Select product', async () => {
        await onlineOrderBuilder.selectProductByIndex(1);
    });

    it('Generate Cart Link', async () => {
        await onlineOrderBuilder.createCartLink();
    });

    it('Click Cart Link', async () => {
        await onlineOrderBuilder.verifyCartLink();
        await onlineOrderBuilder.clickCartLink();
        isVerifyCodeDisplayed = await verifyPage.isVerificationPageDisplayed();
    });

    it('Removes product from cart and logout', async () => {
        if(isVerifyCodeDisplayed) {
            it('Verify verification code', async () => {
                await verifyPage.verifyVerificationCodePage();
            })
        } else {
            await cartPage.removeProductFromCartPage();
            await headerPage.clickOnMYAccountDropdown();
            await headerPage.clickLogout();
        }
    })

});
