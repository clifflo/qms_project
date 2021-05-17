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

const crossInHookContextMapFunction_4 =
  (deltaPilotPaladinIndex,
  crossInHookContext_3) => {

  const { crossInHookDownwardIndex }
    = crossInHookContext_3;

  checkNilWithNumber(
    crossInHookDownwardIndex,
    'Long hook cross downward index');

  const deltaPaladinIndexForCross =
    crossInHookDownwardIndex
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

  const crossInHookContext_4 = {
    ...crossInHookContext_3,
    deltaPaladinChineseForCross,
    deltaPaladinEnglishForCross
  }

  return crossInHookContext_4;
}

export const
  deltaLongHookContextMapFunction_5 =
  (askingDayTrunkChinese,
  deltaLongHookContext_4) => {

  checkNilWithString(
    askingDayTrunkChinese,
    'Asking day trunk Chinese');

  const deltaPilotPaladinIndex =
    getDeltaPilotPaladinIndexByAskingDayTrunkChinese(
      askingDayTrunkChinese);

  const loadedCrossInHookContextMapFunction_4 =
    R.curry(crossInHookContextMapFunction_4)
    (deltaPilotPaladinIndex);

  const { crossInHookContextSet_3 } =
    deltaLongHookContext_4;

  const crossInHookContextSet_4 =
    R.map(
      loadedCrossInHookContextMapFunction_4,
      crossInHookContextSet_3);

  const rawDeltaLongHookContext_5 =
    R.dissoc(
      'crossInHookContextSet_3',
      deltaLongHookContext_4);

  const finalDeltaDatedLongHookContext_5 = {
    ...rawDeltaLongHookContext_5,
    crossInHookContextSet_4,
    askingDayTrunkChinese,
    _type: 'Delta long hook context 5'
  };

  return finalDeltaDatedLongHookContext_5;
}
