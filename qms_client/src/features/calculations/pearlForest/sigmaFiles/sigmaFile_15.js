import * as R from 'ramda';
import {
  findItemByStringFromList,
  filterItemByStringFromList,
  throwFunctionalError
} from './_utilityHubBySigma';
import {
  sigmaClutchContextSetOfDayBranch
} from './sigmaMiniHub_03';
import {
  twigBranchChineseSet
} from './_twigHubBySigma';

const getCoatedBoltOfDayBranch =
  (coatedSigmaSourceDayBranchNut,
  sigmaClutchContextOfDayBranch) => {

  try{
    const {
      sigmaBoltContextSetOfDayBranch,
      sigmaBrakeName,
      sigmaBrakeTarget,
      sigmaBrakeTopics
    } = sigmaClutchContextOfDayBranch;

    const sigmaBoltContext =
      findItemByStringFromList(
        sigmaBoltContextSetOfDayBranch,
        coatedSigmaSourceDayBranchNut,
        'sigmaSourceNutOfDayBranch');

    const {
      sigmaTargetCrossTrunkNutForDayBranch,
      sigmaTargetCrossBranchNutForDayBranch
    } = sigmaBoltContext;

    if(sigmaBrakeTarget ==
      'SigmaBrakeTargetCrossBranch'){

      const sigmaCoatedBoltForDayBranchToCrossBranch = {
        sigmaTargetCrossBranchNutForDayBranch,
        sigmaBrakeName,
        sigmaBrakeTarget,
        sigmaBrakeTopics,
        _type: 'SigmaCoatedBoltForDayBranch',
        _subType: 'SigmaCoatedBoltForDayBranchToCrossBranch'
      }
      return sigmaCoatedBoltForDayBranchToCrossBranch;
    }
    else {
      throw new Error(
        'Sigma coated bolt for day branch can have '
        + 'cross branch target only.');
    }
  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'mapFunctionOfCoatedBoltOfDayBranch');
  }
}

const getCoatedCrunchOfDayBranch =
  (coatedSigmaSourceDayBranchNut) => {

  const loadedGetCoatedBoltOfDayBranch =
    R.curry
    (getCoatedBoltOfDayBranch)
    (coatedSigmaSourceDayBranchNut);

  const coatedBoltCrossBranchSetOfDayBranch =
    R.map(
      loadedGetCoatedBoltOfDayBranch,
      sigmaClutchContextSetOfDayBranch);

  const coatedCrunchOfDayBranch = {
    _type: 'CoatedCrunchOfDayBranch',
    coatedSigmaSourceDayBranchNut,
    coatedBoltCrossBranchSetOfDayBranch
  };

  return coatedCrunchOfDayBranch;
}

export const coatedCrunchSetOfDayBranch =
  R.map(
    getCoatedCrunchOfDayBranch,
    twigBranchChineseSet);
