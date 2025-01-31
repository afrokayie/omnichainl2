---
sidebar_position: 3
---

# Running a Node
Learn how to run your own **Omnichain** node.


## Prerequisites
##### Installations Required:
- Docker
- Docker Compose


## Setup Instructions

Clone the **Omnichain** node repository and navigate to `external-node/`:

   ```bash
   git clone https://github.com/Omnichain-Foundation/omnichain-node
   cd omnichain-node/external-node```

## Running an Abstract Node Locally
​
### Starting the Node
 ```bash
docker compose --file testnet-external-node.yml up -d
```
### Reading Logs

 ```bash
docker compose --file testnet-external-node.yml up -d
```

Container name options:

- testnet-node-external-node-1
- testnet-node-postgres-1
- testnet-node-prometheus-1
- testnet-node-grafana-1

### Resetting the Node State

```bash
docker compose --file testnet-external-node.yml down --volumes
```

## Important Notes

- **Initial Recovery**: The node will recover from genesis (until we set up a snapshot) on its first run, which may take some time. During this period, the API server will not serve any requests.
- **Historical Data**: For access to historical transaction data, consider recovery from DB dumps. Refer to the Advanced Setup section for more details.
- **DB Dump**: For nodes that operate from a DB dump, which allows starting an Abstract node with a full historical transaction history, refer to the documentation on running from DB dumps at `03_running.md`.

## System Requirements

The following are minimal requirements:

- **CPU**: A relatively modern CPU is recommended.
- **RAM**: 32 GB
- **Storage**:
  - Testnet Nodes: 30 GB
  - Mainnet Nodes: 300 GB, with the state growing about 1TB per month.
- **Network**: 100 Mbps connection (1 Gbps+ recommended)

## Advanced Setup

For additional configurations like monitoring, backups, recovery from DB dump or snapshot, and custom PostgreSQL settings, please refer to the `ansible-en-role` repository.

