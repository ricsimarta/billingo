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
 * The DocumentPublicUrl model module.
 * @module model/DocumentPublicUrl
 * @version 3.0.14
 */
export class DocumentPublicUrl {
  /**
   * Constructs a new <code>DocumentPublicUrl</code>.
   * @alias module:model/DocumentPublicUrl
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DocumentPublicUrl</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocumentPublicUrl} obj Optional instance to populate.
   * @return {module:model/DocumentPublicUrl} The populated <code>DocumentPublicUrl</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DocumentPublicUrl();
      if (data.hasOwnProperty('public_url'))
        obj.publicUrl = ApiClient.convertToType(data['public_url'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} publicUrl
 */
DocumentPublicUrl.prototype.publicUrl = undefined;

