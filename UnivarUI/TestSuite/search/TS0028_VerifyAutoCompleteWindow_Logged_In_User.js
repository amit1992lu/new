let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let headerContentAction = require('../../PageActions/PageAction_Common/HeaderContentAction.js');
const signInPage = require('../../PageActions/PageAction_Common/SignInPage');
const testData = require('../../TestData/TestLevelData/TestCaseData.js');
let getLanguageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile');

let getLanguage = getLanguageFile.getLanguageFile();
const { getSecret } = require('../../../aws-secret-manager');
let userEmail;
let userPassword;

let searchQry;
if(process.env.REGION === 'UK') {
    searchQry = 'sod'
}else {
    searchQry = 'alum'
}

describe('TS0028 Verify Auto Complete Window Logged In User', function () {
    before(async () => {
        if(process.env.DEVICE_FARM) {
            const secretResponse = await getSecret('digital-qa-automation-test');
            userEmail = await secretResponse['PRODUSER']
            userPassword = await secretResponse['PRODPASSWORD'];
        } else {
            userEmail = process.env.PRODUSER;
            userPassword = process.env.PRODPASSWORD;
        }
        await homePage.navigateToAppHomePage();
        await homePage.verifyHomePage(testData.common.trueStatus);
        await homePage.acceptCookieConsent();
    });
    it('Enter Credentials and Sign In',async ()=>{
        await homePage.clickOnSignInLink();
        let personalizedHomepage = await signInPage.loginWithValidCredentials(userEmail, userPassword);
    });
    it.skip('Verify Place Holder text of Search box',async ()=>{
        await headerContentAction.verifySearchBoxPlaceHolder(getLanguage.searchQuery.placeHolderText);
    });
    it('Enter Partial Query in Search Box',async ()=>{
        await headerContentAction.enterQueryInSearchBox(searchQry);
    });
    it('Verify length of Auto Complete Window',async ()=>{
        await headerContentAction.verifyAllProductsInAutoCompleteWindow(6);
    });
});
