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
import type { TypesServiceNowService } from "./TypesServiceNowService";
import { TypesServiceNowServiceFromJSON, TypesServiceNowServiceFromJSONTyped, TypesServiceNowServiceToJSON } from "./TypesServiceNowService";
import type { TypesServiceServiceArtifact } from "./TypesServiceServiceArtifact";
import { TypesServiceServiceArtifactFromJSON, TypesServiceServiceArtifactFromJSONTyped, TypesServiceServiceArtifactToJSON } from "./TypesServiceServiceArtifact";
import type { TypesServiceServiceConfiguration } from "./TypesServiceServiceConfiguration";
import { TypesServiceServiceConfigurationFromJSON, TypesServiceServiceConfigurationFromJSONTyped, TypesServiceServiceConfigurationToJSON } from "./TypesServiceServiceConfiguration";
import type { TypesServiceServiceLibrary } from "./TypesServiceServiceLibrary";
import { TypesServiceServiceLibraryFromJSON, TypesServiceServiceLibraryFromJSONTyped, TypesServiceServiceLibraryToJSON } from "./TypesServiceServiceLibrary";
import type { TypesInterface } from "./TypesInterface";
import { TypesInterfaceFromJSON, TypesInterfaceFromJSONTyped, TypesInterfaceToJSON } from "./TypesInterface";
import type { TypesServiceServiceFramework } from "./TypesServiceServiceFramework";
import { TypesServiceServiceFrameworkFromJSON, TypesServiceServiceFrameworkFromJSONTyped, TypesServiceServiceFrameworkToJSON } from "./TypesServiceServiceFramework";
import type { TypesServiceServiceDependency } from "./TypesServiceServiceDependency";
import { TypesServiceServiceDependencyFromJSON, TypesServiceServiceDependencyFromJSONTyped, TypesServiceServiceDependencyToJSON } from "./TypesServiceServiceDependency";
import type { TypesServiceServiceInterface } from "./TypesServiceServiceInterface";
import { TypesServiceServiceInterfaceFromJSON, TypesServiceServiceInterfaceFromJSONTyped, TypesServiceServiceInterfaceToJSON } from "./TypesServiceServiceInterface";

/**
 *
 * @export
 * @interface TypesServiceNowServiceData
 */
export interface TypesServiceNowServiceData {
    /**
     *
     * @type {TypesServiceNowService}
     * @memberof TypesServiceNowServiceData
     */
    serviceNowService: TypesServiceNowService;
    /**
     *
     * @type {TypesServiceServiceInterface}
     * @memberof TypesServiceNowServiceData
     */
    apis: TypesServiceServiceInterface;
    /**
     *
     * @type {TypesServiceServiceArtifact}
     * @memberof TypesServiceNowServiceData
     */
    artifacts: TypesServiceServiceArtifact;
    /**
     *
     * @type {TypesServiceServiceConfiguration}
     * @memberof TypesServiceNowServiceData
     */
    configurations: TypesServiceServiceConfiguration;
    /**
     *
     * @type {TypesServiceServiceDependency}
     * @memberof TypesServiceNowServiceData
     */
    dependencies: TypesServiceServiceDependency;
    /**
     *
     * @type {Array<string>}
     * @memberof TypesServiceNowServiceData
     */
    deploymentUnits: Array<string>;
    /**
     *
     * @type {TypesServiceServiceFramework}
     * @memberof TypesServiceNowServiceData
     */
    frameworks: TypesServiceServiceFramework;
    /**
     *
     * @type {TypesServiceServiceLibrary}
     * @memberof TypesServiceNowServiceData
     */
    libraries: TypesServiceServiceLibrary;
    /**
     *
     * @type {Array<TypesInterface>}
     * @memberof TypesServiceNowServiceData
     */
    topicsQueues: Array<TypesInterface>;
}

/**
 * Check if a given object implements the TypesServiceNowServiceData interface.
 */
export function instanceOfTypesServiceNowServiceData(value: object): value is TypesServiceNowServiceData {
    if (!("serviceNowService" in value) || value["serviceNowService"] === undefined) return false;
    if (!("apis" in value) || value["apis"] === undefined) return false;
    if (!("artifacts" in value) || value["artifacts"] === undefined) return false;
    if (!("configurations" in value) || value["configurations"] === undefined) return false;
    if (!("dependencies" in value) || value["dependencies"] === undefined) return false;
    if (!("deploymentUnits" in value) || value["deploymentUnits"] === undefined) return false;
    if (!("frameworks" in value) || value["frameworks"] === undefined) return false;
    if (!("libraries" in value) || value["libraries"] === undefined) return false;
    if (!("topicsQueues" in value) || value["topicsQueues"] === undefined) return false;
    return true;
}

export function TypesServiceNowServiceDataFromJSON(json: any): TypesServiceNowServiceData {
    return TypesServiceNowServiceDataFromJSONTyped(json, false);
}

export function TypesServiceNowServiceDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypesServiceNowServiceData {
    if (json == null) {
        return json;
    }
    return {
        serviceNowService: TypesServiceNowServiceFromJSON(json["ServiceNowService"]),
        apis: TypesServiceServiceInterfaceFromJSON(json["apis"]),
        artifacts: TypesServiceServiceArtifactFromJSON(json["artifacts"]),
        configurations: TypesServiceServiceConfigurationFromJSON(json["configurations"]),
        dependencies: TypesServiceServiceDependencyFromJSON(json["dependencies"]),
        deploymentUnits: json["deployment_units"],
        frameworks: TypesServiceServiceFrameworkFromJSON(json["frameworks"]),
        libraries: TypesServiceServiceLibraryFromJSON(json["libraries"]),
        topicsQueues: (json["topics_queues"] as Array<any>).map(TypesInterfaceFromJSON),
    };
}

export function TypesServiceNowServiceDataToJSON(value?: TypesServiceNowServiceData | null): any {
    if (value == null) {
        return value;
    }
    return {
        ServiceNowService: TypesServiceNowServiceToJSON(value["serviceNowService"]),
        apis: TypesServiceServiceInterfaceToJSON(value["apis"]),
        artifacts: TypesServiceServiceArtifactToJSON(value["artifacts"]),
        configurations: TypesServiceServiceConfigurationToJSON(value["configurations"]),
        dependencies: TypesServiceServiceDependencyToJSON(value["dependencies"]),
        deployment_units: value["deploymentUnits"],
        frameworks: TypesServiceServiceFrameworkToJSON(value["frameworks"]),
        libraries: TypesServiceServiceLibraryToJSON(value["libraries"]),
        topics_queues: (value["topicsQueues"] as Array<any>).map(TypesInterfaceToJSON),
    };
}