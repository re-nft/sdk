export default [
  {
    inputs: [
      { internalType: 'address', name: 'newResolver', type: 'address' },
      { internalType: 'address', name: 'newAdmin', type: 'address' },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  { inputs: [], name: 'InvalidPortionsSum', type: 'error' },
  { inputs: [], name: 'InvalidProtocolFeeReceivers', type: 'error' },
  { inputs: [], name: 'LendingEmpty', type: 'error' },
  { inputs: [], name: 'LendingNotActive', type: 'error' },
  { inputs: [], name: 'LendingNotEmpty', type: 'error' },
  { inputs: [], name: 'NftTransferFailed', type: 'error' },
  {
    inputs: [{ internalType: 'address', name: 'caller', type: 'address' }],
    name: 'NotAdmin',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'uint8', name: 'errorCode', type: 'uint8' }],
    name: 'NotLendable',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'uint8', name: 'errorCode', type: 'uint8' }],
    name: 'NotPayable',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'uint8', name: 'errorCode', type: 'uint8' }],
    name: 'NotRentable',
    type: 'error',
  },
  { inputs: [], name: 'NotWhitelistedToRent', type: 'error' },
  { inputs: [], name: 'Paused', type: 'error' },
  {
    inputs: [
      { internalType: 'uint8', name: 'rentDuration', type: 'uint8' },
      { internalType: 'uint8', name: 'maxRentDuration', type: 'uint8' },
    ],
    name: 'RentDurationExceedsMaxRentDuration',
    type: 'error',
  },
  { inputs: [], name: 'RentingNotEmpty', type: 'error' },
  { inputs: [], name: 'ReturningNotAllowed', type: 'error' },
  {
    inputs: [
      { internalType: 'address', name: 'lender', type: 'address' },
      { internalType: 'address', name: 'msgSender', type: 'address' },
    ],
    name: 'StopperNotLender',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'nftAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'upfrontRentFee',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address payable[]',
        name: 'allowedRenters',
        type: 'address[]',
      },
      {
        components: [
          {
            internalType: 'address payable[]',
            name: 'beneficiaries',
            type: 'address[]',
          },
          { internalType: 'uint8[]', name: 'portions', type: 'uint8[]' },
        ],
        indexed: false,
        internalType: 'struct IReNFT.RevShare',
        name: 'revShares',
        type: 'tuple',
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'maxRentDuration',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'enum IResolver.PaymentToken',
        name: 'paymentToken',
        type: 'uint8',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'lenderAddress',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'lendingId',
        type: 'uint256',
      },
    ],
    name: 'Lend',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'lendingId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'renterAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'rentDuration',
        type: 'uint8',
      },
    ],
    name: 'Rent',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'lendingId',
        type: 'uint256',
      },
    ],
    name: 'StopLend',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'lendingId',
        type: 'uint256',
      },
    ],
    name: 'StopRent',
    type: 'event',
  },
  {
    inputs: [],
    name: 'flipPaused',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'contract INFTContract',
            name: 'nft',
            type: 'address',
          },
          {
            internalType: 'uint256[]',
            name: 'tokenIds',
            type: 'uint256[]',
          },
          {
            internalType: 'uint256[]',
            name: 'lendingIds',
            type: 'uint256[]',
          },
        ],
        internalType: 'struct IReNFT.Nfts',
        name: 'nfts',
        type: 'tuple',
      },
      {
        internalType: 'uint256[]',
        name: 'upfrontRentFee',
        type: 'uint256[]',
      },
      {
        components: [
          {
            internalType: 'address payable[]',
            name: 'allowedRenters',
            type: 'address[]',
          },
        ],
        internalType: 'struct IReNFT.AllowedRenters[]',
        name: 'allowedRenters',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'address payable[]',
            name: 'beneficiaries',
            type: 'address[]',
          },
          { internalType: 'uint8[]', name: 'portions', type: 'uint8[]' },
        ],
        internalType: 'struct IReNFT.RevShare[]',
        name: 'revShares',
        type: 'tuple[]',
      },
      {
        internalType: 'uint8[]',
        name: 'maxRentDurations',
        type: 'uint8[]',
      },
      {
        internalType: 'enum IResolver.PaymentToken[]',
        name: 'paymentTokens',
        type: 'uint8[]',
      },
    ],
    name: 'lend',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    name: 'lendingRentings',
    outputs: [
      {
        components: [
          {
            internalType: 'address payable[]',
            name: 'allowedRenters',
            type: 'address[]',
          },
          {
            components: [
              {
                internalType: 'address payable[]',
                name: 'beneficiaries',
                type: 'address[]',
              },
              {
                internalType: 'uint8[]',
                name: 'portions',
                type: 'uint8[]',
              },
            ],
            internalType: 'struct IReNFT.RevShare',
            name: 'revShares',
            type: 'tuple',
          },
          {
            internalType: 'uint256',
            name: 'upfrontRentFee',
            type: 'uint256',
          },
          {
            internalType: 'address payable',
            name: 'lenderAddress',
            type: 'address',
          },
          {
            internalType: 'uint8',
            name: 'maxRentDuration',
            type: 'uint8',
          },
          {
            internalType: 'enum IResolver.PaymentToken',
            name: 'paymentToken',
            type: 'uint8',
          },
          { internalType: 'bool', name: 'inactive', type: 'bool' },
        ],
        internalType: 'struct IReNFT.Lending',
        name: 'lending',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'address payable',
            name: 'renterAddress',
            type: 'address',
          },
          { internalType: 'uint32', name: 'rentedAt', type: 'uint32' },
          { internalType: 'uint8', name: 'rentDuration', type: 'uint8' },
        ],
        internalType: 'struct IReNFT.Renting',
        name: 'renting',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'uint256[]', name: '', type: 'uint256[]' },
      { internalType: 'uint256[]', name: '', type: 'uint256[]' },
      { internalType: 'bytes', name: '', type: 'bytes' },
    ],
    name: 'onERC1155BatchReceived',
    outputs: [{ internalType: 'bytes4', name: '', type: 'bytes4' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'uint256', name: '', type: 'uint256' },
      { internalType: 'uint256', name: '', type: 'uint256' },
      { internalType: 'bytes', name: '', type: 'bytes' },
    ],
    name: 'onERC1155Received',
    outputs: [{ internalType: 'bytes4', name: '', type: 'bytes4' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'uint256', name: '', type: 'uint256' },
      { internalType: 'bytes', name: '', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ internalType: 'bytes4', name: '', type: 'bytes4' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'contract INFTContract',
            name: 'nft',
            type: 'address',
          },
          {
            internalType: 'uint256[]',
            name: 'tokenIds',
            type: 'uint256[]',
          },
          {
            internalType: 'uint256[]',
            name: 'lendingIds',
            type: 'uint256[]',
          },
        ],
        internalType: 'struct IReNFT.Nfts',
        name: 'nfts',
        type: 'tuple',
      },
      {
        internalType: 'address payable[]',
        name: 'renter',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'amountToPay',
        type: 'uint256[]',
      },
    ],
    name: 'pay',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'contract INFTContract',
            name: 'nft',
            type: 'address',
          },
          {
            internalType: 'uint256[]',
            name: 'tokenIds',
            type: 'uint256[]',
          },
          {
            internalType: 'uint256[]',
            name: 'lendingIds',
            type: 'uint256[]',
          },
        ],
        internalType: 'struct IReNFT.Nfts',
        name: 'nfts',
        type: 'tuple',
      },
      { internalType: 'uint8[]', name: 'rentDurations', type: 'uint8[]' },
    ],
    name: 'rent',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'rentFee',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'revokeOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address payable[]',
        name: 'newFeeReceivers',
        type: 'address[]',
      },
      { internalType: 'uint8[]', name: 'newFeePortions', type: 'uint8[]' },
    ],
    name: 'setProtocolFeeReceivers',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'newRentFee', type: 'uint256' }],
    name: 'setRentFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'newRentStoppers',
        type: 'address[]',
      },
    ],
    name: 'setRentStoppers',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'newRewardPayers',
        type: 'address[]',
      },
    ],
    name: 'setRewardPayers',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'contract INFTContract',
            name: 'nft',
            type: 'address',
          },
          {
            internalType: 'uint256[]',
            name: 'tokenIds',
            type: 'uint256[]',
          },
          {
            internalType: 'uint256[]',
            name: 'lendingIds',
            type: 'uint256[]',
          },
        ],
        internalType: 'struct IReNFT.Nfts',
        name: 'nfts',
        type: 'tuple',
      },
    ],
    name: 'stopLend',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'contract INFTContract',
            name: 'nft',
            type: 'address',
          },
          {
            internalType: 'uint256[]',
            name: 'tokenIds',
            type: 'uint256[]',
          },
          {
            internalType: 'uint256[]',
            name: 'lendingIds',
            type: 'uint256[]',
          },
        ],
        internalType: 'struct IReNFT.Nfts',
        name: 'nfts',
        type: 'tuple',
      },
    ],
    name: 'stopRent',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
] as const;
