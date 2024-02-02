let defaults
if(process.env.DEVICE_FARM) {
	defaults = require('../wdio.conf_device_farm.js').config;
} else {
	defaults = require('./wdio.conf_online_local').config;
}
let _ = require('lodash');
const { getSecret } = require('../aws-secret-manager.js');

let overrides = {
	// ==================
	// Specify Test Files
	// ==================
	// Define which test specs should run. The pattern is relative to the directory
	// from which `wdio` was called.
	//
	// The specs are defined as an array of spec files (optionally using wildcards
	// that will be expanded). The test for each spec file will be run in a separate
	// worker process. In order to have a group of spec files run in the same worker
	// process simply enclose them in an array within the specs array.
	//
	// If you are calling `wdio` from an NPM script (see https://docs.npmjs.com/cli/run-script),
	// then the current working directory is where your `package.json` resides, so `wdio`
	// will be called from there.
	//

	suites: {
		smoke: [
			'../OnlineOrderBuilder/test/onlineOrderBuilderGetOrderUrl.js',
			'../OnlineOrderBuilder/test/onlineOrderBuilderInvalidSoldto.js'
		],
		prod_smoke: [
		],
	},
	// Patterns to exclude.
	exclude: [
	],

    beforeSession: async function () {
		let deviceFarm;
		let deviceFarmInfo;
		const secretResponse = await getSecret('digital-qa-automation-test');
		if (process.env.ENV === 'PROD') {
			global.slackChannel = process.env.SLACK_CHANNEL_ONLINE_PROD
            //await secretResponse['SLACK_CHANNEL_PROD'];
			deviceFarm = ''
            //await secretResponse['UNIVAR_GRID_PROD'];
			deviceFarmInfo = deviceFarm.split(':')
			global.deviceFarmProject = deviceFarmInfo[6]
		} else {
			global.slackChannel = process.env.SLACK_CHANNEL_ONLINE_QA
            //await secretResponse['SLACK_CHANNEL_DEV'];
			deviceFarm = ''
            //await secretResponse['UNIVAR_GRID_DEV4'];
			deviceFarmInfo = deviceFarm.split(':')
			global.deviceFarmProject = deviceFarmInfo[6]
		}
	},
}
exports.config = _.defaultsDeep(overrides, defaults);
