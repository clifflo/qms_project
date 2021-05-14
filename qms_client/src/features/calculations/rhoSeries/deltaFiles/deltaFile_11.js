import * as R from 'ramda';

export const mapFunctionForWheatCrossInHook_2 =
  (askingDayTwigComboSetVoidBranchList,
  wheatCrossInHook_1) => {

  const crossInHookBranchChinese =
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

  const crossInHookBranchChinese =
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
