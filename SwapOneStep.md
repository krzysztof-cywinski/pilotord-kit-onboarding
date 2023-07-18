# Solidity API

## SwapOneStep

This contract implements the exchange of Real Tokenizado between two distinct participants.

The exchange destroys Real Tokenizado from the paying client, transfers Real Digital from the paying participant to the receiving participant and emits Real Tokenizado to the receiving client.

All steps of this _swap_ operation are performed in a single transaction.


### CBDC

```solidity
contract RealDigital CBDC
```

Reference to the contract for the movement of Real Digital to be made.


### SwapExecuted

```solidity
event SwapExecuted(uint256 senderNumber, uint256 receiverNumber, address sender, address receiver, uint256 amount)
```

_Swap_ event executed.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| senderNumber | uint256 | The CNPJ8 of the payer |
| receiverNumber | uint256 | The CNPJ8 of the receiver |
| sender | address | The payer's wallet |
| receiver | address | The receiver's wallet |
| amount | uint256 | The value that was moved |

### constructor

```solidity
constructor(contract RealDigital _CBDC) public
```

Builds an instance of the contract and stores the address of the Real Digital contract.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _CBDC | contract RealDigital | Address of the Real Digital contract |



### executeSwap

```solidity
function executeSwap(contract RealTokenizado tokenSender, contract RealTokenizado tokenReceiver, address receiver, uint256 amount) public
```

Transfers Real Tokenizado from the paying client to the receiver. The paying client is identified by the wallet that is executing this function.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tokenSender | contract RealTokenizado | The address of the Real Tokenizado contract of the paying participant |
| tokenReceiver | contract RealTokenizado | The address of the Real Tokenizado contract of the receiving participant |
| receiver | address | The address of the receiving client |
| amount | uint256 | The value to be moved |
