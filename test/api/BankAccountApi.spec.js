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
    instance = new BillingoApiV3.BankAccountApi();
  });

  describe('(package)', function() {
    describe('BankAccountApi', function() {
      describe('createBankAccount', function() {
        it('should call createBankAccount successfully', function(done) {
          // TODO: uncomment, update parameter values for createBankAccount call and complete the assertions
          /*

          instance.createBankAccount(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BillingoApiV3.BankAccount);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteBankAccount', function() {
        it('should call deleteBankAccount successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteBankAccount call
          /*

          instance.deleteBankAccount(id, function(error, data, response) {
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
      describe('getBankAccount', function() {
        it('should call getBankAccount successfully', function(done) {
          // TODO: uncomment, update parameter values for getBankAccount call and complete the assertions
          /*

          instance.getBankAccount(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BillingoApiV3.BankAccount);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('listBankAccount', function() {
        it('should call listBankAccount successfully', function(done) {
          // TODO: uncomment, update parameter values for listBankAccount call and complete the assertions
          /*
          var opts = {};

          instance.listBankAccount(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BillingoApiV3.BankAccountList);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateBankAccount', function() {
        it('should call updateBankAccount successfully', function(done) {
          // TODO: uncomment, update parameter values for updateBankAccount call and complete the assertions
          /*

          instance.updateBankAccount(body, id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BillingoApiV3.BankAccount);

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
