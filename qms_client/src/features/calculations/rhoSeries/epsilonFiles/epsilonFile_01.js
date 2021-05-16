import * as R from 'ramda';
import {
  filterItemByStringFromList,
  checkNilWithTypedObject
} from './utilityHubCloneOfEpsilon';
import {
  isValidDeltaFocusEnglish,
  getDeltaLongHookContext_8
} from './deltaHubCloneOfEpsilon';

const buildEpsilonLongHookContext_1 =
  deltaWheatHookContext_8 => {

  try{
    const {
      rhoJackAtDownwardIndex,
      rhoQueenAtDownwardIndex,
      rhoKingAtDownwardIndex
    } = deltaWheatHookContext_8;

    const rawEpsilonJackCrossContext =
      wheatCrossInHookContextSet_3
      [wheatRhoJackAtDownwardIndex];

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

      const
      finalEpsilonCrossContextSetByFocusEnglish = {
        ...rawEpsilonCrossContextSetByFocusEnglish,
        _type: 'Epsilon cross context'
      };

      return
      finalEpsilonCrossContextSetByFocusEnglish;
    }

    const epsilonParentFocusCrossContextSet =
      getEpsilonCrossContextSetByDeltaFocusEnglish(
        'Delta focus parent');

    const epsilonSonFocusCrossContextSet =
      getEpsilonCrossContextSetByDeltaFocusEnglish(
        'Delta focus son');

    const epsilonGhostFocusCrossContextSet =
      getEpsilonCrossContextSetByDeltaFocusEnglish(
        'Delta focus ghost');

    const epsilonMoneyFocusCrossContextSet =
      getEpsilonCrossContextSetByDeltaFocusEnglish(
        'Delta focus money');

    const epsilonBrotherFocusCrossContextSet =
      getEpsilonCrossContextSetByDeltaFocusEnglish(
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

    
