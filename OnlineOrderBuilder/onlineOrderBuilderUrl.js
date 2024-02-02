let urlTarget;
let env = process.env.ENV;


class url {
	url(env) {
		if(env === 'PROD') {
			// urlTarget =
		} else if (env === 'QA') {
			urlTarget = 'https://digitalsvc-qa.univarsolutions.com/digital-customer-lifecycle/orderbuilder';
		} else {
			urlTarget = 'https://digitalsvc-dev.univarsolutions.com/digital-customer-lifecycle/orderbuilder';
		}
		return urlTarget;
	}

}

module.exports = new url
