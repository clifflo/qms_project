import * as R from 'ramda';
import {
  mapFunctionForWheatCrossInHookContext_3,
  mapFunctionForCheeseCrossInHookContext_3
} from './deltaFile_13';

export const
  buildDeltaLongHookContext_8 =
  deltaLongHookContext_7 => {

  const askingDayBranchChinese =
    deltaLongHookContext_7
    .askingDayBranchChinese;

  const askingDayFlushOpponentChinese =
    getTwigFlushOpponentOfChinese(
      askingDayBranchChinese);

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
    askingDayHitOpponentChinese
    askingDayPauseOpponentChinese,
    askingDaySmallAlloyOpponentChinese
  };

  const wheatCrossInHookContextSet_2 =
    deltaLongHookContext_7
    .wheatCrossInHookContextSet_2;

  const cheeseCrossInHookContextSet_2 =
    getDeltaLongHookContext_7
    .cheeseCrossInHookContextSet_2;

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

  

}
