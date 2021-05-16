import * as R from 'ramda';
import {
  getDeltaLongHookContext_6
} from './deltaFile_10';
import {
  checkNilWithTypedObject
} from './utilityHubCloneOfDelta';

export const
  mapFunctionForWheatCrossInHookContext_2 =
  (askingDayTwigComboSetVoidBranchList,
  wheatCrossInHookContext_1) => {

  checkNilWithTypedObject(
    wheatCrossInHookContext_1,
    'Wheat cross in hook context 1');

  const wheatCrossInHookBranchChinese =
    wheatCrossInHookContext_1
    .crossInHookBranchChinese;

  const isCrossInHookBranchAtVoid =
    R.includes(
      wheatCrossInHookBranchChinese,
      askingDayTwigComboSetVoidBranchList);

  return {
    ...wheatCrossInHookContext_1,
    isCrossInHookBranchAtVoid
  }
}

export const
  mapFunctionForCheeseCrossInHookContext_2 =
  (askingDayTwigComboSetVoidBranchList,
  cheeseCrossInHookContext_1) => {

  const cheeseCrossInHookBranchChinese =
    cheeseCrossInHookContext_1
    .crossInHookBranchChinese;

  const isCrossInHookBranchAtVoid =
    R.includes(
      cheeseCrossInHookBranchChinese,
      askingDayTwigComboSetVoidBranchList);

  return {
    ...cheeseCrossInHookContext_1,
    isCrossInHookBranchAtVoid
  }
}
