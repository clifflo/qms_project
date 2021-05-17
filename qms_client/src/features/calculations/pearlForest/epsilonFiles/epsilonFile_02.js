import * as R from 'ramda';
import {
  filterItemByStringFromList,
  checkNilWithTypedObject,
  checkNilWithString
} from './utilityHubCloneOfEpsilon';
import {
  isValidDeltaFocusEnglish,
  getDeltaDualLongHooksContext_3
} from './deltaHubCloneOfEpsilon';
import {
  getEpsilonDualLongHooksContext_1
} from './epsilonFile_01';

const buildEpsilonDualLongHooksContext_2 =
  epsilonDualLongHooksContext_1 => {

  try{

    const wheatCrossInHookContextSet_3 =
      epsilonDualLongHooksContext_1
      .wheatCrossInHookContextSet_3;

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

      const epsilonCrossContextSetByFocusEnglish =
        filterItemByStringFromList(
          wheatCrossInHookContextSet_3,
          deltaFocusEnglish,
          'deltaFocusEnglish');

      return epsilonCrossContextSetByFocusEnglish;
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

    const epsilonFocusEnvelop = {
      _type: 'Epsilon focus envelop',
      epsilonParentFocusCrossContextSet,
      epsilonSonFocusCrossContextSet,
      epsilonGhostFocusCrossContextSet,
      epsilonMoneyFocusCrossContextSet,
      epsilonBrotherFocusCrossContextSet
    };

    const epsilonDualLongHooksContext_2 = {
      ...epsilonDualLongHooksContext_1,
      epsilonFocusEnvelop,
      _type: 'Epsilon dual long hooks context 2'
    }

    return epsilonDualLongHooksContext_2;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get epsilon long hook context 1.');
  }

}

export const getEpsilonDualLongHooksContext_2 =
  R.compose(
    buildEpsilonDualLongHooksContext_2,
    getEpsilonDualLongHooksContext_1);
