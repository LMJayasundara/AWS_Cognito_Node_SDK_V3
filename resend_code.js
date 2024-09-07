const { ResendConfirmationCodeCommand } = require("@aws-sdk/client-cognito-identity-provider");
const { initializeCognitoClient, calculateSecretHash } = require('./cognitoUtil');
const { handleResendCodeErrors } = require('./cognitoErrors');
require('dotenv').config(); 

const cognitoClient = initializeCognitoClient();

const resendCode = async (email) => {
  const secretHash = calculateSecretHash(email);

  const command = new ResendConfirmationCodeCommand({
    ClientId: process.env.COGNITO_CLIENT_ID,
    Username: email,
    SecretHash: secretHash,
  });

  try {
    const data = await cognitoClient.send(command);
    console.log("Code resent successfully!", data);
  } catch (error) {
    handleResendCodeErrors(error);
  }
};

resendCode('user@example.com');