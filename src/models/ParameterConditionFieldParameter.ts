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
 * @interface ParameterConditionFieldParameter
 */
export interface ParameterConditionFieldParameter {
    /**
     * Optional default operator to be used as part of the condition
     * @type {string}
     * @memberof ParameterConditionFieldParameter
     */
    defaultOperator?: string;
    /**
     *
     * @type {object}
     * @memberof ParameterConditionFieldParameter
     */
    defaultValue?: object;
    /**
     * Optional text/description which can be used to provide differentiation for parameterized fields during app installation.
     * @type {string}
     * @memberof ParameterConditionFieldParameter
     */
    helperText?: string;
    /**
     * Whether the field can be specified multiple times as provisioning parameter. When true, all values or combined via an OR operator.
     * @type {boolean}
     * @memberof ParameterConditionFieldParameter
     */
    multiple: boolean;
    /**
     * The default operator that should be applied for this field.
     * @type {string}
     * @memberof ParameterConditionFieldParameter
     */
    operator?: string;
    /**
     * Indicates whether the field must be specified as a parameter at provision time.
     * @type {boolean}
     * @memberof ParameterConditionFieldParameter
     */
    required: boolean;
}

/**
 * Check if a given object implements the ParameterConditionFieldParameter interface.
 */
export function instanceOfParameterConditionFieldParameter(value: object): value is ParameterConditionFieldParameter {
    if (!("multiple" in value) || value["multiple"] === undefined) return false;
    if (!("required" in value) || value["required"] === undefined) return false;
    return true;
}

export function ParameterConditionFieldParameterFromJSON(json: any): ParameterConditionFieldParameter {
    return ParameterConditionFieldParameterFromJSONTyped(json, false);
}

export function ParameterConditionFieldParameterFromJSONTyped(json: any, ignoreDiscriminator: boolean): ParameterConditionFieldParameter {
    if (json == null) {
        return json;
    }
    return {
        defaultOperator: json["default_operator"] == null ? undefined : json["default_operator"],
        defaultValue: json["default_value"] == null ? undefined : json["default_value"],
        helperText: json["helperText"] == null ? undefined : json["helperText"],
        multiple: json["multiple"],
        operator: json["operator"] == null ? undefined : json["operator"],
        required: json["required"],
    };
}

export function ParameterConditionFieldParameterToJSON(value?: ParameterConditionFieldParameter | null): any {
    if (value == null) {
        return value;
    }
    return {
        default_operator: value["defaultOperator"],
        default_value: value["defaultValue"],
        helperText: value["helperText"],
        multiple: value["multiple"],
        operator: value["operator"],
        required: value["required"],
    };
}