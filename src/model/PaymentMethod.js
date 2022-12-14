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
 * Enum class PaymentMethod.
 * @enum {String}
 * @readonly
 */
const PaymentMethod = {
  /**
   * value: "aruhitel"
   * @const
   */
  aruhitel: "aruhitel",

  /**
   * value: "bankcard"
   * @const
   */
  bankcard: "bankcard",

  /**
   * value: "barion"
   * @const
   */
  barion: "barion",

  /**
   * value: "barter"
   * @const
   */
  barter: "barter",

  /**
   * value: "cash"
   * @const
   */
  cash: "cash",

  /**
   * value: "cash_on_delivery"
   * @const
   */
  cashOnDelivery: "cash_on_delivery",

  /**
   * value: "coupon"
   * @const
   */
  coupon: "coupon",

  /**
   * value: "elore_utalas"
   * @const
   */
  eloreUtalas: "elore_utalas",

  /**
   * value: "ep_kartya"
   * @const
   */
  epKartya: "ep_kartya",

  /**
   * value: "kompenzacio"
   * @const
   */
  kompenzacio: "kompenzacio",

  /**
   * value: "levonas"
   * @const
   */
  levonas: "levonas",

  /**
   * value: "online_bankcard"
   * @const
   */
  onlineBankcard: "online_bankcard",

  /**
   * value: "other"
   * @const
   */
  other: "other",

  /**
   * value: "paylike"
   * @const
   */
  paylike: "paylike",

  /**
   * value: "payoneer"
   * @const
   */
  payoneer: "payoneer",

  /**
   * value: "paypal"
   * @const
   */
  paypal: "paypal",

  /**
   * value: "paypal_utolag"
   * @const
   */
  paypalUtolag: "paypal_utolag",

  /**
   * value: "payu"
   * @const
   */
  payu: "payu",

  /**
   * value: "pick_pack_pont"
   * @const
   */
  pickPackPont: "pick_pack_pont",

  /**
   * value: "postai_csekk"
   * @const
   */
  postaiCsekk: "postai_csekk",

  /**
   * value: "postautalvany"
   * @const
   */
  postautalvany: "postautalvany",

  /**
   * value: "skrill"
   * @const
   */
  skrill: "skrill",

  /**
   * value: "szep_card"
   * @const
   */
  szepCard: "szep_card",

  /**
   * value: "transferwise"
   * @const
   */
  transferwise: "transferwise",

  /**
   * value: "upwork"
   * @const
   */
  upwork: "upwork",

  /**
   * value: "utalvany"
   * @const
   */
  utalvany: "utalvany",

  /**
   * value: "valto"
   * @const
   */
  valto: "valto",

  /**
   * value: "wire_transfer"
   * @const
   */
  wireTransfer: "wire_transfer",

  /**
   * Returns a <code>PaymentMethod</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/PaymentMethod} The enum <code>PaymentMethod</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {PaymentMethod};