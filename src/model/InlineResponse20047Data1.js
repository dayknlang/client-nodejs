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
import InlineResponse20047Data from './InlineResponse20047Data';
import InlineResponse200RelatedObjects from './InlineResponse200RelatedObjects';

/**
 * The InlineResponse20047Data1 model module.
 * @module model/InlineResponse20047Data1
 * @version 1.0.0
 */
class InlineResponse20047Data1 {
    /**
     * Constructs a new <code>InlineResponse20047Data1</code>.
     * @alias module:model/InlineResponse20047Data1
     */
    constructor() { 
        
        InlineResponse20047Data1.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20047Data1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20047Data1} obj Optional instance to populate.
     * @return {module:model/InlineResponse20047Data1} The populated <code>InlineResponse20047Data1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20047Data1();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = InlineResponse20047Data.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('related_objects')) {
                obj['related_objects'] = InlineResponse200RelatedObjects.constructFromObject(data['related_objects']);
            }
        }
        return obj;
    }


}

/**
 * If the response is successful or not
 * @member {Boolean} success
 */
InlineResponse20047Data1.prototype['success'] = undefined;

/**
 * @member {module:model/InlineResponse20047Data} data
 */
InlineResponse20047Data1.prototype['data'] = undefined;

/**
 * @member {module:model/InlineResponse200RelatedObjects} related_objects
 */
InlineResponse20047Data1.prototype['related_objects'] = undefined;






export default InlineResponse20047Data1;

