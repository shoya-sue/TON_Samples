// =====================================================
// Step 7: ウォレットアドレスの生成(だけど今はWalletAddressの確認)
// 実行方法: `$ node --loader ts-node/esm src/step7.ts`
// 返却値: ウォレットアドレスとワークチェーンの情報
// =====================================================

import { mnemonicToWalletKey } from "@ton/crypto";
import { WalletContractV4 } from "@ton/ton";
import dotenv from "dotenv";

async function main() {
  // 環境変数からニーモニックフレーズを取得
  const mnemonic = dotenv.config().parsed?.mnemonic || "";
  // ニーモニックフレーズからウォレットキーを生成
  const key = await mnemonicToWalletKey(mnemonic.split(" "));
  // ウォレットコントラクトのインスタンスを生成
  const wallet = WalletContractV4.create({ publicKey: key.publicKey, workchain: 0 });

  // print wallet address
  console.log(wallet.address.toString({ testOnly: true }));

  // print wallet workchain
  console.log("workchain:", wallet.address.workChain);
}

main();