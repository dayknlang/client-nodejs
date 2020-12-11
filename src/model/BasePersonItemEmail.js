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
 * The BasePersonItemEmail model module.
 * @module model/BasePersonItemEmail
 * @version 1.0.0
 */
class BasePersonItemEmail {
    /**
     * Constructs a new <code>BasePersonItemEmail</code>.
     * @alias module:model/BasePersonItemEmail
     */
    constructor() { 
        
        BasePersonItemEmail.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BasePersonItemEmail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BasePersonItemEmail} obj Optional instance to populate.
     * @return {module:model/BasePersonItemEmail} The populated <code>BasePersonItemEmail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BasePersonItemEmail();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');

                delete data['value'];
            }
            if (data.hasOwnProperty('primary')) {
                obj['primary'] = ApiClient.convertToType(data['primary'], 'Boolean');

                delete data['primary'];
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');

                delete data['label'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * Email
 * @member {String} value
 */
BasePersonItemEmail.prototype['value'] = undefined;

/**
 * Boolean that indicates if email is primary for the Person or not
 * @member {Boolean} primary
 */
BasePersonItemEmail.prototype['primary'] = undefined;

/**
 * Label that indicates the type of the email. (Possible values - work, home or other)
 * @member {String} label
 */
BasePersonItemEmail.prototype['label'] = undefined;






export default BasePersonItemEmail;

