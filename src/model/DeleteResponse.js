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
import BaseResponse from './BaseResponse';
import DeleteResponseAllOf from './DeleteResponseAllOf';
import DeleteResponseAllOfData from './DeleteResponseAllOfData';

/**
 * The DeleteResponse model module.
 * @module model/DeleteResponse
 * @version 1.0.0
 */
class DeleteResponse {
    /**
     * Constructs a new <code>DeleteResponse</code>.
     * @alias module:model/DeleteResponse
     * @implements module:model/BaseResponse
     * @implements module:model/DeleteResponseAllOf
     */
    constructor() { 
        BaseResponse.initialize(this);DeleteResponseAllOf.initialize(this);
        DeleteResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteResponse} obj Optional instance to populate.
     * @return {module:model/DeleteResponse} The populated <code>DeleteResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteResponse();
            BaseResponse.constructFromObject(data, obj);
            DeleteResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = DeleteResponseAllOfData.constructFromObject(data['data']);

                delete data['data'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * If the response is successful or not
 * @member {Boolean} success
 */
DeleteResponse.prototype['success'] = undefined;

/**
 * @member {module:model/DeleteResponseAllOfData} data
 */
DeleteResponse.prototype['data'] = undefined;


// Implement BaseResponse interface:
/**
 * If the response is successful or not
 * @member {Boolean} success
 */
BaseResponse.prototype['success'] = undefined;
// Implement DeleteResponseAllOf interface:
/**
 * @member {module:model/DeleteResponseAllOfData} data
 */
DeleteResponseAllOf.prototype['data'] = undefined;




export default DeleteResponse;

