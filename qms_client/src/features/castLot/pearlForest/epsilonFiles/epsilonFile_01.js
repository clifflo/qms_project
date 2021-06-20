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

    const wheatCrossInHookContextSetFinal =
      deltaDualLongHooksContext_3
      .wheatCrossInHookContextSetFinal;

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
      wheatCrossInHookContextSetFinal
      [wheatRhoJackAtDownwardIndex];

    checkNilWithTypedObject(
      rawEpsilonJackCrossContext,
      'rawEpsilonJackCrossContext',
      'WheatCrossInHookContextFinal');

    const finalEpsilonJackCrossContext = {
      ...rawEpsilonJackCrossContext,
      _type: 'EpsilonFaceCrossContext',
      epsilonFaceType: 'RhoJack'
    };

    const rawEpsilonQueenCrossContext =
      wheatCrossInHookContextSetFinal
      [wheatRhoQueenAtDownwardIndex];

    checkNilWithTypedObject(
      rawEpsilonQueenCrossContext,
      'rawEpsilonQueenCrossContext',
      'WheatCrossInHookContextFinal');

    const finalEpsilonQueenCrossContext = {
      ...rawEpsilonQueenCrossContext,
      _type: 'EpsilonFaceCrossContext',
      epsilonFaceType: 'RhoQueen'
    };

    const rawEpsilonKingCrossContext =
      wheatCrossInHookContextSetFinal
      [wheatRhoKingAtDownwardIndex];

    checkNilWithTypedObject(
      rawEpsilonKingCrossContext,
      'rawEpsilonKingCrossContext',
      'WheatCrossInHookContextFinal');

    const finalEpsilonKingCrossContext = {
      ...rawEpsilonKingCrossContext,
      _type: 'EpsilonFaceCrossContext',
      epsilonFaceType: 'RhoKing'
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
