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
    describe('DocumentExportFilterExtra', function() {
      beforeEach(function() {
        instance = new BillingoApiV3.DocumentExportFilterExtra();
      });

      it('should create an instance of DocumentExportFilterExtra', function() {
        // TODO: update the code to test DocumentExportFilterExtra
        expect(instance).to.be.a(BillingoApiV3.DocumentExportFilterExtra);
      });

      it('should have the property tensoftVkod (base name: "tensoft_vkod")', function() {
        // TODO: update the code to test the property tensoftVkod
        expect(instance).to.have.property('tensoftVkod');
        // expect(instance.tensoftVkod).to.be(expectedValueLiteral);
      });

      it('should have the property ledgerNumber (base name: "ledger_number")', function() {
        // TODO: update the code to test the property ledgerNumber
        expect(instance).to.have.property('ledgerNumber');
        // expect(instance.ledgerNumber).to.be(expectedValueLiteral);
      });

      it('should have the property forintsoftKonyvelesiNaploSzam (base name: "forintsoft_konyvelesi_naplo_szam")', function() {
        // TODO: update the code to test the property forintsoftKonyvelesiNaploSzam
        expect(instance).to.have.property('forintsoftKonyvelesiNaploSzam');
        // expect(instance.forintsoftKonyvelesiNaploSzam).to.be(expectedValueLiteral);
      });

      it('should have the property positiveLedgerNumber (base name: "positive_ledger_number")', function() {
        // TODO: update the code to test the property positiveLedgerNumber
        expect(instance).to.have.property('positiveLedgerNumber');
        // expect(instance.positiveLedgerNumber).to.be(expectedValueLiteral);
      });

      it('should have the property negativeLedgerNumber (base name: "negative_ledger_number")', function() {
        // TODO: update the code to test the property negativeLedgerNumber
        expect(instance).to.have.property('negativeLedgerNumber');
        // expect(instance.negativeLedgerNumber).to.be(expectedValueLiteral);
      });

      it('should have the property rlbKata (base name: "rlb_kata")', function() {
        // TODO: update the code to test the property rlbKata
        expect(instance).to.have.property('rlbKata');
        // expect(instance.rlbKata).to.be(expectedValueLiteral);
      });

      it('should have the property rlbNote (base name: "rlb_note")', function() {
        // TODO: update the code to test the property rlbNote
        expect(instance).to.have.property('rlbNote');
        // expect(instance.rlbNote).to.be(expectedValueLiteral);
      });

      it('should have the property novitaxNaplokod (base name: "novitax_naplokod")', function() {
        // TODO: update the code to test the property novitaxNaplokod
        expect(instance).to.have.property('novitaxNaplokod');
        // expect(instance.novitaxNaplokod).to.be(expectedValueLiteral);
      });

      it('should have the property useGrossValues (base name: "use_gross_values")', function() {
        // TODO: update the code to test the property useGrossValues
        expect(instance).to.have.property('useGrossValues');
        // expect(instance.useGrossValues).to.be(expectedValueLiteral);
      });

    });
  });

}));