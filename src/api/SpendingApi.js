/*
 * Billingo API v3
 * This is a Billingo API v3 documentation. Our API based on REST software architectural style. API has resource-oriented URLs, accepts JSON-encoded request bodies and returns JSON-encoded responses. To use this API you have to generate a new API key on our [site](https://app.billingo.hu/api-key). After that, you can test your API key on this page.
 *
 * OpenAPI spec version: 3.0.14
 * Contact: hello@billingo.hu
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.35
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {Category} from '../model/Category';
import {ClientErrorResponse} from '../model/ClientErrorResponse';
import {Currency} from '../model/Currency';
import {DateType} from '../model/DateType';
import {PaymentMethod} from '../model/PaymentMethod';
import {PaymentStatusSpending} from '../model/PaymentStatusSpending';
import {ServerErrorResponse} from '../model/ServerErrorResponse';
import {Source} from '../model/Source';
import {Spending} from '../model/Spending';
import {SpendingList} from '../model/SpendingList';
import {SpendingSave} from '../model/SpendingSave';
import {SubscriptionErrorResponse} from '../model/SubscriptionErrorResponse';
import {TooManyRequestsResponse} from '../model/TooManyRequestsResponse';
import {ValidationErrorResponse} from '../model/ValidationErrorResponse';

/**
* Spending service.
* @module api/SpendingApi
* @version 3.0.14
*/
export class SpendingApi {

    /**
    * Constructs a new SpendingApi. 
    * @alias module:api/SpendingApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the spendingDelete operation.
     * @callback moduleapi/SpendingApi~spendingDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a spending.
     * Deletes the spending identified by the ID given in path.
     * @param {Number} id 
     * @param {module:api/SpendingApi~spendingDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    spendingDelete(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling spendingDelete");
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

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/spendings/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the spendingList operation.
     * @callback moduleapi/SpendingApi~spendingListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SpendingList{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists all spending
     * Returns a list of your spending items, ordered by the due date.
     * @param {Object} opts Optional parameters
     * @param {String} opts.q 
     * @param {Number} opts.page  (default to <.>)
     * @param {Number} opts.perPage  (default to <.>)
     * @param {module:model/DateType} opts.spendingDate 
     * @param {String} opts.startDate 
     * @param {String} opts.endDate 
     * @param {module:model/PaymentStatusSpending} opts.paymentStatus 
     * @param {module:model/Source} opts.spendingType 
     * @param {module:model/Category} opts.categories 
     * @param {module:model/Currency} opts.currencies 
     * @param {module:model/PaymentMethod} opts.paymentMethods 
     * @param {module:api/SpendingApi~spendingListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    spendingList(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'q': opts['q'],'page': opts['page'],'per_page': opts['perPage'],'spending_date': opts['spendingDate'],'start_date': opts['startDate'],'end_date': opts['endDate'],'payment_status': opts['paymentStatus'],'spending_type': opts['spendingType'],'categories': opts['categories'],'currencies': opts['currencies'],'payment_methods': opts['paymentMethods']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SpendingList;

      return this.apiClient.callApi(
        '/spendings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the spendingSave operation.
     * @callback moduleapi/SpendingApi~spendingSaveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Spending{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new spending.
     * @param {Object} opts Optional parameters
     * @param {module:model/SpendingSave} opts.body 
     * @param {module:api/SpendingApi~spendingSaveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    spendingSave(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['api_key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Spending;

      return this.apiClient.callApi(
        '/spendings', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the spendingShow operation.
     * @callback moduleapi/SpendingApi~spendingShowCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Spending{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves one specific spending.
     * Retrives the spending identified by the given ID in path.
     * @param {Number} id 
     * @param {module:api/SpendingApi~spendingShowCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    spendingShow(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling spendingShow");
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

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Spending;

      return this.apiClient.callApi(
        '/spendings/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the spendingUpdate operation.
     * @callback moduleapi/SpendingApi~spendingUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Spending{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a spending item.
     * Updates the spending item identified by the ID given in path.
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/SpendingSave} opts.body 
     * @param {module:api/SpendingApi~spendingUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    spendingUpdate(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling spendingUpdate");
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

      let authNames = ['api_key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Spending;

      return this.apiClient.callApi(
        '/spendings/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}