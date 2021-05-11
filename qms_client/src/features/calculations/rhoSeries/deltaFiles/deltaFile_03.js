import * as R from 'ramda';
import {
  checkNilWithString,
  getItemByStringFromList
} from './utilityHubCloneForDelta';
import {
  deltaFocusContextSet
} from './deltaFile_01';
import {
  deltaLongHookContextSet_1
} from './deltaFile_02';

export const getDeltaLongHookContextByName_1 =
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

  const uniqueDeltaFocusEnglishSet =
    R.compose(
      R.uniq,
      R.map(R.prop('deltaFocusEnglishName')),
      deltaLongHookContext_1
      .longHookCrossContextSet_2);

  const hiddenDeltaFocusEnglishSet =
    R.difference(
      uniqueDeltaFocusEnglishSet,
      completeDeltaFocusEnglishSet);

  const hasHiddenDeltaFocus =
    !R.isEmpty(hiddenDeltaFocusEnglishSet);

  const rhoPureHookContext =
    getDeltaLongHookContextByName_1(
      deltaLongHookContext_1
      .rhoPureHookName);

  const rhoPureHookCrossContextSet =
    rhoPureHookContext
    .longHookCrossContextSet_2;

  return {
    ...deltaLongHookContext_1,
    hiddenDeltaFocusEnglishSet,
    rhoPureHookCrossContextSet
  };
}

export const deltaLongHookContextSet_2 =
  R.map(
    deltaLongHookContextMapFunction_2,
    deltaLongHookContextSet_1);
