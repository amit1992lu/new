class SignUpSuccessPage_Locator {
    constructor(){
        this.SUCCESSlINEALERT ='//*[@id="Success-Line-Art"]';
        this.ACCOUNTSUBMITTEDTEXT = '//span[text()="Account Request Submitted"]';
        this.NEWACCOUNTREQUESTSUBMITTEDTEXT = '.success-content';
    }
}
module.exports = new SignUpSuccessPage_Locator();
