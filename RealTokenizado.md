# Solidity API

## RealTokenizado

Implementation of the Real Tokenizado (DVt and MEt) contract.

This contract inherits from Real Digital and all implemented functions.

### participant

```solidity
string participant
```
_String_ representing the participant's name.

### cnpj8

```solidity
uint256 cnpj8
```
_Uitn256_ representing the institution's number.

### reserve

```solidity
address reserve
```
Participant institution's reserve wallet.


### constructor

```solidity
constructor(string _name, string _symbol, address _authority, address _admin, string _participant, uint256 _cnpj8, address _reserve) public
```

Real Tokenizado token constructor.

Invokes the ERC20 constructor and grants authority permission to the BCB wallet.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _name | string | Token name: Real Tokenizado (Institution) |
| _symbol | string | Token symbol: BRL |
| _authority | address | Wallet responsible for issuing, redeeming, moving and freezing funds (BCB) |
| _admin | address | Wallet responsible for managing access control (BCB) |
| _participant | string | Participant identification as a string. |
| _cnpj8 | uint256 | First 8 digits of the institution's CNPJ |
| _reserve | address | Institution's reserve wallet |


### updateReserve

```solidity
function updateReserve(address newReserve) public
```

Function to update the token's reserve wallet. The reserve wallet is used by DvP.


#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| newReserve | address | Authority wallet (Institution) |
