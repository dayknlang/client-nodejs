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
 * The PostRoleSettingsAllOfData model module.
 * @module model/PostRoleSettingsAllOfData
 * @version 1.0.0
 */
class PostRoleSettingsAllOfData {
    /**
     * Constructs a new <code>PostRoleSettingsAllOfData</code>.
     * The response data
     * @alias module:model/PostRoleSettingsAllOfData
     */
    constructor() { 
        
        PostRoleSettingsAllOfData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostRoleSettingsAllOfData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostRoleSettingsAllOfData} obj Optional instance to populate.
     * @return {module:model/PostRoleSettingsAllOfData} The populated <code>PostRoleSettingsAllOfData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostRoleSettingsAllOfData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('deal_default_visibility')) {
                obj['deal_default_visibility'] = ApiClient.convertToType(data['deal_default_visibility'], 'Number');

                delete data['deal_default_visibility'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * The ID of the Role
 * @member {Number} id
 */
PostRoleSettingsAllOfData.prototype['id'] = undefined;

/**
 * The setting
 * @member {module:model/PostRoleSettingsAllOfData.DealDefaultVisibilityEnum} deal_default_visibility
 */
PostRoleSettingsAllOfData.prototype['deal_default_visibility'] = undefined;





/**
 * Allowed values for the <code>deal_default_visibility</code> property.
 * @enum {Number}
 * @readonly
 */
PostRoleSettingsAllOfData['DealDefaultVisibilityEnum'] = {

    /**
     * value: null
     * @const
     */
    "null": null,

    /**
     * value: null
     * @const
     */
    "null": null,

    /**
     * value: null
     * @const
     */
    "null": null,

    /**
     * value: null
     * @const
     */
    "null": null
};



export default PostRoleSettingsAllOfData;

