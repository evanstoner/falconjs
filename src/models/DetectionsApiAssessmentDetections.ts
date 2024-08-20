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
import type { MsaAPIError } from "./MsaAPIError";
import { MsaAPIErrorFromJSON, MsaAPIErrorFromJSONTyped, MsaAPIErrorToJSON } from "./MsaAPIError";
import type { ModelsAPIAssessmentDetections } from "./ModelsAPIAssessmentDetections";
import { ModelsAPIAssessmentDetectionsFromJSON, ModelsAPIAssessmentDetectionsFromJSONTyped, ModelsAPIAssessmentDetectionsToJSON } from "./ModelsAPIAssessmentDetections";
import type { MsaMetaInfo } from "./MsaMetaInfo";
import { MsaMetaInfoFromJSON, MsaMetaInfoFromJSONTyped, MsaMetaInfoToJSON } from "./MsaMetaInfo";

/**
 *
 * @export
 * @interface DetectionsApiAssessmentDetections
 */
export interface DetectionsApiAssessmentDetections {
    /**
     *
     * @type {Array<ModelsAPIAssessmentDetections>}
     * @memberof DetectionsApiAssessmentDetections
     */
    resources: Array<ModelsAPIAssessmentDetections>;
    /**
     *
     * @type {Array<MsaAPIError>}
     * @memberof DetectionsApiAssessmentDetections
     */
    errors?: Array<MsaAPIError>;
    /**
     *
     * @type {MsaMetaInfo}
     * @memberof DetectionsApiAssessmentDetections
     */
    meta: MsaMetaInfo;
}

/**
 * Check if a given object implements the DetectionsApiAssessmentDetections interface.
 */
export function instanceOfDetectionsApiAssessmentDetections(value: object): value is DetectionsApiAssessmentDetections {
    if (!("resources" in value) || value["resources"] === undefined) return false;
    if (!("meta" in value) || value["meta"] === undefined) return false;
    return true;
}

export function DetectionsApiAssessmentDetectionsFromJSON(json: any): DetectionsApiAssessmentDetections {
    return DetectionsApiAssessmentDetectionsFromJSONTyped(json, false);
}

export function DetectionsApiAssessmentDetectionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DetectionsApiAssessmentDetections {
    if (json == null) {
        return json;
    }
    return {
        resources: (json["Resources"] as Array<any>).map(ModelsAPIAssessmentDetectionsFromJSON),
        errors: json["errors"] == null ? undefined : (json["errors"] as Array<any>).map(MsaAPIErrorFromJSON),
        meta: MsaMetaInfoFromJSON(json["meta"]),
    };
}

export function DetectionsApiAssessmentDetectionsToJSON(value?: DetectionsApiAssessmentDetections | null): any {
    if (value == null) {
        return value;
    }
    return {
        Resources: (value["resources"] as Array<any>).map(ModelsAPIAssessmentDetectionsToJSON),
        errors: value["errors"] == null ? undefined : (value["errors"] as Array<any>).map(MsaAPIErrorToJSON),
        meta: MsaMetaInfoToJSON(value["meta"]),
    };
}