'use strict';
let homePage = require('../../PageActions/PageAction_Common/HomePage')
let signInPage = require('../../PageActions/PageAction_Common/SignInPage')
let testData = require('../../TestData/TestLevelData/TestCaseData')
let headerPage = require('../../PageActions/PageAction_Common/HeaderContentAction.js');
let orderHistory = require('../../PageActions/PageAction_Common/OrderHistoryPage.js');
let orderHistory_Loc = require('../../Locator/Locator_Common/OrderHistory_Locator.js');
const TestCaseData = require('../../TestData/TestLevelData/TestCaseData');
const { getSecret } = require('../../../aws-secret-manager');
let userEmail;
let userPassword;

describe('TS0050 Verify Order Details For ChemCare and Univar User', function () {
    before(async () => {
        if(process.env.DEVICE_FARM) {
            const secretResponse = await getSecret('digital-qa-automation-test');
            userEmail = await secretResponse['CHEMCARE_MULTIUSER']
            userPassword = await secretResponse['CHEMCARE_MULTIUSRPASSWORD'];
        } else {
            userEmail = process.env.CHEMCARE_MULTIUSER;
            userPassword = process.env.CHEMCARE_MULTIUSRPASSWORD;
        }
        await homePage.navigateToAppHomePage();
        await homePage.acceptCookieConsent();
        await homePage.verifyHomePage(testData.common.trueStatus);
    })
    it('Enter Credentials and Sign In',async ()=>{
        await homePage.clickOnSignInLink();
        await signInPage.loginWithValidCredentials(userEmail, userPassword);
    })
    it('Click on Order History link',async ()=>{
        await headerPage.clickOnOrdersCTA();
    })
    it('Search Order by Order id in Order History Page', async () => {
        await orderHistory.SearchBykeyword('Order Number', orderHistory_Loc.OH_ORDER_HEADING);
    });

    it('Search Order by PO in Order History Page', async () => {
        await orderHistory.SearchBykeyword('PO number', orderHistory_Loc.PO_NUMBER);
    });

    it('Search Order by SKU in Order History Page', async () => {
        await orderHistory.SearchBykeyword('SKU number', orderHistory_Loc.SKU_NUMBER);
    });

    it('Search Order by Product name in Order History Page', async () => {
        await orderHistory.SearchBykeyword('Product Name', orderHistory_Loc.PRODUCT_NAME);
    });

    it('Click on Chemical/Ingredients from Order Type Dropdown',async ()=>{
        await orderHistory.ResetFilter();
        await orderHistory.ClickOnChemicalIngredients(TestCaseData.common.chemical_ingredients_links);
    });

    it('Click on Chemcare from Order Type Dropdown',async ()=>{
        await orderHistory.ResetFilter();
        await orderHistory.ClickOnChemcare(TestCaseData.common.chemcare_links);
    });

})
