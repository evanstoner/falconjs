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
import type {
    DeploymentsEntityResponse,
    ModelsAccountEntitiesInput,
    ModelsAccountStatusResponse,
    ModelsCreateDeploymentInput,
    ModelsRegistryCredentialsResponse,
    MsaAPIError,
    MsaReplyMetaOnly,
    MsaspecResponseFields,
    ScanreportsEntitiesResponse,
} from "../models/index";
import {
    DeploymentsEntityResponseFromJSON,
    DeploymentsEntityResponseToJSON,
    ModelsAccountEntitiesInputFromJSON,
    ModelsAccountEntitiesInputToJSON,
    ModelsAccountStatusResponseFromJSON,
    ModelsAccountStatusResponseToJSON,
    ModelsCreateDeploymentInputFromJSON,
    ModelsCreateDeploymentInputToJSON,
    ModelsRegistryCredentialsResponseFromJSON,
    ModelsRegistryCredentialsResponseToJSON,
    MsaAPIErrorFromJSON,
    MsaAPIErrorToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
    MsaspecResponseFieldsFromJSON,
    MsaspecResponseFieldsToJSON,
    ScanreportsEntitiesResponseFromJSON,
    ScanreportsEntitiesResponseToJSON,
} from "../models/index";

export interface CloudSnapshotsApiCreateDeploymentEntityRequest {
    body: ModelsCreateDeploymentInput;
}

export interface CloudSnapshotsApiGetScanReportRequest {
    ids: Array<string>;
}

export interface CloudSnapshotsApiReadDeploymentsCombinedRequest {
    filter?: string;
    limit?: number;
    offset?: number;
    sort?: string;
}

export interface CloudSnapshotsApiReadDeploymentsEntitiesRequest {
    ids?: Array<string>;
}

export interface CloudSnapshotsApiRegisterRequest {
    body: ModelsAccountEntitiesInput;
}

/**
 *
 */
export class CloudSnapshotsApi extends runtime.BaseAPI {
    /**
     * Launch a snapshot scan for a given cloud asset
     */
    async createDeploymentEntityRaw(
        requestParameters: CloudSnapshotsApiCreateDeploymentEntityRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<DeploymentsEntityResponse>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling createDeploymentEntity().');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["snapshot:write"]);
        }

        const response = await this.request(
            {
                path: `/snapshots/entities/deployments/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: ModelsCreateDeploymentInputToJSON(requestParameters["body"]),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DeploymentsEntityResponseFromJSON(jsonValue));
    }

    /**
     * Launch a snapshot scan for a given cloud asset
     */
    async createDeploymentEntity(body: ModelsCreateDeploymentInput, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeploymentsEntityResponse> {
        const response = await this.createDeploymentEntityRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Gets the registry credentials
     */
    async getCredentialsMixin0Mixin60Raw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelsRegistryCredentialsResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/snapshots/entities/image-registry-credentials/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelsRegistryCredentialsResponseFromJSON(jsonValue));
    }

    /**
     * Gets the registry credentials
     */
    async getCredentialsMixin0Mixin60(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelsRegistryCredentialsResponse> {
        const response = await this.getCredentialsMixin0Mixin60Raw(initOverrides);
        return await response.value();
    }

    /**
     * retrieve the scan report for an instance
     */
    async getScanReportRaw(
        requestParameters: CloudSnapshotsApiGetScanReportRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<ScanreportsEntitiesResponse>> {
        if (requestParameters["ids"] == null) {
            throw new runtime.RequiredError("ids", 'Required parameter "ids" was null or undefined when calling getScanReport().');
        }

        const queryParameters: any = {};

        if (requestParameters["ids"] != null) {
            queryParameters["ids"] = requestParameters["ids"]!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/snapshots/entities/scanreports/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ScanreportsEntitiesResponseFromJSON(jsonValue));
    }

    /**
     * retrieve the scan report for an instance
     */
    async getScanReport(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScanreportsEntitiesResponse> {
        const response = await this.getScanReportRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve snapshot jobs identified by the provided IDs
     */
    async readDeploymentsCombinedRaw(
        requestParameters: CloudSnapshotsApiReadDeploymentsCombinedRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<DeploymentsEntityResponse>> {
        const queryParameters: any = {};

        if (requestParameters["filter"] != null) {
            queryParameters["filter"] = requestParameters["filter"];
        }

        if (requestParameters["limit"] != null) {
            queryParameters["limit"] = requestParameters["limit"];
        }

        if (requestParameters["offset"] != null) {
            queryParameters["offset"] = requestParameters["offset"];
        }

        if (requestParameters["sort"] != null) {
            queryParameters["sort"] = requestParameters["sort"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/snapshots/combined/deployments/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DeploymentsEntityResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve snapshot jobs identified by the provided IDs
     */
    async readDeploymentsCombined(filter?: string, limit?: number, offset?: number, sort?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeploymentsEntityResponse> {
        const response = await this.readDeploymentsCombinedRaw({ filter: filter, limit: limit, offset: offset, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve snapshot jobs identified by the provided IDs
     */
    async readDeploymentsEntitiesRaw(
        requestParameters: CloudSnapshotsApiReadDeploymentsEntitiesRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<DeploymentsEntityResponse>> {
        const queryParameters: any = {};

        if (requestParameters["ids"] != null) {
            queryParameters["ids"] = requestParameters["ids"]!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/snapshots/entities/deployments/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DeploymentsEntityResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve snapshot jobs identified by the provided IDs
     */
    async readDeploymentsEntities(ids?: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeploymentsEntityResponse> {
        const response = await this.readDeploymentsEntitiesRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Register customer cloud account for snapshot scanning
     */
    async registerRaw(requestParameters: CloudSnapshotsApiRegisterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelsAccountStatusResponse>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling register().');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["snapshot:write"]);
        }

        const response = await this.request(
            {
                path: `/snapshots/entities/accounts/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: ModelsAccountEntitiesInputToJSON(requestParameters["body"]),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelsAccountStatusResponseFromJSON(jsonValue));
    }

    /**
     * Register customer cloud account for snapshot scanning
     */
    async register(body: ModelsAccountEntitiesInput, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelsAccountStatusResponse> {
        const response = await this.registerRaw({ body: body }, initOverrides);
        return await response.value();
    }
}
