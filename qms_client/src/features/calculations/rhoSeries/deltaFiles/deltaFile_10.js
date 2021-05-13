import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  getDeltaDatedLongHookContextSet,
  getStrikeCrossSignSet
} from './deltaMiniHub_03';
import {
  checkNilWithArray,
  checkNilWithString
} from './utiltityHubCloneOfDelta';

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
    'Wheat dated long hook context',
    'Delta dated long hook context.'
  )

  const strikeCrossSignSet =
    getStrikeCrossSignSet(
      wheatLongHookName,
      cheeseLongHookName);

  const cheeseDeltaLongHookContext_4 =

}
