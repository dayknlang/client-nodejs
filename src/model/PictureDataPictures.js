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
 * The PictureDataPictures model module.
 * @module model/PictureDataPictures
 * @version 1.0.0
 */
class PictureDataPictures {
    /**
     * Constructs a new <code>PictureDataPictures</code>.
     * @alias module:model/PictureDataPictures
     */
    constructor() { 
        
        PictureDataPictures.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PictureDataPictures</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PictureDataPictures} obj Optional instance to populate.
     * @return {module:model/PictureDataPictures} The populated <code>PictureDataPictures</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PictureDataPictures();

            if (data.hasOwnProperty('128')) {
                obj['128'] = ApiClient.convertToType(data['128'], 'String');

                delete data['128'];
            }
            if (data.hasOwnProperty('512')) {
                obj['512'] = ApiClient.convertToType(data['512'], 'String');

                delete data['512'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * The URL of the 128*128 picture
 * @member {String} 128
 */
PictureDataPictures.prototype['128'] = undefined;

/**
 * The URL of the 512*512 picture
 * @member {String} 512
 */
PictureDataPictures.prototype['512'] = undefined;






export default PictureDataPictures;

