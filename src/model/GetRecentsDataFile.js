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
import FileItem from './FileItem';

/**
 * The GetRecentsDataFile model module.
 * @module model/GetRecentsDataFile
 * @version 1.0.0
 */
class GetRecentsDataFile {
    /**
     * Constructs a new <code>GetRecentsDataFile</code>.
     * @alias module:model/GetRecentsDataFile
     */
    constructor() { 
        
        GetRecentsDataFile.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecentsDataFile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecentsDataFile} obj Optional instance to populate.
     * @return {module:model/GetRecentsDataFile} The populated <code>GetRecentsDataFile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecentsDataFile();

            if (data.hasOwnProperty('item')) {
                obj['item'] = ApiClient.convertToType(data['item'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = FileItem.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetRecentsDataFile.ItemEnum} item
 */
GetRecentsDataFile.prototype['item'] = undefined;

/**
 * @member {Number} id
 */
GetRecentsDataFile.prototype['id'] = undefined;

/**
 * @member {module:model/FileItem} data
 */
GetRecentsDataFile.prototype['data'] = undefined;





/**
 * Allowed values for the <code>item</code> property.
 * @enum {String}
 * @readonly
 */
GetRecentsDataFile['ItemEnum'] = {

    /**
     * value: "file"
     * @const
     */
    "file": "file"
};



export default GetRecentsDataFile;

