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
 * @interface ModelsExclusionCondition
 */
export interface ModelsExclusionCondition {
    /**
     *
     * @type {string}
     * @memberof ModelsExclusionCondition
     */
    createdAt?: string;
    /**
     *
     * @type {string}
     * @memberof ModelsExclusionCondition
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof ModelsExclusionCondition
     */
    op: string;
    /**
     *
     * @type {string}
     * @memberof ModelsExclusionCondition
     */
    prop: string;
    /**
     *
     * @type {number}
     * @memberof ModelsExclusionCondition
     */
    ttl?: number;
    /**
     *
     * @type {string}
     * @memberof ModelsExclusionCondition
     */
    updatedAt?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof ModelsExclusionCondition
     */
    value: Array<string>;
}

/**
 * Check if a given object implements the ModelsExclusionCondition interface.
 */
export function instanceOfModelsExclusionCondition(value: object): value is ModelsExclusionCondition {
    if (!("description" in value) || value["description"] === undefined) return false;
    if (!("op" in value) || value["op"] === undefined) return false;
    if (!("prop" in value) || value["prop"] === undefined) return false;
    if (!("value" in value) || value["value"] === undefined) return false;
    return true;
}

export function ModelsExclusionConditionFromJSON(json: any): ModelsExclusionCondition {
    return ModelsExclusionConditionFromJSONTyped(json, false);
}

export function ModelsExclusionConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsExclusionCondition {
    if (json == null) {
        return json;
    }
    return {
        createdAt: json["created_at"] == null ? undefined : json["created_at"],
        description: json["description"],
        op: json["op"],
        prop: json["prop"],
        ttl: json["ttl"] == null ? undefined : json["ttl"],
        updatedAt: json["updated_at"] == null ? undefined : json["updated_at"],
        value: json["value"],
    };
}

export function ModelsExclusionConditionToJSON(value?: ModelsExclusionCondition | null): any {
    if (value == null) {
        return value;
    }
    return {
        created_at: value["createdAt"],
        description: value["description"],
        op: value["op"],
        prop: value["prop"],
        ttl: value["ttl"],
        updated_at: value["updatedAt"],
        value: value["value"],
    };
}