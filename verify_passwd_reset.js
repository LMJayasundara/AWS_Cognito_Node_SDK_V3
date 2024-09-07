const { ForgotPasswordCommand } = require("@aws-sdk/client-cognito-identity-provider");
const { initializeCognitoClient, calculateSecretHash } = require('./cognitoUtil');
const { handlePasswordResetErrors } = require('./cognitoErrors');
require('dotenv').config(); 

const cognitoClient = initializeCognitoClient();

const initiatePasswordReset = async (email) => {
  const secretHash = calculateSecretHash(email);

  const command = new ForgotPasswordCommand({
    ClientId: process.env.COGNITO_CLIENT_ID,
    Username: email,
    SecretHash: secretHash,
  });

  try {
    const data = await cognitoClient.send(command);
    console.log("Password reset initiated. Check your email for the confirmation code.");
  } catch (error) {
    handlePasswordResetErrors(error);
  }
};

initiatePasswordReset('user@example.com');