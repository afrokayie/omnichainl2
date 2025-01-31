---
sidebar_position: 2
---

# Bridges

Learn how to bridge assets between Abstract and Ethereum.

A bridge is a tool that allows users to move assets such as ETH from Ethereum to Abstract and vice versa. Under the hood, bridging works by having two smart contracts deployed:

- A smart contract deployed to Ethereum (L1).
- A smart contract deployed to Abstract (L2).

These smart contracts communicate with each other to facilitate the deposit and withdrawal of assets between the two chains.

### Native Bridge

Abstract has a native bridge to move assets between Ethereum and Abstract for free (excluding gas fees) that supports bridging both ETH and ERC-20 tokens.

- Deposits from L1 to L2 take around ~15 minutes.
- Withdrawals from L2 to L1 currently take up to 24 hours due to the built-in withdrawal delay.

### Try our available bridges:

- [Mainnet bridge](https://mainnet-bridge.example.com)
- [Testnet bridge](https://testnet-bridge.example.com)
