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
import ActivityObjectFragment from './ActivityObjectFragment';
import ActivityPutObjectAllOf from './ActivityPutObjectAllOf';
import NumberBoolean from './NumberBoolean';

/**
 * The ActivityPutObject model module.
 * @module model/ActivityPutObject
 * @version 1.0.0
 */
class ActivityPutObject {
    /**
     * Constructs a new <code>ActivityPutObject</code>.
     * @alias module:model/ActivityPutObject
     * @implements module:model/ActivityObjectFragment
     * @implements module:model/ActivityPutObjectAllOf
     */
    constructor() { 
        ActivityObjectFragment.initialize(this);ActivityPutObjectAllOf.initialize(this);
        ActivityPutObject.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActivityPutObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActivityPutObject} obj Optional instance to populate.
     * @return {module:model/ActivityPutObject} The populated <code>ActivityPutObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActivityPutObject();
            ActivityObjectFragment.constructFromObject(data, obj);
            ActivityPutObjectAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('due_date')) {
                obj['due_date'] = ApiClient.convertToType(data['due_date'], 'Date');

                delete data['due_date'];
            }
            if (data.hasOwnProperty('due_time')) {
                obj['due_time'] = ApiClient.convertToType(data['due_time'], 'String');

                delete data['due_time'];
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'String');

                delete data['duration'];
            }
            if (data.hasOwnProperty('deal_id')) {
                obj['deal_id'] = ApiClient.convertToType(data['deal_id'], 'Number');

                delete data['deal_id'];
            }
            if (data.hasOwnProperty('person_id')) {
                obj['person_id'] = ApiClient.convertToType(data['person_id'], 'Number');

                delete data['person_id'];
            }
            if (data.hasOwnProperty('org_id')) {
                obj['org_id'] = ApiClient.convertToType(data['org_id'], 'Number');

                delete data['org_id'];
            }
            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');

                delete data['note'];
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], 'String');

                delete data['location'];
            }
            if (data.hasOwnProperty('public_description')) {
                obj['public_description'] = ApiClient.convertToType(data['public_description'], 'String');

                delete data['public_description'];
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');

                delete data['subject'];
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');

                delete data['type'];
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');

                delete data['user_id'];
            }
            if (data.hasOwnProperty('participants')) {
                obj['participants'] = ApiClient.convertToType(data['participants'], [Object]);

                delete data['participants'];
            }
            if (data.hasOwnProperty('busy_flag')) {
                obj['busy_flag'] = ApiClient.convertToType(data['busy_flag'], 'Boolean');

                delete data['busy_flag'];
            }
            if (data.hasOwnProperty('attendees')) {
                obj['attendees'] = ApiClient.convertToType(data['attendees'], [Object]);

                delete data['attendees'];
            }
            if (data.hasOwnProperty('done')) {
                obj['done'] = ApiClient.convertToType(data['done'], NumberBoolean);

                delete data['done'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * Due date of the Activity. Format: YYYY-MM-DD
 * @member {Date} due_date
 */
ActivityPutObject.prototype['due_date'] = undefined;

/**
 * Due time of the Activity in UTC. Format: HH:MM
 * @member {String} due_time
 */
ActivityPutObject.prototype['due_time'] = undefined;

/**
 * Duration of the Activity. Format: HH:MM
 * @member {String} duration
 */
ActivityPutObject.prototype['duration'] = undefined;

/**
 * The ID of the Deal this Activity is associated with
 * @member {Number} deal_id
 */
ActivityPutObject.prototype['deal_id'] = undefined;

/**
 * The ID of the Person this Activity is associated with
 * @member {Number} person_id
 */
ActivityPutObject.prototype['person_id'] = undefined;

/**
 * The ID of the Organization this Activity is associated with
 * @member {Number} org_id
 */
ActivityPutObject.prototype['org_id'] = undefined;

/**
 * Note of the Activity (HTML format)
 * @member {String} note
 */
ActivityPutObject.prototype['note'] = undefined;

/**
 * The address of the Activity. Pipedrive will automatically check if the location matches a geo-location on Google maps.
 * @member {String} location
 */
ActivityPutObject.prototype['location'] = undefined;

/**
 * Additional details about the Activity that is synced to your external calendar. Unlike the note added to the Activity, the description is publicly visible to any guests added to the Activity.
 * @member {String} public_description
 */
ActivityPutObject.prototype['public_description'] = undefined;

/**
 * Subject of the Activity
 * @member {String} subject
 */
ActivityPutObject.prototype['subject'] = undefined;

/**
 * Type of the Activity. This is in correlation with the key_string parameter of ActivityTypes.
 * @member {String} type
 */
ActivityPutObject.prototype['type'] = undefined;

/**
 * The ID of the User whom the Activity is assigned to
 * @member {Number} user_id
 */
ActivityPutObject.prototype['user_id'] = undefined;

/**
 * List of multiple Persons (participants) this Activity is associated with. It requires a structure as follows: [{\"person_id\":1,\"primary_flag\":true}]
 * @member {Array.<Object>} participants
 */
ActivityPutObject.prototype['participants'] = undefined;

/**
 * Set the Activity as 'Busy' or 'Free'. If the flag is set to true, your customers will not be able to book that time slot through any Scheduler links. The flag can also be unset by never setting it or overriding it with null. When the value of the flag is unset (null), the flag defaults to 'Busy' if it has a time set, and 'Free' if it is an all-day event without specified time.
 * @member {module:model/ActivityPutObject.BusyFlagEnum} busy_flag
 */
ActivityPutObject.prototype['busy_flag'] = undefined;

/**
 * Attendees of the Activity. This can be either your existing Pipedrive contacts or an external email address. It requires a structure as follows: [{\"email_address\":\"mail@example.org\"}] or [{\"person_id\":1, \"email_address\":\"mail@example.org\"}]
 * @member {Array.<Object>} attendees
 */
ActivityPutObject.prototype['attendees'] = undefined;

/**
 * Whether the Activity is done or not. 0 = Not done, 1 = Done
 * @member {module:model/NumberBoolean} done
 */
ActivityPutObject.prototype['done'] = undefined;


// Implement ActivityObjectFragment interface:
/**
 * Due date of the Activity. Format: YYYY-MM-DD
 * @member {Date} due_date
 */
ActivityObjectFragment.prototype['due_date'] = undefined;
/**
 * Due time of the Activity in UTC. Format: HH:MM
 * @member {String} due_time
 */
ActivityObjectFragment.prototype['due_time'] = undefined;
/**
 * Duration of the Activity. Format: HH:MM
 * @member {String} duration
 */
ActivityObjectFragment.prototype['duration'] = undefined;
/**
 * The ID of the Deal this Activity is associated with
 * @member {Number} deal_id
 */
ActivityObjectFragment.prototype['deal_id'] = undefined;
/**
 * The ID of the Person this Activity is associated with
 * @member {Number} person_id
 */
ActivityObjectFragment.prototype['person_id'] = undefined;
/**
 * The ID of the Organization this Activity is associated with
 * @member {Number} org_id
 */
ActivityObjectFragment.prototype['org_id'] = undefined;
/**
 * Note of the Activity (HTML format)
 * @member {String} note
 */
ActivityObjectFragment.prototype['note'] = undefined;
/**
 * The address of the Activity. Pipedrive will automatically check if the location matches a geo-location on Google maps.
 * @member {String} location
 */
ActivityObjectFragment.prototype['location'] = undefined;
/**
 * Additional details about the Activity that is synced to your external calendar. Unlike the note added to the Activity, the description is publicly visible to any guests added to the Activity.
 * @member {String} public_description
 */
ActivityObjectFragment.prototype['public_description'] = undefined;
// Implement ActivityPutObjectAllOf interface:
/**
 * Subject of the Activity
 * @member {String} subject
 */
ActivityPutObjectAllOf.prototype['subject'] = undefined;
/**
 * Type of the Activity. This is in correlation with the key_string parameter of ActivityTypes.
 * @member {String} type
 */
ActivityPutObjectAllOf.prototype['type'] = undefined;
/**
 * The ID of the User whom the Activity is assigned to
 * @member {Number} user_id
 */
ActivityPutObjectAllOf.prototype['user_id'] = undefined;
/**
 * List of multiple Persons (participants) this Activity is associated with. It requires a structure as follows: [{\"person_id\":1,\"primary_flag\":true}]
 * @member {Array.<Object>} participants
 */
ActivityPutObjectAllOf.prototype['participants'] = undefined;
/**
 * Set the Activity as 'Busy' or 'Free'. If the flag is set to true, your customers will not be able to book that time slot through any Scheduler links. The flag can also be unset by never setting it or overriding it with null. When the value of the flag is unset (null), the flag defaults to 'Busy' if it has a time set, and 'Free' if it is an all-day event without specified time.
 * @member {module:model/ActivityPutObjectAllOf.BusyFlagEnum} busy_flag
 */
ActivityPutObjectAllOf.prototype['busy_flag'] = undefined;
/**
 * Attendees of the Activity. This can be either your existing Pipedrive contacts or an external email address. It requires a structure as follows: [{\"email_address\":\"mail@example.org\"}] or [{\"person_id\":1, \"email_address\":\"mail@example.org\"}]
 * @member {Array.<Object>} attendees
 */
ActivityPutObjectAllOf.prototype['attendees'] = undefined;
/**
 * Whether the Activity is done or not. 0 = Not done, 1 = Done
 * @member {module:model/NumberBoolean} done
 */
ActivityPutObjectAllOf.prototype['done'] = undefined;



/**
 * Allowed values for the <code>busy_flag</code> property.
 * @enum {Boolean}
 * @readonly
 */
ActivityPutObject['BusyFlagEnum'] = {

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



export default ActivityPutObject;

