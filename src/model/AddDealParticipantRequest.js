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
 * The AddDealParticipantRequest model module.
 * @module model/AddDealParticipantRequest
 * @version 1.0.0
 */
class AddDealParticipantRequest {
    /**
     * Constructs a new <code>AddDealParticipantRequest</code>.
     * @alias module:model/AddDealParticipantRequest
     * @param personId {Number} ID of the person
     */
    constructor(personId) { 
        
        AddDealParticipantRequest.initialize(this, personId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, personId) { 
        obj['person_id'] = personId;
    }

    /**
     * Constructs a <code>AddDealParticipantRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddDealParticipantRequest} obj Optional instance to populate.
     * @return {module:model/AddDealParticipantRequest} The populated <code>AddDealParticipantRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddDealParticipantRequest();

            if (data.hasOwnProperty('person_id')) {
                obj['person_id'] = ApiClient.convertToType(data['person_id'], 'Number');

                delete data['person_id'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * ID of the person
 * @member {Number} person_id
 */
AddDealParticipantRequest.prototype['person_id'] = undefined;






export default AddDealParticipantRequest;

