let testData = require('../../TestData/TestLevelData/TestCaseData.js');
let homePage = require('../../PageActions/PageAction_Common/HomePage.js');
describe('TS0030_BrokenLinks',function(){
    it ('TS0030_BrokenLinks', () => {
        homePage.navigateToAppHomePage();
        homePage.verifyHomePage(testData.common.trueStatus);
        homePage.brokenlinks();
    })
})
