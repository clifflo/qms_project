import * as R from 'ramda';
import {
  getDeltaDualLongHooksContext_2
} from './deltaFile_12';
import {
  mapFunctionOfWheatCrossInHookContextFinal,
  mapFunctionOfCheeseCrossInHookContextFinal
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

    const askingDayTwigReactionOpponentEnvelop = {
      _type: 'AskingDayTwigReactionOpponentEnvelop',
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
    loadedmapFunctionOfWheatCrossInHookContextFinal =
      R.curry(mapFunctionOfWheatCrossInHookContextFinal)
      (askingDayTwigReactionOpponentEnvelop);

    const
    loadedmapFunctionOfCheeseCrossInHookContextFinal =
      R.curry(mapFunctionOfCheeseCrossInHookContextFinal)
      (askingDayTwigReactionOpponentEnvelop);

    const wheatCrossInHookContextSetFinal =
      R.map(
        loadedmapFunctionOfWheatCrossInHookContextFinal,
        wheatCrossInHookContextSet_2);

    const cheeseCrossInHookContextSetFinal =
      R.map(
        loadedmapFunctionOfCheeseCrossInHookContextFinal,
        cheeseCrossInHookContextSet_2);

    const rawDeltaDualLongHooksContext_3 =
      R.compose(
        R.dissoc('wheatCrossInHookContextSet_2'),
        R.dissoc('cheeseCrossInHookContextSet_2'))
      (deltaDualLongHooksContext_2);

    const finalDeltaDualLongHooksContext_3 = {
      ...rawDeltaDualLongHooksContext_3,
      wheatCrossInHookContextSetFinal,
      cheeseCrossInHookContextSetFinal,
      askingDayTwigReactionOpponentEnvelop,
      _type: 'DeltaDualLongHooksContext_3'
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
