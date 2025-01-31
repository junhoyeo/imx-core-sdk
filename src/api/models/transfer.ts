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


import { TokenData } from './token-data';

/**
 * 
 * @export
 * @interface Transfer
 */
export interface Transfer {
    /**
     * 
     * @type {TokenData}
     * @memberof Transfer
     */
    'data': TokenData;
    /**
     * Ethereum address of the user who received this transfer
     * @type {string}
     * @memberof Transfer
     */
    'receiver': string;
    /**
     * Status of the transaction
     * @type {string}
     * @memberof Transfer
     */
    'status': string;
    /**
     * Timestamp of the transfer
     * @type {string}
     * @memberof Transfer
     */
    'timestamp': string | null;
    /**
     * Sequential transaction ID
     * @type {number}
     * @memberof Transfer
     */
    'transaction_id': number;
    /**
     * Type of this asset (ETH/ERC20/ERC721)
     * @type {string}
     * @memberof Transfer
     */
    'type': string;
    /**
     * Ethereum address of the user  who submitted this transfer
     * @type {string}
     * @memberof Transfer
     */
    'user': string;
}

