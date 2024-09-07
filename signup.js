const { SignUpCommand } = require("@aws-sdk/client-cognito-identity-provider");
const { initializeCognitoClient, calculateSecretHash } = require('./cognitoUtil');
const { handleCognitoSignUpErrors } = require('./cognitoErrors');
require('dotenv').config(); // Load .env variables

const cognitoClient = initializeCognitoClient();

const signUpUser = async (email, password) => {
  const secretHash = calculateSecretHash(email);

  const command = new SignUpCommand({
    ClientId: process.env.COGNITO_CLIENT_ID,
    Username: email,
    Password: password,
    SecretHash: secretHash,
    UserAttributes: [{ Name: 'email', Value: email }],
  });

  try {
    const data = await cognitoClient.send(command);
    console.log("Sign-up successful! Check your email to verify your account.");
  } catch (error) {
    handleCognitoSignUpErrors(error);
  }
};

signUpUser('user@example.com', 'Password123!');