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

What is **ReNFT**?

**ReNFT** is a multi-chain highly gas-optimised NFT rental protocol and platform that can be whitelabel integrated into any project to enable collateral-free in-house renting, lending, and reward share (scholarship automation).

# Install

`yarn add @renft/sdk`

# Usage

The below is a simple example of lending an ERC721, note that the amount is ignored, you will always lend **1** unit of ERC721 token.

```javascript
import { JsonRpcProvider } from '@ethersproject/providers';
import { Wallet } from '@ethersproject/wallet';
import { DEPLOYMENT_AZRAEL_ETHEREUM_MAINNET_V0, PaymentToken, getRenftContract } from '@renft/sdk';

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
  const maxRentDuration = [1];  // in days (can be returned earlier)
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

For more usage examples, see `test/utils.test.ts`

Take time to familiarise yourself with our [docs](https://docs.renft.io).

## Contract name code-mapping

For contract name code-mapping see [this](https://docs.renft.io/developers/contracts-name-mapping).


## PaymentToken enum Deprecation

The `PaymentToken` enum is deprecated and will be removed in the next major version. Going forward `PaymentToken` will defined as a `keccak256(resolverAddress:chainId:slotId)`. For example, `WETH` on Ethereum will be `0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2:1:0`. 
Notice the slotId of `0`. The slotId is a cardinal parameter to give a single resolver the ability to resolve to multiple token addresses on the same chain. For example, `WBTC` may occupy the second slot given by `0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599:1:1`. 

All the `PaymentToken` values will be available through the reNFT Resolver Subgraph(s). More information to come...
