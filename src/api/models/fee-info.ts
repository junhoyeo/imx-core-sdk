/* tslint:disable */
/* eslint-disable */
/**
 * Immutable X API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1
 * Contact: support@immutable.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface FeeInfo
 */
export interface FeeInfo {
    /**
     * ID of the asset these fees relate to
     * @type {string}
     * @memberof FeeInfo
     */
    'asset_id': string;
    /**
     * Fee limit
     * @type {string}
     * @memberof FeeInfo
     */
    'fee_limit': string;
    /**
     * ID of vault the asset belong to
     * @type {number}
     * @memberof FeeInfo
     */
    'source_vault_id': number;
}
