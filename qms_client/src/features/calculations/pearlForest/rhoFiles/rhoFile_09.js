import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  checkNilWithNumber,
  decimalToBinary
} from './utilityHubShadowOfRho';
import {
  getRhoLongHookContextByName_1
} from './rhoFile_08';

const rhoBaseLongHookSeries =
  R.split(',', '純乾,姤,遯,否,觀,剝,晉,大有');

const rhoBaseLongHookGapBinaryMapFunction = (
  comparedLongHookName,
  rhoGenerationIndex) => {

  const longHookPureSkyIndex = 63;

  const rhoLongHookContext_1 =
    getRhoLongHookContextByName_1(
      comparedLongHookName);

  const comparedLongHookIndex =
    rhoLongHookContext_1.longHookIndex;

  checkNilWithNumber(
    comparedLongHookIndex,
    'Long hook index');

  const bitwiseXoredGapDecimal =
    longHookPureSkyIndex ^ comparedLongHookIndex;

  const rawRhoGapBinaryWhole =
    decimalToBinary(
      bitwiseXoredGapDecimal, 6);

  return {
    _type: 'Raw rho generation context.',
    rawRhoGapBinaryWhole,
    rhoGenerationIndex
  }
}

export const rawRhoGenerationContextList =
  RA.mapIndexed(
    rhoBaseLongHookGapBinaryMapFunction,
    rhoBaseLongHookSeries);
