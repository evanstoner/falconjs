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
 * @interface DomainReportParams
 */
export interface DomainReportParams {
    /**
     * 
     * @type {string}
     * @memberof DomainReportParams
     */
    dashboardId: string;
    /**
     * 
     * @type {string}
     * @memberof DomainReportParams
     */
    dashboardVisibility: string;
    /**
     * 
     * @type {string}
     * @memberof DomainReportParams
     */
    filter: string;
    /**
     * 
     * @type {string}
     * @memberof DomainReportParams
     */
    filterDisplay: string;
    /**
     * 
     * @type {string}
     * @memberof DomainReportParams
     */
    filterUi: string;
    /**
     * 
     * @type {string}
     * @memberof DomainReportParams
     */
    format: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof DomainReportParams
     */
    reportTypeOptions?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof DomainReportParams
     */
    sort: string;
}

export function DomainReportParamsFromJSON(json: any): DomainReportParams {
    return DomainReportParamsFromJSONTyped(json, false);
}

export function DomainReportParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainReportParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dashboardId': json['dashboard_id'],
        'dashboardVisibility': json['dashboard_visibility'],
        'filter': json['filter'],
        'filterDisplay': json['filter_display'],
        'filterUi': json['filter_ui'],
        'format': json['format'],
        'reportTypeOptions': !exists(json, 'report_type_options') ? undefined : json['report_type_options'],
        'sort': json['sort'],
    };
}

export function DomainReportParamsToJSON(value?: DomainReportParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dashboard_id': value.dashboardId,
        'dashboard_visibility': value.dashboardVisibility,
        'filter': value.filter,
        'filter_display': value.filterDisplay,
        'filter_ui': value.filterUi,
        'format': value.format,
        'report_type_options': value.reportTypeOptions,
        'sort': value.sort,
    };
}

