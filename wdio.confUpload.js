let defaults
if(process.env.DEVICE_FARM) {
	defaults = require('./wdio.conf_device_farm.js').config;
} else {
	defaults = require('./wdio.conf.js').config;
}
let _ = require('lodash');

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
		upload: [
            './UnivarUI/TestSuite/zephyrUpload/uploadToZeyphr.js'
        ]
	},
	// Patterns to exclude.
	exclude: [

	],
}

exports.config = _.defaultsDeep(overrides, defaults);
