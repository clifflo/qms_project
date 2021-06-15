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

const getCoatedBoltOfDayTrunk =
  (coatedSigmaSourceDayTrunkNut,
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
        coatedSigmaSourceDayTrunkNut,
        'sigmaSourceNutOfDayTrunk');

    const {
      sigmaTargetCrossTrunkNutForDayTrunk,
      sigmaTargetCrossBranchNutForDayTrunk
    } = sigmaBoltContext;

    if(sigmaBrakeTarget ==
      'SigmaBrakeTargetCrossBranch'){

      const sigmaCoatedBoltForDayTrunkToCrossBranch = {
        sigmaTargetCrossBranchNutForDayTrunk,
        sigmaBrakeName,
        sigmaBrakeTarget,
        sigmaBrakeTopics,
        _type: 'SigmaCoatedBoltForDayTrunk',
        _subType: 'SigmaCoatedBoltForDayTrunkToCrossBranch'
      }
      return sigmaCoatedBoltForDayTrunkToCrossBranch;
    }
    else {
      throw new Error(
        'Sigma coated bolt for day trunk can have '
        + 'cross branch target only.');
    }
  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'mapFunctionOfCoatedBoltOfDayTrunk');
  }
}

const getCoatedCrunchOfDayTrunk =
  (coatedSigmaSourceDayTrunkNut) => {

  const loadedGetCoatedBoltOfDayTrunk =
    R.curry
    (getCoatedBoltOfDayTrunk)
    (coatedSigmaSourceDayTrunkNut);

  const coatedBoltCrossBranchSetOfDayTrunk =
    R.map(
      loadedGetCoatedBoltOfDayTrunk,
      sigmaClutchContextSetOfDayTrunk);

  const coatedCrunchOfDayTrunk = {
    _type: 'CoatedCrunchOfDayTrunk',
    coatedSigmaSourceDayTrunkNut,
    coatedBoltCrossBranchSetOfDayTrunk
  };

  return coatedCrunchOfDayTrunk;
}

export const coatedCrunchSetOfDayTrunk =
  R.map(
    getCoatedCrunchOfDayTrunk,
    twigTrunkChineseSet);
