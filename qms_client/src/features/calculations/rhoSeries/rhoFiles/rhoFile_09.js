import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  checkNilWithNumber,
  decimalToBinary
} from './utilityHubShadowOfRhoFiles';
import {
  getRhoContextByLongHookName_1
} from './rhoFile_08';

const rhoBaseLongHookSeries =
  R.split(',', '姤,遯,否,觀,剝,晉,大有');

const rhoBaseLongHookGapBinaryDigitsMapFunction
  = (comparedLongHookName, rhoGeneration) => {

  const longHookPureSkyIndex = 63;

  const rhoContext_1 =
    getRhoContextByLongHookName_1(
      comparedLongHookName);

  const comparedLongHookIndex =
    rhoContext_1.longHookIndex;

  checkNilWithNumber(
    comparedLongHookIndex,
    'Long hook index');

  const bitwiseXoredGapDecimal =
    longHookPureSkyIndex ^ comparedLongHookIndex;

  const rawGapBinaryDigits =
    decimalToBinary(
      bitwiseXoredGapDecimal, 6);

  return {
    rawGapBinaryDigits,
    rhoGeneration
  }
}

export const rhoBaseLongHookGapBinaryDigitsList =
  RA.mapIndexed(
    rhoBaseLongHookGapBinaryDigitsMapFunction,
    rhoBaseLongHookSeries);
