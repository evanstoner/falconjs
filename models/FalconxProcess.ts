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
    FalconxFileAccess,
    FalconxFileAccessFromJSON,
    FalconxFileAccessFromJSONTyped,
    FalconxFileAccessToJSON,
} from './FalconxFileAccess';
import {
    FalconxHandle,
    FalconxHandleFromJSON,
    FalconxHandleFromJSONTyped,
    FalconxHandleToJSON,
} from './FalconxHandle';
import {
    FalconxProcessFlag,
    FalconxProcessFlagFromJSON,
    FalconxProcessFlagFromJSONTyped,
    FalconxProcessFlagToJSON,
} from './FalconxProcessFlag';
import {
    FalconxRegistry,
    FalconxRegistryFromJSON,
    FalconxRegistryFromJSONTyped,
    FalconxRegistryToJSON,
} from './FalconxRegistry';
import {
    FalconxScriptCall,
    FalconxScriptCallFromJSON,
    FalconxScriptCallFromJSONTyped,
    FalconxScriptCallToJSON,
} from './FalconxScriptCall';
import {
    FalconxStream,
    FalconxStreamFromJSON,
    FalconxStreamFromJSONTyped,
    FalconxStreamToJSON,
} from './FalconxStream';

/**
 * 
 * @export
 * @interface FalconxProcess
 */
export interface FalconxProcess {
    /**
     * 
     * @type {string}
     * @memberof FalconxProcess
     */
    commandLine?: string;
    /**
     * 
     * @type {Array<FalconxFileAccess>}
     * @memberof FalconxProcess
     */
    fileAccesses?: Array<FalconxFileAccess>;
    /**
     * 
     * @type {Array<FalconxHandle>}
     * @memberof FalconxProcess
     */
    handles?: Array<FalconxHandle>;
    /**
     * 
     * @type {string}
     * @memberof FalconxProcess
     */
    iconArtifactId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof FalconxProcess
     */
    mutants?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof FalconxProcess
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof FalconxProcess
     */
    normalizedPath?: string;
    /**
     * 
     * @type {string}
     * @memberof FalconxProcess
     */
    parentUid?: string;
    /**
     * 
     * @type {number}
     * @memberof FalconxProcess
     */
    pid?: number;
    /**
     * 
     * @type {Array<FalconxProcessFlag>}
     * @memberof FalconxProcess
     */
    processFlags?: Array<FalconxProcessFlag>;
    /**
     * 
     * @type {Array<FalconxRegistry>}
     * @memberof FalconxProcess
     */
    registry?: Array<FalconxRegistry>;
    /**
     * 
     * @type {Array<FalconxScriptCall>}
     * @memberof FalconxProcess
     */
    scriptCalls?: Array<FalconxScriptCall>;
    /**
     * 
     * @type {string}
     * @memberof FalconxProcess
     */
    sha256?: string;
    /**
     * 
     * @type {Array<FalconxStream>}
     * @memberof FalconxProcess
     */
    streams?: Array<FalconxStream>;
    /**
     * 
     * @type {string}
     * @memberof FalconxProcess
     */
    uid?: string;
}

export function FalconxProcessFromJSON(json: any): FalconxProcess {
    return FalconxProcessFromJSONTyped(json, false);
}

export function FalconxProcessFromJSONTyped(json: any, ignoreDiscriminator: boolean): FalconxProcess {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'commandLine': !exists(json, 'command_line') ? undefined : json['command_line'],
        'fileAccesses': !exists(json, 'file_accesses') ? undefined : ((json['file_accesses'] as Array<any>).map(FalconxFileAccessFromJSON)),
        'handles': !exists(json, 'handles') ? undefined : ((json['handles'] as Array<any>).map(FalconxHandleFromJSON)),
        'iconArtifactId': !exists(json, 'icon_artifact_id') ? undefined : json['icon_artifact_id'],
        'mutants': !exists(json, 'mutants') ? undefined : json['mutants'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'normalizedPath': !exists(json, 'normalized_path') ? undefined : json['normalized_path'],
        'parentUid': !exists(json, 'parent_uid') ? undefined : json['parent_uid'],
        'pid': !exists(json, 'pid') ? undefined : json['pid'],
        'processFlags': !exists(json, 'process_flags') ? undefined : ((json['process_flags'] as Array<any>).map(FalconxProcessFlagFromJSON)),
        'registry': !exists(json, 'registry') ? undefined : ((json['registry'] as Array<any>).map(FalconxRegistryFromJSON)),
        'scriptCalls': !exists(json, 'script_calls') ? undefined : ((json['script_calls'] as Array<any>).map(FalconxScriptCallFromJSON)),
        'sha256': !exists(json, 'sha256') ? undefined : json['sha256'],
        'streams': !exists(json, 'streams') ? undefined : ((json['streams'] as Array<any>).map(FalconxStreamFromJSON)),
        'uid': !exists(json, 'uid') ? undefined : json['uid'],
    };
}

export function FalconxProcessToJSON(value?: FalconxProcess | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'command_line': value.commandLine,
        'file_accesses': value.fileAccesses === undefined ? undefined : ((value.fileAccesses as Array<any>).map(FalconxFileAccessToJSON)),
        'handles': value.handles === undefined ? undefined : ((value.handles as Array<any>).map(FalconxHandleToJSON)),
        'icon_artifact_id': value.iconArtifactId,
        'mutants': value.mutants,
        'name': value.name,
        'normalized_path': value.normalizedPath,
        'parent_uid': value.parentUid,
        'pid': value.pid,
        'process_flags': value.processFlags === undefined ? undefined : ((value.processFlags as Array<any>).map(FalconxProcessFlagToJSON)),
        'registry': value.registry === undefined ? undefined : ((value.registry as Array<any>).map(FalconxRegistryToJSON)),
        'script_calls': value.scriptCalls === undefined ? undefined : ((value.scriptCalls as Array<any>).map(FalconxScriptCallToJSON)),
        'sha256': value.sha256,
        'streams': value.streams === undefined ? undefined : ((value.streams as Array<any>).map(FalconxStreamToJSON)),
        'uid': value.uid,
    };
}

