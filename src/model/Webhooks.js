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
import BaseResponseWithStatus from './BaseResponseWithStatus';
import BaseWebhook from './BaseWebhook';
import WebhooksAllOf from './WebhooksAllOf';

/**
 * The Webhooks model module.
 * @module model/Webhooks
 * @version 1.0.0
 */
class Webhooks {
    /**
     * Constructs a new <code>Webhooks</code>.
     * @alias module:model/Webhooks
     * @implements module:model/BaseResponseWithStatus
     * @implements module:model/WebhooksAllOf
     */
    constructor() { 
        BaseResponseWithStatus.initialize(this);WebhooksAllOf.initialize(this);
        Webhooks.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Webhooks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Webhooks} obj Optional instance to populate.
     * @return {module:model/Webhooks} The populated <code>Webhooks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Webhooks();
            BaseResponseWithStatus.constructFromObject(data, obj);
            WebhooksAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');

                delete data['status'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [BaseWebhook]);

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
Webhooks.prototype['success'] = undefined;

/**
 * The status of the response
 * @member {String} status
 */
Webhooks.prototype['status'] = undefined;

/**
 * The array of Webhooks
 * @member {Array.<module:model/BaseWebhook>} data
 */
Webhooks.prototype['data'] = undefined;


// Implement BaseResponseWithStatus interface:
/**
 * If the response is successful or not
 * @member {Boolean} success
 */
BaseResponseWithStatus.prototype['success'] = undefined;
/**
 * The status of the response
 * @member {String} status
 */
BaseResponseWithStatus.prototype['status'] = undefined;
// Implement WebhooksAllOf interface:
/**
 * The array of Webhooks
 * @member {Array.<module:model/BaseWebhook>} data
 */
WebhooksAllOf.prototype['data'] = undefined;




export default Webhooks;

