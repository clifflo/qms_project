import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  checkNilWithString
} from './utilityHubCloneOfDelta';
import {
  deltaLongHookContextSet_4
} from './deltaMiniHub_02';
import {
  deltaDatedLongHookContextMapFunction
} from './deltaFile_07';

export const getDeltaDatedLongHookContextSet =
  askingDayTrunkChinese => {

  checkNilWithString(
    askingDayTrunkChinese,
    'Asking day trunk chinese');

  const loadedDeltaDatedLongHookContextMapFunction =
    R.curry(deltaDatedLongHookContextMapFunction)
    (askingDayTrunkChinese);

  const deltaDatedLongHookContextSet =
    R.map(
      loadedDeltaDatedLongHookContextMapFunction,
      deltaLongHookContextSet_4);

  return deltaDatedLongHookContextSet;
}
