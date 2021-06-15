import {
  getQuenchedCrunchOfMonth
} from './_sigmaHubOfEpsilon';
import {
  filterItemByStringFromList
} from './_utilityHubByEpsilon';

export const getCoatedCrossBranchNut =
  (rhoCrossBranch,
  askingMonth) => {

  const quenchedCrunchOfMonth =
    getQuenchedCrunchOfMonth(askingMonth);

  const quenchedBoltCrossBranchNut =
    filterItemByStringFromList(
      quenchedCrunchOfMonth
      .quenchedBoltCrossBranchNutSubsetOfMonth,
      rhoCrossBranch,
      'sigmaTargetCrossBranchNutForMonth');

  const coatedCrossBranchNut = {
    quenchedBoltCrossBranchNut,
    askingMonth
  };

  return coatedCrossBranchNut;
}

export const getCoatedCrossTrunkNut =
  (rhoCrossTrunk,
  askingMonth) => {

  const quenchedCrunchOfMonth =
    getQuenchedCrunchOfMonth(askingMonth);

  const quenchedBoltCrossTrunkNut =
    filterItemByStringFromList(
      quenchedCrunchOfMonth
      .quenchedBoltCrossTrunkNutSubsetOfMonth,
      rhoCrossTrunk,
      'sigmaTargetCrossTrunkNutForMonth');

  const coatedCrossTrunkNut = {
    quenchedBoltCrossTrunkNut,
    askingMonth
  };

  return coatedCrossTrunkNut;
}
