# Solidity API

## KeyDictionary

Contract that represents the query of customer wallets. It is a contract that simulates a directory of information.

This contract will only be used during the pilot.

### CBDC

```solidity
contract RealDigital CBDC
```

Reference to the Real Digital contract.

### CustomerData

```solidity
struct CustomerData {
  uint256 taxId;      // The customer's CPF
  uint256 bankNumber; // The participant's code
  uint256 account;    // The customer's account
  uint256 branch;     // The customer's agency
  address wallet;     // The customer's wallet
  bool registered;    // Registered or not
  address owner;      // The participant's wallet that inserted the customer
}
```

### KeyRequested

```solidity
event KeyRequested(address owner, uint256 proposalId, bytes32 key)
```

Event of request for change of key owner.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| owner | address | The current key owner |
| proposalId | uint256 | Proposal ID |
| key | bytes32 | The key |

### onlyParticipant

```solidity
modifier onlyParticipant()
```

Method modifier: only participants can execute the method.


### constructor

```solidity
constructor(contract RealDigital token) public
```

Builds an instance of the contract and stores the address of the Real Digital contract.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract RealDigital | Address of the Real Digital contract |



### addAccount

```solidity
function addAccount(bytes32 key, uint256 _taxId, uint256 _bankNumber, uint256 _account, uint256 _branch, address _wallet) public
```

Adds the customer data, linking it to the _key_.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| key | bytes32 | The key |
| _taxId | uint256 | The customer's CPF |
| _bankNumber | uint256 | The participant's ID |
| _account | uint256 | The customer's account |
| _branch | uint256 | The customer's agency |
| _wallet | address | The customer's wallet |

### getWallet

```solidity
function getWallet(bytes32 key) public view returns (address)
```

Returns the customer's wallet based on their _key_.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| key | bytes32 | The key whose wallet is being searched |


### getKey

```solidity
function getKey(address wallet) public view returns (bytes32)
```

Returns the customer's key based on their wallet.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| wallet | address | The customer's wallet |



### getCustomerData

```solidity
function getCustomerData(bytes32 key) public view returns (struct KeyDictionary.CustomerData)
```

Returns all customer data.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| key | bytes32 | The key of the requested customer |

### updateData

```solidity
function updateData(bytes32 key, uint256 _taxId, uint256 _bankNumber, uint256 _account, uint256 _branch, address _wallet) public
```

Updates the customer data linked to the _key_. Only the owner of the participant's wallet to which the customer linked their key can change the data through this function.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| key | bytes32 | The new customer key |
| _taxId | uint256 | The new customer CPF |
| _bankNumber | uint256 | The new participant ID responsible for the customer |
| _account | uint256 | The new customer account |
| _branch | uint256 | The new customer agency |
| _wallet | address | The new customer wallet |

### requestKey

```solidity
function requestKey(bytes32 key, uint256 _taxId, uint256 _bankNumber, uint256 _account, uint256 _branch, address _wallet) public
```

Requests a key that belongs to another participant.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| key | bytes32 | The requested key |
| _taxId | uint256 | The CPF of the requesting customer |
| _bankNumber | uint256 | ID of the participant responsible for the requesting customer |
| _account | uint256 | The account of the requesting customer |
| _branch | uint256 | The agency of the requesting customer |
| _wallet | address | The wallet of the requesting customer |

### authorizeKey

```solidity
function authorizeKey(uint256 proposalId, bytes32 key) public
```

Authorizes the proposed data change for the _key_ by the _proposalId_.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| proposalId | uint256 | The proposal ID |
| key | bytes32 | The key whose data will be changed |
