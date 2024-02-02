let regionTestData;

class regionTestDataSelector {
    async regionData() {
        const region = process.env.REGION;
        switch(region) {
            case 'US':
                regionTestData = require('../regionTestData/regions/us.js');
                break;
            case 'CA_EN':
                regionTestData = require('../regionTestData/regions/ca_en.js');
                break;
            case 'CA_FR':
                regionTestData = require('../regionTestData/regions/ca_fr.js');
                break;
            case 'UK':
                regionTestData = require('../regionTestData/regions/uk.js');
                break;
            case 'IE':
                regionTestData = require('../regionTestData/regions/ie.js');
                break;
            case 'DK':
                regionTestData = require('../regionTestData/regions/dk.js');
                break;
            case 'SW':
                regionTestData = require('../regionTestData/regions/sw.js');
                break;
            case 'NO':
                regionTestData = require('../regionTestData/regions/no.js');
                break;
            case 'FI':
                regionTestData = require('../regionTestData/regions/fi.js');
                break;
            case 'FR':
                regionTestData = require('../regionTestData/regions/fr.js');
                break;
            case 'BE_FR':
                regionTestData = require('../regionTestData/regions/be_fr.js');
                break;
            case 'BE_NL':
                regionTestData = require('../regionTestData/regions/be.js');
                break;
            case 'SP':
                regionTestData = require('../regionTestData/regions/sp');
                break;
            case 'IT':
                regionTestData = require('../regionTestData/regions/it.js');
                break;
            case 'MX':
                regionTestData = require('../regionTestData/regions/mx.js');
                break;
            case 'NL_BE':
                regionTestData = require('../regionTestData/regions/nl30.js');
                break;
            case 'NL':
                regionTestData = require('../regionTestData/regions/nl10.js');
                break;
            default:
                console.log('ERROR: Please enter a correct Region to start running a test');
                process.exit();
        }
        return regionTestData;
    }
}

module.exports = new regionTestDataSelector()
