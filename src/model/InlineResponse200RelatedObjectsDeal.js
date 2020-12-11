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
import InlineResponse200RelatedObjectsDealDEALID from './InlineResponse200RelatedObjectsDealDEALID';

/**
 * The InlineResponse200RelatedObjectsDeal model module.
 * @module model/InlineResponse200RelatedObjectsDeal
 * @version 1.0.0
 */
class InlineResponse200RelatedObjectsDeal {
    /**
     * Constructs a new <code>InlineResponse200RelatedObjectsDeal</code>.
     * @alias module:model/InlineResponse200RelatedObjectsDeal
     */
    constructor() { 
        
        InlineResponse200RelatedObjectsDeal.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse200RelatedObjectsDeal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200RelatedObjectsDeal} obj Optional instance to populate.
     * @return {module:model/InlineResponse200RelatedObjectsDeal} The populated <code>InlineResponse200RelatedObjectsDeal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse200RelatedObjectsDeal();

            if (data.hasOwnProperty('DEAL_ID')) {
                obj['DEAL_ID'] = InlineResponse200RelatedObjectsDealDEALID.constructFromObject(data['DEAL_ID']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse200RelatedObjectsDealDEALID} DEAL_ID
 */
InlineResponse200RelatedObjectsDeal.prototype['DEAL_ID'] = undefined;






export default InlineResponse200RelatedObjectsDeal;
