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
import PaymentsResponse from '../model/PaymentsResponse';
import SubscriptionInstallmentCreateRequest from '../model/SubscriptionInstallmentCreateRequest';
import SubscriptionInstallmentUpdateRequest from '../model/SubscriptionInstallmentUpdateRequest';
import SubscriptionRecurringCancelRequest from '../model/SubscriptionRecurringCancelRequest';
import SubscriptionRecurringCreateRequest from '../model/SubscriptionRecurringCreateRequest';
import SubscriptionRecurringUpdateRequest from '../model/SubscriptionRecurringUpdateRequest';
import SubscriptionsIdResponse from '../model/SubscriptionsIdResponse';

/**
* Subscriptions service.
* @module api/SubscriptionsApi
* @version 1.0.0
*/
export default class SubscriptionsApi {

    /**
    * Constructs a new SubscriptionsApi. 
    * @alias module:api/SubscriptionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add a recurring subscription
     * Adds a new recurring Subscription.
     * @param {Object} opts Optional parameters
     * @param {module:model/SubscriptionRecurringCreateRequest} opts.subscriptionRecurringCreateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubscriptionsIdResponse} and HTTP response
     */
    addRecurringSubscriptionWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['subscriptionRecurringCreateRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'oauth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SubscriptionsIdResponse;
      return this.apiClient.callApi(
        '/subscriptions/recurring', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add a recurring subscription
     * Adds a new recurring Subscription.
     * @param {Object} opts Optional parameters
     * @param {module:model/SubscriptionRecurringCreateRequest} opts.subscriptionRecurringCreateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubscriptionsIdResponse}
     */
    addRecurringSubscription(opts) {
      return this.addRecurringSubscriptionWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Add an installment subscription
     * Adds a new installment Subscription.
     * @param {Object} opts Optional parameters
     * @param {module:model/SubscriptionInstallmentCreateRequest} opts.subscriptionInstallmentCreateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubscriptionsIdResponse} and HTTP response
     */
    addSubscriptionInstallmentWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['subscriptionInstallmentCreateRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'oauth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SubscriptionsIdResponse;
      return this.apiClient.callApi(
        '/subscriptions/installment', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add an installment subscription
     * Adds a new installment Subscription.
     * @param {Object} opts Optional parameters
     * @param {module:model/SubscriptionInstallmentCreateRequest} opts.subscriptionInstallmentCreateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubscriptionsIdResponse}
     */
    addSubscriptionInstallment(opts) {
      return this.addSubscriptionInstallmentWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Cancel a recurring subscription
     * Cancels a recurring Subscription.
     * @param {Number} id ID of the Subscription
     * @param {Object} opts Optional parameters
     * @param {module:model/SubscriptionRecurringCancelRequest} opts.subscriptionRecurringCancelRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubscriptionsIdResponse} and HTTP response
     */
    cancelRecurringSubscriptionWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['subscriptionRecurringCancelRequest'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling cancelRecurringSubscription");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'oauth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SubscriptionsIdResponse;
      return this.apiClient.callApi(
        '/subscriptions/recurring/{id}/cancel', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Cancel a recurring subscription
     * Cancels a recurring Subscription.
     * @param {Number} id ID of the Subscription
     * @param {Object} opts Optional parameters
     * @param {module:model/SubscriptionRecurringCancelRequest} opts.subscriptionRecurringCancelRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubscriptionsIdResponse}
     */
    cancelRecurringSubscription(id, opts) {
      return this.cancelRecurringSubscriptionWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete a subscription
     * Marks an installment or a recurring Subscription as deleted.
     * @param {Number} id ID of the Subscription
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubscriptionsIdResponse} and HTTP response
     */
    deleteSubscriptionWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteSubscription");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SubscriptionsIdResponse;
      return this.apiClient.callApi(
        '/subscriptions/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a subscription
     * Marks an installment or a recurring Subscription as deleted.
     * @param {Number} id ID of the Subscription
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubscriptionsIdResponse}
     */
    deleteSubscription(id) {
      return this.deleteSubscriptionWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Find subscription by deal
     * Returns details of an installment or a recurring Subscription by Deal ID.
     * @param {Number} dealId ID of the Deal
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubscriptionsIdResponse} and HTTP response
     */
    findSubscriptionByDealWithHttpInfo(dealId) {
      let postBody = null;
      // verify the required parameter 'dealId' is set
      if (dealId === undefined || dealId === null) {
        throw new Error("Missing the required parameter 'dealId' when calling findSubscriptionByDeal");
      }

      let pathParams = {
        'dealId': dealId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SubscriptionsIdResponse;
      return this.apiClient.callApi(
        '/subscriptions/find/{dealId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Find subscription by deal
     * Returns details of an installment or a recurring Subscription by Deal ID.
     * @param {Number} dealId ID of the Deal
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubscriptionsIdResponse}
     */
    findSubscriptionByDeal(dealId) {
      return this.findSubscriptionByDealWithHttpInfo(dealId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get details of a subscription
     * Returns details of an installment or a recurring Subscription.
     * @param {Number} id ID of the Subscription
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubscriptionsIdResponse} and HTTP response
     */
    getSubscriptionWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSubscription");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SubscriptionsIdResponse;
      return this.apiClient.callApi(
        '/subscriptions/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get details of a subscription
     * Returns details of an installment or a recurring Subscription.
     * @param {Number} id ID of the Subscription
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubscriptionsIdResponse}
     */
    getSubscription(id) {
      return this.getSubscriptionWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get all payments of a Subscription
     * Returns all payments of an installment or recurring Subscription.
     * @param {Number} id ID of the Subscription
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentsResponse} and HTTP response
     */
    getSubscriptionPaymentsWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSubscriptionPayments");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PaymentsResponse;
      return this.apiClient.callApi(
        '/subscriptions/{id}/payments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all payments of a Subscription
     * Returns all payments of an installment or recurring Subscription.
     * @param {Number} id ID of the Subscription
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentsResponse}
     */
    getSubscriptionPayments(id) {
      return this.getSubscriptionPaymentsWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update a recurring subscription
     * Updates a recurring Subscription.
     * @param {Number} id ID of the Subscription
     * @param {Object} opts Optional parameters
     * @param {module:model/SubscriptionRecurringUpdateRequest} opts.subscriptionRecurringUpdateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubscriptionsIdResponse} and HTTP response
     */
    updateRecurringSubscriptionWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['subscriptionRecurringUpdateRequest'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateRecurringSubscription");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'oauth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SubscriptionsIdResponse;
      return this.apiClient.callApi(
        '/subscriptions/recurring/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a recurring subscription
     * Updates a recurring Subscription.
     * @param {Number} id ID of the Subscription
     * @param {Object} opts Optional parameters
     * @param {module:model/SubscriptionRecurringUpdateRequest} opts.subscriptionRecurringUpdateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubscriptionsIdResponse}
     */
    updateRecurringSubscription(id, opts) {
      return this.updateRecurringSubscriptionWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update an installment subscription
     * Updates an installment Subscription.
     * @param {Number} id ID of the Subscription
     * @param {Object} opts Optional parameters
     * @param {module:model/SubscriptionInstallmentUpdateRequest} opts.subscriptionInstallmentUpdateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubscriptionsIdResponse} and HTTP response
     */
    updateSubscriptionInstallmentWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['subscriptionInstallmentUpdateRequest'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateSubscriptionInstallment");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'oauth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SubscriptionsIdResponse;
      return this.apiClient.callApi(
        '/subscriptions/installment/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update an installment subscription
     * Updates an installment Subscription.
     * @param {Number} id ID of the Subscription
     * @param {Object} opts Optional parameters
     * @param {module:model/SubscriptionInstallmentUpdateRequest} opts.subscriptionInstallmentUpdateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubscriptionsIdResponse}
     */
    updateSubscriptionInstallment(id, opts) {
      return this.updateSubscriptionInstallmentWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


}
