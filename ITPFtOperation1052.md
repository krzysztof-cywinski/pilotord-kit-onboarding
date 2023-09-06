# Solidity API

## ITPFtOperation1052

Interface responsible for allowing participants registered in Real Digital to perform the purchase and sale operation involving tokenized Federal Public Title (TPFt) among themselves and/or clients.

### trade

```solidity
function trade(uint256 operationId, uint256 cnpj8Sender, uint256 cnpj8Receiver, enum ITPFtOperation.CallerPart callerPart, struct ITPFt.TPFtData tpftData, uint256 tpftAmount, uint256 unitPrice) external
```

Function for participants to perform the buy and sell operation between themselves, informing the CNPJ8s of the parties. The CNPJ8 identifies the default wallet of the party.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| operationId | uint256 | Operation number + current date in yyyyMMdd format. |
| cnpj8Sender | uint256 | CNPJ8 of the operation sender. |
| cnpj8Receiver | uint256 | CNPJ8 of the operation receiver. |
| callerPart | enum ITPFtOperation.CallerPart | The party transmitting the operation command. If it is the sender, CallerPart.TPFtSender should be informed, if it is the receiver, CallerPart.TPFtReceiver should be informed. |
| tpftData | struct ITPFt.TPFtData | TPFt data structure, which includes the following information: <br />- `acronym`: The TPFt acronym. <br />- `code`: The unique TPFt code. <br />- `maturityDate`: The TPFt maturity date, represented as a numeric value (Unix timestamp). |
| tpftAmount | uint256 | Amount of TPFt to be traded. Include the 2 decimal places. |
| unitPrice | uint256 | Unit price of TPFt. Include the 8 decimal places. |

### trade

```solidity
function trade(uint256 operationId, address sender, address receiver, enum ITPFtOperation.CallerPart callerPart, struct ITPFt.TPFtData tpftData, uint256 tpftAmount, uint256 unitPrice) external
```

Function for participants to perform the buy and sell operation between themselves, informing the wallet addresses of the parties.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| operationId | uint256 | Operation number + current date in yyyyMMdd format. |
| sender | address | Wallet address of the operation sender. |
| receiver | address | Wallet address of the operation receiver. |
| callerPart | enum ITPFtOperation.CallerPart | The party transmitting the operation command. If it is the sender, CallerPart.TPFtSender should be informed, if it is the receiver, CallerPart.TPFtReceiver should be informed. |
| tpftData | struct ITPFt.TPFtData | TPFt data structure, which includes the following information: <br />- `acronym`: The TPFt acronym. <br />- `code`: The unique TPFt code. <br />- `maturityDate`: The TPFt maturity date, represented as a numeric value (Unix timestamp). |
| tpftAmount | uint256 | Amount of TPFt to be traded. Include the 2 decimal places. |
| unitPrice | uint256 | Unit price of TPFt. Include the 8 decimal places. |