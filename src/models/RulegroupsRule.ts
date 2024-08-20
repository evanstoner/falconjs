/* tslint:disable */
/* eslint-disable */
/**
 * CrowdStrike API Specification
 * Use this API specification as a reference for the API endpoints you can use to interact with your Falcon environment. These endpoints support authentication via OAuth2 and interact with detections and network containment. For detailed usage guides and examples, see our [documentation inside the Falcon console](https://falcon.crowdstrike.com/support/documentation).     To use the APIs described below, combine the base URL with the path shown for each API endpoint. For commercial cloud customers, your base URL is `https://api.crowdstrike.com`.    Each API endpoint requires authorization via an OAuth2 token. Your first API request should retrieve an OAuth2 token using the `oauth2/token` endpoint, such as `https://api.crowdstrike.com/oauth2/token`. For subsequent requests, include the OAuth2 token in an HTTP authorization header. Tokens expire after 30 minutes, after which you should make a new token request to continue making API requests.
 *
 * The version of the OpenAPI document: rolling
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from "../runtime";
/**
 *
 * @export
 * @interface RulegroupsRule
 */
export interface RulegroupsRule {
    /**
     *
     * @type {Array<string>}
     * @memberof RulegroupsRule
     */
    contentFiles?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof RulegroupsRule
     */
    contentRegistryValues?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof RulegroupsRule
     */
    createdTimestamp?: string;
    /**
     *
     * @type {string}
     * @memberof RulegroupsRule
     */
    depth: string;
    /**
     *
     * @type {string}
     * @memberof RulegroupsRule
     */
    description?: string;
    /**
     *
     * @type {boolean}
     * @memberof RulegroupsRule
     */
    enableContentCapture?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RulegroupsRule
     */
    enableHashCapture?: boolean;
    /**
     *
     * @type {string}
     * @memberof RulegroupsRule
     */
    exclude?: string;
    /**
     *
     * @type {string}
     * @memberof RulegroupsRule
     */
    excludeProcesses?: string;
    /**
     *
     * @type {string}
     * @memberof RulegroupsRule
     */
    excludeUsers?: string;
    /**
     *
     * @type {string}
     * @memberof RulegroupsRule
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof RulegroupsRule
     */
    include: string;
    /**
     *
     * @type {string}
     * @memberof RulegroupsRule
     */
    includeProcesses?: string;
    /**
     *
     * @type {string}
     * @memberof RulegroupsRule
     */
    includeUsers?: string;
    /**
     *
     * @type {string}
     * @memberof RulegroupsRule
     */
    modifiedTimestamp?: string;
    /**
     *
     * @type {string}
     * @memberof RulegroupsRule
     */
    path: string;
    /**
     *
     * @type {number}
     * @memberof RulegroupsRule
     */
    precedence?: number;
    /**
     *
     * @type {string}
     * @memberof RulegroupsRule
     */
    ruleGroupId: string;
    /**
     *
     * @type {string}
     * @memberof RulegroupsRule
     */
    severity: string;
    /**
     *
     * @type {string}
     * @memberof RulegroupsRule
     */
    type: string;
    /**
     *
     * @type {boolean}
     * @memberof RulegroupsRule
     */
    watchAttributesDirectoryChanges?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RulegroupsRule
     */
    watchAttributesFileChanges?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RulegroupsRule
     */
    watchCreateDirectoryChanges?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RulegroupsRule
     */
    watchCreateFileChanges?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RulegroupsRule
     */
    watchCreateKeyChanges?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RulegroupsRule
     */
    watchDeleteDirectoryChanges?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RulegroupsRule
     */
    watchDeleteFileChanges?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RulegroupsRule
     */
    watchDeleteKeyChanges?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RulegroupsRule
     */
    watchDeleteValueChanges?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RulegroupsRule
     */
    watchPermissionsDirectoryChanges?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RulegroupsRule
     */
    watchPermissionsFileChanges?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RulegroupsRule
     */
    watchPermissionsKeyChanges?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RulegroupsRule
     */
    watchRenameDirectoryChanges?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RulegroupsRule
     */
    watchRenameFileChanges?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RulegroupsRule
     */
    watchRenameKeyChanges?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RulegroupsRule
     */
    watchSetValueChanges?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RulegroupsRule
     */
    watchWriteFileChanges?: boolean;
}

/**
 * Check if a given object implements the RulegroupsRule interface.
 */
export function instanceOfRulegroupsRule(value: object): value is RulegroupsRule {
    if (!("depth" in value) || value["depth"] === undefined) return false;
    if (!("id" in value) || value["id"] === undefined) return false;
    if (!("include" in value) || value["include"] === undefined) return false;
    if (!("path" in value) || value["path"] === undefined) return false;
    if (!("ruleGroupId" in value) || value["ruleGroupId"] === undefined) return false;
    if (!("severity" in value) || value["severity"] === undefined) return false;
    if (!("type" in value) || value["type"] === undefined) return false;
    return true;
}

export function RulegroupsRuleFromJSON(json: any): RulegroupsRule {
    return RulegroupsRuleFromJSONTyped(json, false);
}

