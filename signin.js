const { InitiateAuthCommand } = require("@aws-sdk/client-cognito-identity-provider");
const { initializeCognitoClient, calculateSecretHash } = require('./cognitoUtil');
const { handleCognitoSignInErrors } = require('./cognitoErrors');
require('dotenv').config(); 

const cognitoClient = initializeCognitoClient();

const signInUser = async (email, password) => {
  const secretHash = calculateSecretHash(email);

  const command = new InitiateAuthCommand({
    AuthFlow: 'USER_PASSWORD_AUTH',
    ClientId: process.env.COGNITO_CLIENT_ID,
    AuthParameters: {
      USERNAME: email,
      PASSWORD: password,
      SECRET_HASH: secretHash,
    }
  });

  try {
    const data = await cognitoClient.send(command);
    console.log("Sign-in successful!", data);
  } catch (error) {
    handleCognitoSignInErrors(error);
  }
};

signInUser('user@example.com', 'Password123!');