import {Container} from 'inversify';
import 'reflect-metadata';
import {BASETYPES, ResponseWriter} from '../../plumbing-base';
import {SampleApiClaims} from '../claims/sampleApiClaims';
import {LambdaConfiguration} from './startup/lambdaConfiguration';

/*
 * Our handler acts as a REST controller
 */
const container = new Container();
const baseHandler = async () => {

    // Get claims produced by the authorizer
    const claims = container.get<SampleApiClaims>(BASETYPES.CoreApiClaims);

    // Create the payload and return it
    const userInfo = {
        givenName: claims.givenName,
        familyName: claims.familyName,
        email: claims.email,
    };

    return ResponseWriter.objectResponse(200, userInfo);
};

// Create an enriched handler, which wires up middleware to run before the above handler
const configuration = new LambdaConfiguration(container);
const handler = configuration.enrichHandler(baseHandler);

// Export the handler to serverless.yml
export {handler};