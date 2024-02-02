let commonActions = require('../../../Utilities/CommonActions.js');
const Privacy_Setting_Locator = require('../../Locator/Locator_Common/Privacy_Setting_Locator.js');
let languageFile = require('../../TestData/TestLevelData/languageFiles/getLanguageFile.js').getLanguageFile();


class PrivacySettingAction {
    async verifyPrivacySettingComponents(element) {
        await commonActions.waitForVisible(element, 'Element is Displayed');
    }
}

module.exports = new PrivacySettingAction();
