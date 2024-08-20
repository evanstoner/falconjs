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
 * @interface DeviceControlExceptionReqV1
 */
export interface DeviceControlExceptionReqV1 {
    /**
     *
     * @type {string}
     * @memberof DeviceControlExceptionReqV1
     */
    action?: string;
    /**
     *
     * @type {string}
     * @memberof DeviceControlExceptionReqV1
     */
    combinedId?: string;
    /**
     *
     * @type {string}
     * @memberof DeviceControlExceptionReqV1
     */
    description?: string;
    /**
     *
     * @type {Date}
     * @memberof DeviceControlExceptionReqV1
     */
    expirationTime?: Date;
    /**
     * Unique identifier for an exception
     * @type {string}
     * @memberof DeviceControlExceptionReqV1
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof DeviceControlExceptionReqV1
     */
    productId?: string;
    /**
     *
     * @type {string}
     * @memberof DeviceControlExceptionReqV1
     */
    productIdDecimal?: string;
    /**
     *
     * @type {string}
     * @memberof DeviceControlExceptionReqV1
     */
    productName?: string;
    /**
     *
     * @type {string}
     * @memberof DeviceControlExceptionReqV1
     */
    serialNumber?: string;
    /**
     * true indicates using blob syntax USB serial numbers
     * @type {boolean}
     * @memberof DeviceControlExceptionReqV1
     */
    useWildcard?: boolean;
    /**
     * Hexadecimal VendorID used to apply the exception
     * @type {string}
     * @memberof DeviceControlExceptionReqV1
     */
    vendorId?: string;
    /**
     * Hexadecimal VendorID used to apply the exception
     * @type {string}
     * @memberof DeviceControlExceptionReqV1
     */
    vendorIdDecimal?: string;
    /**
     * Vendor Name, optional
     * @type {string}
     * @memberof DeviceControlExceptionReqV1
     */
    vendorName?: string;
}

/**
 * Check if a given object implements the DeviceControlExceptionReqV1 interface.
 */
export function instanceOfDeviceControlExceptionReqV1(value: object): value is DeviceControlExceptionReqV1 {
    return true;
}

export function DeviceControlExceptionReqV1FromJSON(json: any): DeviceControlExceptionReqV1 {
    return DeviceControlExceptionReqV1FromJSONTyped(json, false);
}

export function DeviceControlExceptionReqV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DeviceControlExceptionReqV1 {
    if (json == null) {
        return json;
    }
    return {
        action: json["action"] == null ? undefined : json["action"],
        combinedId: json["combined_id"] == null ? undefined : json["combined_id"],
        description: json["description"] == null ? undefined : json["description"],
        expirationTime: json["expiration_time"] == null ? undefined : new Date(json["expiration_time"]),
        id: json["id"] == null ? undefined : json["id"],
        productId: json["product_id"] == null ? undefined : json["product_id"],
        productIdDecimal: json["product_id_decimal"] == null ? undefined : json["product_id_decimal"],
        productName: json["product_name"] == null ? undefined : json["product_name"],
        serialNumber: json["serial_number"] == null ? undefined : json["serial_number"],
        useWildcard: json["use_wildcard"] == null ? undefined : json["use_wildcard"],
        vendorId: json["vendor_id"] == null ? undefined : json["vendor_id"],
        vendorIdDecimal: json["vendor_id_decimal"] == null ? undefined : json["vendor_id_decimal"],
        vendorName: json["vendor_name"] == null ? undefined : json["vendor_name"],
    };
}

export function DeviceControlExceptionReqV1ToJSON(value?: DeviceControlExceptionReqV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        action: value["action"],
        combined_id: value["combinedId"],
        description: value["description"],
        expiration_time: value["expirationTime"] == null ? undefined : value["expirationTime"].toISOString(),
        id: value["id"],
        product_id: value["productId"],
        product_id_decimal: value["productIdDecimal"],
        product_name: value["productName"],
        serial_number: value["serialNumber"],
        use_wildcard: value["useWildcard"],
        vendor_id: value["vendorId"],
        vendor_id_decimal: value["vendorIdDecimal"],
        vendor_name: value["vendorName"],
    };
}