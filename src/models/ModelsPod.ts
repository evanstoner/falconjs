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
 * @interface ModelsPod
 */
export interface ModelsPod {
    /**
     *
     * @type {Array<{ [key: string]: string; }>}
     * @memberof ModelsPod
     */
    agents: Array<{ [key: string]: string }>;
    /**
     *
     * @type {boolean}
     * @memberof ModelsPod
     */
    allowPrivilegeEscalation: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof ModelsPod
     */
    annotationsList: Array<string>;
    /**
     *
     * @type {boolean}
     * @memberof ModelsPod
     */
    automountServiceToken: boolean;
    /**
     *
     * @type {string}
     * @memberof ModelsPod
     */
    cid: string;
    /**
     *
     * @type {string}
     * @memberof ModelsPod
     */
    cloudAccountId: string;
    /**
     *
     * @type {string}
     * @memberof ModelsPod
     */
    cloudName: string;
    /**
     *
     * @type {string}
     * @memberof ModelsPod
     */
    cloudRegion: string;
    /**
     *
     * @type {string}
     * @memberof ModelsPod
     */
    cloudService: string;
    /**
     *
     * @type {string}
     * @memberof ModelsPod
     */
    clusterId: string;
    /**
     *
     * @type {string}
     * @memberof ModelsPod
     */
    clusterName: string;
    /**
     *
     * @type {number}
     * @memberof ModelsPod
     */
    containerCount: number;
    /**
     *
     * @type {Array<{ [key: string]: string; }>}
     * @memberof ModelsPod
     */
    containers: Array<{ [key: string]: string }>;
    /**
     *
     * @type {string}
     * @memberof ModelsPod
     */
    createdAt: string;
    /**
     *
     * @type {string}
     * @memberof ModelsPod
     */
    deletedAt?: string;
    /**
     *
     * @type {string}
     * @memberof ModelsPod
     */
    firstSeen: string;
    /**
     *
     * @type {boolean}
     * @memberof ModelsPod
     */
    hostIpc: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ModelsPod
     */
    hostNetwork: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ModelsPod
     */
    hostPid: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof ModelsPod
     */
    imagePullSecrets: Array<string>;
    /**
     *
     * @type {string}
     * @memberof ModelsPod
     */
    ipv4: string;
    /**
     *
     * @type {string}
     * @memberof ModelsPod
     */
    ipv6: string;
    /**
     *
     * @type {string}
     * @memberof ModelsPod
     */
    kacAgentId: string;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof ModelsPod
     */
    labels: { [key: string]: string };
    /**
     *
     * @type {Array<string>}
     * @memberof ModelsPod
     */
    labelsList: Array<string>;
    /**
     *
     * @type {string}
     * @memberof ModelsPod
     */
    lastSeen: string;
    /**
     *
     * @type {string}
     * @memberof ModelsPod
     */
    namespace: string;
    /**
     *
     * @type {string}
     * @memberof ModelsPod
     */
    nodeIpv4: string;
    /**
     *
     * @type {string}
     * @memberof ModelsPod
     */
    nodeName: string;
    /**
     *
     * @type {string}
     * @memberof ModelsPod
     */
    nodeSelector: string;
    /**
     *
     * @type {string}
     * @memberof ModelsPod
     */
    nodeUid: string;
    /**
     *
     * @type {string}
     * @memberof ModelsPod
     */
    ownerId: string;
    /**
     *
     * @type {string}
     * @memberof ModelsPod
     */
    ownerType: string;
    /**
     *
     * @type {string}
     * @memberof ModelsPod
     */
    podExternalId: string;
    /**
     *
     * @type {string}
     * @memberof ModelsPod
     */
    podId: string;
    /**
     *
     * @type {string}
     * @memberof ModelsPod
     */
    podName: string;
    /**
     *
     * @type {Array<{ [key: string]: string; }>}
     * @memberof ModelsPod
     */
    ports: Array<{ [key: string]: string }>;
    /**
     *
     * @type {boolean}
     * @memberof ModelsPod
     */
    privileged: boolean;
    /**
     *
     * @type {string}
     * @memberof ModelsPod
     */
    resourceStatus: string;
    /**
     *
     * @type {boolean}
     * @memberof ModelsPod
     */
    rootWriteAccess: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ModelsPod
     */
    runAsRootGroup: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ModelsPod
     */
    runAsRootUser: boolean;
    /**
     *
     * @type {string}
     * @memberof ModelsPod
     */
    schedulerName: string;
    /**
     *
     * @type {string}
     * @memberof ModelsPod
     */
    serviceAccountName: string;
    /**
     *
     * @type {boolean}
     * @memberof ModelsPod
     */
    shareProcessNamespace: boolean;
    /**
     *
     * @type {string}
     * @memberof ModelsPod
     */
    volumeMounts: string;
}

