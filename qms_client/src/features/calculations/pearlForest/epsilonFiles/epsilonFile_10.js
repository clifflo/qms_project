import {
  coatedCrunchSetOfMonth
} from './_sigmaHubOfEpsilon';
import {
  findItemByStringFromList
} from './_utilityHubBySigma';

export const getQuenchedCrossBranch =
  (rhoCrossBranch,
  askingMonth) => {

  const coatedCrunchOfMonth =
    getCoatedCrunchOfMonth(askingMonth);

  const coatedBoltCrossBranch =
    findItemByStringFromList(
      coatedCrunchOfMonth
      .coatedBoltCrossBranchSubsetOfMonth,
      rhoCrossBranch,
      'sigmaTargetCrossBranchNutForMonth'
    )

}
