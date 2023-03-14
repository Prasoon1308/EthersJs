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
  const name = await contract.name();
  const symbol = await contract.symbol();
  const totalSupply = await contract.totalSupply();

  console.log(`\nReading from ${address}\n`);
  console.log(`Name: ${name}`);
  console.log(`Symbol: ${symbol}`);
  console.log(`Total Supply: ${totalSupply} \n`);

  const balance = await contract.balanceOf("");
  console.log(`Balance Returned: ${ethers.utils.formatEther(balance)} \n`);
};

main();
