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
 * The AddACallLog model module.
 * @module model/AddACallLog
 * @version 1.0.0
 */
class AddACallLog {
    /**
     * Constructs a new <code>AddACallLog</code>.
     * @alias module:model/AddACallLog
     * @param outcome {module:model/AddACallLog.OutcomeEnum} Describes the outcome of the call
     * @param toPhoneNumber {String} The number called
     * @param startTime {Date} The date and time of the start of the call in UTC. Format: YYYY-MM-DD HH:MM:SS.
     * @param endTime {Date} The date and time of the end of the call in UTC. Format: YYYY-MM-DD HH:MM:SS.
     */
    constructor(outcome, toPhoneNumber, startTime, endTime) { 
        
        AddACallLog.initialize(this, outcome, toPhoneNumber, startTime, endTime);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, outcome, toPhoneNumber, startTime, endTime) { 
        obj['outcome'] = outcome;
        obj['to_phone_number'] = toPhoneNumber;
        obj['start_time'] = startTime;
        obj['end_time'] = endTime;
    }

    /**
     * Constructs a <code>AddACallLog</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddACallLog} obj Optional instance to populate.
     * @return {module:model/AddACallLog} The populated <code>AddACallLog</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddACallLog();

            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
            }
            if (data.hasOwnProperty('activity_id')) {
                obj['activity_id'] = ApiClient.convertToType(data['activity_id'], 'Number');
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'String');
            }
            if (data.hasOwnProperty('outcome')) {
                obj['outcome'] = ApiClient.convertToType(data['outcome'], 'String');
            }
            if (data.hasOwnProperty('from_phone_number')) {
                obj['from_phone_number'] = ApiClient.convertToType(data['from_phone_number'], 'String');
            }
            if (data.hasOwnProperty('to_phone_number')) {
                obj['to_phone_number'] = ApiClient.convertToType(data['to_phone_number'], 'String');
            }
            if (data.hasOwnProperty('start_time')) {
                obj['start_time'] = ApiClient.convertToType(data['start_time'], 'Date');
            }
            if (data.hasOwnProperty('end_time')) {
                obj['end_time'] = ApiClient.convertToType(data['end_time'], 'Date');
            }
            if (data.hasOwnProperty('person_id')) {
                obj['person_id'] = ApiClient.convertToType(data['person_id'], 'Number');
            }
            if (data.hasOwnProperty('org_id')) {
                obj['org_id'] = ApiClient.convertToType(data['org_id'], 'Number');
            }
            if (data.hasOwnProperty('deal_id')) {
                obj['deal_id'] = ApiClient.convertToType(data['deal_id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The ID of the owner of the call log
 * @member {Number} user_id
 */
AddACallLog.prototype['user_id'] = undefined;

/**
 * If specified, this activity will be converted into a call log, with the information provided. When this field is used, you don't need to specify deal_id, person_id or org_id, as they will be ignored in favor of the values already available in the activity.
 * @member {Number} activity_id
 */
AddACallLog.prototype['activity_id'] = undefined;

/**
 * Name of the activity this call is attached to
 * @member {String} subject
 */
AddACallLog.prototype['subject'] = undefined;

/**
 * Call duration in seconds
 * @member {String} duration
 */
AddACallLog.prototype['duration'] = undefined;

/**
 * Describes the outcome of the call
 * @member {module:model/AddACallLog.OutcomeEnum} outcome
 */
AddACallLog.prototype['outcome'] = undefined;

/**
 * The number that made the call
 * @member {String} from_phone_number
 */
AddACallLog.prototype['from_phone_number'] = undefined;

/**
 * The number called
 * @member {String} to_phone_number
 */
AddACallLog.prototype['to_phone_number'] = undefined;

/**
 * The date and time of the start of the call in UTC. Format: YYYY-MM-DD HH:MM:SS.
 * @member {Date} start_time
 */
AddACallLog.prototype['start_time'] = undefined;

/**
 * The date and time of the end of the call in UTC. Format: YYYY-MM-DD HH:MM:SS.
 * @member {Date} end_time
 */
AddACallLog.prototype['end_time'] = undefined;

/**
 * The ID of the Person this call is associated with
 * @member {Number} person_id
 */
AddACallLog.prototype['person_id'] = undefined;

/**
 * The ID of the Organization this call is associated with
 * @member {Number} org_id
 */
AddACallLog.prototype['org_id'] = undefined;

/**
 * The ID of the Deal this call is associated with
 * @member {Number} deal_id
 */
AddACallLog.prototype['deal_id'] = undefined;





/**
 * Allowed values for the <code>outcome</code> property.
 * @enum {String}
 * @readonly
 */
AddACallLog['OutcomeEnum'] = {

    /**
     * value: "connected"
     * @const
     */
    "connected": "connected",

    /**
     * value: "no_answer"
     * @const
     */
    "no_answer": "no_answer",

    /**
     * value: "left_message"
     * @const
     */
    "left_message": "left_message",

    /**
     * value: "left_voicemail"
     * @const
     */
    "left_voicemail": "left_voicemail",

    /**
     * value: "wrong_number"
     * @const
     */
    "wrong_number": "wrong_number",

    /**
     * value: "busy"
     * @const
     */
    "busy": "busy"
};



export default AddACallLog;

