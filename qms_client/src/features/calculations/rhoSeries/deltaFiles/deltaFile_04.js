import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  deltaLongHookContextSet_2
} from './deltaMiniHub_01';
import {
  checkNilWithTypedObject,
  checkNilWithArray,
  checkNilWithNumber
} from './utilityHubCloneOfDelta';

const longHookCrossContextMapFunction_3 =
  (payloadForLongHookCrossContextMapFunction_3,
  longHookCrossDownwardIndex) => {

  checkNilWithNumber(
    longHookCrossDownwardIndex,
    'Long hook cross downward index');

  const {
    longHookCrossContextSet_2,
    hiddenDeltaFocusEnglishSet,
    rhoPureHookCrossContextSet
  } =
  payloadForLongHookCrossContextMapFunction_3;

  const longHookCrossContext_2 =
    longHookCrossContextSet_2[
      longHookCrossDownwardIndex];

  checkNilWithTypedObject(
    longHookCrossContext_2,
    'Long hook cross context 2.');

  const hiddenCrossContext =
    rhoPureHookCrossContextSet[
      longHookCrossDownwardIndex];

  const isCoveredLongHookCross =
    R.includes(
      hiddenCrossContext
      .deltaFocusEnglishName,
      hiddenDeltaFocusEnglishSet);

  if(isCoveredLongHookCross){
    return {
      ...longHookCrossContext_2,
      isCoveredLongHookCross,
      hiddenCrossContext,
      _type: 'Long hook cross context 3.'
    }
  }
  else{
    return {
      ...longHookCrossContext_2,
      isCoveredLongHookCross,
      _type: 'Long hook cross context 3.'
    }
  }
}

const deltaLongHookContextMapFunction_3 =
  deltaLongHookContext_2 => {

  const payloadForLongHookCrossContextMapFunction_3
  = R.pick([
    'longHookCrossContextSet_2',
    'hiddenDeltaFocusEnglishSet',
    'rhoPureHookCrossContextSet'],
    deltaLongHookContext_2);

  const loadedLongHookCrossContextMapFunction_3
    = R.curry(longHookCrossContextMapFunction_3)
    (payloadForLongHookCrossContextMapFunction_3);

  const { longHookCrossContextSet_2 } =
    deltaLongHookContext_2;

  checkNilWithArray(
    longHookCrossContextSet_2,
    'Long hook cross context set 2');

  const longHookCrossContextSet_3 =
    R.map(
      loadedLongHookCrossContextMapFunction_3,
      R.range(0, 6));

  const rawDeltaLongHookContext_3 =
    R.dissoc(
      'longHookCrossContextSet_2',
      deltaLongHookContext_2);

  const finalDeltaLongHookContext_3 = {
    ...rawDeltaLongHookContext_3,
    longHookCrossContextSet_3,
    _type: 'Delta Long hook context 3'
  };

  return finalDeltaLongHookContext_3;
}

export const deltaLongHookContextSet_3 =
  R.map(
    deltaLongHookContextMapFunction_3,
    deltaLongHookContextSet_2);
