import * as R from 'ramda';
import {
  findItemByStringFromList
} from './_utilityHubBySigma';
import {
  sigmaClutchContextSetOfDayBranch
} from './sigmaFile_11';
import {
  twigTrunkChineseSet,
  twigBranchChineseSet
} from './_twigHubBySigma';

const mapFunctionOfCoatedBoltOfDayBranch =
  (coatedSigmaSourceDayTrunkNut,
  sigmaClutchContextOfDayBranch) => {

  const {
    sigmaBoltContextSetOfDayBranch,
    sigmaBrakeName,
    sigmaBrakeTarget,
    sigmaBrakeTopics
  } = sigmaClutchContextOfDayBranch;

  const sigmaBoltContext =
    findItemByStringFromList(
      sigmaBoltContextSetOfDayBranch,
      coatedSigmaSourceDayTrunkNut,
      'sigmaSourceNutOfDayTrunk');

  const {
    sigmaTargetCrossBranchNutForDayTrunk
  } = sigmaBoltContext;

  const sigmaCoatedBolt = {
    sigmaTargetCrossBranchNutForDayTrunk,

  }
}

const getCoatedClunchOfDayBranch =
  coatedSigmaSourceDayTrunkNut => {

  const loadedMapFunctionOfCoatedBoltOfDayBranch =
  R.curry
  (mapFunctionOfCoatedBoltOfDayBranch)
  (coatedSigmaSourceDayTrunkNut);

  const coatedBoltSetOfDayBranch =
  R.map(
    loadedMapFunctionOfCoatedBoltOfDayBranch,
    sigmaClutchContextSetOfDayBranch);

  return coatedBoltContextSetOfDayBranch;
}

export const getCoatedClunchSetOfDayBranch =
  R.map(
    getCoatedClunchOfDayBranch,
    sigmaClutchContextSetOfDayBranch);
