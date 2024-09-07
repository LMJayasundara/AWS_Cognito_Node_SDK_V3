// Handle errors during Cognito sign-up process
const handleCognitoSignUpErrors = (error) => {
  switch (error.name) {
    case 'CodeDeliveryFailureException':
      console.error('Verification code delivery failed. Please check the email address or try again later.');
      break;
    case 'ForbiddenException':
      console.error('Request is forbidden by WAF. Please check the web ACL or contact the administrator.');
      break;
    case 'InternalErrorException':
      console.error('Cognito encountered an internal error. Please try again later.');
      break;
    case 'InvalidEmailRoleAccessPolicyException':
      console.error('Cognito is not allowed to use your email identity. Please check your email settings.');
      break;
    case 'InvalidLambdaResponseException':
      console.error('Cognito received an invalid response from a Lambda trigger.');
      break;
    case 'InvalidParameterException':
      console.error('An invalid parameter was passed. Please check your input.');
      break;
    case 'InvalidPasswordException':
      console.error('The provided password does not meet Cognito password requirements.');
      break;
    case 'InvalidSmsRoleAccessPolicyException':
      console.error('The provided SMS role does not have permission to send messages using Amazon SNS.');
      break;
    case 'InvalidSmsRoleTrustRelationshipException':
      console.error('The SMS role trust relationship is not valid. Please check the role configuration.');
      break;
    case 'LimitExceededException':
      console.error('Request limit exceeded. Please try again later.');
      break;
    case 'NotAuthorizedException':
      console.error('You are not authorized to perform this action.');
      break;
    case 'ResourceNotFoundException':
      console.error('The specified resource could not be found.');
      break;
    case 'TooManyRequestsException':
      console.error('Too many requests have been made. Please slow down and try again later.');
      break;
    case 'UnexpectedLambdaException':
      console.error('Cognito encountered an unexpected exception with Lambda.');
      break;
    case 'UserLambdaValidationException':
      console.error('Cognito encountered a validation error with a Lambda trigger.');
      break;
    case 'UsernameExistsException':
      console.error('This username already exists. Please choose a different username.');
      break;
    case 'CognitoIdentityProviderServiceException':
      console.error('A general Cognito service exception occurred.');
      break;
    default:
      console.error('An unknown error occurred:', error);
  }
};

const handleCognitoSignUpConfirmErrors = (error) => {
  switch (error.name) {
    case 'AliasExistsException':
      console.error('An account with this email or phone number already exists. Please use a different one.');
      break;
    case 'CodeMismatchException':
      console.error('The confirmation code you provided does not match. Please try again.');
      break;
    case 'ExpiredCodeException':
      console.error('The confirmation code has expired. Please request a new code.');
      break;
    case 'TooManyFailedAttemptsException':
      console.error('Too many failed attempts. Please try again later.');
      break;
    case 'UserNotFoundException':
      console.error('No user found with the provided email.');
      break;
    default:
      console.error('An unknown error occurred during confirmation:', error);
  }
}

// Handle errors during Cognito sign-in process
const handleCognitoSignInErrors = (error) => {
  switch (error.name) {
    case 'ForbiddenException':
      console.error('Request forbidden by WAF. Please check web ACL or contact administrator.');
      break;
    case 'InternalErrorException':
      console.error('Cognito encountered an internal error. Please try again later.');
      break;
    case 'InvalidLambdaResponseException':
      console.error('Cognito received an invalid response from a Lambda trigger.');
      break;
    case 'InvalidParameterException':
      console.error('An invalid parameter was passed. Please check your input.');
      break;
    case 'InvalidSmsRoleAccessPolicyException':
      console.error('The provided SMS role does not have permission to publish using Amazon SNS.');
      break;
    case 'InvalidSmsRoleTrustRelationshipException':
      console.error('The SMS role trust relationship is not valid. Please check the role configuration.');
      break;
    case 'InvalidUserPoolConfigurationException':
      console.error('The user pool configuration is invalid. Please check your Cognito settings.');
      break;
    case 'NotAuthorizedException':
      console.error('Incorrect username or password. Please try again.');
      break;
    case 'PasswordResetRequiredException':
      console.error('Password reset required. Please reset your password.');
      break;
    case 'ResourceNotFoundException':
      console.error('The specified resource could not be found.');
      break;
    case 'TooManyRequestsException':
      console.error('Too many requests made. Please slow down and try again later.');
      break;
    case 'UnexpectedLambdaException':
      console.error('Cognito encountered an unexpected exception with Lambda.');
      break;
    case 'UserLambdaValidationException':
      console.error('Cognito encountered a validation error with a Lambda trigger.');
      break;
    case 'UserNotConfirmedException':
      console.error('User is not confirmed. Please check your email to confirm your account.');
      break;
    case 'UserNotFoundException':
      console.error('No user found with the provided email.');
      break;
    case 'CognitoIdentityProviderServiceException':
      console.error('A general Cognito service exception occurred.');
      break;
    default:
      console.error('An unknown error occurred:', error);
  }
};

