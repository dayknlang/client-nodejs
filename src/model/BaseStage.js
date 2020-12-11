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
 * The BaseStage model module.
 * @module model/BaseStage
 * @version 1.0.0
 */
class BaseStage {
    /**
     * Constructs a new <code>BaseStage</code>.
     * @alias module:model/BaseStage
     */
    constructor() { 
        
        BaseStage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BaseStage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseStage} obj Optional instance to populate.
     * @return {module:model/BaseStage} The populated <code>BaseStage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseStage();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('order_nr')) {
                obj['order_nr'] = ApiClient.convertToType(data['order_nr'], 'Number');

                delete data['order_nr'];
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('active_flag')) {
                obj['active_flag'] = ApiClient.convertToType(data['active_flag'], 'Boolean');

                delete data['active_flag'];
            }
            if (data.hasOwnProperty('deal_probability')) {
                obj['deal_probability'] = ApiClient.convertToType(data['deal_probability'], 'Number');

                delete data['deal_probability'];
            }
            if (data.hasOwnProperty('pipeline_id')) {
                obj['pipeline_id'] = ApiClient.convertToType(data['pipeline_id'], 'Number');

                delete data['pipeline_id'];
            }
            if (data.hasOwnProperty('rotten_flag')) {
                obj['rotten_flag'] = ApiClient.convertToType(data['rotten_flag'], 'Number');

                delete data['rotten_flag'];
            }
            if (data.hasOwnProperty('rotten_days')) {
                obj['rotten_days'] = ApiClient.convertToType(data['rotten_days'], 'Number');

                delete data['rotten_days'];
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
 * The ID of the Stage
 * @member {Number} id
 */
BaseStage.prototype['id'] = undefined;

/**
 * Defines the order of the Stage
 * @member {Number} order_nr
 */
BaseStage.prototype['order_nr'] = undefined;

/**
 * The name of the Stage
 * @member {String} name
 */
BaseStage.prototype['name'] = undefined;

/**
 * If the Stage is active or deleted
 * @member {Boolean} active_flag
 */
BaseStage.prototype['active_flag'] = undefined;

/**
 * The Deal success probability percentage. Used/shown when the Deal weighted values are used.
 * @member {Number} deal_probability
 */
BaseStage.prototype['deal_probability'] = undefined;

/**
 * The ID of the Pipeline to add the Stage to
 * @member {Number} pipeline_id
 */
BaseStage.prototype['pipeline_id'] = undefined;

/**
 * Whether Deals in this Stage can become rotten
 * @member {module:model/BaseStage.RottenFlagEnum} rotten_flag
 */
BaseStage.prototype['rotten_flag'] = undefined;

/**
 * The number of days the Deals are not updated in this Stage would become rotten. Applies only if the rotten_flag is set.
 * @member {Number} rotten_days
 */
BaseStage.prototype['rotten_days'] = undefined;

/**
 * The Stage creation time. Format: YYYY-MM-DD HH:MM:SS.
 * @member {String} add_time
 */
BaseStage.prototype['add_time'] = undefined;

/**
 * The Stage update time. Format: YYYY-MM-DD HH:MM:SS.
 * @member {String} update_time
 */
BaseStage.prototype['update_time'] = undefined;





/**
 * Allowed values for the <code>rotten_flag</code> property.
 * @enum {Number}
 * @readonly
 */
BaseStage['RottenFlagEnum'] = {

    /**
     * value: 0
     * @const
     */
    "0": 0,

    /**
     * value: 1
     * @const
     */
    "1": 1
};



export default BaseStage;

