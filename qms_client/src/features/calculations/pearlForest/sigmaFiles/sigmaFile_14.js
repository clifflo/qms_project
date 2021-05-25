import * as R from 'ramda';
import {
  findItemByStringFromList
} from './_utilityHubBySigma';
import {
  sigmaClutchContextSetOfDayTrunk
} from './sigmaMiniHub_02';
import {
  twigTrunkChineseSet,
  twigBranchChineseSet
} from './_twigHubBySigma';

const mapFunctionOfCoatedBoltOfDayTrunk =
  (coatedSigmaSourceDayTrunkNut,
  sigmaClutchContextOfDayTrunk) => {

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
    sigmaTargetCrossBranchNutForDayTrunk,
    sigmaBrakeName,
    sigmaBrakeTarget,
    sigmaBrakeTopics,
    _type: 'SigmaCoatedBoltForDayTrunk'
  }
}

const getCoatedClunchOfDayTrunk =
  coatedSigmaSourceDayTrunkNut => {

  const loadedMapFunctionOfCoatedBoltOfDayTrunk =
  R.curry
  (mapFunctionOfCoatedBoltOfDayTrunk)
  (coatedSigmaSourceDayTrunkNut);

  const coatedBoltSetOfDayTrunk =
  R.map(
    loadedMapFunctionOfCoatedBoltOfDayTrunk,
    sigmaClutchContextSetOfDayTrunk);

  return coatedBoltContextSetOfDayTrunk;
}

export const getCoatedClunchSetOfDayTrunk =
  R.map(
    getCoatedClunchOfDayTrunk,
    sigmaClutchContextSetOfDayTrunk);
