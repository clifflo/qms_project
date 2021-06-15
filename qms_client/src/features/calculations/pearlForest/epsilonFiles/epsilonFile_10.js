import {
  getQuenchedCrunchOfMonth
} from './_sigmaHubOfEpsilon';
import {
  filterItemByStringFromList
} from './_utilityHubByEpsilon';

export const getCoatedCrossBranchNutOfMonth =
  (rhoCrossBranch,
  askingMonthOriginalChinese) => {

  const quenchedCrunchOfMonth =
    getQuenchedCrunchOfMonth(askingMonthOriginalChinese);

  const quenchedBoltCrossBranchNut =
    filterItemByStringFromList(
      quenchedCrunchOfMonth
      .quenchedBoltCrossBranchNutSubsetOfMonth,
      rhoCrossBranch,
      'sigmaTargetCrossBranchNutForMonth');

  const coatedCrossBranchNut = {
    quenchedBoltCrossBranchNut,
    askingMonthOriginalChinese
  };

  return coatedCrossBranchNut;
}

export const getCoatedCrossTrunkNutOfMonth =
  (rhoCrossTrunk,
  askingMonthOriginalChinese) => {

  const quenchedCrunchOfMonth =
    getQuenchedCrunchOfMonth(askingMonthOriginalChinese);

  const quenchedBoltCrossTrunkNut =
    filterItemByStringFromList(
      quenchedCrunchOfMonth
      .quenchedBoltCrossTrunkNutSubsetOfMonth,
      rhoCrossTrunk,
      'sigmaTargetCrossTrunkNutForMonth');

  const coatedCrossTrunkNut = {
    quenchedBoltCrossTrunkNut,
    askingMonthOriginalChinese
  };

  return coatedCrossTrunkNut;
}

export const getFermentedCrossInHookContext_1 =
  (wheatCrossInHookContextFinal,
  askingMonthOriginalChinese) => {

  const {
    crossInHookTrunkChinese,
    crossInHookBranchChinese
  } = wheatCrossInHookContextFinal;

  const coatedCrossTrunkNutOfMonth =
    getCoatedCrossTrunkNutOfMonth(
      crossInHookTrunkChinese,
      askingMonthOriginalChinese);

  const coatedCrossBranchNutOfMonth =
    getCoatedCrossBranchNutOfMonth(
      crossInHookBranchChinese,
      askingMonthOriginalChinese);

  const fermentedCrossInContext_1 = {
    ...wheatCrossInHookContextFinal,
    _type: 'FermentedCrossInContext_1',
    coatedCrossTrunkNutOfMonth,
    coatedCrossBranchNutOfMonth
  };

  return fermentedCrossInContext_1;
}
