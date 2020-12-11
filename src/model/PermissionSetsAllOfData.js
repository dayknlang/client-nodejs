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

/**
 * The PermissionSetsAllOfData model module.
 * @module model/PermissionSetsAllOfData
 * @version 1.0.0
 */
class PermissionSetsAllOfData {
    /**
     * Constructs a new <code>PermissionSetsAllOfData</code>.
     * @alias module:model/PermissionSetsAllOfData
     */
    constructor() { 
        
        PermissionSetsAllOfData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PermissionSetsAllOfData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PermissionSetsAllOfData} obj Optional instance to populate.
     * @return {module:model/PermissionSetsAllOfData} The populated <code>PermissionSetsAllOfData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PermissionSetsAllOfData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('assignment_count')) {
                obj['assignment_count'] = ApiClient.convertToType(data['assignment_count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The ID of User Permission Set
 * @member {Number} id
 */
PermissionSetsAllOfData.prototype['id'] = undefined;

/**
 * The name of Permission Set
 * @member {String} name
 */
PermissionSetsAllOfData.prototype['name'] = undefined;

/**
 * The number of Users assigned to this Permission Set
 * @member {Number} assignment_count
 */
PermissionSetsAllOfData.prototype['assignment_count'] = undefined;






export default PermissionSetsAllOfData;

