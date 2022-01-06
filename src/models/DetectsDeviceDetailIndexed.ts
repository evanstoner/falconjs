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

import { exists, mapValues } from "../runtime";
/**
 *
 * @export
 * @interface DetectsDeviceDetailIndexed
 */
export interface DetectsDeviceDetailIndexed {
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    agentLoadFlags?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    agentLocalTime?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    agentVersion?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    biosManufacturer?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    biosVersion?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    cid: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    configIdBase?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    configIdBuild?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    configIdPlatform?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    deviceId: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    externalIp?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    firstLoginTimestamp?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    firstLoginUser?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    firstSeen?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DetectsDeviceDetailIndexed
     */
    groups?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    hostname?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    instanceId?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    lastLoginTimestamp?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    lastLoginUser?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    lastSeen?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    localIp?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    macAddress?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    machineDomain?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    majorVersion?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    minorVersion?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    modifiedTimestamp?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DetectsDeviceDetailIndexed
     */
    notes?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    osVersion?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DetectsDeviceDetailIndexed
     */
    ou?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    platformId?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    platformName?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    podId?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DetectsDeviceDetailIndexed
     */
    podLabels?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    podName?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    podNamespace?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    podServiceAccountName?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    productType?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    productTypeDesc?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    releaseGroup?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    serviceProvider?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    serviceProviderAccountId?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    siteName?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    systemManufacturer?: string;
    /**
     *
     * @type {string}
     * @memberof DetectsDeviceDetailIndexed
     */
    systemProductName?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DetectsDeviceDetailIndexed
     */
    tags?: Array<string>;
}

export function DetectsDeviceDetailIndexedFromJSON(json: any): DetectsDeviceDetailIndexed {
    return DetectsDeviceDetailIndexedFromJSONTyped(json, false);
}

export function DetectsDeviceDetailIndexedFromJSONTyped(json: any, ignoreDiscriminator: boolean): DetectsDeviceDetailIndexed {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        agentLoadFlags: !exists(json, "agent_load_flags") ? undefined : json["agent_load_flags"],
        agentLocalTime: !exists(json, "agent_local_time") ? undefined : json["agent_local_time"],
        agentVersion: !exists(json, "agent_version") ? undefined : json["agent_version"],
        biosManufacturer: !exists(json, "bios_manufacturer") ? undefined : json["bios_manufacturer"],
        biosVersion: !exists(json, "bios_version") ? undefined : json["bios_version"],
        cid: json["cid"],
        configIdBase: !exists(json, "config_id_base") ? undefined : json["config_id_base"],
        configIdBuild: !exists(json, "config_id_build") ? undefined : json["config_id_build"],
        configIdPlatform: !exists(json, "config_id_platform") ? undefined : json["config_id_platform"],
        deviceId: json["device_id"],
        externalIp: !exists(json, "external_ip") ? undefined : json["external_ip"],
        firstLoginTimestamp: !exists(json, "first_login_timestamp") ? undefined : json["first_login_timestamp"],
        firstLoginUser: !exists(json, "first_login_user") ? undefined : json["first_login_user"],
        firstSeen: !exists(json, "first_seen") ? undefined : json["first_seen"],
        groups: !exists(json, "groups") ? undefined : json["groups"],
        hostname: !exists(json, "hostname") ? undefined : json["hostname"],
        instanceId: !exists(json, "instance_id") ? undefined : json["instance_id"],
        lastLoginTimestamp: !exists(json, "last_login_timestamp") ? undefined : json["last_login_timestamp"],
        lastLoginUser: !exists(json, "last_login_user") ? undefined : json["last_login_user"],
        lastSeen: !exists(json, "last_seen") ? undefined : json["last_seen"],
        localIp: !exists(json, "local_ip") ? undefined : json["local_ip"],
        macAddress: !exists(json, "mac_address") ? undefined : json["mac_address"],
        machineDomain: !exists(json, "machine_domain") ? undefined : json["machine_domain"],
        majorVersion: !exists(json, "major_version") ? undefined : json["major_version"],
        minorVersion: !exists(json, "minor_version") ? undefined : json["minor_version"],
        modifiedTimestamp: !exists(json, "modified_timestamp") ? undefined : json["modified_timestamp"],
        notes: !exists(json, "notes") ? undefined : json["notes"],
        osVersion: !exists(json, "os_version") ? undefined : json["os_version"],
        ou: !exists(json, "ou") ? undefined : json["ou"],
        platformId: !exists(json, "platform_id") ? undefined : json["platform_id"],
        platformName: !exists(json, "platform_name") ? undefined : json["platform_name"],
        podId: !exists(json, "pod_id") ? undefined : json["pod_id"],
        podLabels: !exists(json, "pod_labels") ? undefined : json["pod_labels"],
        podName: !exists(json, "pod_name") ? undefined : json["pod_name"],
        podNamespace: !exists(json, "pod_namespace") ? undefined : json["pod_namespace"],
        podServiceAccountName: !exists(json, "pod_service_account_name") ? undefined : json["pod_service_account_name"],
        productType: !exists(json, "product_type") ? undefined : json["product_type"],
        productTypeDesc: !exists(json, "product_type_desc") ? undefined : json["product_type_desc"],
        releaseGroup: !exists(json, "release_group") ? undefined : json["release_group"],
        serviceProvider: !exists(json, "service_provider") ? undefined : json["service_provider"],
        serviceProviderAccountId: !exists(json, "service_provider_account_id") ? undefined : json["service_provider_account_id"],
        siteName: !exists(json, "site_name") ? undefined : json["site_name"],
        status: !exists(json, "status") ? undefined : json["status"],
        systemManufacturer: !exists(json, "system_manufacturer") ? undefined : json["system_manufacturer"],
        systemProductName: !exists(json, "system_product_name") ? undefined : json["system_product_name"],
        tags: !exists(json, "tags") ? undefined : json["tags"],
    };
}

