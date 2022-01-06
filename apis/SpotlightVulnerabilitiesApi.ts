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


import * as runtime from '../runtime';
import {
    DomainSPAPICombinedVulnerabilitiesResponse,
    DomainSPAPICombinedVulnerabilitiesResponseFromJSON,
    DomainSPAPICombinedVulnerabilitiesResponseToJSON,
    DomainSPAPIQueryVulnerabilitiesResponse,
    DomainSPAPIQueryVulnerabilitiesResponseFromJSON,
    DomainSPAPIQueryVulnerabilitiesResponseToJSON,
    DomainSPAPIRemediationEntitiesResponseV2,
    DomainSPAPIRemediationEntitiesResponseV2FromJSON,
    DomainSPAPIRemediationEntitiesResponseV2ToJSON,
    DomainSPAPIVulnerabilitiesEntitiesResponseV2,
    DomainSPAPIVulnerabilitiesEntitiesResponseV2FromJSON,
    DomainSPAPIVulnerabilitiesEntitiesResponseV2ToJSON,
    MsaReplyMetaOnly,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
} from '../models';

export interface CombinedQueryVulnerabilitiesRequest {
    filter: string;
    after?: string;
    limit?: number;
    sort?: string;
    facet?: Array<string>;
}

export interface GetRemediationsV2Request {
    ids: Array<string>;
}

export interface GetVulnerabilitiesRequest {
    ids: Array<string>;
}

export interface QueryVulnerabilitiesRequest {
    filter: string;
    after?: string;
    limit?: number;
    sort?: string;
}

/**
 * 
 */
export class SpotlightVulnerabilitiesApi extends runtime.BaseAPI {

    /**
     * Search for Vulnerabilities in your environment by providing an FQL filter and paging details. Returns a set of Vulnerability entities which match the filter criteria
     */
    async combinedQueryVulnerabilitiesRaw(requestParameters: CombinedQueryVulnerabilitiesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DomainSPAPICombinedVulnerabilitiesResponse>> {
        if (requestParameters.filter === null || requestParameters.filter === undefined) {
            throw new runtime.RequiredError('filter','Required parameter requestParameters.filter was null or undefined when calling combinedQueryVulnerabilities.');
        }

        const queryParameters: any = {};

        if (requestParameters.after !== undefined) {
            queryParameters['after'] = requestParameters.after;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.facet) {
            queryParameters['facet'] = requestParameters.facet;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["spotlight-vulnerabilities:read"]);
        }

        const response = await this.request({
            path: `/spotlight/combined/vulnerabilities/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainSPAPICombinedVulnerabilitiesResponseFromJSON(jsonValue));
    }

    /**
     * Search for Vulnerabilities in your environment by providing an FQL filter and paging details. Returns a set of Vulnerability entities which match the filter criteria
     */
    async combinedQueryVulnerabilities(filter: string, after?: string, limit?: number, sort?: string, facet?: Array<string>, initOverrides?: RequestInit): Promise<DomainSPAPICombinedVulnerabilitiesResponse> {
        const response = await this.combinedQueryVulnerabilitiesRaw({ filter: filter, after: after, limit: limit, sort: sort, facet: facet }, initOverrides);
        return await response.value();
    }

    /**
     * Get details on remediation by providing one or more IDs
     */
    async getRemediationsV2Raw(requestParameters: GetRemediationsV2Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DomainSPAPIRemediationEntitiesResponseV2>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError('ids','Required parameter requestParameters.ids was null or undefined when calling getRemediationsV2.');
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters['ids'] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["spotlight-vulnerabilities:read"]);
        }

        const response = await this.request({
            path: `/spotlight/entities/remediations/v2`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainSPAPIRemediationEntitiesResponseV2FromJSON(jsonValue));
    }

    /**
     * Get details on remediation by providing one or more IDs
     */
    async getRemediationsV2(ids: Array<string>, initOverrides?: RequestInit): Promise<DomainSPAPIRemediationEntitiesResponseV2> {
        const response = await this.getRemediationsV2Raw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Get details on vulnerabilities by providing one or more IDs
     */
    async getVulnerabilitiesRaw(requestParameters: GetVulnerabilitiesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DomainSPAPIVulnerabilitiesEntitiesResponseV2>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError('ids','Required parameter requestParameters.ids was null or undefined when calling getVulnerabilities.');
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters['ids'] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["spotlight-vulnerabilities:read"]);
        }

        const response = await this.request({
            path: `/spotlight/entities/vulnerabilities/v2`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainSPAPIVulnerabilitiesEntitiesResponseV2FromJSON(jsonValue));
    }

    /**
     * Get details on vulnerabilities by providing one or more IDs
     */
    async getVulnerabilities(ids: Array<string>, initOverrides?: RequestInit): Promise<DomainSPAPIVulnerabilitiesEntitiesResponseV2> {
        const response = await this.getVulnerabilitiesRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Search for Vulnerabilities in your environment by providing an FQL filter and paging details. Returns a set of Vulnerability IDs which match the filter criteria
     */
    async queryVulnerabilitiesRaw(requestParameters: QueryVulnerabilitiesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DomainSPAPIQueryVulnerabilitiesResponse>> {
        if (requestParameters.filter === null || requestParameters.filter === undefined) {
            throw new runtime.RequiredError('filter','Required parameter requestParameters.filter was null or undefined when calling queryVulnerabilities.');
        }

        const queryParameters: any = {};

        if (requestParameters.after !== undefined) {
            queryParameters['after'] = requestParameters.after;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["spotlight-vulnerabilities:read"]);
        }

        const response = await this.request({
            path: `/spotlight/queries/vulnerabilities/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainSPAPIQueryVulnerabilitiesResponseFromJSON(jsonValue));
    }

    /**
     * Search for Vulnerabilities in your environment by providing an FQL filter and paging details. Returns a set of Vulnerability IDs which match the filter criteria
     */
    async queryVulnerabilities(filter: string, after?: string, limit?: number, sort?: string, initOverrides?: RequestInit): Promise<DomainSPAPIQueryVulnerabilitiesResponse> {
        const response = await this.queryVulnerabilitiesRaw({ filter: filter, after: after, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

}
