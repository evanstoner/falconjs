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

import * as runtime from "../runtime";
import type { ModelsDeliverySettingsEntityResponse, ModelsDeliverySettingsRequest, MsaReplyMetaOnly, MsaspecResponseFields } from "../models/index";
import {
    ModelsDeliverySettingsEntityResponseFromJSON,
    ModelsDeliverySettingsEntityResponseToJSON,
    ModelsDeliverySettingsRequestFromJSON,
    ModelsDeliverySettingsRequestToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
    MsaspecResponseFieldsFromJSON,
    MsaspecResponseFieldsToJSON,
} from "../models/index";

export interface DeliverySettingsApiPostDeliverySettingsRequest {
    body: ModelsDeliverySettingsRequest;
}

/**
 *
 */
export class DeliverySettingsApi extends runtime.BaseAPI {
    /**
     * Get Delivery Settings
     */
    async getDeliverySettingsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelsDeliverySettingsEntityResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/delivery-settings/entities/delivery-settings/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelsDeliverySettingsEntityResponseFromJSON(jsonValue));
    }

    /**
     * Get Delivery Settings
     */
    async getDeliverySettings(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelsDeliverySettingsEntityResponse> {
        const response = await this.getDeliverySettingsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Create Delivery Settings
     */
    async postDeliverySettingsRaw(
        requestParameters: DeliverySettingsApiPostDeliverySettingsRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<ModelsDeliverySettingsEntityResponse>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling postDeliverySettings().');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/delivery-settings/entities/delivery-settings/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: ModelsDeliverySettingsRequestToJSON(requestParameters["body"]),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelsDeliverySettingsEntityResponseFromJSON(jsonValue));
    }

    /**
     * Create Delivery Settings
     */
    async postDeliverySettings(body: ModelsDeliverySettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelsDeliverySettingsEntityResponse> {
        const response = await this.postDeliverySettingsRaw({ body: body }, initOverrides);
        return await response.value();
    }
}
