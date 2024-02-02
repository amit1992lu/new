const { getSecret } = require('./aws-secret-manager');
let urlTarget;
const env = process.env.ENV;

class url {

	async url(region) {
		let username;
		let password;
		if(process.env.DEVICE_FARM) {
			const secretResponse = await getSecret('digital-qa-automation-test');
			username = secretResponse['username'];
			password = secretResponse['password'];
		} else {
			username = process.env.QUSERNAME;
			password = process.env.QPASSWORD;
		}
		if(env === 'PROD') {
			urlTarget = 'https://www.univarsolutions.'
		} else if (env === 'QA') {
			urlTarget = 'https://' + username + ':' + password + '@shop-qa.univarsolutions.';
		} else {
			urlTarget = 'https://' + username + ':' + password + '@shop-dev4.univarsolutions.';
		}
		switch (region) {
			case 'US':
				urlTarget = urlTarget + 'com/'
				break;

			case 'CA_EN':
				urlTarget = urlTarget + 'com/ca/en/'
				break;

			case 'CA_FR':
				urlTarget = urlTarget + 'com/ca/fr/'
				break;

			case 'UK':
				urlTarget = urlTarget + 'co.uk/'
				break;

			case 'IE':
				urlTarget = urlTarget + 'ie/'
				break;

			case 'DK':
				urlTarget = urlTarget + 'dk/en/'
				break;

			case 'FI':
				urlTarget = urlTarget + 'fi/en/'
				break;

			case 'NO':
				urlTarget = urlTarget + 'no/en/'
				break;

			case 'SE':
				urlTarget = urlTarget + 'se/en/'
				break;

			case 'FR':
				urlTarget = urlTarget + 'fr/'
				break;

			case 'BE_NL':
				urlTarget = urlTarget + 'com/be/nl/'
				break;

			case 'BE_FR':
				urlTarget = urlTarget + 'com/be/fr/'
				break;

			case 'IT':
				urlTarget = urlTarget + 'it/'
				break;

			case 'ES':
				urlTarget = urlTarget + 'es/'
				break;

			case 'MX':
				urlTarget = urlTarget + 'com.mx/'
				break;

			case 'NL':
				urlTarget = urlTarget + 'com/nl/nl10/'
				break;

			case 'NL_BE':
				urlTarget = urlTarget + 'com/nl/nl30/'
				break;

			default:
				console.log('ERROR: Please to a correct Region to start running a test');
				process.exit();
		}

		return urlTarget;
	}

}

module.exports = new url
