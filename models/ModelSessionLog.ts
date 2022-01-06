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
 * @interface ModelSessionLog
 */
export interface ModelSessionLog {
    /**
     * 
     * @type {string}
     * @memberof ModelSessionLog
     */
    baseCommand: string;
    /**
     * 
     * @type {string}
     * @memberof ModelSessionLog
     */
    cloudRequestId: string;
    /**
     * 
     * @type {string}
     * @memberof ModelSessionLog
     */
    commandString: string;
    /**
     * 
     * @type {Date}
     * @memberof ModelSessionLog
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof ModelSessionLog
     */
    currentDirectory: string;
    /**
     * 
     * @type {number}
     * @memberof ModelSessionLog
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof ModelSessionLog
     */
    sessionId: string;
    /**
     * 
     * @type {Date}
     * @memberof ModelSessionLog
     */
    updatedAt: Date;
}

export function ModelSessionLogFromJSON(json: any): ModelSessionLog {
    return ModelSessionLogFromJSONTyped(json, false);
}

export function ModelSessionLogFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelSessionLog {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'baseCommand': json['base_command'],
        'cloudRequestId': json['cloud_request_id'],
        'commandString': json['command_string'],
        'createdAt': (new Date(json['created_at'])),
        'currentDirectory': json['current_directory'],
        'id': json['id'],
        'sessionId': json['session_id'],
        'updatedAt': (new Date(json['updated_at'])),
    };
}

export function ModelSessionLogToJSON(value?: ModelSessionLog | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'base_command': value.baseCommand,
        'cloud_request_id': value.cloudRequestId,
        'command_string': value.commandString,
        'created_at': (value.createdAt.toISOString()),
        'current_directory': value.currentDirectory,
        'id': value.id,
        'session_id': value.sessionId,
        'updated_at': (value.updatedAt.toISOString()),
    };
}

