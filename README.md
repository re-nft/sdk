**ReNFT** is a multi-chain highly gas-optimised NFT rental protocol and platform that can be whitelabel integrated into any project to enable collateral-free in-house renting, lending, and reward share (scholarship automation).

<p align="center">
  <a href="https://renft.io/"><img width="350" height="208" src="https://i.imgur.com/WgB9HzK.png" alt='renft-cat'></a>
</p>

<p align="center"><strong>ReNFT</strong> <em>- A leading multi-chain NFT rental protocol.</em></p>

<p align="center">
<a href="https://renft.io/">
    <img src="https://img.shields.io/npm/v/@renft/sdk?style=for-the-badge" alt="Package version">
    <img src="https://img.shields.io/npm/l/@renft/sdk?style=for-the-badge" alt="License">
    <img src="https://img.shields.io/bundlephobia/min/@renft/sdk?style=for-the-badge" alt="Minified Size">
    <img src="https://img.shields.io/npm/dm/@renft/sdk?style=for-the-badge" alt="Monthly Downloads">
</a>
</p>

# Install

`yarn add @renft/sdk`

# Usage

Our SDK comes in two flavors. One tuned to use with `ethers` and one tuned to use with `viem`.

The below is a simple example of lending an ERC721, note that the amount is ignored, you will always lend **1** unit of ERC721 token.

If you are having any issues with the below code, go [here](https://github.com/re-nft/sdk/tree/main/examples) and ensure your dependencies for `ethersproject` are the same as ours (in `package.json`).

You might be wondering what 'AZRAEL' refers to in the below import. If so, go to our docs [here](https://docs.renft.io/developers/renft-contracts-addresses). Azrael, Sylvester and Whoopi are our naming conventions to refer to different flavors of our contracts.

## `@renft/sdk/viem`

```javascript
import {
  AzraelV0SDK,
  DEPLOYMENT_AZRAEL_ETHEREUM_MAINNET_V0,
  PaymentToken,
} from '@renft/sdk';
import { createPublicClient, createWalletClient, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { mainnet } from 'viem/chains';

const account = privateKeyToAccount(/* private key */);
const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});
const walletClient = createWalletClient({
  chain: mainnet,
  transport: http(),
});

const sdk = new AzraelV0SDK({
  account,
  deployment: DEPLOYMENT_AZRAEL_ETHEREUM_MAINNET_V0,
  publicClient,
  walletClient,
});

const nftAddress = ['0xCDf60B46Fa88e74DE7e1e613325E386BFe8609ad'];
const tokenId = ['3'];
const lendAmount = [1]; // for ERC721, this is ignored
const maxRentDuration = [1]; // in days (can be returned earlier)
const dailyRentPrice = [1.1]; // this will automatically scale
const nftPrice = [2.2]; // this will automatically scale
const paymentToken = [PaymentToken.WETH];

const lend = async () => {
  const txnHash = await sdk.lend(
    nftAddress,
    tokenId,
    lendAmount,
    maxRentDuration,
    dailyRentPrice,
    nftPrice,
    paymentToken
  );

  return txnHash;
};

lend()
  .then(console.log)
  .catch(console.error);
```

## `@renft/sdk/ethers`

```javascript
import { JsonRpcProvider } from '@ethersproject/providers';
import { Wallet } from '@ethersproject/wallet';
import {
  DEPLOYMENT_AZRAEL_ETHEREUM_MAINNET_V0,
  PaymentToken,
} from '@renft/sdk/core';
import { getRenftContract } from '@renft/sdk/ethers';

// const walletMnemonic = Wallet.fromMnemonic(`<your mnemonic>`);
const provider = new JsonRpcProvider('<your provider uri>');
const privKey = '<privateKey>';
let wallet = new Wallet(privKey);
wallet = wallet.connect(provider);

const main = async () => {
  const renft = getRenftContract({
    deployment: DEPLOYMENT_AZRAEL_ETHEREUM_MAINNET_V0,
    signer: wallet,
  });

  const nftAddress = ['0xCDf60B46Fa88e74DE7e1e613325E386BFe8609ad'];
  const tokenId = ['3'];
  const lendAmount = [1]; // for ERC721, this is ignored
  const maxRentDuration = [1]; // in days (can be returned earlier)
  const dailyRentPrice = [1.1]; // this will automatically scale
  const nftPrice = [2.2]; // this will automatically scale
  const paymentToken = [PaymentToken.WETH];

  const txn = await renft.lend(
    nftAddress,
    tokenId,
    lendAmount,
    maxRentDuration,
    dailyRentPrice,
    nftPrice,
    paymentToken
  );

  const receipt = await txn.wait();
  return receipt;
};

main()
  .then(receipt => {
    console.log(receipt);
  })
  .catch(e => {
    console.warn(e);
  });
```

For more usage examples, see `test` and `examples` folders on our [github repo](https://github.com/re-nft/sdk/tree/main/examples).

Please, also take the time to familiarise yourself with our [docs](https://docs.renft.io).

## Deploying New SDK versions

> Make sure the `CHANGELOG.md` is updated accordingly!

Create a utility shell scripts for deploys locally like the one below:

```bash
#!/bin/bash
set -e
yarn build
yarn publish
```

make sure to make it executable:

`chmod +x deploy.sh`
