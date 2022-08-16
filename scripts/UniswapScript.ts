import { ethers } from "hardhat";

async function main() {

  //Interact with uniswap swapTokenorExactToken function
  //swap usdt to dai
  //TO-DO
  //ERC20 token interface
  //Approve the uniswap contract
  //check balance of signer before swap
  //swap token calling the function 
  //check balance after swap

  const USDTAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
  const DAIAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
  const UNIRouter = "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a";
  const USDTHolder = "0x69166e49d2fd23E4cbEA767d7191bE423a7733A5";

  const helpers = require("@nomicfoundation/hardhat-network-helpers");
  const impersonatedSigner = helpers.impersonatedSigner(USDTHolder);

  const USDT = ethers.getContractAt("IERC20", USDTAddress, impersonatedSigner);
  const DAI = ethers.getContractAt("IERC20", DAIAddress, impersonatedSigner);
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
