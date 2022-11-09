# BillingoApiV3.PartnerApi

All URIs are relative to *https://api.billingo.hu/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPartner**](PartnerApi.md#createPartner) | **POST** /partners | Create a partner
[**deletePartner**](PartnerApi.md#deletePartner) | **DELETE** /partners/{id} | Delete a partner
[**getPartner**](PartnerApi.md#getPartner) | **GET** /partners/{id} | Retrieve a partner
[**listPartner**](PartnerApi.md#listPartner) | **GET** /partners | List all partners
[**updatePartner**](PartnerApi.md#updatePartner) | **PUT** /partners/{id} | Update a partner

<a name="createPartner"></a>
# **createPartner**
> Partner createPartner(body)

Create a partner

Create a new partner. Returns a partner object if the create is succeded.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.PartnerApi();
let body = new BillingoApiV3.Partner(); // Partner | Partner object that you would like to store.

apiInstance.createPartner(body, (error, data, response) => {
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
 **body** | [**Partner**](Partner.md)| Partner object that you would like to store. | 

### Return type

[**Partner**](Partner.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePartner"></a>
# **deletePartner**
> deletePartner(id)

Delete a partner

Delete an existing partner.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.PartnerApi();
let id = 56; // Number | 

apiInstance.deletePartner(id, (error, data, response) => {
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

<a name="getPartner"></a>
# **getPartner**
> Partner getPartner(id)

Retrieve a partner

Retrieves the details of an existing partner.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.PartnerApi();
let id = 56; // Number | 

apiInstance.getPartner(id, (error, data, response) => {
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

[**Partner**](Partner.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listPartner"></a>
# **listPartner**
> PartnerList listPartner(opts)

List all partners

Returns a list of your partners. The partners are returned sorted by creation date, with the most recent partners appearing first.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.PartnerApi();
let opts = { 
  'page': 56, // Number | 
  'perPage': 25, // Number | 
  'query': "query_example" // String | 
};
apiInstance.listPartner(opts, (error, data, response) => {
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
 **query** | **String**|  | [optional] 

### Return type

[**PartnerList**](PartnerList.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updatePartner"></a>
# **updatePartner**
> Partner updatePartner(body, id)

Update a partner

Update an existing partner. Returns a partner object if the update is succeded.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.PartnerApi();
let body = new BillingoApiV3.Partner(); // Partner | Partner object that you would like to update.
let id = 56; // Number | 

apiInstance.updatePartner(body, id, (error, data, response) => {
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
 **body** | [**Partner**](Partner.md)| Partner object that you would like to update. | 
 **id** | **Number**|  | 

### Return type

[**Partner**](Partner.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

