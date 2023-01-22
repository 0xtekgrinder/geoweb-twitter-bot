// eslint-disable-next-line import/no-extraneous-dependencies
import { Listener } from '@ethersproject/abstract-provider';
import { BigNumber } from 'ethers';
import twitterClient from '../config/twitterClient';

const onNewClaim: Listener = (licenseId: BigNumber, payer: string) => {
  twitterClient.v2.tweet(`Geo Web parcel ${licenseId} claimed by ${payer}.`);
};

export default onNewClaim;
