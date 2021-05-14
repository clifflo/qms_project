import * as R from 'ramda';
import {
  getDeltaLongHookContext_6
} from './deltaFile_10';

export const mapFunctionForWheatCrossInHook_2 =
  (askingDayTwigComboSetVoidBranchList,
  wheatCrossInHook_1) => {

  const wheatCrossInHookBranchChinese =
    wheatCrossInHook_1
    .crossInHookBranchChinese;

  const isCrossInHookBranchAtVoid =
    R.includes(
      wheatCrossInHookBranchChinese,
      askingDayTwigComboSetVoidBranchList);

  return {
    ...wheatCrossInHook_1,
    isCrossInHookBranchAtVoid
  }
}

export const mapFunctionForCheeseCrossInHook_2 =
  (askingDayTwigComboSetVoidBranchList,
  cheeseCrossInHook_1) => {

  const cheeseCrossInHookBranchChinese =
    cheeseCrossInHook_1
    .crossInHookBranchChinese;

  const isCrossInHookBranchAtVoid =
    R.includes(
      cheeseCrossInHookBranchChinese,
      askingDayTwigComboSetVoidBranchList);

  return {
    ...cheeseCrossInHook_1,
    isCrossInHookBranchAtVoid
  }
}
