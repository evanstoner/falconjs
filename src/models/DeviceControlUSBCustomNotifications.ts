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
import type { DeviceControlUSBCustomNotification } from "./DeviceControlUSBCustomNotification";
import { DeviceControlUSBCustomNotificationFromJSON, DeviceControlUSBCustomNotificationFromJSONTyped, DeviceControlUSBCustomNotificationToJSON } from "./DeviceControlUSBCustomNotification";

/**
 *
 * @export
 * @interface DeviceControlUSBCustomNotifications
 */
export interface DeviceControlUSBCustomNotifications {
    /**
     *
     * @type {DeviceControlUSBCustomNotification}
     * @memberof DeviceControlUSBCustomNotifications
     */
    blockedNotification?: DeviceControlUSBCustomNotification;
    /**
     *
     * @type {DeviceControlUSBCustomNotification}
     * @memberof DeviceControlUSBCustomNotifications
     */
    restrictedNotification?: DeviceControlUSBCustomNotification;
}

/**
 * Check if a given object implements the DeviceControlUSBCustomNotifications interface.
 */
export function instanceOfDeviceControlUSBCustomNotifications(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeviceControlUSBCustomNotificationsFromJSON(json: any): DeviceControlUSBCustomNotifications {
    return DeviceControlUSBCustomNotificationsFromJSONTyped(json, false);
}

export function DeviceControlUSBCustomNotificationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeviceControlUSBCustomNotifications {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        blockedNotification: !exists(json, "blocked_notification") ? undefined : DeviceControlUSBCustomNotificationFromJSON(json["blocked_notification"]),
        restrictedNotification: !exists(json, "restricted_notification") ? undefined : DeviceControlUSBCustomNotificationFromJSON(json["restricted_notification"]),
    };
}

export function DeviceControlUSBCustomNotificationsToJSON(value?: DeviceControlUSBCustomNotifications | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        blocked_notification: DeviceControlUSBCustomNotificationToJSON(value.blockedNotification),
        restricted_notification: DeviceControlUSBCustomNotificationToJSON(value.restrictedNotification),
    };
}
