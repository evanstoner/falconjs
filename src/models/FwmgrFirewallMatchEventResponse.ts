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
import { FwmgrFirewallFlags, FwmgrFirewallFlagsFromJSON, FwmgrFirewallFlagsFromJSONTyped, FwmgrFirewallFlagsToJSON } from "./FwmgrFirewallFlags";

/**
 *
 * @export
 * @interface FwmgrFirewallMatchEventResponse
 */
export interface FwmgrFirewallMatchEventResponse {
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    aid: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    cid: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    commandLine: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    connectionDirection: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    eventType: string;
    /**
     *
     * @type {FwmgrFirewallFlags}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    flags: FwmgrFirewallFlags;
    /**
     *
     * @type {boolean}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    hidden: boolean;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    hostName: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    icmpCode: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    icmpType: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    imageFileName: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    ipv: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    localAddress: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    localPort: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    matchCount: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    matchCountSinceLastEvent: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    networkProfile: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    pid: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    policyId: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    policyName: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    protocol: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    remoteAddress: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    remotePort: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    ruleAction: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    ruleDescription: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    ruleFamilyId: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    ruleGroupName: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    ruleId: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    ruleName: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    status: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    timestamp: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrFirewallMatchEventResponse
     */
    treeId: string;
}

export function FwmgrFirewallMatchEventResponseFromJSON(json: any): FwmgrFirewallMatchEventResponse {
    return FwmgrFirewallMatchEventResponseFromJSONTyped(json, false);
}

export function FwmgrFirewallMatchEventResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FwmgrFirewallMatchEventResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        aid: json["aid"],
        cid: json["cid"],
        commandLine: json["command_line"],
        connectionDirection: json["connection_direction"],
        eventType: json["event_type"],
        flags: FwmgrFirewallFlagsFromJSON(json["flags"]),
        hidden: json["hidden"],
        hostName: json["host_name"],
        icmpCode: json["icmp_code"],
        icmpType: json["icmp_type"],
        id: json["id"],
        imageFileName: json["image_file_name"],
        ipv: json["ipv"],
        localAddress: json["local_address"],
        localPort: json["local_port"],
        matchCount: json["match_count"],
        matchCountSinceLastEvent: json["match_count_since_last_event"],
        networkProfile: json["network_profile"],
        pid: json["pid"],
        policyId: json["policy_id"],
        policyName: json["policy_name"],
        protocol: json["protocol"],
        remoteAddress: json["remote_address"],
        remotePort: json["remote_port"],
        ruleAction: json["rule_action"],
        ruleDescription: json["rule_description"],
        ruleFamilyId: json["rule_family_id"],
        ruleGroupName: json["rule_group_name"],
        ruleId: json["rule_id"],
        ruleName: json["rule_name"],
        status: json["status"],
        timestamp: json["timestamp"],
        treeId: json["tree_id"],
    };
}

export function FwmgrFirewallMatchEventResponseToJSON(value?: FwmgrFirewallMatchEventResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        aid: value.aid,
        cid: value.cid,
        command_line: value.commandLine,
        connection_direction: value.connectionDirection,
        event_type: value.eventType,
        flags: FwmgrFirewallFlagsToJSON(value.flags),
        hidden: value.hidden,
        host_name: value.hostName,
        icmp_code: value.icmpCode,
        icmp_type: value.icmpType,
        id: value.id,
        image_file_name: value.imageFileName,
        ipv: value.ipv,
        local_address: value.localAddress,
        local_port: value.localPort,
        match_count: value.matchCount,
        match_count_since_last_event: value.matchCountSinceLastEvent,
        network_profile: value.networkProfile,
        pid: value.pid,
        policy_id: value.policyId,
        policy_name: value.policyName,
        protocol: value.protocol,
        remote_address: value.remoteAddress,
        remote_port: value.remotePort,
        rule_action: value.ruleAction,
        rule_description: value.ruleDescription,
        rule_family_id: value.ruleFamilyId,
        rule_group_name: value.ruleGroupName,
        rule_id: value.ruleId,
        rule_name: value.ruleName,
        status: value.status,
        timestamp: value.timestamp,
        tree_id: value.treeId,
    };
}