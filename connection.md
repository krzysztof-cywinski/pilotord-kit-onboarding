# Connection to the Real Digital Network

## Objective

This documentation aims to establish participation prerequisites in the Real Digital network and define configuration standards for deploying the participant node in this network.

As it is a pilot in a test environment, the adopted standards may undergo adjustments that will be reflected in the presented documentation.

## Prerequisites and assumptions

To participate in the Real Digital pilot, the following items are required:
* The participant must allocate the necessary teams, with adequate sizing and technical qualification to execute the configurations of their node on the network.
* The participant is responsible for making available and deploying processing, communication and security infrastructures (hardware and software) that will support the RD Pilot at its point of operation.
* Each participant may have only 1 node on the network and will connect to the other nodes through the RSFN - National Financial System Network.
  * For this pilot communication, via RSFN, a minimum available bandwidth of 6Mbps will be necessary in order to avoid risk to the normal operation of other services.
  * The individual links for access to RSFN must have a minimum bandwidth of 10Mbps, and it is necessary to observe the redundancy provided in the [SFN Network Manual](https://www.bcb.gov.br/estabilidadefinanceira/comunicacaodados).
* The participant may only have a fullnode/RPC node, and may not have a validator or bootnode node.
* The participant node's default port is 30303 (TCP/UDP).
* Access to RSFN must have the following ports (TCP/UDP) released:
   * Participant node IP:30303 <- IPs of other participants and IPs of Bacen* or RSFN;
   * Participant node IP -> IPs of other participants and IPs of Bacen*:30000-30009 and 30303 or RSFN:30000-30009 and 30303
* *The participant who chooses a more restrictive release must request from Bacen a list of network participants with their respective address blocks on RSFN.
* During the validity of the RD Pilot, the prohibition of direct communication between the selected participants established in item 1.5 of the [SFN Network Manual](https://www.bcb.gov.br/estabilidadefinanceira/comunicacaodados) is suspended exclusively for the selected participants.
* The data used in the tests must be fictitious and must not be stored or replicated to computational environments other than those of authorized institutions in accordance with current regulations.
* Load tests must be previously agreed and authorized by the Central Bank of Brazil.


## Pre-installation
* Download the [collection of scripts](https://www.postman.com/hyperledger/workspace/hyperledger-besu/overview) for calling the BESU APIs via Postman. The scripts are optional for CLI validations.
* As a suggestion, the deployment of the participant node can be performed using the links below:

    - https://besu.hyperledger.org/private-networks/get-started/install/

    - https://github.com/ConsenSys/quorum-kubernetes

    - https://besu.hyperledger.org/private-networks/tutorials/kubernetes/

    - https://besu.hyperledger.org/private-networks/tutorials/azure/

## Participant node configuration

To deploy the participant node on the Real Digital pilot network, the following configurations must be used:

### Participant node name

In order to facilitate the identification of the participant node during the pilot, the following standard was established for the node name:

**participant-function-sequential >>> ex.: fullnode-bcb-1**

* function: node role in the network. The roles can be: bootnode, validator or fullnode. In the case of pilot participants, it will always be **fullnode**

* participant: participant identifier. Example: bcb, selic, etc.

* sequential: sequential number (if the participant has more than one node)

Configure the participant node name in the **identity** parameter in the config.toml file or in the BESU_IDENTITY environment variable.
    - https://besu.hyperledger.org/stable/public-networks/reference/cli/options/#identity

### Genesis

Consider the [genesis.json](genesis.json) file, provided in this onboarding kit, to deploy the participant node.
It is important that the genesis.json file is synchronized to connect to the network, as some information cannot be different, such as:

* chainID (network identifier)
* extraData (https://besu.hyperledger.org/stable/private-networks/how-to/configure/consensus/qbft/#extra-data)

### Config.toml

A [config.toml](config.toml) file template is available in this onboarding kit to be used in the participant node configuration. Pay attention to the parameters that must be customized according to your environment (`p2p-host`, `p2p-port` and `nat-method`). Consult the [Besu documentation](https://besu.hyperledger.org/stable/public-networks/how-to/connect/specify-nat/#kubernetes) on how to configure these parameters.

### Discovery (Bootnode)

Discovery will be automatically performed using bootnodes. Through them, the addresses (enodes) of the network participants will be made available so that the node can automatically connect to each peer. Four bootnodes have been made available on the network to meet minimum resilience and availability requirements.

The four enode addresses below must be configured in the (BESU_BOOTNODES) parameter, separated by commas, in the environment variable file of the BESU container.

    * Bootnode enodes:
        **validator-bcb-1**
            enode://6402a9957982b006576a9c52d259b1b0959ddb69c0a9661d3e605ca4f6efd567880ea42053a61c01524d64c66d4a419b097f400a16305e142b7350e67b803bf9@200.218.66.38:30004

        **validator-bcb-2**
            enode://b6db3da7f706efaba257a48a313eabfcc0e9431111d773bad441f99534faaa0d2802b749d34246d87e6c7efb85e743c302a3a8085609a5863cae9e4da3b44124@200.218.66.36:30005

        **validator-selic-01**
            enode://fbf06435ebfb61113341de8b68156d86534bd8be297a0e567b4858ca5de7ac9f0a8aceda3abcf80815a3b0cd08cbc9b302ae091f538e1c44ed7a8823b76af0b8@200.218.66.113:30303

        **validator-selic-02**
            enode://36af70abfecd5a9277e4825b69a835de34c1c225cfce45ad14ad95f61070eb20c94ab715ab15d040a5e5213c37c5fe873a4da86eaa87b9c9245f656ca967e95a@200.218.66.85:30303

Example:
    BESU_BOOTNODES="enode://bootnode1@host:port,enode://bootnode2@host:port,enode://bootnode3@host:port,enode://bootnode4@host:port"

## Participant node permissioning on the pilot network

The permissioning on the network will be carried out exclusively by the Central Bank of Brazil, the network administrator, through a contract.

To request permission, follow the steps below:

* The enode to be informed is composed of the enodeID + host (IP RSFN) + port.
    - "enode://enodeID@host:port"

* To obtain the enodeID without having to start the participant node, execute the command below that extracts the enode, but the information comes without the IP and port data, which must be completed by the participant.

    - **command:** _besu --data-path=Node-01/data/ public-key export-address_

    - The command output will look like this:
    ```
    2023-07-04 18:02:04.180-03:00 | main | INFO  | KeyPairUtil | Loaded public key 0x46163abddb5beb0599e73e468c0a2927f53408f871beb8e41c09b38b7fed933d149de697e3f20c963135e75b6293b094ceea08600e59524751de0bdff8b3e0e4 from /nfs-server/hyperledger-des/springboot/besu/hyperledger-01/data/key 0x4ee291a08e09bde67cfcb279db9fe957b707b4a6
    ```

    - In the example above, the enode would be: enode://46163abddb5beb0599e73e468c0a2927f53408f871beb8e41c09b38b7fed933d149de697e3f20c963135e75b6293b094ceea08600e59524751de0bdff8b3e0e4@IP_RSFN:PORT

* Provide the participant node's enode by email to the Central Bank of Brazil (obtained in the previous step):
    - email: piloto.rd.tecnologia@bcb.gov.br
    - subject: DEINF | Node Permission on the Network | Participant: [participant name]

* Configure the following parameters in the participant node's config.toml file. The example file already has these parameters.

    * config.toml file:
    ```
    permissions-nodes-contract-enabled=true
    permissions-nodes-contract-address="0x0000000000000000000000000000000000009999"
    permissions-nodes-contract-version=2
    ```

## Participant node execution

After completing the steps above and receiving confirmation from the Central Bank of Brazil regarding the node's authorization, run the participant node and check the following information:

To check if the node has started correctly, verify the following information:

* If running the node in a container, check if it is in a healthy status.

* Perform a connection test (telnet, nc, echo) on the address and port of your node. It is important to perform this test on the _discovery_ port for both the TCP and UDP protocols.

* Check the node log to see if it started correctly:
    ```
    | main | INFO | FullSyncDownloader | Starting full sync.*
    | main | INFO | FullSyncTargetManager | Unable to find sync target. Currently checking 0 peers for usefulness*
    ```

* Execute the `NET\net_peerCount` API to check how many peers the participant node has connected to. The number of nodes connected to your node will depend on the number of nodes connected to the network at the moment. It is expected that the participant node will connect to more than 1 node on the network. The API return will look like this:

```json
    {
        "jsonrpc": "2.0",
        "id": 1,
        "result": "0x7"
    }
```

* Execute the `ADMIN\admin_peers API` to check which nodes have connected. When using bootnodes on the network, discovery should occur automatically, so in this list, you should find the nodes connected to the participant node. The API return will look like this:

```json
        {
        "jsonrpc": "2.0",
        "id": 1,
        "result": [
            {
                "version": "0x5",
                "name": "besu/fullnode-bcb-1/v23.1.2/linux-x86_64/openjdk-java-17",
                "caps": [
                    "eth/62",
                    "eth/63",
                    "eth/64",
                    "eth/65",
                    "eth/66",
                    "eth/67",
                    "eth/68",
                    "istanbul/100",
                    "snap/1"
                ],
                "network": {
                    "localAddress": "172.17.38.196:30002",
                    "remoteAddress": "200.218.66.36:60964"
                },
                "port": "0x7530",
                "id": "xxxx",
                "protocols": {
                    "eth": {
                        "difficulty": "0x1d772",
                        "head": "xxxx",
                        "version": 68
                    }
                },
                "enode": "enode://b39d76f80ba5615f84b7c429a3f3467d4fb4f17bf64fa80dbf733a0efed261a16c4e07ace321e5f86ed19fefb85ed5f3d791f6e85fddf6c465cb8315056f069f@200.218.66.36:30000?discport=0"
            },
            {
                "version": "0x5",
                "name": "besu/bootnode-bcb-2/v23.1.2/linux-x86_64/openjdk-java-17",
                "caps": [
                    "eth/62",
                    "eth/63",
                    "eth/64",
                    "eth/65",
                    "eth/66",
                    "eth/67",
                    "eth/68",
                    "istanbul/100",
                    "snap/1"
                ],
                "network": {
                    "localAddress": "172.17.38.196:35674",
                    "remoteAddress": "200.218.66.39:30003"
                },
                "port": "0x7533",
                "id": "xxxx",
                "protocols": {
                    "eth": {
                        "difficulty": "0x1d772",
                        "head": "xxxx",
                        "version": 68
                    }
                },
                "enode": "enode://cc60171dd6a652d0c9f567308eef145aa45f030249ff26b597143213b1212666de61d167426452c99614d39258a155b8ead875ad8b26f1b28685a1495e5995df@200.218.66.39:30003"
            }
        ]
    }
```

## Successful network connectivity

If you were able to deploy your node and it was able to connect to the peers that the bootnode provided, then welcome to the Real Digital pilot network.

The next step will be to validate the use of smart contracts and transactions on the network.

## Common problems

Possible problems for the participant node NOT connecting to the pilot network:

Check your network:

* Lack of release in the firewall of addresses and ports;
* Lack of release in the firewall of the port for the UDP protocol;
* NAT rules not configured correctly;

Check the participant node:

* Permission not granted by the contract administrator;
* Deploying the node without exposing the container ports (TCP and UDP);
* Genesis configured incorrectly (check extradata, chainId);
* Pointing to the wrong enode of the bootnodes;


[<<< Back](README.md)