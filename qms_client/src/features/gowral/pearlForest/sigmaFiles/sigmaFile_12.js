import * as R from 'ramda';
import {
  sigmaBrakeContextPartialSetOfYearBranch
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
import {
  isValidTwigBranchChinese
} from './_twigHubBySigma';

export const handleSigmaBoltOfYearBranch =
  (sigmaBrakeTargetOfYearBranch,
  sigmaBoltOfYearBranch) => {

  try{

    const sigmaSourceNutOfYearBranch =
      sigmaBoltOfYearBranch[0];

    checkNilWithString(
      sigmaSourceNutOfYearBranch,
      'sigmaSourceNutOfYearBranch');

    const validTwigBranchChinese =
      isValidTwigBranchChinese(
        sigmaSourceNutOfYearBranch);

    if(!validTwigBranchChinese){
      throw new Error(
        'Sigma source nut of year branch is not valid.');
    }

    const sigmaTargetNutOfYearBranch =
      sigmaBoltOfYearBranch[1];

    checkNilWithString(
      sigmaTargetNutOfYearBranch,
      'sigmaTargetNutOfYearBranch');

    const rawSigmaBoltContextOfYearBranch = {
      _type: 'SigmaBoltContextOfYearBranch',
      sigmaSourceNutOfYearBranch
    };

    if(sigmaBrakeTargetOfYearBranch
      == 'SigmaBrakeTargetCrossBranch'){
      const finalSigmaBoltContextOfYearBranchForCrossBranch =
      {
        ...rawSigmaBoltContextOfYearBranch,
        sigmaTargetCrossBranchNutForYearBranch:
        sigmaTargetNutOfYearBranch
      };

      return finalSigmaBoltContextOfYearBranchForCrossBranch;
    }
    else if(sigmaBrakeTargetOfYearBranch
      == 'SigmaBrakeTargetCrossTrunk'){
      const finalSigmaBoltContextOfYearBranchForCrossTrunk =
      {
        ...rawSigmaBoltContextOfYearBranch,
        sigmaTargetCrossTrunkNutForYearBranch:
        sigmaTargetNutOfYearBranch
      }

      return finalSigmaBoltContextOfYearBranchForCrossTrunk;
    }
    else{
      throw new Error(
        'The sigma target for year branch should '
        + 'be just cross trunk or cross branch');
    }
  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'handleSigmaBoltOfYearBranch');
  }
}
