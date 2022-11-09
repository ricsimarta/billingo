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

  beforeEach(function() {
    instance = new BillingoApiV3.PartnerApi();
  });

  describe('(package)', function() {
    describe('PartnerApi', function() {
      describe('createPartner', function() {
        it('should call createPartner successfully', function(done) {
          // TODO: uncomment, update parameter values for createPartner call and complete the assertions
          /*

          instance.createPartner(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BillingoApiV3.Partner);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deletePartner', function() {
        it('should call deletePartner successfully', function(done) {
          // TODO: uncomment, update parameter values for deletePartner call
          /*

          instance.deletePartner(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getPartner', function() {
        it('should call getPartner successfully', function(done) {
          // TODO: uncomment, update parameter values for getPartner call and complete the assertions
          /*

          instance.getPartner(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BillingoApiV3.Partner);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('listPartner', function() {
        it('should call listPartner successfully', function(done) {
          // TODO: uncomment, update parameter values for listPartner call and complete the assertions
          /*
          var opts = {};

          instance.listPartner(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BillingoApiV3.PartnerList);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updatePartner', function() {
        it('should call updatePartner successfully', function(done) {
          // TODO: uncomment, update parameter values for updatePartner call and complete the assertions
          /*

          instance.updatePartner(body, id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BillingoApiV3.Partner);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
