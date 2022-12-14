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
import {DiscountType} from './DiscountType';

/**
 * The Discount model module.
 * @module model/Discount
 * @version 3.0.14
 */
export class Discount {
  /**
   * Constructs a new <code>Discount</code>.
   * @alias module:model/Discount
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Discount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Discount} obj Optional instance to populate.
   * @return {module:model/Discount} The populated <code>Discount</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Discount();
      if (data.hasOwnProperty('type'))
        obj.type = DiscountType.constructFromObject(data['type']);
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {module:model/DiscountType} type
 */
Discount.prototype.type = undefined;

/**
 * @member {Number} value
 */
Discount.prototype.value = undefined;

