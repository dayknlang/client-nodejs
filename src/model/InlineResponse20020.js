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
import InlineResponse20020Data from './InlineResponse20020Data';

/**
 * The InlineResponse20020 model module.
 * @module model/InlineResponse20020
 * @version 1.0.0
 */
class InlineResponse20020 {
    /**
     * Constructs a new <code>InlineResponse20020</code>.
     * @alias module:model/InlineResponse20020
     */
    constructor() { 
        
        InlineResponse20020.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20020</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20020} obj Optional instance to populate.
     * @return {module:model/InlineResponse20020} The populated <code>InlineResponse20020</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20020();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = InlineResponse20020Data.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * If the request was successful or not
 * @member {Boolean} success
 */
InlineResponse20020.prototype['success'] = undefined;

/**
 * @member {module:model/InlineResponse20020Data} data
 */
InlineResponse20020.prototype['data'] = undefined;






export default InlineResponse20020;

