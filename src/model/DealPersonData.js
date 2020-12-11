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
import DealPersonDataPhone from './DealPersonDataPhone';
import PersonDataEmail from './PersonDataEmail';

/**
 * The DealPersonData model module.
 * @module model/DealPersonData
 * @version 1.0.0
 */
class DealPersonData {
    /**
     * Constructs a new <code>DealPersonData</code>.
     * The Person who is associated with the Deal
     * @alias module:model/DealPersonData
     */
    constructor() { 
        
        DealPersonData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DealPersonData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DealPersonData} obj Optional instance to populate.
     * @return {module:model/DealPersonData} The populated <code>DealPersonData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DealPersonData();

            if (data.hasOwnProperty('active_flag')) {
                obj['active_flag'] = ApiClient.convertToType(data['active_flag'], 'Boolean');

                delete data['active_flag'];
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], [PersonDataEmail]);

                delete data['email'];
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], [DealPersonDataPhone]);

                delete data['phone'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * If the associated Person is activated or not
 * @member {Boolean} active_flag
 */
DealPersonData.prototype['active_flag'] = undefined;

/**
 * The name of the Person associated with the Deal
 * @member {String} name
 */
DealPersonData.prototype['name'] = undefined;

/**
 * The emails of the Person associated with the Deal
 * @member {Array.<module:model/PersonDataEmail>} email
 */
DealPersonData.prototype['email'] = undefined;

/**
 * The phone numbers of the Person associated with the Deal
 * @member {Array.<module:model/DealPersonDataPhone>} phone
 */
DealPersonData.prototype['phone'] = undefined;






export default DealPersonData;

