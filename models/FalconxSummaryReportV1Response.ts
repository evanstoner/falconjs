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
    FalconxMetaInfo,
    FalconxMetaInfoFromJSON,
    FalconxMetaInfoFromJSONTyped,
    FalconxMetaInfoToJSON,
} from './FalconxMetaInfo';
import {
    FalconxSummaryReportV1,
    FalconxSummaryReportV1FromJSON,
    FalconxSummaryReportV1FromJSONTyped,
    FalconxSummaryReportV1ToJSON,
} from './FalconxSummaryReportV1';
import {
    MsaAPIError,
    MsaAPIErrorFromJSON,
    MsaAPIErrorFromJSONTyped,
    MsaAPIErrorToJSON,
} from './MsaAPIError';

/**
 * 
 * @export
 * @interface FalconxSummaryReportV1Response
 */
export interface FalconxSummaryReportV1Response {
    /**
     * 
     * @type {Array<MsaAPIError>}
     * @memberof FalconxSummaryReportV1Response
     */
    errors: Array<MsaAPIError>;
    /**
     * 
     * @type {FalconxMetaInfo}
     * @memberof FalconxSummaryReportV1Response
     */
    meta: FalconxMetaInfo;
    /**
     * 
     * @type {Array<FalconxSummaryReportV1>}
     * @memberof FalconxSummaryReportV1Response
     */
    resources: Array<FalconxSummaryReportV1>;
}

export function FalconxSummaryReportV1ResponseFromJSON(json: any): FalconxSummaryReportV1Response {
    return FalconxSummaryReportV1ResponseFromJSONTyped(json, false);
}

export function FalconxSummaryReportV1ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FalconxSummaryReportV1Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'errors': ((json['errors'] as Array<any>).map(MsaAPIErrorFromJSON)),
        'meta': FalconxMetaInfoFromJSON(json['meta']),
        'resources': ((json['resources'] as Array<any>).map(FalconxSummaryReportV1FromJSON)),
    };
}

export function FalconxSummaryReportV1ResponseToJSON(value?: FalconxSummaryReportV1Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'errors': ((value.errors as Array<any>).map(MsaAPIErrorToJSON)),
        'meta': FalconxMetaInfoToJSON(value.meta),
        'resources': ((value.resources as Array<any>).map(FalconxSummaryReportV1ToJSON)),
    };
}

