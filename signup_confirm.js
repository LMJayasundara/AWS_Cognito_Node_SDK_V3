const { ConfirmSignUpCommand } = require("@aws-sdk/client-cognito-identity-provider");
const { initializeCognitoClient, calculateSecretHash } = require('./cognitoUtil');
const { handleCognitoSignUpConfirmErrors } = require('./cognitoErrors');
require('dotenv').config(); 

const cognitoClient = initializeCognitoClient();

const confirmSignUp = async (email, confirmationCode) => {
  const secretHash = calculateSecretHash(email);

  const command = new ConfirmSignUpCommand({
    ClientId: process.env.COGNITO_CLIENT_ID,
    Username: email,
    ConfirmationCode: confirmationCode,
    SecretHash: secretHash,
  });

  try {
    const data = await cognitoClient.send(command);
    console.log("User confirmed successfully!");
  } catch (error) {
    handleCognitoSignUpConfirmErrors(error);
  }
};

confirmSignUp('user@example.com', '791429');