export function RulegroupsRuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): RulegroupsRule {
    if (json == null) {
        return json;
    }
    return {
        contentFiles: json["content_files"] == null ? undefined : json["content_files"],
        contentRegistryValues: json["content_registry_values"] == null ? undefined : json["content_registry_values"],
        createdTimestamp: json["created_timestamp"] == null ? undefined : json["created_timestamp"],
        depth: json["depth"],
        description: json["description"] == null ? undefined : json["description"],
        enableContentCapture: json["enable_content_capture"] == null ? undefined : json["enable_content_capture"],
        enableHashCapture: json["enable_hash_capture"] == null ? undefined : json["enable_hash_capture"],
        exclude: json["exclude"] == null ? undefined : json["exclude"],
        excludeProcesses: json["exclude_processes"] == null ? undefined : json["exclude_processes"],
        excludeUsers: json["exclude_users"] == null ? undefined : json["exclude_users"],
        id: json["id"],
        include: json["include"],
        includeProcesses: json["include_processes"] == null ? undefined : json["include_processes"],
        includeUsers: json["include_users"] == null ? undefined : json["include_users"],
        modifiedTimestamp: json["modified_timestamp"] == null ? undefined : json["modified_timestamp"],
        path: json["path"],
        precedence: json["precedence"] == null ? undefined : json["precedence"],
        ruleGroupId: json["rule_group_id"],
        severity: json["severity"],
        type: json["type"],
        watchAttributesDirectoryChanges: json["watch_attributes_directory_changes"] == null ? undefined : json["watch_attributes_directory_changes"],
        watchAttributesFileChanges: json["watch_attributes_file_changes"] == null ? undefined : json["watch_attributes_file_changes"],
        watchCreateDirectoryChanges: json["watch_create_directory_changes"] == null ? undefined : json["watch_create_directory_changes"],
        watchCreateFileChanges: json["watch_create_file_changes"] == null ? undefined : json["watch_create_file_changes"],
        watchCreateKeyChanges: json["watch_create_key_changes"] == null ? undefined : json["watch_create_key_changes"],
        watchDeleteDirectoryChanges: json["watch_delete_directory_changes"] == null ? undefined : json["watch_delete_directory_changes"],
        watchDeleteFileChanges: json["watch_delete_file_changes"] == null ? undefined : json["watch_delete_file_changes"],
        watchDeleteKeyChanges: json["watch_delete_key_changes"] == null ? undefined : json["watch_delete_key_changes"],
        watchDeleteValueChanges: json["watch_delete_value_changes"] == null ? undefined : json["watch_delete_value_changes"],
        watchPermissionsDirectoryChanges: json["watch_permissions_directory_changes"] == null ? undefined : json["watch_permissions_directory_changes"],
        watchPermissionsFileChanges: json["watch_permissions_file_changes"] == null ? undefined : json["watch_permissions_file_changes"],
        watchPermissionsKeyChanges: json["watch_permissions_key_changes"] == null ? undefined : json["watch_permissions_key_changes"],
        watchRenameDirectoryChanges: json["watch_rename_directory_changes"] == null ? undefined : json["watch_rename_directory_changes"],
        watchRenameFileChanges: json["watch_rename_file_changes"] == null ? undefined : json["watch_rename_file_changes"],
        watchRenameKeyChanges: json["watch_rename_key_changes"] == null ? undefined : json["watch_rename_key_changes"],
        watchSetValueChanges: json["watch_set_value_changes"] == null ? undefined : json["watch_set_value_changes"],
        watchWriteFileChanges: json["watch_write_file_changes"] == null ? undefined : json["watch_write_file_changes"],
    };
}

export function RulegroupsRuleToJSON(value?: RulegroupsRule | null): any {
    if (value == null) {
        return value;
    }
    return {
        content_files: value["contentFiles"],
        content_registry_values: value["contentRegistryValues"],
        created_timestamp: value["createdTimestamp"],
        depth: value["depth"],
        description: value["description"],
        enable_content_capture: value["enableContentCapture"],
        enable_hash_capture: value["enableHashCapture"],
        exclude: value["exclude"],
        exclude_processes: value["excludeProcesses"],
        exclude_users: value["excludeUsers"],
        id: value["id"],
        include: value["include"],
        include_processes: value["includeProcesses"],
        include_users: value["includeUsers"],
        modified_timestamp: value["modifiedTimestamp"],
        path: value["path"],
        precedence: value["precedence"],
        rule_group_id: value["ruleGroupId"],
        severity: value["severity"],
        type: value["type"],
        watch_attributes_directory_changes: value["watchAttributesDirectoryChanges"],
        watch_attributes_file_changes: value["watchAttributesFileChanges"],
        watch_create_directory_changes: value["watchCreateDirectoryChanges"],
        watch_create_file_changes: value["watchCreateFileChanges"],
        watch_create_key_changes: value["watchCreateKeyChanges"],
        watch_delete_directory_changes: value["watchDeleteDirectoryChanges"],
        watch_delete_file_changes: value["watchDeleteFileChanges"],
        watch_delete_key_changes: value["watchDeleteKeyChanges"],
        watch_delete_value_changes: value["watchDeleteValueChanges"],
        watch_permissions_directory_changes: value["watchPermissionsDirectoryChanges"],
        watch_permissions_file_changes: value["watchPermissionsFileChanges"],
        watch_permissions_key_changes: value["watchPermissionsKeyChanges"],
        watch_rename_directory_changes: value["watchRenameDirectoryChanges"],
        watch_rename_file_changes: value["watchRenameFileChanges"],
        watch_rename_key_changes: value["watchRenameKeyChanges"],
        watch_set_value_changes: value["watchSetValueChanges"],
        watch_write_file_changes: value["watchWriteFileChanges"],
    };
}