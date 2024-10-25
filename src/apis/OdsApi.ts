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
    EntitiesODSCancelScanRequest,
    EntitiesODSScanHostResponse,
    EntitiesODSScanMaliciousFileResponse,
    EntitiesODSScanRequest,
    EntitiesODSScanResponse,
    EntitiesODSScanResponseV2,
    EntitiesODSScheduleScanRequest,
    EntitiesODSScheduleScanResponse,
    MsaAggregateQueryRequest,
    MsaAggregatesResponse,
    MsaReplyMetaOnly,
    MsaspecQueryResponse,
    MsaspecResponseFields,
} from "../models/index";
import {
    EntitiesODSCancelScanRequestFromJSON,
    EntitiesODSCancelScanRequestToJSON,
    EntitiesODSScanHostResponseFromJSON,
    EntitiesODSScanHostResponseToJSON,
    EntitiesODSScanMaliciousFileResponseFromJSON,
    EntitiesODSScanMaliciousFileResponseToJSON,
    EntitiesODSScanRequestFromJSON,
    EntitiesODSScanRequestToJSON,
    EntitiesODSScanResponseFromJSON,
    EntitiesODSScanResponseToJSON,
    EntitiesODSScanResponseV2FromJSON,
    EntitiesODSScanResponseV2ToJSON,
    EntitiesODSScheduleScanRequestFromJSON,
    EntitiesODSScheduleScanRequestToJSON,
    EntitiesODSScheduleScanResponseFromJSON,
    EntitiesODSScheduleScanResponseToJSON,
    MsaAggregateQueryRequestFromJSON,
    MsaAggregateQueryRequestToJSON,
    MsaAggregatesResponseFromJSON,
    MsaAggregatesResponseToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
    MsaspecQueryResponseFromJSON,
    MsaspecQueryResponseToJSON,
    MsaspecResponseFieldsFromJSON,
    MsaspecResponseFieldsToJSON,
} from "../models/index";

export interface OdsApiAggregateQueryScanHostMetadataRequest {
    body: Array<MsaAggregateQueryRequest>;
}

export interface OdsApiAggregateScansRequest {
    body: Array<MsaAggregateQueryRequest>;
}

export interface OdsApiAggregateScheduledScansRequest {
    body: Array<MsaAggregateQueryRequest>;
}

export interface OdsApiCancelScansRequest {
    body: EntitiesODSCancelScanRequest;
}

export interface OdsApiCreateScanRequest {
    body: EntitiesODSScanRequest;
}

export interface OdsApiDeleteScheduledScansRequest {
    ids: Array<string>;
    filter?: string;
}

export interface OdsApiGetMaliciousFilesByIdsRequest {
    ids: Array<string>;
}

export interface OdsApiGetScanHostMetadataByIdsRequest {
    ids: Array<string>;
}

export interface OdsApiGetScansByScanIdsRequest {
    ids: Array<string>;
}

export interface OdsApiGetScansByScanIdsV2Request {
    ids: Array<string>;
}

export interface OdsApiGetScheduledScansByScanIdsRequest {
    ids: Array<string>;
}

export interface OdsApiQueryMaliciousFilesRequest {
    filter?: string;
    offset?: number;
    limit?: number;
    sort?: QueryMaliciousFilesSortEnum;
}

export interface OdsApiQueryScanHostMetadataRequest {
    filter?: string;
    offset?: number;
    limit?: number;
    sort?: QueryScanHostMetadataSortEnum;
}

export interface OdsApiQueryScansRequest {
    filter?: string;
    offset?: number;
    limit?: number;
    sort?: QueryScansSortEnum;
}

export interface OdsApiQueryScheduledScansRequest {
    filter?: string;
    offset?: number;
    limit?: number;
    sort?: QueryScheduledScansSortEnum;
}

export interface OdsApiScheduleScanRequest {
    body: EntitiesODSScheduleScanRequest;
}

/**
 *
 */
