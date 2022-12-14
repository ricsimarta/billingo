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
import {ApiClient} from '../ApiClient';
import {DocumentExportFilterExtra} from './DocumentExportFilterExtra';
import {DocumentExportOtherOptions} from './DocumentExportOtherOptions';
import {DocumentExportQueryType} from './DocumentExportQueryType';
import {DocumentExportSortBy} from './DocumentExportSortBy';
import {DocumentExportType} from './DocumentExportType';
import {PaymentMethod} from './PaymentMethod';

/**
 * The CreateDocumentExport model module.
 * @module model/CreateDocumentExport
 * @version 3.0.14
 */
export class CreateDocumentExport {
  /**
   * Constructs a new <code>CreateDocumentExport</code>.
   * @alias module:model/CreateDocumentExport
   * @class
   * @param queryType {module:model/DocumentExportQueryType} 
   * @param startDate {Date} 
   * @param endDate {Date} 
   * @param exportType {module:model/DocumentExportType} 
   */
  constructor(queryType, startDate, endDate, exportType) {
    this.queryType = queryType;
    this.startDate = startDate;
    this.endDate = endDate;
    this.exportType = exportType;
  }

  /**
   * Constructs a <code>CreateDocumentExport</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateDocumentExport} obj Optional instance to populate.
   * @return {module:model/CreateDocumentExport} The populated <code>CreateDocumentExport</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateDocumentExport();
      if (data.hasOwnProperty('query_type'))
        obj.queryType = DocumentExportQueryType.constructFromObject(data['query_type']);
      if (data.hasOwnProperty('start_date'))
        obj.startDate = ApiClient.convertToType(data['start_date'], 'Date');
      if (data.hasOwnProperty('end_date'))
        obj.endDate = ApiClient.convertToType(data['end_date'], 'Date');
      if (data.hasOwnProperty('document_block_id'))
        obj.documentBlockId = ApiClient.convertToType(data['document_block_id'], 'Number');
      if (data.hasOwnProperty('export_type'))
        obj.exportType = DocumentExportType.constructFromObject(data['export_type']);
      if (data.hasOwnProperty('number_start_year'))
        obj.numberStartYear = ApiClient.convertToType(data['number_start_year'], 'Number');
      if (data.hasOwnProperty('number_start_sequence'))
        obj.numberStartSequence = ApiClient.convertToType(data['number_start_sequence'], 'Number');
      if (data.hasOwnProperty('number_end_year'))
        obj.numberEndYear = ApiClient.convertToType(data['number_end_year'], 'Number');
      if (data.hasOwnProperty('number_end_sequence'))
        obj.numberEndSequence = ApiClient.convertToType(data['number_end_sequence'], 'Number');
      if (data.hasOwnProperty('payment_method'))
        obj.paymentMethod = PaymentMethod.constructFromObject(data['payment_method']);
      if (data.hasOwnProperty('sort_by'))
        obj.sortBy = DocumentExportSortBy.constructFromObject(data['sort_by']);
      if (data.hasOwnProperty('other_options'))
        obj.otherOptions = DocumentExportOtherOptions.constructFromObject(data['other_options']);
      if (data.hasOwnProperty('filter_extra'))
        obj.filterExtra = DocumentExportFilterExtra.constructFromObject(data['filter_extra']);
    }
    return obj;
  }
}

/**
 * @member {module:model/DocumentExportQueryType} queryType
 */
CreateDocumentExport.prototype.queryType = undefined;

/**
 * @member {Date} startDate
 */
CreateDocumentExport.prototype.startDate = undefined;

/**
 * @member {Date} endDate
 */
CreateDocumentExport.prototype.endDate = undefined;

/**
 * @member {Number} documentBlockId
 */
CreateDocumentExport.prototype.documentBlockId = undefined;

/**
 * @member {module:model/DocumentExportType} exportType
 */
CreateDocumentExport.prototype.exportType = undefined;

/**
 * @member {Number} numberStartYear
 */
CreateDocumentExport.prototype.numberStartYear = undefined;

/**
 * @member {Number} numberStartSequence
 */
CreateDocumentExport.prototype.numberStartSequence = undefined;

/**
 * @member {Number} numberEndYear
 */
CreateDocumentExport.prototype.numberEndYear = undefined;

/**
 * @member {Number} numberEndSequence
 */
CreateDocumentExport.prototype.numberEndSequence = undefined;

/**
 * @member {module:model/PaymentMethod} paymentMethod
 */
CreateDocumentExport.prototype.paymentMethod = undefined;

/**
 * @member {module:model/DocumentExportSortBy} sortBy
 */
CreateDocumentExport.prototype.sortBy = undefined;

/**
 * @member {module:model/DocumentExportOtherOptions} otherOptions
 */
CreateDocumentExport.prototype.otherOptions = undefined;

/**
 * @member {module:model/DocumentExportFilterExtra} filterExtra
 */
CreateDocumentExport.prototype.filterExtra = undefined;

