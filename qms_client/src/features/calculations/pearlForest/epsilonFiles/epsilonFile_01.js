import * as R from 'ramda';
import {
  filterItemByStringFromList,
  checkNilWithTypedObject,
  checkNilWithString
} from './utilityHubCloneOfEpsilon';
import {
  isValidDeltaFocusEnglish,
  getDeltaLongHookContext_8
} from './deltaHubCloneOfEpsilon';

const buildEpsilonLongHookContext_1 =
  deltaLongHookContext_8 => {

  try{
    const {
      rhoJackAtDownwardIndex,
      rhoQueenAtDownwardIndex,
      rhoKingAtDownwardIndex,
      wheatCrossInHookContextSet_3
    } =
    deltaLongHookContext_8
    .deltaWheatHookContext;

    const rawEpsilonJackCrossContext =
      wheatCrossInHookContextSet_3
      [rhoJackAtDownwardIndex];

    checkNilWithTypedObject(
      rawEpsilonJackCrossContext,
      'Raw epsilon jack cross context',
      'Wheat cross in hook context 3');

    const finalEpsilonJackCrossContext = {
      ...rawEpsilonJackCrossContext,
      _type: 'Epsilon face cross context'
    };

    const rawEpsilonQueenCrossContext =
      wheatCrossInHookContextSet_3
      [rhoQueenAtDownwardIndex];

    checkNilWithTypedObject(
      rawEpsilonQueenCrossContext,
      'Raw epsilon queen cross context',
      'Wheat cross in hook context 3');

    const finalEpsilonQueenCrossContext = {
      ...rawEpsilonQueenCrossContext,
      _type: 'Epsilon face cross context'
    };

    const rawEpsilonKingCrossContext =
      wheatCrossInHookContextSet_3
      [rhoKingAtDownwardIndex];

    checkNilWithTypedObject(
      rawEpsilonKingCrossContext,
      'Raw epsilon king cross context',
      'Wheat cross in hook context 3');

    const finalEpsilonKingCrossContext = {
      ...rawEpsilonKingCrossContext,
      _type: 'Epsilon face cross context'
    };

    // Please be noted that I only consider
    // shown wheat crosses. Hidden wheat cross
    // are not considered.
    const getEpsilonCrossContextSetByFocusEnglish =
      deltaFocusEnglish => {

      checkNilWithString(
        deltaFocusEnglish,
        'Delta focus english');

      if(!isValidDeltaFocusEnglish(
        deltaFocusEnglish)){
        throw new Error(
          'Invalid delta focus english: '
          + deltaFocusEnglish);
      }

      const rawEpsilonCrossContextSetByFocusEnglish =
        filterItemByStringFromList(
          wheatCrossInHookContextSet_3,
          deltaFocusEnglish,
          'deltaFocusEnglish');

      const finalEpsilonCrossContextSetByFocusEnglish = {
        ...rawEpsilonCrossContextSetByFocusEnglish,
        _type: 'Epsilon cross context'
      };

      return finalEpsilonCrossContextSetByFocusEnglish;
    }

    const epsilonParentFocusCrossContextSet =
      getEpsilonCrossContextSetByFocusEnglish(
        'Delta focus parent');

    const epsilonSonFocusCrossContextSet =
      getEpsilonCrossContextSetByFocusEnglish(
        'Delta focus son');

    const epsilonGhostFocusCrossContextSet =
      getEpsilonCrossContextSetByFocusEnglish(
        'Delta focus ghost');

    const epsilonMoneyFocusCrossContextSet =
      getEpsilonCrossContextSetByFocusEnglish(
        'Delta focus money');

    const epsilonBrotherFocusCrossContextSet =
      getEpsilonCrossContextSetByFocusEnglish(
        'Delta focus brother');

    const epsilonEnvelop_1 = {
      _type: 'Epsilon envelop 1',
      ...deltaWheatHookContext_8,
      epsilonJackCrossContext:
        finalEpsilonJackCrossContext,
      epsilonQueenCrossContext:
        finalEpsilonQueenCrossContext,
      epsilonKingCrossContext:
        finalEpsilonKingCrossContext,
      epsilonParentFocusCrossContextSet,
      epsilonBrotherFocusCrossContextSet,
      epsilonSonFocusCrossContextSet,
      epsilonMoneyFocusCrossContextSet,
      epsilonGhostFocusCrossContextSet
    }

    const epsilonLongHookContext_1 = {
      ...deltaWheatHookContext_8,
      epsilonEnvelop_1,
      _type: 'Epsilon long hook context 1'
    }

    return epsilonLongHookContext_1;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get epsilon long hook context 1.');
  }

}

export const getEpsilonLongHookContext_1 =
  R.compose(
    buildEpsilonLongHookContext_1,
    getDeltaLongHookContext_8);
