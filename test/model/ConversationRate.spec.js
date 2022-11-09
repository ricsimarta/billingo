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
    describe('ConversationRate', function() {
      beforeEach(function() {
        instance = new BillingoApiV3.ConversationRate();
      });

      it('should create an instance of ConversationRate', function() {
        // TODO: update the code to test ConversationRate
        expect(instance).to.be.a(BillingoApiV3.ConversationRate);
      });

      it('should have the property fromCurrency (base name: "from_currency")', function() {
        // TODO: update the code to test the property fromCurrency
        expect(instance).to.have.property('fromCurrency');
        // expect(instance.fromCurrency).to.be(expectedValueLiteral);
      });

      it('should have the property toCurrency (base name: "to_currency")', function() {
        // TODO: update the code to test the property toCurrency
        expect(instance).to.have.property('toCurrency');
        // expect(instance.toCurrency).to.be(expectedValueLiteral);
      });

      it('should have the property conversationRate (base name: "conversation_rate")', function() {
        // TODO: update the code to test the property conversationRate
        expect(instance).to.have.property('conversationRate');
        // expect(instance.conversationRate).to.be(expectedValueLiteral);
      });

      it('should have the property _date (base name: "date")', function() {
        // TODO: update the code to test the property _date
        expect(instance).to.have.property('_date');
        // expect(instance._date).to.be(expectedValueLiteral);
      });

    });
  });

}));
