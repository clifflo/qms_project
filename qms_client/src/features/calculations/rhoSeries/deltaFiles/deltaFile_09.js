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

  const mapFunctionForBothCrossInHook =
    crossInHookDownwardIndex => {

    const wheatCrossInHook_0 =
      deltaWheatLongHookContext
      .crossInHookContextSet_4[
        crossInHookDownwardIndex];

    const cheeseCrossInHook_0 =
      getDeltaLongHookContext_1
      .crossInHookContextSet_3[
        crossInHookDownwardIndex];

    const isStrikeCross =
      wheatCrossInHook.crossInHookSign !=
      cheeseCrossInHook.crossInHookSign;

    const cheeseCrossInHook_1 = {
      ...cheeseCrossInHook_0,
      isStrikeCross,
      _type: 'Delta cheese cross in hook 1'
    };

    const getWheatCrossInHook_1 = () => {
      if(isStrikeCross){
        return {
          ...wheatCrossInHook_0,
          isStrikeCross,
          referredCheeseCrossInHook_1:
            cheeseCrossInHook_1,
          _type: 'Delta wheat cross in hook 1'
        }
      }
      else {
        return {
          ...wheatCrossInHook_0,
          isStrikeCross,
          _type: 'Delta wheat cross in hook 1'
        }
      }
    }

    const wheatCrossInHook_1 =
      getWheatCrossInHook_1();

  }

  const deltaLongHookContext_6 =
    R.map(
      mapFunctionForBothCrossInHook,
      R.range(0, 6));

  return deltaLongHookContext_6;
}
