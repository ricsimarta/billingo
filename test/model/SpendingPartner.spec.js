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
    describe('SpendingPartner', function() {
      beforeEach(function() {
        instance = new BillingoApiV3.SpendingPartner();
      });

      it('should create an instance of SpendingPartner', function() {
        // TODO: update the code to test SpendingPartner
        expect(instance).to.be.a(BillingoApiV3.SpendingPartner);
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

      it('should have the property taxCode (base name: "tax_code")', function() {
        // TODO: update the code to test the property taxCode
        expect(instance).to.have.property('taxCode');
        // expect(instance.taxCode).to.be(expectedValueLiteral);
      });

      it('should have the property address (base name: "address")', function() {
        // TODO: update the code to test the property address
        expect(instance).to.have.property('address');
        // expect(instance.address).to.be(expectedValueLiteral);
      });

      it('should have the property iban (base name: "iban")', function() {
        // TODO: update the code to test the property iban
        expect(instance).to.have.property('iban');
        // expect(instance.iban).to.be(expectedValueLiteral);
      });

      it('should have the property swift (base name: "swift")', function() {
        // TODO: update the code to test the property swift
        expect(instance).to.have.property('swift');
        // expect(instance.swift).to.be(expectedValueLiteral);
      });

      it('should have the property accountNumber (base name: "account_number")', function() {
        // TODO: update the code to test the property accountNumber
        expect(instance).to.have.property('accountNumber');
        // expect(instance.accountNumber).to.be(expectedValueLiteral);
      });

      it('should have the property phone (base name: "phone")', function() {
        // TODO: update the code to test the property phone
        expect(instance).to.have.property('phone');
        // expect(instance.phone).to.be(expectedValueLiteral);
      });

      it('should have the property internalComment (base name: "internal_comment")', function() {
        // TODO: update the code to test the property internalComment
        expect(instance).to.have.property('internalComment');
        // expect(instance.internalComment).to.be(expectedValueLiteral);
      });

      it('should have the property groupMemberTaxNumber (base name: "group_member_tax_number")', function() {
        // TODO: update the code to test the property groupMemberTaxNumber
        expect(instance).to.have.property('groupMemberTaxNumber');
        // expect(instance.groupMemberTaxNumber).to.be(expectedValueLiteral);
      });

    });
  });

}));
