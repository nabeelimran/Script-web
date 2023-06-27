export const DURABILITY_CONST = 10;
export const ENERGY_PER_DEPLETION_CONST = 2;
export const timePerEnergy = 10;

export const glassesAttributes = [
  {
    maxLevel: 30,
    maxWatchTimePerDay: 960,
    maxRewardPerDay: 39.6,
    baseDurability: 1,
    price: 10,
    StartingRechargePercentage: 80,
  },
  {
    maxLevel: 30,
    maxWatchTimePerDay: 1020,
    maxRewardPerDay: 52.8,
    baseDurability: 2,
    price: 20,
    StartingRechargePercentage: 70,
  },
  {
    maxLevel: 30,
    maxWatchTimePerDay: 1080,
    maxRewardPerDay: 66,
    baseDurability: 3,
    price: 30,
    StartingRechargePercentage: 60,
  },
  {
    maxLevel: 5,
    maxWatchTimePerDay: 960,
    maxRewardPerDay: 39.6,
    baseDurability: 1,
    price: 0,
    StartingRechargePercentage: 80,
  }
];

export const GLASSTYPES = {
  COMMON: 0,
  RARE: 1,
  SUPERSCRIPT: 2,
  FREE: 3,
};
