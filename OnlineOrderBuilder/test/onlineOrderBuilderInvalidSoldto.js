let onlineOrderBuilder = require('../page/onlineOrderBuilderActions.js');
let regionTestData = require('../page/regionTestData/regionTestDataSelector.js');
let testData = require('../../UnivarUI/TestData/TestLevelData/TestCaseData.js');

describe('Online Order Builder Invalid SoldTo Error Msg Validation', function () {
    before(async () => {
        await onlineOrderBuilder.open();
    });

    it('Select Region', async () => {
        await onlineOrderBuilder.selectRegion();
    });

    it('Enter Email', async () => {
        let regionData = await regionTestData.regionData();
        await onlineOrderBuilder.enterEmailAddress(testData.common.gmailDynamic);
    });

    it('Enter Contact Info', async () => {
        await onlineOrderBuilder.enterContactDetails(testData.common.firstName_Dynamic,testData.common.lastName_Dynamic,testData.common.invalidSoldTo);
    });

    it('Verify Error Message is displayed', async () => {
       await onlineOrderBuilder.verifyErrorMsg();
    });
});
