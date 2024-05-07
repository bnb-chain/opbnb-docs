---
sidebar_label: Run Local Mainnet or Testnet Node
description: Guide to running opBNB Testnet or Mainnet Node
---

# Running a Local Testnet or Mainnet Node

If you're looking to build an app on opBNB you'll need access to an opBNB node.
You can simply use the public rpc(Testnet: <https://opbnb-testnet-rpc.bnbchain.org>, Mainnet: <https://opbnb-mainnet-rpc.bnbchain.org>) or run your own node.

This guide will walk you through setting up your own Testnet/Mainnet node.

## Hardware requirements

Replicas must store the transaction history of opBNB and run Geth. For optimal performance, they should be powerful machines (real or virtual) with at least 16 GB RAM and an SSD drive with 500 GB free space (for production network).

### Fast Node

For users that just to run normal rpc node without debug functions, you can run the fast node which has faster sync speed and less hardware requirements.

The fast node don't have MPT states and only use the snapshot to sync the latest state. The security is not as good as the full node, but it's enough for most of the users and 
validated in many production nodes. The advantage of the fast node is that it's faster to sync for it doesn't need to calculate the MPT states and store and query the MPT trees.

You can start the fast node with the flags `--allow-insecure-no-tries`. The gc mode should not be `archive` if you start with the fast node.

For more information, you can refer to the [fast node pr](https://github.com/bnb-chain/op-geth/pull/75).

## Run with Docker

There are official Docker images available for the opBNB node. You can use the latest versions of these images from the following links:
-  [op-node](https://github.com/bnb-chain/opbnb/pkgs/container/op-node)
-  [op-geth](https://github.com/bnb-chain/op-geth/pkgs/container/op-geth)

Additionally, you can find a docker-compose file example in this [repository](https://github.com/bnb-chain/opbnb-node-docker) to run the opBNB node with Docker. This allows you to set up a Testnet/Mainnet node quickly, within minutes. 
If you use different infrastructure providers, please consult the docker-compose file and adjust the configuration as needed.

## Run with Binaries

### Build op-node and op-geth

dependencies
- golang 1.21+
- make
- git
- gcc
- libc-dev

You can refer to the Docker files for Alpine Linux: [op-node](https://github.com/bnb-chain/opbnb/blob/develop/op-node/Dockerfile) and [op-geth](https://github.com/bnb-chain/op-geth/blob/develop/Dockerfile).
If you are using a different OS, please find the alternative packages for your OS.

```bash
export OPBNB_WORKSPACE=/tmp/opbnb
mkdir -p $OPBNB_WORKSPACE

cd $OPBNB_WORKSPACE
git clone https://github.com/bnb-chain/opbnb.git
cd opbnb/op-node
git checkout develop
make op-node
mkdir -p $OPBNB_WORKSPACE/op-node-data
cp ./bin/op-node $OPBNB_WORKSPACE/op-node-data

cd $OPBNB_WORKSPACE
git clone https://github.com/bnb-chain/op-geth.git
cd op-geth
git checkout develop
make geth
mkdir -p $OPBNB_WORKSPACE/op-geth-data
cp ./build/bin/geth $OPBNB_WORKSPACE/op-geth-data/op-geth
```

### Data Preparation

```bash
openssl rand -hex 32 > jwt.txt
cp jwt.txt $OPBNB_WORKSPACE/op-geth-data
cp jwt.txt $OPBNB_WORKSPACE/op-node-data
```

### Start components

op-geth

```bash
#! /usr/bin/bash
cd $OPBNB_WORKSPACE/op-geth-data

# for testnet
export L2_RPC=https://opbnb-testnet-rpc.bnbchain.org

# for mainnet
# export L2_RPC=https://opbnb-mainnet-rpc.bnbchain.org

# for testnet using --opBNBTestnet, for mainnet using --opBNBMainnet
./op-geth \
  --opBNBTestnet \
  --datadir="./datadir" \
  --authrpc.jwtsecret=./jwt.txt \
  --rollup.sequencerhttp=$L2_RPC 
```

op-geth runs with [PBSS(Path-Base Scheme Storage) and PebbleDB](./pbss-pebble.md) by adding the flags `--state.scheme path` and `--db.engine pebble`.
**It's recommended to start a new node with this mode, which provides better performance and less disk space usage.**

To start the op-geth node for a fast node, you can add the flag `--allow-insecure-no-tries`. but the `gcmode` should be `full`.

op-node

```bash
#! /usr/bin/bash

set -ex

cd op-node-data

export L2_RPC=http://localhost:8551

# for testnet
# it's better to replace the L1_RPC with your own BSC Testnet RPC Endpoint for stability
export L1_RPC=https://bsc-testnet.bnbchain.org

# for mainnet
# export L1_RPC=https://bsc-dataseed.bnbchain.org

# for testnet using --network=opBNBTestnet, for mainnet using --network=opBNBMainnet
./op-node \
  --network=opBNBTestnet \
  --snapshotlog.file=./snapshot.log \
  --l1=${L1_RPC} \
  --l2=${L2_RPC} \
  --l2.jwt-secret=./jwt.txt
```

## Run with Snapshots

To improve the synchronization speed of the node, you can utilize snapshots to initialize it. 

The most recent snapshot is maintained in the repository [opbnb-snapshot](https://github.com/bnb-chain/opbnb-snapshot).
Please visit the repository for download links and usage instructions.

## Check status

Wait for the node to sync. You'll see log in `op-geth` if there's any new block.

```
INFO [11-15|10:10:05.569] Syncing beacon headers                   downloaded=1,762,304 left=11,403,991 eta=27m1.039s
INFO [11-15|10:10:06.440] Forkchoice requested sync to new head    number=13,164,499 hash=d78cb3..a2e94d finalized=unknown
```

You can check the block number with curl:

```
$ curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' http://localhost:8545
```

Once all headers have been downloaded, the node will begin downloading the blocks.
You will notice that the block height is increasing.

```
{"jsonrpc":"2.0","id":1,"result":"0x1a"}
```

To verify if the node has synchronized to the latest height, you can compare the block with the one requested from public endpoints.

```bash
# local
$ curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_getBlockByNumber","id": 1, "params": ["0x1a", false]}' http://localhost:8545

# testnet
$ curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_getBlockByNumber","id": 1, "params": ["0x1a", false]}' https://opbnb-testnet-rpc.bnbchain.org

# mainnet
$ curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_getBlockByNumber","id": 1, "params": ["0x1a", false]}' https://opbnb-mainnet-rpc.bnbchain.org
```

## Troubleshooting

If the problem you are facing is not addressed here, please open an issue on GitHub by visiting this link: [open an issue](https://github.com/bnb-chain/opbnb/issues).

### Not synced for a long time

The default sync mechanism involves two P2P networks, the op-node network and op-geth network.
If you are not connected to the op-node network, you can not receive the latest blocks from broadcast, and can't trigger the engine sync of op-geth.
If you are not connected to the op-geth network, you can receive the latest blocks from broadcast, but can't get the historical blocks from op-geth P2P network.

Check the op-geth logs.

If you can find the following logs, it means that the op-node network is connected successfully and you are receiving the latest blocks from broadcast.

```
INFO [11-15|10:32:02.801] Forkchoice requested sync to new head    number=8,290,596 hash=1dbff3..9a306a finalized=unknown
```

If you can find the following logs, it means that the op-geth network is connected successfully and you are receiving the historical block headers from op-geth P2P network.

```
INFO [11-15|10:32:52.240] Syncing beacon headers                   downloaded=210,432 left=8,084,773 eta=31m39.748s
```

Check the op-node p2p network with the command below:

```
$ curl -X POST -H "Content-Type: application/json" --data \
    '{"method":"opp2p_peers","params":[true],"id":1,"jsonrpc":"2.0"}'  \
    http://localhost:8546
```

Check the op-geth p2p network with the command below. You have to enable admin API in op-geth to use this API.
Refer to <https://geth.ethereum.org/docs/interacting-with-geth/rpc/ns-admin> for more details.

```
$ curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"admin_peers","params":[],"id":1}' http://localhost:8545 | jq .
```

### The local node's chain has forked from the canonical chain

If your local node is already running and tracking blocks, the following situations may indicate that your local node's chain has forked from the canonical chain:
1. The block hash at the same height obtained through the `eth_getBlockByNumber` method does not match the data returned by the public node.
2. Your local chain consistently lags behind a fixed number of blocks and cannot catch up with the latest block height.

In this case, we recommend that you check the code version of the running node through the following steps:
```bash
$ op-node -v
op-node version v0.0.0-515ebd51-1698742099

$ op-geth version
Geth
Version: 0.1.0-unstable
Git Commit: f8871fc80dbf2aa0178b504e76c20c21b890c6d5
Git Commit Date: 20231026
Upstream Version: 1.11.5-stable
Architecture: arm64
Go Version: go1.20.2
Operating System: darwin
GOPATH=
```
Please make sure to use the latest code version. If the code version is incorrect, please completely clear the node data and run the new node again according to this guide. 

You also need to check if the `genesis.json` and `rollup.json` files are up to date. 

In the latest code, we hardcoded the configuration of rollup.json. Instead of using `--rollup.config=./rollup.json`, you just need to use `--network=opBNBTestnet` (for the mainnet network it is opBNBMainnet). This change ensures that the contents of rollup.json will not be incorrect.

### Node block is stuck and op-geth log prints: Database compacting, degraded performance database=/data/geth/chaindata

If your node suddenly gets stuck and cannot grow, and your op-geth log keeps printing: Database compacting, degraded performance database=/data/geth/chaindata, 
then you need to consider upgrading your machine specifications, increasing CPU, memory, and disk maximum throughput.

This is because the current OP Stack only supports the archive mode of Geth, and the disk space usage increases over time. The Leveldb that Geth relies on requires more machine resources to complete the compact process.
We are working hard to support full mode Geth, and further support PBSS and Pebble to completely solve this problem.

If you don't want to upgrade your machine's specifications, You can choose to download the pruned snapshot from the [opbnb-snapshot](https://github.com/bnb-chain/opbnb-snapshot) repository, and use it to start a new node. 
The new node will not have this issue, but it will lose all state data before a certain block height.

If you are an advanced player, you can also try to perform offline pruning on your nodes (Note that this is a dangerous operation and after pruning, the state data of the blocks before the target block height will no longer be available).
You can follow these steps:
1. Shut down your machine and make sure that op-geth prints the following log: "Blockchain stopped".
2. Search for the keyword "Chain head was updated" in the logs to confirm the block height of the last inserted block before the node was shut down. For the sake of explanation, let's assume the block height is 16667495.
3. Wait for 16667495 to become the final state on the chain, ensuring that no reorganization has occurred. You can go to the blockchain explorer (https://opbnbscan.com/) to query this block height,
and compare the block height hash with the one in the log. If the hashes match and a long time has passed, then we believe that this block height will not be reorganized.
4. Get the state root hash of this block height through JSON-RPC.
5. To execute pruning, use the following command: `geth snapshot prune-state --datadir {yourDataDir} --triesInMemory=32 {targetBlockStateRootHash}`, 
making sure to replace {yourDataDir} and {targetBlockStateRootHash} with your own values.
6. Be patient and observe the logs. The entire process may take dozens of hours.
7. Restart your node after pruning is complete.

**Reminder: Pruning is very dangerous and may damage the data of the node. This could result in having to rerun the new node. Please only perform this operation if you are familiar with the process.**
