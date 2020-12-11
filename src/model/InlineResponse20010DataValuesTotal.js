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

/**
 * The InlineResponse20010DataValuesTotal model module.
 * @module model/InlineResponse20010DataValuesTotal
 * @version 1.0.0
 */
class InlineResponse20010DataValuesTotal {
    /**
     * Constructs a new <code>InlineResponse20010DataValuesTotal</code>.
     * The total values of the Deals grouped by Deal currency
     * @alias module:model/InlineResponse20010DataValuesTotal
     */
    constructor() { 
        
        InlineResponse20010DataValuesTotal.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20010DataValuesTotal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20010DataValuesTotal} obj Optional instance to populate.
     * @return {module:model/InlineResponse20010DataValuesTotal} The populated <code>InlineResponse20010DataValuesTotal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20010DataValuesTotal();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('value_converted')) {
                obj['value_converted'] = ApiClient.convertToType(data['value_converted'], 'Number');
            }
            if (data.hasOwnProperty('value_formatted')) {
                obj['value_formatted'] = ApiClient.convertToType(data['value_formatted'], 'String');
            }
            if (data.hasOwnProperty('value_converted_formatted')) {
                obj['value_converted_formatted'] = ApiClient.convertToType(data['value_converted_formatted'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The total value of Deals in the Deal currency group
 * @member {Number} value
 */
InlineResponse20010DataValuesTotal.prototype['value'] = undefined;

/**
 * The number of Deals in the Deal currency group
 * @member {Number} count
 */
InlineResponse20010DataValuesTotal.prototype['count'] = undefined;

/**
 * The total value of Deals converted into the company default currency
 * @member {Number} value_converted
 */
InlineResponse20010DataValuesTotal.prototype['value_converted'] = undefined;

/**
 * The total value of Deals formatted with Deal currency. E.g. €50
 * @member {String} value_formatted
 */
InlineResponse20010DataValuesTotal.prototype['value_formatted'] = undefined;

/**
 * The value_converted formatted with Deal currency. E.g. US$50.10
 * @member {String} value_converted_formatted
 */
InlineResponse20010DataValuesTotal.prototype['value_converted_formatted'] = undefined;






export default InlineResponse20010DataValuesTotal;
