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
import AdditionalData from './AdditionalData';
import PaginationDetailsAllOf from './PaginationDetailsAllOf';

/**
 * The PaginationDetails model module.
 * @module model/PaginationDetails
 * @version 1.0.0
 */
class PaginationDetails {
    /**
     * Constructs a new <code>PaginationDetails</code>.
     * Pagination details of the list
     * @alias module:model/PaginationDetails
     * @implements module:model/AdditionalData
     * @implements module:model/PaginationDetailsAllOf
     */
    constructor() { 
        AdditionalData.initialize(this);PaginationDetailsAllOf.initialize(this);
        PaginationDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaginationDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginationDetails} obj Optional instance to populate.
     * @return {module:model/PaginationDetails} The populated <code>PaginationDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaginationDetails();
            AdditionalData.constructFromObject(data, obj);
            PaginationDetailsAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'Number');

                delete data['start'];
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');

                delete data['limit'];
            }
            if (data.hasOwnProperty('more_items_in_collection')) {
                obj['more_items_in_collection'] = ApiClient.convertToType(data['more_items_in_collection'], 'Boolean');

                delete data['more_items_in_collection'];
            }
            if (data.hasOwnProperty('next_start')) {
                obj['next_start'] = ApiClient.convertToType(data['next_start'], 'Number');

                delete data['next_start'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * Pagination start
 * @member {Number} start
 */
PaginationDetails.prototype['start'] = undefined;

/**
 * Items shown per page
 * @member {Number} limit
 */
PaginationDetails.prototype['limit'] = undefined;

/**
 * If there are more list items in the collection than displayed or not
 * @member {Boolean} more_items_in_collection
 */
PaginationDetails.prototype['more_items_in_collection'] = undefined;

/**
 * Next pagination start
 * @member {Number} next_start
 */
PaginationDetails.prototype['next_start'] = undefined;


// Implement AdditionalData interface:
/**
 * Pagination start
 * @member {Number} start
 */
AdditionalData.prototype['start'] = undefined;
/**
 * Items shown per page
 * @member {Number} limit
 */
AdditionalData.prototype['limit'] = undefined;
/**
 * If there are more list items in the collection than displayed or not
 * @member {Boolean} more_items_in_collection
 */
AdditionalData.prototype['more_items_in_collection'] = undefined;
// Implement PaginationDetailsAllOf interface:
/**
 * Next pagination start
 * @member {Number} next_start
 */
PaginationDetailsAllOf.prototype['next_start'] = undefined;




export default PaginationDetails;

