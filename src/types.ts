export enum EthereumNetworkType {
  ETHEREUM_MAINNET = 'ETHEREUM_MAINNET',
  POLYGON_MAINNET = 'POLYGON_MAINNET',
  AVALANCHE_MAINNET = 'AVALANCHE_MAINNET',
  AVALANCHE_FUJI_TESTNET = 'AVALANCHE_FUJI_TESTNET',
}

export type EthereumNetworkLike<T extends EthereumNetworkType> = {
  readonly type: T;
  readonly chainId: number;
};

export type Network =
  // | SolanaNetwork
  | EthereumNetworkLike<EthereumNetworkType>;

export enum PaymentToken {
  SENTINEL = 0, // denotes non-existence of payment token. i.e. default value signifying it hasn't been set
  WETH = 1,
  DAI = 2,
  USDC = 3,
  USDT = 4,
  TUSD = 5,
  ACS = 7, // 6 is reserved for the RENT token when it is released
}

export type PaymentTokenDetails = {
  address: String;
  scale: number;
};

export enum NFTStandard {
  E721 = 0,
  E1155 = 1,
}

// A RenftContractType represents a unique "style" of rental functionality:
//
// + Azrael: A collateralized rental; an up-front fee is required to prevent a renter from leaving a lender empty-handed.
// + Sylvester: A non-collateralized rental; have an escrow contract programmatically safeguard the safety of your asset.
// + Whoopi A non-collateralized rental which is cycle-driven, and includes revenue-share for counterparties.
//
// These contracts can be redeployed to new addresses and may be slightly modified to include new features
// and use cases. These are intended to be ideologically backwards-compatible, though their interfaces
// may not always be; (for example, smart contracts may expect the caller to provide additional arguments).
//
// Significantly new styles of rentals we implement in future will necessitate a new RenftContractType.
export enum RenftContractType {
  AZRAEL = 'AZRAEL',
  SYLVESTER = 'SYLVESTER',
  WHOOPI = 'WHOOPI',
}

export enum AzraelVersion {
  V0 = 'V0',
}

export enum WhoopiVersion {
  V0 = 'V0',
}

export enum SylvesterVersion {
  V0 = 'V0',
  V1 = 'V1',
}

type AbstractRenftContractDeployment<
  ContractType extends RenftContractType,
  ContractVersion
> = {
  readonly contractAddress: string;
  readonly type: ContractType;
  readonly version: ContractVersion;
  readonly network: Network;
};

export type RenftAzraelDeployment = AbstractRenftContractDeployment<
  RenftContractType.AZRAEL,
  AzraelVersion
>;

export type RenftSylvesterDeployment = AbstractRenftContractDeployment<
  RenftContractType.SYLVESTER,
  SylvesterVersion
>;

export type RenftWhoopiDeployment = AbstractRenftContractDeployment<
  RenftContractType.WHOOPI,
  WhoopiVersion
>;

export type RenftContractDeployment =
  | RenftAzraelDeployment
  | RenftSylvesterDeployment
  | RenftWhoopiDeployment;

export type RenftContractDeployments = readonly RenftContractDeployment[];

export enum RenftContracts {
  SYLVESTER = 0,
  SYLVESTER_POLYGON = 1,
  AZRAEL = 2,
  WHOOPI_AVALANCHE = 3,
  WHOOPI_FUJI = 4,
}
