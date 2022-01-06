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
 * @interface DomainNotificationDetailsV1
 */
export interface DomainNotificationDetailsV1 {
    /**
     * The raw intelligence item author username
     * @type {string}
     * @memberof DomainNotificationDetailsV1
     */
    author?: string;
    /**
     * Highlighted content based on the rule that generated the notifications. Highlights are surrounded with a <cs-highlight> tag
     * @type {string}
     * @memberof DomainNotificationDetailsV1
     */
    content: string;
    /**
     * The date when the raw intelligence item was created
     * @type {Date}
     * @memberof DomainNotificationDetailsV1
     */
    createdDate: Date;
    /**
     * The raw intelligence item labels. These contain hints around what is actually included in the item (malware, IPs, emails, etc).
     * @type {Array<string>}
     * @memberof DomainNotificationDetailsV1
     */
    labels?: Array<string>;
    /**
     * The raw intelligence item language
     * @type {string}
     * @memberof DomainNotificationDetailsV1
     */
    language?: string;
    /**
     * The site where the raw intelligence item was found
     * @type {string}
     * @memberof DomainNotificationDetailsV1
     */
    site?: string;
    /**
     * The raw intelligence item title
     * @type {string}
     * @memberof DomainNotificationDetailsV1
     */
    title?: string;
    /**
     * The type of the raw intelligence item
     * @type {string}
     * @memberof DomainNotificationDetailsV1
     */
    type: string;
    /**
     * The date when the raw intelligence item was updated
     * @type {Date}
     * @memberof DomainNotificationDetailsV1
     */
    updatedDate: Date;
    /**
     * The raw intelligence item URL
     * @type {string}
     * @memberof DomainNotificationDetailsV1
     */
    url?: string;
}

export function DomainNotificationDetailsV1FromJSON(json: any): DomainNotificationDetailsV1 {
    return DomainNotificationDetailsV1FromJSONTyped(json, false);
}

export function DomainNotificationDetailsV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainNotificationDetailsV1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'author': !exists(json, 'author') ? undefined : json['author'],
        'content': json['content'],
        'createdDate': (new Date(json['created_date'])),
        'labels': !exists(json, 'labels') ? undefined : json['labels'],
        'language': !exists(json, 'language') ? undefined : json['language'],
        'site': !exists(json, 'site') ? undefined : json['site'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'type': json['type'],
        'updatedDate': (new Date(json['updated_date'])),
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function DomainNotificationDetailsV1ToJSON(value?: DomainNotificationDetailsV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'author': value.author,
        'content': value.content,
        'created_date': (value.createdDate.toISOString()),
        'labels': value.labels,
        'language': value.language,
        'site': value.site,
        'title': value.title,
        'type': value.type,
        'updated_date': (value.updatedDate.toISOString()),
        'url': value.url,
    };
}

