const { ethers } = require("ethers");

const INFURA_ID = "";
const provider = new ethers.provider.JsonRpcProvider(
  "https://kovan.infura.io/v3/${INFURA_ID}"
);

const account1 = ""; //account address of sender
const account2 = ""; //account address of receiver
const privateKey1 = ""; // private key of account 1
const wallet = new ethers.Wallet(privateKey1, provider);

const ERC20_ABI = [
  "function balanceOf(address) view returns(uint)",
  "function transfer(address to, uint amount) returns(bool)",
];

const address = ""; // contract address
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
  const balance = await contract.balanceOf(account1);

  console.log("\n Reading from ${address}");
  console.log("Balance of sender is ${balance} \n");

  const contractWithWallet = contract.connect(wallet);

  const tx = await contractWithWallet.transfer(account2, balance);
  await tx.wait();
  console.log(tx);

  const balanceOfSender = await contract.balanceOf(account1);
  console.log("\nFinal balance of sender is ${balanceOfSender}");

  const balanceOfReceiver = await contract.balanceOf(account2);
  console.log("Final balance of receiver is ${balanceOfReceiver}\n");
};
main();
