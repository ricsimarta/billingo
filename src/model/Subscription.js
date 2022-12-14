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
import {Feature} from './Feature';

/**
 * The Subscription model module.
 * @module model/Subscription
 * @version 3.0.14
 */
export class Subscription {
  /**
   * Constructs a new <code>Subscription</code>.
   * @alias module:model/Subscription
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Subscription</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Subscription} obj Optional instance to populate.
   * @return {module:model/Subscription} The populated <code>Subscription</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Subscription();
      if (data.hasOwnProperty('expiration_date'))
        obj.expirationDate = ApiClient.convertToType(data['expiration_date'], 'Date');
      if (data.hasOwnProperty('features'))
        obj.features = ApiClient.convertToType(data['features'], [Feature]);
    }
    return obj;
  }
}

/**
 * @member {Date} expirationDate
 */
Subscription.prototype.expirationDate = undefined;

/**
 * @member {Array.<module:model/Feature>} features
 */
Subscription.prototype.features = undefined;

