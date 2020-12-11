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
import FilterGetItem from './FilterGetItem';

/**
 * The GetRecentsDataFilter model module.
 * @module model/GetRecentsDataFilter
 * @version 1.0.0
 */
class GetRecentsDataFilter {
    /**
     * Constructs a new <code>GetRecentsDataFilter</code>.
     * @alias module:model/GetRecentsDataFilter
     */
    constructor() { 
        
        GetRecentsDataFilter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecentsDataFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecentsDataFilter} obj Optional instance to populate.
     * @return {module:model/GetRecentsDataFilter} The populated <code>GetRecentsDataFilter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecentsDataFilter();

            if (data.hasOwnProperty('item')) {
                obj['item'] = ApiClient.convertToType(data['item'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = FilterGetItem.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetRecentsDataFilter.ItemEnum} item
 */
GetRecentsDataFilter.prototype['item'] = undefined;

/**
 * @member {Number} id
 */
GetRecentsDataFilter.prototype['id'] = undefined;

/**
 * @member {module:model/FilterGetItem} data
 */
GetRecentsDataFilter.prototype['data'] = undefined;





/**
 * Allowed values for the <code>item</code> property.
 * @enum {String}
 * @readonly
 */
GetRecentsDataFilter['ItemEnum'] = {

    /**
     * value: "filter"
     * @const
     */
    "filter": "filter"
};



export default GetRecentsDataFilter;

