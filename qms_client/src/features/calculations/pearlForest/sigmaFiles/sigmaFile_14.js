import * as R from 'ramda';
import {
  findItemByStringFromList,
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

    const sigmaCoatedBoltForDayTrunk = {
      sigmaTargetCrossBranchNutForDayTrunk,
      sigmaBrakeName,
      sigmaBrakeTarget,
      sigmaBrakeTopics,
      _type: 'SigmaCoatedBoltForDayTrunk'
    }

    return sigmaCoatedBoltForDayTrunk;
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

  const coatedBoltSetOfDayTrunk =
    R.map(
      loadedGetCoatedBoltOfDayTrunk,
      sigmaClutchContextSetOfDayTrunk);

  const coatedCrunchOfDayTrunk = {
    _type: 'CoatedCrunchOfDayTrunk',
    coatedSigmaSourceDayTrunkNut,
    coatedBoltSetOfDayTrunk
  }

  return coatedCrunchOfDayTrunk;
}

export const coatedCrunchSetOfDayTrunk =
  R.map(
    getCoatedCrunchOfDayTrunk,
    twigTrunkChineseSet);
