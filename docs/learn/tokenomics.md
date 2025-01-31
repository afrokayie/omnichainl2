---
sidebar_position: 5
---

# Tokenomics

## Overview
OmnichainL2’s token economy is designed to create sustainable funding structures for empowering its ecosystem, growth initiatives, and strategic investments. Many public blockchain projects have monetary systems that solely incentivize their node operators (miners or block producers), focusing only on the technical aspect of network maintenance. However, such designs miss out on the importance of incentivizing other types of participants who contribute to the growth of the network’s token economy or invest in long-term growth prospects. In contrast, OmnichainL2’s token economy is designed to compensate more diverse forms of contributions from a wider range of participants and has a built-in funding structure to procure sustained resources to fuel future growth initiatives and strategically sourced investment projects in addition to maintaining its blockchain nodes.

## Funding Structure
OmnichainL2’s funding structure runs continuously with OmnichainL2 network’s block generation. With every new block, newly issued OMNICH and the sum of transaction fees used in the block (collectively called “block reward”) are aggregated and distributed to the following three destination accounts in accordance to the predetermined ratio:

- **Validators and Community:** 50%
  - Block proposer rewards: 20% of the 50% (10% of total)
  - Staking rewards: 80% of the 50% (40% of total)
- **OmnichainL2 Ecosystem Fund (OEF):** 25%
- **OmnichainL2 Infrastructure Fund (OIF):** 25%

9.6 OMNICH will be minted for every new block. This implies that approximately 300 million OMNICH will be minted annually, which is equivalent to 5.2% annual inflation against the total OMNICH tokens in the market (the annual inflation rate is subject to change through the OmnichainL2 Governance Process). Transaction fees are charged and metered according to the pre-determined fee tables. For detailed information about the transaction fees, please refer to Transaction Fees.

## OmnichainL2 Governance Council Reward
The OmnichainL2 Governance Council is the collective group of Core Cell Operators (CCOs). Council members are responsible for maintaining Core Cells (CCs), which makes the Council an essential body in the OmnichainL2 ecosystem responsible for providing the underlying infrastructure. To become a Council member, the candidate must undergo a qualification review by the OmnichainL2 Governance Process and must stake at least 5 million OMNICH. The OmnichainL2 Governance Council Reward is a structure for incentivizing Council members to continue to provide a stable foundation for the OmnichainL2 ecosystem.

### OmnichainL2 Governance Council Reward Mechanism
For each block in the OmnichainL2 blockchain, a Committee is formed by randomly selecting members from the OmnichainL2 Governance Council (GC). This Committee consists of a single member who is assigned the role of Proposer, while the remaining Committee members take on the role of Validators. Once a block is successfully created and appended to the OmnichainL2 blockchain, the block reward is distributed among the Council members and various funds according to the previously mentioned ratios.

All Council members have an equal probability of being selected as the Proposer for a given block, and the block proposer reward is distributed evenly among them. However, the GC staking reward is allocated proportionally based on the amount of OMNICH staked by each member, minus the minimum requirement of 5 million OMNICH. This means that Council members who stake a larger amount of OMNICH beyond the minimum threshold will receive a greater share of the staking reward compared to those who stake less. As a result, Council members are incentivized to stake more OMNICH to maximize their potential rewards from the GC staking award portion of the block reward distribution.

As long as the minimum 5 million OMNICH staking requirement is met, OmnichainL2 Governance Council members can freely stake or unstake their OMNICH. Staking information is updated every 86,400 blocks, and newly staked OMNICH comes into effect two update cycles later from when the staking is completed. Withdrawing staked OMNICH requires one week of delay to prevent malicious members from immediately exiting.

### Penalty for Misbehaving Council Members
A Council member may be subject to penalties for conducting misbehaviors defined below. In the future, more penalty rules can be established and refined through the OmnichainL2 Governance Process.

- **Causing Safety Failure:**
  - A Council member selected as Proposer may not create more than one block at the same height.
  - A Council member selected as Proposer may not intentionally omit certain transactions.
- **Causing Liveness Failure:**
  - A Council member selected as Proposer must create a valid block.
  - A Council member selected as Validator must validate the block proposed by the Proposer.

## OmnichainL2 Ecosystem Fund
The OmnichainL2 Ecosystem Fund (OEF) was established to support OmnichainL2's mission of enabling greater transparency and verifiability. It is funded by 25% of the total OMNICH issued when creating a block.

