import { RenftContracts, PaymentToken, PaymentTokenDetails } from './types';

// * Note, this price does not apply to Whoopi
export const MAX_PRICE = 9999.9999;
export const NUM_BITS_IN_BYTE = 8;

export const ResolverAddress = '0x945e589a4715d1915e6fe14f08e4887bc4019341';
export const ResolverPolygonAddress =
  '0x6884d88Ce56C5C93F46eE23684eBA8628c90B518';
export const ResolverAvalancheAddress =
  '0x23F7F8B03BAF01D5124255fE240E81BbBd3AEc0D';

export const AzraelAddress = '0x94d8f036a0fbc216bb532d33bdf6564157af0cd7';
export const SylvesterAddress = '0xa8D3F65b6E2922fED1430b77aC2b557e1fa8DA4a';
export const SylvesterPolygonAddress =
  '0xfA06cFE34C85Ec6b6D29A6a99806cC68BA0018Fe';
export const WhoopiAvalancheAddress =
  '0x42816FA3cB0aDc3fcAdED3109323c0Bc19215084';

// Resolver related
const SENTINEL: PaymentTokenDetails = {
  address: '',
  scale: 0,
};
const ETHEREUM_WETH: PaymentTokenDetails = {
  address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  scale: 18,
};
const ETHEREUM_DAI: PaymentTokenDetails = {
  address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
  scale: 18,
};
const ETHEREUM_USDC: PaymentTokenDetails = {
  address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  scale: 6,
};
const ETHEREUM_USDT: PaymentTokenDetails = {
  address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  scale: 6,
};
const ETHEREUM_TUSD: PaymentTokenDetails = {
  address: '0x0000000000085d4780B73119b644AE5ecd22b376',
  scale: 18,
};
const POLYGON_WETH: PaymentTokenDetails = {
  address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
  scale: 18,
};
const POLYGON_DAI: PaymentTokenDetails = {
  address: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
  scale: 18,
};
const POLYGON_USDC: PaymentTokenDetails = {
  address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
  scale: 6,
};
const POLYGON_USDT: PaymentTokenDetails = {
  address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
  scale: 6,
};
const POLYGON_TUSD: PaymentTokenDetails = {
  address: '0x2e1AD108fF1D8C782fcBbB89AAd783aC49586756',
  scale: 18,
};
const FUJI_WETH: PaymentTokenDetails = {
  address: '0x40E71a970Ff1fbd21A53b4d2dbc102Be0E1d574f', // couldn't find weth on fuji, so this is dai
  scale: 18,
};
const FUJI_DAI: PaymentTokenDetails = {
  address: '0x40E71a970Ff1fbd21A53b4d2dbc102Be0E1d574f',
  scale: 18,
};
const FUJI_USDC: PaymentTokenDetails = {
  address: '0x43CDA502069B1dFa4f7C1a1625Bc6be47cD0bD88',
  scale: 6,
};
const FUJI_USDT: PaymentTokenDetails = {
  address: '0x051DE28a8B5836f678A13d19EE7F8c167b4Ca54D',
  scale: 6,
};
const FUJI_TUSD: PaymentTokenDetails = {
  address: '0x051DE28a8B5836f678A13d19EE7F8c167b4Ca54D', // couldn't find tusd on fuji, so this is usdt
  scale: 6,
};
const FUJI_ACS: PaymentTokenDetails = {
  address: '0x4a590276DA8E8d660f8ef638464c2D1DF40cEAbA',
  scale: 18,
};

type ResolversType = Record<
  RenftContracts,
  Record<PaymentToken, PaymentTokenDetails>
>;
export const Resolvers: ResolversType = {
  [RenftContracts.SYLVESTER]: {
    [PaymentToken.SENTINEL]: SENTINEL,
    [PaymentToken.WETH]: ETHEREUM_WETH,
    [PaymentToken.DAI]: ETHEREUM_DAI,
    [PaymentToken.USDC]: ETHEREUM_USDC,
    [PaymentToken.USDT]: ETHEREUM_USDT,
    [PaymentToken.TUSD]: ETHEREUM_TUSD,
    [PaymentToken.ACS]: SENTINEL,
  },
  [RenftContracts.SYLVESTER_POLYGON]: {
    [PaymentToken.SENTINEL]: SENTINEL,
    [PaymentToken.WETH]: POLYGON_WETH,
    [PaymentToken.DAI]: POLYGON_DAI,
    [PaymentToken.USDC]: POLYGON_USDC,
    [PaymentToken.USDT]: POLYGON_USDT,
    [PaymentToken.TUSD]: POLYGON_TUSD,
    [PaymentToken.ACS]: SENTINEL,
  },
  [RenftContracts.AZRAEL]: {
    [PaymentToken.SENTINEL]: SENTINEL,
    [PaymentToken.WETH]: ETHEREUM_WETH,
    [PaymentToken.DAI]: ETHEREUM_DAI,
    [PaymentToken.USDC]: ETHEREUM_USDC,
    [PaymentToken.USDT]: ETHEREUM_USDT,
    [PaymentToken.TUSD]: ETHEREUM_TUSD,
    [PaymentToken.ACS]: SENTINEL,
  },
  // TODO: set all of these once you deploy to avalanche
  [RenftContracts.WHOOPI_AVALANCHE]: {
    [PaymentToken.SENTINEL]: SENTINEL,
    [PaymentToken.WETH]: SENTINEL,
    [PaymentToken.DAI]: SENTINEL,
    [PaymentToken.USDC]: SENTINEL,
    [PaymentToken.USDT]: SENTINEL,
    [PaymentToken.TUSD]: SENTINEL,
    [PaymentToken.ACS]: SENTINEL,
  },
  [RenftContracts.WHOOPI_FUJI]: {
    [PaymentToken.SENTINEL]: SENTINEL,
    [PaymentToken.WETH]: FUJI_WETH,
    [PaymentToken.DAI]: FUJI_DAI,
    [PaymentToken.USDC]: FUJI_USDC,
    [PaymentToken.USDT]: FUJI_USDT,
    [PaymentToken.TUSD]: FUJI_TUSD,
    [PaymentToken.ACS]: FUJI_ACS,
  },
};
