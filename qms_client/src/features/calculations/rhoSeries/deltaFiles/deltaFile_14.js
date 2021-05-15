import * as R from 'ramda';
import {
  getDeltaLongHookContext_7
} from './deltaFile_12';
import {
  mapFunctionForWheatCrossInHookContext_3,
  mapFunctionForCheeseCrossInHookContext_3,
} from './deltaFile_13';
import {
  getTwigFlushOpponentOfChinese,
  getTwigHitOpponentOfChinese,
  getTwigSmallAlloyOpponentOfChinese,
  getTwigPauseOpponentOfChinese
} from './twigHubCloneOfDelta';


const buildDeltaLongHookContext_8 =
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
    askingDayHitOpponentChinese,
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

  const rawDeltaLongHookContext_8 =
    R.compose(
      R.dissoc('wheatCrossInHookContextSet_3'),
      R.dissoc('cheeseCrossInHookContextSet_3'))
    (deltaLongHookContext_7);

  const finalDeltaLongHookContext_8 = {
    ...rawDeltaLongHookContext_8,
    wheatCrossInHookContextSet_3,
    cheeseCrossInHookContextSet_3,
    _type: 'Delta long hook context 8'
  };

  return finalDeltaLongHookContext_8;
}

export const getDeltaLongHookContext_8 =
  R.compose(
    buildDeltaLongHookContext_8,
    getDeltaLongHookContext_7);
