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
 * The OrganizationFollowerDeleteResponseData model module.
 * @module model/OrganizationFollowerDeleteResponseData
 * @version 1.0.0
 */
class OrganizationFollowerDeleteResponseData {
    /**
     * Constructs a new <code>OrganizationFollowerDeleteResponseData</code>.
     * @alias module:model/OrganizationFollowerDeleteResponseData
     */
    constructor() { 
        
        OrganizationFollowerDeleteResponseData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationFollowerDeleteResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationFollowerDeleteResponseData} obj Optional instance to populate.
     * @return {module:model/OrganizationFollowerDeleteResponseData} The populated <code>OrganizationFollowerDeleteResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationFollowerDeleteResponseData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * The ID of the follower that was deleted from the Organization
 * @member {Number} id
 */
OrganizationFollowerDeleteResponseData.prototype['id'] = undefined;






export default OrganizationFollowerDeleteResponseData;

