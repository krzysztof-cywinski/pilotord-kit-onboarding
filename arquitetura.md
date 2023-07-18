# Real Digital Pilot Architecture

## Objective

This documentation aims to present the architecture defined for the Real Digital pilot.

As it is a pilot in a test environment, the presented architecture is subject to constant evolutions that will be reflected in the presented documentation.

## Hyperledger Besu for private networks

**Hyperledger Besu version** used in the Real Digital pilot network:
    [23.4.1](https://github.com/hyperledger/besu/releases/tag/23.4.1).

For use of higher versions, compatibility must be verified with the pilot development team. Throughout the project, version updates may be tested.

**Consensus** used in the Real Digital pilot network:
    [QBFT](https://besu.hyperledger.org/stable/private-networks/how-to/configure/consensus/qbft/)

**Participant node permissioning** on the network:
    Permissioning is performed [onchain](https://besu.hyperledger.org/stable/private-networks/concepts/permissioning/onchain/#permissioning-contracts) by the Central Bank of Brazil. More details in the [network connection](ingresso.md) step.

The [version 2](https://besu.hyperledger.org/stable/private-networks/how-to/use-permissioning/onchain/#specify-the-permissioning-contract-interface-version) of the contract interface will be used for permissioning **(permissions-nodes-contract-version)**.

## Topology

The image below shows the proposed initial architecture for the Real Digital pilot network.

&nbsp;

![Topology](topologia.png "Real Digital network pilot architecture")

&nbsp;

- Communication between network nodes is done through RSFN.

- Each pilot participant, with the exception of the Central Bank of Brazil, has a single node on the network.

- In order to guarantee availability and resilience to the network, the following were made available:
  - at the Central Bank of Brazil (Brasília): 4 validators and 2 fullnodes, deployed in different sites.
  - at the Central Bank of Brazil (RJ, Selic - separate infrastructure): 2 validators and 2 fullnodes, deployed in different sites.

- All traffic that will pass through RSFN will be P2P (TCP/UDP).

- There will be no RPC traffic on RSFN, that is, RPC ports should only be released within each participant's scope for access to their own node.

- RPC ports should not be open on the network and it is recommended that, even on the internal network, access control be configured by firewall and authentication.

- It is not necessary to configure a DNS for the participant node.

[<<< Back](README.md)
