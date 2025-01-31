---
sidebar_position: 4
---

# Transactions

Transactions are the core mechanism for state changes on the **OmnichainL2** blockchain. They represent messages passed between accounts, altering balances, deploying smart contracts, or executing contract functions. For example, when a transaction that sends 10 **OMNI** from Alice’s account to Bob’s is executed, Alice's balance decreases by 10 **OMNI**, and Bob's balance increases by 10 **OMNI**. Understanding transactions is fundamental to grasping how **OmnichainL2** works.

## Key Aspects of OmnichainL2 Transactions

### Atomic Operations
Each transaction is treated as a single, indivisible unit. Either the entire transaction succeeds, applying all changes, or it fails, leaving the blockchain state unchanged. This ensures data integrity and prevents partial updates.

### Components
**OmnichainL2** transactions share core components with other blockchains but also have unique elements due to its decoupling of key pairs and addresses. This decoupling enhances flexibility but requires explicit sender information within the transaction. Typical components include:

- **Sender**: The originating account (`from` field). This is explicitly included in **OmnichainL2** transactions because addresses and key pairs are not directly linked.
- **Recipient**: The destination account (`to` field, for value transfers and smart contract interactions).
- **Value**: The amount of **OMNI** being transferred (`value` field, in **wei**).
- **Data**: Additional information (`input` field), often used as input for smart contract execution.
- **Fees**: Calculated based on `gas` (maximum gas allowed) * `gasPrice` (price per unit of gas). Fees are paid in **OMNI** (unit: **wei**, see [link to OMNI units documentation]).
- **Signature** (`v`, `r`, `s` fields): Cryptographic proof authorizing the transaction.

### Transaction Types
**OmnichainL2** offers a variety of transaction types to support different use cases, from basic value transfers to complex smart contract interactions and fee delegation. This flexibility caters to diverse needs and optimizes performance. See the [Implementing Transactions](#) page for details on each type.

### Fee Mechanism
Transactions require fees to incentivize validators. These fees are calculated based on the computational resources consumed (`gas`) and a price per unit of gas (`gasPrice`), which can be dynamic.

### Security
Transactions are cryptographically signed, ensuring authenticity and preventing unauthorized modifications. **OmnichainL2**'s decoupling of key pairs and addresses adds another layer of security.

### Fee Delegation
**OmnichainL2**'s fee delegation feature allows third parties to pay transaction fees on behalf of users, simplifying user onboarding and supporting various business models. This requires two signatures: one from the sender and one from the fee payer. See the [Fee Delegation](#) for its implementation details.

---

This conceptual overview provides a foundation for understanding **OmnichainL2** transactions. The [Implementing Transactions](#) offers a detailed guide for developers.