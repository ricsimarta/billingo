# BillingoApiV3.ReceiptInsert

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vendorId** | **String** |  | [optional] 
**partnerId** | **Number** |  | [optional] 
**name** | **String** |  | [optional] 
**emails** | **[String]** |  | [optional] 
**blockId** | **Number** |  | 
**type** | [**DocumentType**](DocumentType.md) |  | 
**paymentMethod** | [**PaymentMethod**](PaymentMethod.md) |  | 
**currency** | [**Currency**](Currency.md) |  | 
**conversionRate** | **Number** |  | [optional] 
**electronic** | **Boolean** |  | [optional] [default to false]
**items** | **[OneOfReceiptInsertItemsItems]** |  | [optional] 
