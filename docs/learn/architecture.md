---
sidebar_position: 2
---

# OmnichainL2 Architecture  

An overview of the OmnichainL2 Stack, including its blockchain, core contracts, and applications.   

## Introduction to the OmnichainL2 Stack  

OmnichainL2 is designed to provide the simplest possible experience for end-users, including those with no familiarity with cryptocurrencies and those using low-cost devices with limited connectivity.  

### A Full-Stack Approach  

To achieve this, OmnichainL2 takes a full-stack approach, ensuring that each layer of the stack is built with the end-user in mind while also considering the needs of other stakeholders (e.g., node operators) who help enable the end-user experience.  


## OmnichainL2 Blockchain  

An open cryptographic protocol that allows applications to process transactions and execute smart contracts in a secure and decentralized manner. The OmnichainL2 blockchain code shares ancestry with Ethereum and maintains full EVM compatibility for smart contracts. However, it uses a Byzantine Fault Tolerant (BFT) consensus mechanism (Proof-of-Stake) rather than Proof-of-Work. It also differs in block format, transaction format, client synchronization protocols, and gas payment and pricing mechanisms.  

## OmnichainL2 Core Contracts  

A set of smart contracts running on the OmnichainL2 blockchain that power essential platform features, including ERC-20 stable currencies, identity attestations, proof-of-stake mechanisms, and governance. These contracts are upgradeable and managed through a decentralized governance process.  


## Applications  

Applications built on the OmnichainL2 platform serve end users directly.  

The **OmnichainL2 Wallet app**, the first in an ecosystem of applications, enables users to manage accounts and make payments securely and efficiently by leveraging innovations in the OmnichainL2 Protocol.  

Applications interact with the OmnichainL2 blockchain to issue transactions and invoke smart contract functions from OmnichainL2 Core Contracts. Third parties can also deploy custom smart contracts that their applications can call, integrating with OmnichainL2 Core Contracts as needed.  

Some applications may use centralized cloud services to enhance user experience. For example, the OmnichainL2 Wallet employs push notifications and a transaction activity feed for better usability.  

The **OmnichainL2 blockchain and OmnichainL2 Core Contracts together form the OmnichainL2 Protocol**.  


## OmnichainL2 Network Topology  

The OmnichainL2 network consists of machines running the OmnichainL2 blockchain software in various roles:  

### **Validators**  

Validators collect transactions from other nodes, execute associated smart contracts, and produce new blocks. They participate in a Byzantine Fault Tolerant (BFT) consensus mechanism to maintain network security and integrity.  

Since BFT protocols scale only to a few hundred participants and can tolerate at most one-third of them acting maliciously, a proof-of-stake mechanism limits the number of validator nodes.  

### **Full Nodes**  

Most machines running the OmnichainL2 blockchain software operate as full nodes rather than validators. Unlike Proof-of-Work networks, OmnichainL2 nodes do not engage in "mining." Instead, their primary role is to:  

- Serve requests from light clients  
- Forward transactions in exchange for transaction fees  

This system creates a **permissionless onramp** for individuals in the community to earn currency.  

Full nodes maintain at least a partial history of the blockchain by transferring blocks among themselves and can join or leave the network at any time.  

### **Light Clients**  

Applications such as the OmnichainL2 Wallet run a **light client** version of the OmnichainL2 blockchain software on users' devices. Light clients:  

- Connect to full nodes to request account and transaction data  
- Sign and submit new transactions  
- Do **not** store the full blockchain state  


## **OmnichainL2 Wallet**  

The **OmnichainL2 Wallet** is a self-custody wallet that allows users to manage their funds using their own private keys and accounts. It supports:  

- **Trustless transactions:** Users can send transactions and check balances without relying on a third party.  
- **Peer-to-peer light client protocol:** This ensures security and decentralization while interacting with the blockchain.  

However, the wallet does use some centralized cloud services to enhance user experience, including:  

- **Google Play Services**: Preloads invitations within the app.  
- **OmnichainL2 Wallet Notification Service**: Sends push notifications when a user receives a payment or payment request.  
- **OmnichainL2 Wallet Blockchain API**: Provides a GraphQL API for querying transactions per account, used for the transaction activity feed.  

When users download the OmnichainL2 Wallet from platforms like the Google Play Store, they trust both **cLabs (or the entity providing the app) and Google** to deliver a correct binary. Most users consider this reliance on centralized services worthwhile for improved functionality.  


OmnichainL2 continues to evolve as an Ethereum Layer 2, ensuring scalability, accessibility, and a seamless user experience. For the latest updates, refer to the **[OmnichainL2 L2 documentation](#)**.  
