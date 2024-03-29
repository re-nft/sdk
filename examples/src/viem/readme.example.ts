import {
  DEPLOYMENT_SYLVESTER_ETHEREUM_MAINNET_V0,
  PaymentToken,
  SylvesterV0SDK,
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

const sdk = new SylvesterV0SDK({
  account,
  deployment: DEPLOYMENT_SYLVESTER_ETHEREUM_MAINNET_V0,
  publicClient,
  walletClient,
});

const main = async () => {
  // ---------------- LENDING ----------------------

  // collateral solution
  // const renft = new Azrael(wallet);
  // * for collateral free (import Sylvester from index):

  const E721_ADDR = ['0xCDf60B46Fa88e74DE7e1e613325E386BFe8609ad'];
  const E721_TOKENID = ['3'];
  const lendAmount = [1];
  const maxRentDuration = [1];
  const dailyRentPrice = [1.1];
  const paymentToken = [PaymentToken.WETH];

  const nftStandard = [1, 1];
  const nftAddress = [
    '0x495f947276749ce646f68ac8c248420045cb7b5e',
    '0xd07dc4262bcdbf85190c01c996b4c06a461d2430',
  ];
  const tokenID = [
    '65385238396461245548909757441444140644847314737463192205847680215270719225857',
    '73166',
  ];
  const lendingID = ['133', '132'];
  const rentDuration = [1, 1];
  const rentAmount = ['1', '1'];

  // Azrael Lend Transaction
  let txnHash = await sdk.lend(
    nftStandard,
    E721_ADDR,
    E721_TOKENID,
    lendAmount,
    maxRentDuration,
    dailyRentPrice,
    paymentToken
  );

  // -------------------- RENTING ----------------------

  // Sylvester Rent Transaction
  txnHash = await sdk.rent(
    nftStandard,
    nftAddress,
    tokenID,
    lendingID,
    rentDuration,
    rentAmount
  );

  return txnHash;
};

main()
  .then(console.log)
  .catch(console.error);
