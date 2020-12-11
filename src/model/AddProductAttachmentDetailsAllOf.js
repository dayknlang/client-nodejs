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
 * The AddProductAttachmentDetailsAllOf model module.
 * @module model/AddProductAttachmentDetailsAllOf
 * @version 1.0.0
 */
class AddProductAttachmentDetailsAllOf {
    /**
     * Constructs a new <code>AddProductAttachmentDetailsAllOf</code>.
     * @alias module:model/AddProductAttachmentDetailsAllOf
     */
    constructor() { 
        
        AddProductAttachmentDetailsAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddProductAttachmentDetailsAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddProductAttachmentDetailsAllOf} obj Optional instance to populate.
     * @return {module:model/AddProductAttachmentDetailsAllOf} The populated <code>AddProductAttachmentDetailsAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddProductAttachmentDetailsAllOf();

            if (data.hasOwnProperty('product_attachment_id')) {
                obj['product_attachment_id'] = ApiClient.convertToType(data['product_attachment_id'], 'Number');

                delete data['product_attachment_id'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * The ID of the deal-product (the ID of the Product attached to the Deal)
 * @member {Number} product_attachment_id
 */
AddProductAttachmentDetailsAllOf.prototype['product_attachment_id'] = undefined;






export default AddProductAttachmentDetailsAllOf;

