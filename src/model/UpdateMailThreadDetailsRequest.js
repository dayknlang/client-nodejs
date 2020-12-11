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
import NumberBoolean from './NumberBoolean';

/**
 * The UpdateMailThreadDetailsRequest model module.
 * @module model/UpdateMailThreadDetailsRequest
 * @version 1.0.0
 */
class UpdateMailThreadDetailsRequest {
    /**
     * Constructs a new <code>UpdateMailThreadDetailsRequest</code>.
     * @alias module:model/UpdateMailThreadDetailsRequest
     */
    constructor() { 
        
        UpdateMailThreadDetailsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateMailThreadDetailsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateMailThreadDetailsRequest} obj Optional instance to populate.
     * @return {module:model/UpdateMailThreadDetailsRequest} The populated <code>UpdateMailThreadDetailsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateMailThreadDetailsRequest();

            if (data.hasOwnProperty('deal_id')) {
                obj['deal_id'] = ApiClient.convertToType(data['deal_id'], 'Number');

                delete data['deal_id'];
            }
            if (data.hasOwnProperty('shared_flag')) {
                obj['shared_flag'] = ApiClient.convertToType(data['shared_flag'], NumberBoolean);

                delete data['shared_flag'];
            }
            if (data.hasOwnProperty('read_flag')) {
                obj['read_flag'] = ApiClient.convertToType(data['read_flag'], NumberBoolean);

                delete data['read_flag'];
            }
            if (data.hasOwnProperty('archived_flag')) {
                obj['archived_flag'] = ApiClient.convertToType(data['archived_flag'], NumberBoolean);

                delete data['archived_flag'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * ID of the deal this thread is associated with
 * @member {Number} deal_id
 */
UpdateMailThreadDetailsRequest.prototype['deal_id'] = undefined;

/**
 * Whether this thread is shared with other users in your company
 * @member {module:model/NumberBoolean} shared_flag
 */
UpdateMailThreadDetailsRequest.prototype['shared_flag'] = undefined;

/**
 * Whether this thread read or unread
 * @member {module:model/NumberBoolean} read_flag
 */
UpdateMailThreadDetailsRequest.prototype['read_flag'] = undefined;

/**
 * Whether this thread is archived or not. You can only archive threads that belong to Inbox folder. Archived threads will disappear from Inbox.
 * @member {module:model/NumberBoolean} archived_flag
 */
UpdateMailThreadDetailsRequest.prototype['archived_flag'] = undefined;






export default UpdateMailThreadDetailsRequest;

