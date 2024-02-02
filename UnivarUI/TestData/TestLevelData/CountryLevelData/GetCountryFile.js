class GetCountryFile {

    getCountryFile() {
        let countryFile;
        switch (process.env.REGION) {
            case 'UK':
                countryFile = require('./Common_UK_Data.js');
                break;
            case 'DK':
                countryFile = require('./Common_DK_Data.js');
                break;
            case 'FI':
                countryFile = require('./Common_FI_Data.js');
                break;
            case 'NO':
                countryFile = require('./Common_NO_Data.js');
                break;
            case 'SE':
                countryFile = require('./Common_SE_Data.js');
                break;
            case 'IE':
                countryFile = require('./Common_IE_Data.js');
                break;
            case 'US':
                countryFile = require('./Common_US_Data.js');
                break;
            case 'CA_EN':
                countryFile = require('./Common_CA_EN_Data.js');
                break;
            case 'CA_FR':
                countryFile = require('./Common_CA_FR_Data.js');
                break;
            case 'FR':
                countryFile = require('./Common_FR_Data.js');
                break;
            case 'BE_NL':
                countryFile = require('./Common_BE_NL_Data.js');
                break;
            case 'BE_FR':
                countryFile = require('./Common_BE_FR_Data.js');
                break;
            case 'IT':
                countryFile = require('./Common_IT_Data.js');
                break;
            case 'ES':
                countryFile = require('./Common_ES_Data.js');
                break;
            case 'MX':
                countryFile = require('./Common_MX_Data.js');
                break;
            case 'BR':
                countryFile = require('./Common_BR_Data.js');
                break;
            case 'NL':
                countryFile = require('./Common_NL_Data.js');
                break;
            case 'NL_BE':
                countryFile = require('./Common_NL_BE_Data.js');
                break;

            default:
                console.log('PLEASE ADD missing common test data for region ' + process.env.REGION);
                process.exit();

        }
        return countryFile;
    }
}
module.exports = new GetCountryFile();