The OmnichainL2 Ecosystem Fund will be used to fund activities that improve the OmnichainL2 ecosystem, such as:

- **Service Contribution Reward (SCR):** The OEF will provide rewards to service developers or users operating on the integrated ecosystem, as compensation for directly or indirectly contributing to the enhancement of the ecosystem's value.
- **Building our Developer Community:** The OEF will support various initiatives including hackathons, development education programs, collaborative research with academia, and collaboration with various DAOs to foster and grow the OmnichainL2 developer community.
- **Fostering Ecosystem Services and Infrastructure:** The OEF will support essential ecosystem infrastructure, alongside the development of services with clear utility and provide marketing support.
- **OmnichainL2 Eco Fund Indirect Investment:** The OEF will make indirect mid-to-long-term investments by entrusting specialized crypto VCs. A portion of the profits generated upon subsequent investment recovery will be either burned or returned to the OmnichainL2 ecosystem.
- **Governance Committee Budget:** This budget is allocated for the operation of committees in specific sectors such as Gaming, DeFi, and Community. These committees aim to grow the OmnichainL2 Blockchain ecosystem in their respective sectors.
- **Other ecosystem and community-building activities.**

The administration of the OmnichainL2 Ecosystem Fund follows a process in which the Governance Council (GC) reviews and approves the use of funds in public forums on OmnichainL2 Square. The Foundation will submit a quarterly budget proposal for each category to the GC for approval. Within the approved budget, each specific use will be reviewed and approved again by the GC. All execution details are transparently disclosed.

New proposals for the use of OEF can be made via the GC, requiring individual approval. Plans are in place to develop a structure allowing more ecosystem participants to efficiently propose and participate in OEF use. For categories requiring specialized and rapid decision-making, separate governance committees may operate.

## OmnichainL2 Infrastructure Fund
OmnichainL2 Infrastructure Fund (OIF) is an operational fund that will focus on these main categories:

- **Mainnet and Essential Infrastructure R&D:** This includes advancing research on the latest technologies related to mainnet and infrastructure, foundation-led service development, and infrastructure establishment.
- **Ecosystem Acceleration:** This includes token swap, financial support for small-scale OmnichainL2 Blockchain ecosystem partners, attracting new GC members, and providing market liquidity.
- **Foundation Operations:** This includes operating expenses such as development, accounting, legal affairs, IT infrastructure operations, marketing, and labor costs, as well as financial management and fundraising costs.

OIF is funded by 25% of the total OMNICH issued when creating a block. It is executed by the foundation through an internal control system after a prior announcement of the budget plan for each detailed category. All execution details are transparently disclosed.

The foundation directly establishes a budget plan and executes the funds for OIF. To ensure transparent execution, the foundation discloses the budget plans and execution details in advance and afterward.

## Treasury Rebalancing
To ensure the flexibility and adaptability of OmnichainL2's token economy, a Treasury Rebalance mechanism has been implemented. This process allows for adjustments to the treasury funds in response to changing ecosystem needs and market conditions.

### Treasury Rebalance Contract
The Treasury Rebalance Contract is a smart contract designed to manage the rebalancing process in a transparent and secure manner. At its core, the contract operates as a finite state machine, progressing through stages such as initialization, registration, approval, and finalization. This structured approach ensures that all stakeholders have the opportunity to review and approve changes before they are implemented.

Key features of this contract include:

- **Flexible Balance Adjustment:** The contract supports both increases and decreases in total fund balance, enabling comprehensive treasury management.
- **Aligned Rebalance Timing:** The rebalance block number can be set to align with relevant hard fork block numbers, providing better synchronization with network upgrades.
- **Transparent Execution:** The entire rebalancing process is recorded on the blockchain through the TreasuryRebalance contract, maintaining the ecosystem's commitment to openness and verifiability.
- **Validator Consensus:** The rebalance event occurs only after reaching consensus among block validators, ensuring network-wide agreement on the changes.
- **Immutable Record:** After execution, a detailed memo of the rebalance event is uploaded to the contract, providing an immutable record of the changes for future reference and auditing.

This Treasury Rebalancing mechanism allows OmnichainL2 to maintain a dynamic and responsive token economy, better serving the evolving needs of its ecosystem while upholding principles of transparency and security. By leveraging smart contract technology and a consensus-based approach, it provides a structured and verifiable way to adjust treasury funds, ensuring that the OmnichainL2 blockchain can adapt to changing circumstances while maintaining the trust of its community.
