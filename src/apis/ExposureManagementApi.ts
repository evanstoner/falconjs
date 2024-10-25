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
    DomainExternalAssetAPIPatchRequestV1,
    DomainExternalAssetsAPITypeV1,
    DomainExternalAssetsBlobAPITypeV1,
    MsaAggregateQueryRequest,
    MsaAggregatesResponse,
    MsaReplyMetaOnly,
    MsaspecQueryResponse,
    MsaspecResponseFields,
} from "../models/index";
import {
    DomainExternalAssetAPIPatchRequestV1FromJSON,
    DomainExternalAssetAPIPatchRequestV1ToJSON,
    DomainExternalAssetsAPITypeV1FromJSON,
    DomainExternalAssetsAPITypeV1ToJSON,
    DomainExternalAssetsBlobAPITypeV1FromJSON,
    DomainExternalAssetsBlobAPITypeV1ToJSON,
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

export interface ExposureManagementApiAggregateExternalAssetsRequest {
    body: Array<MsaAggregateQueryRequest>;
}

export interface ExposureManagementApiBlobDownloadExternalAssetsRequest {
    assetId: string;
    hash: string;
}

export interface ExposureManagementApiBlobPreviewExternalAssetsRequest {
    assetId: string;
    hash: string;
}

export interface ExposureManagementApiGetExternalAssetsRequest {
    ids: Array<string>;
}

export interface ExposureManagementApiPatchExternalAssetsRequest {
    body: DomainExternalAssetAPIPatchRequestV1;
}

export interface ExposureManagementApiQueryExternalAssetsRequest {
    offset?: string;
    limit?: number;
    sort?: string;
    filter?: string;
}

/**
 *
 */
export class ExposureManagementApi extends runtime.BaseAPI {
    /**
     * Returns external assets aggregates as specified via JSON in request body.
     * Returns external assets aggregates.
     */
    async aggregateExternalAssetsRaw(
        requestParameters: ExposureManagementApiAggregateExternalAssetsRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<MsaAggregatesResponse>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling aggregateExternalAssets().');
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
                path: `/fem/aggregates/external-assets/v1`,
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
     * Returns external assets aggregates as specified via JSON in request body.
     * Returns external assets aggregates.
     */
    async aggregateExternalAssets(body: Array<MsaAggregateQueryRequest>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaAggregatesResponse> {
        const response = await this.aggregateExternalAssetsRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Download the entire contents of the blob.
     * Download the entire contents of the blob. The relative link to this endpoint is returned in the GET /entities/external-assets/v1 request.
     */
    async blobDownloadExternalAssetsRaw(
        requestParameters: ExposureManagementApiBlobDownloadExternalAssetsRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<Array<number>>> {
        if (requestParameters["assetId"] == null) {
            throw new runtime.RequiredError("assetId", 'Required parameter "assetId" was null or undefined when calling blobDownloadExternalAssets().');
        }

        if (requestParameters["hash"] == null) {
            throw new runtime.RequiredError("hash", 'Required parameter "hash" was null or undefined when calling blobDownloadExternalAssets().');
        }

        const queryParameters: any = {};

        if (requestParameters["assetId"] != null) {
            queryParameters["assetId"] = requestParameters["assetId"];
        }

        if (requestParameters["hash"] != null) {
            queryParameters["hash"] = requestParameters["hash"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/fem/entities/blobs-download/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Download the entire contents of the blob.
     * Download the entire contents of the blob. The relative link to this endpoint is returned in the GET /entities/external-assets/v1 request.
     */
    async blobDownloadExternalAssets(assetId: string, hash: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<number>> {
        const response = await this.blobDownloadExternalAssetsRaw({ assetId: assetId, hash: hash }, initOverrides);
        return await response.value();
    }

    /**
     * Download a preview of the blob.
     * Download a preview of the blob. The relative link to this endpoint is returned in the GET /entities/external-assets/v1 request.
     */
    async blobPreviewExternalAssetsRaw(
        requestParameters: ExposureManagementApiBlobPreviewExternalAssetsRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<DomainExternalAssetsBlobAPITypeV1>> {
        if (requestParameters["assetId"] == null) {
            throw new runtime.RequiredError("assetId", 'Required parameter "assetId" was null or undefined when calling blobPreviewExternalAssets().');
        }

        if (requestParameters["hash"] == null) {
            throw new runtime.RequiredError("hash", 'Required parameter "hash" was null or undefined when calling blobPreviewExternalAssets().');
        }

        const queryParameters: any = {};

        if (requestParameters["assetId"] != null) {
            queryParameters["assetId"] = requestParameters["assetId"];
        }

        if (requestParameters["hash"] != null) {
            queryParameters["hash"] = requestParameters["hash"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/fem/entities/blobs-preview/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainExternalAssetsBlobAPITypeV1FromJSON(jsonValue));
    }

    /**
     * Download a preview of the blob.
     * Download a preview of the blob. The relative link to this endpoint is returned in the GET /entities/external-assets/v1 request.
     */
    async blobPreviewExternalAssets(assetId: string, hash: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainExternalAssetsBlobAPITypeV1> {
        const response = await this.blobPreviewExternalAssetsRaw({ assetId: assetId, hash: hash }, initOverrides);
        return await response.value();
    }

    /**
     * Get details on external assets by providing one or more IDs.
     */
    async getExternalAssetsRaw(
        requestParameters: ExposureManagementApiGetExternalAssetsRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<DomainExternalAssetsAPITypeV1>> {
        if (requestParameters["ids"] == null) {
            throw new runtime.RequiredError("ids", 'Required parameter "ids" was null or undefined when calling getExternalAssets().');
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
                path: `/fem/entities/external-assets/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainExternalAssetsAPITypeV1FromJSON(jsonValue));
    }

    /**
     * Get details on external assets by providing one or more IDs.
     */
    async getExternalAssets(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainExternalAssetsAPITypeV1> {
        const response = await this.getExternalAssetsRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Update the details of external assets.
     */
    async patchExternalAssetsRaw(
        requestParameters: ExposureManagementApiPatchExternalAssetsRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<DomainExternalAssetsAPITypeV1>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling patchExternalAssets().');
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
                path: `/fem/entities/external-assets/v1`,
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
                body: DomainExternalAssetAPIPatchRequestV1ToJSON(requestParameters["body"]),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainExternalAssetsAPITypeV1FromJSON(jsonValue));
    }

    /**
     * Update the details of external assets.
     */
    async patchExternalAssets(body: DomainExternalAssetAPIPatchRequestV1, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainExternalAssetsAPITypeV1> {
        const response = await this.patchExternalAssetsRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Get a list of external asset IDs that match the provided filter conditions. Use these IDs with the /entities/external-assets/v1 endpoints
     */
    async queryExternalAssetsRaw(
        requestParameters: ExposureManagementApiQueryExternalAssetsRequest,
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
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/fem/queries/external-assets/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaspecQueryResponseFromJSON(jsonValue));
    }

    /**
     * Get a list of external asset IDs that match the provided filter conditions. Use these IDs with the /entities/external-assets/v1 endpoints
     */
    async queryExternalAssets(offset?: string, limit?: number, sort?: string, filter?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaspecQueryResponse> {
        const response = await this.queryExternalAssetsRaw({ offset: offset, limit: limit, sort: sort, filter: filter }, initOverrides);
        return await response.value();
    }
}
