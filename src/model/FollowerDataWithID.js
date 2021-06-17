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
import FollowerData from './FollowerData';
import FollowerDataWithIDAllOf from './FollowerDataWithIDAllOf';

/**
 * The FollowerDataWithID model module.
 * @module model/FollowerDataWithID
 * @version 1.0.0
 */
class FollowerDataWithID {
    /**
     * Constructs a new <code>FollowerDataWithID</code>.
     * @alias module:model/FollowerDataWithID
     * @implements module:model/FollowerDataWithIDAllOf
     * @implements module:model/FollowerData
     */
    constructor() { 
        FollowerDataWithIDAllOf.initialize(this);FollowerData.initialize(this);
        FollowerDataWithID.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FollowerDataWithID</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FollowerDataWithID} obj Optional instance to populate.
     * @return {module:model/FollowerDataWithID} The populated <code>FollowerDataWithID</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FollowerDataWithID();
            FollowerDataWithIDAllOf.constructFromObject(data, obj);
            FollowerData.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');

                delete data['email'];
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');

                delete data['user_id'];
            }
            if (data.hasOwnProperty('pic_hash')) {
                obj['pic_hash'] = ApiClient.convertToType(data['pic_hash'], 'String');

                delete data['pic_hash'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * The ID of the follower associated with the item
 * @member {Number} id
 */
FollowerDataWithID.prototype['id'] = undefined;

/**
 * The name of the follower
 * @member {String} name
 */
FollowerDataWithID.prototype['name'] = undefined;

/**
 * The email of the follower
 * @member {String} email
 */
FollowerDataWithID.prototype['email'] = undefined;

/**
 * The user ID of the follower
 * @member {Number} user_id
 */
FollowerDataWithID.prototype['user_id'] = undefined;

/**
 * The follower picture hash
 * @member {String} pic_hash
 */
FollowerDataWithID.prototype['pic_hash'] = undefined;


// Implement FollowerDataWithIDAllOf interface:
/**
 * The ID of the follower associated with the item
 * @member {Number} id
 */
FollowerDataWithIDAllOf.prototype['id'] = undefined;
// Implement FollowerData interface:
/**
 * The name of the follower
 * @member {String} name
 */
FollowerData.prototype['name'] = undefined;
/**
 * The email of the follower
 * @member {String} email
 */
FollowerData.prototype['email'] = undefined;
/**
 * The user ID of the follower
 * @member {Number} user_id
 */
FollowerData.prototype['user_id'] = undefined;
/**
 * The follower picture hash
 * @member {String} pic_hash
 */
FollowerData.prototype['pic_hash'] = undefined;




export default FollowerDataWithID;
