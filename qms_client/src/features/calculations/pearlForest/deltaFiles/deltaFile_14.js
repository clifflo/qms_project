import * as R from 'ramda';
import {
  getDeltaDualLongHooksContext_2
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

const buildDeltaDualLongHooksContext_3 =
  deltaDualLongHooksContext_2 => {

  try{

    const askingDayBranchChinese =
      deltaDualLongHooksContext_2
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
      deltaDualLongHooksContext_2
      .wheatCrossInHookContextSet_2;

    const cheeseCrossInHookContextSet_2 =
      deltaDualLongHooksContext_2
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

    const rawDeltaDualLongHooksContext_3 =
      R.compose(
        R.dissoc('wheatCrossInHookContextSet_2'),
        R.dissoc('cheeseCrossInHookContextSet_2'))
      (deltaDualLongHooksContext_2);

    const finalDeltaDualLongHooksContext_3 = {
      ...rawDeltaDualLongHooksContext_3,
      wheatCrossInHookContextSet_3,
      cheeseCrossInHookContextSet_3,
      askingDayTwigOpponentEnvelop,
      _type: 'Delta dual long hooks context 3'
    };

    return finalDeltaDualLongHooksContext_3;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot build delta long hook '
      + 'context 8.');
  }

}

export const getDeltaDualLongHooksContext_3 =
  R.compose(
    buildDeltaDualLongHooksContext_3,
    getDeltaDualLongHooksContext_2);
