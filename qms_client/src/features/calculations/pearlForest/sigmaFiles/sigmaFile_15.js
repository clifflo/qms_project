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
      'sigma-brake-target-cross-trunk'){

      const sigmaCoatedBoltForDayBranchToCrossTrunk = {
        sigmaTargetCrossTrunkNutForDayBranch,
        sigmaBrakeName,
        sigmaBrakeTarget,
        sigmaBrakeTopics,
        _type: 'SigmaCoatedBoltForDayBranch',
        _subType: 'SigmaCoatedBoltForDayBranchToCrossTrunk'
      };

      return sigmaCoatedBoltForDayBranchToCrossTrunk;
    }
    else if(sigmaBrakeTarget ==
      'sigma-brake-target-cross-branch'){

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

  const sigmaClutchContextCrossTrunkSubsetOfDayBranch =
    filterItemByStringFromList(
      sigmaClutchContextSetOfDayBranch,
      'sigma-brake-target-cross-trunk',
      'sigmaBrakeTarget');

  const sigmaClutchContextCrossBranchSubsetOfDayBranch =
    filterItemByStringFromList(
      sigmaClutchContextSetOfDayBranch,
      'sigma-brake-target-cross-branch',
      'sigmaBrakeTarget');

  const coatedBoltCrossTrunkSubsetOfDayBranch =
    R.map(
      loadedGetCoatedBoltOfDayBranch,
      sigmaClutchContextCrossTrunkSubsetOfDayBranch);

  const coatedBoltCrossBranchSubsetOfDayBranch =
    R.map(
      loadedGetCoatedBoltOfDayBranch,
      sigmaClutchContextCrossBranchSubsetOfDayBranch);

  const coatedCrunchOfDayBranch = {
    _type: 'CoatedCrunchOfDayBranch',
    coatedSigmaSourceDayBranchNut,
    coatedBoltCrossTrunkSubsetOfDayBranch,
    coatedBoltCrossBranchSubsetOfDayBranch
  };

  return coatedCrunchOfDayBranch;
}

export const coatedCrunchSetOfDayBranch =
  R.map(
    getCoatedCrunchOfDayBranch,
    twigBranchChineseSet);
