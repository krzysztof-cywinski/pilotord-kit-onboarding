# Solidity API

## SwapTwoSteps

This contract implements the exchange of Real Tokenizado between two distinct participants.

The exchange destroys Real Tokenizado from the paying client, transfers Real Digital from the paying participant to the receiving participant and emits Real Tokenizado to the receiving client.

The _swap_ operation implemented in this contract is performed in two transactions: one for proposal and another for acceptance.

### CBDC

```solidity
contract RealDigital CBDC
```

Reference to the contract for the movement of Real Digital to be made.

### SwapStatus

```solidity
enum SwapStatus {
  PENDING,          // Swap operation registered, pending cancellation or execution.
  EXECUTED,         // Swap operation executed.
  CANCELLED         // Swap operation cancelled.
}
```

Enumeration with the possible situations of a swap operation.

### SwapProposal

```solidity
struct SwapProposal {
  contract RealTokenizado tokenSender;      // The address of the Real Tokenizado contract of the paying participant
  contract RealTokenizado tokenReceiver;    // The address of the Real Tokenizado contract of the receiving participant
  address sender;                           // The address of the payer's wallet
  address receiver;                         // The address of the receiver's wallet
  uint256 amount;                           // Amount of Reais to be moved.
  enum SwapTwoSteps.SwapStatus status;      // Current situation of the operation.
  uint256 timestamp;
}
```

### swapProposals

```solidity
mapping(uint256 => struct SwapTwoSteps.SwapProposal) swapProposals
```

_Mapping_ of _swap_ proposals.

### SwapStarted

```solidity
event SwapStarted(uint256 proposalId, uint256 senderNumber, uint256 receiverNumber, address sender, address receiver, uint256 amount)
```

_Swap_ start event.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| proposalId | uint256 | Proposal ID |
| senderNumber | uint256 | CNPJ8 of the payer |
| receiverNumber | uint256 | CNPJ8 of the receiver |
| sender | address | Payer's address |
| receiver | address | Receiver's address |
| amount | uint256 | Value |

### SwapExecuted

```solidity
event SwapExecuted(uint256 proposalId, uint256 senderNumber, uint256 receiverNumber, address sender, address receiver, uint256 amount)
```

_Swap_ executed event.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| proposalId | uint256 | Proposal ID |
| senderNumber | uint256 | CNPJ8 of the payer |
| receiverNumber | uint256 | CNPJ8 of the receiver |
| sender | address | Payer's address |
| receiver | address | Receiver's address |
| amount | uint256 | Value |

### SwapCancelled

```solidity
event SwapCancelled(uint256 proposalId, string reason)
```

_Swap_ cancelled event.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| proposalId | uint256 | Proposal ID |
| reason | string | Reason for cancellation |

### ExpiredProposal

```solidity
event ExpiredProposal(uint256 proposalId)
```

Expired proposal event. The proposal expires in 1 minute.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| proposalId | uint256 | Proposal ID |

### constructor

```solidity
constructor(contract RealDigital _CBDC) public
```

Construtor.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _CBDC | contract RealDigital | Address of the Real Digital contract |

### startSwap

```solidity
function startSwap(contract RealTokenizado tokenSender, contract RealTokenizado tokenReceiver, address receiver, uint256 amount) public
```

Creates the _swap_ proposal.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tokenSender | contract RealTokenizado | Address of the Real Tokenizado contract of the payer |
| tokenReceiver | contract RealTokenizado | Address of the Real Tokenizado contract of the receiver |
| receiver | address | Address of the receiving client |
| amount | uint256 | Value |

### executeSwap

```solidity
function executeSwap(uint256 proposalId) public
```

Accepts the _swap_ proposal, executable only by the receiver.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| proposalId | uint256 | Proposal ID |

### cancelSwap

```solidity
function cancelSwap(uint256 proposalId, string reason) public
```

Cancels the proposal. Can be executed by both the payer and the receiver.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| proposalId | uint256 | Proposal ID |
| reason | string | Reason for cancellation |
