import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  shortHookContextSet
} from './rhoMiniHub_01';
import {
  getRhoLongHookContextByLongHookName_1,
  getRhoLongHookContextByLongHookIndex_1
} from './rhoFile_08';
import {
  rawRhoGenerationContextList
} from './rhoFile_09';
import {
  binaryToDecimal
} from './utilityHubShadowOfRhoFiles';

const buildAugmentedRhoGenerationContext = (
  genericShortHookSimpleOriginal,
  rawRhoGenerationContext)  => {

  const {
    rawRhoGapBinaryWhole,
    rhoGenerationIndex
  } = rawRhoGenerationContext;

  const rhoLongHookGapDecimal =
    binaryToDecimal(
      rawRhoGapBinaryWhole);

  const rhoPureHookName =
    '純' + genericShortHookSimpleOriginal;

  const rhoPureHookContext_1 =
    getRhoLongHookContextByLongHookName_1(
      rhoPureHookName);

  const rhoPureHookIndex =
    rhoPureHookContext_1
    .longHookIndex;

  const rhoImpureHookIndex =
    rhoLongHookGapDecimal ^
    rhoPureHookIndex;

  const rhoImpureHookContext =
    getRhoLongHookContextByLongHookIndex_1(
      rhoImpureHookIndex);

  const rhoImpureHookName =
    rhoImpureHookContext
    .longHookName;

  const rhoShortHookComplexPalace =
    '午' + genericShortHookSimpleOriginal + '卦宮'

  const rhoShortHookSimplePalace =
    genericShortHookSimpleOriginal

  return {
    _type: 'Augmented rho generation context',
    rhoPureHookName,
    rhoImpureHookName,
    rhoGenerationIndex,
    rawRhoGapBinaryWhole,
    rhoShortHookSimplePalace,
    rhoShortHookComplexPalace
  };
}

const buildHookTrainContext =
  genericShortHookSimpleOriginal => {

  const augmentedRhoGenerationContextSeries =
    R.map(
      R.curry(buildAugmentedRhoGenerationContext)
      (genericShortHookSimpleOriginal),
      rawRhoGenerationContextList);

  return {
    _type: 'Hook train context',
    hookTrainName: genericShortHookSimpleOriginal,
    augmentedRhoGenerationContextSeries
  }
}

const getHookTrainContextSet = () => {

  const genericShortHookSimpleOriginalList =
    R.map(
      R.prop('genericShortHookSimpleOriginal'),
      shortHookContextSet);

  return R.map(buildHookTrainContext,
    genericShortHookSimpleOriginalList);
}

export const hookTrainContextSet =
  getHookTrainContextSet();
