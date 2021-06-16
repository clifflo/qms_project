import * as R from 'ramda';
import {
  findItemByStringFromList,
  filterItemByStringFromList,
  throwFunctionalError
} from './_utilityHubBySigma';
import {
  sigmaClutchContextSetOfDayTrunk
} from './sigmaMiniHub_02';
import {
  twigTrunkChineseSet,
  twigBranchChineseSet
} from './_twigHubBySigma';

const getQuenchedBoltOfDayTrunk =
  (quenchedSigmaSourceDayTrunk,
  sigmaClutchContextOfDayTrunk) => {

  try{
    const {
      sigmaBoltContextSetOfDayTrunk,
      sigmaBrakeName,
      sigmaBrakeTarget,
      sigmaBrakeTopics
    } = sigmaClutchContextOfDayTrunk;

    const sigmaBoltContext =
      findItemByStringFromList(
        sigmaBoltContextSetOfDayTrunk,
        quenchedSigmaSourceDayTrunk,
        'sigmaSourceNutOfDayTrunk');

    const {
      sigmaTargetCrossTrunkNutForDayTrunk,
      sigmaTargetCrossBranchNutForDayTrunk
    } = sigmaBoltContext;

    if(sigmaBrakeTarget ==
      'SigmaBrakeTargetCrossBranch'){

      const sigmaQuenchedBoltForDayTrunkToCrossBranch = {
        sigmaTargetCrossBranchNutForDayTrunk,
        sigmaBrakeName,
        sigmaBrakeTarget,
        sigmaBrakeTopics,
        _type: 'SigmaQuenchedBoltForDayTrunk',
        _subType: 'SigmaQuenchedBoltForDayTrunkToCrossBranch'
      }
      return sigmaQuenchedBoltForDayTrunkToCrossBranch;
    }
    else {
      throw new Error(
        'Sigma quenched bolt for day trunk can have '
        + 'cross branch target only.');
    }
  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'mapFunctionOfQuenchedBoltOfDayTrunk');
  }
}

const getQuenchedCrunchOfDayTrunk =
  (quenchedSigmaSourceDayTrunk) => {

  const loadedGetQuenchedBoltOfDayTrunk =
    R.curry
    (getQuenchedBoltOfDayTrunk)
    (quenchedSigmaSourceDayTrunk);

  const quenchedBoltCrossBranchSetOfDayTrunk =
    R.map(
      loadedGetQuenchedBoltOfDayTrunk,
      sigmaClutchContextSetOfDayTrunk);

  const quenchedCrunchOfDayTrunk = {
    _type: 'QuenchedCrunchOfDayTrunk',
    quenchedSigmaSourceDayTrunk,
    quenchedBoltCrossBranchSetOfDayTrunk
  };

  return quenchedCrunchOfDayTrunk;
}

export const quenchedCrunchSetOfDayTrunk =
  R.map(
    getQuenchedCrunchOfDayTrunk,
    twigTrunkChineseSet);
