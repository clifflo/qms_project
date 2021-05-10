import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  longHookParagraph,
  bakedNattoSet
} from './rhoFile_03';
import {
  rhoContextMapFunction_1,
} from './rhoFile_04';
import {
  checkNilWithArray,
  checkNilWithString,
  checkNilWithTypedObject
} from '../../utilityFiles/utilityHub';
import {
  getTwigElementalContextByChinese,
  getTwigTrunkContextByChinese,
  getTwigBranchContextByChinese
} from '../../twigFiles/twigHub';

const buildRhoContextSet_1 = () => {

  try{
    return R.compose(
      R.map(rhoContextMapFunction_1),
      R.split(',')
    )
    (longHookParagraph);
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot build Rho Context Set 1.')
  }
}

export const rhoContextSet_1 =
  buildRhoContextSet_1();

export const buildLongHookCrossList = (
  payloadForBuildLongHookCrossList,
  longHookCrossDownwardIndex) => {

  const {
    externalShortHookTrunkChinese,
    internalShortHookTrunkChinese,
    truncatedLongHookBinaryDigits,
    combinedSnapPeas
  } = payloadForBuildLongHookCrossList;

  const longHookCrossSign =
    truncatedLongHookBinaryDigits[
      longHookCrossDownwardIndex];

  const longHookCrossTrunkChinese =
    longHookCrossDownwardIndex <= 2 ?
    externalShortHookTrunkChinese :
    internalShortHookTrunkChinese;

  const longHookCrossBranchChinese =
    combinedSnapPeas[
      longHookCrossDownwardIndex];

  const longHookCrossBranchElementalChinese =
    getTwigBranchContextByChinese(
      longHookCrossBranchChinese)
    .twigBranchElementalChinese;

  const longHookCrossBranchElementalEnglish =
    getTwigElementalContextByChinese(
      longHookCrossBranchElementalChinese)
    .twigElementalEnglish;

  return {
    longHookCrossSign,
    longHookCrossTrunkChinese,
    longHookCrossBranchChinese,
    longHookCrossDownwardIndex,
    longHookCrossSign,
    longHookCrossBranchElementalChinese,
    longHookCrossBranchElementalEnglish
  }
}
