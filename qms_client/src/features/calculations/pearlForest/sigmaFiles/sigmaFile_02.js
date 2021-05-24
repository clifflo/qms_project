import * as R from 'ramda';
import {
  sigmaBrakeContextPartialSetOfMonthBranch
} from './sigmaFile_01';
import {
  checkNilWithString,
  checkNilWithUntypedObject,
  checkNilWithArray,
  throwFunctionalError
} from './_utilityHubBySigma';
import {
  getTauMonthOriginalChineseFromBranch
} from './_tauHubBySigma';

export const handleSigmaBoltOfMonthBranchToOriginal =
  (sigmaBrakeTargetOfMonthBranch,
  sigmaBoltOfMonthBranch) => {

  const sigmaSourceNutOfMonthBranch =
    sigmaBoltOfMonthBranch[0];

  const sigmaSourceNutOfMonthOriginal =
    getTauMonthOriginalChineseFromBranch(
      sigmaSourceNutOfMonthBranch);

  checkNilWithString(
    sigmaSourceNutOfMonthBranch,
    'sigmaSourceNutOfMonthBranch');

  checkNilWithString(
    sigmaSourceNutOfMonthOriginal,
    'sigmaSourceNutOfMonthOriginal');

  const sigmaTargetNutOfMonthBranch =
    sigmaBoltOfMonthBranch[1];

  checkNilWithString(
    sigmaTargetNutOfMonthBranch,
    'sigmaTargetNutOfMonthBranch');

  const rawSigmaBoltContextOfMonthBranch = {
    _type: 'SigmaBoltContextOfMonthBranch',
    sigmaSourceNutOfMonthBranch,
    sigmaSourceNutOfMonthOriginal
  };

  if(sigmaBrakeTargetOfMonthBranch
    == 'sigma-target-cross-branch'){

    const
    finalSigmaBoltContextOfMonthBranchForCrossBranch =
    {
      ...rawSigmaBoltContextOfMonthBranch,
      sigmaTargetCrossBranchForMonthOriginal:
      sigmaTargetNutOfMonthBranch
    };

    return finalSigmaBoltContextOfMonthBranchForCrossBranch;
  }
  else if(sigmaBrakeTargetOfMonthBranch
    == 'sigma-target-cross-trunk'){
    const
    finalSigmaBoltContextOfMonthBranchForCrossTrunk =
    {
      ...rawSigmaBoltContextOfMonthBranch,
      sigmaTargetCrossTrunkForMonthOriginal:
      sigmaTargetNutOfMonthBranch
    }

    return finalSigmaBoltContextOfMonthBranchForCrossTrunk;
  }
  else{
    throw new Error(
      'The sigma target should be just '
      + 'cross trunk or cross branch.');
  }
}
