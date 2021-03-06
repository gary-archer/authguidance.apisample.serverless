# oauth.apisample.serverless

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/b880a7d88a7547009e950a513bc00046)](https://www.codacy.com/gh/gary-archer/oauth.apisample.serverless/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=gary-archer/oauth.apisample.serverless&amp;utm_campaign=Badge_Grade)

[![Known Vulnerabilities](https://snyk.io/test/github/gary-archer/oauth.apisample.serverless/badge.svg?targetFile=package.json)](https://snyk.io/test/github/gary-archer/oauth.apisample.serverless?targetFile=package.json)
 
### Overview
* A Low Cost Serverless API sample using OAuth and Open Id Connect, referenced in my blog at https://authguidance.com
* **The goal of this sample is to implement the blog's** [API Architecture](https://authguidance.com/2019/03/24/api-platform-design/) **via Serverless Lambdas**

### Details
* See the [Serverless API Setup](https://authguidance.com/2018/12/11/serverless-api-overview) for an overview and how to run the API
* See the [Serverless API Deployment](https://authguidance.com/2018/12/16/serverless-api-deployment/) write up for details on Cloud Hosting

### Programming Languages
* NodeJS, TypeScript and Serverless are used for the API

### API Middleware Used
* The [OpenId-Client Library](https://github.com/panva/node-openid-client) is used for OAuth remote calls
* The [Jsonwebtoken Library](https://github.com/auth0/node-jsonwebtoken) is used by the API to do in memory validation of access tokens
* [InversifyJS](http://inversify.io) is used to help manage class dependencies

### Cloud Infrastructure Used
* AWS Route 53 is used for hosting domains
* AWS Certificate Manager is used for the API SSL certificate
* AWS Cognito is used for the Authorization Server
* The AWS API Gateway is used as an SSL entry point to API operations
* AWS Lambda Functions are used for API Logic and OAuth authorization
* CloudWatch is used for immediate storage of API logs
* API logs can be aggregated to [Elastic Search](https://authguidance.com/2019/07/19/log-aggregation-setup/) to support common [Query Use Cases](https://authguidance.com/2019/08/02/intelligent-api-platform-analysis/)
