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
import {ValidationError} from './ValidationError';

/**
 * The ValidationErrorResponse model module.
 * @module model/ValidationErrorResponse
 * @version 3.0.14
 */
export class ValidationErrorResponse {
  /**
   * Constructs a new <code>ValidationErrorResponse</code>.
   * @alias module:model/ValidationErrorResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ValidationErrorResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ValidationErrorResponse} obj Optional instance to populate.
   * @return {module:model/ValidationErrorResponse} The populated <code>ValidationErrorResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ValidationErrorResponse();
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], [ValidationError]);
    }
    return obj;
  }
}

/**
 * @member {String} message
 */
ValidationErrorResponse.prototype.message = undefined;

/**
 * @member {Array.<module:model/ValidationError>} errors
 */
ValidationErrorResponse.prototype.errors = undefined;

