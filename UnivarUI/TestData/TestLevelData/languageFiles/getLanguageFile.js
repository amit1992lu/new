class GetLanguageFile {
	getLanguageFile() {
		let languageFile;
		switch (process.env.REGION) {
			case 'UK':
			case 'FI':
			case 'IE':
			case 'DK':
			case 'NO':
			case 'SE': {
				languageFile = require('../languageFiles/CommonUKEnglishMessage');
				break;
			}
			case 'CA_EN':
			case 'US': {
				languageFile = require('../languageFiles/CommonEnglishMessage');
				break;
			}
			case 'CA_FR': {
				languageFile = require('../languageFiles/CommonCanadaFrenchMessage');
				break;
			}
			case 'FR':
			case 'BE_FR': {
				languageFile = require('../languageFiles/CommonFrenchMessage');
				break;
			}

			case 'BE_NL':
			case 'NL_BE':
			case 'NL': {
				languageFile = require('../languageFiles/CommonBelgiumMessage');
				break;
			}

			case 'IT': {
				languageFile = require('../languageFiles/CommonItalianoMessage');
				break;
			}

			case 'MX': {
				languageFile = require('../languageFiles/CommonMexicoMessage');
				break;
			}

			case 'ES': {
				languageFile = require('../languageFiles/CommonSpainMessage');
				break;
			}

			case 'BR': {
				languageFile = require('../languageFiles/CommonPortugueseMessage');
				break;
			}

			default: {
				console.log('PLEASE ADD missing common test data for region ' + process.env.REGION);
				process.exit();
			}
		}
		return languageFile;
	}

	getCountryFullName() {
		let countryFullName;
		switch (process.env.REGION) {
			case 'US': {
				countryFullName = 'United States';
				break;
			}
			case 'CA_FR':
			case 'CA_EN': {
				countryFullName = 'Canada';
				break;
			}
			case 'UK': {
				countryFullName = 'United Kingdom';
				break;
			}
			case 'DK': {
				countryFullName = 'Denmark';
				break;
			}
			case 'FI': {
				countryFullName = 'Finland';
				break;
			}
			case 'SE': {
				countryFullName = 'Sweden';
				break;
			}
			case 'IE': {
				countryFullName = 'Ireland';
				break;
			}
			case 'NO': {
				countryFullName = 'Norway';
				break;
			}
			case 'FR': {
				countryFullName = 'France';
				break;
			}
			case 'BE_NL': {
				countryFullName = 'België';
				break;
			}
			case 'BE_FR': {
				countryFullName = 'Belgique';
				break;
			}
			case 'IT': {
				countryFullName = 'Italia';
				break;
			}
			case 'ES': {
				countryFullName = 'España';
				break;
			}
			case 'MX': {
				countryFullName = 'México';
				break;
			}
			case 'BR': {
				countryFullName = 'Brazil';
				break;
			}
			case 'NL':
			case 'NL_BE': {
				countryFullName = 'Nederland';
				break;
			}
			default: {
				console.log('PLEASE ADD missing common test data for region ' + process.env.REGION);
				process.exit();
			}
		}
		return countryFullName
	}

}

module.exports = new GetLanguageFile();
