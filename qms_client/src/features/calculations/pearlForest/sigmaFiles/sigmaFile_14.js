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
  (quenchedSigmaSourceDayTrunkNut,
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
        quenchedSigmaSourceDayTrunkNut,
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
  (quenchedSigmaSourceDayTrunkNut) => {

  const loadedGetQuenchedBoltOfDayTrunk =
    R.curry
    (getQuenchedBoltOfDayTrunk)
    (quenchedSigmaSourceDayTrunkNut);

  const quenchedBoltCrossBranchSetOfDayTrunk =
    R.map(
      loadedGetQuenchedBoltOfDayTrunk,
      sigmaClutchContextSetOfDayTrunk);

  const quenchedCrunchOfDayTrunk = {
    _type: 'QuenchedCrunchOfDayTrunk',
    quenchedSigmaSourceDayTrunkNut,
    quenchedBoltCrossBranchSetOfDayTrunk
  };

  return quenchedCrunchOfDayTrunk;
}

export const quenchedCrunchSetOfDayTrunk =
  R.map(
    getQuenchedCrunchOfDayTrunk,
    twigTrunkChineseSet);
