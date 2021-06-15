import {
  getQuenchedCrunchOfMonth
} from './_sigmaHubOfEpsilon';
import {
  filterItemByStringFromList
} from './_utilityHubByEpsilon';

export const getCoatedCrossBranchNutOfMonth =
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

export const getCoatedCrossTrunkNutOfMonth =
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

export const getCoatedCrossBoltOfMonth =
  (wheatCrossInHookContextFinal,
  askingMonth) => {

  const {
    crossInHookTrunkChinese,
    crossInHookBranchChinese
  } = wheatCrossInHookContextFinal;

  const coatedCrossTrunkNutOfMonth =
    getCoatedCrossTrunkNutOfMonth(
      crossInHookTrunkChinese,
      askingMonth);

  const coatedCrossBranchNutOfMonth =
    getCoatedCrossBranchNutOfMonth(
      crossInHookBranchChinese,
      askingMonth);


}
