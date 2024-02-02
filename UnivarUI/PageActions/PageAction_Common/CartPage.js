let commonActions = require('../../../Utilities/CommonActions.js');
let cartPage_Loc = require('../../Locator/Locator_Common/ShoppingCartPage_Locator.js');
let shippingPageAction = require('./ShippingCheckoutPage.js');

class CartPage {
    async verifyCartPage() {
        await commonActions.waitForVisible(cartPage_Loc.CART_BREADCRUMB,  'Cart BreadCrumb');
        let breadCrumb = await commonActions.safeGetText(cartPage_Loc.CART_BREADCRUMB,  'Cart BreadCrumb');
        await expect(breadCrumb, 'Breadcrumb Name is not equal to').to.be.equal('Cart')
        await commonActions.waitForVisible(cartPage_Loc.CART_PAGE_TITLE_TEXT,  'Shopping Cart Title');
        let cartSummary = await commonActions.safeIsVisible(cartPage_Loc.CART_SUMMARY_TEXT, 'Cart Summary');
        await expect(cartSummary, 'Cart Summary').to.be.true;
    }

    async verifyProductNameAndPrice(productName, productPrice) {
        let prodcutName_actual = await commonActions.safeGetText(cartPage_Loc.PRODUCT_NAME,  'Product Name');
        await expect(prodcutName_actual, 'Product Name').to.be.equal(productName);
        let product_price = await commonActions.safeGetText(cartPage_Loc.PRODUCT_PRICE,  'Product Price');
        await expect(product_price, 'Product Price').to.be.equal(productPrice);
    }

    async getTotalPrice(productPrice, productQuantity) {
        if (productPrice.includes(',')) {
            productPrice = productPrice.replace(',', '');
        }
        let itemPrice = parseFloat(productPrice);
        let itemQty = parseInt(productQuantity);
        let totalPrice = (itemPrice * itemQty).toFixed(2);
        return totalPrice;
    }

    async verifyCartTotal(totalPrice, currencyCode) {
        let totalPrice1 = '$' + totalPrice + ' ' + currencyCode;
        let cartSubTotal1 = await commonActions.safeGetText(cartPage_Loc.CART_SUBTOTAL,  'Cart SubTotal');
        let cartSubTotal;
        if (cartSubTotal1.includes(',')) {
            cartSubTotal = cartSubTotal1.replace(',', '');
        }
        await expect(cartSubTotal, 'Cart Subtotal is not equal' + cartSubTotal).to.equal(totalPrice1);
    }

    async clickOnProceedToCheckoutButton() {
        await commonActions.safeVisibleClick(cartPage_Loc.PROCEED_TO_CHECKOUT_BUTTON,  'Proceed To Checkout');
        return shippingPageAction

    }

    async removeProductFromCartPage() {
        await commonActions.waitForClickable(cartPage_Loc.REMOVE_PRODUCT, 'Remove Product');
        await commonActions.safeClick(cartPage_Loc.REMOVE_PRODUCT, 'Remove Product');
        await commonActions.elementIsNotDisplayed(cartPage_Loc.REMOVE_PRODUCT);
    }

    async verifyUOMonCartPage() {
        await commonActions.waitForVisible(cartPage_Loc.CART_PAGE_UOM, 'Cart Page UOM')
    }
}

module.exports = new CartPage();
