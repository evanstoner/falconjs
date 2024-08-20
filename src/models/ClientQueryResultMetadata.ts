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
import type { ClientSpent } from "./ClientSpent";
import { ClientSpentFromJSON, ClientSpentFromJSONTyped, ClientSpentToJSON } from "./ClientSpent";
import type { ClientCosts } from "./ClientCosts";
import { ClientCostsFromJSON, ClientCostsFromJSONTyped, ClientCostsToJSON } from "./ClientCosts";
import type { ClientDigestFlow } from "./ClientDigestFlow";
import { ClientDigestFlowFromJSON, ClientDigestFlowFromJSONTyped, ClientDigestFlowToJSON } from "./ClientDigestFlow";

/**
 *
 * @export
 * @interface ClientQueryResultMetadata
 */
export interface ClientQueryResultMetadata {
    /**
     *
     * @type {ClientCosts}
     * @memberof ClientQueryResultMetadata
     */
    costs: ClientCosts;
    /**
     *
     * @type {ClientDigestFlow}
     * @memberof ClientQueryResultMetadata
     */
    digestFlow: ClientDigestFlow;
    /**
     *
     * @type {number}
     * @memberof ClientQueryResultMetadata
     */
    eventCount: number;
    /**
     *
     * @type {object}
     * @memberof ClientQueryResultMetadata
     */
    extraData: object;
    /**
     *
     * @type {Array<string>}
     * @memberof ClientQueryResultMetadata
     */
    fieldOrder: Array<string>;
    /**
     *
     * @type {boolean}
     * @memberof ClientQueryResultMetadata
     */
    isAggregate: boolean;
    /**
     *
     * @type {number}
     * @memberof ClientQueryResultMetadata
     */
    pollAfter: number;
    /**
     *
     * @type {number}
     * @memberof ClientQueryResultMetadata
     */
    processedBytes: number;
    /**
     *
     * @type {number}
     * @memberof ClientQueryResultMetadata
     */
    processedEvents: number;
    /**
     *
     * @type {number}
     * @memberof ClientQueryResultMetadata
     */
    queryEnd: number;
    /**
     *
     * @type {ClientSpent}
     * @memberof ClientQueryResultMetadata
     */
    querySpent: ClientSpent;
    /**
     *
     * @type {number}
     * @memberof ClientQueryResultMetadata
     */
    queryStart: number;
    /**
     *
     * @type {ClientSpent}
     * @memberof ClientQueryResultMetadata
     */
    quotaTotalSpent: ClientSpent;
    /**
     *
     * @type {number}
     * @memberof ClientQueryResultMetadata
     */
    responderVHost: number;
    /**
     *
     * @type {number}
     * @memberof ClientQueryResultMetadata
     */
    resultBufferSize: number;
    /**
     *
     * @type {number}
     * @memberof ClientQueryResultMetadata
     */
    timeMillis: number;
    /**
     *
     * @type {number}
     * @memberof ClientQueryResultMetadata
     */
    totalWork: number;
    /**
     *
     * @type {Array<object>}
     * @memberof ClientQueryResultMetadata
     */
    warnings: Array<object>;
    /**
     *
     * @type {number}
     * @memberof ClientQueryResultMetadata
     */
    workDone: number;
}

/**
 * Check if a given object implements the ClientQueryResultMetadata interface.
 */
export function instanceOfClientQueryResultMetadata(value: object): value is ClientQueryResultMetadata {
    if (!("costs" in value) || value["costs"] === undefined) return false;
    if (!("digestFlow" in value) || value["digestFlow"] === undefined) return false;
    if (!("eventCount" in value) || value["eventCount"] === undefined) return false;
    if (!("extraData" in value) || value["extraData"] === undefined) return false;
    if (!("fieldOrder" in value) || value["fieldOrder"] === undefined) return false;
    if (!("isAggregate" in value) || value["isAggregate"] === undefined) return false;
    if (!("pollAfter" in value) || value["pollAfter"] === undefined) return false;
    if (!("processedBytes" in value) || value["processedBytes"] === undefined) return false;
    if (!("processedEvents" in value) || value["processedEvents"] === undefined) return false;
    if (!("queryEnd" in value) || value["queryEnd"] === undefined) return false;
    if (!("querySpent" in value) || value["querySpent"] === undefined) return false;
    if (!("queryStart" in value) || value["queryStart"] === undefined) return false;
    if (!("quotaTotalSpent" in value) || value["quotaTotalSpent"] === undefined) return false;
    if (!("responderVHost" in value) || value["responderVHost"] === undefined) return false;
    if (!("resultBufferSize" in value) || value["resultBufferSize"] === undefined) return false;
    if (!("timeMillis" in value) || value["timeMillis"] === undefined) return false;
    if (!("totalWork" in value) || value["totalWork"] === undefined) return false;
    if (!("warnings" in value) || value["warnings"] === undefined) return false;
    if (!("workDone" in value) || value["workDone"] === undefined) return false;
    return true;
}

export function ClientQueryResultMetadataFromJSON(json: any): ClientQueryResultMetadata {
    return ClientQueryResultMetadataFromJSONTyped(json, false);
}

export function ClientQueryResultMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClientQueryResultMetadata {
    if (json == null) {
        return json;
    }
    return {
        costs: ClientCostsFromJSON(json["costs"]),
        digestFlow: ClientDigestFlowFromJSON(json["digestFlow"]),
        eventCount: json["eventCount"],
        extraData: json["extraData"],
        fieldOrder: json["fieldOrder"],
        isAggregate: json["isAggregate"],
        pollAfter: json["pollAfter"],
        processedBytes: json["processedBytes"],
        processedEvents: json["processedEvents"],
        queryEnd: json["queryEnd"],
        querySpent: ClientSpentFromJSON(json["querySpent"]),
        queryStart: json["queryStart"],
        quotaTotalSpent: ClientSpentFromJSON(json["quotaTotalSpent"]),
        responderVHost: json["responderVHost"],
        resultBufferSize: json["resultBufferSize"],
        timeMillis: json["timeMillis"],
        totalWork: json["totalWork"],
        warnings: json["warnings"],
        workDone: json["workDone"],
    };
}

export function ClientQueryResultMetadataToJSON(value?: ClientQueryResultMetadata | null): any {
    if (value == null) {
        return value;
    }
    return {
        costs: ClientCostsToJSON(value["costs"]),
        digestFlow: ClientDigestFlowToJSON(value["digestFlow"]),
        eventCount: value["eventCount"],
        extraData: value["extraData"],
        fieldOrder: value["fieldOrder"],
        isAggregate: value["isAggregate"],
        pollAfter: value["pollAfter"],
        processedBytes: value["processedBytes"],
        processedEvents: value["processedEvents"],
        queryEnd: value["queryEnd"],
        querySpent: ClientSpentToJSON(value["querySpent"]),
        queryStart: value["queryStart"],
        quotaTotalSpent: ClientSpentToJSON(value["quotaTotalSpent"]),
        responderVHost: value["responderVHost"],
        resultBufferSize: value["resultBufferSize"],
        timeMillis: value["timeMillis"],
        totalWork: value["totalWork"],
        warnings: value["warnings"],
        workDone: value["workDone"],
    };
}