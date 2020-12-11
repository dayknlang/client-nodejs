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
import InlineResponse20061Data from './InlineResponse20061Data';

/**
 * The InlineResponse20061 model module.
 * @module model/InlineResponse20061
 * @version 1.0.0
 */
class InlineResponse20061 {
    /**
     * Constructs a new <code>InlineResponse20061</code>.
     * @alias module:model/InlineResponse20061
     */
    constructor() { 
        
        InlineResponse20061.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20061</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20061} obj Optional instance to populate.
     * @return {module:model/InlineResponse20061} The populated <code>InlineResponse20061</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20061();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = InlineResponse20061Data.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * If the request was successful or not
 * @member {Boolean} success
 */
InlineResponse20061.prototype['success'] = undefined;

/**
 * @member {module:model/InlineResponse20061Data} data
 */
InlineResponse20061.prototype['data'] = undefined;






export default InlineResponse20061;

