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
import BaseWebhook from './BaseWebhook';

/**
 * The WebhookAllOf model module.
 * @module model/WebhookAllOf
 * @version 1.0.0
 */
class WebhookAllOf {
    /**
     * Constructs a new <code>WebhookAllOf</code>.
     * @alias module:model/WebhookAllOf
     */
    constructor() { 
        
        WebhookAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookAllOf} obj Optional instance to populate.
     * @return {module:model/WebhookAllOf} The populated <code>WebhookAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = BaseWebhook.constructFromObject(data['data']);

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
 * @member {module:model/BaseWebhook} data
 */
WebhookAllOf.prototype['data'] = undefined;






export default WebhookAllOf;

