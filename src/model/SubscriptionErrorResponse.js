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
import {ApiClient} from '../ApiClient';
import {ClientError} from './ClientError';

/**
 * The SubscriptionErrorResponse model module.
 * @module model/SubscriptionErrorResponse
 * @version 3.0.14
 */
export class SubscriptionErrorResponse {
  /**
   * Constructs a new <code>SubscriptionErrorResponse</code>.
   * @alias module:model/SubscriptionErrorResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SubscriptionErrorResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionErrorResponse} obj Optional instance to populate.
   * @return {module:model/SubscriptionErrorResponse} The populated <code>SubscriptionErrorResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SubscriptionErrorResponse();
      if (data.hasOwnProperty('error'))
        obj.error = ClientError.constructFromObject(data['error']);
    }
    return obj;
  }
}

/**
 * @member {module:model/ClientError} error
 */
SubscriptionErrorResponse.prototype.error = undefined;
