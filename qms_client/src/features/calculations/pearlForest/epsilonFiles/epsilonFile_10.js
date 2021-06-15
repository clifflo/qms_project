import {
  getQuenchedCrunchOfMonth
} from './_sigmaHubOfEpsilon';
import {
  filterItemByStringFromList
} from './_utilityHubByEpsilon';

export const getCoatedCrossBranch =
  (rhoCrossBranch,
  askingMonth) => {

  const quenchedCrunchOfMonth =
    getQuenchedCrunchOfMonth(askingMonth);

  const quenchedBoltCrossBranch =
    filterItemByStringFromList(
      quenchedCrunchOfMonth
      .quenchedBoltCrossBranchSubsetOfMonth,
      rhoCrossBranch,
      'sigmaTargetCrossBranchNutForMonth');

  const coatedCrossBranch = {
    quenchedBoltCrossBranch,
    askingMonth
  };

  return coatedCrossBranch;

}
