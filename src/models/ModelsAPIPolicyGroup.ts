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
import type { ModelsAPIPolicyGroupData } from "./ModelsAPIPolicyGroupData";
import { ModelsAPIPolicyGroupDataFromJSON, ModelsAPIPolicyGroupDataFromJSONTyped, ModelsAPIPolicyGroupDataToJSON } from "./ModelsAPIPolicyGroupData";

/**
 *
 * @export
 * @interface ModelsAPIPolicyGroup
 */
export interface ModelsAPIPolicyGroup {
    /**
     *
     * @type {string}
     * @memberof ModelsAPIPolicyGroup
     */
    createdAt: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIPolicyGroup
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIPolicyGroup
     */
    name: string;
    /**
     *
     * @type {ModelsAPIPolicyGroupData}
     * @memberof ModelsAPIPolicyGroup
     */
    policyGroupData?: ModelsAPIPolicyGroupData;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIPolicyGroup
     */
    policyUuid?: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIPolicyGroup
     */
    updatedAt: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIPolicyGroup
     */
    uuid: string;
}

/**
 * Check if a given object implements the ModelsAPIPolicyGroup interface.
 */
export function instanceOfModelsAPIPolicyGroup(value: object): value is ModelsAPIPolicyGroup {
    if (!("createdAt" in value) || value["createdAt"] === undefined) return false;
    if (!("description" in value) || value["description"] === undefined) return false;
    if (!("name" in value) || value["name"] === undefined) return false;
    if (!("updatedAt" in value) || value["updatedAt"] === undefined) return false;
    if (!("uuid" in value) || value["uuid"] === undefined) return false;
    return true;
}

export function ModelsAPIPolicyGroupFromJSON(json: any): ModelsAPIPolicyGroup {
    return ModelsAPIPolicyGroupFromJSONTyped(json, false);
}

export function ModelsAPIPolicyGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsAPIPolicyGroup {
    if (json == null) {
        return json;
    }
    return {
        createdAt: json["created_at"],
        description: json["description"],
        name: json["name"],
        policyGroupData: json["policy_group_data"] == null ? undefined : ModelsAPIPolicyGroupDataFromJSON(json["policy_group_data"]),
        policyUuid: json["policy_uuid"] == null ? undefined : json["policy_uuid"],
        updatedAt: json["updated_at"],
        uuid: json["uuid"],
    };
}

export function ModelsAPIPolicyGroupToJSON(value?: ModelsAPIPolicyGroup | null): any {
    if (value == null) {
        return value;
    }
    return {
        created_at: value["createdAt"],
        description: value["description"],
        name: value["name"],
        policy_group_data: ModelsAPIPolicyGroupDataToJSON(value["policyGroupData"]),
        policy_uuid: value["policyUuid"],
        updated_at: value["updatedAt"],
        uuid: value["uuid"],
    };
}