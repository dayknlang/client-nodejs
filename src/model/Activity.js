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
 * The Activity model module.
 * @module model/Activity
 * @version 1.0.0
 */
class Activity {
    /**
     * Constructs a new <code>Activity</code>.
     * @alias module:model/Activity
     * @param subject {String} Subject of the activity
     * @param type {String} Type of the activity. This is in correlation with the key_string parameter of ActivityTypes.
     */
    constructor(subject, type) { 
        
        Activity.initialize(this, subject, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, subject, type) { 
        obj['subject'] = subject;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>Activity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Activity} obj Optional instance to populate.
     * @return {module:model/Activity} The populated <code>Activity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Activity();

            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
            }
            if (data.hasOwnProperty('done')) {
                obj['done'] = ApiClient.convertToType(data['done'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('due_date')) {
                obj['due_date'] = ApiClient.convertToType(data['due_date'], 'Date');
            }
            if (data.hasOwnProperty('due_time')) {
                obj['due_time'] = ApiClient.convertToType(data['due_time'], 'String');
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
            }
            if (data.hasOwnProperty('deal_id')) {
                obj['deal_id'] = ApiClient.convertToType(data['deal_id'], 'Number');
            }
            if (data.hasOwnProperty('person_id')) {
                obj['person_id'] = ApiClient.convertToType(data['person_id'], 'Number');
            }
            if (data.hasOwnProperty('participants')) {
                obj['participants'] = ApiClient.convertToType(data['participants'], [Object]);
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
            if (data.hasOwnProperty('busy_flag')) {
                obj['busy_flag'] = ApiClient.convertToType(data['busy_flag'], 'Boolean');
            }
            if (data.hasOwnProperty('attendees')) {
                obj['attendees'] = ApiClient.convertToType(data['attendees'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * Subject of the activity
 * @member {String} subject
 */
Activity.prototype['subject'] = undefined;

/**
 * @member {Number} done
 */
Activity.prototype['done'] = undefined;

/**
 * Type of the activity. This is in correlation with the key_string parameter of ActivityTypes.
 * @member {String} type
 */
Activity.prototype['type'] = undefined;

/**
 * Due date of the activity. Format: YYYY-MM-DD
 * @member {Date} due_date
 */
Activity.prototype['due_date'] = undefined;

/**
 * Due time of the activity in UTC. Format: HH:MM
 * @member {String} due_time
 */
Activity.prototype['due_time'] = undefined;

/**
 * Duration of the activity. Format: HH:MM
 * @member {String} duration
 */
Activity.prototype['duration'] = undefined;

/**
 * ID of the user whom the activity will be assigned to. If omitted, the activity will be assigned to the authorized user.
 * @member {Number} user_id
 */
Activity.prototype['user_id'] = undefined;

/**
 * ID of the deal this activity will be associated with
 * @member {Number} deal_id
 */
Activity.prototype['deal_id'] = undefined;

/**
 * ID of the person this activity will be associated with
 * @member {Number} person_id
 */
Activity.prototype['person_id'] = undefined;

/**
 * List of multiple persons (participants) this activity will be associated with. If omitted, single participant from person_id field is used. It requires a structure as follows: [{\"person_id\":1,\"primary_flag\":true}]
 * @member {Array.<Object>} participants
 */
Activity.prototype['participants'] = undefined;

/**
 * ID of the organization this activity will be associated with
 * @member {Number} org_id
 */
Activity.prototype['org_id'] = undefined;

/**
 * Note of the activity (HTML format)
 * @member {String} note
 */
Activity.prototype['note'] = undefined;

/**
 * The address of the activity. Pipedrive will automatically check if the location matches a geo-location on Google maps.
 * @member {String} location
 */
Activity.prototype['location'] = undefined;

/**
 * Additional details about the activity that will be synced to your external calendar. Unlike the note added to the activity, the description will be publicly visible to any guests added to the activity.
 * @member {String} public_description
 */
Activity.prototype['public_description'] = undefined;

/**
 * Set the activity as 'Busy' or 'Free'. If the flag is set to true, your customers will not be able to book that time slot through any Scheduler links. The flag can also be unset by never setting it or overriding it with null. When the value of the flag is unset (null), the flag defaults to 'Busy' if it has a time set, and 'Free' if it is an all-day event without specified time.
 * @member {module:model/Activity.BusyFlagEnum} busy_flag
 */
Activity.prototype['busy_flag'] = undefined;

/**
 * Attendees of the activity. This can be either your existing Pipedrive contacts or an external email address. It requires a structure as follows: [{\"email_address\":\"mail@example.org\"}] or [{\"person_id\":1, \"email_address\":\"mail@example.org\"}]
 * @member {Array.<Object>} attendees
 */
Activity.prototype['attendees'] = undefined;





/**
 * Allowed values for the <code>busy_flag</code> property.
 * @enum {Boolean}
 * @readonly
 */
Activity['BusyFlagEnum'] = {

    /**
     * value: "true"
     * @const
     */
    "true": "true",

    /**
     * value: "false"
     * @const
     */
    "false": "false"
};



export default Activity;

