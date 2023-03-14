// This js file is to get the details of the last 10  blocks mined when 'transfer' function was called in DAI contract
const { ethers } = require("ethers");

const INFURA_ID = "";
const address = ""; //DAI contract address
const provider = new ethers.provider.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);
const ERC20_ABI = [
  "function name() view returns(string)",
  "function symbol() view returns(string)",
  "function totalSupply() view returns(uint256)",
  "function balanceOf(address) view returns(uint)",
];

const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
  const block = await provider.getBlockNumber();

  const transferEvents = new contract.queryFilter(
    "Transfer",
    block - 10,
    block
  );
  console.log(transferEvents);
};

main();
