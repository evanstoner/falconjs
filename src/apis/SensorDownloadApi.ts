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
import type { DomainSensorInstallersV1, DomainSensorInstallersV2, MsaReplyMetaOnly, MsaspecQueryResponse } from "../models/index";
import {
    DomainSensorInstallersV1FromJSON,
    DomainSensorInstallersV1ToJSON,
    DomainSensorInstallersV2FromJSON,
    DomainSensorInstallersV2ToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
    MsaspecQueryResponseFromJSON,
    MsaspecQueryResponseToJSON,
} from "../models/index";

export interface SensorDownloadApiDownloadSensorInstallerByIdRequest {
    id: string;
}

export interface SensorDownloadApiDownloadSensorInstallerByIdV2Request {
    id: string;
}

export interface SensorDownloadApiGetCombinedSensorInstallersByQueryRequest {
    offset?: number;
    limit?: number;
    sort?: string;
    filter?: string;
}

export interface SensorDownloadApiGetCombinedSensorInstallersByQueryV2Request {
    offset?: number;
    limit?: number;
    sort?: string;
    filter?: string;
}

export interface SensorDownloadApiGetSensorInstallersByQueryRequest {
    offset?: number;
    limit?: number;
    sort?: string;
    filter?: string;
}

export interface SensorDownloadApiGetSensorInstallersByQueryV2Request {
    offset?: number;
    limit?: number;
    sort?: string;
    filter?: string;
}

export interface SensorDownloadApiGetSensorInstallersEntitiesRequest {
    ids: Array<string>;
}

export interface SensorDownloadApiGetSensorInstallersEntitiesV2Request {
    ids: Array<string>;
}

/**
 *
 */
