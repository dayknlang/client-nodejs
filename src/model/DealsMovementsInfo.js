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
import DealsMovementsInfoFormattedValues from './DealsMovementsInfoFormattedValues';
import DealsMovementsInfoValues from './DealsMovementsInfoValues';

/**
 * The DealsMovementsInfo model module.
 * @module model/DealsMovementsInfo
 * @version 1.0.0
 */
class DealsMovementsInfo {
    /**
     * Constructs a new <code>DealsMovementsInfo</code>.
     * Deals summary
     * @alias module:model/DealsMovementsInfo
     */
    constructor() { 
        
        DealsMovementsInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DealsMovementsInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DealsMovementsInfo} obj Optional instance to populate.
     * @return {module:model/DealsMovementsInfo} The populated <code>DealsMovementsInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DealsMovementsInfo();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');

                delete data['count'];
            }
            if (data.hasOwnProperty('deals_ids')) {
                obj['deals_ids'] = ApiClient.convertToType(data['deals_ids'], ['Number']);

                delete data['deals_ids'];
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = DealsMovementsInfoValues.constructFromObject(data['values']);

                delete data['values'];
            }
            if (data.hasOwnProperty('formatted_values')) {
                obj['formatted_values'] = DealsMovementsInfoFormattedValues.constructFromObject(data['formatted_values']);

                delete data['formatted_values'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * Deals count
 * @member {Number} count
 */
DealsMovementsInfo.prototype['count'] = undefined;

/**
 * IDs of the Deals that have been moved
 * @member {Array.<Number>} deals_ids
 */
DealsMovementsInfo.prototype['deals_ids'] = undefined;

/**
 * @member {module:model/DealsMovementsInfoValues} values
 */
DealsMovementsInfo.prototype['values'] = undefined;

/**
 * @member {module:model/DealsMovementsInfoFormattedValues} formatted_values
 */
DealsMovementsInfo.prototype['formatted_values'] = undefined;






export default DealsMovementsInfo;

