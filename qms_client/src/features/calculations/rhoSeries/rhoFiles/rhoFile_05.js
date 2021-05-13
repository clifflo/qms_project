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
  getTwigVanillaElementalContextByChinese,
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

export const buildCrossInHookContextList_1 = (
  payloadForBuildCrossInHookContextList_1,
  crossInHookDownwardIndex) => {

  const {
    externalShortHookTrunkChinese,
    internalShortHookTrunkChinese,
    truncatedLongHookBinaryDigits,
    combinedSnapPeas
  } = payloadForBuildCrossInHookContextList_1;

  const crossInHookSign =
    truncatedLongHookBinaryDigits[
      crossInHookDownwardIndex];

  const crossInHookTrunkChinese =
    crossInHookDownwardIndex <= 2 ?
    externalShortHookTrunkChinese :
    internalShortHookTrunkChinese;

  const crossInHookBranchChinese =
    combinedSnapPeas[
      crossInHookDownwardIndex];

  const crossInHookBranchElementalChinese =
    getTwigBranchContextByChinese(
      crossInHookBranchChinese)
    .twigBranchElementalChinese;

  const crossInHookBranchElementalEnglish =
    getTwigVanillaElementalContextByChinese(
      crossInHookBranchElementalChinese)
    .twigVanillaElementalEnglish;

  checkNilWithString(
    crossInHookBranchElementalEnglish,
    'Long hook cross branch elemental english');

  return {
    _type: 'Long hook cross context 1.',
    crossInHookSign,
    crossInHookTrunkChinese,
    crossInHookBranchChinese,
    crossInHookDownwardIndex,
    crossInHookSign,
    crossInHookBranchElementalChinese,
    crossInHookBranchElementalEnglish
  }
}
