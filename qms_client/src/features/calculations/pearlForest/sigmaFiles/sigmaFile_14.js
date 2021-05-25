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
      'sigma-brake-target-cross-trunk'){

      const sigmaCoatedBoltForDayTrunkToCrossTrunk = {
        sigmaTargetCrossTrunkNutForDayTrunk,
        sigmaBrakeName,
        sigmaBrakeTarget,
        sigmaBrakeTopics,
        _type: 'SigmaCoatedBoltForDayTrunk',
        _subType: 'SigmaCoatedBoltForDayTrunkToCrossTrunk'
      };

      return sigmaCoatedBoltForDayTrunkToCrossTrunk;
    }
    else if(sigmaBrakeTarget ==
      'sigma-brake-target-cross-branch'){

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

  const sigmaClutchContextCrossTrunkSubsetOfDayTrunk =
    filterItemByStringFromList(
      sigmaClutchContextSetOfDayTrunk,
      'sigma-brake-target-cross-trunk',
      'sigmaBrakeTarget');

  const sigmaClutchContextCrossBranchSubsetOfDayTrunk =
    filterItemByStringFromList(
      sigmaClutchContextSetOfDayTrunk,
      'sigma-brake-target-cross-branch',
      'sigmaBrakeTarget');

  const coatedBoltCrossTrunkSubsetOfDayTrunk =
    R.map(
      loadedGetCoatedBoltOfDayTrunk,
      sigmaClutchContextCrossTrunkSubsetOfDayTrunk);

  const coatedBoltCrossBranchSubsetOfDayTrunk =
    R.map(
      loadedGetCoatedBoltOfDayTrunk,
      sigmaClutchContextCrossBranchSubsetOfDayTrunk);

  const coatedCrunchOfDayTrunk = {
    _type: 'CoatedCrunchOfDayTrunk',
    coatedSigmaSourceDayTrunkNut,
    coatedBoltCrossTrunkSubsetOfDayTrunk,
    coatedBoltCrossBranchSubsetOfDayTrunk
  };

  return coatedCrunchOfDayTrunk;
}

export const coatedCrunchSetOfDayTrunk =
  R.map(
    getCoatedCrunchOfDayTrunk,
    twigTrunkChineseSet);