// Handle errors during the resend confirmation code process
const handleResendCodeErrors = (error) => {
  switch (error.name) {
    case 'CodeDeliveryFailureException':
      console.error('Verification code delivery failed. Please check your email or contact support.');
      break;
    case 'ForbiddenException':
      console.error('Request forbidden by WAF. Please check web ACL or contact administrator.');
      break;
    case 'InternalErrorException':
      console.error('Cognito encountered an internal error. Please try again later.');
      break;
    case 'InvalidEmailRoleAccessPolicyException':
      console.error('Amazon Cognito is not allowed to use your email identity. Please check the email role configuration.');
      break;
    case 'InvalidLambdaResponseException':
      console.error('Amazon Cognito encountered an invalid response from a Lambda function.');
      break;
    case 'InvalidParameterException':
      console.error('An invalid parameter was passed. Please check your input.');
      break;
    case 'InvalidSmsRoleAccessPolicyException':
      console.error('The provided SMS role does not have permission to publish using Amazon SNS.');
      break;
    case 'InvalidSmsRoleTrustRelationshipException':
      console.error('The trust relationship for the SMS role is not valid. Please check the SMS role configuration.');
      break;
    case 'LimitExceededException':
      console.error('Request limit exceeded. Please try again later.');
      break;
    case 'NotAuthorizedException':
      console.error('You are not authorized to perform this action. Please check your credentials.');
      break;
    case 'ResourceNotFoundException':
      console.error('The requested resource could not be found.');
      break;
    case 'TooManyRequestsException':
      console.error('Too many requests have been made. Please slow down and try again later.');
      break;
    case 'UnexpectedLambdaException':
      console.error('An unexpected exception occurred with a Lambda function. Please try again later.');
      break;
    case 'UserLambdaValidationException':
      console.error('A user validation error occurred with a Lambda function. Please contact support.');
      break;
    case 'UserNotFoundException':
      console.error('No user found with the provided email.');
      break;
    case 'CognitoIdentityProviderServiceException':
      console.error('A general Cognito service error occurred. Please try again later.');
      break;
    default:
      console.error(`An unknown error occurred: ${error.message}`);
  }
};

// Handle errors during password reset initiation process
const handlePasswordResetErrors = (error) => {
  switch (error.name) {
    case 'CodeDeliveryFailureException':
      console.error('Verification code delivery failed. Please check the email address.');
      break;
    case 'ForbiddenException':
      console.error('Request blocked by WAF. Contact your administrator.');
      break;
    case 'InternalErrorException':
      console.error('Internal server error. Please try again later.');
      break;
    case 'InvalidEmailRoleAccessPolicyException':
      console.error('Cognito is not authorized to use your email identity. Please check your email configuration.');
      break;
    case 'InvalidParameterException':
      console.error('Invalid input. Please check your parameters.');
      break;
    case 'LimitExceededException':
      console.error('Attempt limit exceeded. Please try again later.');
      break;
    case 'NotAuthorizedException':
      console.error('Not authorized to perform this action.');
      break;
    case 'ResourceNotFoundException':
      console.error('The requested resource was not found.');
      break;
    case 'TooManyRequestsException':
      console.error('Too many requests. Please slow down and try again later.');
      break;
    case 'UserNotFoundException':
      console.error('No user found with the provided email.');
      break;
    default:
      console.error('An unknown error occurred:', error);
  }
};

// Handle errors during password reset confirmation process
const handleConfirmPasswordErrors = (error) => {
  switch (error.name) {
    case 'CodeMismatchException':
      console.error('The confirmation code you entered is incorrect.');
      break;
    case 'ExpiredCodeException':
      console.error('The confirmation code has expired. Please request a new code.');
      break;
    case 'ForbiddenException':
      console.error('Request blocked by WAF. Contact your administrator.');
      break;
    case 'InvalidParameterException':
      console.error('Invalid input. Please check your parameters.');
      break;
    case 'InvalidPasswordException':
      console.error('The new password does not meet the requirements.');
      break;
    case 'LimitExceededException':
      console.error('Attempt limit exceeded. Please try again later.');
      break;
    case 'PasswordHistoryPolicyViolationException':
      console.error('Your new password cannot be the same as any of your previous passwords.');
      break;
    case 'TooManyFailedAttemptsException':
      console.error('Too many failed attempts. Please try again later.');
      break;
    case 'TooManyRequestsException':
      console.error('Too many requests. Please slow down and try again later.');
      break;
    case 'UserNotConfirmedException':
      console.error('User is not confirmed. Please confirm your account first.');
      break;
    case 'UserNotFoundException':
      console.error('No user found with the provided email.');
      break;
    default:
      console.error('An unknown error occurred:', error);
  }
};

module.exports = {
  handleCognitoSignUpErrors,
  handleCognitoSignUpConfirmErrors,
  handleCognitoSignInErrors,
  handleResendCodeErrors,
  handlePasswordResetErrors,
  handleConfirmPasswordErrors,
};