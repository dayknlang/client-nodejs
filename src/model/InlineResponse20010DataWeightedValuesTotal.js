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
 * The InlineResponse20010DataWeightedValuesTotal model module.
 * @module model/InlineResponse20010DataWeightedValuesTotal
 * @version 1.0.0
 */
class InlineResponse20010DataWeightedValuesTotal {
    /**
     * Constructs a new <code>InlineResponse20010DataWeightedValuesTotal</code>.
     * The total weighted values of the Deals grouped by Deal currency. The weighted value is calculated as probability times Deal value.
     * @alias module:model/InlineResponse20010DataWeightedValuesTotal
     */
    constructor() { 
        
        InlineResponse20010DataWeightedValuesTotal.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20010DataWeightedValuesTotal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20010DataWeightedValuesTotal} obj Optional instance to populate.
     * @return {module:model/InlineResponse20010DataWeightedValuesTotal} The populated <code>InlineResponse20010DataWeightedValuesTotal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20010DataWeightedValuesTotal();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('value_formatted')) {
                obj['value_formatted'] = ApiClient.convertToType(data['value_formatted'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The total weighted value of the Deals in the Deal currency group
 * @member {Number} value
 */
InlineResponse20010DataWeightedValuesTotal.prototype['value'] = undefined;

/**
 * The number of Deals in the Deal currency group
 * @member {Number} count
 */
InlineResponse20010DataWeightedValuesTotal.prototype['count'] = undefined;

/**
 * The total weighted value of the Deals formatted with Deal currency. E.g. €50
 * @member {String} value_formatted
 */
InlineResponse20010DataWeightedValuesTotal.prototype['value_formatted'] = undefined;






export default InlineResponse20010DataWeightedValuesTotal;

