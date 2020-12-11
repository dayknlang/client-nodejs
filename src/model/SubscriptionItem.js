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
 * The SubscriptionItem model module.
 * @module model/SubscriptionItem
 * @version 1.0.0
 */
class SubscriptionItem {
    /**
     * Constructs a new <code>SubscriptionItem</code>.
     * @alias module:model/SubscriptionItem
     */
    constructor() { 
        
        SubscriptionItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubscriptionItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubscriptionItem} obj Optional instance to populate.
     * @return {module:model/SubscriptionItem} The populated <code>SubscriptionItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubscriptionItem();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');

                delete data['user_id'];
            }
            if (data.hasOwnProperty('deal_id')) {
                obj['deal_id'] = ApiClient.convertToType(data['deal_id'], 'Number');

                delete data['deal_id'];
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');

                delete data['description'];
            }
            if (data.hasOwnProperty('is_active')) {
                obj['is_active'] = ApiClient.convertToType(data['is_active'], 'Boolean');

                delete data['is_active'];
            }
            if (data.hasOwnProperty('cycles_count')) {
                obj['cycles_count'] = ApiClient.convertToType(data['cycles_count'], 'Number');

                delete data['cycles_count'];
            }
            if (data.hasOwnProperty('cycle_amount')) {
                obj['cycle_amount'] = ApiClient.convertToType(data['cycle_amount'], 'Number');

                delete data['cycle_amount'];
            }
            if (data.hasOwnProperty('infinite')) {
                obj['infinite'] = ApiClient.convertToType(data['infinite'], 'Boolean');

                delete data['infinite'];
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');

                delete data['currency'];
            }
            if (data.hasOwnProperty('cadence_type')) {
                obj['cadence_type'] = ApiClient.convertToType(data['cadence_type'], 'String');

                delete data['cadence_type'];
            }
            if (data.hasOwnProperty('start_date')) {
                obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Date');

                delete data['start_date'];
            }
            if (data.hasOwnProperty('end_date')) {
                obj['end_date'] = ApiClient.convertToType(data['end_date'], 'Date');

                delete data['end_date'];
            }
            if (data.hasOwnProperty('lifetime_value')) {
                obj['lifetime_value'] = ApiClient.convertToType(data['lifetime_value'], 'Number');

                delete data['lifetime_value'];
            }
            if (data.hasOwnProperty('final_status')) {
                obj['final_status'] = ApiClient.convertToType(data['final_status'], 'String');

                delete data['final_status'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'String');

                delete data['add_time'];
            }
            if (data.hasOwnProperty('update_time')) {
                obj['update_time'] = ApiClient.convertToType(data['update_time'], 'String');

                delete data['update_time'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * The ID of the Subscription
 * @member {Number} id
 */
SubscriptionItem.prototype['id'] = undefined;

/**
 * The ID of the User who created Subscription
 * @member {Number} user_id
 */
SubscriptionItem.prototype['user_id'] = undefined;

/**
 * The ID of the Deal this Subscription associated with
 * @member {Number} deal_id
 */
SubscriptionItem.prototype['deal_id'] = undefined;

/**
 * Description of the recurring Subscription
 * @member {String} description
 */
SubscriptionItem.prototype['description'] = undefined;

/**
 * The Subscription status
 * @member {Boolean} is_active
 */
SubscriptionItem.prototype['is_active'] = undefined;

/**
 * Shows how many payments a Recurring Subscription has
 * @member {Number} cycles_count
 */
SubscriptionItem.prototype['cycles_count'] = undefined;

/**
 * Amount of each payment
 * @member {Number} cycle_amount
 */
SubscriptionItem.prototype['cycle_amount'] = undefined;

/**
 * Indicates that the Recurring Subscription will last until it's manually canceled or deleted
 * @member {Boolean} infinite
 */
SubscriptionItem.prototype['infinite'] = undefined;

/**
 * The currency of the Subscription
 * @member {String} currency
 */
SubscriptionItem.prototype['currency'] = undefined;

/**
 * Interval between payments
 * @member {String} cadence_type
 */
SubscriptionItem.prototype['cadence_type'] = undefined;

/**
 * The start date of the Recurring Subscription
 * @member {Date} start_date
 */
SubscriptionItem.prototype['start_date'] = undefined;

/**
 * The end date of the Subscription
 * @member {Date} end_date
 */
SubscriptionItem.prototype['end_date'] = undefined;

/**
 * The total value of all payments
 * @member {Number} lifetime_value
 */
SubscriptionItem.prototype['lifetime_value'] = undefined;

/**
 * The final status of the Subscription
 * @member {String} final_status
 */
SubscriptionItem.prototype['final_status'] = undefined;

/**
 * The creation time of the Subscription
 * @member {String} add_time
 */
SubscriptionItem.prototype['add_time'] = undefined;

/**
 * The update time of the Subscription
 * @member {String} update_time
 */
SubscriptionItem.prototype['update_time'] = undefined;






export default SubscriptionItem;

