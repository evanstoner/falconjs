/* tslint:disable */
/* eslint-disable */
/**
 * CrowdStrike API Specification
 * Use this API specification as a reference for the API endpoints you can use to interact with your Falcon environment. These endpoints support authentication via OAuth2 and interact with detections and network containment. For detailed usage guides and examples, see our [documentation inside the Falcon console](https://falcon.crowdstrike.com/support/documentation).     To use the APIs described below, combine the base URL with the path shown for each API endpoint. For commercial cloud customers, your base URL is `https://api.crowdstrike.com`.    Each API endpoint requires authorization via an OAuth2 token. Your first API request should retrieve an OAuth2 token using the `oauth2/token` endpoint, such as `https://api.crowdstrike.com/oauth2/token`. For subsequent requests, include the OAuth2 token in an HTTP authorization header. Tokens expire after 30 minutes, after which you should make a new token request to continue making API requests.
 *
 * The version of the OpenAPI document: rolling
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from "../runtime";
import type { DomainConfigV1 } from "./DomainConfigV1";
import { DomainConfigV1FromJSON, DomainConfigV1FromJSONTyped, DomainConfigV1ToJSON } from "./DomainConfigV1";
import type { MsaAPIError } from "./MsaAPIError";
import { MsaAPIErrorFromJSON, MsaAPIErrorFromJSONTyped, MsaAPIErrorToJSON } from "./MsaAPIError";
import type { MsaMetaInfo } from "./MsaMetaInfo";
import { MsaMetaInfoFromJSON, MsaMetaInfoFromJSONTyped, MsaMetaInfoToJSON } from "./MsaMetaInfo";

/**
 *
 * @export
 * @interface DomainConfigsV1
 */
export interface DomainConfigsV1 {
    /**
     *
     * @type {Array<MsaAPIError>}
     * @memberof DomainConfigsV1
     */
    errors: Array<MsaAPIError>;
    /**
     *
     * @type {MsaMetaInfo}
     * @memberof DomainConfigsV1
     */
    meta: MsaMetaInfo;
    /**
     *
     * @type {Array<DomainConfigV1>}
     * @memberof DomainConfigsV1
     */
    resources: Array<DomainConfigV1>;
}

/**
 * Check if a given object implements the DomainConfigsV1 interface.
 */
export function instanceOfDomainConfigsV1(value: object): value is DomainConfigsV1 {
    if (!("errors" in value) || value["errors"] === undefined) return false;
    if (!("meta" in value) || value["meta"] === undefined) return false;
    if (!("resources" in value) || value["resources"] === undefined) return false;
    return true;
}

export function DomainConfigsV1FromJSON(json: any): DomainConfigsV1 {
    return DomainConfigsV1FromJSONTyped(json, false);
}

export function DomainConfigsV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainConfigsV1 {
    if (json == null) {
        return json;
    }
    return {
        errors: (json["errors"] as Array<any>).map(MsaAPIErrorFromJSON),
        meta: MsaMetaInfoFromJSON(json["meta"]),
        resources: (json["resources"] as Array<any>).map(DomainConfigV1FromJSON),
    };
}

export function DomainConfigsV1ToJSON(value?: DomainConfigsV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        errors: (value["errors"] as Array<any>).map(MsaAPIErrorToJSON),
        meta: MsaMetaInfoToJSON(value["meta"]),
        resources: (value["resources"] as Array<any>).map(DomainConfigV1ToJSON),
    };
}