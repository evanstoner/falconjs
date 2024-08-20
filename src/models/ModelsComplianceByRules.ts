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
import type { ModelsRuleStatus } from "./ModelsRuleStatus";
import { ModelsRuleStatusFromJSON, ModelsRuleStatusFromJSONTyped, ModelsRuleStatusToJSON } from "./ModelsRuleStatus";

/**
 *
 * @export
 * @interface ModelsComplianceByRules
 */
export interface ModelsComplianceByRules {
    /**
     *
     * @type {string}
     * @memberof ModelsComplianceByRules
     */
    notApplicableFilters: string;
    /**
     *
     * @type {number}
     * @memberof ModelsComplianceByRules
     */
    percentageOfPassedRules: number;
    /**
     *
     * @type {Array<ModelsRuleStatus>}
     * @memberof ModelsComplianceByRules
     */
    ruleStatusList: Array<ModelsRuleStatus>;
}

/**
 * Check if a given object implements the ModelsComplianceByRules interface.
 */
export function instanceOfModelsComplianceByRules(value: object): value is ModelsComplianceByRules {
    if (!("notApplicableFilters" in value) || value["notApplicableFilters"] === undefined) return false;
    if (!("percentageOfPassedRules" in value) || value["percentageOfPassedRules"] === undefined) return false;
    if (!("ruleStatusList" in value) || value["ruleStatusList"] === undefined) return false;
    return true;
}

export function ModelsComplianceByRulesFromJSON(json: any): ModelsComplianceByRules {
    return ModelsComplianceByRulesFromJSONTyped(json, false);
}

export function ModelsComplianceByRulesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsComplianceByRules {
    if (json == null) {
        return json;
    }
    return {
        notApplicableFilters: json["not_applicable_filters"],
        percentageOfPassedRules: json["percentage_of_passed_rules"],
        ruleStatusList: (json["rule_status_list"] as Array<any>).map(ModelsRuleStatusFromJSON),
    };
}

export function ModelsComplianceByRulesToJSON(value?: ModelsComplianceByRules | null): any {
    if (value == null) {
        return value;
    }
    return {
        not_applicable_filters: value["notApplicableFilters"],
        percentage_of_passed_rules: value["percentageOfPassedRules"],
        rule_status_list: (value["ruleStatusList"] as Array<any>).map(ModelsRuleStatusToJSON),
    };
}