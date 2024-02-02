class SignUpPage_Locator{
    constructor(){
    this.ACCOUNT_NUMBER_TEXTBOX = '//input[@id="account-number"]';
    this.ACCOUNTREQUEST_SUBMITTEDTEXT = '//span[text()="Account Request Submitted"]';
    this.CANCEL_BUTTON = '.actions-toolbar .button.button--alt';
    this.CITY_FIELD = '[id="form-placeholder"] [name="city"]';
    this.COMPANY_ADDRESS_FIELD = '[id="form-placeholder"] input[id="street_1"]';
    this.COMPANY_FIELD = '[id="form-placeholder"] [id="company"]';
    this.CONTINUE_BUTTON = '.button.submit.button';
    this.COUNTRYDROPDOWN = '[id="form-placeholder"] [name="country_id"]';
    this.CREATE_ACCOUNT_TEXT = '.legend';
    this.EMAILADDRESS_FIELD = '[id="form-placeholder"] [id="email_address"]';
    this.EXISTING_ACCOUNT_RADIOBTN ='[id="existing-account"] [class="checkmark"]';
    this.FIRSTNAME_FIELD ='[id="form-placeholder"] input[id="firstname"]';
    this.LASTNAME_FIELD ='[id="form-placeholder"] input[id="lastname"]';
    this.NEWACCOUNT_RADIOBTN = '//input[@value="new-account"]/../span';
    this.PHONE_NUMBER_FIELD = '[id="form-placeholder"] [id="telephone"]';
    this.PROVIDE_ACCOUNTNUMBER_RADIOBTN = '//input[@value="prov_account_number"]/../span';
    this.PROVIDE_SHIPPINGADDRESS_RADIOBTN = '//input[@value="prov_ship_addr"]/../span';
    this.STATE_DROPDOWN = '//*[@class="address-details"] //*[@id="region_id"]';
    this.SUCCESS_LINEART = '#Success-Line-Art';
    this.UNIT_FIELD = '//input[@title="Unit"]';
    this.ZIPCODE = '[id="form-placeholder"] [name="postcode"]';
    this.FIRSTNAME_ERROR = '//div[@id="firstname-error"]';
    this.LASTNAME_ERROR = '//div[@id="lastname-error"]';
    this.EMAIL_ERROR = '//div[@id="email_address-error"]';
    this.COMPANY_ERROR = '//div[@id="company-error"]';
    this.PHONE_ERORR = '//div[@id="telephone-error"]';
    this.COMPANYADDRESS_ERROR = '//div[@id="street_1-error"]';
    this.CITY_ERROR = '//div[@id="city-error"]';
    this.STATE_ERROR = '//div[@id="region_id-error"]';
    this.ZIPCODE_ERROR = '//div[@id="zip-error"]';
    this.ACCOUNT_ERROR = '//div[@id="account-number-error"]';
    this.END_MARKET = '//div[contains(@class,"end-market")]/select';
    }
}
module.exports = new SignUpPage_Locator();
