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
    CoreEntitiesResponse,
    ImagesApiCombinedImageExport,
    ImagesApiCustomerAndImage,
    ImagesApiImageAssessmentHistory,
    ImagesApiImageByVulnerabilityCount,
    ImagesApiImageCount,
    ImagesApiImageCountByBaseOS,
    ImagesApiImageCountByState,
    ImagesApiImageIssuesSummary,
    ImagesApiImageVulnerabilitiesSummary,
    ImagesExtCombinedImagesResponse,
    ModelsCreateBaseImagesRequest,
    MsaAPIError,
    MsaReplyMetaOnly,
} from "../models/index";
import {
    CoreEntitiesResponseFromJSON,
    CoreEntitiesResponseToJSON,
    ImagesApiCombinedImageExportFromJSON,
    ImagesApiCombinedImageExportToJSON,
    ImagesApiCustomerAndImageFromJSON,
    ImagesApiCustomerAndImageToJSON,
    ImagesApiImageAssessmentHistoryFromJSON,
    ImagesApiImageAssessmentHistoryToJSON,
    ImagesApiImageByVulnerabilityCountFromJSON,
    ImagesApiImageByVulnerabilityCountToJSON,
    ImagesApiImageCountFromJSON,
    ImagesApiImageCountToJSON,
    ImagesApiImageCountByBaseOSFromJSON,
    ImagesApiImageCountByBaseOSToJSON,
    ImagesApiImageCountByStateFromJSON,
    ImagesApiImageCountByStateToJSON,
    ImagesApiImageIssuesSummaryFromJSON,
    ImagesApiImageIssuesSummaryToJSON,
    ImagesApiImageVulnerabilitiesSummaryFromJSON,
    ImagesApiImageVulnerabilitiesSummaryToJSON,
    ImagesExtCombinedImagesResponseFromJSON,
    ImagesExtCombinedImagesResponseToJSON,
    ModelsCreateBaseImagesRequestFromJSON,
    ModelsCreateBaseImagesRequestToJSON,
    MsaAPIErrorFromJSON,
    MsaAPIErrorToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
} from "../models/index";

export interface ContainerImagesApiAggregateImageAssessmentHistoryRequest {
    filter?: string;
}

export interface ContainerImagesApiAggregateImageCountRequest {
    filter?: string;
}

export interface ContainerImagesApiAggregateImageCountByBaseOSRequest {
    filter?: string;
}

export interface ContainerImagesApiAggregateImageCountByStateRequest {
    filter?: string;
}

export interface ContainerImagesApiCombinedBaseImagesRequest {
    filter?: string;
}

export interface ContainerImagesApiCombinedImageByVulnerabilityCountRequest {
    filter?: string;
    limit?: number;
    offset?: number;
}

export interface ContainerImagesApiCombinedImageDetailRequest {
    filter?: string;
    withConfig?: boolean;
    limit?: number;
    offset?: number;
    sort?: string;
}

export interface ContainerImagesApiCombinedImageIssuesSummaryRequest {
    cid: string;
    registry: string;
    repository: string;
    tag: string;
}

export interface ContainerImagesApiCombinedImageVulnerabilitySummaryRequest {
    cid: string;
    registry: string;
    repository: string;
    tag: string;
}

export interface ContainerImagesApiCreateBaseImagesEntitiesRequest {
    body: ModelsCreateBaseImagesRequest;
}

export interface ContainerImagesApiDeleteBaseImagesRequest {
    ids: Array<string>;
}

export interface ContainerImagesApiGetCombinedImagesRequest {
    filter?: string;
    limit?: number;
    offset?: number;
    sort?: string;
}

export interface ContainerImagesApiReadCombinedImagesExportRequest {
    filter?: string;
    expandVulnerabilities?: boolean;
    expandDetections?: boolean;
    limit?: number;
    offset?: number;
    sort?: string;
}

/**
 *
 */
