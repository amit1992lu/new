const fs = require('fs');
const path = require('path');
const xmlbuilder = require('xmlbuilder');

import WDIOReporter from '@wdio/reporter';

export default class CustomReporter extends WDIOReporter {
    constructor(options) {
        options = Object.assign(options, { stdout: true })
        super(options);
        this.suitePassing = true;
        this.xml = xmlbuilder.create('testsuites');
        this.currentSuite = null;
        this.failedBeforeHook = false;
    }

    onSuiteStart(suite) {
        this.currentSuite = this.xml.ele('testsuite', {
            name: suite.title,
            tests: suite.tests.length,
            failures: 0,
            errors: 0,
            skipped: 0,
        });
    }

    onHookEnd(hook) {
        if(hook.errors.length > 0 && hook.type === 'hook') {
            let parentErrors = hook.error;
            if(parentErrors && parentErrors.type === 'Error') {
                const testCase = this.currentSuite.ele('testcase', {
                    name: hook.parent,
                    time: 0
                });
                testCase.ele('failure', {
                    'type': 'AssertionError',
                }, hook.title + ' ' + hook.error.stack);
            }
        }
        this.suitePassing = false;
    }

    onTestFail(test) {
        this.suitePassing = false;
        const testCase = this.currentSuite.ele('testcase', {
            className: test.title,
            name: test.parent,
            time: test.duration / 1000,
        });
        testCase.ele('failure', {
            'type': 'AssertionError',
        }, test.title + ' ' + test.error.stack);
    }

    onTestPass(test) {
        this.suitePassing = true;
    }

    onSuiteEnd(suite) {
        this.currentSuite.att('time', suite.duration / 1000);
        if (this.suitePassing) {
            const testCase = this.currentSuite.ele('testcase', {
                className: suite.title,
                name: suite.fullTitle,
                time: suite.duration / 1000,
            });
        }
        this.suitePassing = false;
    }

    onRunnerEnd(runner) {
        fs.writeFileSync(path.join(__dirname, `./customReport/results-${runner.cid}${new Date().getTime()}.xml`), this.xml.end({ pretty: true}));
    }
}

module.exports = CustomReporter;
