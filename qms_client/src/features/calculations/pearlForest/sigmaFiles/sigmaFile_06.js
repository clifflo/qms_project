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
      const
      finalSigmaBoltContextOfSeasonForCrossBranch =
      {
        ...rawSigmaBoltContextOfMonth,
        sigmaTargetCrossBranchNutForMonth:
        sigmaTargetNutOfSeason
      };

      return finalSigmaBoltContextOfSeasonForCrossBranch;
    }
    else if(sigmaBrakeTargetOfMonthOriginal
      == 'sigma-brake-target-cross-trunk'){
      const
      finalSigmaBoltContextOfSeasonForCrossTrunk =
      {
        ...rawSigmaBoltContextOfMonth,
        sigmaTargetCrossTrunkNutForMonth:
        sigmaTargetNutOfSeason
      }

      return finalSigmaBoltContextOfSeasonForCrossTrunk;
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
      'handleSigmaBoltOfSeason');
  }

}
