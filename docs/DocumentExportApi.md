# BillingoApiV3.DocumentExportApi

All URIs are relative to *https://api.billingo.hu/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](DocumentExportApi.md#create) | **POST** /document-export | Create document export.
[**download**](DocumentExportApi.md#download) | **GET** /document-export/{id}/download | Return exported binary file.
[**poll**](DocumentExportApi.md#poll) | **GET** /document-export/{id}/poll | Retrieve export state.

<a name="create"></a>
# **create**
> DocumentExportId create(body)

Create document export.

Return with the id of the export.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.DocumentExportApi();
let body = new BillingoApiV3.CreateDocumentExport(); // CreateDocumentExport | Create document export body.

apiInstance.create(body, (error, data, response) => {
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
 **body** | [**CreateDocumentExport**](CreateDocumentExport.md)| Create document export body. | 

### Return type

[**DocumentExportId**](DocumentExportId.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="download"></a>
# **download**
> &#x27;Blob&#x27; download(id)

Return exported binary file.

Return the exported file.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.DocumentExportApi();
let id = "id_example"; // String | The ID from create document export endpoint.

apiInstance.download(id, (error, data, response) => {
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
 **id** | **String**| The ID from create document export endpoint. | 

### Return type

**&#x27;Blob&#x27;**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/_*, application/json

<a name="poll"></a>
# **poll**
> DocumentExportStatus poll(id)

Retrieve export state.

Return state of the given export.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.DocumentExportApi();
let id = "id_example"; // String | The ID from create document export endpoint.

apiInstance.poll(id, (error, data, response) => {
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
 **id** | **String**| The ID from create document export endpoint. | 

### Return type

[**DocumentExportStatus**](DocumentExportStatus.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

