import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  getTwigComboSetContextByTwigFullComboChinese
} from './twigHubCloneOfDelta';
import {
  getDeltaLongHookContext_6
} from './deltaFile_10';
import {
  mapFunctionForWheatCrossInHookContext_2,
  mapFunctionForCheeseCrossInHookContext_2
} from './deltaFile_11';

export const getDeltaLongHookContext_7 =
  (askingDayTwigFullComboChinese,
  wheatHookName,
  cheeseHookName) => {

  const askingDayTrunkChinese =
    askingDayTwigFullComboChinese[0];

  const askingDayBranchChinese =
    askingDayTwigFullComboChinese[1];

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

  const
    loadedMapFunctionForWheatCrossInHookContext_2 =
    R.curry(mapFunctionForWheatCrossInHookContext_2)
    (askingDayTwigComboSetVoidBranchChineseList);

  const
    loadedMapFunctionForCheeseCrossInHookContext_2 =
    R.curry(mapFunctionForCheeseCrossInHookContext_2)
    (askingDayTwigComboSetVoidBranchChineseList);

  const {
    wheatCrossInHookContextSet_1,
    cheeseCrossInHookContextSet_1
  } = deltaLongHookContext_6;

  const wheatCrossInHookContextSet_2 =
    R.map(
      loadedMapFunctionForWheatCrossInHookContext_2,
      wheatCrossInHookContextSet_1);

  const cheeseCrossInHookContextSet_2 =
    R.map(
      loadedMapFunctionForCheeseCrossInHookContext_2,
      cheeseCrossInHookContextSet_1);

  const rawDeltaLongHookContext_7 =
    R.compose(
      R.dissoc('wheatCrossInHookContextSet_1'),
      R.dissoc('cheeseCrossInHookContextSet_1'))
    (deltaLongHookContext_6);

  const finalDeltaLongHookContext_7 = {
    ...rawDeltaLongHookContext_7,
    askingDayTwigFullComboChinese,
    askingDayTrunkChinese,
    askingDayBranchChinese,
    askingDayTwigComboSetVoidBranchChineseList,
    wheatCrossInHookContextSet_2,
    cheeseCrossInHookContextSet_2,
    _type: 'Delta long hook context 7'
  };

  return finalDeltaLongHookContext_7;

}
