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
 * @interface DomainRule
 */
export interface DomainRule {
    /**
     * 
     * @type {number}
     * @memberof DomainRule
     */
    createdDate: number;
    /**
     * 
     * @type {string}
     * @memberof DomainRule
     */
    description: string;
    /**
     * 
     * @type {number}
     * @memberof DomainRule
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof DomainRule
     */
    lastModifiedDate: number;
    /**
     * 
     * @type {string}
     * @memberof DomainRule
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof DomainRule
     */
    richTextDescription: string;
    /**
     * 
     * @type {string}
     * @memberof DomainRule
     */
    shortDescription: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof DomainRule
     */
    tags: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof DomainRule
     */
    type: string;
}

export function DomainRuleFromJSON(json: any): DomainRule {
    return DomainRuleFromJSONTyped(json, false);
}

export function DomainRuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainRule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdDate': json['created_date'],
        'description': json['description'],
        'id': json['id'],
        'lastModifiedDate': json['last_modified_date'],
        'name': json['name'],
        'richTextDescription': json['rich_text_description'],
        'shortDescription': json['short_description'],
        'tags': json['tags'],
        'type': json['type'],
    };
}

export function DomainRuleToJSON(value?: DomainRule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created_date': value.createdDate,
        'description': value.description,
        'id': value.id,
        'last_modified_date': value.lastModifiedDate,
        'name': value.name,
        'rich_text_description': value.richTextDescription,
        'short_description': value.shortDescription,
        'tags': value.tags,
        'type': value.type,
    };
}

