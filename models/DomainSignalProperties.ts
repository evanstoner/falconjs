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
    DomainAssessment,
    DomainAssessmentFromJSON,
    DomainAssessmentFromJSONTyped,
    DomainAssessmentToJSON,
} from './DomainAssessment';
import {
    DomainAssessmentItems,
    DomainAssessmentItemsFromJSON,
    DomainAssessmentItemsFromJSONTyped,
    DomainAssessmentItemsToJSON,
} from './DomainAssessmentItems';

/**
 * 
 * @export
 * @interface DomainSignalProperties
 */
export interface DomainSignalProperties {
    /**
     * 
     * @type {string}
     * @memberof DomainSignalProperties
     */
    aid: string;
    /**
     * 
     * @type {DomainAssessment}
     * @memberof DomainSignalProperties
     */
    assessment: DomainAssessment;
    /**
     * 
     * @type {DomainAssessmentItems}
     * @memberof DomainSignalProperties
     */
    assessmentItems: DomainAssessmentItems;
    /**
     * 
     * @type {string}
     * @memberof DomainSignalProperties
     */
    cid: string;
    /**
     * 
     * @type {string}
     * @memberof DomainSignalProperties
     */
    eventPlatform: string;
    /**
     * 
     * @type {Date}
     * @memberof DomainSignalProperties
     */
    modifiedTime: Date;
    /**
     * 
     * @type {string}
     * @memberof DomainSignalProperties
     */
    productTypeDesc: string;
    /**
     * 
     * @type {string}
     * @memberof DomainSignalProperties
     */
    sensorFileStatus: string;
    /**
     * 
     * @type {string}
     * @memberof DomainSignalProperties
     */
    systemSerialNumber: string;
}

export function DomainSignalPropertiesFromJSON(json: any): DomainSignalProperties {
    return DomainSignalPropertiesFromJSONTyped(json, false);
}

export function DomainSignalPropertiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainSignalProperties {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'aid': json['aid'],
        'assessment': DomainAssessmentFromJSON(json['assessment']),
        'assessmentItems': DomainAssessmentItemsFromJSON(json['assessment_items']),
        'cid': json['cid'],
        'eventPlatform': json['event_platform'],
        'modifiedTime': (new Date(json['modified_time'])),
        'productTypeDesc': json['product_type_desc'],
        'sensorFileStatus': json['sensor_file_status'],
        'systemSerialNumber': json['system_serial_number'],
    };
}

export function DomainSignalPropertiesToJSON(value?: DomainSignalProperties | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'aid': value.aid,
        'assessment': DomainAssessmentToJSON(value.assessment),
        'assessment_items': DomainAssessmentItemsToJSON(value.assessmentItems),
        'cid': value.cid,
        'event_platform': value.eventPlatform,
        'modified_time': (value.modifiedTime.toISOString()),
        'product_type_desc': value.productTypeDesc,
        'sensor_file_status': value.sensorFileStatus,
        'system_serial_number': value.systemSerialNumber,
    };
}

