let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
let headerContentAction = require('../../PageActions/PageAction_Common/HeaderContentAction.js');
let commonTestData = require('../../TestData/TestLevelData/TestCaseData.js');
let getLanguageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile');

let getLanguage = getLanguageFile.getLanguageFile();
describe('TS0025 Verify Auto Complete Search Without Entering Query', function () {
    before(async () => {
        await homePage.navigateToAppHomePage();
        await homePage.verifyHomePage(commonTestData.common.trueStatus);
        await homePage.acceptCookieConsent();
    });
    it('Verify Auto Complete Search window after clicking on Search box', async () => {
        //await headerContentAction.verifySearchBoxPlaceHolder(getLanguage.searchQuery.placeHolderText);
        // Clicking on search box, verifying autocomplete window and clicking on 'X' button
        await browser.pause(2500);
        await headerContentAction.clickOnSearchBox();
        await headerContentAction.verifyPopularSearchesText(commonTestData.common.trueStatus);
        // await headerContentAction.verifyRecentSearches(commonTestData.common.trueStatus);
        // await headerContentAction.verifyRecentSearchesListLength(6);
        await headerContentAction.verifyPopularSearchListLength(4);
        //await headerContentAction.verifySearchBoxPlaceHolder('');
    });
    it.skip('Verify Search box after clicking on close icon on search box', async () => {
        await headerContentAction.clickOnCloseIconSearchBar();
        //await headerContentAction.verifySearchBoxPlaceHolder(getLanguage.searchQuery.placeHolderText);
        await headerContentAction.verifyPopularSearchesText(commonTestData.common.falseStatus);
        // await headerContentAction.verifyRecentSearches(commonTestData.common.falseStatus)
    });
    it('Verify Search box after clicking on search box', async () => {
        // Clicking on search box, verifying autocomplete window and clicking outside the search box
        await headerContentAction.clickOnSearchBox();
        await headerContentAction.verifyPopularSearchesText(commonTestData.common.trueStatus);
        // await headerContentAction.verifyRecentSearches(commonTestData.common.trueStatus);
        // await headerContentAction.verifyRecentSearchesListLength(6);
        await headerContentAction.verifyPopularSearchListLength(4);
        //await headerContentAction.verifySearchBoxPlaceHolder('');
    });
    it.skip('Verify Search box after clicking on header content bar', async () => {
        await headerContentAction.clickOnHeaderContentBar();
        //await headerContentAction.verifySearchBoxPlaceHolder(getLanguage.searchQuery.placeHolderText);
        await headerContentAction.verifyPopularSearchesText(commonTestData.common.falseStatus);
        // await headerContentAction.verifyRecentSearches(commonTestData.common.falseStatus);
    });
});
