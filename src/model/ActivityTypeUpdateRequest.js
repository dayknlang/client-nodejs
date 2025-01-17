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
import IconKey from './IconKey';

/**
 * The ActivityTypeUpdateRequest model module.
 * @module model/ActivityTypeUpdateRequest
 * @version 1.0.0
 */
class ActivityTypeUpdateRequest {
    /**
     * Constructs a new <code>ActivityTypeUpdateRequest</code>.
     * @alias module:model/ActivityTypeUpdateRequest
     */
    constructor() { 
        
        ActivityTypeUpdateRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActivityTypeUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActivityTypeUpdateRequest} obj Optional instance to populate.
     * @return {module:model/ActivityTypeUpdateRequest} The populated <code>ActivityTypeUpdateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActivityTypeUpdateRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('icon_key')) {
                obj['icon_key'] = IconKey.constructFromObject(data['icon_key']);

                delete data['icon_key'];
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');

                delete data['color'];
            }
            if (data.hasOwnProperty('order_nr')) {
                obj['order_nr'] = ApiClient.convertToType(data['order_nr'], 'Number');

                delete data['order_nr'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * The name of the ActivityType
 * @member {String} name
 */
ActivityTypeUpdateRequest.prototype['name'] = undefined;

/**
 * @member {module:model/IconKey} icon_key
 */
ActivityTypeUpdateRequest.prototype['icon_key'] = undefined;

/**
 * A designated color for the ActivityType in 6-character HEX format (e.g. `FFFFFF` for white, `000000` for black)
 * @member {String} color
 */
ActivityTypeUpdateRequest.prototype['color'] = undefined;

/**
 * An order number for this ActivityType. Order numbers should be used to order the types in the ActivityType selections.
 * @member {Number} order_nr
 */
ActivityTypeUpdateRequest.prototype['order_nr'] = undefined;






export default ActivityTypeUpdateRequest;