/**
 * Check if a given object implements the ModelsPod interface.
 */
export function instanceOfModelsPod(value: object): value is ModelsPod {
    if (!("agents" in value) || value["agents"] === undefined) return false;
    if (!("allowPrivilegeEscalation" in value) || value["allowPrivilegeEscalation"] === undefined) return false;
    if (!("annotationsList" in value) || value["annotationsList"] === undefined) return false;
    if (!("automountServiceToken" in value) || value["automountServiceToken"] === undefined) return false;
    if (!("cid" in value) || value["cid"] === undefined) return false;
    if (!("cloudAccountId" in value) || value["cloudAccountId"] === undefined) return false;
    if (!("cloudName" in value) || value["cloudName"] === undefined) return false;
    if (!("cloudRegion" in value) || value["cloudRegion"] === undefined) return false;
    if (!("cloudService" in value) || value["cloudService"] === undefined) return false;
    if (!("clusterId" in value) || value["clusterId"] === undefined) return false;
    if (!("clusterName" in value) || value["clusterName"] === undefined) return false;
    if (!("containerCount" in value) || value["containerCount"] === undefined) return false;
    if (!("containers" in value) || value["containers"] === undefined) return false;
    if (!("createdAt" in value) || value["createdAt"] === undefined) return false;
    if (!("firstSeen" in value) || value["firstSeen"] === undefined) return false;
    if (!("hostIpc" in value) || value["hostIpc"] === undefined) return false;
    if (!("hostNetwork" in value) || value["hostNetwork"] === undefined) return false;
    if (!("hostPid" in value) || value["hostPid"] === undefined) return false;
    if (!("imagePullSecrets" in value) || value["imagePullSecrets"] === undefined) return false;
    if (!("ipv4" in value) || value["ipv4"] === undefined) return false;
    if (!("ipv6" in value) || value["ipv6"] === undefined) return false;
    if (!("kacAgentId" in value) || value["kacAgentId"] === undefined) return false;
    if (!("labels" in value) || value["labels"] === undefined) return false;
    if (!("labelsList" in value) || value["labelsList"] === undefined) return false;
    if (!("lastSeen" in value) || value["lastSeen"] === undefined) return false;
    if (!("namespace" in value) || value["namespace"] === undefined) return false;
    if (!("nodeIpv4" in value) || value["nodeIpv4"] === undefined) return false;
    if (!("nodeName" in value) || value["nodeName"] === undefined) return false;
    if (!("nodeSelector" in value) || value["nodeSelector"] === undefined) return false;
    if (!("nodeUid" in value) || value["nodeUid"] === undefined) return false;
    if (!("ownerId" in value) || value["ownerId"] === undefined) return false;
    if (!("ownerType" in value) || value["ownerType"] === undefined) return false;
    if (!("podExternalId" in value) || value["podExternalId"] === undefined) return false;
    if (!("podId" in value) || value["podId"] === undefined) return false;
    if (!("podName" in value) || value["podName"] === undefined) return false;
    if (!("ports" in value) || value["ports"] === undefined) return false;
    if (!("privileged" in value) || value["privileged"] === undefined) return false;
    if (!("resourceStatus" in value) || value["resourceStatus"] === undefined) return false;
    if (!("rootWriteAccess" in value) || value["rootWriteAccess"] === undefined) return false;
    if (!("runAsRootGroup" in value) || value["runAsRootGroup"] === undefined) return false;
    if (!("runAsRootUser" in value) || value["runAsRootUser"] === undefined) return false;
    if (!("schedulerName" in value) || value["schedulerName"] === undefined) return false;
    if (!("serviceAccountName" in value) || value["serviceAccountName"] === undefined) return false;
    if (!("shareProcessNamespace" in value) || value["shareProcessNamespace"] === undefined) return false;
    if (!("volumeMounts" in value) || value["volumeMounts"] === undefined) return false;
    return true;
}

