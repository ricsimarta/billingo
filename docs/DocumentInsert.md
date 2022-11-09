# BillingoApiV3.DocumentInsert

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vendorId** | **String** |  | [optional] 
**partnerId** | **Number** |  | 
**blockId** | **Number** |  | 
**bankAccountId** | **Number** |  | [optional] 
**type** | [**DocumentInsertType**](DocumentInsertType.md) |  | 
**fulfillmentDate** | **Date** |  | 
**dueDate** | **Date** |  | 
**paymentMethod** | [**PaymentMethod**](PaymentMethod.md) |  | 
**language** | [**DocumentLanguage**](DocumentLanguage.md) |  | 
**currency** | [**Currency**](Currency.md) |  | 
**conversionRate** | **Number** |  | [optional] 
**electronic** | **Boolean** |  | [optional] [default to false]
**paid** | **Boolean** |  | [optional] [default to false]
**items** | **[OneOfDocumentInsertItemsItems]** |  | [optional] 
**comment** | **String** |  | [optional] 
**settings** | [**DocumentSettings**](DocumentSettings.md) |  | [optional] 
**advanceInvoice** | **[Number]** |  | [optional] 
**discount** | [**Discount**](Discount.md) |  | [optional] 
**instantPayment** | **Boolean** |  | [optional] 
