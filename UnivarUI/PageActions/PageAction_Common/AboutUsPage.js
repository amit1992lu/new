let commonActions = require('../../../Utilities/CommonActions.js');
let aboutUsLoc = require ('../../Locator/Locator_Common/About_Us_Locator.js');


class AboutUsPage {

    async clickOnRandomGatedDocument() {
        await  commonActions.scrollTo(aboutUsLoc.GD_DOC_DOWNLOAD_CTA, 'Doc from the list')
        await commonActions.safeJavaScriptClick(aboutUsLoc.GD_DOC_DOWNLOAD_CTA, 'Gated Doc');
    }
}

module.exports = new AboutUsPage()
