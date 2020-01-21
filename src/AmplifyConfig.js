import AWS from 'aws-sdk'

AWS.config.correctClockSkew = true

const amplifyConfig = {
  "aws_project_region": "us-east-1",
  "aws_cognito_identity_pool_id": "us-east-1:9e486a11-f40e-4277-83d2-9da4f5bf0ad1",
  "aws_cognito_region": process.env.REACT_APP_AWS_COGNITO_REGION,
  "aws_user_pools_id": process.env.REACT_APP_AWS_USER_POOLS_ID,
  "aws_user_pools_web_client_id": process.env.REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID,
  "oauth": {}
};

export default amplifyConfig;