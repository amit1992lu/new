let commonActions = require('../../../Utilities/CommonActions.js');
let miniCart = require('../../Locator/Locator_Common/MiniCartPage_Locator.js');

class MiniCartPage {
    async verifyProductPackageInCart(packageType) {
        await commonActions.elementIsNotDisplayed(miniCart.MINI_CART_SKELTON_LOADER, 'Mini Cart Skeleton Loader');
        await commonActions.waitForClickable(miniCart.PROCEED_TO_CHECKOUT_BTN, 'Proceed to Checkout');
        const listOfProductsPackages = await commonActions.findListOfElements(miniCart.PACKAGE_TYPE);
        for(var packageName of listOfProductsPackages) {
            const packageText = await packageName.getText();
            if(packageText.includes(packageType)) {
                return await commonActions.waitForVisible(packageName, 'Package type: ' + packageType + ' is in Mini Cart');
            }
        }
        return await commonActions.safeAsserts('contains', await packageName.getText(), 'Package Type', packageType);
    }

    async closeMiniCart() {
        await commonActions.safeIsClickable(miniCart.CLOSE_MINI_CART, 'Mini Cart Close Button');
        await commonActions.safeClick(miniCart.CLOSE_MINI_CART, 'Mini Cart Close Button');
        await commonActions.elementIsNotDisplayed(miniCart.CLOSE_MINI_CART, 'Mini Cart Close Button');
    }

    async verifyMiniCartUOM() {
        await commonActions.waitForVisible(miniCart.MINI_CART_UOM, 'Mini cart UOM');
    }

    async clickReviewCart() {
        await commonActions.waitForClickable(miniCart.REVIEW_CART_BTN, 'Review Cart Button');
        await commonActions.safeClick(miniCart.REVIEW_CART_BTN, 'Review Cart Button');
    }
}

module.exports = new MiniCartPage()