export class OdsApi extends runtime.BaseAPI {
    /**
     * Get aggregates on ODS scan-hosts data.
     */
    async aggregateQueryScanHostMetadataRaw(
        requestParameters: OdsApiAggregateQueryScanHostMetadataRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<MsaAggregatesResponse>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling aggregateQueryScanHostMetadata().');
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
                path: `/ods/aggregates/scan-hosts/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters["body"]!.map(MsaAggregateQueryRequestToJSON),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaAggregatesResponseFromJSON(jsonValue));
    }

    /**
     * Get aggregates on ODS scan-hosts data.
     */
    async aggregateQueryScanHostMetadata(body: Array<MsaAggregateQueryRequest>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaAggregatesResponse> {
        const response = await this.aggregateQueryScanHostMetadataRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Get aggregates on ODS scan data.
     */
    async aggregateScansRaw(requestParameters: OdsApiAggregateScansRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaAggregatesResponse>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling aggregateScans().');
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
                path: `/ods/aggregates/scans/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters["body"]!.map(MsaAggregateQueryRequestToJSON),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaAggregatesResponseFromJSON(jsonValue));
    }

    /**
     * Get aggregates on ODS scan data.
     */
    async aggregateScans(body: Array<MsaAggregateQueryRequest>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaAggregatesResponse> {
        const response = await this.aggregateScansRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Get aggregates on ODS scheduled-scan data.
     */
    async aggregateScheduledScansRaw(
        requestParameters: OdsApiAggregateScheduledScansRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<MsaAggregatesResponse>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling aggregateScheduledScans().');
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
                path: `/ods/aggregates/scheduled-scans/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters["body"]!.map(MsaAggregateQueryRequestToJSON),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaAggregatesResponseFromJSON(jsonValue));
    }

    /**
     * Get aggregates on ODS scheduled-scan data.
     */
    async aggregateScheduledScans(body: Array<MsaAggregateQueryRequest>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaAggregatesResponse> {
        const response = await this.aggregateScheduledScansRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Cancel ODS scans for the given scan ids.
     */
    async cancelScansRaw(requestParameters: OdsApiCancelScansRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaspecQueryResponse>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling cancelScans().');
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
                path: `/ods/entities/scan-control-actions/cancel/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: EntitiesODSCancelScanRequestToJSON(requestParameters["body"]),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaspecQueryResponseFromJSON(jsonValue));
    }

    /**
     * Cancel ODS scans for the given scan ids.
     */
    async cancelScans(body: EntitiesODSCancelScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaspecQueryResponse> {
        const response = await this.cancelScansRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Create ODS scan and start or schedule scan for the given scan request.
     */
    async createScanRaw(requestParameters: OdsApiCreateScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntitiesODSScanResponse>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling createScan().');
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
                path: `/ods/entities/scans/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: EntitiesODSScanRequestToJSON(requestParameters["body"]),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => EntitiesODSScanResponseFromJSON(jsonValue));
    }

    /**
     * Create ODS scan and start or schedule scan for the given scan request.
     */
    async createScan(body: EntitiesODSScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntitiesODSScanResponse> {
        const response = await this.createScanRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Delete ODS scheduled-scans for the given scheduled-scan ids.
     */
    async deleteScheduledScansRaw(
        requestParameters: OdsApiDeleteScheduledScansRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<MsaspecQueryResponse>> {
        if (requestParameters["ids"] == null) {
            throw new runtime.RequiredError("ids", 'Required parameter "ids" was null or undefined when calling deleteScheduledScans().');
        }

        const queryParameters: any = {};

        if (requestParameters["ids"] != null) {
            queryParameters["ids"] = requestParameters["ids"];
        }

        if (requestParameters["filter"] != null) {
            queryParameters["filter"] = requestParameters["filter"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/ods/entities/scheduled-scans/v1`,
                method: "DELETE",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaspecQueryResponseFromJSON(jsonValue));
    }

    /**
     * Delete ODS scheduled-scans for the given scheduled-scan ids.
     */
    async deleteScheduledScans(ids: Array<string>, filter?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaspecQueryResponse> {
        const response = await this.deleteScheduledScansRaw({ ids: ids, filter: filter }, initOverrides);
        return await response.value();
    }

    /**
     * Get malicious files by ids.
     */
    async getMaliciousFilesByIdsRaw(
        requestParameters: OdsApiGetMaliciousFilesByIdsRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<EntitiesODSScanMaliciousFileResponse>> {
        if (requestParameters["ids"] == null) {
            throw new runtime.RequiredError("ids", 'Required parameter "ids" was null or undefined when calling getMaliciousFilesByIds().');
        }

        const queryParameters: any = {};

        if (requestParameters["ids"] != null) {
            queryParameters["ids"] = requestParameters["ids"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/ods/entities/malicious-files/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => EntitiesODSScanMaliciousFileResponseFromJSON(jsonValue));
    }

    /**
     * Get malicious files by ids.
     */
    async getMaliciousFilesByIds(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntitiesODSScanMaliciousFileResponse> {
        const response = await this.getMaliciousFilesByIdsRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Get scan hosts by ids.
     */
    async getScanHostMetadataByIdsRaw(
        requestParameters: OdsApiGetScanHostMetadataByIdsRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<EntitiesODSScanHostResponse>> {
        if (requestParameters["ids"] == null) {
            throw new runtime.RequiredError("ids", 'Required parameter "ids" was null or undefined when calling getScanHostMetadataByIds().');
        }

        const queryParameters: any = {};

        if (requestParameters["ids"] != null) {
            queryParameters["ids"] = requestParameters["ids"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/ods/entities/scan-hosts/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => EntitiesODSScanHostResponseFromJSON(jsonValue));
    }

    /**
     * Get scan hosts by ids.
     */
    async getScanHostMetadataByIds(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntitiesODSScanHostResponse> {
        const response = await this.getScanHostMetadataByIdsRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Get Scans by IDs.
     */
    async getScansByScanIdsRaw(requestParameters: OdsApiGetScansByScanIdsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntitiesODSScanResponse>> {
        if (requestParameters["ids"] == null) {
            throw new runtime.RequiredError("ids", 'Required parameter "ids" was null or undefined when calling getScansByScanIds().');
        }

        const queryParameters: any = {};

        if (requestParameters["ids"] != null) {
            queryParameters["ids"] = requestParameters["ids"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/ods/entities/scans/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => EntitiesODSScanResponseFromJSON(jsonValue));
    }

    /**
     * Get Scans by IDs.
     */
    async getScansByScanIds(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntitiesODSScanResponse> {
        const response = await this.getScansByScanIdsRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Get Scans by IDs.
     */
    async getScansByScanIdsV2Raw(
        requestParameters: OdsApiGetScansByScanIdsV2Request,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<EntitiesODSScanResponseV2>> {
        if (requestParameters["ids"] == null) {
            throw new runtime.RequiredError("ids", 'Required parameter "ids" was null or undefined when calling getScansByScanIdsV2().');
        }

        const queryParameters: any = {};

        if (requestParameters["ids"] != null) {
            queryParameters["ids"] = requestParameters["ids"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/ods/entities/scans/v2`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => EntitiesODSScanResponseV2FromJSON(jsonValue));
    }

    /**
     * Get Scans by IDs.
     */
    async getScansByScanIdsV2(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntitiesODSScanResponseV2> {
        const response = await this.getScansByScanIdsV2Raw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Get ScheduledScans by IDs.
     */
    async getScheduledScansByScanIdsRaw(
        requestParameters: OdsApiGetScheduledScansByScanIdsRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<EntitiesODSScheduleScanResponse>> {
        if (requestParameters["ids"] == null) {
            throw new runtime.RequiredError("ids", 'Required parameter "ids" was null or undefined when calling getScheduledScansByScanIds().');
        }

        const queryParameters: any = {};

        if (requestParameters["ids"] != null) {
            queryParameters["ids"] = requestParameters["ids"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/ods/entities/scheduled-scans/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => EntitiesODSScheduleScanResponseFromJSON(jsonValue));
    }

    /**
     * Get ScheduledScans by IDs.
     */
    async getScheduledScansByScanIds(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntitiesODSScheduleScanResponse> {
        const response = await this.getScheduledScansByScanIdsRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Query malicious files.
     */
    async queryMaliciousFilesRaw(requestParameters: OdsApiQueryMaliciousFilesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaspecQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters["filter"] != null) {
            queryParameters["filter"] = requestParameters["filter"];
        }

        if (requestParameters["offset"] != null) {
            queryParameters["offset"] = requestParameters["offset"];
        }

        if (requestParameters["limit"] != null) {
            queryParameters["limit"] = requestParameters["limit"];
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
                path: `/ods/queries/malicious-files/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaspecQueryResponseFromJSON(jsonValue));
    }

    /**
     * Query malicious files.
     */
    async queryMaliciousFiles(
        filter?: string,
        offset?: number,
        limit?: number,
        sort?: QueryMaliciousFilesSortEnum,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<MsaspecQueryResponse> {
        const response = await this.queryMaliciousFilesRaw({ filter: filter, offset: offset, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Query scan hosts.
     */
    async queryScanHostMetadataRaw(
        requestParameters: OdsApiQueryScanHostMetadataRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<MsaspecQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters["filter"] != null) {
            queryParameters["filter"] = requestParameters["filter"];
        }

        if (requestParameters["offset"] != null) {
            queryParameters["offset"] = requestParameters["offset"];
        }

        if (requestParameters["limit"] != null) {
            queryParameters["limit"] = requestParameters["limit"];
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
                path: `/ods/queries/scan-hosts/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaspecQueryResponseFromJSON(jsonValue));
    }

    /**
     * Query scan hosts.
     */
    async queryScanHostMetadata(
        filter?: string,
        offset?: number,
        limit?: number,
        sort?: QueryScanHostMetadataSortEnum,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<MsaspecQueryResponse> {
        const response = await this.queryScanHostMetadataRaw({ filter: filter, offset: offset, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Query Scans.
     */
    async queryScansRaw(requestParameters: OdsApiQueryScansRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaspecQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters["filter"] != null) {
            queryParameters["filter"] = requestParameters["filter"];
        }

        if (requestParameters["offset"] != null) {
            queryParameters["offset"] = requestParameters["offset"];
        }

        if (requestParameters["limit"] != null) {
            queryParameters["limit"] = requestParameters["limit"];
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
                path: `/ods/queries/scans/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaspecQueryResponseFromJSON(jsonValue));
    }

    /**
     * Query Scans.
     */
    async queryScans(filter?: string, offset?: number, limit?: number, sort?: QueryScansSortEnum, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaspecQueryResponse> {
        const response = await this.queryScansRaw({ filter: filter, offset: offset, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Query ScheduledScans.
     */
    async queryScheduledScansRaw(requestParameters: OdsApiQueryScheduledScansRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaspecQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters["filter"] != null) {
            queryParameters["filter"] = requestParameters["filter"];
        }

        if (requestParameters["offset"] != null) {
            queryParameters["offset"] = requestParameters["offset"];
        }

        if (requestParameters["limit"] != null) {
            queryParameters["limit"] = requestParameters["limit"];
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
                path: `/ods/queries/scheduled-scans/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaspecQueryResponseFromJSON(jsonValue));
    }

    /**
     * Query ScheduledScans.
     */
    async queryScheduledScans(
        filter?: string,
        offset?: number,
        limit?: number,
        sort?: QueryScheduledScansSortEnum,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<MsaspecQueryResponse> {
        const response = await this.queryScheduledScansRaw({ filter: filter, offset: offset, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Create ODS scan and start or schedule scan for the given scan request.
     */
    async scheduleScanRaw(requestParameters: OdsApiScheduleScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntitiesODSScheduleScanResponse>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling scheduleScan().');
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
                path: `/ods/entities/scheduled-scans/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: EntitiesODSScheduleScanRequestToJSON(requestParameters["body"]),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => EntitiesODSScheduleScanResponseFromJSON(jsonValue));
    }

    /**
     * Create ODS scan and start or schedule scan for the given scan request.
     */
    async scheduleScan(body: EntitiesODSScheduleScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntitiesODSScheduleScanResponse> {
        const response = await this.scheduleScanRaw({ body: body }, initOverrides);
        return await response.value();
    }
}

/**
 * @export
 */
export const QueryMaliciousFilesSortEnum = {
    IdAsc: "id|asc",
    IdDesc: "id|desc",
    ScanIdAsc: "scan_id|asc",
    ScanIdDesc: "scan_id|desc",
    HostIdAsc: "host_id|asc",
    HostIdDesc: "host_id|desc",
    HostScanIdAsc: "host_scan_id|asc",
    HostScanIdDesc: "host_scan_id|desc",
    FilenameAsc: "filename|asc",
    FilenameDesc: "filename|desc",
    HashAsc: "hash|asc",
    HashDesc: "hash|desc",
    PatternIdAsc: "pattern_id|asc",
    PatternIdDesc: "pattern_id|desc",
    SeverityAsc: "severity|asc",
    SeverityDesc: "severity|desc",
    LastUpdatedAsc: "last_updated|asc",
    LastUpdatedDesc: "last_updated|desc",
} as const;
export type QueryMaliciousFilesSortEnum = (typeof QueryMaliciousFilesSortEnum)[keyof typeof QueryMaliciousFilesSortEnum];
/**
 * @export
 */
export const QueryScanHostMetadataSortEnum = {
    IdAsc: "id|asc",
    IdDesc: "id|desc",
    ScanIdAsc: "scan_id|asc",
    ScanIdDesc: "scan_id|desc",
    HostIdAsc: "host_id|asc",
    HostIdDesc: "host_id|desc",
    FilecountScannedAsc: "filecount.scanned|asc",
    FilecountScannedDesc: "filecount.scanned|desc",
    FilecountMaliciousAsc: "filecount.malicious|asc",
    FilecountMaliciousDesc: "filecount.malicious|desc",
    FilecountQuarantinedAsc: "filecount.quarantined|asc",
    FilecountQuarantinedDesc: "filecount.quarantined|desc",
    FilecountSkippedAsc: "filecount.skipped|asc",
    FilecountSkippedDesc: "filecount.skipped|desc",
    StatusAsc: "status|asc",
    StatusDesc: "status|desc",
    SeverityAsc: "severity|asc",
    SeverityDesc: "severity|desc",
    StartedOnAsc: "started_on|asc",
    StartedOnDesc: "started_on|desc",
    CompletedOnAsc: "completed_on|asc",
    CompletedOnDesc: "completed_on|desc",
    LastUpdatedAsc: "last_updated|asc",
    LastUpdatedDesc: "last_updated|desc",
    ScanControlReasonKeywordAsc: "scan_control_reason.keyword|asc",
    ScanControlReasonKeywordDesc: "scan_control_reason.keyword|desc",
} as const;
export type QueryScanHostMetadataSortEnum = (typeof QueryScanHostMetadataSortEnum)[keyof typeof QueryScanHostMetadataSortEnum];
/**
 * @export
 */
export const QueryScansSortEnum = {
    IdAsc: "id|asc",
    IdDesc: "id|desc",
    InitiatedFromAsc: "initiated_from|asc",
    InitiatedFromDesc: "initiated_from|desc",
    DescriptionKeywordAsc: "description.keyword|asc",
    DescriptionKeywordDesc: "description.keyword|desc",
    FilecountScannedAsc: "filecount.scanned|asc",
    FilecountScannedDesc: "filecount.scanned|desc",
    FilecountMaliciousAsc: "filecount.malicious|asc",
    FilecountMaliciousDesc: "filecount.malicious|desc",
    FilecountQuarantinedAsc: "filecount.quarantined|asc",
    FilecountQuarantinedDesc: "filecount.quarantined|desc",
    FilecountSkippedAsc: "filecount.skipped|asc",
    FilecountSkippedDesc: "filecount.skipped|desc",
    AffectedHostsCountAsc: "affected_hosts_count|asc",
    AffectedHostsCountDesc: "affected_hosts_count|desc",
    StatusAsc: "status|asc",
    StatusDesc: "status|desc",
    SeverityAsc: "severity|asc",
    SeverityDesc: "severity|desc",
    ScanStartedOnAsc: "scan_started_on|asc",
    ScanStartedOnDesc: "scan_started_on|desc",
    ScanCompletedOnAsc: "scan_completed_on|asc",
    ScanCompletedOnDesc: "scan_completed_on|desc",
    CreatedOnAsc: "created_on|asc",
    CreatedOnDesc: "created_on|desc",
    CreatedByAsc: "created_by|asc",
    CreatedByDesc: "created_by|desc",
    LastUpdatedAsc: "last_updated|asc",
    LastUpdatedDesc: "last_updated|desc",
    TargetedHostCountAsc: "targeted_host_count|asc",
    TargetedHostCountDesc: "targeted_host_count|desc",
    MissingHostCountAsc: "missing_host_count|asc",
    MissingHostCountDesc: "missing_host_count|desc",
} as const;
export type QueryScansSortEnum = (typeof QueryScansSortEnum)[keyof typeof QueryScansSortEnum];
/**
 * @export
 */
export const QueryScheduledScansSortEnum = {
    IdAsc: "id|asc",
    IdDesc: "id|desc",
    DescriptionKeywordAsc: "description.keyword|asc",
    DescriptionKeywordDesc: "description.keyword|desc",
    StatusAsc: "status|asc",
    StatusDesc: "status|desc",
    ScheduleStartTimestampAsc: "schedule.start_timestamp|asc",
    ScheduleStartTimestampDesc: "schedule.start_timestamp|desc",
    ScheduleIntervalAsc: "schedule.interval|asc",
    ScheduleIntervalDesc: "schedule.interval|desc",
    CreatedOnAsc: "created_on|asc",
    CreatedOnDesc: "created_on|desc",
    CreatedByAsc: "created_by|asc",
    CreatedByDesc: "created_by|desc",
    LastUpdatedAsc: "last_updated|asc",
    LastUpdatedDesc: "last_updated|desc",
} as const;
export type QueryScheduledScansSortEnum = (typeof QueryScheduledScansSortEnum)[keyof typeof QueryScheduledScansSortEnum];
