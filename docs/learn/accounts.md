---
sidebar_position: 3
---

# Accounts

## OmnichainL2 Accounts

### Overview of Account, State, and Address

An account in OmnichainL2 is a data structure containing information about a person's balance or a smart contract. OmnichainL2's state is the collection of all its accounts' states - that is, the past and current state of all data stored across OmnichainL2's accounts. When a transaction is executed on an OmnichainL2 node, the state of OmnichainL2 consequently changes across all its nodes. The state should be the same across all nodes in the OmnichainL2 network if they have processed the same blocks in the same order. State information of each account is associated with a 20-byte address, which is used to identify each account.

### Decoupling Key Pairs From Addresses

An account in a typical blockchain platform is associated with a cryptographically processed address of a certain length that usually looks like this: `0x0fe2e20716753082222b52e753854f40afddffd2`. This address is strongly coupled with a key pair. If a key pair is chosen, the address is derived from the public key. This has many disadvantages in terms of user experience. Some of them are the following:

- It is impossible for users to have addresses they want.
- It is impossible for users to use multiple key pairs to increase security of their accounts.
- It is impossible for users to change the account's key pair when the private key is accidentally exposed or when users want to update the private key periodically to increase the account's security.

Those are big hurdles that users cannot think of an address as an identifier in the blockchain platform. To clear this hurdle, OmnichainL2 provides a feature that users can choose their addresses and key pairs. With this feature, users can choose addresses that they want and they can use multiple key pairs to increase security. The number of key pairs can be one or more, and the key pairs can have different roles. For details of multiple key pairs or role-based keys, please refer to Multiple Key Pairs & Role-Based Keys.

It is worth noting that OmnichainL2 also supports the old scheme that a key pair and an address are strongly coupled.

### Multiple Key Pairs and Role-Based Keys

As described before, when the private key is stolen, exposed, or somehow compromised, there is nothing to do to restore the account’s security: the best option is to generate another key pair to create a new account, and migrate the balance from the old compromised account to the new one. Lack of support for advanced key schemes such as multi-sig or usage-specific key is yet another source of major inconvenience. To address those problems more efficiently, OmnichainL2 accounts provide the following capabilities:

- OmnichainL2 account allows the key pair associated with the account to be changed.
- OmnichainL2 account supports multiple key pairs, along with the ability to assign each key with different purpose.
- OmnichainL2 account maintains compatibility with accounts having a single key that is strongly coupled with the address.

By utilizing OmnichainL2 account’s role-based multi-key support, end-users can better handle real-life security risk situations such as private key mismanagement. For example, when a user realizes that his or her private key has been exposed, the user can simply replace the compromised private key by removing the exposed key pair from his or her account and creating a new key pair to replace them. This could be achieved by using a dedicated key used for updating account information, created in advance and stored separately from the compromised private key.

### OmnichainL2 Wallet Key Format

OmnichainL2 wallet key format is provided to easily handle a private key along with the corresponding address. It makes it easier for a user to maintain his/her private key with an address. The format is `0x{private key}0x{type}0x{address in hex}` in hexadecimal notation, where `{type}` must be `00`. Other values are reserved. An example is shown below:

```
0x45a915e4d060149eb4365960e6a7a45f334393093061116b197e3240065ff2d80x000xa94f5374fce5edbc8e2a8697c15331677e6ebf0b
```

### OmnichainL2 Account Types

There are two types of accounts in OmnichainL2: externally owned accounts (EOAs) and smart contract accounts (SCAs).

#### Externally Owned Accounts (EOAs)

Externally owned accounts have information such as nonce and balance. This type of account does not have code or storage. EOAs are controlled by private keys and do not have code associated with them. An EOA can be created using key pairs and subsequently controlled by anyone with the key pairs. The account key is described in the section Account Key.

#### Smart Contract Accounts (SCAs)

In contrast to EOAs, SCAs have code associated with them and are controlled by their code. SCAs are created by smart contract deployment transactions; once deployed, an SCA cannot initiate new transactions by itself and must be triggered by another account, either by an EOA or another SCA.

### OmnichainL2 Account Type ID

Below are the Account Type IDs assigned to each Account Type.

| Account Type | Account Type ID |
|-------------|----------------|
| Externally Owned Account (EOA) | `0x1` |
| Smart Contract Account (SCA) | `0x2` |

### Account Key

An account key represents the key structure associated with an account.

#### AccountKeyNil

AccountKeyNil represents an empty key. If an account tries to have an AccountKeyNil object, the transaction will fail. AccountKeyNil is used only for `TxTypeAccountUpdate` transactions with role-based keys. For example, if an account tries to update `RoleAccountUpdate` key only, the key field of the `TxTypeAccountUpdate` transaction would be:

```
[AccountKeyNil, NewKey, AccountKeyNil]
```

Then, only the `RoleAccountUpdate` key is updated. Other roles are not updated. Refer to the `AccountKeyRoleBased` for more detail.

#### AccountKeyLegacy

AccountKeyLegacy is used for the account having an address derived from the corresponding key pair. If an account has AccountKeyLegacy, the transaction validation process follows:

1. Get the public key from `ecrecover(txhash, txsig)`.
2. Get the address of the public key.
3. The address is the sender.

#### AccountKeyPublic

AccountKeyPublic is used for accounts having one public key. If an account has an AccountKeyPublic object, the transaction validation process follows:

1. Get the public key derived from `ecrecover(txhash, txsig)`.
2. Check that the derived public key is the same as the corresponding account's public key.

#### AccountKeyFail

If an account has the key `AccountKeyFail`, the transaction validation process always fails. It can be used for smart contract accounts so that a transaction...

---

*Note: From OmnichainL2 v1.7.0 onwards, the `vmVersion` attribute will be added to the Smart Contract Account.*
