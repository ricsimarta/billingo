# BillingoApiV3.Partner

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**name** | **String** |  | [optional] 
**address** | [**Address**](Address.md) |  | [optional] 
**emails** | **[String]** |  | [optional] 
**taxcode** | **String** |  | [optional] 
**iban** | **String** |  | [optional] 
**swift** | **String** |  | [optional] 
**accountNumber** | **String** |  | [optional] 
**phone** | **String** |  | [optional] 
**generalLedgerNumber** | **String** |  | [optional] 
**taxType** | [**PartnerTaxType**](PartnerTaxType.md) |  | [optional] 
**customBillingSettings** | [**PartnerCustomBillingSettings**](PartnerCustomBillingSettings.md) |  | [optional] 
**groupMemberTaxNumber** | **String** | The tax number of group member. Send tax number for update. Send empty string for delete. Ignored if omitted. | [optional] 
