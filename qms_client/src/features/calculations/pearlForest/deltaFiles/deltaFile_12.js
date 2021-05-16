import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  getTwigComboSetContextByTwigFullComboChinese
} from './twigHubCloneOfDelta';
import {
  getDeltaDualLongHooksContext_1
} from './deltaFile_10';
import {
  mapFunctionForWheatCrossInHookContext_2,
  mapFunctionForCheeseCrossInHookContext_2
} from './deltaFile_11';

export const getDeltaDualLongHooksContext_2 =
  (askingDayTwigFullComboChinese,
  wheatHookName,
  cheeseHookName) => {

  try{
    const askingDayTrunkChinese =
      askingDayTwigFullComboChinese[0];

    const askingDayBranchChinese =
      askingDayTwigFullComboChinese[1];

    const deltaDualLongHooksContext_1 =
      getDeltaDualLongHooksContext_1(
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
    } = deltaDualLongHooksContext_1;

    const wheatCrossInHookContextSet_2 =
      R.map(
        loadedMapFunctionForWheatCrossInHookContext_2,
        wheatCrossInHookContextSet_1);

    const cheeseCrossInHookContextSet_2 =
      R.map(
        loadedMapFunctionForCheeseCrossInHookContext_2,
        cheeseCrossInHookContextSet_1);

    const rawDeltaDualLongHooksContext_2 =
      R.compose(
        R.dissoc('wheatCrossInHookContextSet_1'),
        R.dissoc('cheeseCrossInHookContextSet_1'))
      (deltaDualLongHooksContext_1);

    const finalDeltaDualLongHooksContext_2 = {
      ...rawDeltaDualLongHooksContext_2,
      askingDayTwigFullComboChinese,
      askingDayTrunkChinese,
      askingDayBranchChinese,
      askingDayTwigComboSetVoidBranchChineseList,
      wheatCrossInHookContextSet_2,
      cheeseCrossInHookContextSet_2,
      _type: 'Delta dual long hooks context 2'
    };

    return finalDeltaDualLongHooksContext_2;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get delta dual long hooks context 2.');
  }
}
