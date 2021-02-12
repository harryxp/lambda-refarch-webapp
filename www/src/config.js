// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "7jn0k0tml175h73rod5ufv01bd",     // CognitoClientID
  "api_base_url": "https://tgtwzhjfle.execute-api.us-east-1.amazonaws.com/{StageNameParam}",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-lambda-refarch-webapp-sam-cli.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1q389a52ymlfh.amplifyapp.com"                                      // AmplifyURL
};

export default config;

