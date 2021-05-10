import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  decimalToBinary
} from '../../utilityFiles/utilityHub';
import {
  rhoContextSet_1,
  buildLongHookCrossContextList_1
} from './rhoMiniHub_01';
import {
  getNattoNoodle
} from './rhoFile_06';
import {
  getTwigElementalContextByChinese,
  getTwigTrunkContextByChinese
} from '../../twigFiles/twigHub';

const rhoContextMapFunction_2 = rhoContext_1 => {

  try{

    const externalNattoNoodle =
      getNattoNoodle(
        rhoContext_1
        .externalShortHookOriginal,
        true);

    const internalNattoNoodle =
      getNattoNoodle(
        rhoContext_1
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
        rhoContext_1.longHookIndex, 6);

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
      ...rhoContext_1,
      _type: 'Rho context 2'
    }
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get rho context 1.');
  }
}

const getRhoContextSet_2 = () => {
  return R.map(
    rhoContextMapFunction_2,
    rhoContextSet_1);
}

export const rhoContextSet_2 = getRhoContextSet_2();
