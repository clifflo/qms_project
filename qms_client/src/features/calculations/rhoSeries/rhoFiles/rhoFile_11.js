import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  hookTrainContextSet
} from './rhoMiniHub_02';

const semiFinalRhoLongHookContextMapFunction_3 =
  semiFinalRhoLongHookContext_3 => {

  return {
    ...semiFinalRhoLongHookContext_3,
    _type: 'Rho context 3'
  };
}

const getRhoLongHookContextSet_3 = () => {

  const rawRhoLongHookContextSet_3 = R.map(
    R.prop(
    'augmentedRhoGenerationContextSeries'),
    hookTrainContextSet);

  const semiFinalRhoLongHookContextSet_3 =
    R.flatten(
      rawRhoLongHookContextSet_3);

  const grandFinalRhoLongHookContextSet_3 =
    R.map(
      semiFinalRhoLongHookContextMapFunction_3,
      semiFinalRhoLongHookContextSet_3);

  return grandFinalRhoLongHookContextSet_3;
}

export const rhoLongHookContextSet_3 =
  getRhoLongHookContextSet_3();
