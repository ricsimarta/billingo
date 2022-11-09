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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.BillingoApiV3);
  }
}(this, function(expect, BillingoApiV3) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('OrganizationData', function() {
      beforeEach(function() {
        instance = new BillingoApiV3.OrganizationData();
      });

      it('should create an instance of OrganizationData', function() {
        // TODO: update the code to test OrganizationData
        expect(instance).to.be.a(BillingoApiV3.OrganizationData);
      });

      it('should have the property taxCode (base name: "tax_code")', function() {
        // TODO: update the code to test the property taxCode
        expect(instance).to.have.property('taxCode');
        // expect(instance.taxCode).to.be(expectedValueLiteral);
      });

      it('should have the property subscription (base name: "subscription")', function() {
        // TODO: update the code to test the property subscription
        expect(instance).to.have.property('subscription');
        // expect(instance.subscription).to.be(expectedValueLiteral);
      });

    });
  });

}));