export class ContainerImagesApi extends runtime.BaseAPI {
    /**
     * Image assessment history
     */
    async aggregateImageAssessmentHistoryRaw(
        requestParameters: ContainerImagesApiAggregateImageAssessmentHistoryRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<ImagesApiImageAssessmentHistory>> {
        const queryParameters: any = {};

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
                path: `/container-security/aggregates/images/assessment-history/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ImagesApiImageAssessmentHistoryFromJSON(jsonValue));
    }

    /**
     * Image assessment history
     */
    async aggregateImageAssessmentHistory(filter?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ImagesApiImageAssessmentHistory> {
        const response = await this.aggregateImageAssessmentHistoryRaw({ filter: filter }, initOverrides);
        return await response.value();
    }

    /**
     * Aggregate count of images
     */
    async aggregateImageCountRaw(
        requestParameters: ContainerImagesApiAggregateImageCountRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<ImagesApiImageCount>> {
        const queryParameters: any = {};

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
                path: `/container-security/aggregates/images/count/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ImagesApiImageCountFromJSON(jsonValue));
    }

    /**
     * Aggregate count of images
     */
    async aggregateImageCount(filter?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ImagesApiImageCount> {
        const response = await this.aggregateImageCountRaw({ filter: filter }, initOverrides);
        return await response.value();
    }

    /**
     * Aggregate count of images grouped by Base OS distribution
     */
    async aggregateImageCountByBaseOSRaw(
        requestParameters: ContainerImagesApiAggregateImageCountByBaseOSRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<ImagesApiImageCountByBaseOS>> {
        const queryParameters: any = {};

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
                path: `/container-security/aggregates/images/count-by-os-distribution/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ImagesApiImageCountByBaseOSFromJSON(jsonValue));
    }

    /**
     * Aggregate count of images grouped by Base OS distribution
     */
    async aggregateImageCountByBaseOS(filter?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ImagesApiImageCountByBaseOS> {
        const response = await this.aggregateImageCountByBaseOSRaw({ filter: filter }, initOverrides);
        return await response.value();
    }

    /**
     * Aggregate count of images grouped by state
     */
    async aggregateImageCountByStateRaw(
        requestParameters: ContainerImagesApiAggregateImageCountByStateRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<ImagesApiImageCountByState>> {
        const queryParameters: any = {};

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
                path: `/container-security/aggregates/images/count-by-state/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ImagesApiImageCountByStateFromJSON(jsonValue));
    }

    /**
     * Aggregate count of images grouped by state
     */
    async aggregateImageCountByState(filter?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ImagesApiImageCountByState> {
        const response = await this.aggregateImageCountByStateRaw({ filter: filter }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve base images for provided filter
     */
    async combinedBaseImagesRaw(
        requestParameters: ContainerImagesApiCombinedBaseImagesRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<CoreEntitiesResponse>> {
        const queryParameters: any = {};

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
                path: `/container-security/combined/base-images/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => CoreEntitiesResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve base images for provided filter
     */
    async combinedBaseImages(filter?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CoreEntitiesResponse> {
        const response = await this.combinedBaseImagesRaw({ filter: filter }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve top x images with the most vulnerabilities
     */
    async combinedImageByVulnerabilityCountRaw(
        requestParameters: ContainerImagesApiCombinedImageByVulnerabilityCountRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<ImagesApiImageByVulnerabilityCount>> {
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

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/container-security/combined/images/by-vulnerability-count/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ImagesApiImageByVulnerabilityCountFromJSON(jsonValue));
    }

    /**
     * Retrieve top x images with the most vulnerabilities
     */
    async combinedImageByVulnerabilityCount(filter?: string, limit?: number, offset?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ImagesApiImageByVulnerabilityCount> {
        const response = await this.combinedImageByVulnerabilityCountRaw({ filter: filter, limit: limit, offset: offset }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve image entities identified by the provided filter criteria
     */
    async combinedImageDetailRaw(
        requestParameters: ContainerImagesApiCombinedImageDetailRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<ImagesApiCustomerAndImage>> {
        const queryParameters: any = {};

        if (requestParameters["filter"] != null) {
            queryParameters["filter"] = requestParameters["filter"];
        }

        if (requestParameters["withConfig"] != null) {
            queryParameters["with_config"] = requestParameters["withConfig"];
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
                path: `/container-security/combined/images/detail/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ImagesApiCustomerAndImageFromJSON(jsonValue));
    }

    /**
     * Retrieve image entities identified by the provided filter criteria
     */
    async combinedImageDetail(
        filter?: string,
        withConfig?: boolean,
        limit?: number,
        offset?: number,
        sort?: string,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<ImagesApiCustomerAndImage> {
        const response = await this.combinedImageDetailRaw({ filter: filter, withConfig: withConfig, limit: limit, offset: offset, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve image issues summary such as Image detections, Runtime detections, Policies, vulnerabilities
     */
    async combinedImageIssuesSummaryRaw(
        requestParameters: ContainerImagesApiCombinedImageIssuesSummaryRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<ImagesApiImageIssuesSummary>> {
        if (requestParameters["cid"] == null) {
            throw new runtime.RequiredError("cid", 'Required parameter "cid" was null or undefined when calling combinedImageIssuesSummary().');
        }

        if (requestParameters["registry"] == null) {
            throw new runtime.RequiredError("registry", 'Required parameter "registry" was null or undefined when calling combinedImageIssuesSummary().');
        }

        if (requestParameters["repository"] == null) {
            throw new runtime.RequiredError("repository", 'Required parameter "repository" was null or undefined when calling combinedImageIssuesSummary().');
        }

        if (requestParameters["tag"] == null) {
            throw new runtime.RequiredError("tag", 'Required parameter "tag" was null or undefined when calling combinedImageIssuesSummary().');
        }

        const queryParameters: any = {};

        if (requestParameters["cid"] != null) {
            queryParameters["cid"] = requestParameters["cid"];
        }

        if (requestParameters["registry"] != null) {
            queryParameters["registry"] = requestParameters["registry"];
        }

        if (requestParameters["repository"] != null) {
            queryParameters["repository"] = requestParameters["repository"];
        }

        if (requestParameters["tag"] != null) {
            queryParameters["tag"] = requestParameters["tag"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/container-security/combined/images/issues-summary/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ImagesApiImageIssuesSummaryFromJSON(jsonValue));
    }

    /**
     * Retrieve image issues summary such as Image detections, Runtime detections, Policies, vulnerabilities
     */
    async combinedImageIssuesSummary(cid: string, registry: string, repository: string, tag: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ImagesApiImageIssuesSummary> {
        const response = await this.combinedImageIssuesSummaryRaw({ cid: cid, registry: registry, repository: repository, tag: tag }, initOverrides);
        return await response.value();
    }

    /**
     * aggregates information about vulnerabilities for an image
     */
    async combinedImageVulnerabilitySummaryRaw(
        requestParameters: ContainerImagesApiCombinedImageVulnerabilitySummaryRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<ImagesApiImageVulnerabilitiesSummary>> {
        if (requestParameters["cid"] == null) {
            throw new runtime.RequiredError("cid", 'Required parameter "cid" was null or undefined when calling combinedImageVulnerabilitySummary().');
        }

        if (requestParameters["registry"] == null) {
            throw new runtime.RequiredError("registry", 'Required parameter "registry" was null or undefined when calling combinedImageVulnerabilitySummary().');
        }

        if (requestParameters["repository"] == null) {
            throw new runtime.RequiredError("repository", 'Required parameter "repository" was null or undefined when calling combinedImageVulnerabilitySummary().');
        }

        if (requestParameters["tag"] == null) {
            throw new runtime.RequiredError("tag", 'Required parameter "tag" was null or undefined when calling combinedImageVulnerabilitySummary().');
        }

        const queryParameters: any = {};

        if (requestParameters["cid"] != null) {
            queryParameters["cid"] = requestParameters["cid"];
        }

        if (requestParameters["registry"] != null) {
            queryParameters["registry"] = requestParameters["registry"];
        }

        if (requestParameters["repository"] != null) {
            queryParameters["repository"] = requestParameters["repository"];
        }

        if (requestParameters["tag"] != null) {
            queryParameters["tag"] = requestParameters["tag"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/container-security/combined/images/vulnerabilities-summary/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ImagesApiImageVulnerabilitiesSummaryFromJSON(jsonValue));
    }

    /**
     * aggregates information about vulnerabilities for an image
     */
    async combinedImageVulnerabilitySummary(
        cid: string,
        registry: string,
        repository: string,
        tag: string,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<ImagesApiImageVulnerabilitiesSummary> {
        const response = await this.combinedImageVulnerabilitySummaryRaw({ cid: cid, registry: registry, repository: repository, tag: tag }, initOverrides);
        return await response.value();
    }

    /**
     * Creates base images using the provided details
     */
    async createBaseImagesEntitiesRaw(
        requestParameters: ContainerImagesApiCreateBaseImagesEntitiesRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<CoreEntitiesResponse>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling createBaseImagesEntities().');
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
                path: `/container-security/entities/base-images/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: ModelsCreateBaseImagesRequestToJSON(requestParameters["body"]),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => CoreEntitiesResponseFromJSON(jsonValue));
    }

    /**
     * Creates base images using the provided details
     */
    async createBaseImagesEntities(body: ModelsCreateBaseImagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CoreEntitiesResponse> {
        const response = await this.createBaseImagesEntitiesRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Delete base images by base image uuid
     */
    async deleteBaseImagesRaw(
        requestParameters: ContainerImagesApiDeleteBaseImagesRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<CoreEntitiesResponse>> {
        if (requestParameters["ids"] == null) {
            throw new runtime.RequiredError("ids", 'Required parameter "ids" was null or undefined when calling deleteBaseImages().');
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
                path: `/container-security/entities/base-images/v1`,
                method: "DELETE",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => CoreEntitiesResponseFromJSON(jsonValue));
    }

    /**
     * Delete base images by base image uuid
     */
    async deleteBaseImages(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CoreEntitiesResponse> {
        const response = await this.deleteBaseImagesRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Get image assessment results by providing an FQL filter and paging details
     */
    async getCombinedImagesRaw(
        requestParameters: ContainerImagesApiGetCombinedImagesRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<ImagesExtCombinedImagesResponse>> {
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
                path: `/container-security/combined/image-assessment/images/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ImagesExtCombinedImagesResponseFromJSON(jsonValue));
    }

    /**
     * Get image assessment results by providing an FQL filter and paging details
     */
    async getCombinedImages(filter?: string, limit?: number, offset?: number, sort?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ImagesExtCombinedImagesResponse> {
        const response = await this.getCombinedImagesRaw({ filter: filter, limit: limit, offset: offset, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve images with an option to expand aggregated vulnerabilities/detections
     */
    async readCombinedImagesExportRaw(
        requestParameters: ContainerImagesApiReadCombinedImagesExportRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<ImagesApiCombinedImageExport>> {
        const queryParameters: any = {};

        if (requestParameters["filter"] != null) {
            queryParameters["filter"] = requestParameters["filter"];
        }

        if (requestParameters["expandVulnerabilities"] != null) {
            queryParameters["expand_vulnerabilities"] = requestParameters["expandVulnerabilities"];
        }

        if (requestParameters["expandDetections"] != null) {
            queryParameters["expand_detections"] = requestParameters["expandDetections"];
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
                path: `/container-security/combined/images/export/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ImagesApiCombinedImageExportFromJSON(jsonValue));
    }

    /**
     * Retrieve images with an option to expand aggregated vulnerabilities/detections
     */
    async readCombinedImagesExport(
        filter?: string,
        expandVulnerabilities?: boolean,
        expandDetections?: boolean,
        limit?: number,
        offset?: number,
        sort?: string,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<ImagesApiCombinedImageExport> {
        const response = await this.readCombinedImagesExportRaw(
            { filter: filter, expandVulnerabilities: expandVulnerabilities, expandDetections: expandDetections, limit: limit, offset: offset, sort: sort },
            initOverrides,
        );
        return await response.value();
    }
}
