export {};
const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const CampaignFactory = artifacts.require('CampaignFactory');
const Campaign = artifacts.require('Campaign');
const CampaignRewards = artifacts.require('CampaignRewards');
const TestToken = artifacts.require('TestToken');

module.exports = async function (deployer) {
  const campaignImplementation = await Campaign.new();
  const campaignRewardsImplementation = await CampaignRewards.new();

  const factory = await deployProxy(
    CampaignFactory,
    [
      '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1',
      campaignImplementation.address,
      campaignRewardsImplementation.address,
    ],
    { deployer, initializer: '__CampaignFactory_init' }
  );

  await deployProxy(TestToken, ['Test Token', 'TT'], {
    deployer,
    initializer: '__TestToken_init',
  });

  await deployProxy(
    Campaign,
    [
      factory.address,
      campaignRewardsImplementation.address,
      '0x1dF62f291b2E969fB0849d99D9Ce41e2F137006e',
      0,
    ],
    {
      deployer,
      initializer: '__Campaign_init',
    }
  );

  await deployProxy(
    CampaignRewards,
    [
      factory.address,
      campaignImplementation.address,
      '0x1dF62f291b2E969fB0849d99D9Ce41e2F137006e',
      0,
    ],
    { deployer, initializer: '__CampaignRewards_init' }
  );
};
