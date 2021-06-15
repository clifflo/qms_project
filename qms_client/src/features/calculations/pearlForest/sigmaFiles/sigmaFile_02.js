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

export const handleSigmaBoltOfMonthBranch =
  (sigmaBrakeTargetOfMonthBranch,
  sigmaBoltOfMonthBranch) => {

  const sigmaSourceNutOfMonthBranch =
    sigmaBoltOfMonthBranch[0] + '月';

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

  const rawSigmaBoltContextOfMonth = {
    _type: 'SigmaBoltContextOfMonth',
    sigmaSourceNutOfMonthBranch,
    sigmaSourceNutOfMonthOriginal
  };

  if(sigmaBrakeTargetOfMonthBranch
    == 'SigmaBrakeTargetCrossBranch'){
    const
    finalSigmaBoltContextOfMonthForCrossBranch =
    {
      ...rawSigmaBoltContextOfMonth,
      sigmaTargetCrossBranchNutForMonth:
      sigmaTargetNutOfMonthBranch
    };

    return finalSigmaBoltContextOfMonthForCrossBranch;
  }
  else if(sigmaBrakeTargetOfMonthBranch
    == 'SigmaBrakeTargetCrossTrunk'){
    const
    finalSigmaBoltContextOfMonthForCrossTrunk =
    {
      ...rawSigmaBoltContextOfMonth,
      sigmaTargetCrossTrunkNutForMonth:
      sigmaTargetNutOfMonthBranch
    }

    return finalSigmaBoltContextOfMonthForCrossTrunk;
  }
  else{
    throw new Error(
      'The sigma target should be just '
      + 'cross trunk or cross branch.');
  }
}
