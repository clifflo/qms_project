import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  shortHookContextSet
} from './rhoMiniHub_01';
import {
  getRhoContextByLongHookName_1
} from './rhoFile_08';
import {
  rawRhoGenerationContextList
} from './rhoFile_09';
import {
  binaryToDecimal
} from './utilityHubShadowOfRhoFiles';

const buildAugmentedRhoGenerationContext = (
  genericShortHookOriginal,
  rawRhoGenerationContext)  => {

  const {
    rawRhoGapBinaryWhole,
    rhoGenerationIndex
  } = rawRhoGenerationContext;

  const rhoLongHookGapDecimal =
    binaryToDecimal(
      rawRhoGapBinaryWhole);

  const rhoPureHookName =
    '純' + genericShortHookOriginal;

  const rhoPureHookContext_1 =
    getRhoContextByLongHookName_1(
      rhoPureHookName);

  const rhoPureHookIndex =
    rhoPureHookContext_1
    .longHookIndex;

  const rhoImpureHookIndex =
    rhoLongHookGapDecimal ^
    rhoPureHookIndex;

  const rhoImpureHookContext =
    getRhoContextByLongHookName_1(
      rhoImpureHookIndex);

  const rhoImpureHookName =
    rhoImpureHookContext
    .longHookName;

  return {
    _type: 'Augmented rho generation context',
    rhoPureHookName,
    rhoImpureHookName,
    rhoGenerationIndex,
    rawRhoGapBinaryWhole
  };
}

const buildHookTrainContext =
  genericShortHookOriginal => {

  const augmentedRhoGenerationContextSeries =
    R.map(
      R.curry(buildAugmentedRhoGenerationContext)
      (genericShortHookOriginal),
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
