import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  getDeltaLongHookContext_4
} from './deltaMiniHub_02'
import {
  getDeltaLongHookContext_5
} from './deltaFile_08';
import {
  checkNilWithTypedObject
} from './utilityHubCloneOfDelta';

export const getDeltaLongHookContext_6 =
  (askingDayTrunkChinese,
  wheatHookName,
  cheeseHookName) => {

  const deltaWheatHookContext =
    getDeltaLongHookContext_5(
      askingDayTrunkChinese,
      wheatHookName);

  const deltaCheeseHookContext =
    getDeltaLongHookContext_4(
      cheeseHookName);

  checkNilWithTypedObject(
    deltaWheatLongHookContext,
    'Delta wheat long hook context 5');

  checkNilWithTypedObject(
    deltaCheeseHookContext,
    'Delta cheese long hook context 4');

  const mapFunctionForWheatCrossInHook =
    crossInHookDownwardIndex => {

    const wheatCrossInHook =
      deltaWheatLongHookContext
      .crossInHookContextSet_4[
        crossInHookDownwardIndex];

    const cheeseCrossInHook =
      getDeltaLongHookContext_1
      .crossInHookContextSet_3[
        crossInHookDownwardIndex];

    const isStrikeCross =
      wheatCrossInHook.crossInHookSign !=
      cheeseCrossInHook.crossInHookSign;

    const strikeStatus =
      isStrikeCross ? 'Strike cross'
      : 'Silent cross';

    const get
  }
}
