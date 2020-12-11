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
import BaseResponse from './BaseResponse';
import SubscriptionItem from './SubscriptionItem';
import SubscriptionsIdResponseAllOf from './SubscriptionsIdResponseAllOf';

/**
 * The SubscriptionsIdResponse model module.
 * @module model/SubscriptionsIdResponse
 * @version 1.0.0
 */
class SubscriptionsIdResponse {
    /**
     * Constructs a new <code>SubscriptionsIdResponse</code>.
     * @alias module:model/SubscriptionsIdResponse
     * @implements module:model/BaseResponse
     * @implements module:model/SubscriptionsIdResponseAllOf
     */
    constructor() { 
        BaseResponse.initialize(this);SubscriptionsIdResponseAllOf.initialize(this);
        SubscriptionsIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubscriptionsIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubscriptionsIdResponse} obj Optional instance to populate.
     * @return {module:model/SubscriptionsIdResponse} The populated <code>SubscriptionsIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubscriptionsIdResponse();
            BaseResponse.constructFromObject(data, obj);
            SubscriptionsIdResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = SubscriptionItem.constructFromObject(data['data']);

                delete data['data'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * If the response is successful or not
 * @member {Boolean} success
 */
SubscriptionsIdResponse.prototype['success'] = undefined;

/**
 * @member {module:model/SubscriptionItem} data
 */
SubscriptionsIdResponse.prototype['data'] = undefined;


// Implement BaseResponse interface:
/**
 * If the response is successful or not
 * @member {Boolean} success
 */
BaseResponse.prototype['success'] = undefined;
// Implement SubscriptionsIdResponseAllOf interface:
/**
 * @member {module:model/SubscriptionItem} data
 */
SubscriptionsIdResponseAllOf.prototype['data'] = undefined;




export default SubscriptionsIdResponse;

