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

const getQuenchedBoltOfDayBranch =
  (quenchedSigmaSourceDayBranch,
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
        quenchedSigmaSourceDayBranch,
        'sigmaSourceNutOfDayBranch');

    const {
      sigmaTargetCrossTrunkNutForDayBranch,
      sigmaTargetCrossBranchNutForDayBranch
    } = sigmaBoltContext;

    if(sigmaBrakeTarget ==
      'SigmaBrakeTargetCrossBranch'){

      const sigmaQuenchedBoltForDayBranchToCrossBranch = {
        sigmaTargetCrossBranchNutForDayBranch,
        sigmaBrakeName,
        sigmaBrakeTarget,
        sigmaBrakeTopics,
        _type: 'SigmaQuenchedBoltForDayBranch',
        _subType: 'SigmaQuenchedBoltForDayBranchToCrossBranch'
      }
      return sigmaQuenchedBoltForDayBranchToCrossBranch;
    }
    else {
      throw new Error(
        'Sigma quenched bolt for day branch can have '
        + 'cross branch target only.');
    }
  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'mapFunctionOfQuenchedBoltOfDayBranch');
  }
}

const getQuenchedCrunchOfDayBranch =
  (quenchedSigmaSourceDayBranch) => {

  const loadedGetQuenchedBoltOfDayBranch =
    R.curry
    (getQuenchedBoltOfDayBranch)
    (quenchedSigmaSourceDayBranch);

  const quenchedBoltCrossBranchSetOfDayBranch =
    R.map(
      loadedGetQuenchedBoltOfDayBranch,
      sigmaClutchContextSetOfDayBranch);

  const quenchedCrunchOfDayBranch = {
    _type: 'QuenchedCrunchOfDayBranch',
    quenchedSigmaSourceDayBranch,
    quenchedBoltCrossBranchSetOfDayBranch
  };

  return quenchedCrunchOfDayBranch;
}

export const quenchedCrunchSetOfDayBranch =
  R.map(
    getQuenchedCrunchOfDayBranch,
    twigBranchChineseSet);
