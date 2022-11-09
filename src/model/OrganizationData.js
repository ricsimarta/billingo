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
import {Subscription} from './Subscription';

/**
 * The OrganizationData model module.
 * @module model/OrganizationData
 * @version 3.0.14
 */
export class OrganizationData {
  /**
   * Constructs a new <code>OrganizationData</code>.
   * @alias module:model/OrganizationData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OrganizationData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrganizationData} obj Optional instance to populate.
   * @return {module:model/OrganizationData} The populated <code>OrganizationData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OrganizationData();
      if (data.hasOwnProperty('tax_code'))
        obj.taxCode = ApiClient.convertToType(data['tax_code'], 'String');
      if (data.hasOwnProperty('subscription'))
        obj.subscription = Subscription.constructFromObject(data['subscription']);
    }
    return obj;
  }
}

/**
 * @member {String} taxCode
 */
OrganizationData.prototype.taxCode = undefined;

/**
 * @member {module:model/Subscription} subscription
 */
OrganizationData.prototype.subscription = undefined;

