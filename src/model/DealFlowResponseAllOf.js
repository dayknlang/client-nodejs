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
import AdditionalData from './AdditionalData';
import DealFlowResponseAllOfData from './DealFlowResponseAllOfData';
import DealFlowResponseAllOfRelatedObjects from './DealFlowResponseAllOfRelatedObjects';

/**
 * The DealFlowResponseAllOf model module.
 * @module model/DealFlowResponseAllOf
 * @version 1.0.0
 */
class DealFlowResponseAllOf {
    /**
     * Constructs a new <code>DealFlowResponseAllOf</code>.
     * @alias module:model/DealFlowResponseAllOf
     */
    constructor() { 
        
        DealFlowResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DealFlowResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DealFlowResponseAllOf} obj Optional instance to populate.
     * @return {module:model/DealFlowResponseAllOf} The populated <code>DealFlowResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DealFlowResponseAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [DealFlowResponseAllOfData]);

                delete data['data'];
            }
            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = AdditionalData.constructFromObject(data['additional_data']);

                delete data['additional_data'];
            }
            if (data.hasOwnProperty('related_objects')) {
                obj['related_objects'] = DealFlowResponseAllOfRelatedObjects.constructFromObject(data['related_objects']);

                delete data['related_objects'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/DealFlowResponseAllOfData>} data
 */
DealFlowResponseAllOf.prototype['data'] = undefined;

/**
 * @member {module:model/AdditionalData} additional_data
 */
DealFlowResponseAllOf.prototype['additional_data'] = undefined;

/**
 * @member {module:model/DealFlowResponseAllOfRelatedObjects} related_objects
 */
DealFlowResponseAllOf.prototype['related_objects'] = undefined;






export default DealFlowResponseAllOf;

