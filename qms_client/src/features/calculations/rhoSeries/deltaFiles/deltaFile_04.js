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

const crossInHookContextMapFunction_3 =
  (payloadForCrossInHookContextMapFunction_3,
  crossInHookDownwardIndex) => {

  checkNilWithNumber(
    crossInHookDownwardIndex,
    'Long hook cross downward index');

  const {
    crossInHookContextSet_2,
    hiddenDeltaFocusEnglishSet,
    rhoPureHookCrossContextSet
  } =
  payloadForCrossInHookContextMapFunction_3;

  const crossInHookContext_2 =
    crossInHookContextSet_2[
      crossInHookDownwardIndex];

  checkNilWithTypedObject(
    crossInHookContext_2,
    'Long hook cross context 2.');

  const hiddenCrossContext =
    rhoPureHookCrossContextSet[
      crossInHookDownwardIndex];

  const isCoveredCrossInHook =
    R.includes(
      hiddenCrossContext
      .deltaFocusEnglishName,
      hiddenDeltaFocusEnglishSet);

  if(isCoveredCrossInHook){
    return {
      ...crossInHookContext_2,
      isCoveredCrossInHook,
      hiddenCrossContext,
      _type: 'Long hook cross context 3.'
    }
  }
  else{
    return {
      ...crossInHookContext_2,
      isCoveredCrossInHook,
      _type: 'Long hook cross context 3.'
    }
  }
}

const deltaLongHookContextMapFunction_3 =
  deltaLongHookContext_2 => {

  const payloadForCrossInHookContextMapFunction_3
  = R.pick([
    'crossInHookContextSet_2',
    'hiddenDeltaFocusEnglishSet',
    'rhoPureHookCrossContextSet'],
    deltaLongHookContext_2);

  const loadedCrossInHookContextMapFunction_3
    = R.curry(crossInHookContextMapFunction_3)
    (payloadForCrossInHookContextMapFunction_3);

  const { crossInHookContextSet_2 } =
    deltaLongHookContext_2;

  checkNilWithArray(
    crossInHookContextSet_2,
    'Long hook cross context set 2');

  const crossInHookContextSet_3 =
    R.map(
      loadedCrossInHookContextMapFunction_3,
      R.range(0, 6));

  const rawDeltaLongHookContext_3 =
    R.dissoc(
      'crossInHookContextSet_2',
      deltaLongHookContext_2);

  const finalDeltaLongHookContext_3 = {
    ...rawDeltaLongHookContext_3,
    crossInHookContextSet_3,
    _type: 'Delta Long hook context 3'
  };

  return finalDeltaLongHookContext_3;
}

export const deltaLongHookContextSet_3 =
  R.map(
    deltaLongHookContextMapFunction_3,
    deltaLongHookContextSet_2);
