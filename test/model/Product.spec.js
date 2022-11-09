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
    describe('Product', function() {
      beforeEach(function() {
        instance = new BillingoApiV3.Product();
      });

      it('should create an instance of Product', function() {
        // TODO: update the code to test Product
        expect(instance).to.be.a(BillingoApiV3.Product);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property comment (base name: "comment")', function() {
        // TODO: update the code to test the property comment
        expect(instance).to.have.property('comment');
        // expect(instance.comment).to.be(expectedValueLiteral);
      });

      it('should have the property currency (base name: "currency")', function() {
        // TODO: update the code to test the property currency
        expect(instance).to.have.property('currency');
        // expect(instance.currency).to.be(expectedValueLiteral);
      });

      it('should have the property vat (base name: "vat")', function() {
        // TODO: update the code to test the property vat
        expect(instance).to.have.property('vat');
        // expect(instance.vat).to.be(expectedValueLiteral);
      });

      it('should have the property netUnitPrice (base name: "net_unit_price")', function() {
        // TODO: update the code to test the property netUnitPrice
        expect(instance).to.have.property('netUnitPrice');
        // expect(instance.netUnitPrice).to.be(expectedValueLiteral);
      });

      it('should have the property unit (base name: "unit")', function() {
        // TODO: update the code to test the property unit
        expect(instance).to.have.property('unit');
        // expect(instance.unit).to.be(expectedValueLiteral);
      });

      it('should have the property generalLedgerNumber (base name: "general_ledger_number")', function() {
        // TODO: update the code to test the property generalLedgerNumber
        expect(instance).to.have.property('generalLedgerNumber');
        // expect(instance.generalLedgerNumber).to.be(expectedValueLiteral);
      });

      it('should have the property generalLedgerTaxcode (base name: "general_ledger_taxcode")', function() {
        // TODO: update the code to test the property generalLedgerTaxcode
        expect(instance).to.have.property('generalLedgerTaxcode');
        // expect(instance.generalLedgerTaxcode).to.be(expectedValueLiteral);
      });

      it('should have the property entitlement (base name: "entitlement")', function() {
        // TODO: update the code to test the property entitlement
        expect(instance).to.have.property('entitlement');
        // expect(instance.entitlement).to.be(expectedValueLiteral);
      });

    });
  });

}));
