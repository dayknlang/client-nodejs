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
 * The BaseOrganizationItemWithEditNameFlagAllOf model module.
 * @module model/BaseOrganizationItemWithEditNameFlagAllOf
 * @version 1.0.0
 */
class BaseOrganizationItemWithEditNameFlagAllOf {
    /**
     * Constructs a new <code>BaseOrganizationItemWithEditNameFlagAllOf</code>.
     * @alias module:model/BaseOrganizationItemWithEditNameFlagAllOf
     */
    constructor() { 
        
        BaseOrganizationItemWithEditNameFlagAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BaseOrganizationItemWithEditNameFlagAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseOrganizationItemWithEditNameFlagAllOf} obj Optional instance to populate.
     * @return {module:model/BaseOrganizationItemWithEditNameFlagAllOf} The populated <code>BaseOrganizationItemWithEditNameFlagAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseOrganizationItemWithEditNameFlagAllOf();

            if (data.hasOwnProperty('edit_name')) {
                obj['edit_name'] = ApiClient.convertToType(data['edit_name'], 'Boolean');

                delete data['edit_name'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * If the company ID of the Organization and company ID of the request is same or not
 * @member {Boolean} edit_name
 */
BaseOrganizationItemWithEditNameFlagAllOf.prototype['edit_name'] = undefined;






export default BaseOrganizationItemWithEditNameFlagAllOf;

