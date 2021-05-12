import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

export const getDeltaDatedLongHookContextSet =
  askingDayTrunkChinese => {

  checkNilWithString(
    askingDayTrunkChinese,
    'Asking day trunk chinese');

  const
  loadedDeltaDatedLongHookContextMapFunction_1 =
  R.curry(deltaDatedLongHookContextMapFunction_1)
  (askingDayTrunkChinese);

  const deltaDatedLongHookContextSet =
    R.map(
      loadedDeltaDatedLongHookContextMapFunction_1,
      deltaLongHookContextSet_4)

  return deltaDatedLongHookContextSet;
}
