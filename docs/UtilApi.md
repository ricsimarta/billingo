# BillingoApiV3.UtilApi

All URIs are relative to *https://api.billingo.hu/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkTaxNumber**](UtilApi.md#checkTaxNumber) | **GET** /utils/check-tax-number/{tax_number} | Check tax number.
[**getId**](UtilApi.md#getId) | **GET** /utils/convert-legacy-id/{id} | Convert legacy ID to v3 ID.
[**getServerTime**](UtilApi.md#getServerTime) | **GET** /utils/time | Get the server time

<a name="checkTaxNumber"></a>
# **checkTaxNumber**
> TaxNumber checkTaxNumber(taxNumber)

Check tax number.

Check the given tax number format, and NAV validate.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.UtilApi();
let taxNumber = "taxNumber_example"; // String | 

apiInstance.checkTaxNumber(taxNumber, (error, data, response) => {
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
 **taxNumber** | **String**|  | 

### Return type

[**TaxNumber**](TaxNumber.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getId"></a>
# **getId**
> Id getId(id)

Convert legacy ID to v3 ID.

Retrieves the API v3 ID.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.UtilApi();
let id = 56; // Number | 

apiInstance.getId(id, (error, data, response) => {
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

[**Id**](Id.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getServerTime"></a>
# **getServerTime**
> ServerTime getServerTime()

Get the server time

Return the server time.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.UtilApi();
apiInstance.getServerTime((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ServerTime**](ServerTime.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

