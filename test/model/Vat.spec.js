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
    describe('Vat', function() {
      beforeEach(function() {
        instance = BillingoApiV3.Vat;
      });

      it('should create an instance of Vat', function() {
        // TODO: update the code to test Vat
        expect(instance).to.be.a('object');
      });

      it('should have the property _0', function() {
        expect(instance).to.have.property('_0');
        expect(instance._0).to.be("0%");
      });

      it('should have the property _1', function() {
        expect(instance).to.have.property('_1');
        expect(instance._1).to.be("1%");
      });

      it('should have the property _10', function() {
        expect(instance).to.have.property('_10');
        expect(instance._10).to.be("10%");
      });

      it('should have the property _11', function() {
        expect(instance).to.have.property('_11');
        expect(instance._11).to.be("11%");
      });

      it('should have the property _12', function() {
        expect(instance).to.have.property('_12');
        expect(instance._12).to.be("12%");
      });

      it('should have the property _13', function() {
        expect(instance).to.have.property('_13');
        expect(instance._13).to.be("13%");
      });

      it('should have the property _14', function() {
        expect(instance).to.have.property('_14');
        expect(instance._14).to.be("14%");
      });

      it('should have the property _15', function() {
        expect(instance).to.have.property('_15');
        expect(instance._15).to.be("15%");
      });

      it('should have the property _16', function() {
        expect(instance).to.have.property('_16');
        expect(instance._16).to.be("16%");
      });

      it('should have the property _17', function() {
        expect(instance).to.have.property('_17');
        expect(instance._17).to.be("17%");
      });

      it('should have the property _18', function() {
        expect(instance).to.have.property('_18');
        expect(instance._18).to.be("18%");
      });

      it('should have the property _19', function() {
        expect(instance).to.have.property('_19');
        expect(instance._19).to.be("19%");
      });

      it('should have the property _2', function() {
        expect(instance).to.have.property('_2');
        expect(instance._2).to.be("2%");
      });

      it('should have the property _20', function() {
        expect(instance).to.have.property('_20');
        expect(instance._20).to.be("20%");
      });

      it('should have the property _21', function() {
        expect(instance).to.have.property('_21');
        expect(instance._21).to.be("21%");
      });

      it('should have the property _22', function() {
        expect(instance).to.have.property('_22');
        expect(instance._22).to.be("22%");
      });

      it('should have the property _23', function() {
        expect(instance).to.have.property('_23');
        expect(instance._23).to.be("23%");
      });

      it('should have the property _24', function() {
        expect(instance).to.have.property('_24');
        expect(instance._24).to.be("24%");
      });

      it('should have the property _25', function() {
        expect(instance).to.have.property('_25');
        expect(instance._25).to.be("25%");
      });

      it('should have the property _26', function() {
        expect(instance).to.have.property('_26');
        expect(instance._26).to.be("26%");
      });

      it('should have the property _27', function() {
        expect(instance).to.have.property('_27');
        expect(instance._27).to.be("27%");
      });

      it('should have the property _3', function() {
        expect(instance).to.have.property('_3');
        expect(instance._3).to.be("3%");
      });

      it('should have the property _4', function() {
        expect(instance).to.have.property('_4');
        expect(instance._4).to.be("4%");
      });

      it('should have the property _5', function() {
        expect(instance).to.have.property('_5');
        expect(instance._5).to.be("5%");
      });

      it('should have the property _55', function() {
        expect(instance).to.have.property('_55');
        expect(instance._55).to.be("5,5%");
      });

      it('should have the property _6', function() {
        expect(instance).to.have.property('_6');
        expect(instance._6).to.be("6%");
      });

      it('should have the property _7', function() {
        expect(instance).to.have.property('_7');
        expect(instance._7).to.be("7%");
      });

      it('should have the property _77', function() {
        expect(instance).to.have.property('_77');
        expect(instance._77).to.be("7,7%");
      });

      it('should have the property _8', function() {
        expect(instance).to.have.property('_8');
        expect(instance._8).to.be("8%");
      });

      it('should have the property _9', function() {
        expect(instance).to.have.property('_9');
        expect(instance._9).to.be("9%");
      });

      it('should have the property _95', function() {
        expect(instance).to.have.property('_95');
        expect(instance._95).to.be("9,5%");
      });

      it('should have the property AAM', function() {
        expect(instance).to.have.property('AAM');
        expect(instance.AAM).to.be("AAM");
      });

      it('should have the property AM', function() {
        expect(instance).to.have.property('AM');
        expect(instance.AM).to.be("AM");
      });

      it('should have the property EU', function() {
        expect(instance).to.have.property('EU');
        expect(instance.EU).to.be("EU");
      });

      it('should have the property EUK', function() {
        expect(instance).to.have.property('EUK');
        expect(instance.EUK).to.be("EUK");
      });

      it('should have the property F_AFA', function() {
        expect(instance).to.have.property('F_AFA');
        expect(instance.F_AFA).to.be("F.AFA");
      });

      it('should have the property FAD', function() {
        expect(instance).to.have.property('FAD');
        expect(instance.FAD).to.be("FAD");
      });

      it('should have the property K_AFA', function() {
        expect(instance).to.have.property('K_AFA');
        expect(instance.K_AFA).to.be("K.AFA");
      });

      it('should have the property MAA', function() {
        expect(instance).to.have.property('MAA');
        expect(instance.MAA).to.be("MAA");
      });

      it('should have the property TAM', function() {
        expect(instance).to.have.property('TAM');
        expect(instance.TAM).to.be("TAM");
      });

      it('should have the property KK', function() {
        expect(instance).to.have.property('KK');
        expect(instance.KK).to.be("ÁKK");
      });

      it('should have the property THK', function() {
        expect(instance).to.have.property('THK');
        expect(instance.THK).to.be("ÁTHK");
      });

    });
  });

}));
