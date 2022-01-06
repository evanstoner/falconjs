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

import { exists, mapValues } from "../runtime";
import { DomainBaseAPIVulnerabilityV2, DomainBaseAPIVulnerabilityV2FromJSON, DomainBaseAPIVulnerabilityV2FromJSONTyped, DomainBaseAPIVulnerabilityV2ToJSON } from "./DomainBaseAPIVulnerabilityV2";
import {
    DomainSPAPIQueryVulnerabilitiesMeta,
    DomainSPAPIQueryVulnerabilitiesMetaFromJSON,
    DomainSPAPIQueryVulnerabilitiesMetaFromJSONTyped,
    DomainSPAPIQueryVulnerabilitiesMetaToJSON,
} from "./DomainSPAPIQueryVulnerabilitiesMeta";
import { MsaAPIError, MsaAPIErrorFromJSON, MsaAPIErrorFromJSONTyped, MsaAPIErrorToJSON } from "./MsaAPIError";

/**
 *
 * @export
 * @interface DomainSPAPICombinedVulnerabilitiesResponse
 */
export interface DomainSPAPICombinedVulnerabilitiesResponse {
    /**
     *
     * @type {Array<MsaAPIError>}
     * @memberof DomainSPAPICombinedVulnerabilitiesResponse
     */
    errors?: Array<MsaAPIError>;
    /**
     *
     * @type {DomainSPAPIQueryVulnerabilitiesMeta}
     * @memberof DomainSPAPICombinedVulnerabilitiesResponse
     */
    meta: DomainSPAPIQueryVulnerabilitiesMeta;
    /**
     *
     * @type {Array<DomainBaseAPIVulnerabilityV2>}
     * @memberof DomainSPAPICombinedVulnerabilitiesResponse
     */
    resources: Array<DomainBaseAPIVulnerabilityV2>;
}

export function DomainSPAPICombinedVulnerabilitiesResponseFromJSON(json: any): DomainSPAPICombinedVulnerabilitiesResponse {
    return DomainSPAPICombinedVulnerabilitiesResponseFromJSONTyped(json, false);
}

export function DomainSPAPICombinedVulnerabilitiesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainSPAPICombinedVulnerabilitiesResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        errors: !exists(json, "errors") ? undefined : (json["errors"] as Array<any>).map(MsaAPIErrorFromJSON),
        meta: DomainSPAPIQueryVulnerabilitiesMetaFromJSON(json["meta"]),
        resources: (json["resources"] as Array<any>).map(DomainBaseAPIVulnerabilityV2FromJSON),
    };
}

export function DomainSPAPICombinedVulnerabilitiesResponseToJSON(value?: DomainSPAPICombinedVulnerabilitiesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        errors: value.errors === undefined ? undefined : (value.errors as Array<any>).map(MsaAPIErrorToJSON),
        meta: DomainSPAPIQueryVulnerabilitiesMetaToJSON(value.meta),
        resources: (value.resources as Array<any>).map(DomainBaseAPIVulnerabilityV2ToJSON),
    };
}