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
import ItemSearchAdditionalData from './ItemSearchAdditionalData';
import ProductSearchResponseAllOfData from './ProductSearchResponseAllOfData';

/**
 * The ProductSearchResponseAllOf model module.
 * @module model/ProductSearchResponseAllOf
 * @version 1.0.0
 */
class ProductSearchResponseAllOf {
    /**
     * Constructs a new <code>ProductSearchResponseAllOf</code>.
     * @alias module:model/ProductSearchResponseAllOf
     */
    constructor() { 
        
        ProductSearchResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductSearchResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductSearchResponseAllOf} obj Optional instance to populate.
     * @return {module:model/ProductSearchResponseAllOf} The populated <code>ProductSearchResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductSearchResponseAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ProductSearchResponseAllOfData.constructFromObject(data['data']);

                delete data['data'];
            }
            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = ItemSearchAdditionalData.constructFromObject(data['additional_data']);

                delete data['additional_data'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * @member {module:model/ProductSearchResponseAllOfData} data
 */
ProductSearchResponseAllOf.prototype['data'] = undefined;

/**
 * @member {module:model/ItemSearchAdditionalData} additional_data
 */
ProductSearchResponseAllOf.prototype['additional_data'] = undefined;






export default ProductSearchResponseAllOf;

