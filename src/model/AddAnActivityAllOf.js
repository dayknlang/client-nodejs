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
 * The AddAnActivityAllOf model module.
 * @module model/AddAnActivityAllOf
 * @version 1.0.0
 */
class AddAnActivityAllOf {
    /**
     * Constructs a new <code>AddAnActivityAllOf</code>.
     * @alias module:model/AddAnActivityAllOf
     */
    constructor() { 
        
        AddAnActivityAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddAnActivityAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddAnActivityAllOf} obj Optional instance to populate.
     * @return {module:model/AddAnActivityAllOf} The populated <code>AddAnActivityAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddAnActivityAllOf();

            if (data.hasOwnProperty('due_date')) {
                obj['due_date'] = ApiClient.convertToType(data['due_date'], 'Date');
            }
            if (data.hasOwnProperty('due_time')) {
                obj['due_time'] = ApiClient.convertToType(data['due_time'], 'String');
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'String');
            }
            if (data.hasOwnProperty('deal_id')) {
                obj['deal_id'] = ApiClient.convertToType(data['deal_id'], 'Number');
            }
            if (data.hasOwnProperty('person_id')) {
                obj['person_id'] = ApiClient.convertToType(data['person_id'], 'Number');
            }
            if (data.hasOwnProperty('org_id')) {
                obj['org_id'] = ApiClient.convertToType(data['org_id'], 'Number');
            }
            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], 'String');
            }
            if (data.hasOwnProperty('public_description')) {
                obj['public_description'] = ApiClient.convertToType(data['public_description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Due date of the Activity. Format: YYYY-MM-DD
 * @member {Date} due_date
 */
AddAnActivityAllOf.prototype['due_date'] = undefined;

/**
 * Due time of the Activity in UTC. Format: HH:MM
 * @member {String} due_time
 */
AddAnActivityAllOf.prototype['due_time'] = undefined;

/**
 * Duration of the Activity. Format: HH:MM
 * @member {String} duration
 */
AddAnActivityAllOf.prototype['duration'] = undefined;

/**
 * The ID of the Deal this Activity is associated with
 * @member {Number} deal_id
 */
AddAnActivityAllOf.prototype['deal_id'] = undefined;

/**
 * The ID of the Person this Activity is associated with
 * @member {Number} person_id
 */
AddAnActivityAllOf.prototype['person_id'] = undefined;

/**
 * The ID of the Organization this Activity is associated with
 * @member {Number} org_id
 */
AddAnActivityAllOf.prototype['org_id'] = undefined;

/**
 * Note of the Activity (HTML format)
 * @member {String} note
 */
AddAnActivityAllOf.prototype['note'] = undefined;

/**
 * The address of the Activity. Pipedrive will automatically check if the location matches a geo-location on Google maps.
 * @member {String} location
 */
AddAnActivityAllOf.prototype['location'] = undefined;

/**
 * Additional details about the Activity that is synced to your external calendar. Unlike the note added to the Activity, the description is publicly visible to any guests added to the Activity.
 * @member {String} public_description
 */
AddAnActivityAllOf.prototype['public_description'] = undefined;






export default AddAnActivityAllOf;

