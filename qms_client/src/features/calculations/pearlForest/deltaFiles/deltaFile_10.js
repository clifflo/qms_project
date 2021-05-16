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

export const getDeltaDualLongHooksContext_1 =
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

    const wheatCrossInHookContextSet_1 =
      R.map(
        R.prop('wheatCrossInHookContext_1'),
        combinedCrossInHookSet);

    const cheeseCrossInHookContextSet_1 =
      R.map(
        R.prop('cheeseCrossInHookContext_1'),
        combinedCrossInHookSet);

    const deltaDualLongHooksContext_1 = {
      askingDayTrunkChinese,
      wheatHookName,
      cheeseHookName,
      deltaWheatHookContext:
        finalDeltaWheatHookContext,
      deltaCheeseHookContext:
        finalDeltaCheeseHookContext,
      wheatCrossInHookContextSet_1,
      cheeseCrossInHookContextSet_1,
      _type: 'Delta dual long hooks context 1'
    };

    return deltaDualLongHooksContext_1;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get delta dual long hooks context 1.');
  }


}
