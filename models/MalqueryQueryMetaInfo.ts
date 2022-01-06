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
    MsaPaging,
    MsaPagingFromJSON,
    MsaPagingFromJSONTyped,
    MsaPagingToJSON,
} from './MsaPaging';
import {
    MsaResources,
    MsaResourcesFromJSON,
    MsaResourcesFromJSONTyped,
    MsaResourcesToJSON,
} from './MsaResources';

/**
 * 
 * @export
 * @interface MalqueryQueryMetaInfo
 */
export interface MalqueryQueryMetaInfo {
    /**
     * 
     * @type {MsaPaging}
     * @memberof MalqueryQueryMetaInfo
     */
    pagination?: MsaPaging;
    /**
     * 
     * @type {string}
     * @memberof MalqueryQueryMetaInfo
     */
    poweredBy?: string;
    /**
     * Elapsed time since the request started in seconds
     * @type {number}
     * @memberof MalqueryQueryMetaInfo
     */
    queryTime?: number;
    /**
     * Request ID returned after creating a hunt or exact search
     * @type {string}
     * @memberof MalqueryQueryMetaInfo
     */
    reqid?: string;
    /**
     * Request status. Possible values: inprogress, failed, done
     * @type {string}
     * @memberof MalqueryQueryMetaInfo
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof MalqueryQueryMetaInfo
     */
    traceId: string;
    /**
     * 
     * @type {MsaResources}
     * @memberof MalqueryQueryMetaInfo
     */
    writes?: MsaResources;
}

export function MalqueryQueryMetaInfoFromJSON(json: any): MalqueryQueryMetaInfo {
    return MalqueryQueryMetaInfoFromJSONTyped(json, false);
}

export function MalqueryQueryMetaInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MalqueryQueryMetaInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pagination': !exists(json, 'pagination') ? undefined : MsaPagingFromJSON(json['pagination']),
        'poweredBy': !exists(json, 'powered_by') ? undefined : json['powered_by'],
        'queryTime': !exists(json, 'query_time') ? undefined : json['query_time'],
        'reqid': !exists(json, 'reqid') ? undefined : json['reqid'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'traceId': json['trace_id'],
        'writes': !exists(json, 'writes') ? undefined : MsaResourcesFromJSON(json['writes']),
    };
}

export function MalqueryQueryMetaInfoToJSON(value?: MalqueryQueryMetaInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pagination': MsaPagingToJSON(value.pagination),
        'powered_by': value.poweredBy,
        'query_time': value.queryTime,
        'reqid': value.reqid,
        'status': value.status,
        'trace_id': value.traceId,
        'writes': MsaResourcesToJSON(value.writes),
    };
}

