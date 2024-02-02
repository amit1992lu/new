class Privacy_Setting_Locator{
    constructor() {
        this.CURRENT_PASSWORD = '#current-password-download';
        this.DELETE_RADIO = '.field.control.custom-checkbox [for="amgdpr-delete"]';
        this.DOWNLOAD_PERSONAL_DATA_BUTTON = '[action*="/downloadCsv/"] .actions-toolbar.amgdpr-actions-toolbar';
        this.MERGE_INTO_ONE_FILE_RADIO = '.field.control.custom-checkbox [for="amgdpr-download"]';
        this.SUBMIT_DELETE_REQUEST_BUTTON = '[action*="/addDeleteRequest/"] .actions-toolbar.amgdpr-actions-toolbar';

    }
}
module.exports = new Privacy_Setting_Locator();
