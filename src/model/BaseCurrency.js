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
 * The BaseCurrency model module.
 * @module model/BaseCurrency
 * @version 1.0.0
 */
class BaseCurrency {
    /**
     * Constructs a new <code>BaseCurrency</code>.
     * @alias module:model/BaseCurrency
     */
    constructor() { 
        
        BaseCurrency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BaseCurrency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseCurrency} obj Optional instance to populate.
     * @return {module:model/BaseCurrency} The populated <code>BaseCurrency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseCurrency();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');

                delete data['code'];
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('decimal_points')) {
                obj['decimal_points'] = ApiClient.convertToType(data['decimal_points'], 'Number');

                delete data['decimal_points'];
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');

                delete data['symbol'];
            }
            if (data.hasOwnProperty('active_flag')) {
                obj['active_flag'] = ApiClient.convertToType(data['active_flag'], 'Boolean');

                delete data['active_flag'];
            }
            if (data.hasOwnProperty('is_custom_flag')) {
                obj['is_custom_flag'] = ApiClient.convertToType(data['is_custom_flag'], 'Boolean');

                delete data['is_custom_flag'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * ID of the Currency
 * @member {Number} id
 */
BaseCurrency.prototype['id'] = undefined;

/**
 * Code of the Currency
 * @member {String} code
 */
BaseCurrency.prototype['code'] = undefined;

/**
 * Name of the Currency
 * @member {String} name
 */
BaseCurrency.prototype['name'] = undefined;

/**
 * The amount of decimal points of the Currency
 * @member {Number} decimal_points
 */
BaseCurrency.prototype['decimal_points'] = undefined;

/**
 * Symbol of the Currency
 * @member {String} symbol
 */
BaseCurrency.prototype['symbol'] = undefined;

/**
 * Whether the Currency is active or not
 * @member {Boolean} active_flag
 */
BaseCurrency.prototype['active_flag'] = undefined;

/**
 * Whether the Currency is a custom one or not
 * @member {Boolean} is_custom_flag
 */
BaseCurrency.prototype['is_custom_flag'] = undefined;






export default BaseCurrency;

