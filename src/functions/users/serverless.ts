import type { AWS } from '@serverless/typescript';

import hello from '@functions/hello';

const serverlessConfiguration: AWS = {
  service: 'users',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },
  plugins: ['serverless-webpack'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    // iam: {
    //   role: {
    //     statements: [{
    //       Effect: 'Allow',
    //       Action: [
    //         "dynamodb:DescribeTable",
    //         "dynamodb:Query",
    //         "dynamodb:Scan",
    //         "dynamodb:GetItem",
    //         "dynamodb:PutItem",
    //         "dynamodb:UpdateItem",
    //         "dynamodb:DeleteItem"
    //       ],
    //       Resource: "arn:aws:dynamodb:us-east-1:*:*"
    //     }]
    //   }
    // },
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions: { hello },
};

module.exports = serverlessConfiguration;