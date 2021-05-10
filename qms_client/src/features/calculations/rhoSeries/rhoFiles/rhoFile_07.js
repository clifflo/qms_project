import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  decimalToBinary
} from '../../utilityFiles/utilityHub';
import {
  getNattoNoodle
} from './rhoMiniHub_01';

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
      R.concat(externalSnapPeas, internalSnapPeas);

    const longHookBinaryDigits = R.drop(
      decimalToBinary(
      rhoContext_1.longHookIndex,
      6));

    const payloadForBuildLongHookCrossList = {
      combinedSnapPeas,
      longHookBinaryDigits,
      externalShortHookTrunk,
      internalShortHookTrunk
    };

    const longHookCrossMapFunction_1 =
      R.curry(buildLongHookCrossList)
      (payloadForBuildLongHookCrossList);

    const longHookCrossSet = R.map(
      longHookCrossMapFunction_1,
      R.range(0, 6));

  }
  catch(errorMessage){

  }
}


export const rhoContextSet_2 = getRhoContextSet_2();
