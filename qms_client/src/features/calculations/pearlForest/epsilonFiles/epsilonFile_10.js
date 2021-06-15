import {
  quenchedCrunchSetOfMonth
} from './_sigmaHubOfEpsilon';
import {
  findItemByStringFromList
} from './_utilityHubBySigma';

export const getCoatedCrossBranch =
  (rhoCrossBranch,
  askingMonth) => {

  const quenchedCrunchOfMonth =
    getQuenchedCrunchOfMonth(askingMonth);

  const quenchedBoltCrossBranch =
    findItemByStringFromList(
      quenchedCrunchOfMonth
      .quenchedBoltCrossBranchSubsetOfMonth,
      rhoCrossBranch,
      'sigmaTargetCrossBranchNutForMonth'
    )

}
