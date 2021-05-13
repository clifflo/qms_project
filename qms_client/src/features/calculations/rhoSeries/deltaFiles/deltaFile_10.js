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
  (wheatLongHookCrossContextSet_4,
  crossStrikeStatusSet,
  longHookDownwawrdIndex) => {

  const {
    wheatLongHookCrossContextSet_4,
    cheeseLongHookCrossContextSet_3,
    crossStrikeStatusSet
  } = payloadForMapFunctionForWheatLongHookContext_4

  checkNilWithArray(
    strikeCrossSignSet,
    'Strike cross sign set');

  checkNilWithArray(
    wheatLongHookCrossContextSet_4,
    'Wheat long hook cross context set 4');

  checkNilWithNumber(
    longHookDownwawrdIndex,
    'Long hook downward index');

  const respectiveWheatLongHookCrossContext =
    wheatLongHookCrossContextSet_4[
      longHookDownwawrdIndex];

  const respectiveCrossStrikeStatus =
    crossStrikeStatusSet[
      longHookDownwawrdIndex];

  const wheatLongHookCrossContext_5 = {
    ...wheatLongHookCrossContextSet_4,
    longHookCrossIsStrike:
      respectiveCrossStrikeStatus
  }
}

const getDeltaFullLongHookContext =
  (askingDayTrunkChinese,
  wheatLongHookName,
  cheeseLongHookName) => {

  checkNilWithString(
    wheatLongHookName,
    'Wheat long hook name');

  checkNilWithString(
    cheeseLongHookName,
    'Cheese long hook name');

  const deltaDatedLongHookContextSet =
    getDeltaDatedLongHookContextSet(
      askingDayTrunkChinese);

  checkNilWithArray(
    deltaDatedLongHookContextSet,
    'Delta dated long hook context set');

  const wheatDeltaDatedLongHookContext =
    getItemByStringFromList(
      deltaDatedLongHookContextSet,
      wheatLongHookName,
      'longHookName');

  checkNilWithTypedObject(
    wheatDeltaDatedLongHookContext,
    'Wheat delta dated long hook context',
    'Delta dated long hook context'
  )

  const crossStrikeStatusSet =
    getCrossStrikeStatusSet(
      wheatLongHookName,
      cheeseLongHookName);

  const cheeseDeltaLongHookContext_4 =
    getItemByStringFromList(
      deltaLongHookContextSet_4,
      cheeseLongHookName,
      'longHookName');


}
