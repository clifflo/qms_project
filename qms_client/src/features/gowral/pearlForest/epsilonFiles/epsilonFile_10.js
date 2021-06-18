import {
  getQuenchedCrunchOfMonth
} from './_sigmaHubOfEpsilon';
import {
  filterItemByStringFromList
} from './_utilityHubByEpsilon';

export const getCoatedCrossBranchNutOfMonth =
  (rhoCrossBranch,
  askingMonthBranchChinese) => {

  const quenchedCrunchOfMonth =
    getQuenchedCrunchOfMonth(askingMonthBranchChinese);

  const quenchedBoltCrossBranchNut =
    filterItemByStringFromList(
      quenchedCrunchOfMonth
      .quenchedBoltCrossBranchNutSubsetOfMonth,
      rhoCrossBranch,
      'sigmaTargetCrossBranchNutForMonth');

  const coatedCrossBranchNut = {
    quenchedBoltCrossBranchNut,
    askingMonthBranchChinese
  };

  return coatedCrossBranchNut;
}

export const getCoatedCrossTrunkNutOfMonth =
  (rhoCrossTrunk,
  askingMonthBranchChinese) => {

  const quenchedCrunchOfMonth =
    getQuenchedCrunchOfMonth(askingMonthBranchChinese);

  const quenchedBoltCrossTrunkNut =
    filterItemByStringFromList(
      quenchedCrunchOfMonth
      .quenchedBoltCrossTrunkNutSubsetOfMonth,
      rhoCrossTrunk,
      'sigmaTargetCrossTrunkNutForMonth');

  const coatedCrossTrunkNut = {
    quenchedBoltCrossTrunkNut,
    askingMonthBranchChinese
  };

  return coatedCrossTrunkNut;
}

export const getFermentedCrossInHookContext_1 =
  (askingMonthBranchChinese,
  wheatCrossInHookContextFinal) => {

  const {
    crossInHookTrunkChinese,
    crossInHookBranchChinese
  } = wheatCrossInHookContextFinal;

  const coatedCrossTrunkNutOfMonth =
    getCoatedCrossTrunkNutOfMonth(
      crossInHookTrunkChinese,
      askingMonthBranchChinese);

  const coatedCrossBranchNutOfMonth =
    getCoatedCrossBranchNutOfMonth(
      crossInHookBranchChinese,
      askingMonthBranchChinese);

  const fermentedCrossInContext_1 = {
    ...wheatCrossInHookContextFinal,
    _type: 'FermentedCrossInContext_1',
    coatedCrossTrunkNutOfMonth,
    coatedCrossBranchNutOfMonth
  };

  return fermentedCrossInContext_1;
}
