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
import type { ApiCertificateReqV1 } from "./ApiCertificateReqV1";
import { ApiCertificateReqV1FromJSON, ApiCertificateReqV1FromJSONTyped, ApiCertificateReqV1ToJSON } from "./ApiCertificateReqV1";

/**
 *
 * @export
 * @interface ApiCertBasedExclusionCreateReqV1
 */
export interface ApiCertBasedExclusionCreateReqV1 {
    /**
     *
     * @type {boolean}
     * @memberof ApiCertBasedExclusionCreateReqV1
     */
    appliedGlobally?: boolean;
    /**
     *
     * @type {ApiCertificateReqV1}
     * @memberof ApiCertBasedExclusionCreateReqV1
     */
    certificate?: ApiCertificateReqV1;
    /**
     *
     * @type {Array<string>}
     * @memberof ApiCertBasedExclusionCreateReqV1
     */
    childrenCids?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof ApiCertBasedExclusionCreateReqV1
     */
    comment?: string;
    /**
     *
     * @type {string}
     * @memberof ApiCertBasedExclusionCreateReqV1
     */
    createdBy?: string;
    /**
     *
     * @type {Date}
     * @memberof ApiCertBasedExclusionCreateReqV1
     */
    createdOn?: Date;
    /**
     *
     * @type {string}
     * @memberof ApiCertBasedExclusionCreateReqV1
     */
    description?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof ApiCertBasedExclusionCreateReqV1
     */
    hostGroups?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof ApiCertBasedExclusionCreateReqV1
     */
    modifiedBy?: string;
    /**
     *
     * @type {Date}
     * @memberof ApiCertBasedExclusionCreateReqV1
     */
    modifiedOn?: Date;
    /**
     *
     * @type {string}
     * @memberof ApiCertBasedExclusionCreateReqV1
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof ApiCertBasedExclusionCreateReqV1
     */
    status?: string;
}

/**
 * Check if a given object implements the ApiCertBasedExclusionCreateReqV1 interface.
 */
export function instanceOfApiCertBasedExclusionCreateReqV1(value: object): value is ApiCertBasedExclusionCreateReqV1 {
    if (!("name" in value) || value["name"] === undefined) return false;
    return true;
}

export function ApiCertBasedExclusionCreateReqV1FromJSON(json: any): ApiCertBasedExclusionCreateReqV1 {
    return ApiCertBasedExclusionCreateReqV1FromJSONTyped(json, false);
}

export function ApiCertBasedExclusionCreateReqV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiCertBasedExclusionCreateReqV1 {
    if (json == null) {
        return json;
    }
    return {
        appliedGlobally: json["applied_globally"] == null ? undefined : json["applied_globally"],
        certificate: json["certificate"] == null ? undefined : ApiCertificateReqV1FromJSON(json["certificate"]),
        childrenCids: json["children_cids"] == null ? undefined : json["children_cids"],
        comment: json["comment"] == null ? undefined : json["comment"],
        createdBy: json["created_by"] == null ? undefined : json["created_by"],
        createdOn: json["created_on"] == null ? undefined : new Date(json["created_on"]),
        description: json["description"] == null ? undefined : json["description"],
        hostGroups: json["host_groups"] == null ? undefined : json["host_groups"],
        modifiedBy: json["modified_by"] == null ? undefined : json["modified_by"],
        modifiedOn: json["modified_on"] == null ? undefined : new Date(json["modified_on"]),
        name: json["name"],
        status: json["status"] == null ? undefined : json["status"],
    };
}

export function ApiCertBasedExclusionCreateReqV1ToJSON(value?: ApiCertBasedExclusionCreateReqV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        applied_globally: value["appliedGlobally"],
        certificate: ApiCertificateReqV1ToJSON(value["certificate"]),
        children_cids: value["childrenCids"],
        comment: value["comment"],
        created_by: value["createdBy"],
        created_on: value["createdOn"] == null ? undefined : value["createdOn"].toISOString(),
        description: value["description"],
        host_groups: value["hostGroups"],
        modified_by: value["modifiedBy"],
        modified_on: value["modifiedOn"] == null ? undefined : value["modifiedOn"].toISOString(),
        name: value["name"],
        status: value["status"],
    };
}