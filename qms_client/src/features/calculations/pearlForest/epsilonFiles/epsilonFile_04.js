import * as R from 'ramda';
import {
  getEpsilonFocusToFaceRelationContext,
  getEpsilonDualLongHooksContext_2
} from './epsilonMiniHub_01';
import {
  checkNilWithArray,
  checkNilWithTypedObject
} from './_utilityHubByEpsilon';

export const getEpsilonFocusToFaceRelationContextSubset =
  (epsilonFocusCrossContextSetList,
  epsilonFaceCrossContext) => {

  try{
    checkNilWithTypedObject(
      epsilonFaceCrossContext,
      'Epsilon face cross context');

    const loadedGetEpsilonFocusToFaceContext =
      R.curry
      (getEpsilonFocusToFaceRelationContext)
      (epsilonFaceCrossContext);

    const epsilonFocusFaceReactionContextSubset =
      R.map(
        loadedGetEpsilonFocusToFaceContext,
        epsilonFocusCrossContextSetList);

    checkNilWithArray(
      epsilonFocusFaceReactionContextSubset,
      'Epsilon focus face reaction '
      + 'context subset');

    return epsilonFocusFaceReactionContextSubset;

  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get epsilon focus to face '
      + 'context set.');
  }
}

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

  checkNilWithArray(
    epsilonFaceCrossContextSet,
    'Epsilon face cross context set');

  checkNilWithArray(
    epsilonFocusCrossContextSetList,
    'Epsilon focus cross context set list');

  const loadedGetEpsilonFocusToFaceContextSubset =
    R.curry
    (getEpsilonFocusToFaceRelationContextSubset)
    (epsilonFocusCrossContextSetList);

  const epsilonFocusToFaceRelationContextSubsetList =
    R.map(
      loadedGetEpsilonFocusToFaceContextSubset,
      epsilonFaceCrossContextSet);

  const epsilonFocusToFaceRelationContextSet =
    R.compose(
      R.reject(R.isNil),
      R.flatten)
    (epsilonFocusToFaceRelationContextSubsetList);

  const epsilonDualLongHooksContext_3 = {
    ...epsilonDualLongHooksContext_2,
    epsilonFocusToFaceRelationContextSet,
    _type: 'Epsilon dual long hooks context 3'
  };

  return epsilonDualLongHooksContext_3;
}

export const getEpsilonDualLongHooksContext_3 =
  R.compose(
    buildEpsilonDualLongHooksContext_3,
    getEpsilonDualLongHooksContext_2);
