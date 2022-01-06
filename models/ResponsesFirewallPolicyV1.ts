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

import { exists, mapValues } from '../runtime';
import {
    ResponsesHostGroupV1,
    ResponsesHostGroupV1FromJSON,
    ResponsesHostGroupV1FromJSONTyped,
    ResponsesHostGroupV1ToJSON,
} from './ResponsesHostGroupV1';

/**
 * 
 * @export
 * @interface ResponsesFirewallPolicyV1
 */
export interface ResponsesFirewallPolicyV1 {
    /**
     * Channel file version for the policy
     * @type {number}
     * @memberof ResponsesFirewallPolicyV1
     */
    channelVersion: number;
    /**
     * The email of the user which created the policy
     * @type {string}
     * @memberof ResponsesFirewallPolicyV1
     */
    createdBy: string;
    /**
     * The time at which the policy was created
     * @type {Date}
     * @memberof ResponsesFirewallPolicyV1
     */
    createdTimestamp: Date;
    /**
     * The description of a policy. Use this field to provide a high level summary of what this policy enforces
     * @type {string}
     * @memberof ResponsesFirewallPolicyV1
     */
    description: string;
    /**
     * If a policy is enabled it will be used during the course of policy evaluation
     * @type {boolean}
     * @memberof ResponsesFirewallPolicyV1
     */
    enabled: boolean;
    /**
     * The groups that are currently attached to the policy
     * @type {Array<ResponsesHostGroupV1>}
     * @memberof ResponsesFirewallPolicyV1
     */
    groups: Array<ResponsesHostGroupV1>;
    /**
     * The unique id of the policy
     * @type {string}
     * @memberof ResponsesFirewallPolicyV1
     */
    id: string;
    /**
     * The email of the user which last modified the policy
     * @type {string}
     * @memberof ResponsesFirewallPolicyV1
     */
    modifiedBy: string;
    /**
     * The time at which the policy was last modified
     * @type {Date}
     * @memberof ResponsesFirewallPolicyV1
     */
    modifiedTimestamp: Date;
    /**
     * The human readable name of the policy
     * @type {string}
     * @memberof ResponsesFirewallPolicyV1
     */
    name: string;
    /**
     * The name of the platform
     * @type {string}
     * @memberof ResponsesFirewallPolicyV1
     */
    platformName: ResponsesFirewallPolicyV1PlatformNameEnum;
    /**
     * Firewall rule set id. This id combines several firewall rules and gets attached to the policy
     * @type {string}
     * @memberof ResponsesFirewallPolicyV1
     */
    ruleSetId: string;
}

/**
* @export
* @enum {string}
*/
export enum ResponsesFirewallPolicyV1PlatformNameEnum {
    Windows = 'Windows',
    Mac = 'Mac',
    Linux = 'Linux'
}

export function ResponsesFirewallPolicyV1FromJSON(json: any): ResponsesFirewallPolicyV1 {
    return ResponsesFirewallPolicyV1FromJSONTyped(json, false);
}

export function ResponsesFirewallPolicyV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponsesFirewallPolicyV1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channelVersion': json['channel_version'],
        'createdBy': json['created_by'],
        'createdTimestamp': (new Date(json['created_timestamp'])),
        'description': json['description'],
        'enabled': json['enabled'],
        'groups': ((json['groups'] as Array<any>).map(ResponsesHostGroupV1FromJSON)),
        'id': json['id'],
        'modifiedBy': json['modified_by'],
        'modifiedTimestamp': (new Date(json['modified_timestamp'])),
        'name': json['name'],
        'platformName': json['platform_name'],
        'ruleSetId': json['rule_set_id'],
    };
}

export function ResponsesFirewallPolicyV1ToJSON(value?: ResponsesFirewallPolicyV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channel_version': value.channelVersion,
        'created_by': value.createdBy,
        'created_timestamp': (value.createdTimestamp.toISOString()),
        'description': value.description,
        'enabled': value.enabled,
        'groups': ((value.groups as Array<any>).map(ResponsesHostGroupV1ToJSON)),
        'id': value.id,
        'modified_by': value.modifiedBy,
        'modified_timestamp': (value.modifiedTimestamp.toISOString()),
        'name': value.name,
        'platform_name': value.platformName,
        'rule_set_id': value.ruleSetId,
    };
}

