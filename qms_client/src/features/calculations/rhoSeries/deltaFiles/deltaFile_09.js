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

  const rawDeltaWheatHookContext =
    getDeltaLongHookContext_5(
      askingDayTrunkChinese,
      wheatHookName);

  const rawDeltaCheeseHookContext =
    getDeltaLongHookContext_4(
      cheeseHookName);

  checkNilWithTypedObject(
    rawDeltaWheatHookContext,
    'Delta long hook context 5');

  checkNilWithTypedObject(
    rawDeltaCheeseHookContext,
    'Delta long hook context 4');

  const finalDeltaWheatHookContext =
    R.dissoc(
      'crossInHookContextSet_4',
      rawDeltaWheatHookContext);

  const finalDeltaCheeseHookContext =
    R.dissoc(
      'crossInHookContextSet_3',
      rawDeltaCheeseHookContext_1);



  const mapFunctionForBothCrossInHook =
    crossInHookDownwardIndex => {

    const wheatCrossInHook_0 =
      deltaWheatHookContext
      .crossInHookContextSet_4[
        crossInHookDownwardIndex];

    const cheeseCrossInHook_0 =
      deltaCheeseHookContext
      .crossInHookContextSet_3[
        crossInHookDownwardIndex];

    const isStrikeCross =
      wheatCrossInHook_0.crossInHookSign !=
      cheeseCrossInHook_0.crossInHookSign;

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

    return {
      wheatCrossInHook_1,
      cheeseCrossInHook_1
    }
  }

  const combinedCrossInHookSet =
    R.map(
      mapFunctionForBothCrossInHook,
      R.range(0, 6));

  const wheatCrossInHookSet_1 =
    R.map(
      R.prop('wheatCrossInHook_1'),
      combinedCrossInHookSet);

  const cheeseCrossInHookSet_1 =
    R.map(
      R.prop('cheeseCrossInHook_1'),
      combinedCrossInHookSet);

  const deltaLongHookContext_6 = {
    deltaWheatHookContext_1
  }
}
