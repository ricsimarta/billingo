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
 * Enum class Entitlement.
 * @enum {String}
 * @readonly
 */
const Entitlement = {
  /**
   * value: "AAM"
   * @const
   */
  AAM: "AAM",

  /**
   * value: "ANTIQUES"
   * @const
   */
  ANTIQUES: "ANTIQUES",

  /**
   * value: "ARTWORK"
   * @const
   */
  ARTWORK: "ARTWORK",

  /**
   * value: "ATK"
   * @const
   */
  ATK: "ATK",

  /**
   * value: "EAM"
   * @const
   */
  EAM: "EAM",

  /**
   * value: "EUE"
   * @const
   */
  EUE: "EUE",

  /**
   * value: "EUFAD37"
   * @const
   */
  eUFAD37: "EUFAD37",

  /**
   * value: "EUFADE"
   * @const
   */
  EUFADE: "EUFADE",

  /**
   * value: "HO"
   * @const
   */
  HO: "HO",

  /**
   * value: "KBAET"
   * @const
   */
  KBAET: "KBAET",

  /**
   * value: "NAM_1"
   * @const
   */
  nAM1: "NAM_1",

  /**
   * value: "NAM_2"
   * @const
   */
  nAM2: "NAM_2",

  /**
   * value: "SECOND_HAND"
   * @const
   */
  SECOND_HAND: "SECOND_HAND",

  /**
   * value: "TAM"
   * @const
   */
  TAM: "TAM",

  /**
   * value: "TRAVEL_AGENCY"
   * @const
   */
  TRAVEL_AGENCY: "TRAVEL_AGENCY",

  /**
   * Returns a <code>Entitlement</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/Entitlement} The enum <code>Entitlement</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {Entitlement};