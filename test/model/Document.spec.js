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
    describe('Document', function() {
      beforeEach(function() {
        instance = new BillingoApiV3.Document();
      });

      it('should create an instance of Document', function() {
        // TODO: update the code to test Document
        expect(instance).to.be.a(BillingoApiV3.Document);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property invoiceNumber (base name: "invoice_number")', function() {
        // TODO: update the code to test the property invoiceNumber
        expect(instance).to.have.property('invoiceNumber');
        // expect(instance.invoiceNumber).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property cancelled (base name: "cancelled")', function() {
        // TODO: update the code to test the property cancelled
        expect(instance).to.have.property('cancelled');
        // expect(instance.cancelled).to.be(expectedValueLiteral);
      });

      it('should have the property blockId (base name: "block_id")', function() {
        // TODO: update the code to test the property blockId
        expect(instance).to.have.property('blockId');
        // expect(instance.blockId).to.be(expectedValueLiteral);
      });

      it('should have the property paymentStatus (base name: "payment_status")', function() {
        // TODO: update the code to test the property paymentStatus
        expect(instance).to.have.property('paymentStatus');
        // expect(instance.paymentStatus).to.be(expectedValueLiteral);
      });

      it('should have the property paymentMethod (base name: "payment_method")', function() {
        // TODO: update the code to test the property paymentMethod
        expect(instance).to.have.property('paymentMethod');
        // expect(instance.paymentMethod).to.be(expectedValueLiteral);
      });

      it('should have the property grossTotal (base name: "gross_total")', function() {
        // TODO: update the code to test the property grossTotal
        expect(instance).to.have.property('grossTotal');
        // expect(instance.grossTotal).to.be(expectedValueLiteral);
      });

      it('should have the property currency (base name: "currency")', function() {
        // TODO: update the code to test the property currency
        expect(instance).to.have.property('currency');
        // expect(instance.currency).to.be(expectedValueLiteral);
      });

      it('should have the property conversionRate (base name: "conversion_rate")', function() {
        // TODO: update the code to test the property conversionRate
        expect(instance).to.have.property('conversionRate');
        // expect(instance.conversionRate).to.be(expectedValueLiteral);
      });

      it('should have the property invoiceDate (base name: "invoice_date")', function() {
        // TODO: update the code to test the property invoiceDate
        expect(instance).to.have.property('invoiceDate');
        // expect(instance.invoiceDate).to.be(expectedValueLiteral);
      });

      it('should have the property fulfillmentDate (base name: "fulfillment_date")', function() {
        // TODO: update the code to test the property fulfillmentDate
        expect(instance).to.have.property('fulfillmentDate');
        // expect(instance.fulfillmentDate).to.be(expectedValueLiteral);
      });

      it('should have the property dueDate (base name: "due_date")', function() {
        // TODO: update the code to test the property dueDate
        expect(instance).to.have.property('dueDate');
        // expect(instance.dueDate).to.be(expectedValueLiteral);
      });

      it('should have the property paidDate (base name: "paid_date")', function() {
        // TODO: update the code to test the property paidDate
        expect(instance).to.have.property('paidDate');
        // expect(instance.paidDate).to.be(expectedValueLiteral);
      });

      it('should have the property organization (base name: "organization")', function() {
        // TODO: update the code to test the property organization
        expect(instance).to.have.property('organization');
        // expect(instance.organization).to.be(expectedValueLiteral);
      });

      it('should have the property partner (base name: "partner")', function() {
        // TODO: update the code to test the property partner
        expect(instance).to.have.property('partner');
        // expect(instance.partner).to.be(expectedValueLiteral);
      });

      it('should have the property documentPartner (base name: "document_partner")', function() {
        // TODO: update the code to test the property documentPartner
        expect(instance).to.have.property('documentPartner');
        // expect(instance.documentPartner).to.be(expectedValueLiteral);
      });

      it('should have the property electronic (base name: "electronic")', function() {
        // TODO: update the code to test the property electronic
        expect(instance).to.have.property('electronic');
        // expect(instance.electronic).to.be(expectedValueLiteral);
      });

      it('should have the property comment (base name: "comment")', function() {
        // TODO: update the code to test the property comment
        expect(instance).to.have.property('comment');
        // expect(instance.comment).to.be(expectedValueLiteral);
      });

      it('should have the property tags (base name: "tags")', function() {
        // TODO: update the code to test the property tags
        expect(instance).to.have.property('tags');
        // expect(instance.tags).to.be(expectedValueLiteral);
      });

      it('should have the property notificationStatus (base name: "notification_status")', function() {
        // TODO: update the code to test the property notificationStatus
        expect(instance).to.have.property('notificationStatus');
        // expect(instance.notificationStatus).to.be(expectedValueLiteral);
      });

      it('should have the property language (base name: "language")', function() {
        // TODO: update the code to test the property language
        expect(instance).to.have.property('language');
        // expect(instance.language).to.be(expectedValueLiteral);
      });

      it('should have the property items (base name: "items")', function() {
        // TODO: update the code to test the property items
        expect(instance).to.have.property('items');
        // expect(instance.items).to.be(expectedValueLiteral);
      });

      it('should have the property summary (base name: "summary")', function() {
        // TODO: update the code to test the property summary
        expect(instance).to.have.property('summary');
        // expect(instance.summary).to.be(expectedValueLiteral);
      });

      it('should have the property settings (base name: "settings")', function() {
        // TODO: update the code to test the property settings
        expect(instance).to.have.property('settings');
        // expect(instance.settings).to.be(expectedValueLiteral);
      });

      it('should have the property onlineSzamlaStatus (base name: "online_szamla_status")', function() {
        // TODO: update the code to test the property onlineSzamlaStatus
        expect(instance).to.have.property('onlineSzamlaStatus');
        // expect(instance.onlineSzamlaStatus).to.be(expectedValueLiteral);
      });

      it('should have the property relatedDocuments (base name: "related_documents")', function() {
        // TODO: update the code to test the property relatedDocuments
        expect(instance).to.have.property('relatedDocuments');
        // expect(instance.relatedDocuments).to.be(expectedValueLiteral);
      });

      it('should have the property discount (base name: "discount")', function() {
        // TODO: update the code to test the property discount
        expect(instance).to.have.property('discount');
        // expect(instance.discount).to.be(expectedValueLiteral);
      });

      it('should have the property correctionType (base name: "correction_type")', function() {
        // TODO: update the code to test the property correctionType
        expect(instance).to.have.property('correctionType');
        // expect(instance.correctionType).to.be(expectedValueLiteral);
      });

    });
  });

}));
