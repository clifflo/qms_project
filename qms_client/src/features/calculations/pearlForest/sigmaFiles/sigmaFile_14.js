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

  console.log('Get the coated bolt of day trunk then.');

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

const getCoatedCrunchSetOfDayTrunk = () => {

  const getCoatedCrunchOfDayTrunk =
    R.map(
      R.curry(getCoatedBoltOfDayTrunk),
      twigTrunkChineseSet);

  const coatedCrunchSetOfDayTrunk =
    R.map(
      R.curry(getCoatedCrunchOfDayTrunk),
      simgaClutchContextSetOfDayTrunk);

  return coatedCrunchSetOfDayTrunk;
}

export const coatedCrunchSetOfDayTrunk =
  getCoatedCrunchSetOfDayTrunk();
