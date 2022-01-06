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
/**
 *
 * @export
 * @interface ApiTokenCreateRequestV1
 */
export interface ApiTokenCreateRequestV1 {
    /**
     * The token's expiration time (RFC-3339). Null, if the token never expires.
     * @type {Date}
     * @memberof ApiTokenCreateRequestV1
     */
    expiresTimestamp?: Date;
    /**
     * The token label.
     * @type {string}
     * @memberof ApiTokenCreateRequestV1
     */
    label?: string;
    /**
     * The token type.
     * @type {string}
     * @memberof ApiTokenCreateRequestV1
     */
    type?: string;
}

export function ApiTokenCreateRequestV1FromJSON(json: any): ApiTokenCreateRequestV1 {
    return ApiTokenCreateRequestV1FromJSONTyped(json, false);
}

export function ApiTokenCreateRequestV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiTokenCreateRequestV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        expiresTimestamp: !exists(json, "expires_timestamp") ? undefined : new Date(json["expires_timestamp"]),
        label: !exists(json, "label") ? undefined : json["label"],
        type: !exists(json, "type") ? undefined : json["type"],
    };
}

export function ApiTokenCreateRequestV1ToJSON(value?: ApiTokenCreateRequestV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        expires_timestamp: value.expiresTimestamp === undefined ? undefined : value.expiresTimestamp.toISOString(),
        label: value.label,
        type: value.type,
    };
}