# BillingoApiV3.ProductApi

All URIs are relative to *https://api.billingo.hu/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProduct**](ProductApi.md#createProduct) | **POST** /products | Create a product
[**deleteProduct**](ProductApi.md#deleteProduct) | **DELETE** /products/{id} | Delete a product
[**getProduct**](ProductApi.md#getProduct) | **GET** /products/{id} | Retrieve a product
[**listProduct**](ProductApi.md#listProduct) | **GET** /products | List all product
[**updateProduct**](ProductApi.md#updateProduct) | **PUT** /products/{id} | Update a product

<a name="createProduct"></a>
# **createProduct**
> Product createProduct(body)

Create a product

Create a new product. Returns a product object if the create is succeded.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.ProductApi();
let body = new BillingoApiV3.Product(); // Product | Product object that you would like to store.

apiInstance.createProduct(body, (error, data, response) => {
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
 **body** | [**Product**](Product.md)| Product object that you would like to store. | 

### Return type

[**Product**](Product.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteProduct"></a>
# **deleteProduct**
> deleteProduct(id)

Delete a product

Delete an existing product.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.ProductApi();
let id = 56; // Number | 

apiInstance.deleteProduct(id, (error, data, response) => {
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

<a name="getProduct"></a>
# **getProduct**
> Product getProduct(id)

Retrieve a product

Retrieves the details of an existing product.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.ProductApi();
let id = 56; // Number | 

apiInstance.getProduct(id, (error, data, response) => {
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

[**Product**](Product.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listProduct"></a>
# **listProduct**
> ProductList listProduct(opts)

List all product

Returns a list of your products. The partners are returned sorted by creation date, with the most recent partners appearing first.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.ProductApi();
let opts = { 
  'page': 56, // Number | 
  'perPage': 25, // Number | 
  'query': "query_example" // String | 
};
apiInstance.listProduct(opts, (error, data, response) => {
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

[**ProductList**](ProductList.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateProduct"></a>
# **updateProduct**
> Product updateProduct(body, id)

Update a product

Update an existing product. Returns a product object if the update is succeded.

### Example
```javascript
import {BillingoApiV3} from 'billingo_api_v3';
let defaultClient = BillingoApiV3.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BillingoApiV3.ProductApi();
let body = new BillingoApiV3.Product(); // Product | Product object that you would like to update.
let id = 56; // Number | 

apiInstance.updateProduct(body, id, (error, data, response) => {
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
 **body** | [**Product**](Product.md)| Product object that you would like to update. | 
 **id** | **Number**|  | 

### Return type

[**Product**](Product.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