export function ModelsPodFromJSON(json: any): ModelsPod {
    return ModelsPodFromJSONTyped(json, false);
}

export function ModelsPodFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsPod {
    if (json == null) {
        return json;
    }
    return {
        agents: json["agents"],
        allowPrivilegeEscalation: json["allow_privilege_escalation"],
        annotationsList: json["annotations_list"],
        automountServiceToken: json["automount_service_token"],
        cid: json["cid"],
        cloudAccountId: json["cloud_account_id"],
        cloudName: json["cloud_name"],
        cloudRegion: json["cloud_region"],
        cloudService: json["cloud_service"],
        clusterId: json["cluster_id"],
        clusterName: json["cluster_name"],
        containerCount: json["container_count"],
        containers: json["containers"],
        createdAt: json["created_at"],
        deletedAt: json["deleted_at"] == null ? undefined : json["deleted_at"],
        firstSeen: json["first_seen"],
        hostIpc: json["host_ipc"],
        hostNetwork: json["host_network"],
        hostPid: json["host_pid"],
        imagePullSecrets: json["image_pull_secrets"],
        ipv4: json["ipv4"],
        ipv6: json["ipv6"],
        kacAgentId: json["kac_agent_id"],
        labels: json["labels"],
        labelsList: json["labels_list"],
        lastSeen: json["last_seen"],
        namespace: json["namespace"],
        nodeIpv4: json["node_ipv4"],
        nodeName: json["node_name"],
        nodeSelector: json["node_selector"],
        nodeUid: json["node_uid"],
        ownerId: json["owner_id"],
        ownerType: json["owner_type"],
        podExternalId: json["pod_external_id"],
        podId: json["pod_id"],
        podName: json["pod_name"],
        ports: json["ports"],
        privileged: json["privileged"],
        resourceStatus: json["resource_status"],
        rootWriteAccess: json["root_write_access"],
        runAsRootGroup: json["run_as_root_group"],
        runAsRootUser: json["run_as_root_user"],
        schedulerName: json["scheduler_name"],
        serviceAccountName: json["service_account_name"],
        shareProcessNamespace: json["share_process_namespace"],
        volumeMounts: json["volume_mounts"],
    };
}

export function ModelsPodToJSON(value?: ModelsPod | null): any {
    if (value == null) {
        return value;
    }
    return {
        agents: value["agents"],
        allow_privilege_escalation: value["allowPrivilegeEscalation"],
        annotations_list: value["annotationsList"],
        automount_service_token: value["automountServiceToken"],
        cid: value["cid"],
        cloud_account_id: value["cloudAccountId"],
        cloud_name: value["cloudName"],
        cloud_region: value["cloudRegion"],
        cloud_service: value["cloudService"],
        cluster_id: value["clusterId"],
        cluster_name: value["clusterName"],
        container_count: value["containerCount"],
        containers: value["containers"],
        created_at: value["createdAt"],
        deleted_at: value["deletedAt"],
        first_seen: value["firstSeen"],
        host_ipc: value["hostIpc"],
        host_network: value["hostNetwork"],
        host_pid: value["hostPid"],
        image_pull_secrets: value["imagePullSecrets"],
        ipv4: value["ipv4"],
        ipv6: value["ipv6"],
        kac_agent_id: value["kacAgentId"],
        labels: value["labels"],
        labels_list: value["labelsList"],
        last_seen: value["lastSeen"],
        namespace: value["namespace"],
        node_ipv4: value["nodeIpv4"],
        node_name: value["nodeName"],
        node_selector: value["nodeSelector"],
        node_uid: value["nodeUid"],
        owner_id: value["ownerId"],
        owner_type: value["ownerType"],
        pod_external_id: value["podExternalId"],
        pod_id: value["podId"],
        pod_name: value["podName"],
        ports: value["ports"],
        privileged: value["privileged"],
        resource_status: value["resourceStatus"],
        root_write_access: value["rootWriteAccess"],
        run_as_root_group: value["runAsRootGroup"],
        run_as_root_user: value["runAsRootUser"],
        scheduler_name: value["schedulerName"],
        service_account_name: value["serviceAccountName"],
        share_process_namespace: value["shareProcessNamespace"],
        volume_mounts: value["volumeMounts"],
    };
}