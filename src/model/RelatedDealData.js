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
import RelatedDealDataDEALID from './RelatedDealDataDEALID';

/**
 * The RelatedDealData model module.
 * @module model/RelatedDealData
 * @version 1.0.0
 */
class RelatedDealData {
    /**
     * Constructs a new <code>RelatedDealData</code>.
     * @alias module:model/RelatedDealData
     */
    constructor() { 
        
        RelatedDealData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RelatedDealData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelatedDealData} obj Optional instance to populate.
     * @return {module:model/RelatedDealData} The populated <code>RelatedDealData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RelatedDealData();

            if (data.hasOwnProperty('DEAL_ID')) {
                obj['DEAL_ID'] = RelatedDealDataDEALID.constructFromObject(data['DEAL_ID']);

                delete data['DEAL_ID'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * @member {module:model/RelatedDealDataDEALID} DEAL_ID
 */
RelatedDealData.prototype['DEAL_ID'] = undefined;






export default RelatedDealData;

