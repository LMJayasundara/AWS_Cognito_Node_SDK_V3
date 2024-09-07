const { ConfirmForgotPasswordCommand } = require("@aws-sdk/client-cognito-identity-provider");
const { initializeCognitoClient, calculateSecretHash } = require('./cognitoUtil');
const { handleConfirmPasswordErrors } = require('./cognitoErrors');
require('dotenv').config(); 

const cognitoClient = initializeCognitoClient();

const confirmPasswordReset = async (email, confirmationCode, newPassword) => {
  const secretHash = calculateSecretHash(email);

  const command = new ConfirmForgotPasswordCommand({
    ClientId: process.env.COGNITO_CLIENT_ID,
    Username: email,
    ConfirmationCode: confirmationCode,
    Password: newPassword,
    SecretHash: secretHash,
  });

  try {
    const data = await cognitoClient.send(command);
    console.log("Password reset successful!", data);
  } catch (error) {
    handleConfirmPasswordErrors(error);
  }
};

confirmPasswordReset('user@example.com', '123456', 'NewPassword123!');