import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  getDeltaLongHookContext_4
} from './deltaMiniHub_02'
import {
  getDeltaLongHookContext_5,
  mapFunctionForBothCrossInHook
} from './deltaMiniHub_03';
import {
  checkNilWithTypedObject
} from './utilityHubCloneOfDelta';

export const getDeltaLongHookContext_6 =
  (askingDayTrunkChinese,
  wheatHookName,
  cheeseHookName) => {

  try{
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

    const middleDeltaWheatHookContext =
      R.dissoc(
        'crossInHookContextSet_4',
        rawDeltaWheatHookContext);

    const middleDeltaCheeseHookContext =
      R.dissoc(
        'crossInHookContextSet_3',
        rawDeltaCheeseHookContext);

    const finalDeltaWheatHookContext = {
      ...middleDeltaWheatHookContext,
      _type: 'Delta wheat hook context'
    };

    const finalDeltaCheeseHookContext = {
      ...middleDeltaCheeseHookContext,
      _type: 'Delta cheese hook context'
    };

    const loadedMapFunctionForBothCrossInHook =
      R.curry(mapFunctionForBothCrossInHook)
      (rawDeltaWheatHookContext)
      (rawDeltaCheeseHookContext);

    const combinedCrossInHookSet =
      R.map(
        loadedMapFunctionForBothCrossInHook,
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
      askingDayTrunkChinese,
      wheatHookName,
      cheeseHookName,
      deltaWheatHookContext:
        finalDeltaWheatHookContext,
      deltaCheeseHookContext:
        finalDeltaCheeseHookContext,
      wheatCrossInHookSet_1,
      cheeseCrossInHookSet_1
    };

    return deltaLongHookContext_6;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get delta long hook context 6.');
  }


}
