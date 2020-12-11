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
 * The InlineResponse20044Data model module.
 * @module model/InlineResponse20044Data
 * @version 1.0.0
 */
class InlineResponse20044Data {
    /**
     * Constructs a new <code>InlineResponse20044Data</code>.
     * @alias module:model/InlineResponse20044Data
     */
    constructor() { 
        
        InlineResponse20044Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20044Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20044Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse20044Data} The populated <code>InlineResponse20044Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20044Data();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The ID of the merged Organization
 * @member {Number} id
 */
InlineResponse20044Data.prototype['id'] = undefined;






export default InlineResponse20044Data;

