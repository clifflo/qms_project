import * as R from 'ramda';
import {
  getDeltaLongHookContext_7
} from './deltaFile_12';
import {
  mapFunctionForWheatCrossInHookContext_3,
  mapFunctionForCheeseCrossInHookContext_3
} from './deltaFile_13';
import {
  getTwigFlushOpponentOfChinese,
  getTwigHitOpponentOfChinese,
  getTwigSmallAlloyOpponentOfChinese,
  getTwigPauseOpponentOfChinese
} from './twigHubCloneOfDelta';
import {
  checkNilWithArray,
  checkNilWithString
} from './utilityHubCloneOfDelta';

const buildDeltaLongHookContext_8 =
  deltaLongHookContext_7 => {

  try{

    const askingDayBranchChinese =
      deltaLongHookContext_7
      .askingDayBranchChinese;

    const askingDayFlushOpponentChinese =
      getTwigFlushOpponentOfChinese(
        askingDayBranchChinese);

    checkNilWithString(
      askingDayFlushOpponentChinese,
      'Asking day flush opponent chinese');

    const askingDayHitOpponentChinese =
      getTwigHitOpponentOfChinese(
        askingDayBranchChinese);

    const askingDayPauseOpponentChinese =
      getTwigPauseOpponentOfChinese(
        askingDayBranchChinese);

    const askingDaySmallAlloyOpponentChinese =
      getTwigSmallAlloyOpponentOfChinese(
        askingDayBranchChinese);

    const askingDayTwigOpponentEnvelop = {
      _type: 'Asking day twig opponent envelop',
      askingDayFlushOpponentChinese,
      askingDayHitOpponentChinese,
      askingDayPauseOpponentChinese,
      askingDaySmallAlloyOpponentChinese
    };

    const wheatCrossInHookContextSet_2 =
      deltaLongHookContext_7
      .wheatCrossInHookContextSet_2;

    const cheeseCrossInHookContextSet_2 =
      deltaLongHookContext_7
      .cheeseCrossInHookContextSet_2;

    checkNilWithArray(
      wheatCrossInHookContextSet_2,
      'Wheat cross in hook context set 2');

    checkNilWithArray(
      cheeseCrossInHookContextSet_2,
      'Cheese cross in hook context set 2');

    const
    loadedMapFunctionForWheatCrossInHookContext_3 =
      R.curry(mapFunctionForWheatCrossInHookContext_3)
      (askingDayTwigOpponentEnvelop);

    const
    loadedMapFunctionForCheeseCrossInHookContext_3 =
      R.curry(mapFunctionForCheeseCrossInHookContext_3)
      (askingDayTwigOpponentEnvelop);

    const wheatCrossInHookContextSet_3 =
      R.map(
        loadedMapFunctionForWheatCrossInHookContext_3,
        wheatCrossInHookContextSet_2);

    const cheeseCrossInHookContextSet_3 =
      R.map(
        loadedMapFunctionForCheeseCrossInHookContext_3,
        cheeseCrossInHookContextSet_2);

    const rawDeltaLongHookContext_8 =
      R.compose(
        R.dissoc('wheatCrossInHookContextSet_2'),
        R.dissoc('cheeseCrossInHookContextSet_2'))
      (deltaLongHookContext_7);

    const finalDeltaLongHookContext_8 = {
      ...rawDeltaLongHookContext_8,
      wheatCrossInHookContextSet_3,
      cheeseCrossInHookContextSet_3,
      askingDayTwigOpponentEnvelop,
      _type: 'Delta long hook context 8'
    };

    return finalDeltaLongHookContext_8;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot build delta long hook '
      + 'context 8.');
  }

}

export const getDeltaLongHookContext_8 =
  R.compose(
    buildDeltaLongHookContext_8,
    getDeltaLongHookContext_7);
