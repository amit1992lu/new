const AWS = require('aws-sdk');
const { getSecret } = require('./aws-secret-manager');
let gridTarget;

class AwsDeviceFarmService {

    async getGridTarget(env) {
        const secretResponse = await getSecret('digital-qa-automation-test');
        if(process.env.ENV === 'PROD') {
            return await secretResponse['UNIVAR_GRID_PROD']
        } else if (env === 'QA') {
            return await secretResponse['UNIVAR_GRID_QA']
        } else {
            return await secretResponse['UNIVAR_GRID_DEV4']
        }
    }

    constructor() {
        this.devicefarm = new AWS.DeviceFarm({ region: 'us-west-2' })
    }

    async onPrepare(config, capabilities) {
        this.projectArn = await this.getGridTarget(process.env.ENV)
        return new Promise((resolve, reject) => this.devicefarm.createTestGridUrl({
            projectArn: this.projectArn,
            expiresInSeconds: 1200
        }, (err, createTestGridUrlResult) => {
            if (err) {
                console.log(reject(err))
            }
            process.env.AWS_DEVICE_FARM_SERVICE_TEST_GRID_URL  = createTestGridUrlResult.url

            resolve()
        }))
    }

    async beforeSession(config, capabilities, specs) {
        return new Promise((resolve, reject) => {

            // Set the default connection timeout to at least 3 minutes
            config.connectionRetryTimeout = 180000 // millis

            const testGridUrl = new URL(process.env.AWS_DEVICE_FARM_SERVICE_TEST_GRID_URL)
            config.protocol = 'https'
            config.hostname = testGridUrl.host
            config.path = testGridUrl.pathname
            config.port = 443

            resolve()
        })
    }

}

module.exports = AwsDeviceFarmService
