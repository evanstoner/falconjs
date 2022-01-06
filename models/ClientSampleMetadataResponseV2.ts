/* tslint:disable */
/* eslint-disable */
/**
 * CrowdStrike API Specification
 * Use this API specification as a reference for the API endpoints you can use to interact with your Falcon environment. These endpoints support authentication via OAuth2 and interact with detections and network containment. For detailed usage guides and more information about API endpoints that don\'t yet support OAuth2, see our [documentation inside the Falcon console](https://falcon.crowdstrike.com/support/documentation). To use the APIs described below, combine the base URL with the path shown for each API endpoint. For commercial cloud customers, your base URL is `https://api.crowdstrike.com`. Each API endpoint requires authorization via an OAuth2 token. Your first API request should retrieve an OAuth2 token using the `oauth2/token` endpoint, such as `https://api.crowdstrike.com/oauth2/token`. For subsequent requests, include the OAuth2 token in an HTTP authorization header. Tokens expire after 30 minutes, after which you should make a new token request to continue making API requests.
 *
 * The version of the OpenAPI document: rolling
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ClientSampleMetadataV2,
    ClientSampleMetadataV2FromJSON,
    ClientSampleMetadataV2FromJSONTyped,
    ClientSampleMetadataV2ToJSON,
} from './ClientSampleMetadataV2';
import {
    MsaAPIError,
    MsaAPIErrorFromJSON,
    MsaAPIErrorFromJSONTyped,
    MsaAPIErrorToJSON,
} from './MsaAPIError';
import {
    MsaMetaInfo,
    MsaMetaInfoFromJSON,
    MsaMetaInfoFromJSONTyped,
    MsaMetaInfoToJSON,
} from './MsaMetaInfo';

/**
 * 
 * @export
 * @interface ClientSampleMetadataResponseV2
 */
export interface ClientSampleMetadataResponseV2 {
    /**
     * 
     * @type {Array<MsaAPIError>}
     * @memberof ClientSampleMetadataResponseV2
     */
    errors: Array<MsaAPIError>;
    /**
     * 
     * @type {MsaMetaInfo}
     * @memberof ClientSampleMetadataResponseV2
     */
    meta: MsaMetaInfo;
    /**
     * 
     * @type {Array<ClientSampleMetadataV2>}
     * @memberof ClientSampleMetadataResponseV2
     */
    resources: Array<ClientSampleMetadataV2>;
}

export function ClientSampleMetadataResponseV2FromJSON(json: any): ClientSampleMetadataResponseV2 {
    return ClientSampleMetadataResponseV2FromJSONTyped(json, false);
}

export function ClientSampleMetadataResponseV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): ClientSampleMetadataResponseV2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'errors': ((json['errors'] as Array<any>).map(MsaAPIErrorFromJSON)),
        'meta': MsaMetaInfoFromJSON(json['meta']),
        'resources': ((json['resources'] as Array<any>).map(ClientSampleMetadataV2FromJSON)),
    };
}

export function ClientSampleMetadataResponseV2ToJSON(value?: ClientSampleMetadataResponseV2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'errors': ((value.errors as Array<any>).map(MsaAPIErrorToJSON)),
        'meta': MsaMetaInfoToJSON(value.meta),
        'resources': ((value.resources as Array<any>).map(ClientSampleMetadataV2ToJSON)),
    };
}

