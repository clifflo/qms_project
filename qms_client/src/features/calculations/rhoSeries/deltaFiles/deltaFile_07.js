import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  deltaLongHookContextSet_4,
  getDeltaPilotPaladinIndexByAskingDayTrunkChinese,
  getDeltaPaladinContextByIndex
} from './deltaMiniHub_02';
import {
  checkNilWithNumber,
  checkNilWithString
} from './utilityHubCloneOfDelta';

const longHookCrossContextMapFunction_4 =
  (deltaPilotPaladinIndex,
  longHookCrossContext_3) => {

  const { longHookCrossDownwardIndex }
    = longHookCrossContext_3;

  checkNilWithNumber(
    longHookCrossDownwardIndex,
    'Long hook cross downward index');

  const deltaPaladinIndexForCross =
    longHookCrossDownwardIndex
    + deltaPilotPaladinIndex;

  const deltaPaladinContextForCross =
    getDeltaPaladinContextByIndex(
      deltaPaladinIndexForCross);

  const deltaPaladinChineseForCross =
    deltaPaladinContextForCross
    .deltaPaladinChinese;

  const deltaPaladinEnglishForCross =
    deltaPaladinContextForCross
    .deltaPaladinEnglish;

  const longHookCrossContext_4 = {
    ...longHookCrossContext_3,
    deltaPaladinChineseForCross,
    deltaPaladinEnglishForCross
  }
}

export const deltaDatedLongHookContextMapFunction =
  (askingDayTrunkChinese,
  deltaLongHookContext_4) => {

  checkNilWithString(
    askingDayTrunkChinese,
    'Asking day trunk chinese');

  const deltaPilotPaladinIndex =
    getDeltaPilotPaladinIndexByAskingDayTrunkChinese(
      askingDayTrunkChinese);

  const loadedLongHookCrossContextMapFunction_4 =
    R.curry(longHookCrossContextMapFunction_4)
    (deltaPilotPaladinIndex);

  const { longHookCrossContextSet_3 } =
    deltaLongHookContext_4;

  const longHookCrossContextSet_4 =
    R.map(
      loadedLongHookCrossContextMapFunction_4,
      longHookCrossContextSet_3);

  const rawDeltaDatedLongHookContext =
    R.dissoc(
      'longHookCrossContextSet_3');

  const finalDeltaDatedLongHookContext = {
    ...rawDeltaDatedLongHookContext,
    longHookCrossContextSet_4,
    askingDayTrunkChinese,
    _type: 'Delta dated long hook context.'
  };

  return finalDeltaDatedLongHookContext;
}
