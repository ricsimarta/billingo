# BillingoApiV3.DocumentApi

All URIs are relative to *https://api.billingo.hu/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**archiveDocument**](DocumentApi.md#archiveDocument) | **PUT** /documents/{id}/archive | Archive a proforma document.
[**cancelDocument**](DocumentApi.md#cancelDocument) | **POST** /documents/{id}/cancel | Cancel a document
[**createDocument**](DocumentApi.md#createDocument) | **POST** /documents | Create a document
[**createDocumentFromDraft**](DocumentApi.md#createDocumentFromDraft) | **PUT** /documents/{id} | Converts a draft to an invoice.
[**createDocumentFromProforma**](DocumentApi.md#createDocumentFromProforma) | **POST** /documents/{id}/create-from-proforma | Create a document from proforma.
[**createModificationDocument**](DocumentApi.md#createModificationDocument) | **POST** /documents/{id}/create-modification-document | Create a modification document.
[**createReceipt**](DocumentApi.md#createReceipt) | **POST** /documents/receipt | Create a receipt
[**createReceiptFromDraft**](DocumentApi.md#createReceiptFromDraft) | **PUT** /documents/receipt/{id} | Converts a draft to a receipt.
[**deleteDocument**](DocumentApi.md#deleteDocument) | **DELETE** /documents/{id} | Delete a draft.
[**deletePayment**](DocumentApi.md#deletePayment) | **DELETE** /documents/{id}/payments | Delete all payment history on document
[**documentCopy**](DocumentApi.md#documentCopy) | **POST** /documents/{id}/copy | Copy a document
[**downloadDocument**](DocumentApi.md#downloadDocument) | **GET** /documents/{id}/download | Download a document in PDF format.
[**getDocument**](DocumentApi.md#getDocument) | **GET** /documents/{id} | Retrieve a document
[**getDocumentByVendorId**](DocumentApi.md#getDocumentByVendorId) | **GET** /documents/vendor/{vendor_id} | Retrieve a document by vendor id
[**getOnlineSzamlaStatus**](DocumentApi.md#getOnlineSzamlaStatus) | **GET** /documents/{id}/online-szamla | Retrieve a document Online Számla status
[**getPayment**](DocumentApi.md#getPayment) | **GET** /documents/{id}/payments | Retrieve a payment histroy
[**getPublicUrl**](DocumentApi.md#getPublicUrl) | **GET** /documents/{id}/public-url | Retrieve a document download public url.
[**listDocument**](DocumentApi.md#listDocument) | **GET** /documents | List all documents
[**posPrint**](DocumentApi.md#posPrint) | **GET** /documents/{id}/print/pos | Returns a printable POS PDF
[**sendDocument**](DocumentApi.md#sendDocument) | **POST** /documents/{id}/send | Send invoice to given email adresses.
[**updatePayment**](DocumentApi.md#updatePayment) | **PUT** /documents/{id}/payments | Update payment history

<a name="archiveDocument"></a>
# **archiveDocument**
> archiveDocument(id)

Archive a proforma document.

Archive an existing proforma document.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.DocumentApi();
let id = 56; // Number | 

apiInstance.archiveDocument(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cancelDocument"></a>
# **cancelDocument**
> Document cancelDocument(id, opts)

Cancel a document

Cancel a document. Returns a cancellation document object if the cancellation is succeded.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.DocumentApi();
let id = 56; // Number | 
let opts = { 
  'body': new BillingoApiV3.DocumentCancellation() // DocumentCancellation | Comment and notifiable email addresses - comma separated for multiple email addresses
};
apiInstance.cancelDocument(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **body** | [**DocumentCancellation**](DocumentCancellation.md)| Comment and notifiable email addresses - comma separated for multiple email addresses | [optional] 

### Return type

[**Document**](Document.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createDocument"></a>
# **createDocument**
> Document createDocument(body)

Create a document

Create a new document. Returns a document object if the create is succeded.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.DocumentApi();
let body = new BillingoApiV3.DocumentInsert(); // DocumentInsert | DocumentInsert object that you would like to store.

apiInstance.createDocument(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DocumentInsert**](DocumentInsert.md)| DocumentInsert object that you would like to store. | 

### Return type

[**Document**](Document.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createDocumentFromDraft"></a>
# **createDocumentFromDraft**
> Document createDocumentFromDraft(body, id)

Converts a draft to an invoice.

Converts a draft to an invoice. Returns the invoice object if the convert is succeded.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.DocumentApi();
let body = new BillingoApiV3.DocumentInsert(); // DocumentInsert | DocumentInsert object that you would like to store.
let id = 56; // Number | 

apiInstance.createDocumentFromDraft(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DocumentInsert**](DocumentInsert.md)| DocumentInsert object that you would like to store. | 
 **id** | **Number**|  | 

### Return type

[**Document**](Document.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createDocumentFromProforma"></a>
# **createDocumentFromProforma**
> Document createDocumentFromProforma(id, opts)

Create a document from proforma.

Create a new document from proforma. Returns a document object if the create is succeded.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.DocumentApi();
let id = 56; // Number | 
let opts = { 
  'body': new BillingoApiV3.InvoiceSettings() // InvoiceSettings | InvoiceSettings object.
};
apiInstance.createDocumentFromProforma(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **body** | [**InvoiceSettings**](InvoiceSettings.md)| InvoiceSettings object. | [optional] 

### Return type

[**Document**](Document.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createModificationDocument"></a>
# **createModificationDocument**
> Document createModificationDocument(body, id)

Create a modification document.

Create a modification document for the given document. Returns a new document object if the create is successful.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.DocumentApi();
let body = new BillingoApiV3.ModificationDocumentInsert(); // ModificationDocumentInsert | ModificationDocumentInsert object that you would like to store.
let id = 56; // Number | 

apiInstance.createModificationDocument(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ModificationDocumentInsert**](ModificationDocumentInsert.md)| ModificationDocumentInsert object that you would like to store. | 
 **id** | **Number**|  | 

### Return type

[**Document**](Document.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createReceipt"></a>
# **createReceipt**
> Document createReceipt(body)

Create a receipt

Create a new receipt. Returns a document object if the create is succeded.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.DocumentApi();
let body = new BillingoApiV3.ReceiptInsert(); // ReceiptInsert | ReceiptInsert object that you would like to store.

apiInstance.createReceipt(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ReceiptInsert**](ReceiptInsert.md)| ReceiptInsert object that you would like to store. | 

### Return type

[**Document**](Document.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createReceiptFromDraft"></a>
# **createReceiptFromDraft**
> Document createReceiptFromDraft(body, id)

Converts a draft to a receipt.

Converts a draft to a receipt. Returns the receipt object if the convert is succeded.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.DocumentApi();
let body = new BillingoApiV3.ReceiptInsert(); // ReceiptInsert | ReceiptInsert object that you would like to store.
let id = 56; // Number | 

apiInstance.createReceiptFromDraft(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ReceiptInsert**](ReceiptInsert.md)| ReceiptInsert object that you would like to store. | 
 **id** | **Number**|  | 

### Return type

[**Document**](Document.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDocument"></a>
# **deleteDocument**
> deleteDocument(id)

Delete a draft.

Delete an existing draft.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.DocumentApi();
let id = 56; // Number | 

apiInstance.deleteDocument(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletePayment"></a>
# **deletePayment**
> [PaymentHistory] deletePayment(id)

Delete all payment history on document

Delete all exist payment history on document.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.DocumentApi();
let id = 56; // Number | 

apiInstance.deletePayment(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**[PaymentHistory]**](PaymentHistory.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="documentCopy"></a>
# **documentCopy**
> Document documentCopy(id)

Copy a document

Copy a document. Returns the new document if the copy was succeded.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.DocumentApi();
let id = 56; // Number | 

apiInstance.documentCopy(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**Document**](Document.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="downloadDocument"></a>
# **downloadDocument**
> &#x27;Blob&#x27; downloadDocument(id)

Download a document in PDF format.

Download a document. Returns a document in PDF format.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.DocumentApi();
let id = 56; // Number | 

apiInstance.downloadDocument(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

**&#x27;Blob&#x27;**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/json

<a name="getDocument"></a>
# **getDocument**
> Document getDocument(id)

Retrieve a document

Retrieves the details of an existing document.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.DocumentApi();
let id = 56; // Number | 

apiInstance.getDocument(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**Document**](Document.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDocumentByVendorId"></a>
# **getDocumentByVendorId**
> Document getDocumentByVendorId(vendorId)

Retrieve a document by vendor id

Retrieves the details of an existing document by vendor id.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.DocumentApi();
let vendorId = "vendorId_example"; // String | 

apiInstance.getDocumentByVendorId(vendorId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vendorId** | **String**|  | 

### Return type

[**Document**](Document.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOnlineSzamlaStatus"></a>
# **getOnlineSzamlaStatus**
> OnlineSzamlaStatus getOnlineSzamlaStatus(id)

Retrieve a document Online Számla status

Retrieves the details of an existing document status.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.DocumentApi();
let id = 56; // Number | 

apiInstance.getOnlineSzamlaStatus(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**OnlineSzamlaStatus**](OnlineSzamlaStatus.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPayment"></a>
# **getPayment**
> [PaymentHistory] getPayment(id)

Retrieve a payment histroy

Retrieves the details of payment history an existing document.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.DocumentApi();
let id = 56; // Number | 

apiInstance.getPayment(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**[PaymentHistory]**](PaymentHistory.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPublicUrl"></a>
# **getPublicUrl**
> DocumentPublicUrl getPublicUrl(id)

Retrieve a document download public url.

Retrieves public url to download an existing document.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.DocumentApi();
let id = 56; // Number | 

apiInstance.getPublicUrl(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**DocumentPublicUrl**](DocumentPublicUrl.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listDocument"></a>
# **listDocument**
> DocumentList listDocument(opts)

List all documents

Returns a list of your documents. The documents are returned sorted by creation date, with the most recent documents appearing first.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.DocumentApi();
let opts = { 
  'page': 56, // Number | 
  'perPage': 25, // Number | 
  'blockId': 56, // Number | Filter documents by the identifier of your DocumentBlock.
  'partnerId': 56, // Number | Filter documents by the identifier of your Partner.
  'paymentMethod': new BillingoApiV3.PaymentMethod(), // PaymentMethod | Filter documents by PaymentMethod value.
  'paymentStatus': new BillingoApiV3.PaymentStatus(), // PaymentStatus | Filter documents by PaymentStatus value.
  'startDate': new Date("2013-10-20"), // Date | Filter documents by their invoice date.
  'endDate': new Date("2013-10-20"), // Date | Filter documents by their invoice date.
  'startNumber': 56, // Number | Starting number of the document, should not contain year or any other formatting. Required if `start_year` given
  'endNumber': 56, // Number | Ending number of the document, should not contain year or any other formatting. Required if `end_year` given
  'startYear': 56, // Number | Year for `start_number` parameter. Required if `start_number` given.
  'endYear': 56, // Number | Year for `end_number` parameter. Required if `end_number` given.
  'type': new BillingoApiV3.DocumentType(), // DocumentType | Filter documents by type
  'query': "query_example", // String | Filter documents by the given text
  'paidStartDate': new Date("2013-10-20"), // Date | Filter documents by their payment date.
  'paidEndDate': new Date("2013-10-20"), // Date | Filter documents by their payment date.
  'fulfillmentStartDate': new Date("2013-10-20"), // Date | Filter documents by their fulfillment date.
  'fulfillmentEndDate': new Date("2013-10-20"), // Date | Filter documents by their fulfillment date.
  'lastModifiedDate': "lastModifiedDate_example" // String | Filter documents by their last modified date.
};
apiInstance.listDocument(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **perPage** | **Number**|  | [optional] [default to 25]
 **blockId** | **Number**| Filter documents by the identifier of your DocumentBlock. | [optional] 
 **partnerId** | **Number**| Filter documents by the identifier of your Partner. | [optional] 
 **paymentMethod** | [**PaymentMethod**](.md)| Filter documents by PaymentMethod value. | [optional] 
 **paymentStatus** | [**PaymentStatus**](.md)| Filter documents by PaymentStatus value. | [optional] 
 **startDate** | **Date**| Filter documents by their invoice date. | [optional] 
 **endDate** | **Date**| Filter documents by their invoice date. | [optional] 
 **startNumber** | **Number**| Starting number of the document, should not contain year or any other formatting. Required if &#x60;start_year&#x60; given | [optional] 
 **endNumber** | **Number**| Ending number of the document, should not contain year or any other formatting. Required if &#x60;end_year&#x60; given | [optional] 
 **startYear** | **Number**| Year for &#x60;start_number&#x60; parameter. Required if &#x60;start_number&#x60; given. | [optional] 
 **endYear** | **Number**| Year for &#x60;end_number&#x60; parameter. Required if &#x60;end_number&#x60; given. | [optional] 
 **type** | [**DocumentType**](.md)| Filter documents by type | [optional] 
 **query** | **String**| Filter documents by the given text | [optional] 
 **paidStartDate** | **Date**| Filter documents by their payment date. | [optional] 
 **paidEndDate** | **Date**| Filter documents by their payment date. | [optional] 
 **fulfillmentStartDate** | **Date**| Filter documents by their fulfillment date. | [optional] 
 **fulfillmentEndDate** | **Date**| Filter documents by their fulfillment date. | [optional] 
 **lastModifiedDate** | **String**| Filter documents by their last modified date. | [optional] 

### Return type

[**DocumentList**](DocumentList.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="posPrint"></a>
# **posPrint**
> &#x27;Blob&#x27; posPrint(id, size)

Returns a printable POS PDF

Returns a printable POS PDF file of a particular document.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.DocumentApi();
let id = 56; // Number | 
let size = 3.4; // Number | In which size the POS PDF should be rendered.

apiInstance.posPrint(id, size, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **size** | [**Number**](.md)| In which size the POS PDF should be rendered. | 

### Return type

**&#x27;Blob&#x27;**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/json

<a name="sendDocument"></a>
# **sendDocument**
> SendDocument sendDocument(id, opts)

Send invoice to given email adresses.

Returns a list of emails, where the invoice is sent.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.DocumentApi();
let id = 56; // Number | 
let opts = { 
  'body': new BillingoApiV3.SendDocument() // SendDocument | List of email-s where you want to send the invoice.
};
apiInstance.sendDocument(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **body** | [**SendDocument**](SendDocument.md)| List of email-s where you want to send the invoice. | [optional] 

### Return type

[**SendDocument**](SendDocument.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatePayment"></a>
# **updatePayment**
> [PaymentHistory] updatePayment(body, id)

Update payment history

Update payment history an existing document. Returns a payment history object if the update is succeded.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.DocumentApi();
let body = [new BillingoApiV3.PaymentHistory()]; // [PaymentHistory] | Payment history object that you would like to update.
let id = 56; // Number | 

apiInstance.updatePayment(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[PaymentHistory]**](PaymentHistory.md)| Payment history object that you would like to update. | 
 **id** | **Number**|  | 

### Return type

[**[PaymentHistory]**](PaymentHistory.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

