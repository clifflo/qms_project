import * as R from 'ramda';
import {
  getEpsilonFocusFaceReactionContext,
  getEpsilonFocusFaceReactionContextSet
} from './epsilonMiniHub_01'l

const buildEpsilonDualLongHooksContext_3 =
  epsilonDualLongHooksContext_2 => {

  const {
    epsilonEnvelop_1,
    epsilonEnvelop_2
  } = epsilonDualLongHooksContext_2;

  const epsilonEnvelopValues_1 =
    R.values(epsilonEnvelop_1);

  const epsilonEnvelopValues_2 =
    R.values(epsilonEnvelop_2);

  const loadedGetEpsilonFocusFaceReactionContextSet =
    R.curry
    (getEpsilonFocusFaceReactionContextSet)
    (epsilonEnvelop_2);

  const epsilonEnvelop_3 =
    R.map(
      loadedGetEpsilonFocusFaceReactionContextSet,

    )



}
