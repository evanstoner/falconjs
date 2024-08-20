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
 * @interface ModelsClusterWithFailedRules
 */
export interface ModelsClusterWithFailedRules {
    /**
     *
     * @type {number}
     * @memberof ModelsClusterWithFailedRules
     */
    _1: number;
    /**
     *
     * @type {number}
     * @memberof ModelsClusterWithFailedRules
     */
    _2: number;
    /**
     *
     * @type {number}
     * @memberof ModelsClusterWithFailedRules
     */
    _3: number;
    /**
     *
     * @type {number}
     * @memberof ModelsClusterWithFailedRules
     */
    _4: number;
    /**
     *
     * @type {string}
     * @memberof ModelsClusterWithFailedRules
     */
    clusterId: string;
    /**
     *
     * @type {string}
     * @memberof ModelsClusterWithFailedRules
     */
    clusterName: string;
}

/**
 * Check if a given object implements the ModelsClusterWithFailedRules interface.
 */
export function instanceOfModelsClusterWithFailedRules(value: object): value is ModelsClusterWithFailedRules {
    if (!("_1" in value) || value["_1"] === undefined) return false;
    if (!("_2" in value) || value["_2"] === undefined) return false;
    if (!("_3" in value) || value["_3"] === undefined) return false;
    if (!("_4" in value) || value["_4"] === undefined) return false;
    if (!("clusterId" in value) || value["clusterId"] === undefined) return false;
    if (!("clusterName" in value) || value["clusterName"] === undefined) return false;
    return true;
}

export function ModelsClusterWithFailedRulesFromJSON(json: any): ModelsClusterWithFailedRules {
    return ModelsClusterWithFailedRulesFromJSONTyped(json, false);
}

export function ModelsClusterWithFailedRulesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsClusterWithFailedRules {
    if (json == null) {
        return json;
    }
    return {
        _1: json["1"],
        _2: json["2"],
        _3: json["3"],
        _4: json["4"],
        clusterId: json["cluster_id"],
        clusterName: json["cluster_name"],
    };
}

export function ModelsClusterWithFailedRulesToJSON(value?: ModelsClusterWithFailedRules | null): any {
    if (value == null) {
        return value;
    }
    return {
        "1": value["_1"],
        "2": value["_2"],
        "3": value["_3"],
        "4": value["_4"],
        cluster_id: value["clusterId"],
        cluster_name: value["clusterName"],
    };
}