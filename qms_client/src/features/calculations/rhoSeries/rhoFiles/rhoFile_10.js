import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  rawRhoGenerationContextList
} from './rhoFile_09';

const buildAugmentedRhoGenerationContext = (
  genericShortHookOriginal,
  rawRhoGenerationContext)  => {

  const {
    rawGapBinaryDigits,
    rawRhoGenerationIndex
  } = rawRhoGenerationContext;

  const rhoLongHookGapDecimal =
    binaryToDecimal(
      rawRhoLongHookGapBinaryDigits);

  const rhoPureHookName =
    '純' + genericShortHookOriginal;

  const rhoPureHookContext_1 =
    getRhoContextByLongHookName_1(
      rhoLongHookSeriesHeadName);

  const rhoPureHookIndex =
    rhoLongHookSeriesHeadContext_1
    .longHookIndex;

  const rhoImpureHookIndex =
    rhoLongHookGapDecimal ^
    rhoPureHookIndex;
rhoLongHookSeriesHeadName
  const rhoImpureHookContext =
    getRhoContextByLongHookName_1(
      rhoLongHookSeriesStaffIndex);

  const rhoImpureHookName =
    rhoLongHookSeriesStaffContext
    .longHookName;

  return {
    _type: 'Augmented rho generation context',
    rhoPureHookName,
    rhoImpureHookName,
    rhoGenerationIndex,
    rawGapBinaryDigits
  };
}

const buildHookTrainContext =
  genericShortHookOriginal => {

  const augmentedRhoGenerationContextSeries =
    R.map(
      buildAugmentedRhoGenerationContext,
      rawRhoGenerationContextList);

  return {
    _type: 'Hook train context',
    hookTrainName: genericShortHookOriginal,
    augmentedRhoGenerationContextSeries
  }
}

const getHookTrainContextSet = () => {

  const genericShortHookOriginalList =
    R.map(
      R.prop('genericShortHookOriginal'),
      shortHookContextSet);

  return R.map(buildHookTrainContext,
    genericShortHookOriginalList);
}

export const hookTrainContextSet =
  getHookTrainContextSet();
