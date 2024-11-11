import { mnemonicToWalletKey } from "@ton/crypto";
import { WalletContractV4 } from "@ton/ton";
import dotenv from "dotenv";

async function main() {
  // open wallet v4 (notice the correct wallet version here)
  const mnemonic = dotenv.config().parsed?.mnemonic || "";
  const key = await mnemonicToWalletKey(mnemonic.split(" "));
  const wallet = WalletContractV4.create({ publicKey: key.publicKey, workchain: 0 });

  // print wallet address
  console.log(wallet.address.toString({ testOnly: true }));

  // print wallet workchain
  console.log("workchain:", wallet.address.workChain);
}

main();