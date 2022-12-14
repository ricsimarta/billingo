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
import {OnlineSzamlaStatusMessage} from './OnlineSzamlaStatusMessage';

/**
 * The OnlineSzamlaStatus model module.
 * @module model/OnlineSzamlaStatus
 * @version 3.0.14
 */
export class OnlineSzamlaStatus {
  /**
   * Constructs a new <code>OnlineSzamlaStatus</code>.
   * @alias module:model/OnlineSzamlaStatus
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OnlineSzamlaStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OnlineSzamlaStatus} obj Optional instance to populate.
   * @return {module:model/OnlineSzamlaStatus} The populated <code>OnlineSzamlaStatus</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OnlineSzamlaStatus();
      if (data.hasOwnProperty('transaction_id'))
        obj.transactionId = ApiClient.convertToType(data['transaction_id'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('messages'))
        obj.messages = ApiClient.convertToType(data['messages'], [OnlineSzamlaStatusMessage]);
    }
    return obj;
  }
}

/**
 * @member {String} transactionId
 */
OnlineSzamlaStatus.prototype.transactionId = undefined;

/**
 * @member {String} status
 */
OnlineSzamlaStatus.prototype.status = undefined;

/**
 * @member {Array.<module:model/OnlineSzamlaStatusMessage>} messages
 */
OnlineSzamlaStatus.prototype.messages = undefined;

