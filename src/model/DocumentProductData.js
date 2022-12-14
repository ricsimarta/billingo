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
import {Entitlement} from './Entitlement';
import {UnitPriceType} from './UnitPriceType';
import {Vat} from './Vat';

/**
 * The DocumentProductData model module.
 * @module model/DocumentProductData
 * @version 3.0.14
 */
export class DocumentProductData {
  /**
   * Constructs a new <code>DocumentProductData</code>.
   * @alias module:model/DocumentProductData
   * @class
   * @param name {String} 
   * @param unitPrice {Number} 
   * @param unitPriceType {module:model/UnitPriceType} 
   * @param quantity {Number} 
   * @param unit {String} 
   * @param vat {module:model/Vat} 
   */
  constructor(name, unitPrice, unitPriceType, quantity, unit, vat) {
    this.name = name;
    this.unitPrice = unitPrice;
    this.unitPriceType = unitPriceType;
    this.quantity = quantity;
    this.unit = unit;
    this.vat = vat;
  }

  /**
   * Constructs a <code>DocumentProductData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocumentProductData} obj Optional instance to populate.
   * @return {module:model/DocumentProductData} The populated <code>DocumentProductData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DocumentProductData();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('unit_price'))
        obj.unitPrice = ApiClient.convertToType(data['unit_price'], 'Number');
      if (data.hasOwnProperty('unit_price_type'))
        obj.unitPriceType = UnitPriceType.constructFromObject(data['unit_price_type']);
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
      if (data.hasOwnProperty('unit'))
        obj.unit = ApiClient.convertToType(data['unit'], 'String');
      if (data.hasOwnProperty('vat'))
        obj.vat = Vat.constructFromObject(data['vat']);
      if (data.hasOwnProperty('comment'))
        obj.comment = ApiClient.convertToType(data['comment'], 'String');
      if (data.hasOwnProperty('entitlement'))
        obj.entitlement = Entitlement.constructFromObject(data['entitlement']);
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
DocumentProductData.prototype.name = undefined;

/**
 * @member {Number} unitPrice
 */
DocumentProductData.prototype.unitPrice = undefined;

/**
 * @member {module:model/UnitPriceType} unitPriceType
 */
DocumentProductData.prototype.unitPriceType = undefined;

/**
 * @member {Number} quantity
 */
DocumentProductData.prototype.quantity = undefined;

/**
 * @member {String} unit
 */
DocumentProductData.prototype.unit = undefined;

/**
 * @member {module:model/Vat} vat
 */
DocumentProductData.prototype.vat = undefined;

/**
 * @member {String} comment
 */
DocumentProductData.prototype.comment = undefined;

/**
 * @member {module:model/Entitlement} entitlement
 */
DocumentProductData.prototype.entitlement = undefined;

// Implement OneOfDocumentInsertItemsItems interface:
// Implement OneOfModificationDocumentInsertItemsItems interface:
