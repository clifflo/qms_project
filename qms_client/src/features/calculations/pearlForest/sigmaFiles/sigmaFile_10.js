import * as R from 'ramda';
import {
  sigmaBrakeContextPartialSetOfDayBranch
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

export const handleSigmaBoltOfDayBranch =
  (sigmaBrakeTargetOfDayBranch,
  sigmaBoltOfDayBranch) => {

  try{

    const sigmaSourceNutOfDayBranch =
      sigmaBoltOfDayBranch[0];

    checkNilWithString(
      sigmaSourceNutOfDayBranch,
      'sigmaSourceNutOfDayBranch');

    const validTwigBranchChinese =
      isValidTwigBranchChinese(
        sigmaSourceNutOfDayBranch);

    if(!validTwigBranchChinese){
      throw new Error(
        'Sigma source nut of day branch is not valid.');
    }

    const sigmaTargetNutOfDayBranch =
      sigmaBoltOfDayBranch[1];

    checkNilWithString(
      sigmaTargetNutOfDayBranch,
      'sigmaTargetNutOfDayBranch');

    const rawSigmaBoltContextOfDayBranch = {
      _type: 'SigmaBoltContextOfDayBranch',
      sigmaSourceNutOfDayBranch
    };

    if(sigmaBrakeTargetOfDayBranch
      == 'sigma-brake-target-cross-branch'){
      const finalSigmaBoltContextOfDayBranchForCrossBranch =
      {
        ...rawSigmaBoltContextOfDayBranch,
        sigmaTargetCrossBranchNutForDayBranch:
        sigmaTargetNutOfDayBranch
      };

      return finalSigmaBoltContextOfDayBranchForCrossBranch;
    }
    else if(sigmaBrakeTargetOfDayBranch
      == 'sigma-brake-target-cross-trunk'){
      const finalSigmaBoltContextOfDayBranchForCrossTrunk =
      {
        ...rawSigmaBoltContextOfDayBranch,
        sigmaTargetCrossTrunkNutForDayBranch:
        sigmaTargetNutOfDayBranch
      }

      return finalSigmaBoltContextOfDayBranchForCrossTrunk;
    }
    else{
      throw new Error(
        'The sigma target for day branch should '
        + 'be just cross trunk, cross branch or '
        + 'cross twig combo.');
    }
  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'handleSigmaBoltOfDayBranch');
  }

}
