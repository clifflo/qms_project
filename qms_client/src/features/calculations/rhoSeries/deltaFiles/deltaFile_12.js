import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  getTwigComboSetContextByTwigFullComboChinese
} from './twigHubCloneOfDelta';
import {
  getDeltaLongHookContext_6
} from './deltaFile_10';
import {
  mapFunctionForWheatCrossInHook_2,
  mapFunctionForCheeseCrossInHook_2
} from './deltaFile_11';

export const getDeltaLongHookContext_7 =
  (askingDayTwigFullComboChinese,
  wheatHookName,
  cheeseHookName) => {

  const askingDayTrunkChinese =
    askingDayTwigFullComboChinese[0];

  const deltaLongHookContext_6 =
    getDeltaLongHookContext_6(
      askingDayTrunkChinese,
      wheatHookName,
      cheeseHookName);

  const askingDayTwigComboSetContext =
    getTwigComboSetContextByTwigFullComboChinese(
      askingDayTwigFullComboChinese);

  const askingDayTwigComboSetVoidBranchChineseList =
    askingDayTwigComboSetContext
    .twigComboSetVoidBranchChineseList;

  const loadedMapFunctionForWheatCrossInHook_2 =
    R.curry(mapFunctionForWheatCrossInHook_2)
    (askingDayTwigComboSetVoidBranchChineseList);

  const loadedMapFunctionForCheeseCrossInHook_2 =
    R.curry(mapFunctionForCheeseCrossInHook_2)
    (askingDayTwigComboSetVoidBranchChineseList);

  const {
    wheatCrossInHookSet_1,
    cheeseCrossInHookSet_1
  } = deltaLongHookContext_6;

  const wheatCrossInHookSet_2 =
    R.map(
      loadedMapFunctionForWheatCrossInHook_2,
      wheatCrossInHookSet_1);

  const cheeseCrossInHookSet_2 =
    R.map(
      loadedMapFunctionForCheeseCrossInHook_2,
      cheeseCrossInHookSet_1);

  const rawDeltaLongHookContext_7 =
    R.compose(
      R.dissoc('wheatCrossInHookSet_1'),
      R.dissoc('cheeseCrossInHookSet_1'))
    (deltaLongHookContext_6);

  const finalDeltaLongHookContext_7 = {
    ...rawDeltaLongHookContext_7,
    wheatCrossInHookSet_2,
    cheeseCrossInHookSet_2,
    _type: 'Delta long hook context 7'
  };

  return finalDeltaLongHookContext_7;

}
