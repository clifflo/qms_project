import * as R from 'ramda';
import {
  filterItemByStringFromList,
  checkNilWithTypedObject,
  checkNilWithString,
  checkNilWithNumber,
  throwFunctionalError
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
      _type: 'EpsilonFaceCrossContext',
      epsilonFaceType: 'rho-jack'
    };

    const rawEpsilonQueenCrossContext =
      wheatCrossInHookContextSet_3
      [wheatRhoQueenAtDownwardIndex];

    checkNilWithTypedObject(
      rawEpsilonQueenCrossContext,
      'rawEpsilonQueenCrossContext',
      'WheatCrossInHookContext_3');

    const finalEpsilonQueenCrossContext = {
      ...rawEpsilonQueenCrossContext,
      _type: 'EpsilonFaceCrossContext',
      epsilonFaceType: 'rho-queen'
    };

    const rawEpsilonKingCrossContext =
      wheatCrossInHookContextSet_3
      [wheatRhoKingAtDownwardIndex];

    checkNilWithTypedObject(
      rawEpsilonKingCrossContext,
      'rawEpsilonKingCrossContext',
      'WheatCrossInHookContext_3');

    const finalEpsilonKingCrossContext = {
      ...rawEpsilonKingCrossContext,
      _type: 'EpsilonFaceCrossContext',
      epsilonFaceType: 'rho-king'
    };

    const epsilonFaceEnvelop = {
      _type: 'EpsilonFaceEnvelop',
      epsilonJackCrossContext:
        finalEpsilonJackCrossContext,
      epsilonQueenCrossContext:
        finalEpsilonQueenCrossContext,
      epsilonKingCrossContext:
        finalEpsilonKingCrossContext,
    }

    const epsilonDualLongHooksContext_1 = {
      ...deltaDualLongHooksContext_3,
      epsilonFaceEnvelop,
      _type: 'EpsilonDualLongHooksContext_1'
    }

    return epsilonDualLongHooksContext_1;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'buildEpsilonDualLongHooksContext_1');
  }

}

export const getEpsilonDualLongHooksContext_1 =
  R.compose(
    buildEpsilonDualLongHooksContext_1,
    getDeltaDualLongHooksContext_3);
