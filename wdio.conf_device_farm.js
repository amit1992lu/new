require('dotenv').config();
import CustomReporter from './customReporter';
const AwsDeviceFarmService = require('./devicefarm.service');
const SlackFailureReporter = '@moroo/wdio-slack-reporter';
const SlackReporter = require('./slackReporter');
const slackReporter = new SlackReporter();
const { getSecret } = require('./aws-secret-manager');
const REGION = process.env.REGION
const ENV = process.env.ENV


exports.config = {
	//
	// ====================
	// Runner Configuration
	// ====================
	//
	//
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
	// The number of times to retry the entire specfile when it fails as a whole
	specFileRetries: 1,

	//
	// ============
	// Capabilities
	// ============
	// Define your capabilities here. WebdriverIO can run multiple capabilities at the same
	// time. Depending on the number of capabilities, WebdriverIO launches several test
	// sessions. Within your capabilities you can overwrite the spec and exclude options in
	// order to group specific specs to a specific capability.
	//
	// First, you can define how many instances should be started at the same time. Let's
	// say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
	// set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
	// files and you set maxInstances to 10, all spec files will get tested at the same time
	// and 30 processes will get spawned. The property handles how many capabilities
	// from the same test should run tests.
	//
	maxInstances: 15,
	//
	// If you have trouble getting all important capabilities together, check out the
	// Sauce Labs platform configurator - a great tool to configure your capabilities:
	// https://docs.saucelabs.com/reference/platforms-configurator
	//
	capabilities: [{

		// maxInstances can get overwritten per capability. So if you have an in-house Selenium
		// grid with only 5 firefox instances available you can make sure that not more than
		// 5 instances get started at a time.
		maxInstances: 15,
		//
		browserName: 'chrome'
	}],
	//
	// ===================
	// Test Configurations
	// ===================
	// Define all options that are relevant for the WebdriverIO instance here
	//
	// Level of logging verbosity: trace | debug | info | warn | error | silent
	logLevel: 'warn',
	//
	// Set specific log levels per logger
	// loggers:
	// - webdriver, webdriverio
	// - @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
	// - @wdio/mocha-framework, @wdio/jasmine-framework
	// - @wdio/local-runner
	// - @wdio/sumologic-reporter
	// - @wdio/cli, @wdio/config, @wdio/utils
	// Level of logging verbosity: trace | debug | info | warn | error | silent
	// logLevels: {
	//     webdriver: 'info',
	//     '@wdio/appium-service': 'info'
	// },
	//
	// If you only want to run your tests until a specific amount of tests have failed use
	// bail (default is 0 - don't bail, run all tests).
	bail: 0,
	//
	// Set a base URL in order to shorten url command calls. If your `url` parameter starts
	// with `/`, the base url gets prepended, not including the path portion of your baseUrl.
	// If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
	// gets prepended directly.
	// baseUrl: url.getUrl(process.env.REGION, process.env.ENV),
	//
	// Default timeout for all waitFor* commands.
	waitforTimeout: 59000,
	//
	// Default timeout in milliseconds for request
	// if browser driver or grid doesn't send response
	connectionRetryTimeout: 60000,
	//
	// Default request retries count
	connectionRetryCount: 1,
	//
	// Test runner services
	// Services take over a specific job you don't want to take care of. They enhance
	// your test setup with almost no effort. Unlike plugins, they don't add new
	// commands. Instead, they hook themselves up into the test process.
	services: [[AwsDeviceFarmService]],

	// Framework you want to run your specs with.
	// The following are supported: Mocha, Jasmine, and Cucumber
	// see also: https://webdriver.io/docs/frameworks
	//
	// Make sure you have the wdio adapter package for the specific framework installed
	// before running any tests.
	framework: 'mocha',
	//
	//
	// Delay in seconds between the spec file retry attempts
	// specFileRetriesDelay: 0,
	//
	// Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
	// specFileRetriesDeferred: false,
	//
	// Test reporter for stdout.
	// The only one supported by default is 'dot'
	// see also: https://webdriver.io/docs/dot-reporter
	reporters: ['spec',
		[CustomReporter, {
			outputDir: './customReport',
		}],
		[SlackFailureReporter, {
			// Set the Slack Options used web-api.
			slackOptions: {
				type: 'web-api',
				slackBotToken: process.env.SLACK_BOT_TOKEN,
				channel: global.slackChannel,
				uploadScreenshotOfFailedCase: false,
				notifyDetailResultThread: process.env.SLACK_POST,
				notifyFailedCase: false,
				createResultDetailPayload: function (runnerStats, stateCounts) {
					if (runnerStats.retry === 1 && stateCounts.failed >= 1) {
						const suiteStats = this.getOrderedSuites()
						for (const testsStats of suiteStats) {
							const testStatsLog = testsStats.tests
							for (const testError of testStatsLog) {
								var testUid = testError.uid
								try {
									var errorStack = testError.error.stack
								} catch (error) {
									errorStack = 'ignoring this loop since this Test Stats has no error block'
								}
							}
						}
						const payload = {
							channel: global.slackChannel,
							text: `${this._title ? this._title + '\n' : ''}`,
							blocks: [
								...this.getResultDetailPayloads(),
								{
									type: 'section',
									text: {
										type: 'mrkdwn',
										text: '```' + errorStack + '```'
									},
								},
								{
									type: 'section',
									text: {
										type: 'mrkdwn',
										text: '<https://us-west-2.console.aws.amazon.com/devicefarm/home#/browser/projects/'+global.deviceFarmProject+'/runsselenium/logs/'+runnerStats.sessionId+'|AWS Session Video>'
									},
								},
							],
						};
						return payload;
					}
				}
			},
			// Set the Title of Test.
			title: 'Slack Reporter Test',
			// Set the notification of Test Start/Finished
			notifyTestStartMessage: false,
			notifyTestFinishMessage: process.env.SLACK_POST,
			notifyFailedCase: false,
			// Customize Slack Emoji Symbols.
			emojiSymbols: {
				passed: ':white_check_mark:',
				failed: ':x:',
				skipped: ':double_vertical_bar:',
				pending: ':grey_question:',
				start: ':rocket:',
				finished: ':checkered_flag:',
				watch: ':stopwatch:'
			},
			createResultPayload: function (TestStats, RunnerStats) {
				if (TestStats.retry === 1 && RunnerStats.failed >= 1) {
					const testResults = this.getOrderedSuites()
					for (const name of testResults) {
						var testName = name.title
					}
					const payload = {
						channel: global.slackChannel,
						text: `${this._symbols.finished} End of test${
							this._title ? ' - ' + this._title : ''
						}\n`,
						blocks: [
							{
								type: 'header',
								text: {
									type: 'plain_text',
									text: `${this._symbols.finished} ` + testName + ' running on the region - ' + process.env.REGION.toUpperCase() + ' - ' + ` ${this._symbols.watch} ${TestStats.duration / 1000}s `,
									emoji: true,
								},
							},
						],
						attachments: [
							{
								color: '#2e9dff',
								text: `*${this._symbols.passed} Passed: ${RunnerStats.passed} | ${this._symbols.failed} Failed: ${RunnerStats.failed} | ${this._symbols.skipped} Skipped: ${RunnerStats.skipped}*`,
								ts: Date.now().toString(),
							},
						],
					};
					return payload;
				}
			}
		}],
	],

	//
	// Options to be passed to Mocha.
	// See the full list at http://mochajs.org/
	mochaOpts: {
		ui: 'bdd',
		timeout: 60000,
		bail: true
	},
	//
	// =====
	// Hooks
	// =====
	// WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
	// it and to build services around it. You can either apply a single function or an array of
	// methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
	// resolved to continue.
	/**
	 * Gets executed once before all workers get launched.
	 * @param {Object} config wdio configuration object
	 * @param {Array.<Object>} capabilities list of capabilities details
	 */
	onPrepare: function (config, capabilities) {
		if(process.env.ENV === 'PROD' && (config.suite[0] === 'smoke' || config.suite[0] === 'service_smoke_test' || config.suite[0] === 'smoke_uk_ie')) {
			console.log('ERROR: Please don\'t run the full smoke suite on PROD. Change your variable on the command line')
			process.exit()
		}
	},
	/**
	 * Gets executed before a worker process is spawned and can be used to initialise specific service
	 * for that worker as well as modify runtime environments in an async fashion.
	 * @param  {String} cid      capability id (e.g 0-0)
	 * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
	 * @param  {[type]} specs    specs to be run in the worker process
	 * @param  {[type]} args     object that will be merged with the main configuration once worker is initialised
	 * @param  {[type]} execArgv list of string arguments passed to the worker process
	 */
	// onWorkerStart: function (cid, caps, specs, args, execArgv) {
	// },
	/**
	 * Gets executed just before initialising the webdriver session and test framework. It allows you
	 * to manipulate configurations depending on the capability or spec.
	 * @param {Object} config wdio configuration object
	 * @param {Array.<Object>} capabilities list of capabilities details
	 * @param {Array.<String>} specs List of spec file paths that are to be run
	 * @param {String} cid worker id (e.g. 0-0)
	 */
	beforeSession: async function () {
		let deviceFarm;
		let deviceFarmInfo;
		const secretResponse = await getSecret('digital-qa-automation-test');
		if (ENV === 'PROD') {
			global.slackChannel = await secretResponse['SLACK_CHANNEL_PROD'];
			deviceFarm = await secretResponse['UNIVAR_GRID_PROD'];
			deviceFarmInfo = deviceFarm.split(':')
			global.deviceFarmProject = deviceFarmInfo[6]
		} else if (ENV === 'DEV') {
			global.slackChannel = await secretResponse['SLACK_CHANNEL_DEV'];
			deviceFarm = await secretResponse['UNIVAR_GRID_DEV4'];
			deviceFarmInfo = deviceFarm.split(':')
			global.deviceFarmProject = deviceFarmInfo[6]
		} else {
			global.slackChannel = await secretResponse['SLACK_CHANNEL_QA'];
			deviceFarm = await secretResponse['UNIVAR_GRID_QA'];
			deviceFarmInfo = deviceFarm.split(':')
			global.deviceFarmProject = deviceFarmInfo[6]
		}
	},
	/**
	 * Gets executed before test execution begins. At this point you can access to all global
	 * variables like `browser`. It is the perfect place to define custom commands.
	 * @param {Array.<Object>} capabilities list of capabilities details
	 * @param {Array.<String>} specs        List of spec file paths that are to be run
	 * @param {Object}         browser      instance of created browser/device session
	 */
	before: async function (capabilities, specs) {
		const chai = require('chai')
		global.expect = chai.expect;
	},
	/**
	 * Runs before a WebdriverIO command gets executed.
	 * @param {String} commandName hook command name
	 * @param {Array} args arguments that command would receive
	 */
	// beforeCommand: function (commandName, args) {
	// },
	/**
	 * Hook that gets executed before the suite starts
	 * @param {Object} suite suite details
	 */
	// beforeSuite: function (suite) {
	// },
	/**
	 * Function to be executed before a test (in Mocha/Jasmine) starts.
	 */
	beforeTest: function (test, context) {
		global.EMEA_REGION = ['SE', 'NO', 'FI', 'DK', 'FR', 'UK', 'IE', 'NL', 'NL_BE', 'BE', 'BE_FR', 'IT'];
		global.MX_REGION = 'MX'
		global.US_REGION = 'US'
		global.CA_REGION = ['CA_EN', 'CA_FR']
	},
	/**
	 * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
	 * beforeEach in Mocha)
	 */
	// beforeHook: function (test, context) {
	// },
	/**
	 * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
	 * afterEach in Mocha)
	 */
	// afterHook: function (test, context, { error, result, duration, passed, retries }) {
	// },
	/**
	 * Function to be executed after a test (in Mocha/Jasmine).
	 */
	//  afterTest: function(test, context, result) {
	// },


	/**
	 * Hook that gets executed after the suite has ended
	 * @param {Object} suite suite details
	 */
	// afterSuite: function (suite) {
	// },
	/**
	 * Runs after a WebdriverIO command gets executed
	 * @param {String} commandName hook command name
	 * @param {Array} args arguments that command would receive
	 * @param {Number} result 0 - command success, 1 - command error
	 * @param {Object} error error object if any
	 */
	// afterCommand: function (commandName, args, result, error) {
	// },
	/**
	 * Gets executed after all tests are done. You still have access to all global variables from
	 * the test.
	 * @param {Number} result 0 - test pass, 1 - test fail
	 * @param {Array.<Object>} capabilities list of capabilities details
	 * @param {Array.<String>} specs List of spec file paths that ran
	 */
	// after: async function (result, capabilities, specs) {
	// },
	/**
	 * Gets executed right after terminating the webdriver session.
	 * @param {Object} config wdio configuration object
	 * @param {Array.<Object>} capabilities list of capabilities details
	 * @param {Array.<String>} specs List of spec file paths that ran
	 */
	// afterSession: function (config, capabilities, specs) {
	// },
	/**
	 * Gets executed after all workers got shut down and the process is about to exit. An error
	 * thrown in the onComplete hook will result in the test run failing.
	 * @param {Object} exitCode 0 - success, 1 - fail
	 * @param {Object} config wdio configuration object
	 * @param {Array.<Object>} capabilities list of capabilities details
	 * @param {<Object>} results object containing test results
	 */
	onComplete: async function (exitCode, config, capabilities, results) {
		if (process.env.SLACK_POST) {
			await slackReporter.sendPostMessage(config.suite[0], results);
		}
	},
	/**
	 * Gets executed when a refresh happens.
	 * @param {String} oldSessionId session ID of the old session
	 * @param {String} newSessionId session ID of the new session
	 */
	//onReload: function(oldSessionId, newSessionId) {
	//}
}
