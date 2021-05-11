import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  hookTrainContextSet
} from './rhoMiniHub_02';

const semiFinalRhoContextMapFunction_3 =
  semiFinalRhoContext_3 => {

  return {
    ...semiFinalRhoContext_3,
    _type: 'Rho context 3'
  };
}

const getRhoContextSet_3 = () => {

  const rawRhoContextSet_3 = R.map(
    R.prop(
    'augmentedRhoGenerationContextSeries'),
    hookTrainContextSet);

  const semiFinalRhoContextSet_3 =
    R.flatten(
      rawRhoContextSet_3);

  const grandFinalRhoContextSet_3 =
    R.map(
      semiFinalRhoContextMapFunction_3,
      semiFinalRhoContextSet_3);

  return grandFinalRhoContextSet_3;
}

export const rhoContextSet_3 =
  getRhoContextSet_3();
