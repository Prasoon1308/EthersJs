const ethers = require("ethers");

const provider = new ethers.provider.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);
const INFURA_ID = "";

const account1 = ""; //sender
const account2 = ""; //receiver

const privateKey1 = ""; //sender private key
const wallet = new ethers.Wallet(privateKey1, provider);

const main = async () => {
  // show  account1 balance before transfer
  const senderBalanceBefore = await provider.getBalance(account1);
  // show  account2 balance before transfer
  const receiverBalanceBefore = await provider.getBalance(account2);

  console.log(
    "\n Sender balance before transaction: ${ethers.utils.formatEther(senderBalanceBefore)}"
  );
  console.log(
    "Receiver balnce before transaction: ${ethers.utils.formatEthers(receiverBalanceBefore)}\n"
  );
  //send ether
  const tx = await wallet.sendTransaction({
    to: account2,
    value: ethers.utils.parseEthers("0.025"),
  });

  // wait for transaction to be mined
  await tx.wait();
  console.log(tx);

  // show  account1 balance before transfer
  const senderBalanceAfter = await provider.getBalance(account1);
  // show  account2 balance before transfer
  const receiverBalanceAfter = await provider.getBalance(account2);

  console.log(
    "Sender balance after transaction: ${ethers.utils.formatEthers(senderBalanceAfter)}\n"
  );
  console.log(
    "Receiver balance after transaction: ${ethers.utils.formatEthers(receiverBalanceAfter)}\n"
  );
};
main();
