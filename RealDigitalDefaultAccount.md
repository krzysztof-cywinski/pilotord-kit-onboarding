# Solidity API

## RealDigitalDefaultAccount

Contract that allows participants to change their _default_ wallet.

### ACCESS_ROLE

```solidity
bytes32 ACCESS_ROLE
```

Access _role_ belonging to the contract authority.


### CBDC

```solidity
contract RealDigital CBDC
```

Reference to the Real Digital contract for participant validation.


### defaultAccount

```solidity
mapping(uint256 => address) defaultAccount
```

_Mapping_ of default accounts. Key is the participant's CNPJ8.


### onlyParticipant

```solidity
modifier onlyParticipant()
```

Method modifier: only participants can change their default wallets.


### constructor

```solidity
constructor(contract RealDigital token, address _authority, address _admin) public
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract RealDigital | Real Digital address |
| _authority | address | Contract authority. Adds default wallets |
| _admin | address | Contract administrator. Allows changing the authority |




### addDefaultAccount

```solidity
function addDefaultAccount(uint256 cnpj8, address wallet) public
```

Adds the first default wallet for a participant. Allowed only for the authority.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| cnpj8 | uint256 | Participant's CNPJ8 |
| wallet | address | Wallet |




### updateDefaultWallet

```solidity
function updateDefaultWallet(uint256 cnpj8, address newWallet) public
```

Allows the participant to change their _default_ wallet.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| cnpj8 | uint256 | Participant's CNPJ8 |
| newWallet | address | Wallet |
