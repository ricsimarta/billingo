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
import {ClientErrorResponse} from '../model/ClientErrorResponse';
import {DocumentBlockList} from '../model/DocumentBlockList';
import {DocumentBlockType} from '../model/DocumentBlockType';
import {ServerErrorResponse} from '../model/ServerErrorResponse';
import {SubscriptionErrorResponse} from '../model/SubscriptionErrorResponse';
import {TooManyRequestsResponse} from '../model/TooManyRequestsResponse';
import {ValidationErrorResponse} from '../model/ValidationErrorResponse';

/**
* DocumentBlock service.
* @module api/DocumentBlockApi
* @version 3.0.14
*/
export class DocumentBlockApi {

    /**
    * Constructs a new DocumentBlockApi. 
    * @alias module:api/DocumentBlockApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the listDocumentBlock operation.
     * @callback moduleapi/DocumentBlockApi~listDocumentBlockCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentBlockList{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all document blocks
     * Returns a list of your document blocks. The document blocks are returned sorted by creation date, with the most recent document blocks appearing first.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page 
     * @param {Number} opts.perPage  (default to <.>)
     * @param {module:model/DocumentBlockType} opts.type Filter document blocks by type
     * @param {module:api/DocumentBlockApi~listDocumentBlockCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    listDocumentBlock(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'page': opts['page'],'per_page': opts['perPage'],'type': opts['type']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DocumentBlockList;

      return this.apiClient.callApi(
        '/document-blocks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}