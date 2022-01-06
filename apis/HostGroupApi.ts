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
    MsaEntityActionRequestV2,
    MsaEntityActionRequestV2FromJSON,
    MsaEntityActionRequestV2ToJSON,
    MsaErrorsOnly,
    MsaErrorsOnlyFromJSON,
    MsaErrorsOnlyToJSON,
    MsaQueryResponse,
    MsaQueryResponseFromJSON,
    MsaQueryResponseToJSON,
    MsaReplyMetaOnly,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
    RequestsCreateGroupsV1,
    RequestsCreateGroupsV1FromJSON,
    RequestsCreateGroupsV1ToJSON,
    RequestsUpdateGroupsV1,
    RequestsUpdateGroupsV1FromJSON,
    RequestsUpdateGroupsV1ToJSON,
    ResponsesHostGroupMembersV1,
    ResponsesHostGroupMembersV1FromJSON,
    ResponsesHostGroupMembersV1ToJSON,
    ResponsesHostGroupsV1,
    ResponsesHostGroupsV1FromJSON,
    ResponsesHostGroupsV1ToJSON,
} from '../models';

export interface CreateHostGroupsRequest {
    body: RequestsCreateGroupsV1;
}

export interface DeleteHostGroupsRequest {
    ids: Array<string>;
}

export interface GetHostGroupsRequest {
    ids: Array<string>;
}

export interface PerformGroupActionRequest {
    actionName: PerformGroupActionActionNameEnum;
    body: MsaEntityActionRequestV2;
}

export interface QueryCombinedGroupMembersRequest {
    id?: string;
    filter?: string;
    offset?: number;
    limit?: number;
    sort?: string;
}

export interface QueryCombinedHostGroupsRequest {
    filter?: string;
    offset?: number;
    limit?: number;
    sort?: QueryCombinedHostGroupsSortEnum;
}

export interface QueryGroupMembersRequest {
    id?: string;
    filter?: string;
    offset?: number;
    limit?: number;
    sort?: string;
}

export interface QueryHostGroupsRequest {
    filter?: string;
    offset?: number;
    limit?: number;
    sort?: QueryHostGroupsSortEnum;
}

export interface UpdateHostGroupsRequest {
    body: RequestsUpdateGroupsV1;
}

/**
 * 
 */
export class HostGroupApi extends runtime.BaseAPI {

