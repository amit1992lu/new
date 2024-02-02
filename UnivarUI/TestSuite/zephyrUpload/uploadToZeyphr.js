const jobNames = require('./regionJobName')
import fetch from 'node-fetch';
var FormData = require('form-data');
var fs = require('fs');
let token;
let versionName = 'Sprint 5';
const { getSecret } = require('../../../aws-secret-manager');
let accessKey;
let secretKey;
let accountId;
const callVar = jobNames.jobName(process.env.REGION);

describe('Test API call', () => {
    before(async () => {
        if(process.env.DEVICE_FARM) {
            const secretResponse = await getSecret('digital-qa-automation-test');
            accessKey = await secretResponse['JIRA_ZEPHR_ACCESS']
            secretKey = await secretResponse['JIRA_ZEPHR_SECRET'];
            accountId = await secretResponse['JIRA_ZEPHR_ACCOUNT'];
        } else {
            accessKey = process.env.jira_zephr_access;
            secretKey = process.env.jira_zephr_secret;
            accountId = process.env.jira_zephr_account;
        }
    });

    if(process.env.ZEYPHR) {
        it('JWT token test', async () => {
            let univarBody = {
                accessKey: accessKey,
                secretKey: secretKey,
                accountId: accountId,
            }
            try {
                let response = await fetch('https://prod-vortexapi.zephyr4jiracloud.com/api/v1/jwt/generate', {
                    method: 'POST',
                    body: JSON.stringify(univarBody),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                token = await response.clone().text();
            } catch (error) {
                console.log(error)
            }
        });

        it('Update Automation Task', async () => {
            const filePath = './customReport/combined.xml';
            const formData = new FormData();
            const stats = fs.statSync(filePath);
            const fileSizeInBytes = stats.size;
            const fileStream = fs.createReadStream(filePath);
            formData.append('jobId',callVar[0]);
            formData.append('jobName',callVar[1]);
            formData.append('automationFramework','SELENIUM');
            formData.append('versionName',versionName);
            formData.append('cycleName', callVar[2]);
            formData.append('file', fileStream, { knownLength: fileSizeInBytes });
            formData.append('assigneeUser',accountId);
            formData.append('jobDescription','Upload via Api for ' + process.env.REGION + ' region Full Suite from Jenkins');
            try {
                let response = await fetch('https://prod-vortexapi.zephyr4jiracloud.com/api/v1/automation/job/update', {
                    method: 'PUT',
                    body: formData,
                    headers: {
                        accessKey: accessKey,
                        jwt: token
                    },
                });
            } catch (error) {
                console.log(error)
            }
        });

        it('Execute Automation Test', async () => {
            const formData = new FormData();
            formData.append('jobId',callVar[0]);
            try {
                let response = await fetch('https://prod-vortexapi.zephyr4jiracloud.com/api/v1/automation/job/execute', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        accessKey: accessKey,
                        jwt: token
                    },
                });
            } catch (error) {
                console.log(error)
            }
        });

    }
});
