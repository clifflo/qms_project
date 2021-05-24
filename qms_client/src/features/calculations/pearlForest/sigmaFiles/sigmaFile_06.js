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
  isValidTwigSeasonChinese
} from './_twigHubBySigma';

export const handleSigmaBoltOfSeason =
  (sigmaBrakeTargetOfSeason,
  sigmaBoltOfSeason) => {

  try{

    const sigmaSourceNutOfSeason =
      sigmaBoltOfSeason[0];

    checkNilWithString(
      sigmaSourceNutOfSeason,
      'sigmaSourceNutOfSeason');

    const validTwigSeasonChinese =
      isValidTwigSeasonChinese(
        sigmaSourceNutOfSeason);

    if(!validTwigSeasonChinese){
      throw new Error(
        'Sigma source nut of season is not valid.');
    }

    const sigmaTargetNutOfSeason =
      sigmaBoltOfSeason[1];

    checkNilWithString(
      sigmaTargetNutOfSeason,
      'sigmaTargetNutOfSeason');

    const rawSigmaBoltContextOfSeason = {
      _type: 'SigmaBoltContextOfSeason',
      sigmaSourceNutOfSeason
    };

    if(sigmaBrakeTargetOfSeason
      == 'sigma-brake-target-cross-branch'){
      const finalSigmaBoltContextOfSeasonForCrossBranch =
      {
        ...rawSigmaBoltContextOfSeason,
        sigmaTargetCrossBranchNutForSeason:
        sigmaTargetNutOfSeason
      };

      return finalSigmaBoltContextOfSeasonForCrossBranch;
    }
    else if(sigmaBrakeTargetOfSeason
      == 'sigma-brake-target-cross-trunk'){
      const finalSigmaBoltContextOfSeasonForCrossTrunk =
      {
        ...rawSigmaBoltContextOfSeason,
        sigmaTargetCrossTrunkNutForSeason:
        sigmaTargetNutOfSeason
      }

      return finalSigmaBoltContextOfSeasonForCrossTrunk;
    }
    else if(sigmaBrakeTargetOfSeason
      == 'sigma-brake-target-cross-twig-combo'){
      const finalSigmaBoltContextOfSeasonForCrossTwigCombo =
      {
        ...rawSigmaBoltContextOfSeason,
        sigmaTargetCrossTwigComboNutForSeason:
        sigmaTargetNutOfSeason
      }

      return finalSigmaBoltContextOfSeasonForCrossTwigCombo;
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
      'handleSigmaBoltOfSeason');
  }

}
