const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
import { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } from "../constants/index";

async function main() {
  //address of the whitelist contract that you deployd in your previous module
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  //URL from where we can extract the metadata for the crypto dev nft
  const metadataUrl = METADATA_URL;
  //  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  // so cryptoDevsContract here is a factory for instances of our CryptoDevs contract.

  const cryptoDevsContract = await ethers.getContractFactory("CryptoDevs");

  //deploy the contract
  const deployedCryptoDevsContract = await cryptoDevsContract.deploy(
    metadataUrl,
    whitelistContract
  );
  //wait for it to finish deploying
  await deployedCryptoDevsContract.deployed();

  //print the address of the deployed contract
  console.log(
    "CryptoDevs contract deployed to:",
    deployedCryptoDevsContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
