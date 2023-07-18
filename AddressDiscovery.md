# Solidity API

## AddressDiscovery

_Utility_ smart contract to facilitate the discovery of other contract addresses on the RD Pilot network. It can be accessed from the address 0xDc2633B0cdA829bd2A54Db3Fd39b474aa0953c70.

### ACCESS_ROLE

```solidity
bytes32 ACCESS_ROLE
```

Access _role_, belonging to the contract authority.

### addressDiscovery

```solidity
mapping(bytes32 => address) addressDiscovery
```

_Mapping_ of contract addresses, where the key is the keccak256 hash of the contract name.

### constructor

```solidity
constructor(address _authority, address _admin) public
```

Construtor

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _authority | address | Contract authority, can update contract addresses. |
| _admin | address | Administrator, can change the authority. |

### updateAddress

```solidity
function updateAddress(bytes32 smartContract, address newAddress) public
```

Updates the address of a contract, allowed only for the authority (BCB).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| smartContract | bytes32 | Keccak256 hash of the contract name. |
| newAddress | address | New contract address. |
