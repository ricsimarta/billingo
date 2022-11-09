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
 * Enum class UnitPriceType.
 * @enum {String}
 * @readonly
 */
const UnitPriceType = {
  /**
   * value: "gross"
   * @const
   */
  gross: "gross",

  /**
   * value: "net"
   * @const
   */
  net: "net",

  /**
   * Returns a <code>UnitPriceType</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/UnitPriceType} The enum <code>UnitPriceType</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {UnitPriceType};