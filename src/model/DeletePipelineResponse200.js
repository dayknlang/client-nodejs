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
import DeletePipelineResponse200Data from './DeletePipelineResponse200Data';

/**
 * The DeletePipelineResponse200 model module.
 * @module model/DeletePipelineResponse200
 * @version 1.0.0
 */
class DeletePipelineResponse200 {
    /**
     * Constructs a new <code>DeletePipelineResponse200</code>.
     * @alias module:model/DeletePipelineResponse200
     */
    constructor() { 
        
        DeletePipelineResponse200.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeletePipelineResponse200</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeletePipelineResponse200} obj Optional instance to populate.
     * @return {module:model/DeletePipelineResponse200} The populated <code>DeletePipelineResponse200</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeletePipelineResponse200();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = DeletePipelineResponse200Data.constructFromObject(data['data']);

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
 * If the request was successful or not
 * @member {Boolean} success
 */
DeletePipelineResponse200.prototype['success'] = undefined;

/**
 * @member {module:model/DeletePipelineResponse200Data} data
 */
DeletePipelineResponse200.prototype['data'] = undefined;






export default DeletePipelineResponse200;

