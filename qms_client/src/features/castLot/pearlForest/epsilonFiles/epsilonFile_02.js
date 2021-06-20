import * as R from 'ramda';
import {
  filterItemByStringFromList,
  checkNilWithTypedObject,
  checkNilWithString
} from './_utilityHubByEpsilon';
import {
  isValidDeltaFocusEnglish,
  getDeltaDualLongHooksContext_3
} from './_deltaHubByEpsilon';
import {
  getEpsilonDualLongHooksContext_1
} from './epsilonFile_01';

const buildEpsilonDualLongHooksContext_2 =
  epsilonDualLongHooksContext_1 => {

  try{

    const wheatCrossInHookContextSetFinal =
      epsilonDualLongHooksContext_1
      .wheatCrossInHookContextSetFinal;

    const getEpsilonFocusCrossContextSet =
      deltaFocusEnglish => {

      checkNilWithString(
        deltaFocusEnglish,
        'Delta focus English');

      if(!isValidDeltaFocusEnglish(
        deltaFocusEnglish)){
        throw new Error(
          'Invalid delta focus English: '
          + deltaFocusEnglish);
      }

      const rawEpsilonFocusCrossContextSet =
        filterItemByStringFromList(
          wheatCrossInHookContextSetFinal,
          deltaFocusEnglish,
          'deltaFocusEnglish');

      const typeNameLens =
        R.lens(R.prop('_type'), R.assoc('_type'));

      const typeNameLensMapFunction =
        R.set(
          typeNameLens,
          'Epsilon focus cross context');

      const finalEpsilonFocusCrossContextSet =
        R.map(
          typeNameLensMapFunction,
          rawEpsilonFocusCrossContextSet);

      return finalEpsilonFocusCrossContextSet;
    }

    const epsilonParentFocusCrossContextSet =
      getEpsilonFocusCrossContextSet(
        'DeltaFocusParent');

    const epsilonSonFocusCrossContextSet =
      getEpsilonFocusCrossContextSet(
        'DeltaFocusSon');

    const epsilonGhostFocusCrossContextSet =
      getEpsilonFocusCrossContextSet(
        'DeltaFocusGhost');

    const epsilonMoneyFocusCrossContextSet =
      getEpsilonFocusCrossContextSet(
        'DeltaFocusMoney');

    const epsilonBrotherFocusCrossContextSet =
      getEpsilonFocusCrossContextSet(
        'DeltaFocusBrother');

    const epsilonFocusEnvelop = {
      _type: 'EpsilonFocusEnvelop',
      epsilonParentFocusCrossContextSet,
      epsilonSonFocusCrossContextSet,
      epsilonGhostFocusCrossContextSet,
      epsilonMoneyFocusCrossContextSet,
      epsilonBrotherFocusCrossContextSet
    };

    const epsilonDualLongHooksContext_2 = {
      ...epsilonDualLongHooksContext_1,
      epsilonFocusEnvelop,
      _type: 'EpsilonDualLongHooksContext_2'
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
