import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  longHookParagraph,
  bakedNattoSet
} from './rhoFile_03';
import {
  rhoLongHookContextMapFunction_1,
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

const buildRhoLongHookContextSet_1 = () => {

  try{
    return R.compose(
      R.map(rhoLongHookContextMapFunction_1),
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

export const rhoLongHookContextSet_1 =
  buildRhoLongHookContextSet_1();

export const buildLongHookCrossContextList_1 = (
  payloadForBuildLongHookCrossContextList_1,
  longHookCrossDownwardIndex) => {

  const {
    externalShortHookTrunkChinese,
    internalShortHookTrunkChinese,
    truncatedLongHookBinaryDigits,
    combinedSnapPeas
  } = payloadForBuildLongHookCrossContextList_1;

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
    _type: 'Long hook cross context 1',
    longHookCrossSign,
    longHookCrossTrunkChinese,
    longHookCrossBranchChinese,
    longHookCrossDownwardIndex,
    longHookCrossSign,
    longHookCrossBranchElementalChinese,
    longHookCrossBranchElementalEnglish
  }
}