export class SensorDownloadApi extends runtime.BaseAPI {
    /**
     * Download sensor installer by SHA256 ID
     */
    async downloadSensorInstallerByIdRaw(
        requestParameters: SensorDownloadApiDownloadSensorInstallerByIdRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<Blob>> {
        if (requestParameters["id"] == null) {
            throw new runtime.RequiredError("id", 'Required parameter "id" was null or undefined when calling downloadSensorInstallerById().');
        }

        const queryParameters: any = {};

        if (requestParameters["id"] != null) {
            queryParameters["id"] = requestParameters["id"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["sensor-installers:read"]);
        }

        const response = await this.request(
            {
                path: `/sensors/entities/download-installer/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.BlobApiResponse(response);
    }

    /**
     * Download sensor installer by SHA256 ID
     */
    async downloadSensorInstallerById(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blob> {
        const response = await this.downloadSensorInstallerByIdRaw({ id: id }, initOverrides);
        return await response.value();
    }

    /**
     * Download sensor installer by SHA256 ID
     */
    async downloadSensorInstallerByIdV2Raw(
        requestParameters: SensorDownloadApiDownloadSensorInstallerByIdV2Request,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<Blob>> {
        if (requestParameters["id"] == null) {
            throw new runtime.RequiredError("id", 'Required parameter "id" was null or undefined when calling downloadSensorInstallerByIdV2().');
        }

        const queryParameters: any = {};

        if (requestParameters["id"] != null) {
            queryParameters["id"] = requestParameters["id"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["sensor-installers:read"]);
        }

        const response = await this.request(
            {
                path: `/sensors/entities/download-installer/v2`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.BlobApiResponse(response);
    }

    /**
     * Download sensor installer by SHA256 ID
     */
    async downloadSensorInstallerByIdV2(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blob> {
        const response = await this.downloadSensorInstallerByIdV2Raw({ id: id }, initOverrides);
        return await response.value();
    }

    /**
     * Get sensor installer details by provided query
     */
    async getCombinedSensorInstallersByQueryRaw(
        requestParameters: SensorDownloadApiGetCombinedSensorInstallersByQueryRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<DomainSensorInstallersV1>> {
        const queryParameters: any = {};

        if (requestParameters["offset"] != null) {
            queryParameters["offset"] = requestParameters["offset"];
        }

        if (requestParameters["limit"] != null) {
            queryParameters["limit"] = requestParameters["limit"];
        }

        if (requestParameters["sort"] != null) {
            queryParameters["sort"] = requestParameters["sort"];
        }

        if (requestParameters["filter"] != null) {
            queryParameters["filter"] = requestParameters["filter"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["sensor-installers:read"]);
        }

        const response = await this.request(
            {
                path: `/sensors/combined/installers/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainSensorInstallersV1FromJSON(jsonValue));
    }

    /**
     * Get sensor installer details by provided query
     */
    async getCombinedSensorInstallersByQuery(
        offset?: number,
        limit?: number,
        sort?: string,
        filter?: string,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<DomainSensorInstallersV1> {
        const response = await this.getCombinedSensorInstallersByQueryRaw({ offset: offset, limit: limit, sort: sort, filter: filter }, initOverrides);
        return await response.value();
    }

    /**
     * Get sensor installer details by provided query
     */
    async getCombinedSensorInstallersByQueryV2Raw(
        requestParameters: SensorDownloadApiGetCombinedSensorInstallersByQueryV2Request,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<DomainSensorInstallersV2>> {
        const queryParameters: any = {};

        if (requestParameters["offset"] != null) {
            queryParameters["offset"] = requestParameters["offset"];
        }

        if (requestParameters["limit"] != null) {
            queryParameters["limit"] = requestParameters["limit"];
        }

        if (requestParameters["sort"] != null) {
            queryParameters["sort"] = requestParameters["sort"];
        }

        if (requestParameters["filter"] != null) {
            queryParameters["filter"] = requestParameters["filter"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["sensor-installers:read"]);
        }

        const response = await this.request(
            {
                path: `/sensors/combined/installers/v2`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainSensorInstallersV2FromJSON(jsonValue));
    }

    /**
     * Get sensor installer details by provided query
     */
    async getCombinedSensorInstallersByQueryV2(
        offset?: number,
        limit?: number,
        sort?: string,
        filter?: string,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<DomainSensorInstallersV2> {
        const response = await this.getCombinedSensorInstallersByQueryV2Raw({ offset: offset, limit: limit, sort: sort, filter: filter }, initOverrides);
        return await response.value();
    }

    /**
     * Get sensor installer IDs by provided query
     */
    async getSensorInstallersByQueryRaw(
        requestParameters: SensorDownloadApiGetSensorInstallersByQueryRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<MsaspecQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters["offset"] != null) {
            queryParameters["offset"] = requestParameters["offset"];
        }

        if (requestParameters["limit"] != null) {
            queryParameters["limit"] = requestParameters["limit"];
        }

        if (requestParameters["sort"] != null) {
            queryParameters["sort"] = requestParameters["sort"];
        }

        if (requestParameters["filter"] != null) {
            queryParameters["filter"] = requestParameters["filter"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["sensor-installers:read"]);
        }

        const response = await this.request(
            {
                path: `/sensors/queries/installers/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaspecQueryResponseFromJSON(jsonValue));
    }

    /**
     * Get sensor installer IDs by provided query
     */
    async getSensorInstallersByQuery(offset?: number, limit?: number, sort?: string, filter?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaspecQueryResponse> {
        const response = await this.getSensorInstallersByQueryRaw({ offset: offset, limit: limit, sort: sort, filter: filter }, initOverrides);
        return await response.value();
    }

    /**
     * Get sensor installer IDs by provided query
     */
    async getSensorInstallersByQueryV2Raw(
        requestParameters: SensorDownloadApiGetSensorInstallersByQueryV2Request,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<MsaspecQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters["offset"] != null) {
            queryParameters["offset"] = requestParameters["offset"];
        }

        if (requestParameters["limit"] != null) {
            queryParameters["limit"] = requestParameters["limit"];
        }

        if (requestParameters["sort"] != null) {
            queryParameters["sort"] = requestParameters["sort"];
        }

        if (requestParameters["filter"] != null) {
            queryParameters["filter"] = requestParameters["filter"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["sensor-installers:read"]);
        }

        const response = await this.request(
            {
                path: `/sensors/queries/installers/v2`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaspecQueryResponseFromJSON(jsonValue));
    }

    /**
     * Get sensor installer IDs by provided query
     */
    async getSensorInstallersByQueryV2(offset?: number, limit?: number, sort?: string, filter?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaspecQueryResponse> {
        const response = await this.getSensorInstallersByQueryV2Raw({ offset: offset, limit: limit, sort: sort, filter: filter }, initOverrides);
        return await response.value();
    }

    /**
     * Get CCID to use with sensor installers
     */
    async getSensorInstallersCCIDByQueryRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaspecQueryResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["sensor-installers:read"]);
        }

        const response = await this.request(
            {
                path: `/sensors/queries/installers/ccid/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaspecQueryResponseFromJSON(jsonValue));
    }

    /**
     * Get CCID to use with sensor installers
     */
    async getSensorInstallersCCIDByQuery(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaspecQueryResponse> {
        const response = await this.getSensorInstallersCCIDByQueryRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get sensor installer details by provided SHA256 IDs
     */
    async getSensorInstallersEntitiesRaw(
        requestParameters: SensorDownloadApiGetSensorInstallersEntitiesRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<DomainSensorInstallersV1>> {
        if (requestParameters["ids"] == null) {
            throw new runtime.RequiredError("ids", 'Required parameter "ids" was null or undefined when calling getSensorInstallersEntities().');
        }

        const queryParameters: any = {};

        if (requestParameters["ids"] != null) {
            queryParameters["ids"] = requestParameters["ids"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["sensor-installers:read"]);
        }

        const response = await this.request(
            {
                path: `/sensors/entities/installers/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainSensorInstallersV1FromJSON(jsonValue));
    }

    /**
     * Get sensor installer details by provided SHA256 IDs
     */
    async getSensorInstallersEntities(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainSensorInstallersV1> {
        const response = await this.getSensorInstallersEntitiesRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Get sensor installer details by provided SHA256 IDs
     */
    async getSensorInstallersEntitiesV2Raw(
        requestParameters: SensorDownloadApiGetSensorInstallersEntitiesV2Request,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<DomainSensorInstallersV2>> {
        if (requestParameters["ids"] == null) {
            throw new runtime.RequiredError("ids", 'Required parameter "ids" was null or undefined when calling getSensorInstallersEntitiesV2().');
        }

        const queryParameters: any = {};

        if (requestParameters["ids"] != null) {
            queryParameters["ids"] = requestParameters["ids"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["sensor-installers:read"]);
        }

        const response = await this.request(
            {
                path: `/sensors/entities/installers/v2`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainSensorInstallersV2FromJSON(jsonValue));
    }

    /**
     * Get sensor installer details by provided SHA256 IDs
     */
    async getSensorInstallersEntitiesV2(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainSensorInstallersV2> {
        const response = await this.getSensorInstallersEntitiesV2Raw({ ids: ids }, initOverrides);
        return await response.value();
    }
}
