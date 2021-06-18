import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  getTwigComboSetContextByTwigFullComboChinese,
  isValidTwigTrunkChinese,
  isValidTwigBranchChinese
} from './_twigHubByDelta';
import {
  getDeltaDualLongHooksContext_1
} from './deltaFile_10';
import {
  mapFunctionOfWheatCrossInHookContext_2,
  mapFunctionOfCheeseCrossInHookContext_2
} from './deltaFile_11';

export const getDeltaDualLongHooksContext_2 =
  (askingDayTwigFullComboChinese,
  wheatHookName,
  cheeseHookName) => {

  try{

    if(askingDayTwigFullComboChinese.length != 2){
      throw new Error(
        'Asking day twig full combo Chinese '
        + 'must have two characters.');
    }

    const askingDayTrunkChinese =
      askingDayTwigFullComboChinese[0];

    const validAskingDayTrunkChinese =
      isValidTwigTrunkChinese(
        askingDayTrunkChinese);

    if(!validAskingDayTrunkChinese){
      throw new Error(
        'Asking day trunk is not valid.');
    }

    const askingDayBranchChinese =
      askingDayTwigFullComboChinese[1];

    const validAskingDayBranchChinese =
      isValidTwigBranchChinese(
        askingDayBranchChinese);

    if(!validAskingDayBranchChinese){
      throw new Error(
        'Asking day branch is not valid.');
    }

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
      loadedmapFunctionOfWheatCrossInHookContext_2 =
      R.curry(mapFunctionOfWheatCrossInHookContext_2)
      (askingDayTwigComboSetVoidBranchChineseList);

    const
      loadedmapFunctionOfCheeseCrossInHookContext_2 =
      R.curry(mapFunctionOfCheeseCrossInHookContext_2)
      (askingDayTwigComboSetVoidBranchChineseList);

    const {
      wheatCrossInHookContextSet_1,
      cheeseCrossInHookContextSet_1
    } = deltaDualLongHooksContext_1;

    const wheatCrossInHookContextSet_2 =
      R.map(
        loadedmapFunctionOfWheatCrossInHookContext_2,
        wheatCrossInHookContextSet_1);

    const cheeseCrossInHookContextSet_2 =
      R.map(
        loadedmapFunctionOfCheeseCrossInHookContext_2,
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
