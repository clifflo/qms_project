import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  decimalToBinary
} from '../../utilityFiles/utilityHub';
import {
  rhoLongHookContextSet_1,
  buildLongHookCrossContextList_1
} from './rhoMiniHub_01';
import {
  getNattoNoodle
} from './rhoFile_06';
import {
  getTwigVanillaElementalContextByChinese,
  getTwigTrunkContextByChinese
} from '../../twigFiles/twigHub';

const rhoLongHookContextMapFunction_2 =
  rhoLongHookContext_1 => {

  try{

    const externalNattoNoodle =
      getNattoNoodle(
        rhoLongHookContext_1
        .externalShortHookOriginal,
        true);

    const internalNattoNoodle =
      getNattoNoodle(
        rhoLongHookContext_1
        .internalShortHookOriginal,
        false);

    const externalSnapPeas =
      externalNattoNoodle.effectiveSnapPeas;

    const externalShortHookTrunkChinese =
      externalNattoNoodle
      .effectiveShortHookTrunkChinese;

    const externalShortHookElementalChinese =
      externalNattoNoodle
      .effectiveShortHookElementalChinese;

    const externalShortHookElementalEnglish =
      externalNattoNoodle
      .effectiveShortHookElementalEnglish;

    const internalSnapPeas =
      internalNattoNoodle
      .effectiveSnapPeas;

    const internalShortHookTrunkChinese =
      internalNattoNoodle
      .effectiveShortHookTrunkChinese;

    const internalShortHookElementalChinese =
      internalNattoNoodle
      .effectiveShortHookElementalChinese;

    const internalShortHookElementalEnglish =
      internalNattoNoodle
      .effectiveShortHookElementalEnglish;

    const combinedSnapPeas =
      R.concat(
        externalSnapPeas,
        internalSnapPeas);

    const rawLongHookBinaryDigits =
      decimalToBinary(
        rhoLongHookContext_1.longHookIndex, 6);

    const truncatedLongHookBinaryDigits =
      R.drop(1, rawLongHookBinaryDigits);

    const payloadForBuildLongHookCrossContextList_1
    = {
        combinedSnapPeas,
        truncatedLongHookBinaryDigits,
        externalShortHookTrunkChinese,
        internalShortHookTrunkChinese
      };

    const longHookCrossMapFunction_1 =
      R.curry(buildLongHookCrossContextList_1)
      (payloadForBuildLongHookCrossContextList_1);

    const longHookCrossSet = R.map(
      longHookCrossMapFunction_1,
      R.range(0, 6));

    return {
      longHookCrossSet,
      ...rhoLongHookContext_1,
      _type: 'Rho long hook context 2'
    }
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get rho context 1.');
  }
}

const getRhoLongHookContextSet_2 = () => {
  return R.map(
    rhoLongHookContextMapFunction_2,
    rhoLongHookContextSet_1);
}

export const rhoLongHookContextSet_2 = getRhoLongHookContextSet_2();
