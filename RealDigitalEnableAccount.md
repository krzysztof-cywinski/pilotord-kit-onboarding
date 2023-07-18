# Solidity API

## RealDigitalEnableAccount

Contract that allows the participant to enable other wallets they own.




### constructor

```solidity
constructor(address accessControlAddress) public
```

Builds an instance of the contract and stores the address of the RealDigital contract, responsible for access control checks.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| accessControlAddress | address | Address of the access control contract |




### enableAccount

```solidity
function enableAccount(address member) public
```

Enables a new wallet for the participant. Any wallet previously enabled for the participant can enable other wallets.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| member | address | New participant address |




### disableAccount

```solidity
function disableAccount() public
```

Disables the wallet that executed the function.
