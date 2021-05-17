import * as R from 'ramda';
import {
  getEpsilonFocusFaceReactionContextSet
} from './epsilonMiniHub_01';

const buildEpsilonDualLongHooksContext_3 =
  epsilonDualLongHooksContext_2 => {

  const {
    epsilonFaceEnvelop,
    epsilonFocusEnvelop
  } = epsilonDualLongHooksContext_2;

  const epsilonFaceCrossContextSet =
    R.values(epsilonFaceEnvelop);

  const epsilonFocusCrossContextSet =
    R.values(epsilonFocusEnvelop);

  const loadedGetEpsilonFocusFaceReactionContextSet =
    R.curry
    (getEpsilonFocusFaceReactionContextSet)
    (epsilonFocusCrossContextSet);

  const epsilonFocusToFaceEnvelop =
    R.map(
      loadedGetEpsilonFocusFaceReactionContextSet,
      epsilonFaceCrossContextSet);

  return {
    ...epsilonDualLongHooksContext_2,
    epsilonFocusToFaceEnvelop,
    _type: 'Epsilon focus to face envelop'
  };
}

export const getEpsilonDualLongHooksContext_3 = 
  R.compose(
    buildEpsilonDualLongHooksContext_3,
    getEpsilonDualLongHooksContext_2);
