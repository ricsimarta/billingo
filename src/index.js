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
import {ApiClient} from './ApiClient';
import {Address} from './model/Address';
import {BankAccount} from './model/BankAccount';
import {BankAccountList} from './model/BankAccountList';
import {Category} from './model/Category';
import {CheckTaxNumberMessage} from './model/CheckTaxNumberMessage';
import {ClientError} from './model/ClientError';
import {ClientErrorResponse} from './model/ClientErrorResponse';
import {ConversationRate} from './model/ConversationRate';
import {CorrectionType} from './model/CorrectionType';
import {Country} from './model/Country';
import {CreateDocumentExport} from './model/CreateDocumentExport';
import {Currency} from './model/Currency';
import {DateType} from './model/DateType';
import {Discount} from './model/Discount';
import {DiscountType} from './model/DiscountType';
import {Document} from './model/Document';
import {DocumentAncestor} from './model/DocumentAncestor';
import {DocumentBankAccount} from './model/DocumentBankAccount';
import {DocumentBlock} from './model/DocumentBlock';
import {DocumentBlockList} from './model/DocumentBlockList';
import {DocumentBlockType} from './model/DocumentBlockType';
import {DocumentCancellation} from './model/DocumentCancellation';
import {DocumentExportFilterExtra} from './model/DocumentExportFilterExtra';
import {DocumentExportId} from './model/DocumentExportId';
import {DocumentExportOtherOptions} from './model/DocumentExportOtherOptions';
import {DocumentExportQueryType} from './model/DocumentExportQueryType';
import {DocumentExportSortBy} from './model/DocumentExportSortBy';
import {DocumentExportStatus} from './model/DocumentExportStatus';
import {DocumentExportStatusState} from './model/DocumentExportStatusState';
import {DocumentExportType} from './model/DocumentExportType';
import {DocumentForm} from './model/DocumentForm';
import {DocumentFormat} from './model/DocumentFormat';
import {DocumentInsert} from './model/DocumentInsert';
import {DocumentInsertType} from './model/DocumentInsertType';
import {DocumentItem} from './model/DocumentItem';
import {DocumentItemData} from './model/DocumentItemData';
import {DocumentLanguage} from './model/DocumentLanguage';
import {DocumentList} from './model/DocumentList';
import {DocumentNotificationStatus} from './model/DocumentNotificationStatus';
import {DocumentOrganization} from './model/DocumentOrganization';
import {DocumentPartner} from './model/DocumentPartner';
import {DocumentProductData} from './model/DocumentProductData';
import {DocumentPublicUrl} from './model/DocumentPublicUrl';
import {DocumentSettings} from './model/DocumentSettings';
import {DocumentSummary} from './model/DocumentSummary';
import {DocumentType} from './model/DocumentType';
import {DocumentVatRateSummary} from './model/DocumentVatRateSummary';
import {Entitlement} from './model/Entitlement';
import {Feature} from './model/Feature';
import {Id} from './model/Id';
import {InvoiceSettings} from './model/InvoiceSettings';
import {LedgerNumberInformation} from './model/LedgerNumberInformation';
import {ModificationDocumentInsert} from './model/ModificationDocumentInsert';
import {OneOfDocumentInsertItemsItems} from './model/OneOfDocumentInsertItemsItems';
import {OneOfModificationDocumentInsertItemsItems} from './model/OneOfModificationDocumentInsertItemsItems';
import {OneOfReceiptInsertItemsItems} from './model/OneOfReceiptInsertItemsItems';
import {OnlinePayment} from './model/OnlinePayment';
import {OnlineSzamlaStatus} from './model/OnlineSzamlaStatus';
import {OnlineSzamlaStatusEnum} from './model/OnlineSzamlaStatusEnum';
import {OnlineSzamlaStatusMessage} from './model/OnlineSzamlaStatusMessage';
import {OrganizationData} from './model/OrganizationData';
import {Partner} from './model/Partner';
import {PartnerCustomBillingSettings} from './model/PartnerCustomBillingSettings';
import {PartnerList} from './model/PartnerList';
import {PartnerTaxType} from './model/PartnerTaxType';
import {PaymentHistory} from './model/PaymentHistory';
import {PaymentMethod} from './model/PaymentMethod';
import {PaymentStatus} from './model/PaymentStatus';
import {PaymentStatusSpending} from './model/PaymentStatusSpending';
import {Product} from './model/Product';
import {ProductList} from './model/ProductList';
import {ReceiptInsert} from './model/ReceiptInsert';
import {ReceiptItemData} from './model/ReceiptItemData';
import {ReceiptProductData} from './model/ReceiptProductData';
import {Round} from './model/Round';
import {SendDocument} from './model/SendDocument';
import {ServerError} from './model/ServerError';
import {ServerErrorResponse} from './model/ServerErrorResponse';
import {ServerTime} from './model/ServerTime';
import {Source} from './model/Source';
import {Spending} from './model/Spending';
import {SpendingList} from './model/SpendingList';
import {SpendingListItem} from './model/SpendingListItem';
import {SpendingPartner} from './model/SpendingPartner';
import {SpendingPaymentMethod} from './model/SpendingPaymentMethod';
import {SpendingSave} from './model/SpendingSave';
import {Subscription} from './model/Subscription';
import {SubscriptionErrorResponse} from './model/SubscriptionErrorResponse';
import {TaxNumber} from './model/TaxNumber';
import {TooManyRequestsResponse} from './model/TooManyRequestsResponse';
import {UnitPriceType} from './model/UnitPriceType';
import {ValidationError} from './model/ValidationError';
import {ValidationErrorResponse} from './model/ValidationErrorResponse';
import {Vat} from './model/Vat';
import {BankAccountApi} from './api/BankAccountApi';
import {CurrencyApi} from './api/CurrencyApi';
import {DocumentApi} from './api/DocumentApi';
import {DocumentBlockApi} from './api/DocumentBlockApi';
import {DocumentExportApi} from './api/DocumentExportApi';
import {OrganizationApi} from './api/OrganizationApi';
import {PartnerApi} from './api/PartnerApi';
import {ProductApi} from './api/ProductApi';
import {SpendingApi} from './api/SpendingApi';
import {UtilApi} from './api/UtilApi';

