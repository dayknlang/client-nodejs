/**
 * Pipedrive API v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DealSummaryPerCurrencyFullCURRENCYID from './DealSummaryPerCurrencyFullCURRENCYID';

/**
 * The DealSummaryPerCurrencyFull model module.
 * @module model/DealSummaryPerCurrencyFull
 * @version 1.0.0
 */
class DealSummaryPerCurrencyFull {
    /**
     * Constructs a new <code>DealSummaryPerCurrencyFull</code>.
     * Full currency summaries
     * @alias module:model/DealSummaryPerCurrencyFull
     */
    constructor() { 
        
        DealSummaryPerCurrencyFull.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DealSummaryPerCurrencyFull</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DealSummaryPerCurrencyFull} obj Optional instance to populate.
     * @return {module:model/DealSummaryPerCurrencyFull} The populated <code>DealSummaryPerCurrencyFull</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DealSummaryPerCurrencyFull();

            if (data.hasOwnProperty('CURRENCY_ID')) {
                obj['CURRENCY_ID'] = DealSummaryPerCurrencyFullCURRENCYID.constructFromObject(data['CURRENCY_ID']);

                delete data['CURRENCY_ID'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * @member {module:model/DealSummaryPerCurrencyFullCURRENCYID} CURRENCY_ID
 */
DealSummaryPerCurrencyFull.prototype['CURRENCY_ID'] = undefined;






export default DealSummaryPerCurrencyFull;

