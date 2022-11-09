# BillingoApiV3.SpendingApi

All URIs are relative to *https://api.billingo.hu/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**spendingDelete**](SpendingApi.md#spendingDelete) | **DELETE** /spendings/{id} | Deletes a spending.
[**spendingList**](SpendingApi.md#spendingList) | **GET** /spendings | Lists all spending
[**spendingSave**](SpendingApi.md#spendingSave) | **POST** /spendings | Creates a new spending.
[**spendingShow**](SpendingApi.md#spendingShow) | **GET** /spendings/{id} | Retrieves one specific spending.
[**spendingUpdate**](SpendingApi.md#spendingUpdate) | **PUT** /spendings/{id} | Updates a spending item.

<a name="spendingDelete"></a>
# **spendingDelete**
> spendingDelete(id)

Deletes a spending.

Deletes the spending identified by the ID given in path.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.SpendingApi();
let id = 56; // Number | 

apiInstance.spendingDelete(id, (error, data, response) => {
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

<a name="spendingList"></a>
# **spendingList**
> SpendingList spendingList(opts)

Lists all spending

Returns a list of your spending items, ordered by the due date.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.SpendingApi();
let opts = { 
  'q': "", // String | 
  'page': 1, // Number | 
  'perPage': 25, // Number | 
  'spendingDate': new BillingoApiV3.DateType(), // DateType | 
  'startDate': "startDate_example", // String | 
  'endDate': "endDate_example", // String | 
  'paymentStatus': new BillingoApiV3.PaymentStatusSpending(), // PaymentStatusSpending | 
  'spendingType': new BillingoApiV3.Source(), // Source | 
  'categories': new BillingoApiV3.Category(), // Category | 
  'currencies': new BillingoApiV3.Currency(), // Currency | 
  'paymentMethods': new BillingoApiV3.PaymentMethod() // PaymentMethod | 
};
apiInstance.spendingList(opts, (error, data, response) => {
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
 **q** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] [default to 1]
 **perPage** | **Number**|  | [optional] [default to 25]
 **spendingDate** | [**DateType**](.md)|  | [optional] 
 **startDate** | **String**|  | [optional] 
 **endDate** | **String**|  | [optional] 
 **paymentStatus** | [**PaymentStatusSpending**](.md)|  | [optional] 
 **spendingType** | [**Source**](.md)|  | [optional] 
 **categories** | [**Category**](.md)|  | [optional] 
 **currencies** | [**Currency**](.md)|  | [optional] 
 **paymentMethods** | [**PaymentMethod**](.md)|  | [optional] 

### Return type

[**SpendingList**](SpendingList.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="spendingSave"></a>
# **spendingSave**
> Spending spendingSave(opts)

Creates a new spending.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.SpendingApi();
let opts = { 
  'body': new BillingoApiV3.SpendingSave() // SpendingSave | 
};
apiInstance.spendingSave(opts, (error, data, response) => {
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
 **body** | [**SpendingSave**](SpendingSave.md)|  | [optional] 

### Return type

[**Spending**](Spending.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="spendingShow"></a>
# **spendingShow**
> Spending spendingShow(id)

Retrieves one specific spending.

Retrives the spending identified by the given ID in path.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.SpendingApi();
let id = 56; // Number | 

apiInstance.spendingShow(id, (error, data, response) => {
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

[**Spending**](Spending.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="spendingUpdate"></a>
# **spendingUpdate**
> Spending spendingUpdate(id, opts)

Updates a spending item.

Updates the spending item identified by the ID given in path.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.SpendingApi();
let id = 56; // Number | 
let opts = { 
  'body': new BillingoApiV3.SpendingSave() // SpendingSave | 
};
apiInstance.spendingUpdate(id, opts, (error, data, response) => {
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
 **body** | [**SpendingSave**](SpendingSave.md)|  | [optional] 

### Return type

[**Spending**](Spending.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

