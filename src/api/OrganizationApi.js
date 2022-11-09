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
import {OrganizationData} from '../model/OrganizationData';
import {ServerErrorResponse} from '../model/ServerErrorResponse';
import {SubscriptionErrorResponse} from '../model/SubscriptionErrorResponse';
import {TooManyRequestsResponse} from '../model/TooManyRequestsResponse';
import {ValidationErrorResponse} from '../model/ValidationErrorResponse';

/**
* Organization service.
* @module api/OrganizationApi
* @version 3.0.14
*/
export class OrganizationApi {

    /**
    * Constructs a new OrganizationApi. 
    * @alias module:api/OrganizationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getOrganizationData operation.
     * @callback moduleapi/OrganizationApi~getOrganizationDataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrganizationData{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a organization data.
     * Retrieves the data of organization.
     * @param {module:api/OrganizationApi~getOrganizationDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getOrganizationData(callback) {
      
      let postBody = null;

      let pathParams = {
        
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
      let returnType = OrganizationData;

      return this.apiClient.callApi(
        '/organization', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}