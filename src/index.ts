import createEtherEventListener from './scripts/createEthersEventListener';
import PCOLicenseClaimerFacet from './abi/PCOLicenseClaimerFacet.json';
import onNewClaim from './listeners/onNewClaim';

createEtherEventListener(
  ['0xBA1231785A7b4AC0E8dC9a0403938C2182cE4A4e'],
  PCOLicenseClaimerFacet,
  'ParcelClaimed',
  onNewClaim,
);
