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
import {CheckTaxNumberMessage} from './CheckTaxNumberMessage';

/**
 * The TaxNumber model module.
 * @module model/TaxNumber
 * @version 3.0.14
 */
export class TaxNumber {
  /**
   * Constructs a new <code>TaxNumber</code>.
   * @alias module:model/TaxNumber
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TaxNumber</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaxNumber} obj Optional instance to populate.
   * @return {module:model/TaxNumber} The populated <code>TaxNumber</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TaxNumber();
      if (data.hasOwnProperty('tax_number'))
        obj.taxNumber = ApiClient.convertToType(data['tax_number'], 'String');
      if (data.hasOwnProperty('result'))
        obj.result = CheckTaxNumberMessage.constructFromObject(data['result']);
    }
    return obj;
  }
}

/**
 * @member {String} taxNumber
 */
TaxNumber.prototype.taxNumber = undefined;

/**
 * @member {module:model/CheckTaxNumberMessage} result
 */
TaxNumber.prototype.result = undefined;
