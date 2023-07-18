# Solidity API

## CBDCAccessControl

_Smart Contract_ responsible for the access control layer for Real Digital/Tokenized.

Its main features are:
- Determine which wallets can send/receive tokens.
- Control the roles of which address can issue/redeem/freeze a wallet's balance.

### PAUSER_ROLE

```solidity
bytes32 PAUSER_ROLE
```

_Role_ that allows pausing the contract.

### MINTER_ROLE

```solidity
bytes32 MINTER_ROLE
```

_Role_ that allows `mint` on token contracts.

### ACCESS_ROLE

```solidity
bytes32 ACCESS_ROLE
```

_Role_ that allows enabling an address.

### MOVER_ROLE

```solidity
bytes32 MOVER_ROLE
```

_Role_ that allows access to the `move` function, that is, transfer the token from another wallet.

### BURNER_ROLE

```solidity
bytes32 BURNER_ROLE
```

_Role_ that allows access to the `burn` function.

### FREEZER_ROLE

```solidity
bytes32 FREEZER_ROLE
```

_Role_ that allows freezing a wallet's balance, for example for the [two-step _swap_](./SwapTwoSteps.md).

### authorizedAccounts

```solidity
mapping(address => bool) authorizedAccounts
```

_Mapping_ of authorized accounts to receive the token.

### EnabledAccount

```solidity
event EnabledAccount(address member)
```

Event of an enabled wallet.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| member | address | Enabled wallet |

### DisabledAccount

```solidity
event DisabledAccount(address member)
```

Event of a disabled wallet.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| member | address | Disabled wallet |

### constructor

```solidity
constructor(address _authority, address _admin) internal
```

Builds an instance of the contract, storing the provided arguments.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _authority | address | Authority of the contract, can perform all operations with the token |
| _admin | address | Contract administrator, can change the authority of the contract if necessary |

### checkAccess

```solidity
modifier checkAccess(address from, address to)
```

Modifier that checks if both the payer and the receiver are authorized to receive the token.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| from | address | Payer's wallet |
| to | address | Receiver's wallet |

### enableAccount

```solidity
function enableAccount(address member) public
```

Enables the wallet to receive the token.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| member | address | Wallet to be enabled |

### disableAccount

```solidity
function disableAccount(address member) public
```

Disables the wallet.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| member | address | Wallet to be disabled |

### verifyAccount

```solidity
function verifyAccount(address account) public view virtual returns (bool)
```

Checks if the wallet can receive the token.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| account | address | Wallet to be checked |
