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
import {Vat} from './Vat';

/**
 * The ReceiptProductData model module.
 * @module model/ReceiptProductData
 * @version 3.0.14
 */
export class ReceiptProductData {
  /**
   * Constructs a new <code>ReceiptProductData</code>.
   * @alias module:model/ReceiptProductData
   * @class
   * @param unitPrice {Number} 
   * @param vat {module:model/Vat} 
   */
  constructor(unitPrice, vat) {
    this.unitPrice = unitPrice;
    this.vat = vat;
  }

  /**
   * Constructs a <code>ReceiptProductData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReceiptProductData} obj Optional instance to populate.
   * @return {module:model/ReceiptProductData} The populated <code>ReceiptProductData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ReceiptProductData();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('unit_price'))
        obj.unitPrice = ApiClient.convertToType(data['unit_price'], 'Number');
      if (data.hasOwnProperty('vat'))
        obj.vat = Vat.constructFromObject(data['vat']);
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
ReceiptProductData.prototype.name = undefined;

/**
 * @member {Number} unitPrice
 */
ReceiptProductData.prototype.unitPrice = undefined;

/**
 * @member {module:model/Vat} vat
 */
ReceiptProductData.prototype.vat = undefined;

// Implement OneOfReceiptInsertItemsItems interface:
