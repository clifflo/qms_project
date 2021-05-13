import * as R from 'ramda';
import {
  checkNilWithString,
  checkNilWithArray,
  getItemByStringFromList
} from './utilityHubCloneOfDelta';
import {
  deltaFocusContextSet
} from './deltaFile_01';
import {
  deltaLongHookContextSet_1
} from './deltaFile_02';

export const getDeltaLongHookContext_1 =
  longHookName => {

  checkNilWithString(
    longHookName,
    'Long hook name');

  const deltaLongHookContext_1 =
    getItemByStringFromList(
      deltaLongHookContextSet_1,
      longHookName,
      'longHookName');

  return deltaLongHookContext_1;
}

const deltaLongHookContextMapFunction_2 =
  deltaLongHookContext_1 => {

  const completeDeltaFocusEnglishSet =
    R.map(
      R.prop('deltaFocusEnglishName'),
      deltaFocusContextSet);

  checkNilWithArray(
    completeDeltaFocusEnglishSet,
    'Complete delta focus english set');

  const uniqueDeltaFocusEnglishSet =
    R.compose(
      R.uniq,
      R.map(R.prop('deltaFocusEnglishName')))
    (deltaLongHookContext_1
    .crossInHookContextSet_2);

  checkNilWithArray(
    uniqueDeltaFocusEnglishSet,
    'Unique delta focus english set');

  const hiddenDeltaFocusEnglishSet =
    R.difference(
      completeDeltaFocusEnglishSet,
      uniqueDeltaFocusEnglishSet);

  checkNilWithArray(
    hiddenDeltaFocusEnglishSet,
    'Hidden delta focus english set');

  const hasHiddenDeltaFocus =
    !R.isEmpty(hiddenDeltaFocusEnglishSet);

  const rhoPureHookContext =
    getDeltaLongHookContext_1(
      deltaLongHookContext_1
      .rhoPureHookName);

  const rhoPureHookCrossContextSet =
    rhoPureHookContext
    .crossInHookContextSet_2;

  return {
    ...deltaLongHookContext_1,
    hiddenDeltaFocusEnglishSet,
    rhoPureHookCrossContextSet,
    hasHiddenDeltaFocus,
    _type: 'Delta long hook context 2'
  };
}

export const deltaLongHookContextSet_2 =
  R.map(
    deltaLongHookContextMapFunction_2,
    deltaLongHookContextSet_1);
