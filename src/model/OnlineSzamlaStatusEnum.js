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

/**
 * Enum class OnlineSzamlaStatusEnum.
 * @enum {String}
 * @readonly
 */
const OnlineSzamlaStatusEnum = {
  /**
   * value: "aborted"
   * @const
   */
  aborted: "aborted",

  /**
   * value: "done"
   * @const
   */
  done: "done",

  /**
   * value: "empty_organization_country_code"
   * @const
   */
  emptyOrganizationCountryCode: "empty_organization_country_code",

  /**
   * value: "empty_partner_country_code"
   * @const
   */
  emptyPartnerCountryCode: "empty_partner_country_code",

  /**
   * value: "empty_tax"
   * @const
   */
  emptyTax: "empty_tax",

  /**
   * value: "forbidden"
   * @const
   */
  forbidden: "forbidden",

  /**
   * value: "invalid_address"
   * @const
   */
  invalidAddress: "invalid_address",

  /**
   * value: "invalid_client"
   * @const
   */
  invalidClient: "invalid_client",

  /**
   * value: "invalid_conversion_rate"
   * @const
   */
  invalidConversionRate: "invalid_conversion_rate",

  /**
   * value: "invalid_customer"
   * @const
   */
  invalidCustomer: "invalid_customer",

  /**
   * value: "invalid_invoice_reference"
   * @const
   */
  invalidInvoiceReference: "invalid_invoice_reference",

  /**
   * value: "invalid_postalcode"
   * @const
   */
  invalidPostalcode: "invalid_postalcode",

  /**
   * value: "invalid_security_user"
   * @const
   */
  invalidSecurityUser: "invalid_security_user",

  /**
   * value: "invalid_tax"
   * @const
   */
  invalidTax: "invalid_tax",

  /**
   * value: "invalid_tax_number"
   * @const
   */
  invalidTaxNumber: "invalid_tax_number",

  /**
   * value: "invalid_user_relation"
   * @const
   */
  invalidUserRelation: "invalid_user_relation",

  /**
   * value: "invalid_vat_data"
   * @const
   */
  invalidVatData: "invalid_vat_data",

  /**
   * value: "invoice_number_not_unique"
   * @const
   */
  invoiceNumberNotUnique: "invoice_number_not_unique",

  /**
   * value: "kobak_processing"
   * @const
   */
  kobakProcessing: "kobak_processing",

  /**
   * value: "missing_document_item_name"
   * @const
   */
  missingDocumentItemName: "missing_document_item_name",

  /**
   * value: "nav_warn"
   * @const
   */
  navWarn: "nav_warn",

  /**
   * value: "no_online_szamla_settings"
   * @const
   */
  noOnlineSzamlaSettings: "no_online_szamla_settings",

  /**
   * value: "no_send_by_user"
   * @const
   */
  noSendByUser: "no_send_by_user",

  /**
   * value: "non_exist_tax_number"
   * @const
   */
  nonExistTaxNumber: "non_exist_tax_number",

  /**
   * value: "not unique"
   * @const
   */
  notUnique: "not unique",

  /**
   * value: "not_checked"
   * @const
   */
  notChecked: "not_checked",

  /**
   * value: "not_registered_customer"
   * @const
   */
  notRegisteredCustomer: "not_registered_customer",

  /**
   * value: "processing"
   * @const
   */
  processing: "processing",

  /**
   * value: "received"
   * @const
   */
  received: "received",

  /**
   * value: "saved"
   * @const
   */
  saved: "saved",

  /**
   * value: "send_failed"
   * @const
   */
  sendFailed: "send_failed",

  /**
   * value: "sent"
   * @const
   */
  sent: "sent",

  /**
   * value: "started"
   * @const
   */
  started: "started",

  /**
   * value: "technical_error"
   * @const
   */
  technicalError: "technical_error",

  /**
   * value: "under_tax_limit"
   * @const
   */
  underTaxLimit: "under_tax_limit",

  /**
   * value: "user_has_invalid_kobak"
   * @const
   */
  userHasInvalidKobak: "user_has_invalid_kobak",

  /**
   * value: "user_hasnot_kobak"
   * @const
   */
  userHasnotKobak: "user_hasnot_kobak",

  /**
   * value: "validation_ok"
   * @const
   */
  validationOk: "validation_ok",

  /**
   * Returns a <code>OnlineSzamlaStatusEnum</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/OnlineSzamlaStatusEnum} The enum <code>OnlineSzamlaStatusEnum</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {OnlineSzamlaStatusEnum};