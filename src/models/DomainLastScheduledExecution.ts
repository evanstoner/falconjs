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
 * @interface DomainLastScheduledExecution
 */
export interface DomainLastScheduledExecution {
    /**
     *
     * @type {string}
     * @memberof DomainLastScheduledExecution
     */
    id: string;
    /**
     *
     * @type {Date}
     * @memberof DomainLastScheduledExecution
     */
    searchWindowEnd?: Date;
    /**
     *
     * @type {Date}
     * @memberof DomainLastScheduledExecution
     */
    searchWindowStart?: Date;
    /**
     *
     * @type {string}
     * @memberof DomainLastScheduledExecution
     */
    statusDisplay: string;
}

/**
 * Check if a given object implements the DomainLastScheduledExecution interface.
 */
export function instanceOfDomainLastScheduledExecution(value: object): value is DomainLastScheduledExecution {
    if (!("id" in value) || value["id"] === undefined) return false;
    if (!("statusDisplay" in value) || value["statusDisplay"] === undefined) return false;
    return true;
}

export function DomainLastScheduledExecutionFromJSON(json: any): DomainLastScheduledExecution {
    return DomainLastScheduledExecutionFromJSONTyped(json, false);
}

export function DomainLastScheduledExecutionFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainLastScheduledExecution {
    if (json == null) {
        return json;
    }
    return {
        id: json["id"],
        searchWindowEnd: json["search_window_end"] == null ? undefined : new Date(json["search_window_end"]),
        searchWindowStart: json["search_window_start"] == null ? undefined : new Date(json["search_window_start"]),
        statusDisplay: json["status_display"],
    };
}

export function DomainLastScheduledExecutionToJSON(value?: DomainLastScheduledExecution | null): any {
    if (value == null) {
        return value;
    }
    return {
        id: value["id"],
        search_window_end: value["searchWindowEnd"] == null ? undefined : value["searchWindowEnd"].toISOString(),
        search_window_start: value["searchWindowStart"] == null ? undefined : value["searchWindowStart"].toISOString(),
        status_display: value["statusDisplay"],
    };
}