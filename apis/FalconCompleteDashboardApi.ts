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
    MsaAggregateQueryRequest,
    MsaAggregateQueryRequestFromJSON,
    MsaAggregateQueryRequestToJSON,
    MsaAggregatesResponse,
    MsaAggregatesResponseFromJSON,
    MsaAggregatesResponseToJSON,
    MsaQueryResponse,
    MsaQueryResponseFromJSON,
    MsaQueryResponseToJSON,
    MsaReplyMetaOnly,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
} from '../models';

export interface AggregateAllowListRequest {
    body: Array<MsaAggregateQueryRequest>;
}

export interface AggregateBlockListRequest {
    body: Array<MsaAggregateQueryRequest>;
}

export interface AggregateDetectionsRequest {
    body: Array<MsaAggregateQueryRequest>;
}

export interface AggregateDeviceCountCollectionRequest {
    body: Array<MsaAggregateQueryRequest>;
}

export interface AggregateEscalationsRequest {
    body: Array<MsaAggregateQueryRequest>;
}

export interface AggregateFCIncidentsRequest {
    body: Array<MsaAggregateQueryRequest>;
}

export interface AggregateRemediationsRequest {
    body: Array<MsaAggregateQueryRequest>;
}

export interface GetDeviceCountCollectionQueriesByFilterRequest {
    limit?: number;
    sort?: string;
    filter?: string;
    offset?: string;
}

export interface QueryAllowListFilterRequest {
    limit?: number;
    sort?: string;
    filter?: string;
    offset?: string;
}

export interface QueryBlockListFilterRequest {
    limit?: number;
    sort?: string;
    filter?: string;
    offset?: string;
}

export interface QueryDetectionIdsByFilterRequest {
    limit?: number;
    sort?: string;
    filter?: string;
    offset?: string;
}

export interface QueryEscalationsFilterRequest {
    limit?: number;
    sort?: string;
    filter?: string;
    offset?: string;
}

export interface QueryIncidentIdsByFilterRequest {
    limit?: number;
    sort?: string;
    filter?: string;
    offset?: string;
}

export interface QueryRemediationsFilterRequest {
    limit?: number;
    sort?: string;
    filter?: string;
    offset?: string;
}

/**
 * 
 */
export class FalconCompleteDashboardApi extends runtime.BaseAPI {

