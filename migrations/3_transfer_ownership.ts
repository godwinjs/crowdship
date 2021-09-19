export {};
const { admin } = require('@openzeppelin/truffle-upgrades');

module.exports = async function (deployer, network) {
  // Use address of your Gnosis Safe
  const gnosisSafe = '0x6b9238Ca0a223b6Ac6DFB2BFbC1bC80E013D94eF';

  // Don't change ProxyAdmin ownership for our test network
  if (network !== 'development') {
    // The owner of the ProxyAdmin can upgrade our contracts
    await admin.transferProxyAdminOwnership(gnosisSafe);
  }
};
