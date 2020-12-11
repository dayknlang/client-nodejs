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


import ApiClient from "../ApiClient";
import Currencies from '../model/Currencies';

/**
* Currencies service.
* @module api/CurrenciesApi
* @version 1.0.0
*/
export default class CurrenciesApi {

    /**
    * Constructs a new CurrenciesApi. 
    * @alias module:api/CurrenciesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get all supported currencies
     * Returns all supported currencies in given account which should be used when saving monetary values with other objects. The 'code' parameter of the returning objects is the currency code according to ISO 4217 for all non-custom currencies.
     * @param {Object} opts Optional parameters
     * @param {String} opts.term Optional search term that is searched for from currency's name and/or code.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Currencies} and HTTP response
     */
    getCurrenciesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'term': opts['term']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Currencies;
      return this.apiClient.callApi(
        '/currencies', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all supported currencies
     * Returns all supported currencies in given account which should be used when saving monetary values with other objects. The 'code' parameter of the returning objects is the currency code according to ISO 4217 for all non-custom currencies.
     * @param {Object} opts Optional parameters
     * @param {String} opts.term Optional search term that is searched for from currency's name and/or code.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Currencies}
     */
    getCurrencies(opts) {
      return this.getCurrenciesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


}
