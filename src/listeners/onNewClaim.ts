// eslint-disable-next-line import/no-extraneous-dependencies
import { Listener } from '@ethersproject/abstract-provider';
import { BigNumber } from 'ethers';
import twitterClient from '../config/twitterClient';

const onNewClaim: Listener = (licenseId: BigNumber, poyer: string) => {
  twitterClient.v2.tweet(`New claim: ${licenseId} by ${poyer}!`);
};

export default onNewClaim;