export function DetectsDeviceDetailIndexedToJSON(value?: DetectsDeviceDetailIndexed | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        agent_load_flags: value.agentLoadFlags,
        agent_local_time: value.agentLocalTime,
        agent_version: value.agentVersion,
        bios_manufacturer: value.biosManufacturer,
        bios_version: value.biosVersion,
        cid: value.cid,
        config_id_base: value.configIdBase,
        config_id_build: value.configIdBuild,
        config_id_platform: value.configIdPlatform,
        device_id: value.deviceId,
        external_ip: value.externalIp,
        first_login_timestamp: value.firstLoginTimestamp,
        first_login_user: value.firstLoginUser,
        first_seen: value.firstSeen,
        groups: value.groups,
        hostname: value.hostname,
        instance_id: value.instanceId,
        last_login_timestamp: value.lastLoginTimestamp,
        last_login_user: value.lastLoginUser,
        last_seen: value.lastSeen,
        local_ip: value.localIp,
        mac_address: value.macAddress,
        machine_domain: value.machineDomain,
        major_version: value.majorVersion,
        minor_version: value.minorVersion,
        modified_timestamp: value.modifiedTimestamp,
        notes: value.notes,
        os_version: value.osVersion,
        ou: value.ou,
        platform_id: value.platformId,
        platform_name: value.platformName,
        pod_id: value.podId,
        pod_labels: value.podLabels,
        pod_name: value.podName,
        pod_namespace: value.podNamespace,
        pod_service_account_name: value.podServiceAccountName,
        product_type: value.productType,
        product_type_desc: value.productTypeDesc,
        release_group: value.releaseGroup,
        service_provider: value.serviceProvider,
        service_provider_account_id: value.serviceProviderAccountId,
        site_name: value.siteName,
        status: value.status,
        system_manufacturer: value.systemManufacturer,
        system_product_name: value.systemProductName,
        tags: value.tags,
    };
}