import * as R from 'ramda';
import {
  getEpsilonFocusFaceReactionContextSet,
  getEpsilonDualLongHooksContext_2
} from './epsilonMiniHub_01';
import {
  checkNilWithArray
} from './utilityHubCloneOfEpsilon';

const buildEpsilonDualLongHooksContext_3 =
  epsilonDualLongHooksContext_2 => {

  const {
    epsilonFaceEnvelop,
    epsilonFocusEnvelop
  } = epsilonDualLongHooksContext_2;

  const epsilonFaceCrossContextSet =
    R.compose(
      R.values,
      R.dissoc('_type'))
    (epsilonFaceEnvelop);

  const epsilonFocusCrossContextSetList =
    R.compose(
      R.values,
      R.dissoc('_type'))
    (epsilonFocusEnvelop);

  console.log(epsilonFaceCrossContextSet);
  console.log(epsilonFocusCrossContextSetList)


  checkNilWithArray(
    epsilonFaceCrossContextSet,
    'Epsilon face cross context set');

  checkNilWithArray(
    epsilonFocusCrossContextSetList,
    'Epsilon focus cross context set list');

  const loadedGetEpsilonFocusFaceReactionContextSet =
    R.curry
    (getEpsilonFocusFaceReactionContextSet)
    (epsilonFocusCrossContextSetList);

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