    /**
     * Retrieve aggregate allowlist ticket values based on the matched filter
     */
    async aggregateAllowListRaw(requestParameters: AggregateAllowListRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MsaAggregatesResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling aggregateAllowList.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["falconcomplete-dashboard:read"]);
        }

        const response = await this.request({
            path: `/falcon-complete-dashboards/aggregates/allowlist/GET/v1`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body.map(MsaAggregateQueryRequestToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaAggregatesResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve aggregate allowlist ticket values based on the matched filter
     */
    async aggregateAllowList(body: Array<MsaAggregateQueryRequest>, initOverrides?: RequestInit): Promise<MsaAggregatesResponse> {
        const response = await this.aggregateAllowListRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve aggregate blocklist ticket values based on the matched filter
     */
    async aggregateBlockListRaw(requestParameters: AggregateBlockListRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MsaAggregatesResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling aggregateBlockList.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["falconcomplete-dashboard:read"]);
        }

        const response = await this.request({
            path: `/falcon-complete-dashboards/aggregates/blocklist/GET/v1`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body.map(MsaAggregateQueryRequestToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaAggregatesResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve aggregate blocklist ticket values based on the matched filter
     */
    async aggregateBlockList(body: Array<MsaAggregateQueryRequest>, initOverrides?: RequestInit): Promise<MsaAggregatesResponse> {
        const response = await this.aggregateBlockListRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve aggregate detection values based on the matched filter
     */
    async aggregateDetectionsRaw(requestParameters: AggregateDetectionsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MsaAggregatesResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling aggregateDetections.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["falconcomplete-dashboard:read"]);
        }

        const response = await this.request({
            path: `/falcon-complete-dashboards/aggregates/detects/GET/v1`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body.map(MsaAggregateQueryRequestToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaAggregatesResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve aggregate detection values based on the matched filter
     */
    async aggregateDetections(body: Array<MsaAggregateQueryRequest>, initOverrides?: RequestInit): Promise<MsaAggregatesResponse> {
        const response = await this.aggregateDetectionsRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve aggregate host/devices count based on the matched filter
     */
    async aggregateDeviceCountCollectionRaw(requestParameters: AggregateDeviceCountCollectionRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MsaAggregatesResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling aggregateDeviceCountCollection.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["falconcomplete-dashboard:read"]);
        }

        const response = await this.request({
            path: `/falcon-complete-dashboards/aggregates/devicecount-collections/GET/v1`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body.map(MsaAggregateQueryRequestToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaAggregatesResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve aggregate host/devices count based on the matched filter
     */
    async aggregateDeviceCountCollection(body: Array<MsaAggregateQueryRequest>, initOverrides?: RequestInit): Promise<MsaAggregatesResponse> {
        const response = await this.aggregateDeviceCountCollectionRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve aggregate escalation ticket values based on the matched filter
     */
    async aggregateEscalationsRaw(requestParameters: AggregateEscalationsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MsaAggregatesResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling aggregateEscalations.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["falconcomplete-dashboard:read"]);
        }

        const response = await this.request({
            path: `/falcon-complete-dashboards/aggregates/escalations/GET/v1`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body.map(MsaAggregateQueryRequestToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaAggregatesResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve aggregate escalation ticket values based on the matched filter
     */
    async aggregateEscalations(body: Array<MsaAggregateQueryRequest>, initOverrides?: RequestInit): Promise<MsaAggregatesResponse> {
        const response = await this.aggregateEscalationsRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve aggregate incident values based on the matched filter
     */
    async aggregateFCIncidentsRaw(requestParameters: AggregateFCIncidentsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MsaAggregatesResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling aggregateFCIncidents.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["falconcomplete-dashboard:read"]);
        }

        const response = await this.request({
            path: `/falcon-complete-dashboards/aggregates/incidents/GET/v1`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body.map(MsaAggregateQueryRequestToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaAggregatesResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve aggregate incident values based on the matched filter
     */
    async aggregateFCIncidents(body: Array<MsaAggregateQueryRequest>, initOverrides?: RequestInit): Promise<MsaAggregatesResponse> {
        const response = await this.aggregateFCIncidentsRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve aggregate remediation ticket values based on the matched filter
     */
    async aggregateRemediationsRaw(requestParameters: AggregateRemediationsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MsaAggregatesResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling aggregateRemediations.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["falconcomplete-dashboard:read"]);
        }

        const response = await this.request({
            path: `/falcon-complete-dashboards/aggregates/remediations/GET/v1`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body.map(MsaAggregateQueryRequestToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaAggregatesResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve aggregate remediation ticket values based on the matched filter
     */
    async aggregateRemediations(body: Array<MsaAggregateQueryRequest>, initOverrides?: RequestInit): Promise<MsaAggregatesResponse> {
        const response = await this.aggregateRemediationsRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve device count collection Ids that match the provided FQL filter, criteria with scrolling enabled
     */
    async getDeviceCountCollectionQueriesByFilterRaw(requestParameters: GetDeviceCountCollectionQueriesByFilterRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["falconcomplete-dashboard:read"]);
        }

        const response = await this.request({
            path: `/falcon-complete-dashboards/queries/devicecount-collections/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve device count collection Ids that match the provided FQL filter, criteria with scrolling enabled
     */
    async getDeviceCountCollectionQueriesByFilter(limit?: number, sort?: string, filter?: string, offset?: string, initOverrides?: RequestInit): Promise<MsaQueryResponse> {
        const response = await this.getDeviceCountCollectionQueriesByFilterRaw({ limit: limit, sort: sort, filter: filter, offset: offset }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve allowlist tickets that match the provided filter criteria with scrolling enabled
     */
    async queryAllowListFilterRaw(requestParameters: QueryAllowListFilterRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["falconcomplete-dashboard:read"]);
        }

        const response = await this.request({
            path: `/falcon-complete-dashboards/queries/allowlist/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve allowlist tickets that match the provided filter criteria with scrolling enabled
     */
    async queryAllowListFilter(limit?: number, sort?: string, filter?: string, offset?: string, initOverrides?: RequestInit): Promise<MsaQueryResponse> {
        const response = await this.queryAllowListFilterRaw({ limit: limit, sort: sort, filter: filter, offset: offset }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve block listtickets that match the provided filter criteria with scrolling enabled
     */
    async queryBlockListFilterRaw(requestParameters: QueryBlockListFilterRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["falconcomplete-dashboard:read"]);
        }

        const response = await this.request({
            path: `/falcon-complete-dashboards/queries/blocklist/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve block listtickets that match the provided filter criteria with scrolling enabled
     */
    async queryBlockListFilter(limit?: number, sort?: string, filter?: string, offset?: string, initOverrides?: RequestInit): Promise<MsaQueryResponse> {
        const response = await this.queryBlockListFilterRaw({ limit: limit, sort: sort, filter: filter, offset: offset }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve DetectionsIds that match the provided FQL filter, criteria with scrolling enabled
     */
    async queryDetectionIdsByFilterRaw(requestParameters: QueryDetectionIdsByFilterRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["falconcomplete-dashboard:read"]);
        }

        const response = await this.request({
            path: `/falcon-complete-dashboards/queries/detects/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve DetectionsIds that match the provided FQL filter, criteria with scrolling enabled
     */
    async queryDetectionIdsByFilter(limit?: number, sort?: string, filter?: string, offset?: string, initOverrides?: RequestInit): Promise<MsaQueryResponse> {
        const response = await this.queryDetectionIdsByFilterRaw({ limit: limit, sort: sort, filter: filter, offset: offset }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve escalation tickets that match the provided filter criteria with scrolling enabled
     */
    async queryEscalationsFilterRaw(requestParameters: QueryEscalationsFilterRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["falconcomplete-dashboard:read"]);
        }

        const response = await this.request({
            path: `/falcon-complete-dashboards/queries/escalations/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve escalation tickets that match the provided filter criteria with scrolling enabled
     */
    async queryEscalationsFilter(limit?: number, sort?: string, filter?: string, offset?: string, initOverrides?: RequestInit): Promise<MsaQueryResponse> {
        const response = await this.queryEscalationsFilterRaw({ limit: limit, sort: sort, filter: filter, offset: offset }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve incidents that match the provided filter criteria with scrolling enabled
     */
    async queryIncidentIdsByFilterRaw(requestParameters: QueryIncidentIdsByFilterRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["falconcomplete-dashboard:read"]);
        }

        const response = await this.request({
            path: `/falcon-complete-dashboards/queries/incidents/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve incidents that match the provided filter criteria with scrolling enabled
     */
    async queryIncidentIdsByFilter(limit?: number, sort?: string, filter?: string, offset?: string, initOverrides?: RequestInit): Promise<MsaQueryResponse> {
        const response = await this.queryIncidentIdsByFilterRaw({ limit: limit, sort: sort, filter: filter, offset: offset }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve remediation tickets that match the provided filter criteria with scrolling enabled
     */
    async queryRemediationsFilterRaw(requestParameters: QueryRemediationsFilterRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["falconcomplete-dashboard:read"]);
        }

        const response = await this.request({
            path: `/falcon-complete-dashboards/queries/remediations/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve remediation tickets that match the provided filter criteria with scrolling enabled
     */
    async queryRemediationsFilter(limit?: number, sort?: string, filter?: string, offset?: string, initOverrides?: RequestInit): Promise<MsaQueryResponse> {
        const response = await this.queryRemediationsFilterRaw({ limit: limit, sort: sort, filter: filter, offset: offset }, initOverrides);
        return await response.value();
    }

}
