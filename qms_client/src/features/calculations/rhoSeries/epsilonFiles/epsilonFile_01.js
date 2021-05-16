import * as R from 'ramda';
import {
  filterItemByStringFromList
} from './utilityHubCloneOfEpsilon';

const getEpsilonLongHookContext_1 =
  deltaWheatHookContext_8 => {

  const {
    rhoJackAtDownwardIndex,
    rhoQueenAtDownwardIndex,
    rhoKingAtDownwardIndex
  } = deltaWheatHookContext_8;

  const rawEpsilonJackCrossContext =
    wheatCrossInHookContextSet_3
    [wheatRhoJackAtDownwardIndex];

  const rawEpsilonQueenCrossContext =
    wheatCrossInHookContextSet_3
    [rhoQueenAtDownwardIndex];

  const rawEpsilonKingCrossContext =
    wheatCrossInHookContextSet_3
      [rhoKingAtDownwardIndex];

  const getEpsilonCrossContextSetByFocus =
    deltaFocusEnglish => {

    checkNilWithString(
      deltaFocusEnglish,
      'Delta focus english');

    const epsilonCrossContextSetByFocus =
      filterItemByStringFromList(
        wheatCrossInHookContextSet_3,
        'Delta focus parent',
        'deltaFocusEnglish');
  }

  const rawEpsilonParentFocusCrossContextSet =
    filterItemByStringFromList(
      wheatCrossInHookContextSet_3,
      'Delta focus parent',
      'deltaFocusEnglish');
}
