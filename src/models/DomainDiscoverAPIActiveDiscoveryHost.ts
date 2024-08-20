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
import type { DomainDiscoverAPIActiveDiscoveryNetwork } from "./DomainDiscoverAPIActiveDiscoveryNetwork";
import {
    DomainDiscoverAPIActiveDiscoveryNetworkFromJSON,
    DomainDiscoverAPIActiveDiscoveryNetworkFromJSONTyped,
    DomainDiscoverAPIActiveDiscoveryNetworkToJSON,
} from "./DomainDiscoverAPIActiveDiscoveryNetwork";

/**
 * Information obtained from active discovery.
 * @export
 * @interface DomainDiscoverAPIActiveDiscoveryHost
 */
export interface DomainDiscoverAPIActiveDiscoveryHost {
    /**
     * The open ports discovered on the asset.
     * @type {Array<DomainDiscoverAPIActiveDiscoveryNetwork>}
     * @memberof DomainDiscoverAPIActiveDiscoveryHost
     */
    networks?: Array<DomainDiscoverAPIActiveDiscoveryNetwork>;
    /**
     * The open ports discovered on the asset.
     * @type {Array<string>}
     * @memberof DomainDiscoverAPIActiveDiscoveryHost
     */
    openPorts?: Array<string>;
}

/**
 * Check if a given object implements the DomainDiscoverAPIActiveDiscoveryHost interface.
 */
export function instanceOfDomainDiscoverAPIActiveDiscoveryHost(value: object): value is DomainDiscoverAPIActiveDiscoveryHost {
    return true;
}

export function DomainDiscoverAPIActiveDiscoveryHostFromJSON(json: any): DomainDiscoverAPIActiveDiscoveryHost {
    return DomainDiscoverAPIActiveDiscoveryHostFromJSONTyped(json, false);
}

export function DomainDiscoverAPIActiveDiscoveryHostFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainDiscoverAPIActiveDiscoveryHost {
    if (json == null) {
        return json;
    }
    return {
        networks: json["networks"] == null ? undefined : (json["networks"] as Array<any>).map(DomainDiscoverAPIActiveDiscoveryNetworkFromJSON),
        openPorts: json["open_ports"] == null ? undefined : json["open_ports"],
    };
}

export function DomainDiscoverAPIActiveDiscoveryHostToJSON(value?: DomainDiscoverAPIActiveDiscoveryHost | null): any {
    if (value == null) {
        return value;
    }
    return {
        networks: value["networks"] == null ? undefined : (value["networks"] as Array<any>).map(DomainDiscoverAPIActiveDiscoveryNetworkToJSON),
        open_ports: value["openPorts"],
    };
}