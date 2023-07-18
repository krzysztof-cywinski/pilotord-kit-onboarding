# Solidity API

## RealDigital


### frozenBalanceOf

```solidity
mapping(address => uint256) frozenBalanceOf
```

_Mapping_ of wallets and their respective frozen balances.

### FrozenBalance

```solidity
event FrozenBalance(address wallet, uint256 amount)
```

Event emitted when a wallet's balance is frozen.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| wallet | address | Wallet whose balance was frozen |
| amount | uint256 | Frozen amount |

### checkFrozenBalance

```solidity
modifier checkFrozenBalance(address from, uint256 amount)
```

_Modifier_ to check if an address has enough funds. Used in `_beforeTokenTransfer`.

### constructor

```solidity
constructor(string _name, string _symbol, address _authority, address _admin) public
```

Constructor of the Real Digital token.

Invokes the ERC20 constructor and gives authority permission to the BCB wallet.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _name | string | Token name: Real Digita |
| _symbol | string | Token symbol: BRL |
| _authority | address | Wallet responsible for issuing, redeeming, moving and freezing funds (BCB) |
| _admin | address | Wallet responsible for managing access control (BCB) |


### pause

```solidity
function pause() public
```

Function to pause the token in necessary cases, blocking it for all operations.

### unpause

```solidity
function unpause() public
```

Function to unpause the token in necessary cases, unblocking it for all operations.

### mint

```solidity
function mint(address to, uint256 amount) public
```

Function to issue tokens to allowed wallets.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| to | address | Destination wallet |
| amount | uint256 | Token amount |

### _beforeTokenTransfer

```solidity
function _beforeTokenTransfer(address from, address to, uint256 amount) internal
```

Trigger executed whenever a token movement is requested, including token creation and destruction.

Call conditions:

- when `from` is zero, `amount` tokens will be issued to `to`.
- when `to` is zero, `amount` of `from` tokens will be destroyed.
- `from` and `to` will never be simultaneously zero.
- `from` and `to` must be registered as participants.

### decimals

```solidity
function decimals() public view virtual returns (uint8)
```

Returns the number of decimal places used in the token value representation. For example, if `decimals` is equal to `2`, a balance of `505` tokens should be presented as `5.05` (`505 / 10 ** 2`).

### move

```solidity
function move(address from, address to, uint256 amount) public
```

Function to move tokens from one wallet to another. Only those who have MOVER_ROLE can execute.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| from | address | Source wallet |
| to | address | Destination wallet |
| amount | uint256 | Token amount |

### increaseFrozenBalance

```solidity
function increaseFrozenBalance(address from, uint256 amount) public
```

Function to increment partially blocked tokens from a wallet. Only those who have FREEZER_ROLE can execute.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| from | address | Source wallet |
| amount | uint256 | Token amount |

### decreaseFrozenBalance

```solidity
function decreaseFrozenBalance(address from, uint256 amount) public
```

Function to decrement partially blocked tokens from a wallet. Only those who have FREEZER_ROLE can execute.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| from | address | Source wallet |
| amount | uint256 | Token amount |

### burn

```solidity
function burn(uint256 amount) public
```

Destroys a certain value from the wallet.

See {ERC20-_burn}._

### moveAndBurn

```solidity
function moveAndBurn(address from, uint256 amount) public
```

Function to destroy tokens from a wallet. Only those who have MOVER_ROLE can execute.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| from | address | Source wallet |
| amount | uint256 | Token amount |

### burnFrom

```solidity
function burnFrom(address account, uint256 amount) public
```

Destroys `amount` tokens from `account`, deducting the allowance from the executor. See {ERC20-_burn} and {ERC20-allowance}.

Requirements:

- the executor must have authorization to move funds from `accounts` of at least `amount`.
