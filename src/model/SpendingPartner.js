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
import {Address} from './Address';

/**
 * The SpendingPartner model module.
 * @module model/SpendingPartner
 * @version 3.0.14
 */
export class SpendingPartner {
  /**
   * Constructs a new <code>SpendingPartner</code>.
   * @alias module:model/SpendingPartner
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SpendingPartner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SpendingPartner} obj Optional instance to populate.
   * @return {module:model/SpendingPartner} The populated <code>SpendingPartner</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SpendingPartner();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('tax_code'))
        obj.taxCode = ApiClient.convertToType(data['tax_code'], 'String');
      if (data.hasOwnProperty('address'))
        obj.address = Address.constructFromObject(data['address']);
      if (data.hasOwnProperty('iban'))
        obj.iban = ApiClient.convertToType(data['iban'], 'String');
      if (data.hasOwnProperty('swift'))
        obj.swift = ApiClient.convertToType(data['swift'], 'String');
      if (data.hasOwnProperty('account_number'))
        obj.accountNumber = ApiClient.convertToType(data['account_number'], 'String');
      if (data.hasOwnProperty('phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
      if (data.hasOwnProperty('internal_comment'))
        obj.internalComment = ApiClient.convertToType(data['internal_comment'], 'String');
      if (data.hasOwnProperty('group_member_tax_number'))
        obj.groupMemberTaxNumber = ApiClient.convertToType(data['group_member_tax_number'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
SpendingPartner.prototype.id = undefined;

/**
 * @member {String} name
 */
SpendingPartner.prototype.name = undefined;

/**
 * @member {String} taxCode
 */
SpendingPartner.prototype.taxCode = undefined;

/**
 * @member {module:model/Address} address
 */
SpendingPartner.prototype.address = undefined;

/**
 * @member {String} iban
 */
SpendingPartner.prototype.iban = undefined;

/**
 * @member {String} swift
 */
SpendingPartner.prototype.swift = undefined;

/**
 * @member {String} accountNumber
 */
SpendingPartner.prototype.accountNumber = undefined;

/**
 * @member {String} phone
 */
SpendingPartner.prototype.phone = undefined;

/**
 * @member {String} internalComment
 */
SpendingPartner.prototype.internalComment = undefined;

/**
 * @member {String} groupMemberTaxNumber
 */
SpendingPartner.prototype.groupMemberTaxNumber = undefined;

