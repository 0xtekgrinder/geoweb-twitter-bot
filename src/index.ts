import createEtherEventListener from './scripts/createEthersEventListener';
import PCOLicenseClaimerFacet from './abi/PCOLicenseClaimerFacet.json';
import onNewClaim from './listeners/onNewClaim';

createEtherEventListener(
  ['0xba1231785a7b4ac0e8dc9a0403938c2182ce4a4e'],
  PCOLicenseClaimerFacet,
  'ParcelClaimedV2',
  onNewClaim,
);
