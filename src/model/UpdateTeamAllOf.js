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
 * The UpdateTeamAllOf model module.
 * @module model/UpdateTeamAllOf
 * @version 1.0.0
 */
class UpdateTeamAllOf {
    /**
     * Constructs a new <code>UpdateTeamAllOf</code>.
     * @alias module:model/UpdateTeamAllOf
     */
    constructor() { 
        
        UpdateTeamAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateTeamAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateTeamAllOf} obj Optional instance to populate.
     * @return {module:model/UpdateTeamAllOf} The populated <code>UpdateTeamAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateTeamAllOf();

            if (data.hasOwnProperty('active_flag')) {
                obj['active_flag'] = ApiClient.convertToType(data['active_flag'], NumberBoolean);

                delete data['active_flag'];
            }
            if (data.hasOwnProperty('deleted_flag')) {
                obj['deleted_flag'] = ApiClient.convertToType(data['deleted_flag'], NumberBoolean);

                delete data['deleted_flag'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * Flag that indicates if the Team is activated
 * @member {module:model/NumberBoolean} active_flag
 */
UpdateTeamAllOf.prototype['active_flag'] = undefined;

/**
 * Flag that indicates if the Team is deleted
 * @member {module:model/NumberBoolean} deleted_flag
 */
UpdateTeamAllOf.prototype['deleted_flag'] = undefined;






export default UpdateTeamAllOf;

