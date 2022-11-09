# BillingoApiV3.Document

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The document&#x27;s unique identifier. | [optional] 
**invoiceNumber** | **String** | The document&#x27;s invoice number. | [optional] 
**type** | [**DocumentType**](DocumentType.md) |  | [optional] 
**cancelled** | **Boolean** |  | [optional] 
**blockId** | **Number** | DocumentBlock&#x27;s identifier. | [optional] 
**paymentStatus** | [**PaymentStatus**](PaymentStatus.md) |  | [optional] 
**paymentMethod** | [**PaymentMethod**](PaymentMethod.md) |  | [optional] 
**grossTotal** | **Number** | The document&#x27;s gross total price. | [optional] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**conversionRate** | **Number** |  | [optional] 
**invoiceDate** | **Date** |  | [optional] 
**fulfillmentDate** | **Date** |  | [optional] 
**dueDate** | **Date** |  | [optional] 
**paidDate** | **Date** |  | [optional] 
**organization** | [**DocumentOrganization**](DocumentOrganization.md) |  | [optional] 
**partner** | [**Partner**](Partner.md) |  | [optional] 
**documentPartner** | [**DocumentPartner**](DocumentPartner.md) |  | [optional] 
**electronic** | **Boolean** |  | [optional] 
**comment** | **String** |  | [optional] 
**tags** | **[String]** |  | [optional] 
**notificationStatus** | [**DocumentNotificationStatus**](DocumentNotificationStatus.md) |  | [optional] 
**language** | [**DocumentLanguage**](DocumentLanguage.md) |  | [optional] 
**items** | [**[DocumentItem]**](DocumentItem.md) |  | [optional] 
**summary** | [**DocumentSummary**](DocumentSummary.md) |  | [optional] 
**settings** | [**DocumentSettings**](DocumentSettings.md) |  | [optional] 
**onlineSzamlaStatus** | [**OnlineSzamlaStatusEnum**](OnlineSzamlaStatusEnum.md) |  | [optional] 
**relatedDocuments** | [**[DocumentAncestor]**](DocumentAncestor.md) |  | [optional] 
**discount** | [**Discount**](Discount.md) |  | [optional] 
**correctionType** | [**CorrectionType**](CorrectionType.md) |  | [optional] 