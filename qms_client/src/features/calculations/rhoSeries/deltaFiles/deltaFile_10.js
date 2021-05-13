import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  getDeltaDatedLongHookContextSet,
  getCrossStrikeStatusSet
} from './deltaMiniHub_03';
import {
  checkNilWithArray,
  checkNilWithString
} from './utiltityHubCloneOfDelta';

export const
  mapFunctionForWheatLongHookContext_4 =
  (payloadOfMapFunctionForWheatLongHookContext_4,
  longHookDownwawrdIndex) => {

  const {
    wheatLongHookCrossContextSet_4,
    cheeseLongHookCrossContextSet_3,
    crossStrikeStatusSet
  } = payloadForMapFunctionOfWheatLongHookContext_4;

  checkNilWithArray(
    strikeCrossSignSet,
    'Strike cross sign set');

  checkNilWithArray(
    wheatLongHookCrossContextSet_4,
    'Wheat long hook cross context set 4');

  checkNilWithNumber(
    longHookDownwawrdIndex,
    'Long hook downward index');

  const respectiveWheatLongHookCrossContext_4 =
    wheatLongHookCrossContextSet_4[
      longHookDownwawrdIndex];

  checkNilWithTypedObject(
    respectiveWheatLongHookCrossContext_4,
    'Respective wheat long hook cross context 4',
    'Long hook cross context 4');

  const respectiveCrossStrikeStatus =
    crossStrikeStatusSet[
      longHookDownwawrdIndex];

  checkNilWithNumber(
    respectiveCrossStrikeStatus,
    'Respecive cross strike status');

  const respectiveCheeseLongHookCrossContext_3 =
    cheeseLongHookContextSet_3[
      longHookDownwawrdIndex];

  checkNilWithTypedObject(
    respectiveCheeseLongHookCrossContext_3,
    'Respective cheese long hook cross context 3',
    'Long hook cross context 3');

  const wheatLongHookCrossContextWithStrike_5 = {
    ...wheatLongHookCrossContextSet_4,
    longHookCrossStrikeStatus: 'Cross is strike.',
    cheeseLongHookCrossContextAfterStrike_3:
      respectiveCheeseLongHookCrossContext_3,
    _type: 'Long hook cross context 5'
  }

  const wheatLongHookCrossContextWithoutStrike_5 = {
    ...wheatLongHookCrossContextSet_4,
    longHookCrossStrikeStatus: 'Cross is silent.',
    _type: 'Long hook cross context 5'
  }

  if(respectiveCrossStrikeStatus ==
    'Strike'){
    return wheatLongHookCrossContextWithStrike_5;
  }
  else if(
    respectiveCrossStrikeStatus ==
    'Silent') {
    return wheatLongHookCrossContextWithoutStrike_5;
  }
  else {
    throw new Error(
      'Respective cross strike status can only '
      + 'have two situations: Silent and Strike.');
  }
}
