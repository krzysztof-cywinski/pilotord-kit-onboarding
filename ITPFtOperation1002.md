# Solidity API

## ITPFtOperation1002

Interface responsible for allowing the settlement of a public offer involving tokenized Federal Public Title (TPFt).

### auctionPlacement

```solidity
function auctionPlacement(uint256 operationId, uint256 cnpj8Sender, uint256 cnpj8Receiver, enum ITPFtOperation.CallerPart callerPart, struct ITPFt.TPFtData tpftData, uint256 tpftAmount, uint256 unitPrice) external
```

Function to perform the settlement of a public offer.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| operationId | uint256 | Operation number + current date in yyyyMMdd format. |
| cnpj8Sender | uint256 | CNPJ8 of the operation assignor. In this operation it will always be the CNPJ8 of STN. |
| cnpj8Receiver | uint256 | CNPJ8 of the operation assignee. |
| callerPart | enum ITPFtOperation.CallerPart | Party transmitting the operation command. If it is the assignor, CallerPart.TPFtSender must be informed, if it is the assignee, CallerPart.TPFtReceiver must be informed. |
| tpftData | struct ITPFt.TPFtData | TPFt data structure, which includes the following information: <br />- `acronym`: The TPFt acronym. <br />- `code`: The unique TPFt code. <br />- `maturityDate`: The TPFt maturity date, represented as a numeric value (Unix timestamp). |
| tpftAmount | uint256 | Amount of TPFt to be traded. Include the 2 decimal places. |
| unitPrice | uint256 | Unit price of TPFt. Include the 8 decimal places. |
