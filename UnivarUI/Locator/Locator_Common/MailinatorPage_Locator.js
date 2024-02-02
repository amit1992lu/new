class MailinatorPage_Locator{
    constructor() {
        this.PUBLIC_MESSAGE_TEXT = '//*[contains(text(),"Public Messages")]';
        this.SEARCH_BOX = '//input[@id="inbox_field"]';
        this.GO_BUTTON = 'div.wrapper-primary-input>button';
        this.JUST_NOW_EMAIL = '(//td[@class="ng-binding"])[1]';
        this.TO_EMAIL = '(//div[contains(text(),"To")]/../div)[last()]';
        this.RESET_PASSWORD_BUTTTON = 'table.inner-wrapper td a';
    }
}
module.exports = new MailinatorPage_Locator();
