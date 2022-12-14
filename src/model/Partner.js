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
import {PartnerCustomBillingSettings} from './PartnerCustomBillingSettings';
import {PartnerTaxType} from './PartnerTaxType';

/**
 * The Partner model module.
 * @module model/Partner
 * @version 3.0.14
 */
export class Partner {
  /**
   * Constructs a new <code>Partner</code>.
   * @alias module:model/Partner
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Partner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Partner} obj Optional instance to populate.
   * @return {module:model/Partner} The populated <code>Partner</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Partner();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('address'))
        obj.address = Address.constructFromObject(data['address']);
      if (data.hasOwnProperty('emails'))
        obj.emails = ApiClient.convertToType(data['emails'], ['String']);
      if (data.hasOwnProperty('taxcode'))
        obj.taxcode = ApiClient.convertToType(data['taxcode'], 'String');
      if (data.hasOwnProperty('iban'))
        obj.iban = ApiClient.convertToType(data['iban'], 'String');
      if (data.hasOwnProperty('swift'))
        obj.swift = ApiClient.convertToType(data['swift'], 'String');
      if (data.hasOwnProperty('account_number'))
        obj.accountNumber = ApiClient.convertToType(data['account_number'], 'String');
      if (data.hasOwnProperty('phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
      if (data.hasOwnProperty('general_ledger_number'))
        obj.generalLedgerNumber = ApiClient.convertToType(data['general_ledger_number'], 'String');
      if (data.hasOwnProperty('tax_type'))
        obj.taxType = PartnerTaxType.constructFromObject(data['tax_type']);
      if (data.hasOwnProperty('custom_billing_settings'))
        obj.customBillingSettings = PartnerCustomBillingSettings.constructFromObject(data['custom_billing_settings']);
      if (data.hasOwnProperty('group_member_tax_number'))
        obj.groupMemberTaxNumber = ApiClient.convertToType(data['group_member_tax_number'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
Partner.prototype.id = undefined;

/**
 * @member {String} name
 */
Partner.prototype.name = undefined;

/**
 * @member {module:model/Address} address
 */
Partner.prototype.address = undefined;

/**
 * @member {Array.<String>} emails
 */
Partner.prototype.emails = undefined;

/**
 * @member {String} taxcode
 */
Partner.prototype.taxcode = undefined;

/**
 * @member {String} iban
 */
Partner.prototype.iban = undefined;

/**
 * @member {String} swift
 */
Partner.prototype.swift = undefined;

/**
 * @member {String} accountNumber
 */
Partner.prototype.accountNumber = undefined;

/**
 * @member {String} phone
 */
Partner.prototype.phone = undefined;

/**
 * @member {String} generalLedgerNumber
 */
Partner.prototype.generalLedgerNumber = undefined;

/**
 * @member {module:model/PartnerTaxType} taxType
 */
Partner.prototype.taxType = undefined;

/**
 * @member {module:model/PartnerCustomBillingSettings} customBillingSettings
 */
Partner.prototype.customBillingSettings = undefined;

/**
 * The tax number of group member. Send tax number for update. Send empty string for delete. Ignored if omitted.
 * @member {String} groupMemberTaxNumber
 */
Partner.prototype.groupMemberTaxNumber = undefined;

