const { IncomingWebhook } = require('@slack/webhook');
const { getSecret } = require('./aws-secret-manager');
let url;
const successColor = '#36a64f';
const failedColor = '#E51670';


class SlackReporter {

    async sendPostMessage(suite, results){
        const failed = results.failed > 0;
        const region = process.env.REGION;
        const env = process.env.ENV;
        const preMsg = `Test results for Univar Solutions: ${suite.toUpperCase()} suite on ${region.toUpperCase()} region site`;
        const postMsg = `*Number of Tests:* ${results.finished}
        \n*ENV:* ${env.toLocaleUpperCase()}     *Passed:* ${results.passed}
        \n*Failed:* ${results.failed}           *Retries:* ${results.retries}`;
        const color = failed ? failedColor : successColor;

        const postBody = {
            'text': failed,
            'attachments': [
                {
                    'title': preMsg,
                    'text': postMsg,
                    'color': color,
                    'attachment_type': 'default'
                }
            ]
        };

        await this.sendMessage(postBody);
    }

    async getUrl() {
        const secretResponse = await getSecret('digital-qa-automation-test');
        if(process.env.ENV === 'PROD') {
            url = secretResponse['SLACK_HOOK_PROD'];
        } else if(process.env.ENV === 'DEV'){
            url = secretResponse['SLACK_HOOK_DEV'];
        }else {
            url = secretResponse['SLACK_HOOK_QA'];
        }
        return url;
    }

    async getOnlineOrderUrl() {
        const secretResponse = await getSecret('digital-qa-automation-test');
        if(process.env.ENV === 'PROD') {
            url = process.env.SLACK_HOOK_ONLINE_PROD
            //secretResponse['SLACK_HOOK_PROD'];
        } else {
            url = process.env.SLACK_HOOK_ONLINE_QA
            //secretResponse['SLACK_HOOK_QA'];
        }
        return url;
    }

    async sendMessage(body){
        let hook;
        if(process.env.ONLINE_BUILDER) {
            hook = await this.getOnlineOrderUrl();
        } else {
            hook = await this.getUrl();
        }
        const webhook = new IncomingWebhook(hook);
        await webhook.send(body);
    }
}
module.exports = SlackReporter;
