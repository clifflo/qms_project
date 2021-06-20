import * as R from 'ramda';
import {
  sigmaBrakeContextPartialSetOfMonthBranch
} from './sigmaMiniHub_01';
import {
  checkNilWithString,
  checkNilWithUntypedObject,
  checkNilWithArray,
  throwFunctionalError
} from './_utilityHubBySigma';
import {
  getTauMonthBranchChineseFromOriginal
} from './_tauHubBySigma';

export const handleSigmaBoltOfMonthOriginal =
  (sigmaBrakeTargetOfMonthOriginal,
  sigmaBoltOfMonthBranch) => {

  try{

    const sigmaSourceNutOfMonthOriginal =
      sigmaBoltOfMonthBranch[0] + '月';

    const sigmaSourceNutOfMonthBranch =
      getTauMonthBranchChineseFromOriginal(
        sigmaSourceNutOfMonthOriginal);

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

    if(sigmaBrakeTargetOfMonthOriginal
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
    else if(sigmaBrakeTargetOfMonthOriginal
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
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'handleSigmaBoltOfMonthOriginal');
  }

}
