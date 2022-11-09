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
    describe('PaymentHistory', function() {
      beforeEach(function() {
        instance = new BillingoApiV3.PaymentHistory();
      });

      it('should create an instance of PaymentHistory', function() {
        // TODO: update the code to test PaymentHistory
        expect(instance).to.be.a(BillingoApiV3.PaymentHistory);
      });

      it('should have the property _date (base name: "date")', function() {
        // TODO: update the code to test the property _date
        expect(instance).to.have.property('_date');
        // expect(instance._date).to.be(expectedValueLiteral);
      });

      it('should have the property price (base name: "price")', function() {
        // TODO: update the code to test the property price
        expect(instance).to.have.property('price');
        // expect(instance.price).to.be(expectedValueLiteral);
      });

      it('should have the property paymentMethod (base name: "payment_method")', function() {
        // TODO: update the code to test the property paymentMethod
        expect(instance).to.have.property('paymentMethod');
        // expect(instance.paymentMethod).to.be(expectedValueLiteral);
      });

      it('should have the property voucherNumber (base name: "voucher_number")', function() {
        // TODO: update the code to test the property voucherNumber
        expect(instance).to.have.property('voucherNumber');
        // expect(instance.voucherNumber).to.be(expectedValueLiteral);
      });

      it('should have the property conversionRate (base name: "conversion_rate")', function() {
        // TODO: update the code to test the property conversionRate
        expect(instance).to.have.property('conversionRate');
        // expect(instance.conversionRate).to.be(expectedValueLiteral);
      });

    });
  });

}));