import * as R from 'ramda';
import {
  getDeltaDualLongHooksContext_2
} from './deltaFile_12';
import {
  mapFunctionOfWheatCrossInHookContext_3,
  mapFunctionOfCheeseCrossInHookContext_3
} from './deltaFile_13';
import {
  getTwigFlushOpponentOfChinese,
  getTwigHitOpponentOfChinese,
  getTwigSmallAlloyOpponentOfChinese,
  getTwigPauseOpponentOfChinese
} from './_twigHubByDelta';
import {
  checkNilWithArray,
  checkNilWithString
} from './_utilityHubByDelta';

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
      'Asking day flush opponent Chinese');

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
    loadedmapFunctionOfWheatCrossInHookContext_3 =
      R.curry(mapFunctionOfWheatCrossInHookContext_3)
      (askingDayTwigOpponentEnvelop);

    const
    loadedmapFunctionOfCheeseCrossInHookContext_3 =
      R.curry(mapFunctionOfCheeseCrossInHookContext_3)
      (askingDayTwigOpponentEnvelop);

    const wheatCrossInHookContextSet_3 =
      R.map(
        loadedmapFunctionOfWheatCrossInHookContext_3,
        wheatCrossInHookContextSet_2);

    const cheeseCrossInHookContextSet_3 =
      R.map(
        loadedmapFunctionOfCheeseCrossInHookContext_3,
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
