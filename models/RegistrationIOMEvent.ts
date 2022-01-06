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
/**
 * 
 * @export
 * @interface RegistrationIOMEvent
 */
export interface RegistrationIOMEvent {
    /**
     * 
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    accountId: string;
    /**
     * 
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    accountName: string;
    /**
     * 
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    azureTenantId: string;
    /**
     * 
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    cid: string;
    /**
     * 
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    cloudProvider: string;
    /**
     * 
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    finding: string;
    /**
     * 
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    policyId: string;
    /**
     * 
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    policyStatement: string;
    /**
     * 
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    region: string;
    /**
     * 
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    reportDateTime: string;
    /**
     * 
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    resourceAttributes: string;
    /**
     * 
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    resourceCreateTime: string;
    /**
     * 
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    resourceId: string;
    /**
     * 
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    resourceIdType: string;
    /**
     * 
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    resourceUrl: string;
    /**
     * 
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    service: string;
    /**
     * 
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    severity: string;
    /**
     * 
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    tags: string;
}

export function RegistrationIOMEventFromJSON(json: any): RegistrationIOMEvent {
    return RegistrationIOMEventFromJSONTyped(json, false);
}

export function RegistrationIOMEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegistrationIOMEvent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountId': json['account_id'],
        'accountName': json['account_name'],
        'azureTenantId': json['azure_tenant_id'],
        'cid': json['cid'],
        'cloudProvider': json['cloud_provider'],
        'finding': json['finding'],
        'policyId': json['policy_id'],
        'policyStatement': json['policy_statement'],
        'region': json['region'],
        'reportDateTime': json['report_date_time'],
        'resourceAttributes': json['resource_attributes'],
        'resourceCreateTime': json['resource_create_time'],
        'resourceId': json['resource_id'],
        'resourceIdType': json['resource_id_type'],
        'resourceUrl': json['resource_url'],
        'service': json['service'],
        'severity': json['severity'],
        'status': json['status'],
        'tags': json['tags'],
    };
}

export function RegistrationIOMEventToJSON(value?: RegistrationIOMEvent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account_id': value.accountId,
        'account_name': value.accountName,
        'azure_tenant_id': value.azureTenantId,
        'cid': value.cid,
        'cloud_provider': value.cloudProvider,
        'finding': value.finding,
        'policy_id': value.policyId,
        'policy_statement': value.policyStatement,
        'region': value.region,
        'report_date_time': value.reportDateTime,
        'resource_attributes': value.resourceAttributes,
        'resource_create_time': value.resourceCreateTime,
        'resource_id': value.resourceId,
        'resource_id_type': value.resourceIdType,
        'resource_url': value.resourceUrl,
        'service': value.service,
        'severity': value.severity,
        'status': value.status,
        'tags': value.tags,
    };
}

