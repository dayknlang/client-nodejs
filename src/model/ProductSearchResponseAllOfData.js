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
import ProductSearchItem from './ProductSearchItem';

/**
 * The ProductSearchResponseAllOfData model module.
 * @module model/ProductSearchResponseAllOfData
 * @version 1.0.0
 */
class ProductSearchResponseAllOfData {
    /**
     * Constructs a new <code>ProductSearchResponseAllOfData</code>.
     * @alias module:model/ProductSearchResponseAllOfData
     */
    constructor() { 
        
        ProductSearchResponseAllOfData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductSearchResponseAllOfData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductSearchResponseAllOfData} obj Optional instance to populate.
     * @return {module:model/ProductSearchResponseAllOfData} The populated <code>ProductSearchResponseAllOfData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductSearchResponseAllOfData();

            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [ProductSearchItem]);

                delete data['items'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * The array of found items
 * @member {Array.<module:model/ProductSearchItem>} items
 */
ProductSearchResponseAllOfData.prototype['items'] = undefined;






export default ProductSearchResponseAllOfData;

