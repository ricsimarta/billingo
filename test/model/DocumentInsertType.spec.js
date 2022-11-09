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
    describe('DocumentInsertType', function() {
      beforeEach(function() {
        instance = BillingoApiV3.DocumentInsertType;
      });

      it('should create an instance of DocumentInsertType', function() {
        // TODO: update the code to test DocumentInsertType
        expect(instance).to.be.a('object');
      });

      it('should have the property advance', function() {
        expect(instance).to.have.property('advance');
        expect(instance.advance).to.be("advance");
      });

      it('should have the property draft', function() {
        expect(instance).to.have.property('draft');
        expect(instance.draft).to.be("draft");
      });

      it('should have the property invoice', function() {
        expect(instance).to.have.property('invoice');
        expect(instance.invoice).to.be("invoice");
      });

      it('should have the property proforma', function() {
        expect(instance).to.have.property('proforma');
        expect(instance.proforma).to.be("proforma");
      });

    });
  });

}));