/**
* This_is_a_Billingo_API_v3_documentation__Our_API_based_on_REST_software_architectural_style__API_has_resource_oriented_URLs_accepts_JSON_encoded_request_bodies_and_returns_JSON_encoded_responses__To_use_this_API_you_have_to_generate_a_new_API_key_on_our__site_httpsapp_billingo_huapi_key__After_that_you_can_test_your_API_key_on_this_page_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var BillingoApiV3 = require('index'); // See note below*.
* var xxxSvc = new BillingoApiV3.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new BillingoApiV3.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new BillingoApiV3.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new BillingoApiV3.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 3.0.14
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Address model constructor.
     * @property {module:model/Address}
     */
    Address,

    /**
     * The BankAccount model constructor.
     * @property {module:model/BankAccount}
     */
    BankAccount,

    /**
     * The BankAccountList model constructor.
     * @property {module:model/BankAccountList}
     */
    BankAccountList,

    /**
     * The Category model constructor.
     * @property {module:model/Category}
     */
    Category,

    /**
     * The CheckTaxNumberMessage model constructor.
     * @property {module:model/CheckTaxNumberMessage}
     */
    CheckTaxNumberMessage,

    /**
     * The ClientError model constructor.
     * @property {module:model/ClientError}
     */
    ClientError,

    /**
     * The ClientErrorResponse model constructor.
     * @property {module:model/ClientErrorResponse}
     */
    ClientErrorResponse,

    /**
     * The ConversationRate model constructor.
     * @property {module:model/ConversationRate}
     */
    ConversationRate,

    /**
     * The CorrectionType model constructor.
     * @property {module:model/CorrectionType}
     */
    CorrectionType,

    /**
     * The Country model constructor.
     * @property {module:model/Country}
     */
    Country,

    /**
     * The CreateDocumentExport model constructor.
     * @property {module:model/CreateDocumentExport}
     */
    CreateDocumentExport,

    /**
     * The Currency model constructor.
     * @property {module:model/Currency}
     */
    Currency,

    /**
     * The DateType model constructor.
     * @property {module:model/DateType}
     */
    DateType,

    /**
     * The Discount model constructor.
     * @property {module:model/Discount}
     */
    Discount,

    /**
     * The DiscountType model constructor.
     * @property {module:model/DiscountType}
     */
    DiscountType,

    /**
     * The Document model constructor.
     * @property {module:model/Document}
     */
    Document,

    /**
     * The DocumentAncestor model constructor.
     * @property {module:model/DocumentAncestor}
     */
    DocumentAncestor,

    /**
     * The DocumentBankAccount model constructor.
     * @property {module:model/DocumentBankAccount}
     */
    DocumentBankAccount,

    /**
     * The DocumentBlock model constructor.
     * @property {module:model/DocumentBlock}
     */
    DocumentBlock,

    /**
     * The DocumentBlockList model constructor.
     * @property {module:model/DocumentBlockList}
     */
    DocumentBlockList,

    /**
     * The DocumentBlockType model constructor.
     * @property {module:model/DocumentBlockType}
     */
    DocumentBlockType,

    /**
     * The DocumentCancellation model constructor.
     * @property {module:model/DocumentCancellation}
     */
    DocumentCancellation,

    /**
     * The DocumentExportFilterExtra model constructor.
     * @property {module:model/DocumentExportFilterExtra}
     */
    DocumentExportFilterExtra,

    /**
     * The DocumentExportId model constructor.
     * @property {module:model/DocumentExportId}
     */
    DocumentExportId,

    /**
     * The DocumentExportOtherOptions model constructor.
     * @property {module:model/DocumentExportOtherOptions}
     */
    DocumentExportOtherOptions,

    /**
     * The DocumentExportQueryType model constructor.
     * @property {module:model/DocumentExportQueryType}
     */
    DocumentExportQueryType,

    /**
     * The DocumentExportSortBy model constructor.
     * @property {module:model/DocumentExportSortBy}
     */
    DocumentExportSortBy,

    /**
     * The DocumentExportStatus model constructor.
     * @property {module:model/DocumentExportStatus}
     */
    DocumentExportStatus,

    /**
     * The DocumentExportStatusState model constructor.
     * @property {module:model/DocumentExportStatusState}
     */
    DocumentExportStatusState,

    /**
     * The DocumentExportType model constructor.
     * @property {module:model/DocumentExportType}
     */
    DocumentExportType,

    /**
     * The DocumentForm model constructor.
     * @property {module:model/DocumentForm}
     */
    DocumentForm,

    /**
     * The DocumentFormat model constructor.
     * @property {module:model/DocumentFormat}
     */
    DocumentFormat,

    /**
     * The DocumentInsert model constructor.
     * @property {module:model/DocumentInsert}
     */
    DocumentInsert,

    /**
     * The DocumentInsertType model constructor.
     * @property {module:model/DocumentInsertType}
     */
    DocumentInsertType,

    /**
     * The DocumentItem model constructor.
     * @property {module:model/DocumentItem}
     */
    DocumentItem,

    /**
     * The DocumentItemData model constructor.
     * @property {module:model/DocumentItemData}
     */
    DocumentItemData,

    /**
     * The DocumentLanguage model constructor.
     * @property {module:model/DocumentLanguage}
     */
    DocumentLanguage,

    /**
     * The DocumentList model constructor.
     * @property {module:model/DocumentList}
     */
    DocumentList,

    /**
     * The DocumentNotificationStatus model constructor.
     * @property {module:model/DocumentNotificationStatus}
     */
    DocumentNotificationStatus,

    /**
     * The DocumentOrganization model constructor.
     * @property {module:model/DocumentOrganization}
     */
    DocumentOrganization,

    /**
     * The DocumentPartner model constructor.
     * @property {module:model/DocumentPartner}
     */
    DocumentPartner,

    /**
     * The DocumentProductData model constructor.
     * @property {module:model/DocumentProductData}
     */
    DocumentProductData,

    /**
     * The DocumentPublicUrl model constructor.
     * @property {module:model/DocumentPublicUrl}
     */
    DocumentPublicUrl,

    /**
     * The DocumentSettings model constructor.
     * @property {module:model/DocumentSettings}
     */
    DocumentSettings,

    /**
     * The DocumentSummary model constructor.
     * @property {module:model/DocumentSummary}
     */
    DocumentSummary,

    /**
     * The DocumentType model constructor.
     * @property {module:model/DocumentType}
     */
    DocumentType,

    /**
     * The DocumentVatRateSummary model constructor.
     * @property {module:model/DocumentVatRateSummary}
     */
    DocumentVatRateSummary,

    /**
     * The Entitlement model constructor.
     * @property {module:model/Entitlement}
     */
    Entitlement,

    /**
     * The Feature model constructor.
     * @property {module:model/Feature}
     */
    Feature,

    /**
     * The Id model constructor.
     * @property {module:model/Id}
     */
    Id,

    /**
     * The InvoiceSettings model constructor.
     * @property {module:model/InvoiceSettings}
     */
    InvoiceSettings,

    /**
     * The LedgerNumberInformation model constructor.
     * @property {module:model/LedgerNumberInformation}
     */
    LedgerNumberInformation,

    /**
     * The ModificationDocumentInsert model constructor.
     * @property {module:model/ModificationDocumentInsert}
     */
    ModificationDocumentInsert,

    /**
     * The OneOfDocumentInsertItemsItems model constructor.
     * @property {module:model/OneOfDocumentInsertItemsItems}
     */
    OneOfDocumentInsertItemsItems,

    /**
     * The OneOfModificationDocumentInsertItemsItems model constructor.
     * @property {module:model/OneOfModificationDocumentInsertItemsItems}
     */
    OneOfModificationDocumentInsertItemsItems,

    /**
     * The OneOfReceiptInsertItemsItems model constructor.
     * @property {module:model/OneOfReceiptInsertItemsItems}
     */
    OneOfReceiptInsertItemsItems,

    /**
     * The OnlinePayment model constructor.
     * @property {module:model/OnlinePayment}
     */
    OnlinePayment,

    /**
     * The OnlineSzamlaStatus model constructor.
     * @property {module:model/OnlineSzamlaStatus}
     */
    OnlineSzamlaStatus,

    /**
     * The OnlineSzamlaStatusEnum model constructor.
     * @property {module:model/OnlineSzamlaStatusEnum}
     */
    OnlineSzamlaStatusEnum,

    /**
     * The OnlineSzamlaStatusMessage model constructor.
     * @property {module:model/OnlineSzamlaStatusMessage}
     */
    OnlineSzamlaStatusMessage,

    /**
     * The OrganizationData model constructor.
     * @property {module:model/OrganizationData}
     */
    OrganizationData,

    /**
     * The Partner model constructor.
     * @property {module:model/Partner}
     */
    Partner,

    /**
     * The PartnerCustomBillingSettings model constructor.
     * @property {module:model/PartnerCustomBillingSettings}
     */
    PartnerCustomBillingSettings,

    /**
     * The PartnerList model constructor.
     * @property {module:model/PartnerList}
     */
    PartnerList,

    /**
     * The PartnerTaxType model constructor.
     * @property {module:model/PartnerTaxType}
     */
    PartnerTaxType,

    /**
     * The PaymentHistory model constructor.
     * @property {module:model/PaymentHistory}
     */
    PaymentHistory,

    /**
     * The PaymentMethod model constructor.
     * @property {module:model/PaymentMethod}
     */
    PaymentMethod,

    /**
     * The PaymentStatus model constructor.
     * @property {module:model/PaymentStatus}
     */
    PaymentStatus,

    /**
     * The PaymentStatusSpending model constructor.
     * @property {module:model/PaymentStatusSpending}
     */
    PaymentStatusSpending,

    /**
     * The Product model constructor.
     * @property {module:model/Product}
     */
    Product,

    /**
     * The ProductList model constructor.
     * @property {module:model/ProductList}
     */
    ProductList,

    /**
     * The ReceiptInsert model constructor.
     * @property {module:model/ReceiptInsert}
     */
    ReceiptInsert,

    /**
     * The ReceiptItemData model constructor.
     * @property {module:model/ReceiptItemData}
     */
    ReceiptItemData,

    /**
     * The ReceiptProductData model constructor.
     * @property {module:model/ReceiptProductData}
     */
    ReceiptProductData,

    /**
     * The Round model constructor.
     * @property {module:model/Round}
     */
    Round,

    /**
     * The SendDocument model constructor.
     * @property {module:model/SendDocument}
     */
    SendDocument,

    /**
     * The ServerError model constructor.
     * @property {module:model/ServerError}
     */
    ServerError,

    /**
     * The ServerErrorResponse model constructor.
     * @property {module:model/ServerErrorResponse}
     */
    ServerErrorResponse,

    /**
     * The ServerTime model constructor.
     * @property {module:model/ServerTime}
     */
    ServerTime,

    /**
     * The Source model constructor.
     * @property {module:model/Source}
     */
    Source,

    /**
     * The Spending model constructor.
     * @property {module:model/Spending}
     */
    Spending,

    /**
     * The SpendingList model constructor.
     * @property {module:model/SpendingList}
     */
    SpendingList,

    /**
     * The SpendingListItem model constructor.
     * @property {module:model/SpendingListItem}
     */
    SpendingListItem,

    /**
     * The SpendingPartner model constructor.
     * @property {module:model/SpendingPartner}
     */
    SpendingPartner,

    /**
     * The SpendingPaymentMethod model constructor.
     * @property {module:model/SpendingPaymentMethod}
     */
    SpendingPaymentMethod,

    /**
     * The SpendingSave model constructor.
     * @property {module:model/SpendingSave}
     */
    SpendingSave,

    /**
     * The Subscription model constructor.
     * @property {module:model/Subscription}
     */
    Subscription,

    /**
     * The SubscriptionErrorResponse model constructor.
     * @property {module:model/SubscriptionErrorResponse}
     */
    SubscriptionErrorResponse,

    /**
     * The TaxNumber model constructor.
     * @property {module:model/TaxNumber}
     */
    TaxNumber,

    /**
     * The TooManyRequestsResponse model constructor.
     * @property {module:model/TooManyRequestsResponse}
     */
    TooManyRequestsResponse,

    /**
     * The UnitPriceType model constructor.
     * @property {module:model/UnitPriceType}
     */
    UnitPriceType,

    /**
     * The ValidationError model constructor.
     * @property {module:model/ValidationError}
     */
    ValidationError,

    /**
     * The ValidationErrorResponse model constructor.
     * @property {module:model/ValidationErrorResponse}
     */
    ValidationErrorResponse,

    /**
     * The Vat model constructor.
     * @property {module:model/Vat}
     */
    Vat,

    /**
    * The BankAccountApi service constructor.
    * @property {module:api/BankAccountApi}
    */
    BankAccountApi,

    /**
    * The CurrencyApi service constructor.
    * @property {module:api/CurrencyApi}
    */
    CurrencyApi,

    /**
    * The DocumentApi service constructor.
    * @property {module:api/DocumentApi}
    */
    DocumentApi,

    /**
    * The DocumentBlockApi service constructor.
    * @property {module:api/DocumentBlockApi}
    */
    DocumentBlockApi,

    /**
    * The DocumentExportApi service constructor.
    * @property {module:api/DocumentExportApi}
    */
    DocumentExportApi,

    /**
    * The OrganizationApi service constructor.
    * @property {module:api/OrganizationApi}
    */
    OrganizationApi,

    /**
    * The PartnerApi service constructor.
    * @property {module:api/PartnerApi}
    */
    PartnerApi,

    /**
    * The ProductApi service constructor.
    * @property {module:api/ProductApi}
    */
    ProductApi,

    /**
    * The SpendingApi service constructor.
    * @property {module:api/SpendingApi}
    */
    SpendingApi,

    /**
    * The UtilApi service constructor.
    * @property {module:api/UtilApi}
    */
    UtilApi
};
