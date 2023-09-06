# Solidity API

## TPFtAccessControl

_Smart Contract_ responsible for the access control layer for operations involving tokenized Federal Public Title (TPFt).

Its main features are:
- Determine which wallets can create and issue TPFt,
- Control which wallets have access to operations involving TPFt.

### MINTER_ROLE

```solidity
bytes32 MINTER_ROLE
```

_Role_ that allows creating and issuing TPFt.

### DIRECT_PLACEMENT_ROLE

```solidity
bytes32 DIRECT_PLACEMENT_ROLE
```

_Role_ that allows performing the direct placement operation.

### AUCTION_PLACEMENT_ROLE

```solidity
bytes32 AUCTION_PLACEMENT_ROLE
```

_Role_ that allows performing the public offering settlement operation.

### FREEZER_ROLE

```solidity
bytes32 FREEZER_ROLE
```

_Role_ that allows locking the balance of a wallet.

### constructor

```solidity
constructor() public
```

Builds an instance of the contract and allows the wallet to grant or revoke roles for participants.

### allowTPFtMint

```solidity
function allowTPFtMint(address member) public
```

Enables the wallet to create and issue TPFt.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| member | address | Wallet to be enabled |

### allowDirectPlacement

```solidity
function allowDirectPlacement(address member) public
```

Enables the wallet to perform the direct placement operation involving TPFt.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| member | address | Wallet to be enabled |

### allowAuctionPlacement

```solidity
function allowAuctionPlacement(address member) public
```

Enables the wallet to perform the public offering settlement operation involving TPFt.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| member | address | Wallet to be enabled |

### allowFreezingPlacement

```solidity
function allowFreezingPlacement(address member) public
```

Enables the wallet to lock and unlock asset balances.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| member | address | Wallet to be enabled |

### enableAddress

```solidity
function enableAddress(address member) public
```

Enables the wallet to operate in the Real Digital Selic pilot.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| member | address | Wallet to be enabled |

### disableAddress

```solidity
function disableAddress(address member) public
```

Disables the wallet to operate in the Real Digital Selic pilot.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| member | address | Wallet to be disabled |

### isEnabledAddress

```solidity
function isEnabledAddress(address member) public view returns (bool)
```

Checks if the wallet is enabled to operate in the Real Digital Selic pilot.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| member | address | Wallet to be checked |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | Returns a boolean value indicating if the wallet is enabled to operate in the Real Digital Selic pilot. |
