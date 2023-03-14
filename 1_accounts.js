const { ethers } = require("ethers");

const INFURA_ID = "";
const address = "";
const provider = new ethers.provider.JsonRpcProvider(
  "https://mainnet.infura.io/v3/${INFURA_ID}"
);

const main = async () => {
  const balance = await provider.getBalance(address);
  console.log(
    "\n ETH balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH \n"
  );
};

main();
