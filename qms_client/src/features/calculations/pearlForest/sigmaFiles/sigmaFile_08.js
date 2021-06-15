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
import {
  isValidTwigTrunkChinese
} from './_twigHubBySigma';

export const handleSigmaBoltOfDayTrunk =
  (sigmaBrakeTargetOfDayTrunk,
  sigmaBoltOfDayTrunk) => {

  try{

    const sigmaSourceNutOfDayTrunk =
      sigmaBoltOfDayTrunk[0];

    checkNilWithString(
      sigmaSourceNutOfDayTrunk,
      'sigmaSourceNutOfDayTrunk');

    const validTwigDayTrunkChinese =
      isValidTwigTrunkChinese(
        sigmaSourceNutOfDayTrunk);

    if(!validTwigDayTrunkChinese){
      throw new Error(
        'Sigma source nut of DayTrunk is not valid.');
    }

    const sigmaTargetNutOfDayTrunk =
      sigmaBoltOfDayTrunk[1];

    checkNilWithString(
      sigmaTargetNutOfDayTrunk,
      'sigmaTargetNutOfDayTrunk');

    const rawSigmaBoltContextOfDayTrunk = {
      _type: 'SigmaBoltContextOfDayTrunk',
      sigmaSourceNutOfDayTrunk
    };

    if(sigmaBrakeTargetOfDayTrunk
      == 'SigmaBrakeTargetCrossBranch'){
      const finalSigmaBoltContextOfDayTrunkForCrossBranch =
      {
        ...rawSigmaBoltContextOfDayTrunk,
        sigmaTargetCrossBranchNutForDayTrunk:
        sigmaTargetNutOfDayTrunk
      };

      return finalSigmaBoltContextOfDayTrunkForCrossBranch;
    }
    else if(sigmaBrakeTargetOfDayTrunk
      == 'SigmaBrakeTargetCrossTrunk'){
      const finalSigmaBoltContextOfDayTrunkForCrossTrunk =
      {
        ...rawSigmaBoltContextOfDayTrunk,
        sigmaTargetCrossTrunkNutForDayTrunk:
        sigmaTargetNutOfDayTrunk
      }

      return finalSigmaBoltContextOfDayTrunkForCrossTrunk;
    }
    else if(sigmaBrakeTargetOfDayTrunk
      == 'sigma-brake-target-cross-twig-combo'){
      const finalSigmaBoltContextOfDayTrunkForCrossTwigCombo =
      {
        ...rawSigmaBoltContextOfDayTrunk,
        sigmaTargetCrossTwigComboNutForDayTrunk:
        sigmaTargetNutOfDayTrunk
      }

      return finalSigmaBoltContextOfDayTrunkForCrossTwigCombo;
    }
    else{
      throw new Error(
        'The sigma target should be just '
        + 'cross trunk, cross branch or '
        + 'cross twig combo.');
    }
  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'handleSigmaBoltOfDayTrunk');
  }

}
