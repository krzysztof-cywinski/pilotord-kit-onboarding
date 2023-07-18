# Solidity API

## STR

This contract simulates the STR. Through it, authorized participants can issue Real Digital.

For the pilot, no validation is performed, it is sufficient that the participant is authorized.

### CBDC

```solidity
contract RealDigital CBDC
```

Reference to the Real Digital contract to check if the participant is authorized.

### onlyParticipant

```solidity
modifier onlyParticipant()
```

Method modifier: only participants can execute the function.

### constructor

```solidity
constructor(contract RealDigital token) public
```

Builds an instance of the contract and stores the address of the Real Digital.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract RealDigital | Address of the Real Digital |

### requestToMint

```solidity
function requestToMint(uint256 amount) modifier onlyParticipant() public
```

Issues the amount of Real Digital informed in amount to the wallet that executes this function.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | Amount to be issued (note: remember the 2 decimal places) |

### requestToBurn

```solidity
function requestToBurn(uint256 amount) modifier onlyParticipant() public
```

Destroys the amount of Real Digital informed in amount from the wallet that executes this function.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | Amount to be destroyed (note: remember the 2 decimal places) |
