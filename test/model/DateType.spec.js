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
    describe('DateType', function() {
      beforeEach(function() {
        instance = BillingoApiV3.DateType;
      });

      it('should create an instance of DateType', function() {
        // TODO: update the code to test DateType
        expect(instance).to.be.a('object');
      });

      it('should have the property dueDate', function() {
        expect(instance).to.have.property('dueDate');
        expect(instance.dueDate).to.be("due_date");
      });

      it('should have the property fulfillmentDate', function() {
        expect(instance).to.have.property('fulfillmentDate');
        expect(instance.fulfillmentDate).to.be("fulfillment_date");
      });

      it('should have the property invoiceDate', function() {
        expect(instance).to.have.property('invoiceDate');
        expect(instance.invoiceDate).to.be("invoice_date");
      });

    });
  });

}));
