import * as R from 'ramda';
import {
  getEpsilonFocusToFaceCorrelationContext
} from './epsilonFile_05';

const buildEpsilonDualLongHooksContext_4 =
  epsilonDualLongHooksContext_3 => {

  const epsilonFocusToFaceCorrelationContextSet =
    R.map(
      getEpsilonFocusToFaceCorrelationContext,
      epsilonDualLongHooksContext_3
      .epsilonFocusToFaceRelationContextSet);

  const epsilonDualLongHooksContext_4 = {
    ...epsilonDualLongHooksContext_3,
    epsilonFocusToFaceCorrelationContextSet,
    _type: 'Epsilon dual long hooks context 4'
  };

  return epsilonDualLongHooksContext_4;
}

export const getEpsilonDualLongHooksContext_4 =
  R.compose(
    buildEpsilonDualLongHooksContext_4,
    getEpsilonDualLongHooksContext_3);
