---
sidebar_position: 4
---

# Your First Smart Contract

Tokenizing real estate on the Omnichain blockchain allows fractional ownership, seamless transfer of assets, and improved transparency. In this guide, we'll create a smart contract for tokenized real estate using Solidity and deploy it on Omnichain.

### Prerequisites

1. **Set Up Development Environment**:
    - Install [Node.js](https://nodejs.org/).
    - Install [Hardhat](https://hardhat.org/):
      ```bash
      npm install --save-dev hardhat
      ```

2. **Install Dependencies**:
    ```bash
    npm install @openzeppelin/contracts dotenv @nomiclabs/hardhat-ethers ethers
    ```

3. **Set Up Omnichain Testnet**:
    - Obtain testnet funds for deploying contracts.
    - Configure your wallet and RPC provider.


### Smart Contract Implementation

Here’s a Solidity contract for tokenized real estate:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenizedRealEstate is ERC721, Ownable {
    uint256 public nextTokenId;
    mapping(uint256 => string) private _propertyDetails;

    constructor() ERC721("OmnichainRealEstate", "ORE") {}

    function mintProperty(address to, string memory propertyDetails) public onlyOwner {
        uint256 tokenId = nextTokenId;
        _safeMint(to, tokenId);
        _propertyDetails[tokenId] = propertyDetails;
        nextTokenId++;
    }

    function getPropertyDetails(uint256 tokenId) public view returns (string memory) {
        require(_exists(tokenId), "Token ID does not exist");
        return _propertyDetails[tokenId];
    }
}
```

### Hardhat Configuration

Update `hardhat.config.js` to include Omnichain settings:

```javascript
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    omnichainTestnet: {
      url: process.env.OMNICHAIN_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
```

Create a `.env` file to store sensitive information:

```plaintext
OMNICHAIN_RPC_URL=<Your Omnichain RPC URL>
PRIVATE_KEY=<Your Private Key>
```

### Deploy the Contract

Create a `scripts/deploy.js` file:

```javascript
async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const RealEstate = await ethers.getContractFactory("TokenizedRealEstate");
  const realEstate = await RealEstate.deploy();

  await realEstate.deployed();
  console.log("TokenizedRealEstate deployed to:", realEstate.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
```

Run the deployment script:

```bash
npx hardhat run scripts/deploy.js --network omnichainTestnet
```

### Testing the Contract

Interact with the deployed contract using Hardhat console:

```bash
npx hardhat console --network omnichainTestnet
```

Example interactions:

```javascript
const contract = await ethers.getContractAt("TokenizedRealEstate", "<Deployed_Address>");

// Mint a property
await contract.mintProperty("0xRecipientAddress", "Property at 123 Blockchain Lane");

// Retrieve property details
const details = await contract.getPropertyDetails(0);
console.log(details);
```

### Summary

You’ve successfully created and deployed a tokenized real estate contract on Omnichain. This framework can be extended with features like payment integration, fractional ownership, or governance mechanisms.
