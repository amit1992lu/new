// secretsManager.js
const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' }); // Set your AWS region

const secretsManager = new AWS.SecretsManager();

async function getSecret(secretName) {
  try {
    const data = await secretsManager.getSecretValue({ SecretId: secretName }).promise();
    if ('SecretString' in data) {
      const secret = JSON.parse(data.SecretString);
      return secret;
    } else {
      throw new Error('Secret not found');
    }
  } catch (error) {
    console.error(`Error retrieving secret: ${error}`);
  }
}

module.exports = { getSecret };
