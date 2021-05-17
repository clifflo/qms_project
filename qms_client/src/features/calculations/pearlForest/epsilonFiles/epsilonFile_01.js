import * as R from 'ramda';
import {
  filterItemByStringFromList,
  checkNilWithTypedObject,
  checkNilWithString,
  checkNilWithNumber
} from './utilityHubCloneOfEpsilon';
import {
  isValidDeltaFocusEnglish,
  getDeltaDualLongHooksContext_3
} from './deltaHubCloneOfEpsilon';

const buildEpsilonDualLongHooksContext_1 =
  deltaDualLongHooksContext_3 => {

  try{

    const deltaWheatHookContext =
      deltaDualLongHooksContext_3
      .deltaWheatHookContext;

    const wheatCrossInHookContextSet_3 =
      deltaDualLongHooksContext_3
      .wheatCrossInHookContextSet_3;

    const wheatRhoJackAtDownwardIndex =
      deltaWheatHookContext
      .rhoJackAtDownwardIndex;

    checkNilWithNumber(
      wheatRhoJackAtDownwardIndex,
      'Wheat rho jack at downward index');

    const wheatRhoQueenAtDownwardIndex =
      deltaWheatHookContext
      .rhoQueenAtDownwardIndex;

    checkNilWithNumber(
      wheatRhoQueenAtDownwardIndex,
      'Wheat rho queen at downward index');

    const wheatRhoKingAtDownwardIndex =
      deltaWheatHookContext
      .rhoKingAtDownwardIndex;

    checkNilWithNumber(
      wheatRhoKingAtDownwardIndex,
      'Wheat rho king at downward index');

    const rawEpsilonJackCrossContext =
      wheatCrossInHookContextSet_3
      [wheatRhoJackAtDownwardIndex];

    checkNilWithTypedObject(
      rawEpsilonJackCrossContext,
      'Raw epsilon jack cross context',
      'Wheat cross in hook context 3');

    const finalEpsilonJackCrossContext = {
      ...rawEpsilonJackCrossContext,
      _type: 'Epsilon face cross context',
      epsilonFaceType: 'Epsilon jack'
    };

    const rawEpsilonQueenCrossContext =
      wheatCrossInHookContextSet_3
      [wheatRhoQueenAtDownwardIndex];

    checkNilWithTypedObject(
      rawEpsilonQueenCrossContext,
      'Raw epsilon queen cross context',
      'Wheat cross in hook context 3');

    const finalEpsilonQueenCrossContext = {
      ...rawEpsilonQueenCrossContext,
      _type: 'Epsilon face cross context',
      epsilonFaceType: 'Epsilon queen'
    };

    const rawEpsilonKingCrossContext =
      wheatCrossInHookContextSet_3
      [wheatRhoKingAtDownwardIndex];

    checkNilWithTypedObject(
      rawEpsilonKingCrossContext,
      'Raw epsilon king cross context',
      'Wheat cross in hook context 3');

    const finalEpsilonKingCrossContext = {
      ...rawEpsilonKingCrossContext,
      _type: 'Epsilon face cross context',
      epsilonFaceType: 'Epsilon king'
    };

    // Please be noted that I only consider
    // shown wheat crosses. Hidden wheat cross
    // are not considered.
    const epsilonFaceEnvelop = {
      _type: 'Epsilon face envelop',
      epsilonJackCrossContext:
        finalEpsilonJackCrossContext,
      epsilonQueenCrossContext:
        finalEpsilonQueenCrossContext,
      epsilonKingCrossContext:
        finalEpsilonKingCrossContext,
    }

    const epsilonLongHookContext_1 = {
      ...deltaDualLongHooksContext_3,
      epsilonFaceEnvelop,
      _type: 'Epsilon dual long hooks context 1'
    }

    return epsilonLongHookContext_1;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get epsilon long hook context 1.');
  }

}

export const getEpsilonDualLongHooksContext_1 =
  R.compose(
    buildEpsilonDualLongHooksContext_1,
    getDeltaDualLongHooksContext_3);
