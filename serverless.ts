import type { AWS } from '@serverless/typescript';
import hello from '@functions/hello';
import greet from '@functions/greet';

const serverlessConfiguration: AWS = {
  service: 'serverlessnode',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },
  plugins: [
    'serverless-webpack', 
    'serverless-offline', 
    'serverless-reqvalidator-plugin', 
    'serverless-aws-documentation'
  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    stage: "dev",
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
  functions: { hello, greet },
  resources: {
    Resources: {
      
    }
  }
};

module.exports = serverlessConfiguration;