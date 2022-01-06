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
    MessagesAttachment,
    MessagesAttachmentFromJSON,
    MessagesAttachmentFromJSONTyped,
    MessagesAttachmentToJSON,
} from './MessagesAttachment';
import {
    MessagesAuthor,
    MessagesAuthorFromJSON,
    MessagesAuthorFromJSONTyped,
    MessagesAuthorToJSON,
} from './MessagesAuthor';
import {
    MessagesDetection,
    MessagesDetectionFromJSON,
    MessagesDetectionFromJSONTyped,
    MessagesDetectionToJSON,
} from './MessagesDetection';
import {
    MessagesIncident,
    MessagesIncidentFromJSON,
    MessagesIncidentFromJSONTyped,
    MessagesIncidentToJSON,
} from './MessagesIncident';

/**
 * 
 * @export
 * @interface MessagesCase
 */
export interface MessagesCase {
    /**
     * 
     * @type {Array<string>}
     * @memberof MessagesCase
     */
    aids: Array<string>;
    /**
     * 
     * @type {MessagesAuthor}
     * @memberof MessagesCase
     */
    assigner: MessagesAuthor;
    /**
     * 
     * @type {Array<MessagesAttachment>}
     * @memberof MessagesCase
     */
    attachments: Array<MessagesAttachment>;
    /**
     * 
     * @type {string}
     * @memberof MessagesCase
     */
    body: string;
    /**
     * 
     * @type {string}
     * @memberof MessagesCase
     */
    cid: string;
    /**
     * 
     * @type {string}
     * @memberof MessagesCase
     */
    createdTime: string;
    /**
     * 
     * @type {Array<MessagesDetection>}
     * @memberof MessagesCase
     */
    detections: Array<MessagesDetection>;
    /**
     * 
     * @type {Array<string>}
     * @memberof MessagesCase
     */
    hosts: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof MessagesCase
     */
    id: string;
    /**
     * 
     * @type {Array<MessagesIncident>}
     * @memberof MessagesCase
     */
    incidents: Array<MessagesIncident>;
    /**
     * 
     * @type {Array<string>}
     * @memberof MessagesCase
     */
    ipAddresses: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof MessagesCase
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof MessagesCase
     */
    lastModifiedTime: string;
    /**
     * 
     * @type {string}
     * @memberof MessagesCase
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof MessagesCase
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof MessagesCase
     */
    type: string;
}

export function MessagesCaseFromJSON(json: any): MessagesCase {
    return MessagesCaseFromJSONTyped(json, false);
}

export function MessagesCaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessagesCase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'aids': json['aids'],
        'assigner': MessagesAuthorFromJSON(json['assigner']),
        'attachments': ((json['attachments'] as Array<any>).map(MessagesAttachmentFromJSON)),
        'body': json['body'],
        'cid': json['cid'],
        'createdTime': json['created_time'],
        'detections': ((json['detections'] as Array<any>).map(MessagesDetectionFromJSON)),
        'hosts': json['hosts'],
        'id': json['id'],
        'incidents': ((json['incidents'] as Array<any>).map(MessagesIncidentFromJSON)),
        'ipAddresses': json['ip_addresses'],
        'key': json['key'],
        'lastModifiedTime': json['last_modified_time'],
        'status': json['status'],
        'title': json['title'],
        'type': json['type'],
    };
}

export function MessagesCaseToJSON(value?: MessagesCase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'aids': value.aids,
        'assigner': MessagesAuthorToJSON(value.assigner),
        'attachments': ((value.attachments as Array<any>).map(MessagesAttachmentToJSON)),
        'body': value.body,
        'cid': value.cid,
        'created_time': value.createdTime,
        'detections': ((value.detections as Array<any>).map(MessagesDetectionToJSON)),
        'hosts': value.hosts,
        'id': value.id,
        'incidents': ((value.incidents as Array<any>).map(MessagesIncidentToJSON)),
        'ip_addresses': value.ipAddresses,
        'key': value.key,
        'last_modified_time': value.lastModifiedTime,
        'status': value.status,
        'title': value.title,
        'type': value.type,
    };
}

