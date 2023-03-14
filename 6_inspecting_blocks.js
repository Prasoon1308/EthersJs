// how to look at blockchain and inspect information from blocks themselves

const { ethers } = require("ethers");

const INFURA_ID = "";
const address = ""; //DAI contract address
const provider = new ethers.provider.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);

const main = async () => {
  const block = await provider.getBlockNumber();
  console.log(`Block Number: ${block} \n`);

  const blockInfo = await provider.getBlock(block);
  console.log(blockInfo);

  const { transactions } = await provider.getBlockWithTransactions(block);
  console.log("\n Logging first transaction in block:\n");
  console.log(transactions[0]);
};

main();
