import * as R from 'ramda';
import {
  filterItemByStringFromList,
  checkNilWithTypedObject,
  checkNilWithString,
  checkNilWithNumber
} from './_utilityHubByEpsilon';
import {
  isValidDeltaFocusEnglish,
  getDeltaDualLongHooksContext_3
} from './_deltaHubByEpsilon';

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
      'wheatRhoJackAtDownwardIndex');

    const wheatRhoQueenAtDownwardIndex =
      deltaWheatHookContext
      .rhoQueenAtDownwardIndex;

    checkNilWithNumber(
      wheatRhoQueenAtDownwardIndex,
      'wheatRhoQueenAtDownwardIndex');

    const wheatRhoKingAtDownwardIndex =
      deltaWheatHookContext
      .rhoKingAtDownwardIndex;

    checkNilWithNumber(
      wheatRhoKingAtDownwardIndex,
      'wheatRhoKingAtDownwardIndex');

    const rawEpsilonJackCrossContext =
      wheatCrossInHookContextSet_3
      [wheatRhoJackAtDownwardIndex];

    checkNilWithTypedObject(
      rawEpsilonJackCrossContext,
      'rawEpsilonJackCrossContext',
      'WheatCrossInHookContext_3');

    const finalEpsilonJackCrossContext = {
      ...rawEpsilonJackCrossContext,
      _type: 'EpsilonJackCrossContext',
      epsilonFaceType: 'Rho jack'
    };

    const rawEpsilonQueenCrossContext =
      wheatCrossInHookContextSet_3
      [wheatRhoQueenAtDownwardIndex];

    checkNilWithTypedObject(
      rawEpsilonQueenCrossContext,
      'RawEpsilonQueenCrossContext',
      'WheatCrossInHookContextSet_3');

    const finalEpsilonQueenCrossContext = {
      ...rawEpsilonQueenCrossContext,
      _type: 'EpsilonQueenCrossContext',
      epsilonFaceType: 'rho-queen'
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
      epsilonFaceType: 'Rho king'
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
