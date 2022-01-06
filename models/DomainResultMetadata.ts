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
 * @interface DomainResultMetadata
 */
export interface DomainResultMetadata {
    /**
     * 
     * @type {number}
     * @memberof DomainResultMetadata
     */
    executionDelay: number;
    /**
     * 
     * @type {number}
     * @memberof DomainResultMetadata
     */
    executionDuration: number;
    /**
     * 
     * @type {Date}
     * @memberof DomainResultMetadata
     */
    executionFinish: Date;
    /**
     * 
     * @type {Date}
     * @memberof DomainResultMetadata
     */
    executionStart: Date;
    /**
     * 
     * @type {number}
     * @memberof DomainResultMetadata
     */
    queueDuration: number;
    /**
     * 
     * @type {Date}
     * @memberof DomainResultMetadata
     */
    queueStart: Date;
    /**
     * 
     * @type {string}
     * @memberof DomainResultMetadata
     */
    reportFileName: string;
    /**
     * 
     * @type {Date}
     * @memberof DomainResultMetadata
     */
    reportFinish: Date;
    /**
     * 
     * @type {number}
     * @memberof DomainResultMetadata
     */
    resultCount: number;
    /**
     * 
     * @type {string}
     * @memberof DomainResultMetadata
     */
    resultId: string;
    /**
     * 
     * @type {Date}
     * @memberof DomainResultMetadata
     */
    searchWindowEnd: Date;
    /**
     * 
     * @type {Date}
     * @memberof DomainResultMetadata
     */
    searchWindowStart: Date;
}

export function DomainResultMetadataFromJSON(json: any): DomainResultMetadata {
    return DomainResultMetadataFromJSONTyped(json, false);
}

export function DomainResultMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainResultMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'executionDelay': json['execution_delay'],
        'executionDuration': json['execution_duration'],
        'executionFinish': (new Date(json['execution_finish'])),
        'executionStart': (new Date(json['execution_start'])),
        'queueDuration': json['queue_duration'],
        'queueStart': (new Date(json['queue_start'])),
        'reportFileName': json['report_file_name'],
        'reportFinish': (new Date(json['report_finish'])),
        'resultCount': json['result_count'],
        'resultId': json['result_id'],
        'searchWindowEnd': (new Date(json['search_window_end'])),
        'searchWindowStart': (new Date(json['search_window_start'])),
    };
}

export function DomainResultMetadataToJSON(value?: DomainResultMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'execution_delay': value.executionDelay,
        'execution_duration': value.executionDuration,
        'execution_finish': (value.executionFinish.toISOString()),
        'execution_start': (value.executionStart.toISOString()),
        'queue_duration': value.queueDuration,
        'queue_start': (value.queueStart.toISOString()),
        'report_file_name': value.reportFileName,
        'report_finish': (value.reportFinish.toISOString()),
        'result_count': value.resultCount,
        'result_id': value.resultId,
        'search_window_end': (value.searchWindowEnd.toISOString()),
        'search_window_start': (value.searchWindowStart.toISOString()),
    };
}

