import AWS from 'aws-sdk'

AWS.config.correctClockSkew = true

const amplifyConfig = {
  "aws_cognito_region": process.env.REACT_APP_AWS_COGNITO_REGION,
  "aws_user_pools_id": process.env.REACT_APP_AWS_USER_POOLS_ID,
  "aws_user_pools_web_client_id": process.env.REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID
};

export default amplifyConfig;