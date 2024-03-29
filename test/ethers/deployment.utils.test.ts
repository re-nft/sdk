import { expect } from 'chai';

import {
  Chain,
  DEPLOYMENT_RESOLVER_POLYGON_MAINNET_V1,
  Deployments,
  EVMNetworkType,
  RenftContractType,
  RenftContractVersion,
} from '../../src/core';
import {
  findSingleDeploymentOrThrow,
  hasValidContractAddress,
  hasValidContractVersion,
  hasValidNetwork,
  hasValidReNftContractType,
  hasValidStartBlock,
  isValidDeployment,
  RENFT_CONTRACT_DEPLOYMENTS,
} from '../../src/ethers';

describe('deployments', () => {
  const validDeployment = DEPLOYMENT_RESOLVER_POLYGON_MAINNET_V1;

  it('all deployments are valid', () => {
    expect(RENFT_CONTRACT_DEPLOYMENTS.map(isValidDeployment).every(Boolean)).to
      .be.true;
  });

  describe('hasValidReNftContractType', () => {
    it('false for invalid contractType', () => {
      expect(
        hasValidReNftContractType({
          ...validDeployment,
          contractType: 'INVALID' as RenftContractType,
        } as Deployments)
      ).to.be.false;
    });

    it('true for valid contractType', () => {
      expect(hasValidReNftContractType(validDeployment)).to.be.true;
    });
  });

  describe('hasValidContractAddress', () => {
    it('false for invalid contractAddress', () => {
      expect(
        hasValidContractAddress({
          ...validDeployment,
          contractAddress: '0x0000000',
        })
      ).to.be.false;
    });

    it('false for incorrectly checksummed contractAddress', () => {
      expect(
        hasValidContractAddress({
          ...validDeployment,
          contractAddress: '0x94D8f036a0fbC216bb532d33bDF6564157Af0cD7',
        })
      ).to.be.false;
    });

    it('true for valid contractAddress', () => {
      expect(hasValidContractAddress(validDeployment)).to.be.true;
    });
  });

  describe('hasValidStartBlock', () => {
    it('false for invalid startBlock', () => {
      expect(
        hasValidStartBlock({
          ...validDeployment,
          startBlock: -1,
        })
      ).to.be.false;
    });

    it('true for valid startBlock', () => {
      expect(hasValidStartBlock(validDeployment)).to.be.true;
    });
  });

  describe('hasValidNetwork', () => {
    it('false for invalid network id', () => {
      expect(
        hasValidNetwork({
          ...validDeployment,
          network: {
            chainId: -1 as Chain,
            type: EVMNetworkType.AVALANCHE_MAINNET,
          },
        } as Deployments)
      ).to.be.false;
    });

    it('false for invalid network type', () => {
      expect(
        hasValidNetwork({
          ...validDeployment,
          network: {
            chainId: 137,
            type: 'INVALID' as EVMNetworkType,
          },
        } as Deployments)
      ).to.be.false;
    });

    it('true for valid network', () => {
      expect(hasValidNetwork(validDeployment)).to.be.true;
    });
  });

  describe('hasValidContractVersion', () => {
    it('false for invalid contractVersion', () => {
      expect(
        hasValidContractVersion({
          ...validDeployment,
          version: 'INVALID' as RenftContractVersion,
        } as Deployments)
      ).to.be.false;
    });

    it('true for valid contractVersion', () => {
      expect(hasValidContractVersion(validDeployment)).to.be.true;
    });
  });

  describe('isValidDeployment', () => {
    it('false for incorrectly checksummed contractAddress', () => {
      expect(
        isValidDeployment({
          ...validDeployment,
          contractAddress: '0x94D8f036a0fbC216bb532d33bDF6564157Af0cD7',
        })
      ).to.be.false;
    });

    it('false for invalid contractAddress', () => {
      expect(
        isValidDeployment({
          ...validDeployment,
          contractAddress: '0x0000000',
        })
      ).to.be.false;
    });

    it('false for invalid startBlock', () => {
      expect(
        isValidDeployment({
          ...validDeployment,
          startBlock: -1,
        })
      ).to.be.false;
    });
  });

  describe('findSingleDeploymentOrThrow', () => {
    it('throws if no deployment found', () => {
      expect(() =>
        findSingleDeploymentOrThrow({ contractAddress: '0x0000000' })
      ).to.throw();
    });

    it('throws if multiple deployments found', () => {
      expect(() =>
        findSingleDeploymentOrThrow({
          contractType: RenftContractType.RESOLVER,
        })
      ).to.throw();
    });

    it('finds by contract address', () => {
      expect(
        findSingleDeploymentOrThrow({
          contractAddress: validDeployment.contractAddress,
        })
      ).to.equal(validDeployment);
    });
  });
});
