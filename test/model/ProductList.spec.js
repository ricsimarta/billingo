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
    describe('ProductList', function() {
      beforeEach(function() {
        instance = new BillingoApiV3.ProductList();
      });

      it('should create an instance of ProductList', function() {
        // TODO: update the code to test ProductList
        expect(instance).to.be.a(BillingoApiV3.ProductList);
      });

      it('should have the property data (base name: "data")', function() {
        // TODO: update the code to test the property data
        expect(instance).to.have.property('data');
        // expect(instance.data).to.be(expectedValueLiteral);
      });

      it('should have the property total (base name: "total")', function() {
        // TODO: update the code to test the property total
        expect(instance).to.have.property('total');
        // expect(instance.total).to.be(expectedValueLiteral);
      });

      it('should have the property perPage (base name: "per_page")', function() {
        // TODO: update the code to test the property perPage
        expect(instance).to.have.property('perPage');
        // expect(instance.perPage).to.be(expectedValueLiteral);
      });

      it('should have the property currentPage (base name: "current_page")', function() {
        // TODO: update the code to test the property currentPage
        expect(instance).to.have.property('currentPage');
        // expect(instance.currentPage).to.be(expectedValueLiteral);
      });

      it('should have the property lastPage (base name: "last_page")', function() {
        // TODO: update the code to test the property lastPage
        expect(instance).to.have.property('lastPage');
        // expect(instance.lastPage).to.be(expectedValueLiteral);
      });

      it('should have the property prevPageUrl (base name: "prev_page_url")', function() {
        // TODO: update the code to test the property prevPageUrl
        expect(instance).to.have.property('prevPageUrl');
        // expect(instance.prevPageUrl).to.be(expectedValueLiteral);
      });

      it('should have the property nextPageUrl (base name: "next_page_url")', function() {
        // TODO: update the code to test the property nextPageUrl
        expect(instance).to.have.property('nextPageUrl');
        // expect(instance.nextPageUrl).to.be(expectedValueLiteral);
      });

    });
  });

}));
