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
 * @interface GetSignableCancelOrderResponse
 */
export interface GetSignableCancelOrderResponse {
    /**
     * ID of the order to be cancelled
     * @type {number}
     * @memberof GetSignableCancelOrderResponse
     */
    'order_id'?: number;
    /**
     * Hash of the payload to be signed for cancel order
     * @type {string}
     * @memberof GetSignableCancelOrderResponse
     */
    'payload_hash'?: string;
}

