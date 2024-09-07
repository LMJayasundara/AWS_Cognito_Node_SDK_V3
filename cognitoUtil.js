require('dotenv').config(); // Load environment variables
const crypto = require('crypto'); // For hashing
const { CognitoIdentityProviderClient } = require("@aws-sdk/client-cognito-identity-provider");

/**
 * Initialize the AWS Cognito Identity Provider Client
 */
const initializeCognitoClient = () => {
  return new CognitoIdentityProviderClient({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  });
};

/**
 * Calculate the secret hash for the given username
 * @param {string} username - The username (email)
 * @returns {string} The calculated secret hash
 */
const calculateSecretHash = (username) => {
  const clientSecret = process.env.COGNITO_CLIENT_SECRET;
  const clientId = process.env.COGNITO_CLIENT_ID;

  const hmac = crypto.createHmac('sha256', clientSecret);
  hmac.update(username + clientId);
  return hmac.digest('base64');
};

module.exports = {
  initializeCognitoClient,
  calculateSecretHash,
};