    /**
     * Create Host Groups by specifying details about the group to create
     */
    async createHostGroupsRaw(requestParameters: CreateHostGroupsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ResponsesHostGroupsV1>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createHostGroups.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["host-group:write"]);
        }

        const response = await this.request({
            path: `/devices/entities/host-groups/v1`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RequestsCreateGroupsV1ToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesHostGroupsV1FromJSON(jsonValue));
    }

    /**
     * Create Host Groups by specifying details about the group to create
     */
    async createHostGroups(body: RequestsCreateGroupsV1, initOverrides?: RequestInit): Promise<ResponsesHostGroupsV1> {
        const response = await this.createHostGroupsRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Delete a set of Host Groups by specifying their IDs
     */
    async deleteHostGroupsRaw(requestParameters: DeleteHostGroupsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError('ids','Required parameter requestParameters.ids was null or undefined when calling deleteHostGroups.');
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters['ids'] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["host-group:write"]);
        }

        const response = await this.request({
            path: `/devices/entities/host-groups/v1`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Delete a set of Host Groups by specifying their IDs
     */
    async deleteHostGroups(ids: Array<string>, initOverrides?: RequestInit): Promise<MsaQueryResponse> {
        const response = await this.deleteHostGroupsRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a set of Host Groups by specifying their IDs
     */
    async getHostGroupsRaw(requestParameters: GetHostGroupsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ResponsesHostGroupsV1>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError('ids','Required parameter requestParameters.ids was null or undefined when calling getHostGroups.');
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters['ids'] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["host-group:read"]);
        }

        const response = await this.request({
            path: `/devices/entities/host-groups/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesHostGroupsV1FromJSON(jsonValue));
    }

    /**
     * Retrieve a set of Host Groups by specifying their IDs
     */
    async getHostGroups(ids: Array<string>, initOverrides?: RequestInit): Promise<ResponsesHostGroupsV1> {
        const response = await this.getHostGroupsRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Perform the specified action on the Host Groups specified in the request
     */
    async performGroupActionRaw(requestParameters: PerformGroupActionRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ResponsesHostGroupsV1>> {
        if (requestParameters.actionName === null || requestParameters.actionName === undefined) {
            throw new runtime.RequiredError('actionName','Required parameter requestParameters.actionName was null or undefined when calling performGroupAction.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling performGroupAction.');
        }

        const queryParameters: any = {};

        if (requestParameters.actionName !== undefined) {
            queryParameters['action_name'] = requestParameters.actionName;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["host-group:write"]);
        }

        const response = await this.request({
            path: `/devices/entities/host-group-actions/v1`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MsaEntityActionRequestV2ToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesHostGroupsV1FromJSON(jsonValue));
    }

    /**
     * Perform the specified action on the Host Groups specified in the request
     */
    async performGroupAction(actionName: PerformGroupActionActionNameEnum, body: MsaEntityActionRequestV2, initOverrides?: RequestInit): Promise<ResponsesHostGroupsV1> {
        const response = await this.performGroupActionRaw({ actionName: actionName, body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Search for members of a Host Group in your environment by providing an FQL filter and paging details. Returns a set of host details which match the filter criteria
     */
    async queryCombinedGroupMembersRaw(requestParameters: QueryCombinedGroupMembersRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ResponsesHostGroupMembersV1>> {
        const queryParameters: any = {};

        if (requestParameters.id !== undefined) {
            queryParameters['id'] = requestParameters.id;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["host-group:read"]);
        }

        const response = await this.request({
            path: `/devices/combined/host-group-members/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesHostGroupMembersV1FromJSON(jsonValue));
    }

    /**
     * Search for members of a Host Group in your environment by providing an FQL filter and paging details. Returns a set of host details which match the filter criteria
     */
    async queryCombinedGroupMembers(id?: string, filter?: string, offset?: number, limit?: number, sort?: string, initOverrides?: RequestInit): Promise<ResponsesHostGroupMembersV1> {
        const response = await this.queryCombinedGroupMembersRaw({ id: id, filter: filter, offset: offset, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Search for Host Groups in your environment by providing an FQL filter and paging details. Returns a set of Host Groups which match the filter criteria
     */
    async queryCombinedHostGroupsRaw(requestParameters: QueryCombinedHostGroupsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ResponsesHostGroupsV1>> {
        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["host-group:read"]);
        }

        const response = await this.request({
            path: `/devices/combined/host-groups/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesHostGroupsV1FromJSON(jsonValue));
    }

    /**
     * Search for Host Groups in your environment by providing an FQL filter and paging details. Returns a set of Host Groups which match the filter criteria
     */
    async queryCombinedHostGroups(filter?: string, offset?: number, limit?: number, sort?: QueryCombinedHostGroupsSortEnum, initOverrides?: RequestInit): Promise<ResponsesHostGroupsV1> {
        const response = await this.queryCombinedHostGroupsRaw({ filter: filter, offset: offset, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Search for members of a Host Group in your environment by providing an FQL filter and paging details. Returns a set of Agent IDs which match the filter criteria
     */
    async queryGroupMembersRaw(requestParameters: QueryGroupMembersRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters.id !== undefined) {
            queryParameters['id'] = requestParameters.id;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["host-group:read"]);
        }

        const response = await this.request({
            path: `/devices/queries/host-group-members/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Search for members of a Host Group in your environment by providing an FQL filter and paging details. Returns a set of Agent IDs which match the filter criteria
     */
    async queryGroupMembers(id?: string, filter?: string, offset?: number, limit?: number, sort?: string, initOverrides?: RequestInit): Promise<MsaQueryResponse> {
        const response = await this.queryGroupMembersRaw({ id: id, filter: filter, offset: offset, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Search for Host Groups in your environment by providing an FQL filter and paging details. Returns a set of Host Group IDs which match the filter criteria
     */
    async queryHostGroupsRaw(requestParameters: QueryHostGroupsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["host-group:read"]);
        }

        const response = await this.request({
            path: `/devices/queries/host-groups/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Search for Host Groups in your environment by providing an FQL filter and paging details. Returns a set of Host Group IDs which match the filter criteria
     */
    async queryHostGroups(filter?: string, offset?: number, limit?: number, sort?: QueryHostGroupsSortEnum, initOverrides?: RequestInit): Promise<MsaQueryResponse> {
        const response = await this.queryHostGroupsRaw({ filter: filter, offset: offset, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Update Host Groups by specifying the ID of the group and details to update
     */
    async updateHostGroupsRaw(requestParameters: UpdateHostGroupsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ResponsesHostGroupsV1>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateHostGroups.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["host-group:write"]);
        }

        const response = await this.request({
            path: `/devices/entities/host-groups/v1`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: RequestsUpdateGroupsV1ToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesHostGroupsV1FromJSON(jsonValue));
    }

    /**
     * Update Host Groups by specifying the ID of the group and details to update
     */
    async updateHostGroups(body: RequestsUpdateGroupsV1, initOverrides?: RequestInit): Promise<ResponsesHostGroupsV1> {
        const response = await this.updateHostGroupsRaw({ body: body }, initOverrides);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum PerformGroupActionActionNameEnum {
    AddHosts = 'add-hosts',
    RemoveHosts = 'remove-hosts'
}
/**
    * @export
    * @enum {string}
    */
export enum QueryCombinedHostGroupsSortEnum {
    CreatedByAsc = 'created_by.asc',
    CreatedByDesc = 'created_by.desc',
    CreatedTimestampAsc = 'created_timestamp.asc',
    CreatedTimestampDesc = 'created_timestamp.desc',
    GroupTypeAsc = 'group_type.asc',
    GroupTypeDesc = 'group_type.desc',
    ModifiedByAsc = 'modified_by.asc',
    ModifiedByDesc = 'modified_by.desc',
    ModifiedTimestampAsc = 'modified_timestamp.asc',
    ModifiedTimestampDesc = 'modified_timestamp.desc',
    NameAsc = 'name.asc',
    NameDesc = 'name.desc'
}
/**
    * @export
    * @enum {string}
    */
export enum QueryHostGroupsSortEnum {
    CreatedByAsc = 'created_by.asc',
    CreatedByDesc = 'created_by.desc',
    CreatedTimestampAsc = 'created_timestamp.asc',
    CreatedTimestampDesc = 'created_timestamp.desc',
    GroupTypeAsc = 'group_type.asc',
    GroupTypeDesc = 'group_type.desc',
    ModifiedByAsc = 'modified_by.asc',
    ModifiedByDesc = 'modified_by.desc',
    ModifiedTimestampAsc = 'modified_timestamp.asc',
    ModifiedTimestampDesc = 'modified_timestamp.desc',
    NameAsc = 'name.asc',
    NameDesc = 'name.desc'
}
