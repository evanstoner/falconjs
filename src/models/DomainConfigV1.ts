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
/**
 *
 * @export
 * @interface DomainConfigV1
 */
export interface DomainConfigV1 {
    /**
     * App ID of the configuration
     * @type {string}
     * @memberof DomainConfigV1
     */
    appId: string;
    /**
     *
     * @type {object}
     * @memberof DomainConfigV1
     */
    config: object;
    /**
     * ID of the configuration
     * @type {string}
     * @memberof DomainConfigV1
     */
    configId: string;
    /**
     * Definition ID of the configuration
     * @type {string}
     * @memberof DomainConfigV1
     */
    definitionId: string;
    /**
     * The current state of the config
     * @type {string}
     * @memberof DomainConfigV1
     */
    state: string;
}

/**
 * Check if a given object implements the DomainConfigV1 interface.
 */
export function instanceOfDomainConfigV1(value: object): value is DomainConfigV1 {
    if (!("appId" in value) || value["appId"] === undefined) return false;
    if (!("config" in value) || value["config"] === undefined) return false;
    if (!("configId" in value) || value["configId"] === undefined) return false;
    if (!("definitionId" in value) || value["definitionId"] === undefined) return false;
    if (!("state" in value) || value["state"] === undefined) return false;
    return true;
}

export function DomainConfigV1FromJSON(json: any): DomainConfigV1 {
    return DomainConfigV1FromJSONTyped(json, false);
}

export function DomainConfigV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainConfigV1 {
    if (json == null) {
        return json;
    }
    return {
        appId: json["app_id"],
        config: json["config"],
        configId: json["config_id"],
        definitionId: json["definition_id"],
        state: json["state"],
    };
}

export function DomainConfigV1ToJSON(value?: DomainConfigV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        app_id: value["appId"],
        config: value["config"],
        config_id: value["configId"],
        definition_id: value["definitionId"],
        state: value["state"],
    };
}