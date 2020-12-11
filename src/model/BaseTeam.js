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
import BaseTeamAllOf from './BaseTeamAllOf';
import BaseTeamAllOf1 from './BaseTeamAllOf1';
import NumberBoolean from './NumberBoolean';
import UpdateTeam from './UpdateTeam';

/**
 * The BaseTeam model module.
 * @module model/BaseTeam
 * @version 1.0.0
 */
class BaseTeam {
    /**
     * Constructs a new <code>BaseTeam</code>.
     * @alias module:model/BaseTeam
     * @implements module:model/BaseTeamAllOf
     * @implements module:model/UpdateTeam
     * @implements module:model/BaseTeamAllOf1
     * @param name {String} The Team name
     * @param managerId {Number} The Team manager ID
     */
    constructor(name, managerId) { 
        BaseTeamAllOf.initialize(this);UpdateTeam.initialize(this, name, managerId);BaseTeamAllOf1.initialize(this);
        BaseTeam.initialize(this, name, managerId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, managerId) { 
        obj['name'] = name;
        obj['manager_id'] = managerId;
    }

    /**
     * Constructs a <code>BaseTeam</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseTeam} obj Optional instance to populate.
     * @return {module:model/BaseTeam} The populated <code>BaseTeam</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseTeam();
            BaseTeamAllOf.constructFromObject(data, obj);
            UpdateTeam.constructFromObject(data, obj);
            BaseTeamAllOf1.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');

                delete data['description'];
            }
            if (data.hasOwnProperty('manager_id')) {
                obj['manager_id'] = ApiClient.convertToType(data['manager_id'], 'Number');

                delete data['manager_id'];
            }
            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], Array);

                delete data['users'];
            }
            if (data.hasOwnProperty('active_flag')) {
                obj['active_flag'] = ApiClient.convertToType(data['active_flag'], NumberBoolean);

                delete data['active_flag'];
            }
            if (data.hasOwnProperty('deleted_flag')) {
                obj['deleted_flag'] = ApiClient.convertToType(data['deleted_flag'], NumberBoolean);

                delete data['deleted_flag'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'String');

                delete data['add_time'];
            }
            if (data.hasOwnProperty('created_by_user_id')) {
                obj['created_by_user_id'] = ApiClient.convertToType(data['created_by_user_id'], 'Number');

                delete data['created_by_user_id'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * The Team ID
 * @member {Number} id
 */
BaseTeam.prototype['id'] = undefined;

/**
 * The Team name
 * @member {String} name
 */
BaseTeam.prototype['name'] = undefined;

/**
 * The Team description
 * @member {String} description
 */
BaseTeam.prototype['description'] = undefined;

/**
 * The Team manager ID
 * @member {Number} manager_id
 */
BaseTeam.prototype['manager_id'] = undefined;

/**
 * IDs of the Users that belong to the Team
 * @member {Array} users
 */
BaseTeam.prototype['users'] = undefined;

/**
 * Flag that indicates if the Team is activated
 * @member {module:model/NumberBoolean} active_flag
 */
BaseTeam.prototype['active_flag'] = undefined;

/**
 * Flag that indicates if the Team is deleted
 * @member {module:model/NumberBoolean} deleted_flag
 */
BaseTeam.prototype['deleted_flag'] = undefined;

/**
 * The Team creation time. Format: YYYY-MM-DD HH:MM:SS
 * @member {String} add_time
 */
BaseTeam.prototype['add_time'] = undefined;

/**
 * ID of the User who created the Team
 * @member {Number} created_by_user_id
 */
BaseTeam.prototype['created_by_user_id'] = undefined;


// Implement BaseTeamAllOf interface:
/**
 * The Team ID
 * @member {Number} id
 */
BaseTeamAllOf.prototype['id'] = undefined;
// Implement UpdateTeam interface:
/**
 * The Team name
 * @member {String} name
 */
UpdateTeam.prototype['name'] = undefined;
/**
 * The Team description
 * @member {String} description
 */
UpdateTeam.prototype['description'] = undefined;
/**
 * The Team manager ID
 * @member {Number} manager_id
 */
UpdateTeam.prototype['manager_id'] = undefined;
/**
 * IDs of the Users that belong to the Team
 * @member {Array} users
 */
UpdateTeam.prototype['users'] = undefined;
/**
 * Flag that indicates if the Team is activated
 * @member {module:model/NumberBoolean} active_flag
 */
UpdateTeam.prototype['active_flag'] = undefined;
/**
 * Flag that indicates if the Team is deleted
 * @member {module:model/NumberBoolean} deleted_flag
 */
UpdateTeam.prototype['deleted_flag'] = undefined;
// Implement BaseTeamAllOf1 interface:
/**
 * The Team creation time. Format: YYYY-MM-DD HH:MM:SS
 * @member {String} add_time
 */
BaseTeamAllOf1.prototype['add_time'] = undefined;
/**
 * ID of the User who created the Team
 * @member {Number} created_by_user_id
 */
BaseTeamAllOf1.prototype['created_by_user_id'] = undefined;




export default BaseTeam;

